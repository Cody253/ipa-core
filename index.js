// Import your data layers
const core = require("./core.js");           // base consonants & vowels
const modifiers = require("./modifiers.js"); // diacritics, tones, suprasegmentals
const rules = require("./rules.js");         // modifier compatibility rules
const parser = require("./parser.js");       // parser (parsePhoneme, parseUnit, parseConfig)
const dictionary = require("./dictionary.js");      //instructional definitions
const getDefinitions = require("./get-definitions.js");    //compiles and formats instructions

// Export the layers so users can access them if needed
const { parsePhoneme, parseUnit, parseConfig } = parser;

module.exports = {
  core,
  modifiers,
  rules,
  parser,
  parsePhoneme,
  parseUnit,
  parseConfig,
  dictionary,
  getDefinitions
};