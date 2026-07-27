// Service slugs appear in two places that must agree exactly: the deep links on
// the homepage price list, and the ?dienst= lookup in the booking wizard. Keep
// the function here so a change can't silently break one side.
export const slugify = (s) =>
  String(s)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // strip accents — "Scheren mét mes" → "scheren met mes"
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
