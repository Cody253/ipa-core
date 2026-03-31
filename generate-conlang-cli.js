#!/usr/bin/env node

// Node-friendly CommonJS shim to load ES module
import('file://' + new URL('./generate-conlang.js', import.meta.url).pathname)
  .catch(err => {
    console.error(err);
    process.exit(1);
  });