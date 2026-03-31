// Import your data layers
import core from "./core.js";           // base consonants & vowels
import modifiers from "./modifiers.js"; // diacritics, tones, suprasegmentals
import rules from "./rules.js";         // modifier compatibility rules
import parser from "./parser.js";       // parser (parsePhoneme, parseUnit, parseConfig)

// Export the layers so users can access them if needed
export const { parsePhoneme, parseUnit, parseConfig } = parser;
export { core, modifiers, rules, parser };