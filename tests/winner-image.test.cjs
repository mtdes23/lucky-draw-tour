const fs = require('node:fs');
const assert = require('node:assert/strict');
for (const file of ['index.html', 'BZT_ROCKY_Lucky_Draw_2026.html']) {
  const html = fs.readFileSync(file, 'utf8');
  assert.match(html, /<img[^>]+id="winPrizeImage"/);
  assert.match(html, /winImg\.src=tObj\.image/);
  assert.match(html, /winImg\.alt=tObj\.gift/);
}
console.log('Winner image checks passed');
