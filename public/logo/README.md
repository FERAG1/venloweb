# Shop logos

Drop a logo here and point the shop's JSON at it:

    "logo": "/logo/musti-kapsalon.svg"

Leave `"logo": ""` and the site falls back to the shop name as a text wordmark,
which is a perfectly good default — an approximate logo looks worse than clean type.

## What to ask the owner for

> "Heb je het logo als bestand? SVG of PNG met transparante achtergrond."

Whoever printed their signage made one. Most owners have it in WhatsApp.

## Requirements

- **SVG** preferred (sharp at any size). Otherwise **PNG with transparency**,
  at least 200px tall so it stays crisp on retina.
- The nav sits over a **dark hero photo** before it sticks, then becomes a **white
  pill** on scroll — so the logo must be legible on both. A logo with its own
  background (e.g. Musti's black circle) is fine either way. A dark-on-transparent
  wordmark will vanish against the hero; in that case supply a light version too
  and we add a `logoOnDark` field.
- Rendered at 34px tall in the nav (28px on small phones), 26px on the booking bar.
  Width is unconstrained, so wide wordmarks and square badges both work.
- A photo of a sticker is not usable — it carries background, glare and skew.
