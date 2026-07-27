# venloweb

Barbershop demo template. One shop per build. Swap the data, deploy, walk in.

```bash
npm run dev      # http://localhost:4321
npm run build    # → dist/
```

## Making a new demo (~20 min)

1. `cp -r . ../venloweb-<shopnaam>` (or clone the repo)
2. Edit `src/data/shop.json` — that file is the entire site
3. Drop their photos in `public/photos/` and point the JSON at `/photos/x.jpg`
4. `npm run build` → deploy `dist/` to Cloudflare Pages
5. Send them the link directly. Do **not** post it publicly.

## shop.json

Everything comes from this one file: name, tagline, address, phone, hours,
services + prices, team, gallery, reviews, rating.

Photos currently point at Unsplash stock so the layout reads properly before
you've shot anything. **Replace all of them before showing a client** — stock
photos of someone else's shop is the exact thing that makes a demo feel fake.
Their own Instagram photos beat stock every time, even at lower quality.

## Booking flow

Its own page at `/boeken` (`src/pages/boeken.astro`, on the minimal `Bare` layout).
4 steps: service → barber → date → details, with a sticky action bar carrying the
running selection and the Next button. It is deliberately **not** on the homepage —
inline, it fought the page scroll and made you hunt up and down between steps.
Submits by opening WhatsApp on the **customer's** phone with the whole booking
pre-written; they tap send. Nothing is sent server-side.

This is deliberately a **request, not a confirmed booking**. It does not track
availability or prevent double-booking — that's what Salonized/Booksy/Fresha sell
for €30-70/mo, and a half-built version of it causes double-bookings on a Saturday
that you get blamed for. The barber confirms by replying, which is what they
already do on the phone.

Everything is derived from `shop.json`:
- closed days come from `hours` (`"Gesloten"` disables the day)
- slots are generated between opening and closing in 30-min steps, and never
  offered if the service duration would run past closing
- today's slots inside the next 45 minutes are hidden

**Upgrade path:** when a client is paying and wants real availability, put their
Salonized/Booksy URL in `shop.booking`. Every CTA switches to it automatically and
the built-in flow stops rendering — no code changes.

Four gotchas if you edit it:
- The style block is `is:global`, namespaced under `#bkPage`. It has to be — the
  option/day/slot rows are built at runtime via `innerHTML` so they never get
  Astro's scoped-style attribute.
- `#bkPage [hidden] { display: none !important }` is load-bearing; plain `hidden`
  loses to `.btn { display: inline-flex }`.
- The step panes are `<section>` elements, so they need an explicit `padding: 0`
  or the global `section { padding: 72px 0 }` in theme.css adds a dead gap.
- Scoped styles can't reach an `<svg>` rendered by `Icon.astro` — it's a separate
  component. Use `:global(svg)` (see `.top-back` in `layouts/Bare.astro`).

## SEO

Driven off `shop.json` — `priceRange`, `openingHoursSpecification` and `makesOffer`
are all *derived* from the price list and hours, so they can't drift out of sync
with what the page shows.

In place: canonical, Open Graph + Twitter card, favicon, `HairSalon` schema
(hours, prices, services, map, rating), `FAQPage` schema, robots.txt.

**Three things you must do per shop before launch:**

1. **Fill `geo.lat` / `geo.lng`** in `shop.json` from Google Maps (right-click the
   pin → copy coordinates). Left empty it's simply omitted from the schema —
   deliberately, because a guessed coordinate drops the shop on the wrong corner.
2. **Remove the `noindex`** in `src/layouts/Base.astro` and swap `public/robots.txt`
   to the launch block commented inside it. Both are demo guards. Ship them as-is
   and you've built a site Google refuses to rank.
3. **Set `site`** in `astro.config.mjs` to the real domain — canonical and og:url
   are built from it.

Not done yet: German version + `hreflang` (the cross-border angle), and a sitemap
(`npx astro add sitemap` when a client actually goes live).

## Images

Every photo uses `srcset` via Unsplash's `w=` param, so a phone pulls a 640px hero
instead of an 1800px one — measured at **2034 KB → 375 KB, an 82% saving** on
mobile. When you swap in the shop's real photos, either keep the same `?w=` URL
shape or export at 640/960/1280/1800 and the `setAt()` helper keeps working.

## Deploy

Cloudflare Pages, not Vercel — Vercel's free tier is non-commercial only, and
these are client sites.

- Build command: `npm run build`
- Output directory: `dist`
- Demos go to `<shopnaam>.venloweb.nl`; real clients move to their own domain

`noindex` is set in `src/layouts/Base.astro`. **Remove it when the site goes
live for a paying client** — otherwise you've built them a site Google ignores,
which is the one thing you promised to fix.

## Notes on the build

- No JS framework, no client-side rendering. Static HTML + one small
  IntersectionObserver for the scroll reveal.
- The reveal is gated on `.js` being on `<html>` — if the script fails the page
  still renders everything. Never demo a site that can go blank.
- Depth is elevation + layering, no gradients: page bg sits darker than cards
  so cards visibly lift (`--sh-1/2/3` in `src/styles/theme.css`).
- The sticky mobile dock is the highest-converting element on the page. Don't
  remove it — this traffic is overwhelmingly phones.
- `LocalBusiness`/`HairSalon` schema is in the layout. That's what feeds Google
  the structured data, and it's half of why the site ranks at all.

## Customising per shop so they don't look like siblings

Real photography does most of the work. Beyond that, in `theme.css`:

- `--gold` — pull an accent straight out of their interior
- `--r` / `--r-lg` — sharp corners read traditional, round reads modern
- `--bg` vs `--surface` — the contrast between them controls how much things lift
- Reorder the sections in `src/pages/index.astro`; lead with gallery for a
  photogenic shop, with prices for a value-led one
