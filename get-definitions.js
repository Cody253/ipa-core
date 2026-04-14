const dictionary = require('./dictionary');

function getDefinitions(phoneme) {
  const steps = [];

  function collect(p) {
    if (p.features?.place && dictionary[p.features.place]) {
      steps.push(dictionary[p.features.place]);
    }

    if (p.features?.manner && dictionary[p.features.manner]) {
      steps.push(dictionary[p.features.manner]);
    }

    if (p.features?.voicing && dictionary[p.features.voicing]) {
      steps.push(dictionary[p.features.voicing]);
    }

    if (p.features?.height && dictionary[p.features.height]) {
      steps.push(dictionary[p.features.height]);
    }

    if (p.features?.backness && dictionary[p.features.backness]) {
      steps.push(dictionary[p.features.backness]);
    }

    if (p.features?.rounding) {
      steps.push(dictionary[p.features.rounding] || p.features.rounding);
    }

    if (p.airstream && dictionary[p.airstream]) {
      steps.push(dictionary[p.airstream]);
    }

    if (p.modifiersApplied) {
      for (const mod of p.modifiersApplied) {
        if (dictionary[mod]) steps.push(dictionary[mod]);
      }
    }

    if (p.components) {
      for (const comp of p.components) {
        collect(comp); // IMPORTANT: no string recursion
      }
    }
  }

  collect(phoneme);

  return steps.join(". ") + ".";
}

module.exports = { getDefinitions, dictionary };