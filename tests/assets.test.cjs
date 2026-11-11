const fs = require('node:fs');
const assert = require('node:assert/strict');
const html = fs.readFileSync('index.html', 'utf8');
assert.ok(Buffer.byteLength(html) < 100000, 'HTML should not embed large images');
const paths = [...html.matchAll(/assets\/[a-z0-9-]+\.webp/g)].map(m => m[0]);
assert.equal(paths.length, 9, 'all brand and prize image uses should reference assets');
for (const path of new Set(paths)) assert.ok(fs.existsSync(path), `missing ${path}`);
console.log('Asset checks passed');
