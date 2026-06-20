# Handoff: Sunshine Rubber Tech Resources — Marketing Website

## Overview
A 5-page marketing website for **Sunshine Rubber Tech Resources, Co.**, a Philippine manufacturer of molded/extruded rubber and structural products (bridge bearings, expansion joints, gaskets, guardrails, road signage) operating since 1991. The site presents the company, its product lines, client roster, and a contact/inquiry flow. Two coordinated builds are in scope:

- **Desktop / responsive web** — **Direction A (Minimal)** only.
- **Mobile** — a dedicated mobile layout with a bottom tab bar.

Both share one design language, one color system, one type system, and the same content/data.

---

## About the Design Files
The files in `design_references/` are **design references created in HTML** — prototypes that show the intended look, layout, content, and behavior. They are **not production code to copy directly**.

> ⚠️ The `.dc.html` files use an internal authoring runtime (`support.js`, `<x-dc>`, `{{ }}` template holes, `<sc-if>`/`<sc-for>` tags, a `class Component extends DCLogic` block). **Do not ship that runtime.** Treat the markup, inline styles, and the data arrays inside the `Component` class as the source of truth, and **recreate the screens in the target codebase's own environment** (e.g. Next.js/React, Vue, Astro, plain HTML/CSS) using its established patterns. If no codebase exists yet, **Next.js + React** is a good default for a marketing site of this size.

### How to read the reference files
- **Markup + inline `style="…"`** → the exact layout, spacing, colors, and typography. Lift values verbatim.
- **`{{ accent }}`** → the accent color token (see Design Tokens). Default is **Orange `#E8730F`**.
- **`<sc-if value="{{ isHome }}">`** → conditional page/section. The booleans (`isHome`, `isAbout`, …) come from the current route/page.
- **`<sc-for list="{{ products }}" as="p">`** → a `.map()` over an array. The arrays (`products`, `clients`, `projects`, `features`, `timeline`, `missions`, `machinery`, `catCards`) are all defined in the `renderVals()` method of the `<script ... class Component>` block at the bottom of each file — **copy this data into your codebase** (CMS, JSON, or constants).
- **`onClick="{{ goProducts }}"`** → client-side navigation to that page/route.
- **`<image-slot>`** → a drag-and-drop placeholder used only in the prototype for client logos. In production these are plain `<img>` tags pointing at `images/clients/*.png`.

---

## Fidelity
**High-fidelity (hifi).** Colors, typography, spacing, radii, and interactions are final and intentional. Recreate the UI **pixel-perfectly** using the codebase's libraries. Use the exact hex values, font sizes, weights, and spacing documented below and present in the inline styles.

**Important scope note:** The desktop reference file (`Sunshine Rubber Website.dc.html`) contains an in-prototype **direction toggle** ("A · Minimal" / "B · Industrial") and Tweak props (`homeHero`, `accent`, `ctaStyle`). **Ship Direction A (Minimal) with the Sunshine CTA style and the Orange accent.** Direction B (the dark "Industrial" hero) and the toggle UI are exploration scaffolding — **do not build them.** Remove:
- The grey "Two homepage directions — toggle to preview" bar and its A/B pill buttons.
- The entire `<sc-if value="{{ isHeroB }}">` dark hero section.
- The `<sc-if value="{{ isCtaCharcoal }}">` alternate CTA (keep only the yellow "Sunshine" CTA).

---

## Global Layout & Chrome

### Desktop (Direction A)
- **Page background:** `#FAF8F3` (warm off-white). Body text color `#1B1916`.
- **Content width:** `max-width: 1200px`, centered, horizontal padding `48px`.
- **Sticky header** (height `86px`): translucent `rgba(250,248,243,.88)` + `backdrop-filter: blur(12px)`, bottom border `1px solid #E6E0D4`.
  - Left: logo (`images/sunshine-logo.svg`, 64×64) + wordmark — "SUNSHINE RUBBER" (`Archivo 800, 22px, letter-spacing .02em, #1B1916`) above "TECH RESOURCES, CO." (`Hanken Grotesk 600, 11px, letter-spacing .26em, #E0750C`).
  - Right nav: Home / About / Products / Clients / Contact (`Hanken Grotesk`, 15px; active = weight 700 + accent color, inactive = weight 600 + `#1B1916`), then a pill button **"Request a Quote"** (accent bg, white text, `padding 12px 20px`, `border-radius 999px`).
