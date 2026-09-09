// Disk-light verification for environments that cannot finish a static export.
const fs = require('node:fs');
const path = require('node:path');
const { transformSync } = require('next/dist/build/swc');
let count = 0;
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (/\.(js|jsx|mjs)$/.test(file)) {
      const source = fs.readFileSync(file, 'utf8');
      if (!source.trim()) throw new Error(`Empty source: ${file}`);
      transformSync(source, { filename: file, jsc: { parser: { syntax: 'ecmascript', jsx: true }, target: 'es2020' }, module: { type: 'commonjs' } });
      count++;
    }
  }
}
walk('src');
console.log(`Parsed and transformed ${count} source modules without writing build output.`);
