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

  let features = { ...baseObj.features };
  const modifiersApplied = [];

  for (const modKey of appliedModifiers) {
    const mod = modifiers[modKey];
    if (!mod) {
      throw new Error(`Unknown modifier: ${modKey}`);
    }

    const incompatible = rules[modKey]?.incompatibleWith || [];
    const conflict = modifiersApplied.find(applied => incompatible.includes(applied));
    if (conflict) {
      console.warn(`Modifier "${modKey}" is incompatible with already applied "${conflict}". Skipping.`);
      continue;
    }

    if (mod.features) {
      features = { ...features, ...mod.features };
    } else {
      features[modKey] = true;
    }

    modifiersApplied.push(modKey);
  }

  return {
    base,
    symbol: baseObj.symbol || base,
    features,
    modifiersApplied
  };
}

/**
 * Helper to create a phoneme unit for orthography config.
 * Can be a single phoneme or a sequence object.
 * @param {string|object} unit - Single base or a sequence object
 * @param {string[]} appliedModifiers - Modifiers for single phoneme (ignored if sequence)
 * @returns {object}
 */
function parseUnit(unit, appliedModifiers = []) {
  // if unit is a string, treat as single phoneme
  if (typeof unit === "string") {
    return { type: "single", base: unit, modifiers: appliedModifiers };
  }

  // if unit is an object with multiple phonemes, treat as sequence
  if (typeof unit === "object") {
    const sequence = [];
    for (const base in unit) {
      const mods = unit[base] || [];
      sequence.push({ base, modifiers: mods });
    }
    return { type: "sequence", sequence };
  }

  throw new Error(`Invalid unit: ${unit}`);
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

  if (unitObj.type === "sequence") {
    return unitObj.sequence.map(u => parsePhoneme(u.base, u.modifiers));
  }

  throw new Error(`Unknown unit type: ${unitObj.type}`);
}

/**
 * Parses an entire orthography config.
 * @param {object} config - { letter: parseUnit(...) }
 * @returns {object} parsed - { letter: parsedPhoneme OR array if sequence }
 */
function parseConfig(config) {
  const parsed = {};
  for (const letter in config) {
    parsed[letter] = parseUnitObj(config[letter]);
  }
  return parsed;
}

module.exports = { parsePhoneme, parseUnit, parseConfig };