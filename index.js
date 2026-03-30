// Import your data layers
const core = require("./core");           // base consonants & vowels
const modifiers = require("./modifiers"); // diacritics, tones, suprasegmentals
const rules = require("./rules");         // modifier compatibility rules

// Export the layers so users can access them if needed
module.exports = {
  core,
  modifiers,
  rules
};

