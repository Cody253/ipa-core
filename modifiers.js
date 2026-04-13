const modifiers = {
  // DIACRITICS

  voiceless: {
    symbol: "̥",
    appliesTo: "consonant",
    effects: { voicing: "voiceless" }
  },
  voiced: {
    symbol: "̬",
    appliesTo: "consonant",
    effects: { voicing: "voiced" }
  },
  aspirated: {
    symbol: "ʰ",
    appliesTo: "consonant",
    effects: { aspiration: true }
  },

  more_rounded: {
    symbol: "̹",
    appliesTo: "vowel",
    effects: { roundingModifier: "more" }
  },
  less_rounded: {
    symbol: "̜",
    appliesTo: "vowel",
    effects: { roundingModifier: "less" }
  },

  // PLACE: PRIMARY OVERRIDES
  dental: {
    symbol: "̪",
    appliesTo: "consonant",
    effects: { place: "dental" }
  },
  linguolabial: {
    symbol: "̼",
    appliesTo: "consonant",
    effects: { place: "linguolabial" }
  },

  // PLACE: SHIFTS (DO NOT OVERRIDE)
  advanced: {
    symbol: "̟",
    appliesTo: "consonant",
    effects: { placeShift: "advanced" }
  },
  retracted: {
    symbol: "̠",
    appliesTo: "consonant",
    effects: { placeShift: "retracted" }
  },

  centralized: {
    symbol: "̈",
    appliesTo: "vowel",
    effects: { centralization: "centralized" }
  },
  mid_centralized: {
    symbol: "̽",
    appliesTo: "vowel",
    effects: { centralization: "mid" }
  },

  syllabic: {
    symbol: "̩",
    appliesTo: "consonant",
    effects: { syllabic: true }
  },
  non_syllabic: {
    symbol: "̯",
    appliesTo: "vowel",
    effects: { syllabic: false }
  },

  apical: {
    symbol: "̺",
    appliesTo: "consonant",
    effects: { tonguePart: "apical" }
  },
  laminal: {
    symbol: "̻",
    appliesTo: "consonant",
    effects: { tonguePart: "laminal" }
  },

  // SECONDARY ARTICULATION
  velarized: {
    symbol: "ˠ",
    appliesTo: "consonant",
    effects: { secondaryArticulation: "velarized" }
  },
  palatalized: {
    symbol: "ʲ",
    appliesTo: "consonant",
    effects: { secondaryArticulation: "palatalized" }
  },
  labialized: {
    symbol: "ʷ",
    appliesTo: "consonant",
    effects: { secondaryArticulation: "labialized" }
  },
  pharyngealized: {
    symbol: "ˤ",
    appliesTo: "consonant",
    effects: { secondaryArticulation: "pharyngealized" }
  },

  nasalized: {
    symbol: "̃",
    appliesTo: ["vowel", "consonant"],
    effects: { nasalization: true }
  },

  rhoticity: {
    symbol: "˞",
    appliesTo: "vowel",
    effects: { rhotic: true }
  },

  // LENGTH
  length_half_long: {
    symbol: "ˑ",
    appliesTo: ["vowel", "consonant"],
    effects: { length: "half-long" }
  },
  length_long: {
    symbol: "ː",
    appliesTo: ["vowel", "consonant"],
    effects: { length: "long" }
  },
  extra_short: {
    symbol: "̆",
    appliesTo: ["vowel", "consonant"],
    effects: { length: "extra-short" }
  },

  // PHONATION
  creaky_voice: {
    symbol: "̰",
    appliesTo: ["vowel", "consonant"],
    effects: { phonation: "creaky" }
  },
  breathy_voice: {
    symbol: "̤",
    appliesTo: ["vowel", "consonant"],
    effects: { phonation: "breathy" }
  },

  // HEIGHT MODIFICATION
  raised: {
    symbol: "̝",
    appliesTo: ["vowel", "consonant"],
    effects: { heightModifier: "raised" }
  },
  lowered: {
    symbol: "̞",
    appliesTo: ["vowel", "consonant"],
    effects: { heightModifier: "lowered" }
  },

  // TONGUE ROOT
  advanced_tongue_root: {
    symbol: "̘",
    appliesTo: "vowel",
    effects: { tongueRoot: "advanced" }
  },
  retracted_tongue_root: {
    symbol: "̙",
    appliesTo: "vowel",
    effects: { tongueRoot: "retracted" }
  },

  // TONE (unified — removed pitch duplication)
  high_tone: {
    symbol: "́",
    appliesTo: ["vowel", "consonant"],
    effects: { tone: "high" }
  },
  low_tone: {
    symbol: "̀",
    appliesTo: ["vowel", "consonant"],
    effects: { tone: "low" }
  },
  rising_tone: {
    symbol: "̌",
    appliesTo: ["vowel", "consonant"],
    effects: { tone: "rising" }
  },
  falling_tone: {
    symbol: "̂",
    appliesTo: ["vowel", "consonant"],
    effects: { tone: "falling" }
  },
  extra_high_tone: {
    symbol: "᷄",
    appliesTo: ["vowel", "consonant"],
    effects: { tone: "extra-high" }
  },
  extra_low_tone: {
    symbol: "᷅",
    appliesTo: ["vowel", "consonant"],
    effects: { tone: "extra-low" }
  },

  downstep: {
    symbol: "ꜜ",
    appliesTo: ["vowel", "consonant"],
    effects: { toneModifier: "downstep" }
  },
  upstep: {
    symbol: "ꜛ",
    appliesTo: ["vowel", "consonant"],
    effects: { toneModifier: "upstep" }
  },

  no_audible_release: {
    symbol: "̚",
    appliesTo: "consonant",
    effects: { release: "none" }
  },

  ejective: {
    symbol: "ʼ",
    appliesTo: "consonant",
    effects: { airstream: "egressive_glottalic" }
  },

  // SEQUENCE MODIFIERS
  diphthong: { appliesTo: "sequence", effects: { type: "diphthong" } },
  affricate: { appliesTo: "sequence", effects: { type: "affricate" } },
  syllable: { appliesTo: "sequence", effects: { type: "syllable" } },
  coarticulation: { appliesTo: "sequence", effects: { type: "coarticulation" } }
};

module.exports = modifiers;