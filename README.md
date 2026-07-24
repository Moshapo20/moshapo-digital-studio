# Moshapo Digital Studio — Website

Next.js site for Moshapo Digital Studio, a South African web/brand/technology
studio. Live at **https://moshapodigitalstudio.co.za**.

## Starting a new Claude Code session

If you're picking this project back up in a fresh session (chat window full,
new terminal session, etc.), do this first:

1. Make sure the session is rooted in this folder:
   ```
   cd "C:\Users\mosha\Desktop\Moshapo digital Studio"
   claude
   ```
2. Paste this as your first message:

   > Read `README.md` and `PROJECT_CONTEXT.md` in this repo first, then check
   > `git log --oneline -10` to see recent work. This is a live business
   > website — don't invent fake clients, stats, testimonials, or awards
   > anywhere (see the credibility rules in PROJECT_CONTEXT.md). I want to
   > [describe what you want done].

`PROJECT_CONTEXT.md` has the full picture: business facts, brand rules, the
credibility rules, architecture decisions, what's already set up (SEO, email,
Supabase leads table), and known quirks. Read it before making changes — it's
the single source of truth for context that would otherwise only live in past
conversations.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Supabase (leads table
only) · Zod + react-hook-form · Formspree (contact form) · Vercel (hosting,
auto-deploys on push to `master`)

## Verifying changes before committing

```bash
npx next build
```

Run this after any change before committing — it catches type errors and
broken routes across the whole site, not just the page you touched.

## Deploying

Push to `master` on GitHub (`Moshapo20/moshapo-digital-studio`) — Vercel
auto-builds and deploys. No manual deploy step needed.
