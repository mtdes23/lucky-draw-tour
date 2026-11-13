const fs = require('node:fs');
const assert = require('node:assert/strict');
for (const file of ['index.html', 'BZT_ROCKY_Lucky_Draw_2026.html']) {
  const html = fs.readFileSync(file, 'utf8');
  assert.ok(html.includes('https://www.youtube.com/embed/0SEpsdT4xTk'));
  assert.ok(html.includes('title="Nhạc nền YouTube"'));
  assert.match(html, /class="fireworks"/);
  assert.match(html, /prefers-reduced-motion:reduce\)\{\.fireworks i\{animation:none!important/);
  assert.match(html, /function startSuspense\(\)\{\}/);
}
console.log('Celebration and music checks passed');