- **Footer:** background `#141210`, white text. 3-column grid (`1.4fr 1fr 1fr`): brand+blurb, "Explore" links, "Contact" block. Divider `1px solid #2C2823`. Bottom row: copyright + location, `#6E665A`.
- **Messenger chat widget** (fixed, bottom-right, `right:24px; bottom:24px`): round 60px launcher, background `#0A7CFF`, Messenger glyph. Opens a 340px card with a gradient header (`linear-gradient(135deg,#0A7CFF,#A033FF,#FF5280)`), a greeting bubble, and an input row. Links out to `https://m.me/`.

### Mobile
- **Frame:** `max-width: 440px`, centered, `overflow-x: clip`, bottom padding `66px` (clears the tab bar).
- **Sticky header** (height `64px`): centered logo (42×42) + smaller wordmark (Archivo 800/15px; sub-label 8px/.22em).
- **Sticky bottom tab bar** (fixed, height `66px`, `max-width:440px`): translucent `rgba(250,248,243,.94)` + blur, top border `1px solid #E6E0D4`. Five tabs — Home / About / Products / Clients / Contact — each a stroked SVG icon + 9.5px label. Active tab uses the accent color; inactive `#9C9484`. Respects `env(safe-area-inset-bottom)`. **SVG `path` `d` values for each icon are in the `tabs` array** in the mobile file's `Component` class.
- **Chat widget:** same as desktop but 56px launcher at `right:16px; bottom:82px` (sits above the tab bar), 300px card.
- All sections use horizontal padding `18px`.

---

## Screens / Views

All five pages are single-page-app routes in the prototype (`page` state). In production, implement as **5 routes**: `/` (Home), `/about`, `/products`, `/clients`, `/contact`. Header/footer/chat persist; mobile adds the bottom tab bar.

### 1. Home
**Purpose:** Introduce the company and route users to products or contact.

**Desktop sections (top → bottom):**
1. **Hero (Direction A — Minimal).** Two-column grid `1.05fr .95fr`, gap `60px`, section padding `76px 0 92px`, background `#FAF8F3`.
   - Left: a pill eyebrow (bordered `1px solid #E0D8C7`, dot in accent + caps label "Industrial Rubber · Structural Systems · Since 1991"); H1 "Engineered rubber for the structures that move." (`Archivo 800, 57px/1.04, letter-spacing -.025em`); lead paragraph (`Hanken Grotesk 400, 18px/1.62, #5A5448, max-width 520px`); two buttons — **Explore Products** (accent fill, white) and **Request a Quote** (outline `1px solid #1B1916`); a stat row of 4: **1991 Established · 35+ Years operating · 60+ Corporate clients · 15+ Product lines** (numbers `Archivo 800, 32px`; "+" in accent; labels `13px #8A8170`).
   - Right: a `2×2` image mosaic, `height 480px`, gap `16px`, radius `18px`. Tall left tile = `images/products/bearing-pad.png` (label "Bearing Pad"); top-right = `images/products/expansion-joint.png` (label "Expansion Joint"); bottom-right = a **yellow `#FDB813` card** "Built to AASHTO spec / Guardrails, signage & joints to engineering-grade standards." Image labels are white caps on `rgba(27,25,22,.82)` chips.
2. **Client logo wall.** White band, top+bottom border `#E6E0D4`, padding `40px 0 44px`. Caps eyebrow "Trusted by the Philippines' leading contractors & developers" (centered, `#A99F8C`). Row of 6 logos (`images/clients/*.png`), `filter: grayscale(1)`, evenly spaced.
3. **Category preview.** Padding `88px 0`. Header row: eyebrow "What we make" (accent) + H2 "Three lines of products" (`Archivo 800, 40px`), and a "View all products →" link (accent). 3-column grid of clickable cards (white, `1px solid #E6E0D4`, radius `16px`, padding `30px 28px 32px`): number (`Archivo 800, 22px`, accent), title (`Archivo 700, 21px`), description. Data = `catCards` array; each card routes to Products pre-filtered by category.
4. **Why us.** Dark band `#1B1916`, white text, padding `84px 0`. Eyebrow "Why Sunshine Rubber" in `#FDB813`; H2 "Quality and prompt delivery, second to none." 4-column grid; each item has a `2px solid` accent top border, title (`Archivo 700, 18px`), description (`#B0A99C`). Data = `features` array.
5. **CTA band (Sunshine style only).** Padding `84px 0`. Yellow `#FDB813` rounded card (radius `22px`, padding `56px`), flex space-between: heading "Need a custom rubber or structural component?" (`Archivo 800, 34px, #1B1916`) + subcopy, and a dark **"Get in touch"** pill button (`#1B1916` bg, white) → Contact.

