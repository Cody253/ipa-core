// parser.js

const core = require("./core");
const modifiers = require("./modifiers");
const rules = require("./rules");

/**
 * Parses a single phoneme with optional modifiers.
 * @param {string} base - Base IPA symbol
 * @param {string[]} appliedModifiers - List of modifier keys
 * @returns {object} - Full feature object
 */
function parsePhoneme(base, appliedModifiers = []) {
  const baseObj = core[base];
  if (!baseObj) {
    throw new Error(`Unknown base phoneme: ${base}`);
  }

  // Start with type and airstream from core
  let phoneme = {
    base,
    type: baseObj.type,          // consonant, vowel, etc.
    airstream: baseObj.airstream, // pulmonic, egressive_glottalic, etc.
    features: { ...baseObj.features },
    modifiersApplied: []
  };

  for (const modKey of appliedModifiers) {
    const mod = modifiers[modKey];
    if (!mod) {
      throw new Error(`Unknown modifier: ${modKey}`);
    }

    const incompatible = rules[modKey]?.incompatibleWith || [];
    const conflict = phoneme.modifiersApplied.find(applied => incompatible.includes(applied));
    if (conflict) {
      console.warn(`Modifier "${modKey}" is incompatible with already applied "${conflict}". Skipping.`);
      continue;
    }

    if (mod.features) {
      phoneme.features = { ...phoneme.features, ...mod.features };
    } else {
      phoneme.features[modKey] = true;
    }

    phoneme.modifiersApplied.push(modKey);
  }

  return phoneme;
}


/**
 * Helper to create a phoneme unit for orthography config.
 * Can be a single phoneme or a sequence object.
 * @param {string|object} unit - Single base or a sequence object
 * @param {string[]} appliedModifiers - Modifiers for single phoneme (ignored if sequence)
 * @returns {object}
 */
function parseUnit(unit, sequenceModifier = null) {
  // if unit is a string, treat as single phoneme
  if (typeof unit === "string") {
    return { type: "single", base: unit, modifiers: [] };
  }

  // if unit is an object with multiple phonemes, treat as sequence
  if (typeof unit === "object") {
    const sequence = [];
    for (const base in unit) {
      const mods = unit[base] || [];
      sequence.push({ base, modifiers: mods });
    }
    const type = sequenceModifier || "sequence";
    return { type, sequence };
  }

  throw new Error(`Invalid unit: ${unit}`);
}

/**
 * Validates a sequence against its rules.
 * @param {object} sequenceObj - { type, components }
 * @returns {object} - validated sequence or throws error
 */
function validateSequence(sequenceObj) {
  const { type, components } = sequenceObj;
  const rule = rules[type];
  
  if (!rule) {
    return sequenceObj;
  }

  if (rule.length && components.length !== rule.length) {
    throw new Error(`${type} requires exactly ${rule.length} components, got ${components.length}`);
  }

  if (rule.minLength && components.length < rule.minLength) {
    throw new Error(`${type} requires at least ${rule.minLength} components, got ${components.length}`);
  }

  if (rule.requires) {
    for (const req of rule.requires) {
      const component = components[req.position];
      if (!component) {
        throw new Error(`${type} requires component at position ${req.position}`);
      }
      if (req.type && component.type !== req.type) {
        throw new Error(`${type} requires position ${req.position} to be type "${req.type}", got "${component.type}"`);
      }
      if (req.features) {
        for (const [key, value] of Object.entries(req.features)) {
          if (component.features[key] !== value) {
            throw new Error(`${type} requires position ${req.position} to have features.${key}="${value}", got "${component.features[key]}"`);
          }
        }
      }
    }
  }

  if (rule.requiresAll) {
    for (const req of rule.requiresAll) {
      const invalid = components.find(c => req.type && c.type !== req.type);
      if (invalid) {
        throw new Error(`${type} requires all components to be type "${req.type}", but found "${invalid.type}"`);
      }
    }
  }

  if (rule.requiresFromPosition) {
    for (const [pos, reqs] of Object.entries(rule.requiresFromPosition)) {
      const component = components[parseInt(pos)];
      if (!component) {
        throw new Error(`${type} requires component at position ${pos}`);
      }
      for (const req of reqs) {
        if (req.type && component.type !== req.type) {
          throw new Error(`${type} requires position ${pos} to be type "${req.type}", got "${component.type}"`);
        }
      }
    }
  }

  return sequenceObj;
}

/**
 * Parses a unit (single or sequence) into full feature objects
 * @param {object} unitObj
 * @returns {object|array} - Parsed phoneme object or array of parsed phonemes
 */
function parseUnitObj(unitObj) {
  if (unitObj.type === "single") {
    return parsePhoneme(unitObj.base, unitObj.modifiers);
  }

  if (unitObj.type === "sequence" || unitObj.type === "affricate" || unitObj.type === "diphthong" || unitObj.type === "syllable" || unitObj.type === "coarticulation") {
    const components = unitObj.sequence.map((u, index) => {
      const parsed = parsePhoneme(u.base, u.modifiers);
      parsed.position = index;
      return parsed;
    });
    const sequenceObj = { type: unitObj.type, components };
    return validateSequence(sequenceObj);
  }

  throw new Error(`Unknown unit type: ${unitObj.type}`);
}

/**
 * Parses an entire orthography config.
 * Supports:
 * 1) Full parseUnit() objects
 * 2) Single-phoneme shorthand: ["base", ["modifiers"]]
 * 3) Sequence shorthand: [["base1", ["mods1"]], ["base2", ["mods2"]], ...]
 * @param {object} config - { letter: parseUnit(...) OR shorthand }
 * @returns {object} parsed - { letter: parsedPhoneme OR array if sequence }
 */
function parseConfig(config) {
  const parsed = {};

  for (const letter in config) {
    const val = config[letter];

    let unitObj;

    // Already a parseUnit object
    if (val && typeof val === "object" && val.type && (val.type === "single" || val.sequence)) {
      unitObj = val;
    }
    // Shorthand single phoneme: ["base", ["modifiers"]]
    else if (Array.isArray(val) && typeof val[0] === "string") {
      const base = val[0];
      const mods = Array.isArray(val[1]) ? val[1] : [];
      unitObj = { type: "single", base, modifiers: mods };
    }
    // Shorthand sequence: [["base1", ["mods1"]], ["base2", ["mods2"]], ..., "affricate"]
    else if (Array.isArray(val) && val.every(el => Array.isArray(el) || typeof el === "string")) {
      const stringElements = val.filter(el => typeof el === "string");
      const sequenceModifier = stringElements[0] || null;
      const arrayElements = val.filter(el => Array.isArray(el));
      const sequence = arrayElements.map(([base, mods]) => ({ base, modifiers: Array.isArray(mods) ? mods : [] }));
      unitObj = { type: sequenceModifier || "sequence", sequence };
    }
    else {
      throw new Error(`Invalid orthography entry for "${letter}": ${JSON.stringify(val)}`);
    }

    parsed[letter] = parseUnitObj(unitObj);
  }

  return parsed;
}

module.exports = { parsePhoneme, parseUnit, parseConfig };