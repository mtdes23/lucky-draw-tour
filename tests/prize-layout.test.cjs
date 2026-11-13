const fs = require('node:fs');
const assert = require('node:assert/strict');
for (const file of ['index.html', 'BZT_ROCKY_Lucky_Draw_2026.html']) {
  const html = fs.readFileSync(file, 'utf8');
  assert.match(html, /\.stat-grid\{grid-template-columns:repeat\(2,minmax\(0,1fr\)\)\}/);
  assert.match(html, /#draw \.heading p\{font-size:clamp\(18px,2\.2vw,26px\)/);
}
console.log('Prize layout checks passed');
