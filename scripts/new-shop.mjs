#!/usr/bin/env node
// Scaffold one demo: `npm run new-shop can-hairstyle`
// Copies the template into src/data/shops/<slug>.json. The filename becomes the
// URL slug and the site appears at /<slug>/ on the next build — no route or
// config change needed.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';

const slug = process.argv[2];
if (!slug) {
  console.error('Usage: npm run new-shop <slug>   e.g. npm run new-shop can-hairstyle');
  process.exit(1);
}
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
  console.error(`Invalid slug "${slug}". Use lowercase letters, digits and single hyphens.`);
  process.exit(1);
}

const out = `src/data/shops/${slug}.json`;
if (existsSync(out)) {
  console.error(`${out} already exists — refusing to overwrite.`);
  process.exit(1);
}

const tpl = JSON.parse(readFileSync('src/data/shop.template.json', 'utf8'));
tpl.slug = slug;
mkdirSync('src/data/shops', { recursive: true });
writeFileSync(out, JSON.stringify(tpl, null, 2) + '\n');

console.log(`Created ${out}`);
console.log(`Fill in every TODO, then: npm run dev  ->  http://localhost:4321/${slug}/`);
