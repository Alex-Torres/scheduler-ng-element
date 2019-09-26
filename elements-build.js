const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/scheduler/runtime-es2015.js',
    './dist/scheduler/polyfills-es2015.js',
    './dist/scheduler/main-es2015.js'
  ];

  await fs.ensureDir('scheduler');
  await concat(files, 'scheduler/scheduler.js');
  await fs.copyFile(
    './dist/scheduler/styles.css',
    'scheduler/styles.css'
  );
})();
