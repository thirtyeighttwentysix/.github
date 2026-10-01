import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const assets = fileURLToPath(new URL('../profile/assets/', import.meta.url));
mkdirSync(assets, { recursive: true });
const colors = { paper: '#F5F3ED', ink: '#17191D', lime: '#D7FF62' };
const paths = [
  'M341 686 475 267Q481 247 501 235L602 174Q643 149 660 188L688 298 628 341 391 708Q368 690 341 686Z',
  'M429 736 729 315 848 299Q899 289 898 339L898 454 485 790Z',
  'M507 818 934 496 1054 539Q1111 558 1080 613L1037 683Q1030 694 1013 701L548 880Q537 846 507 818Z',
  'M287 765 320 727Q337 705 356 725L509 872Q528 891 510 910L472 945Z',
  'M267 790 448 967 395 1017C344 1070 263 1069 214 1015S171 887 220 839Z',
];
function mark(x, y, size, fill) {
  return `<svg x="${x}" y="${y}" width="${size}" height="${size}" viewBox="130 116 1000 1000"><g fill="${fill}">${paths.map(d => `<path d="${d}"/>`).join('')}</g></svg>`;
}
function svg(width, height, title, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title"><title id="title">${title}</title><g font-family="Segoe UI, Arial, sans-serif">${body}</g></svg>\n`;
}
function save(name, content) { writeFileSync(`${assets}/${name}.svg`, content); }

for (const dark of [false, true]) {
  const bg = dark ? colors.ink : colors.paper;
  const fg = dark ? colors.paper : colors.ink;
  const muted = dark ? '#B9BDB6' : '#595E57';
  const rule = dark ? '#3D4438' : '#D5D9CB';
  save(`hero-${dark ? 'dark' : 'light'}`, svg(1280, 490, '3826 — One schema. A better JVM workflow.', `
    <rect width="1280" height="490" rx="24" fill="${bg}"/>
    <text x="64" y="73" font-size="30" font-weight="800" letter-spacing="-1" fill="${fg}">3826</text>
    <path d="M166 49v29" stroke="${rule}" stroke-width="2"/>
    <text x="190" y="70" font-size="18" letter-spacing="3" fill="${muted}">OPEN SOURCE / JVM</text>
    <text x="60" y="189" font-size="70" font-weight="700" letter-spacing="-3" fill="${fg}">One schema.</text>
    <text x="60" y="273" font-size="70" font-weight="700" letter-spacing="-3" fill="${fg}">A better JVM workflow.</text>
    <text x="64" y="331" font-size="23" fill="${muted}">From your data model to your client and editor.</text>
    <rect x="962" y="121" width="254" height="254" rx="127" fill="${colors.lime}"/>
    ${mark(984, 143, 210, colors.ink)}
    <path d="M64 392H1216" stroke="${rule}"/>
    <circle cx="71" cy="437" r="7" fill="${dark ? colors.lime : colors.ink}"/>
    <text x="94" y="444" font-size="20" fill="${fg}">Kotlin + Java</text>
    <text x="356" y="444" font-size="20" fill="${muted}">PostgreSQL + SQLite</text>
    <text x="718" y="444" font-size="20" fill="${muted}">IntelliJ IDEA</text>
    <text x="1199" y="444" text-anchor="end" font-size="18" font-weight="600" fill="${fg}">VOLAN ↗</text>`));
}

save('volan-card', svg(620, 235, 'Volan ORM — schema to type-safe client', `
  <rect width="620" height="235" rx="16" fill="${colors.ink}"/>
  <text x="32" y="49" font-size="14" letter-spacing="2" fill="${colors.lime}">01 / DATA LAYER</text>
  <text x="30" y="114" font-size="52" font-weight="700" letter-spacing="-2" fill="${colors.paper}">Volan</text>
  <text x="32" y="160" font-size="21" fill="#BBC0B6">Schema → type-safe client</text>
  <path d="M32 192H588" stroke="#3D4438"/>
  <text x="32" y="219" font-size="14" fill="#BBC0B6">KOTLIN + JAVA</text>
  ${mark(488, 45, 100, colors.lime)}`));
save('idea-card', svg(620, 235, 'Volan for IntelliJ IDEA — schema tooling in your editor', `
  <rect width="620" height="235" rx="16" fill="${colors.paper}"/>
  <text x="32" y="49" font-size="14" letter-spacing="2" fill="#595E57">02 / DEVELOPER TOOLS</text>
  <text x="30" y="114" font-size="48" font-weight="700" letter-spacing="-2" fill="${colors.ink}">Volan for IDEA</text>
  <text x="32" y="160" font-size="21" fill="#595E57">Understand your schema as you type.</text>
  <path d="M32 192H588" stroke="#D5D9CB"/>
  <text x="32" y="219" font-size="14" fill="#595E57">COMPLETE / CHECK / NAVIGATE / FORMAT</text>
  <rect x="505" y="44" width="83" height="83" rx="21" fill="${colors.lime}"/>
  ${mark(517, 56, 59, colors.ink)}`));
save('avatar', svg(512, 512, '3826 — Volan', `
  <rect width="512" height="512" fill="${colors.ink}"/>
  <circle cx="256" cy="219" r="168" fill="${colors.lime}"/>
  ${mark(116, 79, 280, colors.ink)}
  <text x="256" y="453" text-anchor="middle" font-size="66" font-weight="800" letter-spacing="-2" fill="${colors.paper}">3826</text>`));
console.log('Generated 5 SVG assets.');
