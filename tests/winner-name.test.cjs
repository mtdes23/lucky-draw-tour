const fs = require('node:fs');
const assert = require('node:assert/strict');
for (const file of ['index.html', 'BZT_ROCKY_Lucky_Draw_2026.html']) {
  const html = fs.readFileSync(file, 'utf8');
  assert.match(html, /\.win-name\{[^}]*white-space:nowrap/);
  assert.match(html, /function fitWinnerName\(\)/);
  assert.match(html, /addEventListener\('resize',fitWinnerName\)/);
  assert.match(html, /classList\.add\('show'\);launchFireworks\(\);playCelebration\(\);fitWinnerName\(\)/);
}
console.log('Winner name checks passed');
