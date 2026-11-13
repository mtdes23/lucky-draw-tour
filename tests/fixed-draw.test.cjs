const fs = require('node:fs');
const assert = require('node:assert/strict');
for (const file of ['index.html', 'BZT_ROCKY_Lucky_Draw_2026.html']) {
  const html = fs.readFileSync(file, 'utf8');
  const list = html.match(/const FIXED_NAMES=\[(.*?)\];/s);
  assert.ok(list, `${file}: missing fixed list`);
  const names = Function(`return [${list[1]}]`)();
  assert.equal(names.length, 31);
  assert.equal(names[0], 'VÕ THỊ THIÊN HƯƠNG');
  assert.equal(names[30], 'NGUYỄN TRƯỜNG VINH');
  assert.equal(new Set(names).size, 31);
  assert.match(html, /readonly[^>]*id="namesEditor"|id="namesEditor"[^>]*readonly/);
  assert.match(html, /const KEY='bztRockyLuckyDraw2026Fixed'/);
  assert.match(html, /duration=9500/);
  assert.match(html, /startSuspense\(/);
  assert.match(html, /stopSuspense\(/);
  assert.doesNotMatch(html, /id="csvInput"/);
}
console.log('Fixed draw checks passed');
