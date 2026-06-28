# 🚀 Production Freelancing Portfolio — Next.js 15

Full production portfolio covering all 32 requirement sections.

## Quick Start
```bash
npm install
cp .env.example .env.local   # fill in your values
npm run dev                  # visit http://localhost:3000
```

## Personalise Everything
Edit ONE file: `src/data/site.ts`
- SITE_CONFIG → your name, email, phone, WhatsApp, links
- PROJECTS → add your live URLs and repo links here
- SERVICES, PRICING, TESTIMONIALS, BLOG_POSTS, FAQS, etc.

## Add Projects
In PROJECTS array in site.ts:
```ts
{ liveUrl: "https://yourproject.com", repoUrl: "https://github.com/..." }
```

## Add Project Images
Drop images in /public/projects/ (800×500px recommended)

## Enable Contact Emails
See .env.example — add SMTP config and uncomment Nodemailer in src/app/api/contact/route.ts

## Enable Supabase
See README_FULL.md for SQL schema and full setup instructions.

## Deploy
```bash
npx vercel
```
Add env vars in Vercel dashboard → Project → Settings → Environment Variables.
