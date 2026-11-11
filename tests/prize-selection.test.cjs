const fs = require('node:fs');
const assert = require('node:assert/strict');
for (const file of ['index.html', 'BZT_ROCKY_Lucky_Draw_2026.html']) {
  const html = fs.readFileSync(file, 'utf8');
  assert.match(html, /const selectedTier=\$\('tierSelect'\)\.value/);
  assert.match(html, /selectedTier&&TIERS\.some\(t=>t\.id===selectedTier&&prizeCount\(t\.id\)>0\)\?selectedTier:autoTier\(\)/);
  assert.match(html, /\.prize-choice:focus-visible/);
}
console.log('Prize selection checks passed');
