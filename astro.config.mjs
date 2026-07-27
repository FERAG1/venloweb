import { defineConfig } from 'astro/config';

export default defineConfig({
  // Demos are unlisted — never index a spec site built on someone else's branding.
  site: 'https://venloweb.pages.dev',
  build: { inlineStylesheets: 'always' },
});
