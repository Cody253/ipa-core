/**
 * IPA SYMBOL REFERENCE
 * Copy/paste symbols as needed
 */
// CONSONANT
// b ʙ ɓ c ç ɕ d ð ɖ ɗ f ɡ
// ɢ ɠ ʛ ɣ h ħ ʜ ɦ j ʝ ɟ ʄ
// k l ʟ ɬ ɭ ɮ ʎ m ɱ n ɴ ɲ
// ɳ ŋ p ɸ q r ʀ ɹ ɺ ɻ ɽ ɾ
// ʁ s ʂ ʃ t ʈ ɥ ɰ v ʋ ⱱ w
// ʍ x z ʐ ʑ ʒ ʔ ʕ ʡ ʢ ǀ ǁ
// ǂ ǃ ʘ β θ χ
// VOWEL
// æ ɐ ɑ ɒ e ə ɛ ɘ ɜ ɞ ɤ i
// ɪ ɨ o ø œ ɔ ɵ u ʉ ɯ ʊ y
// ʏ

/**
 * MODIFIER REFERENCE
 * modifier(appliesTo)
 */
// advanced(consonant) | advanced_tongue_root(vowel) | affricate(sequence)
// apical(consonant) | aspirated(consonant) | breathy_voice(vowel, consonant)
// centralized(vowel) | coarticulation(sequence) | creaky_voice(vowel, consonant)
// dental(consonant) | diphthong(sequence) | downstep(vowel, consonant)
// ejective(consonant) | extra_high_tone(vowel, consonant)
// extra_low_tone(vowel, consonant) | extra_short(vowel, consonant)
// falling_tone(vowel, consonant) | high_tone(vowel, consonant) | labialized(consonant)
// laminal(consonant) | length_half_long(vowel, consonant) | length_long(vowel, consonant)
// less_rounded(vowel) | linguolabial(consonant) | low_tone(vowel, consonant)
// lowered(vowel, consonant) | mid_centralized(vowel) | more_rounded(vowel)
// nasalized(vowel, consonant) | no_audible_release(consonant) | non_syllabic(vowel)
// palatalized(consonant) | pharyngealized(consonant) | raised(vowel, consonant)
// retracted(consonant) | retracted_tongue_root(vowel) | rhoticity(vowel)
// rising_tone(vowel, consonant) | syllabic(consonant) | syllable(sequence)
// upstep(vowel, consonant) | velarized(consonant) | voiced(consonant)
// voiceless(consonant)

/**
 * SEQUENCE MODIFIERS
 * Add as last element in array
 */
// diphthong
// affricate
// syllable
// coarticulation

/**
 * ORTHOGRAPHY CONFIG
 * Use parseConfig() at runtime
 *
 * Fill in your orthography below; examples are commented out.
 */

const { parseConfig } = require('./parser.js');

const orthography = {
// k: ["k", ["aspirated"]],
// a: ["ɑ", ["more_rounded"]],
// x̱: [
//   ["k", ["ejective", "aspirated"]],
//   ["x", []],
//   "affricate"
// ],
// l: ["ɬ"]
};

module.exports = parseConfig(orthography);