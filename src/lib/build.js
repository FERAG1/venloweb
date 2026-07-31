// Identifies the build that produced a page. Evaluated once per build, so every
// page in a given deploy carries the same value and any two deploys differ.
//
// This exists because client-side routing loads a script module once per
// session. Deploy while someone has the site open and their tab keeps the old
// module but swaps in the new HTML — old code reading new data. That surfaced
// as a WhatsApp message full of "undefined" when the i18n keys were renamed
// underneath a tab that was still running the previous build's message builder.
//
// The commit SHA when a CI build provides one, otherwise the build timestamp,
// which is enough: the only property required is that it changes per deploy.
export const BUILD_ID =
  process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 8) ||
  process.env.CF_PAGES_COMMIT_SHA?.slice(0, 8) ||
  String(Date.now());
