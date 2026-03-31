#!/usr/bin/env node

import('./generate-config.js').catch(err => {
  console.error(err);
  process.exit(1);
});