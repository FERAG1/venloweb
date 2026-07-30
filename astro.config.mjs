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
  build: { inlineStylesheets: 'always' },
});
