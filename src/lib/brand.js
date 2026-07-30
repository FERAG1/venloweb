// Per-shop brand colours. theme.css defines the defaults; a shop with a `brand`
// block in its JSON overrides them for that build only, so one client's colours
// can't leak into another's site.
//
// The four values move together on purpose. --brand-rgb tints the button shadows,
// and a neutral black shadow under a coloured button reads dirty — so deriving rgb
// from the hex here means it can never drift out of sync with the colour.
const rgb = (hex) => {
  const h = String(hex).replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

export function brandVars(shop) {
  const b = shop.brand;
  if (!b?.base) return null; // fall through to theme.css defaults
  const [r, g, bl] = rgb(b.base);
  const parts = [
    `--brand:${b.base}`,
    `--brand-hi:${b.hi || b.base}`,
    `--brand-ink:${b.ink || '#ffffff'}`,
    `--brand-rgb:${r}, ${g}, ${bl}`,
  ];
  // accent drives the hairline before every eyebrow label and the summary icons
  if (b.accent) parts.push(`--gold:${b.accent}`);
  // Returned as an inline style for <html>, NOT a <style> block: Astro emits
  // theme.css after any inline head style, so a `:root{}` rule would lose on
  // source order. An inline style beats every stylesheet regardless of order.
  return parts.join(';');
}
