const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/myElement/runtime-es2015.js',
    './dist/myElement/polyfills-es2015.js',
    './dist/myElement/main-es2015.js'
  ];

  await fs.ensureDir('myElement');
  await concat(files, 'myElement/myElement.js');
  await fs.copyFile(
    './dist/myElement/styles.css',
    'myElement/styles.css'
  );
})();
