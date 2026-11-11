const fs = require('node:fs');
const assert = require('node:assert/strict');
for (const file of ['index.html', 'BZT_ROCKY_Lucky_Draw_2026.html']) {
  const html = fs.readFileSync(file, 'utf8');
  const wheel = html.slice(html.indexOf('function drawWheel(){'), html.indexOf('function drawWheel(){') + 3000);
  assert.match(wheel, /const isPlaceholder=!people\.length/);
  assert.match(wheel, /ctx\.textAlign='center'/);
  assert.match(wheel, /ctx\.fillText\(name,\s*320,\s*0,/);
  assert.match(wheel, /const maxTextWidth=330/);
  assert.match(wheel, /isPlaceholder\s*\?\s*\d+\s*:\s*fontSize/);
}
console.log('Wheel label checks passed');
