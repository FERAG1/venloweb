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

## Crop the transparent padding before committing

Exported logos usually sit inside a lot of empty canvas. Musti's arrived 260×260
with only 140×195 of actual ink — 65px of dead space on the left, 55px on the
right. CSS sizes the *file*, not the artwork, so at `height: 42px` the visible
mark was 32px and looked shrunken and off-centre. Cropping it to the ink fixed
both without touching a single line of CSS.

Check before adding a logo — if the ink doesn't fill ~90% of the canvas, crop it:

    sips -c <height> <width> --cropOffset <top> <left> in.png --out out.png

Aim for a few px of even margin. Reach for CSS only once the file is tight;
otherwise you're scaling padding and the nav grows for nothing.
