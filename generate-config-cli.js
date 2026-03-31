#!/usr/bin/env node

import('file://' + new URL('./generate-config.js', import.meta.url).pathname)
  .catch(err => {
    console.error(err);
    process.exit(1);
  });