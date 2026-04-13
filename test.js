// test.js

const { parseUnit, parseConfig } = require("./parser");
const { getDefinitions } = require("./get-definitions");

// Sample orthography config
const orthography = {
  // A single consonant with a modifier
  k: parseUnit("k", ["aspirated"]),

  // A single vowel with a modifier
  a: parseUnit("ɑ", ["more_rounded"]),

  // A consonant sequence (affricate)
  x̱: parseUnit({
    k: ["ejective", "aspirated"],
    x: []
  }, "affricate"),

  // Another single consonant
  l: parseUnit("ɬ"),

  // Consonant with place modifiers
  t̪: parseUnit("t", ["dental"]),
  s̻: parseUnit("s", ["laminal"]),
  k̠: parseUnit("k", ["retracted"])
};

// Another sample orthography config using shorthand
const shorthandOrthography = {
  // A single consonant
  k: ["k"],

  // A single vowel with a modifier
  a: ["ɑ", ["more_rounded"]],

  // A consonant sequence (affricate) with new string shorthand
  x̱: [
    ["k", ["ejective", "aspirated"]],
    ["x", []],
    "affricate"
  ],

  // Diphthong example
  ai: [
    ["ɑ"],
    ["i"],
    "diphthong"
  ],

  // Syllable example (e.g., CV - consonant followed by vowel)
  na: [
    ["n"],
    ["ɑ"],
    "syllable"
  ],

  // Coarticulation example (e.g., labial-velar)
  w: [
    ["ʍ"],
    "coarticulation"
  ],

  // Plain sequence (no sequence modifier)
  kl: [
    ["k"],
    ["l"]
  ],

  // Another single consonant
  l: ["ɬ"]
};

console.log("=== Orthography Config ===");
console.log(JSON.stringify(orthography, null, 2));

const parsed = parseConfig(orthography);
console.log("\n=== Parsed Output ===");
console.log(JSON.stringify(parsed, null, 2));

// Optional: inspect a single phoneme
const singlePhoneme = parsed.k;
console.log("\n=== Single Phoneme 'k' Features ===");
console.log(JSON.stringify(singlePhoneme, null, 2));

// Optional: inspect a sequence
const affricateSequence = parsed.x̱;
console.log("\n=== Affricate Sequence 'x̱' Features ===");
console.log(JSON.stringify(affricateSequence, null, 2));

// const parsedShorthand = parseConfig(shorthandOrthography);
// console.log("\n=== Parsed Output2 ===");
// console.log(JSON.stringify(parsedShorthand, null, 2));

// Definitions


console.log("\n=== Definitions for 'k' ===");
console.log(getDefinitions(parsed.k));

console.log("\n=== Definitions for 'x̱' (affricate) ===");
console.log(getDefinitions(parsed.x̱));

console.log("\n=== Definitions for 'a' (vowel) ===");
console.log(getDefinitions(parsed.a));

