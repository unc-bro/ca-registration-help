# CLAUDE.md — CA Registration Help

Project-specific guidance for working in this repo. Applies only within this folder.

## Project Purpose

CARegistrationHelp.com — a private California vehicle-registration concierge
service. **Standard MVP service scope:** straightforward California
registration for a passenger vehicle currently titled/registered in another
U.S. state.

Complex situations (missing titles, lender/lienholder-held titles, salvage or
rebuilt vehicles, ownership/document problems, prior DMV issues, foreign
imports, unusual emissions circumstances) are **reviewed case-by-case** — they
are not promised or guaranteed as part of the standard service. Keep this
distinction intact in any new copy.

The business is **not** the California DMV. Eligible regulated registration
transactions "may be coordinated through a California DMV-authorized
registration provider" — no specific provider has been selected yet, so never
name one or imply a specific provider's capabilities.

## Architecture

Zero-dependency static site. Plain Node.js (`fs`/`path`/`url` only) plus
template-literal string functions — no framework, no npm dependencies. Do not
introduce a framework, bundler, or dependency without discussing it first;
this was a deliberate MVP choice.

```
src/config.mjs          Central config: SITE_CONFIG, CTA_LABELS, ROUTES
src/data/nav.mjs         PRIMARY_NAV, FOOTER guide links, GUIDES (5 guides)
src/data/content.mjs     Situations, FAQs, How It Works, Why Us, official sources
src/templates/           layout, header, footer, cta, faq, breadcrumbs,
                         guideParts, structuredData, icons — reusable pieces
src/pages/index.mjs      Homepage
src/pages/guides/*.mjs   5 guide pages
build.mjs                Build script (run via `npm run build`)
assets/                  css/, js/, icons/, images/ — copied verbatim to dist/
scripts/render_guides.py Legacy Python stand-in used before Node was
                         confirmed installed on this machine. No longer
                         needed — node build.mjs is canonical. Left in place,
                         not deleted.
```

Every page pulls shared nav/footer/CTA/FAQ markup from `src/templates/` —
don't duplicate HTML across page files.

## Build

```bash
npm run build
```

Runs `node build.mjs`, which wipes and regenerates `dist/` from source, then
copies `assets/` into `dist/assets/`. **Build output directory: `dist`**.
Requires Node ≥18 (declared in `package.json` `engines`). Verified working
end-to-end in this environment (Node v24.18.0 / npm 11.16.0).

## Cloudflare Pages Deployment

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- `dist/` is gitignored — Cloudflare regenerates it fresh on every deploy; it
  is not committed to the repo.
- Connect via **Workers & Pages → Create → Pages → Connect to Git** in the
  Cloudflare dashboard, select the GitHub repo, enter the settings above.
- Custom domain (CARegistrationHelp.com) gets attached afterward under the
  Pages project's **Custom domains** tab — not yet done.

## GitHub Workflow

Repo is **not yet initialized** as of this writing (no `.git` directory).
Standard flow when ready:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <github-repo-url>
git push -u origin main
```

Only commit when explicitly asked. Never force-push. Never commit secrets.

## Current Business Rules

- Standard service = straightforward out-of-state → CA registration only.
- Complex cases are reviewed individually; never state or imply they're
  guaranteed under the standard service.
- Never claim: DMV authorization/licensing, guaranteed approval/fulfillment,
  specific turnaround time, avoidance of a DMV visit, specific provider
  capabilities, government affiliation, attorney affiliation, reviews,
  testimonials, years in business, or customer counts.
- No DMV logo, state seal, or government-site look-alike styling.

## Pricing

**No price is displayed anywhere on the site.** `SITE_CONFIG.serviceFee` in
`src/config.mjs` is `null` — the fulfillment provider hasn't been selected and
the service fee hasn't been set. All pricing copy conditionally falls back to
"Service pricing will be shown before you proceed with paid assistance."
**Do not invent a number.** When a real fee is provided, set it once in
`src/config.mjs`; it propagates automatically.

Other config values still blank/placeholder in `src/config.mjs`, do not
invent: `stripePaymentUrl`, `supportEmail`, `supportPhone`, `analyticsId`.

`filloutUrl` **is** set: `https://forms.fillout.com/t/si4kNFsfnBus` (public
form URL, not a secret) — embedded directly on the homepage at
`/#check-my-vehicle`.

## Content and Design Constraints

- Exactly **6 pages**: homepage + 5 guides. No `/get-started/`, `/next-step/`,
  `/about/`, `/contact/`, `/privacy/`, `/terms/`, `/disclaimer/`, or separate
  FAQ/Services pages. "How It Works," "Services," and "FAQ" are anchor
  sections on the homepage, not standalone pages.
- All "Check My Vehicle" CTAs point to `/#check-my-vehicle` (the embedded
  Fillout section on the homepage) — never link directly to an external
  Fillout URL from a button.
- Design language: restrained fintech style, deep emerald green brand color
  (deliberately not blue, to avoid looking like a government site), system
  font stack, no stock photography, SVG-only illustrations.
- No fabricated reviews, ratings, partnerships, or business-history claims.
- Mobile-first, accessible: semantic HTML, keyboard-navigable nav/FAQ/dropdown,
  visible focus states, `prefers-reduced-motion` respected.

## Key Decisions From This Conversation

1. Built as a zero-dependency Node static-site generator instead of a
   framework (e.g. Eleventy) — avoids unnecessary npm dependencies per spec.
2. Scope corrected from an originally larger page set down to exactly 6
   pages; Fillout intake moved from a dedicated `/get-started/` page to an
   embedded section on the homepage.
3. Service scope narrowed: standard MVP service covers only straightforward
   out-of-state registrations; all complex-case copy (lienholder, missing
   title, salvage, foreign import, prior DMV issues, unusual emissions)
   rewritten to say "reviewed case-by-case," not promised.
4. "Guides" nav item converted to an accessible dropdown (native
   `<details>`/`<summary>`, no dependency) listing all 5 guides.
5. Guide-page table-of-contents box tightened, and section headings are
   auto-numbered via a CSS counter (`.prose h2[id]::before`) that stays in
   sync with the TOC automatically — numbers are never hardcoded in content.
6. Live Fillout form URL wired into `SITE_CONFIG.filloutUrl`.
7. `package.json` and `.gitignore` added to prepare for Cloudflare Pages
   deployment via GitHub; build verified working end-to-end once Node/npm
   were confirmed available on this machine.
