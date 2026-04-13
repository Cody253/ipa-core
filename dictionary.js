const dictionary = {
  // AIRSTREAM
  pulmonic: "Use airflow from the lungs to produce the sound",
  "glottalic ingressive": "Draw air inward using the glottis mechanism",
  "lingual ingressive": "Draw air inward using the tongue (click mechanism)",
  ejective: "Release a burst of air using a glottalic upward push",

  // MANNER
  plosive: "Completely block airflow, build pressure, then release it in a burst",
  nasal: "Lower the velum so air flows through the nose",
  trill: "Allow an articulator to vibrate rapidly in the airstream",
  "tap/flap": "Make a single quick strike of an articulator against its contact point",
  fricative: "Narrow the airflow channel to create friction noise",
  approximant: "Shape the mouth for sound without creating turbulent airflow",
  "lateral fricative": "Direct airflow along the sides of the tongue while creating friction",
  "lateral approximant": "Allow air to flow smoothly along the sides of the tongue",
  click: "Create a suction pocket in the mouth and release it sharply",

  // PLACE
  bilabial: "Bring both lips together",
  labiodental: "Place lower lip against upper teeth",
  dental: "Place the tongue against the teeth",
  alveolar: "Place the tongue at the alveolar ridge just behind the teeth",
  postalveolar: "Place the tongue just behind the alveolar ridge",
  retroflex: "Curl the tongue tip backward toward the palate",
  palatal: "Raise the middle of the tongue to the hard palate",
  velar: "Raise the back of the tongue to the soft palate",
  uvular: "Raise the back of the tongue toward the uvula",
  pharyngeal: "Constrict the throat in the pharynx area",
  glottal: "Use the vocal folds as the place of articulation",
  epiglottal: "Use the epiglottis to constrict airflow",

  // COMPLEX PLACE TYPES
  "alveolo-palatal": "Position the tongue between the alveolar ridge and hard palate",
  "labial-velar": "Simultaneously use the lips and the soft palate",

  // VOICING
  voiceless: "Do not vibrate the vocal cords",
  voiced: "Vibrate the vocal cords",

  // VOWEL HEIGHT
  close: "Raise the tongue high in the mouth",
  "near-close": "Raise the tongue slightly lower than close vowels",
  "close-mid": "Position the tongue between close and mid height",
  mid: "Keep the tongue in a neutral height position",
  "open-mid": "Lower the tongue between mid and open",
  "near-open": "Lower the tongue slightly above fully open",
  open: "Lower the tongue as far as possible",

  // VOWEL BACKNESS
  front: "Position the tongue toward the front of the mouth",
  central: "Position the tongue in the center of the mouth",
  back: "Position the tongue toward the back of the mouth",

  // ROUNDING
  rounded: "Round the lips",
  unrounded: "Keep the lips relaxed and unrounded",

  // LENGTH
  "extra-short": "Produce the sound with very short duration",
  "half-long": "Hold the sound slightly longer than normal",
  long: "Hold the sound for an extended duration",

  // TONE
  high: "Produce the sound with a high pitch",
  low: "Produce the sound with a low pitch",
  rising: "Start low and move to a higher pitch",
  falling: "Start high and move to a lower pitch",
  "extra-high": "Produce the sound with a very high pitch",
  "extra-low": "Produce the sound with a very low pitch",

  // TONE MODIFIERS
  downstep: "Lower pitch relative to the previous tone",
  upstep: "Raise pitch relative to the previous tone",

  // RELEASE
  none: "Do not release the closure audibly",

  // SECONDARY ARTICULATION
  aspirated: "Release the sound with a strong burst of air",
  palatalized: "Raise the tongue toward the hard palate during articulation",
  velarized: "Raise the back of the tongue toward the soft palate",
  labialized: "Round the lips during articulation",
  pharyngealized: "Constrict the pharynx during articulation",

  // PHONATION
  creaky_voice: "Use irregular vocal fold vibration",
  breathy_voice: "Allow extra airflow through loosely vibrating vocal folds",

  // NASALIZATION / RHOTICITY
  nasalized: "Lower the velum so air escapes through the nose during articulation",
  rhoticity: "Add an r-colored quality to the sound",

  // CONSONANT/VOWEL TYPES
  consonant: "Produce a sound with significant constriction of airflow",
  vowel: "Produce a sound without significant obstruction of airflow",

  // SEQUENCE TYPES
  affricate: "Begin with a complete stop, then release into a fricative",
  diphthong: "Move smoothly from one vowel position to another within a single syllable",
  syllable: "Produce a single rhythmic unit centered around a vowel",
  coarticulation: "Overlap articulations between adjacent sounds"
};

module.exports = dictionary;