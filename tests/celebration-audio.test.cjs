const fs=require('node:fs');
const assert=require('node:assert/strict');
for(const file of ['index.html','BZT_ROCKY_Lucky_Draw_2026.html']){
 const html=fs.readFileSync(file,'utf8');
 assert.match(html,/function playCelebration\(/);
 assert.match(html,/function stopCelebration\(/);
 assert.match(html,/function launchFireworks\(/);
 assert.match(html,/function stopFireworks\(/);
 assert.match(html,/id="fireworksCanvas"/);
 assert.match(html,/launchFireworks\(\);playCelebration\(\);fitWinnerName\(\)/);
 assert.match(html,/stopCelebration\(\);\$\('winOverlay'\)/);
 assert.match(html,/\.fireworks\{[^}]*z-index:2/);
 assert.match(html,/audioOn=true/);
}
assert.ok(fs.existsSync('assets/applause.ogg'));
console.log('Celebration audio checks passed');
