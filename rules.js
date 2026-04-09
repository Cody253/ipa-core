//modifier compatability
const rules = {
  // Voicing / phonation
  voiceless: { incompatibleWith: ["voiced", "creaky_voice", "breathy_voice"] },
  voiced: { incompatibleWith: ["voiceless", "voiceless_flap"] },
  voiceless_flap: { incompatibleWith: ["voiced", "aspirated"] },
  creaky_voice: { incompatibleWith: ["voiceless"] },
  breathy_voice: { incompatibleWith: ["voiceless"] },

  // Place / articulation
  advanced: { incompatibleWith: ["retracted", "velarized_or_pharyngealized"] },
  retracted: { incompatibleWith: ["advanced", "velarized_or_pharyngealized"] },
  palatalized: { incompatibleWith: ["velarized_or_pharyngealized"] },
  velarized_or_pharyngealized: { incompatibleWith: ["palatalized", "advanced", "retracted"] },
  pharyngealized: { incompatibleWith: ["palatalized"] },
  linguolabial: { incompatibleWith: [] },
  dental: { incompatibleWith: [] },
  apical: { incompatibleWith: [] },
  laminal: { incompatibleWith: [] },
  velarized: { incompatibleWith: ["palatalized", "advanced", "retracted"] },

  // Syllabicity
  syllabic: { incompatibleWith: ["non_syllabic"] },
  non_syllabic: { incompatibleWith: ["syllabic"] },

  // Nasalization / rhoticity
  nasalized: { incompatibleWith: [] },
  rhoticity: { incompatibleWith: [] },

  // Length / duration
  extra_short: { incompatibleWith: ["length_half_long", "length_long"] },
  length_half_long: { incompatibleWith: ["extra_short", "length_long"] },
  length_long: { incompatibleWith: ["extra_short", "length_half_long"] },

  // Segment-level tones / accents
  high_tone: { incompatibleWith: ["low_tone", "falling_tone", "extra_low_tone"] },
  low_tone: { incompatibleWith: ["high_tone", "rising_tone", "extra_high_tone"] },
  rising_tone: { incompatibleWith: ["falling_tone", "low_tone"] },
  falling_tone: { incompatibleWith: ["rising_tone", "high_tone"] },
  extra_high_tone: { incompatibleWith: ["extra_low_tone", "low_tone"] },
  extra_low_tone: { incompatibleWith: ["extra_high_tone", "high_tone"] },
  downstep: { incompatibleWith: [] },
  upstep: { incompatibleWith: [] },
  extra_high_pitch: { incompatibleWith: ["extra_low_pitch"] },
  extra_low_pitch: { incompatibleWith: ["extra_high_pitch"] },

  // Special consonant markers
  aspirated: { incompatibleWith: ["voiceless_flap", "no_audible_release"] },
  no_audible_release: { incompatibleWith: ["aspirated"] },

  // Sequence-level rules
  affricate: {
    requires: [
      { position: 0, features: { manner: "plosive" } },
      { position: 1, features: { manner: "fricative" } }
    ],
    length: 2
  },

  diphthong: {
    requiresAll: [
      { type: "vowel" }
    ]
  },

  coarticulation: {
    requiresAll: [
      { type: "consonant" }
    ]
  },

  syllable: {
    requires: [
      { position: 0, type: "consonant" }
    ],
    requiresFromPosition: {
      1: [
        { type: "vowel" }
      ]
    },
    minLength: 2
  }
};

module.exports = rules