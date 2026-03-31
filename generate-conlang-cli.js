#!/usr/bin/env node

import('./generate-conlang.js').catch(err => {
  console.error(err);
  process.exit(1);
});