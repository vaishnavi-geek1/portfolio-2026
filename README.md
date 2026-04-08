# Vaishnavi Gupta – Portfolio

Personal portfolio site for **Vaishnavi Gupta**, a Software Engineer specializing in **React & Next.js** UI development.

Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**, and designed to deploy easily on **Vercel**.

## Getting started

1. Install dependencies:

```bash
cd vaishnavi-portfolio
npm install
```

2. Run the development server:

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

## Project structure

- `app/layout.tsx` – Root layout and global metadata.
- `app/page.tsx` – Main one-page portfolio (hero, about, skills, projects, contact).
- `app/globals.css` – Tailwind setup and global styles.
- `tailwind.config.ts`, `postcss.config.mjs` – Tailwind & PostCSS configuration.
- `next.config.mjs`, `tsconfig.json` – Next.js & TypeScript configuration.

## Resume button

The **“Download résumé”** button on the homepage expects your PDF to be served from the `public` folder.

1. Copy your resume file into the `public` folder, for example:
   - `public/Vaishnavi-Gupta-Resume-2026.pdf`
2. Make sure the file name matches the URL used in `app/page.tsx`:
   - `href="/Vaishnavi-Gupta-Resume-2026.pdf"`

You can change the file name and href if you prefer a different path.

## Deploying to Vercel

1. Push this project to a Git repository (GitHub, GitLab, or Bitbucket).
2. Go to [Vercel](https://vercel.com) and click **“Add New Project”**.
3. Import your repository and select the `main` (or chosen) branch.
4. Vercel will auto-detect **Next.js**:
   - Build command: `npm run build`
   - Output directory: `.next`
5. Click **Deploy**.

Every push to the selected branch will automatically trigger a new deployment.

## Contact form email setup (Hostinger SMTP)

The contact form sends email through the API route at `app/api/contact/route.ts` using `nodemailer`.

1. Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

2. Update `.env.local` with your Hostinger mailbox values:
   - `SMTP_HOST=smtp.hostinger.com`
   - `SMTP_PORT=465` (SSL) or `587` (TLS)
   - `SMTP_USER=your-full-email@domain.com`
   - `SMTP_PASS=your-mailbox-password`
   - `SMTP_FROM=your-full-email@domain.com`
   - `CONTACT_TO_EMAIL=where-you-want-to-receive-messages@domain.com`

3. Restart the dev server after editing env values:

```bash
npm run dev
```

Notes:
- Keep these credentials only in `.env.local` and your deployment environment variable settings.
- The API route automatically uses secure SMTP when `SMTP_PORT=465`.

