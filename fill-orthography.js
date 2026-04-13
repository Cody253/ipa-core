#!/usr/bin/env node
// fill-orthography.js

const fs = require('fs');
const path = require('path');

const ipaDir = path.join(process.cwd(), 'ipa');
const configPath = path.join(ipaDir, 'ipa.config.js');
const alphabetPath = path.join(ipaDir, 'alphabet.js');

// -----------------------------
// CHECK FILES EXIST
// -----------------------------
if (!fs.existsSync(configPath)) {
  console.error('❌ ipa.config.js not found. Run npx ipa-init first.');
  process.exit(1);
}

if (!fs.existsSync(alphabetPath)) {
  console.error('❌ alphabet.js not found. Run npx ipa-init first.');
  process.exit(1);
}

// -----------------------------
// LOAD ALPHABET
// -----------------------------
const alphabet = require(alphabetPath);

if (!Array.isArray(alphabet) || alphabet.length === 0) {
  console.error('❌ alphabet array cannot be empty');
  process.exit(1);
}

// -----------------------------
// GENERATE orthography OBJECT STRING
// -----------------------------
const orthographyLines = alphabet.map(letter => `  // "${letter}": ["", []],`);
const orthographyString = `const orthography = {\n${orthographyLines.join('\n')}\n};`;

// -----------------------------
// READ EXISTING CONFIG
// -----------------------------
let fileText = fs.readFileSync(configPath, 'utf-8');

// -----------------------------
// REPLACE ONLY orthography OBJECT
// -----------------------------
fileText = fileText.replace(
  /const orthography\s*=\s*\{[\s\S]*?\};/m,
  orthographyString
);

// -----------------------------
// WRITE BACK UPDATED CONFIG
// -----------------------------
fs.writeFileSync(configPath, fileText, 'utf-8');
console.log(`✅ ipa.config.js updated with ${alphabet.length} letters from alphabet.js`);