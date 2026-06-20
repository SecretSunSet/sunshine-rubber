# Sunshine Rubber Tech Resources — Marketing Website

Production build of the 5-page marketing site for **Sunshine Rubber Tech Resources, Co.**,
recreated pixel-perfect from the design handoff in
`Sunshine Rubber Tech Website/design_handoff_sunshine_rubber_website/`.

## Stack
- **[Astro 5](https://astro.build)** (static output) + **React islands** + **TypeScript**
- Styling: CSS custom-property tokens (`src/styles/tokens.css`) + Astro scoped styles / CSS Modules
- Fonts: Archivo + Hanken Grotesk (Google Fonts)
- Email: **Resend** via a Firebase HTTPS function (`functions/index.js`)
- Hosting: **Firebase Hosting** with static Astro output

Only three components ship JavaScript (Astro islands): the product category filter,
the contact form, and the Messenger chat widget. Everything else is static HTML/CSS.

## Develop
```bash
npm install
cp .env.example .env   # fill in RESEND_API_KEY etc. (optional for UI work)
npm run dev            # http://localhost:4321
```
> This machine's inotify watch limit is low, so dev uses Vite polling
> (`vite.server.watch.usePolling` in `astro.config.mjs`). For pure UI verification
> you can also `npm run build && npm run preview`.

## Build & preview
```bash
npm run build
npm run preview
```

## Project layout
```
src/
  data/        typed content (products, clients, projects, company, nav, tabs, contact)
  styles/      tokens.css, global.css
  layouts/     BaseLayout.astro (head/SEO + chrome)
  components/  Header, Footer, MobileTabBar, HeroDecor + react/ islands
  pages/       index, about, products, clients, contact
functions/     Firebase HTTPS function for contact-form delivery
public/images/ design assets (copied from the handoff)
```

## Responsive
One responsive codebase. Desktop layout ≥768px (max content width 1200px); the
canonical mobile layout (bottom tab bar, full-bleed photo heroes) renders <768px.
Breakpoint is documented as `--bp` in `tokens.css` (hard-coded `768px` in media queries).

## Configuration
| Env var | Purpose |
|---|---|
| `RESEND_API_KEY` | Enables contact-form email delivery |
| `INQUIRY_FROM` | Verified Resend sender |
| `INQUIRY_TO` | Inquiry recipient (default `info@sunshinerubberph.com`) |
| `PUBLIC_MESSENGER_URL` | Real Messenger link for the chat widget |

`site` in `astro.config.mjs` currently uses `https://sunshinerubbertech.web.app`.
Change it to
`https://www.sunshinerubberph.com` after that custom domain is connected and its DNS resolves.

## Deploy to Firebase
```bash
npm run build
npx firebase-tools login
npx firebase-tools use --add
npx firebase-tools functions:secrets:set RESEND_API_KEY
npx firebase-tools deploy
```

Cloud Functions parameters `INQUIRY_FROM` and `INQUIRY_TO` use the defaults in
`functions/index.js`. Change those defaults before deploying if needed. The Resend sender
must belong to a verified domain for delivery to arbitrary recipients.

## GitHub auto-deploy

GitHub Actions builds and deploys Hosting automatically:

- `.github/workflows/firebase-hosting-pull-request.yml` creates a preview for PRs from this repository.
- `.github/workflows/firebase-hosting-merge.yml` deploys the live site after changes reach `main`.

The production workflow deploys to `https://sunshinerubbertech.web.app` and uses the encrypted
repository secret `FIREBASE_SERVICE_ACCOUNT_SUNSHINE_RUBBER_TECH` created by Firebase.

## Pre-launch checklist
- [ ] Confirm which of the **two** contact-number/email sets are current.
- [ ] Replace the chat widget's `m.me/` placeholder (`PUBLIC_MESSENGER_URL`).
- [ ] Provide `RESEND_API_KEY` + a verified sender domain.
- [ ] Verify photo/banner licensing.
- [ ] (Optional) Swap the map placeholder for an embedded map.
