#!/usr/bin/env node

import fs from "fs";
import path from "path";
import readline from "readline";
import core from "./core.js";
import modifiers from "./modifiers.js";

/** Pick random element */
const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

/** Shuffle array */
const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

/** Prompt helper */
function prompt(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans);
    })
  );
}

/** Generate conlang orthography */
function generateConlang({ alphabet, mod1Chance, mod2Chance, affricateChance }) {
  const letters = alphabet.split("");
  const usedIPA = new Set();
  const orthography = {};
  const coreKeys = shuffle(Object.keys(core));

  letters.forEach((letter) => {
    // Pick unused IPA
    let ipaKey;
    while (true) {
      const candidate = pickRandom(coreKeys);
      if (!usedIPA.has(candidate)) {
        ipaKey = candidate;
        usedIPA.add(candidate);
        break;
      }
    }

    const baseObj = core[ipaKey];
    const modifiersList = [];

    // Modifier 1
    if (Math.random() < mod1Chance) {
      const compatible = Object.entries(modifiers).filter(
        ([, mod]) => !mod.appliesTo || mod.appliesTo.includes(baseObj?.type)
      );
      if (compatible.length) modifiersList.push(pickRandom(compatible)[0]);
    }

    // Modifier 2
    if (Math.random() < mod2Chance && modifiersList.length) {
      const compatible = Object.entries(modifiers).filter(
        ([key, mod]) =>
          !modifiersList.includes(key) &&
          (!mod.appliesTo || mod.appliesTo.includes(baseObj?.type))
      );
      if (compatible.length) modifiersList.push(pickRandom(compatible)[0]);
    }

    // Plosive → affricate
    if (baseObj?.features?.manner === "plosive" && Math.random() < affricateChance) {
      const fricatives = Object.entries(core).filter(
        ([, obj]) =>
          obj?.features?.manner === "fricative" &&
          obj.features.place === baseObj.features.place
      );
      if (fricatives.length) {
        const fricKey = pickRandom(fricatives)[0];
        orthography[letter] = [
          [ipaKey, modifiersList],
          [fricKey, []],
        ];
        return;
      }
    }

    orthography[letter] = [ipaKey, modifiersList];
  });

  return orthography;
}

/** Main async function */
async function main() {
  const alphabet = (await prompt("Enter alphabet (default a-z): ")) || "abcdefghijklmnopqrstuvwxyz";
  const mod1 = parseFloat((await prompt("Modifier 1 chance (default 0.33): ")) || "0.33");
  const mod2 = parseFloat((await prompt("Modifier 2 chance (default 0.06): ")) || "0.06");
  const aff = parseFloat((await prompt("Plosive → affricate chance (default 0.1): ")) || "0.1");

  const orthography = generateConlang({
    alphabet,
    mod1Chance: mod1,
    mod2Chance: mod2,
    affricateChance: aff,
  });

  const outPath = path.join(process.cwd(), "generatedConlang.js");
  const lines = Object.entries(orthography).map(
    ([l, v]) => `  ${JSON.stringify(l)}:${JSON.stringify(v)}`
  );
  const content = `/** Generated conlang orthography */\nconst generatedOrthography={\n${lines.join(",\n")}\n};\nexport default generatedOrthography;`;

  fs.writeFileSync(outPath, content, "utf-8");
  console.log("✅ generatedConlang.js written");
}

main();