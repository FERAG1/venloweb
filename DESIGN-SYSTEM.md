# Design system — portable spec

Everything that makes this site look the way it does, extracted so it can be
rebuilt for a different business without copying the barbershop's content.

**How to use it:** paste this whole file into a new chat, then add the
"Project brief" section at the bottom filled in for the new business.

---

## 1. The rule the whole thing hangs on

> **Depth comes from elevation, inner highlights and real photography — never gradients.**

The page background is *darker* than the cards (`#f1f0ec` page, `#ffffff` cards),
so every surface visibly lifts off it. That single inversion — most sites put white
content on a white page — is what makes it read as physical rather than flat.

If you break one rule, don't break this one.

## 2. Tokens

```css
:root {
  /* layout */
  --max: 1120px;                        /* readable line length at display sizes */
  --gut: clamp(20px, 4vw, 44px);        /* gutter grows with viewport */
  --frame: clamp(10px, 1.3vw, 18px);    /* inset of full-bleed photo frames */

  /* surfaces — page darker than cards, always */
  --bg: #f1f0ec;
  --surface: #ffffff;
  --surface-2: #f8f7f5;
  --ink: #0e0e10;
  --ink-mid: #4e4e56;
  --ink-soft: #8a8a93;
  --line: #e5e3de;
  --hair: rgba(14, 14, 16, 0.08);
  --gold: #a17c42;                      /* accent hairline before eyebrows */

  /* BRAND — swapping these three re-skins every primary button */
  --brand: #211e1b;                     /* warm near-black, never pure #000 */
  --brand-hi: #302b27;
  --brand-ink: #ffffff;
  --brand-rgb: 33, 30, 27;              /* tints button shadows — neutral black
                                           shadow under a coloured button = dirty */

  --r-sm: 10px;  --r: 16px;  --r-lg: 26px;  --r-xl: 34px;

  /* spacing scale — every gap is one of these, nothing arbitrary */
  --s1: 6px;  --s2: 12px; --s3: 20px; --s4: 32px;
  --s5: 52px; --s6: 84px; --s7: 132px;

  /* four elevation steps, all near-black at low opacity */
  --sh-1: 0 1px 2px rgba(14,14,16,.05), 0 2px 6px rgba(14,14,16,.04);
  --sh-2: 0 1px 2px rgba(14,14,16,.05), 0 6px 16px rgba(14,14,16,.07);
  --sh-3: 0 2px 6px rgba(14,14,16,.06), 0 18px 44px rgba(14,14,16,.12);
  --sh-4: 0 4px 12px rgba(14,14,16,.07), 0 32px 80px rgba(14,14,16,.16);

  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}
```

**Picking a brand colour for a new business.** Keep it warm and dark; the palette
is cream, so a cold or bright brand punches a hole through it. Swap all four
values together. Proven alternates:

| | hex | rgb |
|---|---|---|
| warm near-black | `#211e1b` | `33, 30, 27` |
| oxblood | `#7a2733` | `122, 39, 51` |
| brick / rust | `#9c3d22` | `156, 61, 34` |
| espresso | `#4a3428` | `74, 52, 40` |
| brass | `#a17c42` | `161, 124, 66` |
| deep forest *(untested — likely right for a spa)* | `#2b3a30` | `43, 58, 48` |

## 3. Typography

Inter, and the weights stay **low**. Nothing is 700+.

```css
body            { font-family: 'Inter', -apple-system, system-ui, sans-serif;
                  letter-spacing: -0.006em; }
h1, h2, h3      { font-weight: 600; line-height: 1.02; letter-spacing: -0.04em; }
h1              { font-size: clamp(3rem, 12.5vw, 6.6rem); font-weight: 640;
                  letter-spacing: -0.05em; }
h2              { font-size: clamp(2.1rem, 6.6vw, 3.6rem); }
h3              { font-size: 1.05rem; letter-spacing: -0.022em; }
section         { padding: clamp(72px, 12vw, var(--s7)) 0; }
.lede           { color: var(--ink-mid); font-size: 1.08rem; max-width: 44ch; }
```

