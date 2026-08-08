import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const dist = 'dist';
const base = readFileSync(join(dist, 'index.html'), 'utf-8');

const routes = [
  {
    dir: 'gynecologist-islamabad',
    canonical: 'https://drarmghana.com/gynecologist-islamabad',
    title: 'Best Gynecologist in Islamabad | Top Lady Doctor | Dr. Armghana Ali – MBBS, FCPS',
    description: 'Consult a trusted female gynecologist in Islamabad. Dr. Armghana Ali — best gyno doctor & women\'s health specialist at G-13 & G-11. Private consultation available. Book today.',
  },
  {
    dir: 'gynecologist-g11',
    canonical: 'https://drarmghana.com/gynecologist-g11',
    title: 'Best Female Gynecologist Near Me in G-11 Islamabad | Dr. Armghana Ali – MBBS, FCPS',
    description: 'Best gynecologist near me in G-11 Islamabad — Dr. Armghana Ali (MBBS, FCPS), pregnancy care specialist & private gynaecologist at Saeed Hospital G-11 Markaz. Open 7 days. Book now.',
  },
  {
    dir: 'pregnancy-care-islamabad',
    canonical: 'https://drarmghana.com/pregnancy-care-islamabad',
    title: 'Pregnancy Care in Islamabad – Dr. Armghana Ali, FCPS',
    description: 'Complete pregnancy care in Islamabad from Dr. Armghana Ali (MBBS, FCPS) — checkups, scans, and delivery planning at every stage. Book your visit today.',
  },
];

for (const route of routes) {
  const dir = join(dist, route.dir);
  mkdirSync(dir, { recursive: true });

  let html = base
    .replace(
      /(<link rel="canonical" href=")[^"]*(")/,
      `$1${route.canonical}$2`
    )
    .replace(
      /(<meta property="og:url" content=")[^"]*(")/,
      `$1${route.canonical}$2`
    )
    .replace(
      /(<title>)[^<]*(<\/title>)/,
      `$1${route.title}$2`
    )
    .replace(
      /(<meta name="description" content=")[^"]*(")/,
      `$1${route.description}$2`
    )
    .replace(
      /(<meta property="og:title" content=")[^"]*(")/,
      `$1${route.title}$2`
    )
    .replace(
      /(<meta property="og:description" content=")[^"]*(")/,
      `$1${route.description}$2`
    );

  writeFileSync(join(dir, 'index.html'), html);
  console.log(`✓ Pre-rendered: /${route.dir}`);
}

console.log('Pre-rendering complete.');
