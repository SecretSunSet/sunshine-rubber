# Contact page — interactive map

**Date:** 2026-06-21
**Status:** Approved

## Goal

Replace the non-functional placeholder map on the contact page with a real,
interactive Google Maps embed of the office/plant location.

## Decisions

- **Provider:** Google Maps **iframe embed** (`output=embed`). No API key, no
  billing, no JavaScript.
- **Pin source:** Exact coordinates from the company's Google Maps listing
  (`14.697403, 121.002117`). The free-form address string did not geocode to a
  confident point, so the embed showed no marker; coordinates guarantee a pin.
- **Scope:** Drop into the existing `.map` container; preserve current sizing
  (200px desktop / 150px mobile), border, radius, and `margin-top`.

## Implementation

In `src/pages/contact.astro`:

- Replace the placeholder `.map` div (currently a striped box with a
  `.map-label` span and `role="img"` / `aria-label`) with an `<iframe>`:
  - `src="https://www.google.com/maps?q=14.697403,121.002117&z=16&output=embed"`
  - `loading="lazy"` — never blocks page render.
  - `title="Map showing Sunshine Rubber Tech Resources, Valenzuela City"` for
    screen readers.
  - `referrerpolicy="no-referrer-when-downgrade"`.
- Update `.map` CSS: remove the striped placeholder background and centering;
  make the iframe fill the box (`width:100%; height:100%; border:0; display:block`).
  Keep the rounded/bordered frame and responsive heights.
- Remove the now-unused `.map-label` style.
- Add a small text link below the map: **"Open in Google Maps →"** pointing at
  the full address (works even if the iframe is blocked; clear path to directions).

## Trade-offs

- Google's embed sets Google cookies on load. Standard and expected for a
  business contact page; accepted consciously. No consent gate (out of scope).

## Out of scope (YAGNI)

Custom map styling, branded markers, multiple locations, cookie-consent gating.

## Verification

- `npm run build` succeeds (dev server is unusable in this environment — inotify
  exhausted; verify via build + static serve).
- Confirm the iframe markup and `src` are present in the built `contact` page.
- Live map tiles require network; not asserted in the offline headless check.
