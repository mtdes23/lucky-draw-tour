const fs = require('node:fs');
const assert = require('node:assert/strict');
for (const file of ['index.html', 'BZT_ROCKY_Lucky_Draw_2026.html']) {
  const html = fs.readFileSync(file, 'utf8');
  assert.match(html, /const selectedTier=\$\('tierSelect'\)\.value/);
  assert.match(html, /selectedTier&&TIERS\.some\(t=>t\.id===selectedTier&&prizeCount\(t\.id\)>0\)\?selectedTier:autoTier\(\)/);
  assert.match(html, /\.prize-choice:focus-visible/);
  assert.match(html, /const autoTier=\(\)=>\[\.\.\.TIERS\]\.reverse\(\)\.find/);
  const gallery = html.match(/<div class="prize-gallery">(.*?)<\/section>/s)[1];
  assert.deepEqual([...gallery.matchAll(/<strong>(?:01|13|15) (Giải [^<]+)<\/strong>/g)].map(x => x[1]), ['Giải đặc biệt', 'Giải nhất', 'Giải nhì']);
  const rows = html.match(/<div class="pills">(.*?)<p class="muted">/s)[1];
  assert.deepEqual([...rows.matchAll(/id="(p[12g])"/g)].map(x => x[1]), ['pg', 'p1', 'p2']);
}
console.log('Prize selection checks passed');
