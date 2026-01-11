Here's a plan to quickly turn **Tailwind Plus → Spotlight** into a simple static site for **Simmonds & Co** with only **About** + **Projects** in navigation, and updated company/project copy.

(Spotlight is a Next.js template, and Tailwind Plus currently lists it as **Next.js v15 + Tailwind v4.1 + React v19**.) ([tailwindcss.com][1])

---

## 1) Goal + guardrails (what “done” looks like)

**Goal:** Static marketing site for _Simmonds & Co_ with:

- Pages kept in the UI: **About** and **Projects**
- All other template pages removed (or at least removed from nav/footer + routes)
- Home (`/`) becomes a proper landing page (still OK even if it’s not in the navbar)
- Copy rewritten to match Simmonds & Co positioning
- Projects page updated to include: RedServe, RNDL, TaxBurst, VetAssess, InvestorBot

**Guardrails:**

- Don’t redesign; reuse existing Spotlight sections/components where possible.
- Keep it deployable as a static export (no server runtime required).

---

## 2) Repo orientation (fast inventory)

1. `npm install` → `npm run dev`
2. Find where navigation + footer links are defined:
   - Search for arrays/objects like `navigation`, `links`, `footerLinks`, `navItems`
   - Also search for the existing page slugs (ex: `articles`, `speaking`, `uses`, etc.)

3. Identify routing structure:
   - Likely `src/app/...` (App Router) or `pages/...` (Pages Router)
   - Confirm where `layout.tsx` (site shell) and `metadata` live.

---

## 3) Delete/disable unwanted pages (and remove all references)

**You said the template has 5 pages. Keep only:**

- `/about`
- `/projects`

**Actions:**

- Delete the route folders/files for the other 3 pages (e.g. `/articles`, `/speaking`, `/uses` or whatever the template shipped with).
- Remove any content collections tied to those pages (MDX folders, feeds, tags, etc.)
- Search-and-delete references across the repo:
  - nav + footer
  - sitemap generation
  - breadcrumbs
  - “More” sections linking to removed pages
  - any “Recent articles”/“Latest writing” blocks on the homepage

**Quick check:** `npm run build` should not error on missing routes/imports.

---

## 4) Trim navbar + footer to only About + Projects

**Navbar:**

- Keep logo (logo can link to `/`)
- Keep only links:
  - About → `/about`
  - Projects → `/projects`

- Remove everything else (including mobile menu items)

**Footer:**

- Keep only About + Projects links (plus optional legal like “Privacy” _if you actually add it_—otherwise don’t show it).
- Remove social/profile links that are “personal website-y” unless you want them.

---

## 5) Make it a true static site export (so Tom can host it anywhere)

Next.js supports static export via `output: 'export'`, producing an `out/` folder after `next build`. ([Next.js][2])

**Update `next.config.(js|mjs)`** to include:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // trailingSlash: true, // optional
}
module.exports = nextConfig
```

([Next.js][2])

**Important:** If the template uses `next/image`, static export can fail with the default image optimizer. Next.js explicitly calls this out; you’ll need to either configure a custom loader or set images to unoptimized. ([Next.js][3])

Fastest “quick and dirty” option (if acceptable):

```js
images: {
  unoptimized: true
}
```

(Or replace `next/image` usages with plain `<img>` for local assets.)

---

## 6) Centralize content so Tom can iterate easily

Create a single source-of-truth file, e.g.:

- `src/content/site.ts` (or `src/lib/content.ts`)

Put in:

- Company name, tagline, short mission
- About page sections (bullets/paragraphs)
- Projects list (name, one-liner, optional bullets, status, CTA link placeholder)

Then update `Home`, `About`, `Projects` pages to read from that file instead of hardcoding copy.

---

## 7) New copy (drop-in text)

### Home (`/`) — landing page copy

**Hero headline:**
**Simmonds & Co builds fintech that makes the hard stuff feel simple.**

**Subhead:**
We’re Tom and Ben Simmonds—bringing decades across finance, accounting, leadership, software engineering, and systems design. We turn complex financial and regulatory workflows into products people can actually use.

**CTA buttons:**

- Primary: **View projects** → `/projects`
- Secondary: **About us** → `/about`

**“What we do” (3 bullets):**

- Product-first fintech solutions (not consultware)
- Automation + AI where it removes admin, not trust
- Systems that scale cleanly from solo operators to teams

**Credibility / approach (short block):**
We start with the messy reality—paperwork, policies, edge-cases—then design software that’s clear, reliable, and fast.

---

### About (`/about`) — rewritten from your pitch (tightened)

**Title:** About Simmonds & Co
**Body:**
With decades of combined experience in finance, accounting, business leadership, software engineering, and system design, brothers Tom and Ben Simmonds founded Simmonds & Co. to build innovative fintech that simplifies people’s lives. We believe that deeply understanding customer problems—then applying modern software and AI responsibly—creates tools that are practical, empowering, and easy to use.

**Optional “How we work” bullets:**

- Understand the workflow end-to-end (including compliance + edge cases)
- Build small, iterate quickly, ship reliable foundations
- Make complexity disappear through good design and automation

---

## 8) Projects page — succinct elevator pitches (as requested)

Use these one-liners (plus optional “outcome” bullets if the template supports them):

- **RedServe** — AI-assisted DVA advocacy copilot that interviews, maps conditions to SoP factors, and generates claim-ready packs.
- **RNDL** — Finds R&D tax rebate opportunities and handles the paperwork so builders can keep building.
- **TaxBurst** — A “plug in once” tax platform that automates optimisation and can lodge with the ATO for set-and-forget hygiene.
- **VetAssess** — Veteran-first financial advice and benefits support, backed by people who know the system.
- **InvestorBot** — Modular ASX trading automation: build strategies like blocks, backtest, and deploy without a PhD.

If Spotlight’s Projects page uses cards, each card should include:

- Name
- One-liner above
- 2–3 “benefits” bullets (optional)
- A CTA button (even if it’s placeholder: “Request demo” / “Join waitlist”)

---

## 9) Final cleanup checklist (fast QA)

- `npm run lint` (or whatever Spotlight uses)
- `npm run build` → confirm `out/` generated for static export ([Next.js][2])
- Click-test:
  - Logo → `/`
  - About → `/about`
  - Projects → `/projects`
  - No dead links in footer

- Search repo for removed slugs to ensure nothing references deleted pages.

---

If you want, paste a snippet of the template’s current `nav` + `footer` code (or the repo tree under `src/app`) and I’ll tailor the file-by-file edit list to match Spotlight’s exact structure.

[1]: https://tailwindcss.com/plus/templates/spotlight 'Spotlight - Tailwind CSS Personal Website Template'
[2]: https://nextjs.org/docs/pages/guides/static-exports 'Guides: Static Exports | Next.js'
[3]: https://nextjs.org/docs/messages/export-image-api 'Export with Image Optimization API | Next.js'
