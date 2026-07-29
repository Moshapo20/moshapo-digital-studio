# Moshapo Digital Studio — Context for New Sessions

Read this first in any new Claude Code session before making changes. This is a real,
live business website — not a demo.

## What this project is

A Next.js 16 (App Router) + TypeScript + Tailwind v4 website for **Moshapo Digital
Studio**, a South African web/brand/technology studio founded and run solo by
**Marope Moshapo**. Rebuilt from an earlier static HTML site (which still exists,
untouched, at a separate `moshapo-project` repo/folder — not used anymore).

**Live site:** https://moshapodigitalstudio.co.za (deployed on Vercel, auto-deploys
on push to `master` on GitHub: `Moshapo20/moshapo-digital-studio`)

## Business facts (do not invent different values)

- **Business name:** Moshapo Digital Studio
- **Founder:** Marope Moshapo, Founder & Creative Director
- **Domain:** moshapodigitalstudio.co.za (registered at HostAfrica)
- **Business WhatsApp:** 068 008 3342 (separate from personal number)
- **Business email:** hello@moshapodigitalstudio.co.za (hosted on Zoho Mail, free
  tier — check webmail at mail.zoho.com, NOT Gmail)
- **Location:** South Africa

## Brand system (locked)

- **Colors:** black `#0D0D0D`, dark gray `#1A1A1A`, white, light gray `#F5F5F5`,
  warm gold `#D4AF37` / gold-bright `#E4C158` — gold used as accent only, not
  everywhere
- **Typography:** Space Grotesk (display/headings) + Inter (body) — loaded via
  `next/font/google`, tokens in `app/globals.css` `@theme` block
- **Signature motif:** diagonal gold/black cut shapes (`lib/motif.ts`,
  `Section`'s `diagonal` prop)
- **Logo:** `public/logo/logo_icon.png` + `logo_lockup.png` — still placeholder
  raster exports, replace with real vector files when the founder provides them

## Non-negotiable credibility rules

**Never invent fake clients, testimonials, awards, certifications, stats, or
achievements anywhere on the site or in blog content.** Every non-real portfolio
project (`content/portfolio.ts`) must have `type: "concept"` and render the
label **"Concept Project — Created by Moshapo Digital Studio"** — this is
structurally enforced via a discriminated union type, not just convention. Don't
remove or weaken that.

## Sitemap (3 service divisions, in this priority order)

1. **Websites & Digital Experiences** — the primary/lead offer, has fixed
   pricing (`content/packages.ts`, R1,500–R8,500+)
2. **Brand & Creative** — graphic design, also has fixed pricing
   (`content/graphicPackages.ts`, packages R350–R6,500+, individual services from
   R150). The graphic pricing is a deliberate value ladder. Two mechanisms make it
   hold together, and breaking either one makes the on-page savings claims false:
   - **Design slots.** Packages draw from the `eligibleDesigns` pool. Most items
     are one slot; menus and bi-fold brochures count as 2, tri-fold brochures as 3.
     Without this, Quick Design (R350) would buy a R650 tri-fold brochure at a loss.
   - **Priced add-ons.** Source files (R150/design) and print-ready exports
     (R100/design) are paid extras on individual orders and free in every package.
     The "save from RX" figures are calculated against the *cheapest* eligible
     combination plus these add-ons, so they are guaranteed minimums. Re-run that
     arithmetic before changing any package price, slot weighting, or add-on price.
3. **Technology & Digital Solutions** — future-facing, no fixed pricing,
   "Custom Solutions — Request a Consultation"

Routes: `/`, `/services`, `/services/{brand-creative,websites,technology}`,
`/packages`, `/work`, `/work/[slug]`, `/about`, `/insights`, `/insights/[slug]`,
`/start-a-project`, `/contact`.

## Key architecture decisions

- **Content is hardcoded TypeScript, not a CMS or database** — `content/*.ts`
  files (portfolio, services, packages, graphicPackages, insights, company,
  faq). Solo founder editing a `.ts` file is simpler than a CMS for infrequent
  content changes.
- **Supabase is used for exactly one thing:** the `leads` table capturing
  "Start a Project" form submissions (`app/api/leads/route.ts`,
  `supabase/migrations/0001_create_leads.sql`). Not used for content.
- **The Supabase project is on the free tier, which auto-pauses after about a
  week without database activity.** It paused once (found 29 Jul 2026) and the
  lead form returned 500s until it was resumed from the dashboard. A paused
  project's hostname stops resolving entirely — `getaddrinfo ENOTFOUND` on
  `<ref>.supabase.co` means *paused*, not deleted, and the data is safe.
  Resume it at https://supabase.com/dashboard/project/touonddpxfgazbjyknom.
  `app/api/keep-warm/route.ts` + the `crons` entry in `vercel.json` now run a
  trivial daily read to stop this recurring. That prevents a pause but cannot
  undo one — if it ever pauses again, resume manually first.
- **Start a Project form** is a 3-branch guided flow (Website / Branding /
  Technology divisions ask different questions) — Zod discriminated union +
  react-hook-form, in `components/forms/StartProjectForm/`.
- **Contact form** uses Formspree directly (`components/forms/ContactForm.tsx`),
  separate from the Supabase-backed Start a Project flow.
- **Hero section** has a full-screen background video
  (`public/videos/moshapo-hero.mp4`, a symbol-forming animation) via
  `components/ui/HeroVideo.tsx`, rendered through `Section`'s `backdrop` prop.
  Respects `prefers-reduced-motion` — shows a static frame extracted from the
  video itself (`public/images/hero-video-frame.jpg`) instead of playing it for
  those users. Do not reintroduce a boxed/cropped video container — it's
  intentionally full-bleed behind the text.
- **AI image-generation prompts** are pre-written in `docs/ai-image-prompts.md`
  for any future hero/service/portfolio/social images — reuse that framework
  rather than writing new prompts from scratch.

## SEO / discoverability (already set up, don't redo)

- Domain verified in Google Search Console, sitemap submitted
  (`app/sitemap.ts`, `app/robots.ts`)
- Google Business Profile created and verified (category: Website Designer,
  should also have Graphic Designer as a second category)
- Per-page metadata via `lib/seo.ts` `pageMetadata()` helper, JSON-LD structured
  data on portfolio/blog pages (`components/seo/JsonLd.tsx`)

## Known quirks / things to know before debugging

- **Git pushes from this environment can be slow or time out** even when they
  actually succeed — always verify with `git fetch && git status -sb` before
  assuming a push failed and retrying destructively.
- There's an unrelated business with a similar name ("Oa Moshao Digital
  Studios," Johannesburg) that occasionally shows up in the same Google
  searches — not related to this business, nothing to fix.
- The old static-site repo (`moshapo-project`) is a completely separate,
  earlier version of this site. Don't confuse the two folders/repos.

## Working style established with the owner

- Verify changes actually work (build check, and visually in a browser when
  possible) before saying something is done.
- Keep copy sounding human-written, not AI-generated — avoid generic phrases
  like "get back to you," "move your business forward," templated
  three-parallel-bullet-point structures, etc.
- Commit with clear messages explaining *why*, not just *what*.
- Ask before large/structural changes; small scoped edits (copy, one
  component) can just be made directly.
