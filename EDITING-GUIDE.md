# EDITING GUIDE - amastenumah.com

This guide is for non-developers. You can update this website by asking an AI to edit the right files, then pushing to GitHub.

## 1) Quick rules (most important)

- Put all text/content changes in `content/` files.
- Put image files in `public/images/`.
- Put video files in `public/videos/`.
- Do not hardcode marketing copy inside `components/` unless you are intentionally changing layout/behavior.

If you are unsure, tell AI:  
"Only edit content files unless I explicitly ask for layout changes."

## 2) Where to edit what

| File | Controls |
|---|---|
| `content/global.js` | Site name, nav, social links, footer labels, site-wide metadata |
| `content/home.js` | Home page hero, indictment, logos, bio, keynote, testimonials |
| `content/work.js` | Work page media appearances, video library, conference/speeches content |
| `content/hold.js` | HOLD page copy, buy links, pull quotes |
| `content/talk.js` | Let's Talk page copy and form labels |
| `app/api/contact/route.js` | Contact form email sending logic (Resend) |

## 3) Run locally (preview before publishing)

Prerequisites:
- Node.js 18+ installed
- Git installed

Commands (from project root):

```bash
npm install
npm run dev
```

Open: [http://localhost:3000](http://localhost:3000)

Optional production check:

```bash
npm run build
```

## 4) Publish changes (live site)

1. Save your file changes
2. Commit to Git
3. Push to `main`
4. Vercel auto-deploys in about 1 minute

Verify:
- Open live site
- Hard refresh (`Ctrl+F5`)
- Confirm updated text/images/links

## 5) Environment variables (required for contact form)

In Vercel Project Settings -> Environment Variables:

- `RESEND_API_KEY` = your Resend API key

If contact form stops emailing, check this first.

## 6) Asset replacement rules

### Images
- Place files in `public/images/`
- Recommended: compressed webp/png/jpg
- Keep filenames clean and final before referencing in content files

### Videos
- Place files in `public/videos/`
- Hero video path in `content/home.js` -> `hero.videoFile`
- Keep hero fallback image path in `content/home.js` -> `hero.fallbackImage`

### Social sharing image
- File: `public/og-image.jpg` (recommended 1200x630)
- Metadata lives in `content/global.js` -> `site.metadata`

## 7) Copy-paste AI prompt templates

### Update home hero headline
> In `content/home.js`, change `home.hero.headline` to: "CUSTOMER SERVICE IS DESIGN, NOT ACCIDENT."

### Update home subheadline/subtext
> In `content/home.js`, update `home.hero.subheadline` and `home.hero.subtext` with my new copy. Do not edit component files.

### Add a media logo on home page
> Add a new entry to `home.mediaLogos` in `content/home.js` with `name`, `file`, and `href`. Keep existing order.

### Update THE CONFESSION copy
> Replace all strings inside `home.bio.paragraphs` in `content/home.js` with this exact text and keep paragraph breaks.

### Add work media appearance
> Add a new object to `work.appearances` in `content/work.js` with outlet, date, title, description, link, and logo path.

### Add YouTube video to Work page
> Add a new object to `work.videos` in `content/work.js` with title, description, youtubeId, and category (`keynote`, `media`, or `panel`).

### Update conference gallery tags
> In `content/work.js`, update the `tag` values in `work.stageStills` for these image paths: [...]

### Update HOLD page
> In `content/hold.js`, update `headline`, `description`, and `buyLinks` using this copy/links. Keep structure unchanged.

### Update Let's Talk form labels
> In `content/talk.js`, update `formFields` placeholders and submit label. Do not modify API route.

### Update social links
> In `content/global.js`, replace `site.social` URLs with these exact links.

## 8) Troubleshooting

### "I changed text but don't see it live"
- Check you pushed to `main`
- Wait for Vercel deploy to finish
- Hard refresh browser (`Ctrl+F5`)

### "Build failed on Vercel"
- Ask AI:  
  "Read the build error and fix only the failing file. Keep content in content files."

### "Image not showing"
- Confirm file exists in `public/images/`
- Confirm path starts with `/images/...`
- Check capitalization and spaces in filename

### "Video not playing"
- Confirm file exists in `public/videos/`
- Confirm `hero.videoFile` path in `content/home.js`
- Keep fallback image configured

### "Contact form not sending"
- Confirm `RESEND_API_KEY` is set in Vercel
- Check Resend domain verification status

## 9) Safe editing checklist before push

- [ ] I only changed intended files
- [ ] New paths in content match actual files in `public/`
- [ ] No accidental copy hardcoded in components
- [ ] Site loads locally (`npm run dev`)
- [ ] Optional: build passes (`npm run build`)

## 10) Advanced note (when to edit components)

Edit `components/` only for visual/behavior changes (animation, layout, interactivity).  
Edit `content/` for copy, links, labels, and media references.

When in doubt, ask AI:
> "Implement this using content-driven architecture. Put all editable text in `content/*`."
