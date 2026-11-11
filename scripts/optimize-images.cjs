const fs = require('node:fs');
const crypto = require('node:crypto');
const path = require('node:path');
const {execFileSync} = require('node:child_process');
const html = fs.readFileSync('index.html', 'utf8');
fs.mkdirSync('assets', {recursive: true});
const seen = new Map();
const result = html.replace(/data:image\/(png|jpeg|webp);base64,([A-Za-z0-9+/=]+)/g, (_, type, data) => {
  const hash = crypto.createHash('sha256').update(data).digest('hex');
  if (!seen.has(hash)) {
    const input = path.join(process.env.TEMP, `lucky-draw-${hash}.png`);
    const output = `assets/image-${seen.size + 1}.webp`;
    fs.writeFileSync(input, Buffer.from(data, 'base64'));
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', input, '-vf', 'scale=1200:1200:force_original_aspect_ratio=decrease', '-c:v', 'libwebp', '-quality', '85', output]);
    seen.set(hash, output);
  }
  return seen.get(hash);
});
fs.writeFileSync('index.html', result);
console.log(`Extracted ${seen.size} unique images`);