**Mobile Home:** Single column. Hero stacks (eyebrow → H1 36px → paragraph → two full-width buttons → 2×2 stat grid → 2×2 product preview tiles). Logo wall becomes a `3×2` grid. Category cards stack vertically. Why-us stacks. CTA card full-width with full-width button.

### 2. About
**Purpose:** Company history, vision/mission, capabilities.

- **Hero.**
  - *Desktop:* light band with a factory photo (`images/about-factory.png`) bleeding in from the right under a left-to-right scrim, plus decorative radial "sunburst" glows. Eyebrow "About the company" (accent) + H1 "Three decades of molded and extruded rubber for Philippine infrastructure." (`Archivo 800, 52px`, max-width 780px). `min-height: 440px`.
  - *Mobile:* full-bleed factory photo with a dark bottom gradient; eyebrow `#FFD27A` + white H1 (`31px`) anchored bottom-left. `min-height: 330px`.
- **History + timeline.** Two-column on desktop (`1fr 1fr`, gap 56px): left = two body paragraphs (`Hanken Grotesk 400, 17px/1.7, #3F3A30`); right = 3 timeline cards (white, radius 14px) each with a big accent year + title + description. Mobile stacks paragraphs above the timeline cards. Data = `timeline` array.
- **Vision / Mission.** Dark `#1B1916` band. Desktop `.8fr 1.2fr`: left = "Our vision" eyebrow (`#FDB813`) + the vision quote (`Archivo 600, 26px`); right = "Our mission" + 3 bulleted mission lines (accent dot, `#CFC9BC` text, divider above each). Data = `missions` array. Mobile stacks.
- **Machinery.** Eyebrow "In-house capability" + H2 "Our machinery". Grid of 12 chips (white, radius 12px) — desktop 4 columns, mobile 2. Data = `machinery` array.

### 3. Products
**Purpose:** Browse the product catalog, filterable by category.

- **Hero.** Warm radial-gradient band (`radial-gradient(120% 140% at 12% 30%, #FFE7B0, #FFF3D6, #FFFBF2, #FFFFFF)`) with sunburst decorations. Eyebrow "Our products" + H1 "Molded, extruded & structural products" + lead paragraph. Desktop: a product cutout image (`images/banners/products-cutout.png`) sits to the right (`width 44%`, drop-shadow). Mobile: cutout centered below the copy, `max-width 300px`.
- **Category filter.** Pills: **All / Bridge & Structural / Rubber Products / Road Safety**. Selected = `#1B1916` fill + white; unselected = white + `1px solid #E6E0D4`. Desktop = wrapping row; mobile = horizontally scrollable row (`overflow-x: auto`). Logic = `cat` state filters the `products` array by `p.cat`.
- **Product grid.** Desktop = `repeat(auto-fill, minmax(280px,1fr))`, gap 22px; mobile = 2 columns, gap 14px. Each card (white, `1px solid #E6E0D4`, radius 16px): `4:3` image with a dark caps **tag chip** top-left, then title (`Archivo 700, 19px` desktop / 15px mobile) + blurb. Data = `products`/`allProducts` array (15 items, each `{img, name, cat, tag, blurb}`).
- **Footnote** about AASHTO specification (`#A99F8C`).

### 4. Clients
**Purpose:** Show featured projects and the full client roster.

- **Hero.** Same treatment as About but with `images/banners/clients-banner.png`. Eyebrow "Clients & projects" + H1 "Trusted across major infrastructure" + lead.
- **Featured projects.** H2 "Featured projects". Grid of 6 project cards (image + name + type). Desktop 3 columns (`16:10` images), mobile 2 columns (`16:11`). Data = `projects` array.
- **Partial client list.** H2 + subcopy, then the full roster. Desktop = CSS `columns: 3` (`column-gap: 48px`); mobile = single column. Each row: accent "›" + name, divider `1px solid #ECE7DC`. Data = `clients` array (59 names).

