// Every file in src/data/shops/ is one demo site. Adding a shop is adding a
// file — no route, config or build change.
//
// The FILENAME is the canonical slug, not the `slug` field inside the JSON:
// the filename is guaranteed unique by the filesystem, and it's what appears
// in the URL, so deriving both from it makes them impossible to desync.
const modules = import.meta.glob('../data/shops/*.json', { eager: true });

export const allShops = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = path.split('/').pop().replace(/\.json$/, '');
    const data = mod.default ?? mod;
    // slug also keys the localStorage repeat-booking entry, so force it to match
    return { slug, data: { ...data, slug } };
  })
  .sort((a, b) => a.slug.localeCompare(b.slug));

export const shopBySlug = (slug) => allShops.find((s) => s.slug === slug)?.data;

// URL prefix for a shop + language. Dutch sits at the shop root, German nests
// under /de, so a shop without German copy simply has no /de path.
export const pathFor = (shopSlug, lang = 'nl') =>
  `/${shopSlug}${lang === 'nl' ? '' : `/${lang}`}`;
