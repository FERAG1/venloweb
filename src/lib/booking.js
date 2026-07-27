import { t, base } from '../i18n/ui.js';

// Everything the booking wizard's client script needs, serialised into the page
// as JSON. It has no access to Astro's frontmatter, so the whole UI dictionary
// travels with it — which is why every string in i18n/ui.js is a plain
// placeholder template rather than a function.
export const bookingCfg = (shop, lang) => ({
  whatsapp: shop.whatsapp,
  shopName: shop.name,
  slug: shop.slug,
  services: shop.services,
  team: shop.team.map((m) => ({ name: m.name, role: m.role, photo: m.photo || '' })),
  hours: shop.hours,
  phone: shop.phone,
  address: `${shop.address.street}, ${shop.address.postcode} ${shop.address.city}`,
  maps: shop.address.maps,
  locale: t(lang).locale,
  base: base(lang),
  t: t(lang),
});
