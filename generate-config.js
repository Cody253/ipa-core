#!/usr/bin/env node
// generate-config-cli.cjs

const fs = require('fs');
const path = require('path');

const core = require('./core.js');       // your ES6 exports can stay; if core.js is ES module, you can require with .default
const modifiers = require('./modifiers.js'); // same as above

// -----------------------------
// GROUP IPA SYMBOLS BY TYPE
// -----------------------------
function groupByType(core) {
  const groups = {};
  for (const [symbol, data] of Object.entries(core)) {
    const type = data.type || 'other';
    if (!groups[type]) groups[type] = [];
    groups[type].push(symbol);
  }
  return groups;
}

// -----------------------------
// WRAP SYMBOL LINES
// -----------------------------
function wrapSymbols(symbols, perLine = 12) {
  const lines = [];
  for (let i = 0; i < symbols.length; i += perLine) {
    lines.push('// ' + symbols.slice(i, i + perLine).join(' '));
  }
  return lines.join('\n');
}

// -----------------------------
// IPA SECTION
// -----------------------------
function generateIPASection(core) {
  const grouped = groupByType(core);
  const sections = Object.entries(grouped).map(([type, symbols]) => {
    symbols.sort((a, b) => a.localeCompare(b));
    return [`// ${type.toUpperCase()}`, wrapSymbols(symbols), ''].join('\n');
  });
  return ['/**', ' * IPA SYMBOL REFERENCE', ' * Copy/paste symbols as needed', '', ...sections].join('\n');
}

// -----------------------------
// WRAP MODIFIERS HORIZONTALLY
// -----------------------------
function wrapModifiers(modList, maxLineLength = 90) {
  const lines = [];
  let currentLine = '// ';
  modList.forEach((mod, index) => {
    const separator = index === 0 ? '' : ' | ';
    const nextChunk = separator + mod;
    if ((currentLine + nextChunk).length > maxLineLength) {
      lines.push(currentLine);
      currentLine = '// ' + mod;
    } else {
      currentLine += nextChunk;
    }
  });
  if (currentLine.trim()) lines.push(currentLine);
  return lines.join('\n');
}

// -----------------------------
// MODIFIER SECTION
// -----------------------------
function generateModifierSection(modifiers) {
  const entries = Object.entries(modifiers);
  entries.sort(([a], [b]) => a.localeCompare(b));
  const formatted = entries.map(([key, data]) => {
    const appliesTo = Array.isArray(data.appliesTo) ? data.appliesTo.join(', ') : data.appliesTo || '';
    return `${key}(${appliesTo})`;
  });
  return ['/**', ' * MODIFIER REFERENCE', ' * modifier(appliesTo)', ' */', '', wrapModifiers(formatted), ''].join('\n');
}

// -----------------------------
// ORTHOGRAPHY EXPORT SECTION
// -----------------------------
function generateOrthographyExport() {
  const commentedOrthography = [
    '// k: ["k", ["aspirated"]],',
    '// a: ["ɑ", ["more_rounded"]],',
    '// x̱: [',
    '//   ["k", ["ejective", "aspirated"]],',
    '//   ["x", []]',
    '// ],',
    '// l: ["ɬ"]'
  ].join('\n');

  return [
    '/**',
    ' * ORTHOGRAPHY CONFIG',
    ' * Use parseConfig() at runtime',
    ' *',
    ' * Fill in your orthography below; examples are commented out.',
    ' */',
    '',
    "const { parseConfig } = require('./parser.cjs');",
    '',
    'const orthography = {',
    commentedOrthography,
    '};',
    '',
    'module.exports = parseConfig(orthography);',
    ''
  ].join('\n');
}

// -----------------------------
// MAIN GENERATOR
// -----------------------------
function generateConfig() {
  const content = [
    generateIPASection(core),
    '',
    generateModifierSection(modifiers),
    '',
    generateOrthographyExport()
  ].join('\n');

  // Ensure 'ipa' folder exists
  const ipaDir = path.join(process.cwd(), 'ipa');
  if (!fs.existsSync(ipaDir)) {
    fs.mkdirSync(ipaDir, { recursive: true });
  }

  // Write file inside 'ipa' folder
  const outputPath = path.join(ipaDir, 'ipa.config.js');
  fs.writeFileSync(outputPath, content, 'utf-8');

  console.log('✅ ipa/ipa.config.js generated with parseConfig() export');

  // Write alphabet.js
  const alphabetPath = path.join(ipaDir, 'alphabet.js');
  const alphabetContent = 'const alphabet = [];\nmodule.exports = alphabet;\n';
  fs.writeFileSync(alphabetPath, alphabetContent, 'utf-8');
  console.log('✅ ipa/alphabet.js generated with empty alphabet array');
}

// RUN
generateConfig();