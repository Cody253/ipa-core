// modifier compatibility
const rules = {
  // VOICING / PHONATION
  voiceless: { incompatibleWith: ["voiced", "creaky_voice", "breathy_voice"] },
  voiced: { incompatibleWith: ["voiceless"] },
  creaky_voice: { incompatibleWith: ["voiceless"] },
  breathy_voice: { incompatibleWith: ["voiceless"] },

  // PLACE: SHIFTS (mutually exclusive)
  advanced: { incompatibleWith: ["retracted"] },
  retracted: { incompatibleWith: ["advanced"] },

  // PLACE: PRIMARY OVERRIDES
  // (not inherently incompatible — last one wins in processing)
  dental: { incompatibleWith: [] },
  linguolabial: { incompatibleWith: [] },

  // TONGUE PART (mutually exclusive)
  apical: { incompatibleWith: ["laminal"] },
  laminal: { incompatibleWith: ["apical"] },

  // SECONDARY ARTICULATION
  // These can stack in real phonetics, but we constrain for clarity
  palatalized: { incompatibleWith: ["velarized", "pharyngealized"] },
  velarized: { incompatibleWith: ["palatalized"] },
  pharyngealized: { incompatibleWith: ["palatalized"] },
  labialized: { incompatibleWith: [] },

  // SYLLABICITY
  syllabic: { incompatibleWith: ["non_syllabic"] },
  non_syllabic: { incompatibleWith: ["syllabic"] },

  // NASALIZATION / RHOTICITY
  nasalized: { incompatibleWith: [] },
  rhoticity: { incompatibleWith: [] },

  // LENGTH / DURATION
  extra_short: { incompatibleWith: ["length_half_long", "length_long"] },
  length_half_long: { incompatibleWith: ["extra_short", "length_long"] },
  length_long: { incompatibleWith: ["extra_short", "length_half_long"] },

  // TONE
  high_tone: { incompatibleWith: ["low_tone", "falling_tone", "extra_low_tone"] },
  low_tone: { incompatibleWith: ["high_tone", "rising_tone", "extra_high_tone"] },
  rising_tone: { incompatibleWith: ["falling_tone", "low_tone"] },
  falling_tone: { incompatibleWith: ["rising_tone", "high_tone"] },
  extra_high_tone: { incompatibleWith: ["extra_low_tone", "low_tone"] },
  extra_low_tone: { incompatibleWith: ["extra_high_tone", "high_tone"] },
  downstep: { incompatibleWith: [] },
  upstep: { incompatibleWith: [] },

  // RELEASE / ASPIRATION
  aspirated: { incompatibleWith: ["no_audible_release"] },
  no_audible_release: { incompatibleWith: ["aspirated"] },

    // VOWEL QUALITY (non-conflicting dimensions)
  more_rounded: { incompatibleWith: [] },
  less_rounded: { incompatibleWith: [] },

  centralized: { incompatibleWith: ["mid_centralized"] },
  mid_centralized: { incompatibleWith: ["centralized"] },

  raised: { incompatibleWith: ["lowered"] },
  lowered: { incompatibleWith: ["raised"] },

  // TONGUE ROOT (single axis, but isolated from others)
  advanced_tongue_root: { incompatibleWith: ["retracted_tongue_root"] },
  retracted_tongue_root: { incompatibleWith: ["advanced_tongue_root"] },

  // AIRSTREAM MECHANISM (independent feature class)
  ejective: { incompatibleWith: [] },

  // SEQUENCE-LEVEL RULES

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
    ],
    minLength: 2
  },

  coarticulation: {
    requiresAll: [
      { type: "consonant" }
    ],
    minLength: 2
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

module.exports = rules;