### 5. Contact
**Purpose:** Capture an inquiry and surface contact details.

- **Hero.** Light band; desktop shows a support-rep photo (`images/banners/contact-banner.png`) on the right under a scrim; mobile uses `images/banners/contact-person.png` as a bottom-right cutout. Eyebrow "Get in touch" + H1 "Let's talk specifications" + lead.
- **Body.**
  - *Desktop:* two columns (`1fr 1fr`, gap 56px). Left = info cards (Office & Plant address; a 2-up grid of Primary and Landline/Fax contact cards; a small disclaimer note about two contact sets; a placeholder **Map** block). Right = the **inquiry form** card.
  - *Mobile:* form card first, then info cards stacked, then the map placeholder.
- **Inquiry form** (white card, radius 16px). Heading "Send an inquiry". Fields: **Name, Company, Email** (text inputs) + **Requirement** (textarea, 4 rows). Inputs: `1px solid #E0D8C7`, radius 9px, padding `13px 14px`, background `#FAF8F3`. Submit = full-width accent pill **"Send inquiry"**.
  - *Production:* wire validation (all fields required; valid email) and POST to the company's mail/CRM endpoint. The prototype does not submit.
- **Contact details** (use verbatim):
  - Address: `2070 Candido Street, SEAMCOP Compound, Mapulang Lupa, Valenzuela City 1448`
  - Primary: `7002-4927` · `0925-544-6200` · `info@sunshinerubberph.com` · `www.sunshinerubberph.com`
  - Landline/Fax: `(+632) 443-6808` · `(+632) 443-6809` · `sunshine_rubber@yahoo.com.ph`
  - ⚠️ The materials contain **two sets of contact numbers** — confirm with the client which are current before launch. (The prototype shows a note to this effect.)

---

## Interactions & Behavior
- **Navigation:** Header nav (desktop) and bottom tab bar (mobile) switch routes. Active route is highlighted in the accent color (weight bump on desktop nav). On navigation the prototype scrolls to top — preserve this.
- **Category deep-link:** Home category cards route to `/products` with that category pre-selected.
- **Product filter:** Selecting a category pill filters cards client-side; "All" shows everything.
- **Chat widget:** Toggles open/closed; launcher glyph swaps to an "×" when open. Open animation = `scrIn` keyframe (`opacity 0→1` + `translateY(14px→0)`, `.22s ease`). Send button links to Messenger (`https://m.me/` — replace with the real page URL).
- **Hover/active states:** Buttons and cards should have subtle hover affordances consistent with the codebase (the prototype keeps them minimal — pointer cursor; you may add a light elevation/tint on hover for cards and a slight darken on buttons).
- **Responsive:** Desktop file targets ≥1200px content; collapse the 2-/3-/4-column grids to 1–2 columns below ~900px (the prototype includes a `@media (max-width:900px)` block that disables banner image masks and collapses the contact hero — fold these behaviors into your responsive implementation). The mobile file is the canonical small-screen layout (≤440px frame).

## State Management
- `route` / `page` — current page (`home | about | products | clients | contact`).
- `category` — active Products filter (`All | Bridge & Structural | Rubber Products | Road Safety`).
- `chatOpen` — boolean for the chat widget.
- (Mobile) `menuOpen` exists in the reference but the shipped mobile nav is the bottom tab bar; a drawer is not required.
- Form field state for the contact form (controlled inputs) + validation + submit status.
- No server data fetching is required for content — all copy/data is static (good candidates for a CMS or local constants/JSON).

---

