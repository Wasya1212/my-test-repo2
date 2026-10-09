const fs = require('fs');
const path = require('path');

const sourceFile = path.join(__dirname, 'index.html');
const buildDir = path.join(__dirname, 'build');
const outputFile = path.join(buildDir, 'index.html');

if (!fs.existsSync(sourceFile)) {
  throw new Error('index.html not found in project root');
}

fs.mkdirSync(buildDir, { recursive: true });
fs.copyFileSync(sourceFile, outputFile);

console.log('Build complete: copied index.html to build/index.html');
