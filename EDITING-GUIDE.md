# EDITING-GUIDE.md — amastenumah.com

This site is built so you can describe changes in plain English to an AI (e.g. Claude). **All copy lives in `content/`** as plain JavaScript objects. Do not edit marketing text inside `components/` unless you are changing layout or behavior.

## Required folder structure (developer brief)

Your GitHub/Vercel project root may be named `amas-next` or `amastenumah`; **inside** the repo, paths match the brief:

- `app/page.jsx`, `app/work/page.jsx`, `app/hold/page.jsx`, `app/talk/page.jsx`
- `app/api/contact/route.js`, `app/layout.jsx`, `app/globals.css`
- `components/` — `Nav.jsx`, `Footer.jsx`, `VideoHero.jsx`, `MediaLogos.jsx`, `VideoCard.jsx`, `TestimonialCard.jsx`, `ContactForm.jsx`, `SectionWrapper.jsx`
- `content/` — `home.js`, `work.js`, `hold.js`, `talk.js`, `global.js`
- `public/images/` (flat — no subfolders; all raster/SVG image assets), `public/videos/` (flat — all `.mp4` etc.), `public/og-image.jpg` at repo `public/` root
- `EDITING-GUIDE.md`, `tailwind.config.js`, `next.config.js`, `package.json`

**Also present (not on the brief diagram):** `postcss.config.js` — required so Next.js can process Tailwind.

## Files to know

| File | What it controls |
|------|------------------|
| `content/global.js` | Site name, tagline, nav, logo paths, footer, accessibility labels, **site-wide SEO** (`site.metadata`) |
| `content/home.js` | Home page: hero, indictment, `mediaLogos`, `statBar`, `testimonialsHeading`, bio (`eyebrow`, `paragraphs`, photo paths), keynote, testimonials, `finalCta`, hero accessibility strings |
| `content/work.js` | Work page: `seo`, section titles, filter labels, appearances, videos |
| `content/hold.js` | HOLD book page: `seo`, headline, subheadline, cover, description, thesis, buy links, pull quotes |
| `content/talk.js` | Let's Talk: `seo`, headline, subheadline, `formFields`, `submissionEmail`, success/error strings |

## Media paths

- **Hero video:** `public/videos/hero-reel.mp4` (see `content/home.js` → `hero.videoFile`).
- **Hero fallback image:** `public/images/hero-fallback.jpg` (or change path in `content/home.js`).
- **Media logos (home + work):** flat files under `public/images/` (e.g. `npr-logo.webp`, `nbc-logo.webp`, `fox.webp`, `fox-business-logo.webp`). Paths must match `content/home.js` and `content/work.js`.
- **Social share image:** `public/og-image.jpg` (1200×630 recommended) — referenced in `content/global.js` → `site.metadata`. Replace with a designed asset for best previews on LinkedIn / X.

---

## Indictment lines (accent phrases)

In `content/home.js`, `indictment.lines` is an array. Each item is either:

- A **plain string** (one line of copy), or
- An object `{ before, accent, after? }` — `before` and `after` are normal text; **`accent`** is shown in **brand red** between them. Use `after` only when you need text after the red phrase; omit it or use `""` when not needed.

The closing line under the stack is `indictment.redLine` (punchline-style line).

---

## Updating the home page headline

The headline lives in `content/home.js` under `hero.headline`.

**Example prompt to Claude:**

> Change the hero headline in `content/home.js` to: YOUR NEW HEADLINE HERE

Claude should edit only that string. Commit and push to `main`; Vercel deploys automatically.

---

## Adding a media appearance (The Work page)

Appearances live in `content/work.js` in the `appearances` array. Each item has `outlet`, `date`, `title`, `description`, `link`, and `logo` (path under `public/`).

**Example prompt:**

> Add a new entry to `appearances` in `content/work.js` for a Forbes piece titled "…" dated March 2026, linking to https://…, using logo file `/images/forbes.png` (place `forbes.png` in `public/images/`).

---

## Adding a video to The Work page

Videos live in `content/work.js` in the `videos` array. Each needs `title`, `description`, `youtubeId`, and `category` (`keynote` | `media` | `panel`).

**Example prompt:**

> Add a video to `content/work.js` with youtubeId `dQw4w9WgXcQ`, category `keynote`, title "…", description "…".

---

## Updating bio copy

Bio paragraphs are in `content/home.js` under `bio.paragraphs` (an array of strings). The bio photo path and alt text are `bio.photoFile`, `bio.photoAlt`, etc.

**Example prompt:**

> Replace the second paragraph in `bio.paragraphs` in `content/home.js` with: [paste text].

---

## Changing a button label or CTA

- Home keynote button: `content/home.js` → `keynote.cta.label` and `keynote.cta.href`.
- Final home CTA: `content/home.js` → `finalCta`.
- Talk form submit: `content/talk.js` → `formFields.submitLabel`.
- Event type dropdown: `content/talk.js` → `formFields.eventTypePlaceholder` and `formFields.eventTypeLabel`.

**Example prompt:**

> Set `finalCta.label` in `content/home.js` to "Email Amas" and `finalCta.href` to `mailto:amas@amastenumah.com`.

---

## Updating the book page (HOLD)

Edit `content/hold.js`: `headline`, `subheadline`, `description`, `thesis`, `buyLinks`, `pullQuotes`, `coverImage`, `coverAlt`.

**Example prompt:**

> Add a Barnes & Noble URL to `buyLinks` in `content/hold.js` and update the first pull quote to: "…"

---

## Site-wide SEO (title, description, Open Graph)

Edit `content/global.js` → `site.metadata` (same fields as the developer brief’s `app/layout.jsx` example: `title`, `description`, `openGraph`, `twitter`).

---

## Contact form email (Resend)

Set `RESEND_API_KEY` in Vercel project environment variables. The handler matches the brief: `from` `site@amastenumah.com`, `to` `amas@amastenumah.com`, subject and body template as documented. `talk.submissionEmail` documents the inbox for the owner; the API `to` address follows the brief.

---

## After editing

1. Save the file(s).
2. Run `npm run build` locally if you want to verify.
3. Commit and push to GitHub `main` — Vercel rebuilds the site.
