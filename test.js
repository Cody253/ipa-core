// test.js

const { parseUnit, parseConfig } = require("./parser");

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
  }),

  // Another single consonant
  l: parseUnit("ɬ")
};

console.log("=== Orthography Config ===");
console.log(JSON.stringify(orthography, null, 2));

const parsed = parseConfig(orthography);
console.log("\n=== Parsed Output ===");
console.log(JSON.stringify(parsed, null, 2));

// Optional: inspect a single phoneme
const singlePhoneme = parsed.k;
console.log("\n=== Single Phoneme 'k' Features ===");
console.log(singlePhoneme);

// Optional: inspect a sequence
const affricateSequence = parsed.x̱;
console.log("\n=== Affricate Sequence 'x̱' Features ===");
console.log(affricateSequence);