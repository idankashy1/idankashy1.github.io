# Idan Kashy — Personal Portfolio

A premium, dark-mode personal portfolio site built with **React + Vite + TypeScript**. Bilingual (English / Hebrew) with full RTL support. Designed for free hosting on GitHub Pages and ready for a custom paid domain.

Includes an "Ask Idan AI" chat — backed by Claude Haiku via a Cloudflare Worker (see [worker/README.md](worker/README.md)) — that falls back gracefully to a static keyword matcher if the Worker isn't deployed.

---

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173/
npm run build     # type-check + production bundle into ./dist
npm run preview   # serve the production build locally
```

Node 18+ recommended (the CI workflow uses Node 20).

---

## Edit content

Everything user-facing lives in a small number of places:

| What | Where |
|---|---|
| English copy | [src/i18n/en.ts](src/i18n/en.ts) |
| Hebrew copy | [src/i18n/he.ts](src/i18n/he.ts) |
| External links (email, GitHub, LinkedIn) | [src/data/links.ts](src/data/links.ts) |
| Skill categories & tech tags | [src/data/skills.ts](src/data/skills.ts) (structure) + `skills.cat` in i18n files (labels) |
| Project list (tech stacks, featured flag) | [src/data/projects.ts](src/data/projects.ts) (structure) + `projects.items` in i18n files (titles, descriptions, value) |
| Profile picture | [public/profile.jpg](public/profile.jpg) — replace the file, keep the filename |
| Favicon | [public/favicon.svg](public/favicon.svg) |
| Browser tab title, SEO meta | [index.html](index.html) |
| Colors, spacing, fonts | [src/styles/global.css](src/styles/global.css) (CSS custom properties at the top) |

To add a **new project**: add an entry like `p6` to `projects.items` in both `en.ts` and `he.ts`, then add `{ key: 'p6', num: '06', tech: [...] }` to `PROJECTS` in `src/data/projects.ts`.

To add a **new skill category**: add a key (e.g. `'mobile'`) to `skills.cat` in both i18n files, then push a new entry into `SKILLS` in `src/data/skills.ts`.

---

## Deploy to GitHub Pages

This repo is set up for **automated deployment** via GitHub Actions — no manual `gh-pages` push needed.

### One-time setup

1. Create a repository on GitHub named **`idankashy.github.io`** (the repo name must match this exact pattern for User Sites — gives you the URL `https://idankashy.github.io/`).
2. Push this project to that repo's `main` branch.
3. In the repo settings → **Pages** → set **Source** to **"GitHub Actions"**.
4. Done. Every push to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes the site.

### Verifying a deploy

- After pushing, go to the repo's **Actions** tab and watch the `Deploy to GitHub Pages` workflow.
- Once green, the site is live at `https://idankashy.github.io/`.

---

## Custom domain (when you buy one)

When you purchase a domain (e.g. `idankashy.com`):

1. **Add a CNAME file to the repo.** Rename `public/CNAME.example` to `public/CNAME` and edit its single line to your domain (no `https://`, no trailing slash). Example contents:

   ```
   idankashy.com
   ```

2. **Configure DNS at your registrar.** For an apex domain (`idankashy.com`), add **four A records** pointing at GitHub's Pages servers:

   ```
   A    @    185.199.108.153
   A    @    185.199.109.153
   A    @    185.199.110.153
   A    @    185.199.111.153
   ```

   And a CNAME for `www`:

   ```
   CNAME    www    idankashy.github.io
   ```

3. **Enable HTTPS in GitHub.** Repo settings → Pages → wait for the domain check to pass, then tick **"Enforce HTTPS"**.

4. Push the change. The site will be live at `https://idankashy.com/` typically within a few minutes (DNS may take longer the first time).

---

## Architecture

```
public/
  profile.jpg          ← swap to update Hero photo
  favicon.svg          ← swap to update browser tab icon
  CNAME.example        ← rename to CNAME when you have a domain
src/
  components/          ← one file per section + Icons + LanguageToggle
  data/
    links.ts           ← email + social URLs (single source of truth)
    skills.ts          ← skill category structure
    projects.ts        ← project structure + AI uses + experience structure
  i18n/
    en.ts              ← English strings (canonical — defines the shape)
    he.ts              ← Hebrew strings (typed against en's shape)
    LanguageContext.tsx
    useTranslation.ts
  styles/
    global.css         ← design tokens + all component styles + RTL overrides
  App.tsx
  main.tsx
.github/workflows/
  deploy.yml           ← GH Actions CI/CD
index.html             ← SEO meta + font imports
vite.config.ts         ← base path = '/'
```

The Hebrew dictionary is **type-checked against the English dictionary's shape**. If you add a key to `en.ts`, TypeScript will refuse to build until you add the same key to `he.ts`. This prevents accidental missing translations.

---

## Tech stack

- **Vite 5** — dev server + production bundler
- **React 18** + **TypeScript 5**
- **Plain CSS** with CSS custom properties (no framework, no CSS-in-JS)
- **Geist** + **Geist Mono** + **Heebo** (Hebrew) from Google Fonts
- **GitHub Actions** — official Pages deployment actions

Built with the help of Claude.
