import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const dist = 'dist';
const base = readFileSync(join(dist, 'index.html'), 'utf-8');

// SSR bundle built by `vite build --ssr src/entry-server.tsx --outDir dist-server`
const { render } = await import('./dist-ssr/entry-server.js');

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
];

for (const route of routes) {
  const dir = join(dist, route.dir);
  mkdirSync(dir, { recursive: true });

  const appHtml = render(`/${route.dir}`);

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
    )
    // These hero-image preloads are homepage-specific (10.webp/1.webp) — the
    // landing pages render heroImage.webp, so preloading the wrong image both
    // wastes bandwidth and leaves the actual LCP image un-preloaded.
    .replace(
      /\s*<link rel="preload" as="image" href="\/10\.webp"[^>]*\/>\n?/,
      ''
    )
    .replace(
      /\s*<link rel="preload" as="image" href="\/1\.webp"[^>]*\/>\n?/,
      '\n  <link rel="preload" as="image" href="/heroImage.webp" />\n'
    )
    // Inject the real, fully rendered page markup so crawlers, ad-quality
    // evaluators, and the first paint all see actual content — not an empty
    // shell waiting on JS. main.tsx hydrates onto this instead of re-rendering.
    .replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

  writeFileSync(join(dir, 'index.html'), html);
  console.log(`✓ Pre-rendered: /${route.dir}`);
}

console.log('Pre-rendering complete.');
