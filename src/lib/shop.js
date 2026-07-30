import { slugify } from './slug.js';
import { t } from '../i18n/ui.js';

// Merge shop.json's optional `de` block over the Dutch base.
//
// Two rules that matter:
//   1. Service slugs always derive from the DUTCH name, so /boeken?dienst=fade-skin-fade
//      resolves identically on both language versions. Translating the slug would
//      silently break every deep link the moment a shop buys the German add-on.
//   2. Reviews are never translated. They are real quotes from real customers;
//      rewriting them in another language is putting words in someone's mouth.
//
// Anything missing from `de` falls back to Dutch, so a half-finished translation
// degrades into a mixed page rather than blank fields.
// An unverified field. Blank, "TODO…" and the template's dummy phone all count as
// unknown, so a freshly scaffolded shop and a half-filled one behave identically:
// the UI hides that block instead of printing a placeholder at a shop owner.
// Never render a fake phone number — someone will tap it.
const known = (v) => {
  const s = typeof v === 'string' ? v.trim() : v;
  if (s == null || s === '') return null;
  if (typeof s === 'string' && (/^TODO/i.test(s) || s === '+31 77 000 0000')) return null;
  return s;
};

export function localizedShop(shop, lang = 'nl') {
  const d = (lang !== 'nl' && shop[lang]) || null;
  const pick = (nl, tr) => (tr == null || tr === '' ? nl : tr);
  // A day is "closed" iff its time has no clock in it — same test parseHours uses,
  // so the marker word can be translated without touching the slot logic.
  const isClosed = (time) => !/\d{1,2}:\d{2}/.test(time);

  return {
    ...shop,
    // null rather than a placeholder string — callers test truthiness and hide.
    phone: known(shop.phone),
    address: {
      ...shop.address,
      street: known(shop.address?.street),
      postcode: known(shop.address?.postcode),
      city: known(shop.address?.city),
      maps: known(shop.address?.maps),
    },
    rating: known(shop.rating?.score) && shop.rating?.count ? shop.rating : null,

    tagline: pick(shop.tagline, d?.tagline),
    intro: pick(shop.intro, d?.intro),
    todayLine: pick(shop.todayLine, d?.todayLine),

    marquee: shop.marquee.map((m, i) => ({ ...m, label: pick(m.label, d?.marquee?.[i]) })),
    hours: shop.hours.map((h, i) => ({
      ...h,
      day: pick(h.day, d?.hours?.[i]),
      time: isClosed(h.time) ? t(lang).closed : h.time,
    })),

    services: shop.services.map((s, i) => ({
      ...s,
      slug: slugify(s.name), // canonical — Dutch, always
      name: pick(s.name, d?.services?.[i]?.name),
      desc: pick(s.desc, d?.services?.[i]?.desc),
    })),

    // slug from the name so /boeken?barber=… survives translation, same rule as services
    team: shop.team.map((t, i) => ({ ...t, slug: slugify(t.name), role: pick(t.role, d?.team?.[i]) })),

    why: shop.why.map((w, i) => ({
      ...w,
      title: pick(w.title, d?.why?.[i]?.title),
      text: pick(w.text, d?.why?.[i]?.text),
    })),

    // FAQ is authored per language rather than merged per field — the German
    // list answers different questions (border distance, EC-Karte) than the Dutch one.
    faq: d?.faq?.length ? d.faq : shop.faq,
  };
}

// A shop only gets a language toggle once someone has actually written the copy.
export const availableLangs = (shop) => ['nl', ...['de'].filter((l) => shop[l])];
