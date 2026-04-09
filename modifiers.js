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
    effects: { rounding: "more" }
  },
  less_rounded: {
    symbol: "̜",
    appliesTo: "vowel",
    effects: { rounding: "less" }
  },

  advanced: {
    symbol: "̟",
    appliesTo: "consonant",
    effects: { placeModifier: "advanced" }
  },
  retracted: {
    symbol: "̠",
    appliesTo: "consonant",
    effects: { placeModifier: "retracted" }
  },

  centralized: {
    symbol: "̈",
    appliesTo: "vowel",
    effects: { backness: "centralized" }
  },
  mid_centralized: {
    symbol: "̽",
    appliesTo: "vowel",
    effects: { backness: "mid-centralized" }
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

  dental: {
    symbol: "̪",
    appliesTo: "consonant",
    effects: { placeModifier: "dental" }
  },
  apical: {
    symbol: "̺",
    appliesTo: "consonant",
    effects: { articulation: "apical" }
  },
  laminal: {
    symbol: "̻",
    appliesTo: "consonant",
    effects: { articulation: "laminal" }
  },

  velarized_or_pharyngealized: {
    symbol: "ˠ",
    appliesTo: "consonant",
    effects: { secondaryArticulation: "velarized_or_pharyngealized" }
  },
  velarized: {
    symbol: "̴",
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

  voiceless_flap: {
    symbol: "̥̆",
    appliesTo: "consonant",
    effects: {
      voicing: "voiceless",
      mannerModifier: "flap"
    }
  },

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

  linguolabial: {
    symbol: "̼",
    appliesTo: "consonant",
    effects: { placeModifier: "linguolabial" }
  },

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

  // TONES / ACCENTS

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

  extra_high_pitch: {
    symbol: "᷄",
    appliesTo: ["vowel", "consonant"],
    effects: { pitch: "extra-high" }
  },
  extra_low_pitch: {
    symbol: "᷅",
    appliesTo: ["vowel", "consonant"],
    effects: { pitch: "extra-low" }
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
  //ejective
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