## Design Tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| Background (warm) | `#FAF8F3` | Page background |
| Surface white | `#FFFFFF` | Cards, bands |
| Tile / image bg | `#EFEAE0` | Image placeholders |
| Ink | `#1B1916` | Primary text, dark bands |
| Footer black | `#141210` | Footer background |
| Body text | `#3F3A30` / `#5A5448` | Paragraph text |
| Muted text | `#756E62` / `#8A8170` / `#A99F8C` | Secondary/labels |
| Border | `#E6E0D4` | Card & section borders |
| Border (pill) | `#E0D8C7` | Eyebrow pill / inputs |
| **Accent — Orange (default)** | `#E8730F` | Primary accent (buttons, eyebrows, active nav) |
| Accent — Gold (alt) | `#C2901E` | Alternate accent option |
| Accent — Crimson (alt) | `#C8372A` | Alternate accent option |
| Brand sub-label | `#E0750C` | "TECH RESOURCES, CO." wordmark |
| Sunshine yellow | `#FDB813` | CTA band, AASHTO card, dark-band eyebrows |
| Dark-band text | `#B0A99C` / `#CFC9BC` / `#C9C3B6` | Text on `#1B1916`/`#141210` |
| Messenger blue | `#0A7CFF` | Chat launcher/header gradient start |

> **Accent:** ship **Orange `#E8730F`**. Gold/Crimson are alternates exposed as a Tweak in the prototype — keep the accent as a single themeable token in code so it can be swapped, but default to Orange.

### Typography
- **Display / headings:** **Archivo** (weights 500–900). Used for H1–H3, wordmark, big stat numbers.
- **Body / UI:** **Hanken Grotesk** (weights 400–700). Used for paragraphs, labels, buttons, nav.
- Load via Google Fonts: `Archivo:wght@500;600;700;800;900` + `Hanken+Grotesk:wght@400;500;600;700`.
- **Type scale (desktop → mobile):** H1 hero `57px → 36px`; section H2 `40px → 28px`; page-hero H1 `52px → 30–31px`; H3 `18–22px`; body `17–18px → 15–15.5px`; eyebrow caps `11–12px` with `letter-spacing .14–.16em`; stat numbers `32px → 28px`.
- Headings use tight tracking (`letter-spacing -.02em to -.025em`); eyebrows/wordmark use wide tracking.

### Spacing & Radii
- Content gutter: desktop `48px`, mobile `18px`. Max content width `1200px`.
- Section vertical padding: desktop `~76–96px`, mobile `~34–46px`.
- Radii: cards `12–18px`; large CTA/mosaic `18–22px`; pills/buttons `999px`; inputs `9px`.
- Common gaps: grids `14–22px`; stat/feature columns `24–40px`.
- Shadows: cards are mostly flat (border-only). Chat card `0 18px 50px rgba(20,18,16,.28)`; chat launcher `0 8px 22px rgba(10,124,255,.42)`.

---

## Assets
All in `design_references/images/` — copy into the project's asset pipeline.

- `sunshine-logo.svg` — company sun logo (used in header, footer, chat).
- `clients/` — 6 client logos: `shimizu, eei, megawide, dmci, hanjin, crbc` (.png). Rendered grayscale on the logo wall.
- `products/` — product photos `bearing-pad.png`, `expansion-joint.png`, `seismic-gap.png` and SVG illustrations for the rest (`bearing-sleeve, compressible-pad, column-guard, water-stop, pejf, steel-gasket, rubber-gasket, rubber-bumper, molded-rubber, signage, pavement-studs, guardrail`). Map each to the matching `products` array entry by filename.
- `projects/` — 6 featured-project photos: `tplex, cavitex, mcx-toll, alphaland, sun-residences, the-grove` (.png).
- `banners/` — hero imagery: `products-cutout.png`, `clients-banner.png`, `contact-banner.png` (desktop), `contact-person.png` (mobile cutout), plus wide/alt variants.
- `about-factory.png` — About hero photo.

**Sourcing note:** Confirm licensing/rights for all photographs before launch. The logo and product illustrations are project assets; banner/project photos may be stock or client-supplied — verify.

---

## Files
In `design_references/`:
- **`Sunshine Rubber Website.dc.html`** — desktop/responsive reference. **Build Direction A (Minimal) only** (see Fidelity note). All page data lives in the `Component` class at the bottom.
- **`Sunshine Rubber Mobile.dc.html`** — mobile reference (bottom tab bar, scrollable filters, full-bleed photo heroes).
- `support.js`, `image-slot.js` — **prototype runtime only; do not ship.** Present so the reference files render if you open them in a browser.
- `images/` — all production assets.

### Viewing the references
Open either `.dc.html` in a browser to see the live prototype (they self-load the runtime). Use them side-by-side with this README while implementing. The desktop file's top toggle and the Tweaks (accent/hero/CTA) are prototype-only controls — ignore them and build the spec above.
