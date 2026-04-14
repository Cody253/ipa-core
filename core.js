// IPA elements in json notation
const core = {

    //consonants
    //pulmonic

    //plosive
    'p': { type: "consonant", features: { manner: "plosive", place: "bilabial", voicing: "voiceless" }, airstream: "pulmonic" },
    'b': { type: "consonant", features: { manner: "plosive", place: "bilabial", voicing: "voiced" }, airstream: "pulmonic" },
    't': { type: "consonant", features: { manner: "plosive", place: "alveolar", voicing: "voiceless" }, airstream: "pulmonic" },
    'd': { type: "consonant", features: { manner: "plosive", place: "alveolar", voicing: "voiced" }, airstream: "pulmonic" },
    'ʈ': { type: "consonant", features: { manner: "plosive", place: "retroflex", voicing: "voiceless" }, airstream: "pulmonic" },
    'ɖ': { type: "consonant", features: { manner: "plosive", place: "retroflex", voicing: "voiced" }, airstream: "pulmonic" },
    'c': { type: "consonant", features: { manner: "plosive", place: "palatal", voicing: "voiceless" }, airstream: "pulmonic" },
    'ɟ': { type: "consonant", features: { manner: "plosive", place: "palatal", voicing: "voiced" }, airstream: "pulmonic" },
    'k': { type: "consonant", features: { manner: "plosive", place: "velar", voicing: "voiceless" }, airstream: "pulmonic" },
    'ɡ': { type: "consonant", features: { manner: "plosive", place: "velar", voicing: "voiced" }, airstream: "pulmonic" },
    'q': { type: "consonant", features: { manner: "plosive", place: "uvular", voicing: "voiceless" }, airstream: "pulmonic" },
    'ɢ': { type: "consonant", features: { manner: "plosive", place: "uvular", voicing: "voiced" }, airstream: "pulmonic" },
    'ʔ': { type: "consonant", features: { manner: "plosive", place: "glottal", voicing: "voiceless" }, airstream: "pulmonic" },
    //nasal
    'm': { type: "consonant", features: { manner: "nasal", place: "bilabial", voicing: "voiced" }, airstream: "pulmonic" },
    'ɱ': { type: "consonant", features: { manner: "nasal", place: "labiodental", voicing: "voiced" }, airstream: "pulmonic" },
    'n': { type: "consonant", features: { manner: "nasal", place: "alveolar", voicing: "voiced" }, airstream: "pulmonic" },
    'ɳ': { type: "consonant", features: { manner: "nasal", place: "retroflex", voicing: "voiced" }, airstream: "pulmonic" },
    'ɲ': { type: "consonant", features: { manner: "nasal", place: "palatal", voicing: "voiced" }, airstream: "pulmonic" },
    'ŋ': { type: "consonant", features: { manner: "nasal", place: "velar", voicing: "voiced" }, airstream: "pulmonic" },
    'ɴ': { type: "consonant", features: { manner: "nasal", place: "uvular", voicing: "voiced" }, airstream: "pulmonic" },
    //trill
    'ʙ': { type: "consonant", features: { manner: "trill", place: "bilabial", voicing: "voiced" }, airstream: "pulmonic" },
    'r': { type: "consonant", features: { manner: "trill", place: "alveolar", voicing: "voiced" }, airstream: "pulmonic" },
    'ʀ': { type: "consonant", features: { manner: "trill", place: "uvular", voicing: "voiced" }, airstream: "pulmonic" },
    //tap or flap
    'ⱱ': { type: "consonant", features: { manner: "tap/flap", place: "labiodental", voicing: "voiced" }, airstream: "pulmonic" },
    'ɾ': { type: "consonant", features: { manner: "tap/flap", place: "alveolar", voicing: "voiced" }, airstream: "pulmonic" },
    'ɽ': { type: "consonant", features: { manner: "tap/flap", place: "retroflex", voicing: "voiced" }, airstream: "pulmonic" },
    //fricative
    'ɸ': { type: "consonant", features: { manner: "fricative", place: "bilabial", voicing: "voiceless" }, airstream: "pulmonic" },
    'f': { type: "consonant", features: { manner: "fricative", place: "labiodental", voicing: "voiceless" }, airstream: "pulmonic" },
    'θ': { type: "consonant", features: { manner: "fricative", place: "dental", voicing: "voiceless" }, airstream: "pulmonic" },
    's': { type: "consonant", features: { manner: "fricative", place: "alveolar", voicing: "voiceless" }, airstream: "pulmonic" },
    'ʃ': { type: "consonant", features: { manner: "fricative", place: "postalveolar", voicing: "voiceless" }, airstream: "pulmonic" },
    'ʂ': { type: "consonant", features: { manner: "fricative", place: "retroflex", voicing: "voiceless" }, airstream: "pulmonic" },
    'ç': { type: "consonant", features: { manner: "fricative", place: "palatal", voicing: "voiceless" }, airstream: "pulmonic" },
    'x': { type: "consonant", features: { manner: "fricative", place: "velar", voicing: "voiceless" }, airstream: "pulmonic" },
    'χ': { type: "consonant", features: { manner: "fricative", place: "uvular", voicing: "voiceless" }, airstream: "pulmonic" },
    'ħ': { type: "consonant", features: { manner: "fricative", place: "pharyngeal", voicing: "voiceless" }, airstream: "pulmonic" },
    'h': { type: "consonant", features: { manner: "fricative", place: "glottal", voicing: "voiceless" }, airstream: "pulmonic" },
    'β': { type: "consonant", features: { manner: "fricative", place: "bilabial", voicing: "voiced" }, airstream: "pulmonic" },
    'v': { type: "consonant", features: { manner: "fricative", place: "labiodental", voicing: "voiced" }, airstream: "pulmonic" },
    'ð': { type: "consonant", features: { manner: "fricative", place: "dental", voicing: "voiced" }, airstream: "pulmonic" },
    'z': { type: "consonant", features: { manner: "fricative", place: "alveolar", voicing: "voiced" }, airstream: "pulmonic" },
    'ʒ': { type: "consonant", features: { manner: "fricative", place: "postalveolar", voicing: "voiced" }, airstream: "pulmonic" },
    'ʐ': { type: "consonant", features: { manner: "fricative", place: "retroflex", voicing: "voiced" }, airstream: "pulmonic" },
    'ʝ': { type: "consonant", features: { manner: "fricative", place: "palatal", voicing: "voiced" }, airstream: "pulmonic" },
    'ɣ': { type: "consonant", features: { manner: "fricative", place: "velar", voicing: "voiced" }, airstream: "pulmonic" },
    'ʁ': { type: "consonant", features: { manner: "fricative", place: "uvular", voicing: "voiced" }, airstream: "pulmonic" },
    'ʕ': { type: "consonant", features: { manner: "fricative", place: "pharyngeal", voicing: "voiced" }, airstream: "pulmonic" },
    'ɦ': { type: "consonant", features: { manner: "fricative", place: "glottal", voicing: "voiced" }, airstream: "pulmonic" },
    // LATERAL FRICATIVES
    'ɬ': { type: "consonant", features: { manner: "lateral fricative", place: "alveolar", voicing: "voiceless" }, airstream: "pulmonic" },
    'ɮ': { type: "consonant", features: { manner: "lateral fricative", place: "alveolar", voicing: "voiced" }, airstream: "pulmonic" },
    //aproximant
    'ʋ': { type: "consonant", features: { manner: "approximant", place: "labiodental", voicing: "voiced" }, airstream: "pulmonic" },
    'ɹ': { type: "consonant", features: { manner: "approximant", place: "alveolar", voicing: "voiced" }, airstream: "pulmonic" },
    'ɻ': { type: "consonant", features: { manner: "approximant", place: "retroflex", voicing: "voiced" }, airstream: "pulmonic" },
    'j': { type: "consonant", features: { manner: "approximant", place: "palatal", voicing: "voiced" }, airstream: "pulmonic" },
    'ɰ': { type: "consonant", features: { manner: "approximant", place: "velar", voicing: "voiced" }, airstream: "pulmonic" },
    //lateral approximant
    'l': { type: "consonant", features: { manner: "lateral approximant", place: "alveolar", voicing: "voiced" }, airstream: "pulmonic" },
    'ɭ': { type: "consonant", features: { manner: "lateral approximant", place: "retroflex", voicing: "voiced" }, airstream: "pulmonic" },
    'ʎ': { type: "consonant", features: { manner: "lateral approximant", place: "palatal", voicing: "voiced" }, airstream: "pulmonic" },
    'ʟ': { type: "consonant", features: { manner: "lateral approximant", place: "velar", voicing: "voiced" }, airstream: "pulmonic" },
    //non-pulmonic
    //implosive
    'ɓ': { type: "consonant", features: { manner: "plosive", place: "bilabial", voicing: "voiced" }, airstream: "glottalic ingressive" },
    'ɗ': { type: "consonant", features: { manner: "plosive", place: "alveolar", voicing: "voiced" }, airstream: "glottalic ingressive" },
    'ʄ': { type: "consonant", features: { manner: "plosive", place: "palatal", voicing: "voiced" }, airstream: "glottalic ingressive" },
    'ɠ': { type: "consonant", features: { manner: "plosive", place: "velar", voicing: "voiced" }, airstream: "glottalic ingressive" },
    'ʛ': { type: "consonant", features: { manner: "plosive", place: "uvular", voicing: "voiced" }, airstream: "glottalic ingressive" },
    //clicks
    'ʘ': { type: "consonant", features: { manner: "click", place: "bilabial" }, airstream: "lingual ingressive" },
    'ǀ': { type: "consonant", features: { manner: "click", place: "dental" }, airstream: "lingual ingressive" },
    'ǃ': { type: "consonant", features: { manner: "click", place: "postalveolar" }, airstream: "lingual ingressive" },
    'ǂ': { type: "consonant", features: { manner: "click", place: "palatoalveolar" }, airstream: "lingual ingressive" },
    'ǁ': { type: "consonant", features: { manner: "click", place: "alveolar lateral" }, airstream: "lingual ingressive" },
    //others
    'ʍ': { type: "consonant", features: { manner: "fricative", place: "labial-velar", voicing: "voiceless" }, airstream: "pulmonic" },
    'ɕ': { type: "consonant", features: { manner: "fricative", place: "alveolo-palatal", voicing: "voiceless" }, airstream: "pulmonic" },
    'ʑ': { type: "consonant", features: { manner: "fricative", place: "alveolo-palatal", voicing: "voiced" }, airstream: "pulmonic" },
    'w': { type: "consonant", features: { manner: "approximant", place: "labial-velar", voicing: "voiced" }, airstream: "pulmonic" },
    'ɺ': { type: "consonant", features: { manner: "lateral flap", place: "alveolar", voicing: "voiced" }, airstream: "pulmonic" },
    'ɥ': { type: "consonant", features: { manner: "approximant", place: "labial-palatal", voicing: "voiced" }, airstream: "pulmonic" },
    'ʜ': { type: "consonant", features: { manner: "fricative", place: "epiglottal", voicing: "voiceless" }, airstream: "pulmonic" },
    'ʢ': { type: "consonant", features: { manner: "fricative/approximant", place: "epiglottal", voicing: "voiced" }, airstream: "pulmonic" },
    'ʡ': { type: "consonant", features: { manner: "plosive", place: "epiglottal", voicing: "voiceless" }, airstream: "pulmonic" },
    //coarticulated
    // 'ɧ': { type: "consonant", coarticulated: true, components: ["ʃ", "x"] },
    //vowels
    //front
    'i': { type: "vowel", features: { height: "close", backness: "front", rounding: "unrounded" }, airstream: "pulmonic" },
    'y': { type: "vowel", features: { height: "close", backness: "front", rounding: "rounded" }, airstream: "pulmonic" },
    'ɪ': { type: "vowel", features: { height: "near-close", backness: "front", rounding: "unrounded" }, airstream: "pulmonic" },
    'ʏ': { type: "vowel", features: { height: "near-close", backness: "front", rounding: "rounded" }, airstream: "pulmonic" },
    'e': { type: "vowel", features: { height: "close-mid", backness: "front", rounding: "unrounded" }, airstream: "pulmonic" },
    'ø': { type: "vowel", features: { height: "close-mid", backness: "front", rounding: "rounded" }, airstream: "pulmonic" },
    'ɛ': { type: "vowel", features: { height: "open-mid", backness: "front", rounding: "unrounded" }, airstream: "pulmonic" },
    'œ': { type: "vowel", features: { height: "open-mid", backness: "front", rounding: "rounded" }, airstream: "pulmonic" },
    'æ': { type: "vowel", features: { height: "near-open", backness: "front", rounding: "unrounded" }, airstream: "pulmonic" },
    //central
    'ə': { type: "vowel", features: { height: "mid", backness: "central", rounding: "unrounded" }, airstream: "pulmonic" },
    'ɨ': { type: "vowel", features: { height: "close", backness: "central", rounding: "unrounded" }, airstream: "pulmonic" },
    'ʉ': { type: "vowel", features: { height: "close", backness: "central", rounding: "rounded" }, airstream: "pulmonic" },
    'ɘ': { type: "vowel", features: { height: "close-mid", backness: "central", rounding: "unrounded" }, airstream: "pulmonic" },
    'ɵ': { type: "vowel", features: { height: "close-mid", backness: "central", rounding: "rounded" }, airstream: "pulmonic" },
    'ɜ': { type: "vowel", features: { height: "open-mid", backness: "central", rounding: "unrounded" }, airstream: "pulmonic" },
    'ɞ': { type: "vowel", features: { height: "open-mid", backness: "central", rounding: "rounded" }, airstream: "pulmonic" },
    'ɐ': { type: "vowel", features: { height: "near-open", backness: "central", rounding: "unrounded" }, airstream: "pulmonic" },
    //back
    'ɯ': { type: "vowel", features: { height: "close", backness: "back", rounding: "unrounded" }, airstream: "pulmonic" },
    'u': { type: "vowel", features: { height: "close", backness: "back", rounding: "rounded" }, airstream: "pulmonic" },
    'ʊ': { type: "vowel", features: { height: "near-close", backness: "back", rounding: "rounded" }, airstream: "pulmonic" },
    'ɤ': { type: "vowel", features: { height: "close-mid", backness: "back", rounding: "unrounded" }, airstream: "pulmonic" },
    'o': { type: "vowel", features: { height: "close-mid", backness: "back", rounding: "rounded" }, airstream: "pulmonic" },
    'ɔ': { type: "vowel", features: { height: "open-mid", backness: "back", rounding: "rounded" }, airstream: "pulmonic" },
    'ɑ': { type: "vowel", features: { height: "open", backness: "back", rounding: "unrounded" }, airstream: "pulmonic" },
    'ɒ': { type: "vowel", features: { height: "open", backness: "back", rounding: "rounded" }, airstream: "pulmonic" },
    'ʌ': { type: "vowel", features: { height: "open-mid", backness: "back", rounding: "unrounded" }, airstream: "pulmonic" },
    'a': { type: "vowel", features: { height: "open", backness: "front", rounding: "unrounded" }, airstream: "pulmonic" }

}

module.exports = core