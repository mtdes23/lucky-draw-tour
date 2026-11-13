const fs = require('node:fs');
const assert = require('node:assert/strict');
for (const file of ['index.html', 'BZT_ROCKY_Lucky_Draw_2026.html']) {
  const html = fs.readFileSync(file, 'utf8');
  assert.match(html, /<div class="hub"[^>]*><\/div>/);
  assert.match(html, /querySelectorAll\('\.brands img'\).*cloneNode\(true\)/);
  assert.match(html, /\.hub img\{/);
  assert.match(html, /\.hub img:first-child\{filter:/);
  assert.match(html, /\.hub img:last-child\{filter:/);
  assert.ok(html.includes('<p>31 khách • 29 giải thưởng</p>'));
  assert.doesNotMatch(html, /<div class="hub">LUCKY/);
}
console.log('Wheel branding checks passed');
