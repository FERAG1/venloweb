import { defineConfig } from 'astro/config';

// `site` feeds canonical tags, hreflang, og:url and og:image. Get it wrong and the
// WhatsApp link preview goes blank — which, for a business that lives in WhatsApp,
// is the whole preview. So resolve it from the host instead of hardcoding:
//   1. SITE_URL          — set this by hand for a real client domain
//   2. Vercel            — VERCEL_PROJECT_PRODUCTION_URL is injected at build time
//   3. Cloudflare Pages  — CF_PAGES_URL is injected at build time
//   4. fallback          — local placeholder
const fromVercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site =
  process.env.SITE_URL ||
  (fromVercel ? `https://${fromVercel}` : null) ||
  process.env.CF_PAGES_URL ||
  'http://localhost:4321';

export default defineConfig({
  // Demos are unlisted — never index a spec site built on someone else's branding.
  site,

  // `astro dev` binds 4321 regardless of the PORT environment variable, so two
  // sessions of this project collide on the same port. Reading PORT here lets
  // the launcher assign a free one; 4321 stays the default when nothing sets it.
  server: { port: Number(process.env.PORT) || 4321, host: true },
  build: { inlineStylesheets: 'always' },

  vite: {
    build: {
      // Hand-written vendor prefixes were actively harmful here. Writing
      //   backdrop-filter: X; -webkit-backdrop-filter: X;
      // gave esbuild two identical values for what it treats as one property,
      // and it collapsed them down to the -webkit- form alone — which Chrome
      // does not support. Result: the frosted nav had NO blur in Chrome, only
      // a flat white bar, on every page.
      // Naming the targets makes esbuild derive the prefixes itself, so source
      // stays unprefixed and both forms ship. safari14 is what pulls the
      // -webkit- copy in for older iPhones.
      cssTarget: ['chrome90', 'safari14', 'firefox90', 'edge90'],
    },
  },
});