Big display sizes with **tight negative tracking** and modest weight is most of
the look. Cranking weight to 700 and tracking to 0 kills it instantly.

## 4. Structural patterns

- **`.wrap`** — `max-width: var(--max); margin: 0 auto; padding: 0 var(--gut)`. Every
  section's content sits in one.
- **`.eyebrow`** — small uppercase label with `letter-spacing: 0.15em`, preceded by a
  24px × 1px gold hairline via `::before`. Sits above every `<h2>`. This is the
  signature detail; keep it.
- **Section heading pair** — eyebrow + two-line `<h2>` split by `<br>`, e.g.
  "Strak geknipt, / zonder gedoe." Short line, then a shorter one.
- **`.band`** — alternating sections get a subtly different background so the page
  has rhythm rather than one continuous field.
- **`.card`** — white, `--r` radius, `--sh-1`/`--sh-2`. Cards never have borders *and*
  shadows; shadow alone.
- **`.media`** — image wrapper with an inset `::after` hairline so photos don't
  float edgeless on the cream.
- **Sticky nav** — a transparent pill that condenses on scroll (`.stuck`): gains a
  translucent white background, `backdrop-filter: blur(18px)`, a hairline border and
  an inner top highlight (`inset 0 1px 0 #fff`).
- **Hero** — full-bleed photo inset by `--frame`, dark veil over it, copy bottom-left,
  and a white card *overlapping* the bottom edge carrying social proof. The overlap
  is the depth cue.
- **Sticky mobile dock** — 3 actions (call / route / book) fixed at the bottom.
  Local-business traffic is thumbs.
- **Buttons** — `.btn` (solid brand), `.btn-light` (white), `.btn-sm`, `.btn-lg`.
  Real pressed states: lift 1px on hover, return on `:active`.
- **Motion** — `.rise` (fade + translate on scroll in) and `.stagger` (children
  sequence). Everything uses `--ease-out`. Respect `prefers-reduced-motion`.

## 5. Architecture

- **Astro, static, no framework.** Two pages, ~276 KB built.
- **One JSON file drives everything** (`src/data/shop.json`) — name, copy, hours,
  services, team, photos, FAQ. A new client is a data swap, not a rebuild.
- **Derive, never duplicate.** schema.org `priceRange`, opening hours and offers are
  computed from the same data the page renders, so they can't drift.
- **i18n** (optional): `src/i18n/ui.js` holds UI strings per language; the data file
  gets an optional `de` block. Language routes are generated from whether that block
  exists, so an untranslated site emits no second-language page at all.
- Every string is a placeholder template (`'{n} free'`), never a function, so the
  same dictionary can be JSON-serialised into client scripts.

## 6. Non-negotiables

1. No gradients. Anywhere.
2. Page background darker than cards.
3. Heading weights 600–640, never 700+.
4. Warm near-black, never `#000`.
5. Every gap comes from the spacing scale.
6. Real photography over illustration or stock-looking abstraction.
7. Icons: Lucide, ~1.9–2 stroke, sized 13–19px inline with text.

---

## 7. Project brief — fill this in for the new build

> Build a site using the design system above. Keep every token, type rule,
> structural pattern and non-negotiable exactly as specified. Only the brand
> colour and the sections change.
>
> **Business:** Forest spa hotel
> **Brand colour:** deep forest `#2b3a30` / rgb `43, 58, 48`
> *(swap `--brand`, `--brand-hi`, `--brand-rgb` together)*
> **Language(s):** …
> **Primary action:** book a room / book a treatment / enquire
>
> **Sections, in order:**
> 1. Hero — photo, name, tagline, overlapping card (rating + availability + CTA)
> 2. …
>
> **Data model:** one `hotel.json` replacing `shop.json`, holding: rooms
> (name, size, sleeps, price, photos), treatments (name, duration, price),
> facilities, packages, hours, FAQ, gallery, reviews, address.
