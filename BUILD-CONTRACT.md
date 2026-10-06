# SPARKOS LANDING — BUILD CONTRACT

Scaffold contract for the two section-builders. Read this before touching any
section file. The scaffold engineer owns everything in `src/components/` and
`src/index.css`; section builders own only `src/sections/`.

## 1. Project

- Vite + React 19 + TypeScript + Tailwind CSS v4 (via `@tailwindcss/vite`).
- Dev: `npm run dev` · Build: `npm run build` (runs `tsc -b && vite build`).
- No Next.js, no framer-motion, no backend/auth. Deps stay minimal.
- `src/assets/` is intentionally empty — each section builder generates its
  own imagery (media tooling or CSS gradients) and places files there.
  **No broken image references, ever.**

## 2. Theme tokens (Tailwind v4 `@theme` in `src/index.css`)

Use these classes/tokens exactly — never hardcode different hexes:

| Token              | Value     | Class examples                          |
|--------------------|-----------|-----------------------------------------|
| `--sparkos-blue`   | `#003AFF` | `bg-sparkos-blue`, `text-sparkos-blue`  |
| `--sparkos-cyan`   | `#00E5FF` | `text-sparkos-cyan`, `border-sparkos-cyan` |
| `--sparkos-ink`    | `#0A0A0F` | `bg-sparkos-ink`                        |
| white              | `#FFFFFF` | default body text                       |

- Typeface: Inter (loaded in `index.html` with preconnect), `font-sans` default.
- Headings: Inter Bold/Extra Bold (`font-bold`/`font-extrabold`); section
  headings `font-bold`/`font-semibold`; body `font-normal`; buttons/labels
  `font-medium`.

## 3. Brand rules (non-negotiable)

- Tagline is EXACTLY **"Turn Attention Into Growth."** — the old tagline
  "Turn Ideas Into Intelligent Systems" appears only in `reference.png`
  (visual reference of the OLD design) and must NEVER be used on the site.
- Logo: the ONLY logo source is `public/logo.png` (cropped from
  `reference.png`, mark + wordmark, old tagline excluded). Import it only
  through `src/components/Logo.tsx`. Do not redesign, distort, or replace it.
- Service order (always): 1) AI Content & Growth (PRIMARY SERVICE, strongest
  emphasis) → 2) AI Automation → 3) AI Websites & AI Agents → 4) Video Editing.
- Pricing (exact, no invented discounts/deliverables):
  Starter ₹15,000/mo · Growth ₹25,000/mo (MOST POPULAR) · Scale ₹40,000/mo ·
  Custom ₹60,000+/mo. Include the exact deliverable lists from PROMPT.md §11.
- Links: ALL social/contact links are `href="#"` placeholders. Privacy Policy
  and Terms of Service are `href="#"` placeholders. **No invented URLs,
  emails, phone numbers, addresses, or contact info anywhere.**
- Portfolio: every project card labeled **"Sparkos Concept Project"**.
  Do not fabricate client names, logos, testimonials, results, or statistics.
- About: do not invent team members, office locations, company history, or
  client achievements.
- Footer copyright: `© 2026 Sparkos. All rights reserved.`

## 4. Shared primitives API (`src/components/`)

```tsx
import Logo from "../components/Logo";
import Button from "../components/Button";
import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";
import Container from "../components/Container";
```

- **Logo** `{ className?: string; height?: number /* default 36 */; withTagline?: boolean }`
  Renders a link to `#top` wrapping `/logo.png`. Set `withTagline` for the
  navbar/footer lockup (official tagline beneath the wordmark).
- **Button** `{ children; href?; variant?: "primary" | "secondary"; onClick?; className?; type?; ariaLabel? }`
  `primary` = blue gradient with arrow (arrow nudges right on hover).
  `secondary` = outline. Renders `<a>` when `href` is given, else `<button>`.
- **SectionLabel** `{ children; className? }` — eyebrow pill: cyan uppercase
  text on dark pill with subtle cyan border.
- **Reveal** `{ children; delay?: number /* ms */; className?; threshold?: number }`
  IntersectionObserver fade-up, fires once. Honors `prefers-reduced-motion`
  (content renders visible immediately). Shared CSS lives in `src/index.css`
  (`.reveal` / `.is-visible`, `--reveal-delay`).
- **Container** `{ children; className? }` — `max-w-7xl` centered wrapper with
  responsive side padding.

Do not modify these files without coordinating with the scaffold engineer.

## 5. Section files + anchors (`src/sections/`)

| File                 | Anchor        | Notes                                  |
|----------------------|---------------|----------------------------------------|
| `Navbar.tsx`         | `id="navbar"` | Sticky; `#top` is the page-top anchor on App root |
| `Hero.tsx`           | `id="home"`   |                                        |
| `Capabilities.tsx`   | *(none)*      | Strip directly below hero              |
| `Services.tsx`       | `id="services"` |                                      |
| `Industries.tsx`     | `id="industries"` |                                    |
| `FeaturedService.tsx`| `id="featured"` |                                      |
| `Process.tsx`        | `id="process"` |                                       |
| `Pricing.tsx`        | `id="pricing"` |                                       |
| `Portfolio.tsx`      | `id="work"`   |                                        |
| `WhySparkos.tsx`     | `id="why"`    |                                        |
| `About.tsx`          | `id="about"`  |                                        |
| `Contact.tsx`        | `id="contact"` | CTA + inquiry form                    |
| `Faq.tsx`            | `id="faq"`    | After Contact, per PROMPT.md order     |
| `Footer.tsx`         | *(none)*      | `<footer>` element                     |

Page order in `src/App.tsx`: Navbar → Hero → Capabilities → Services →
Industries → FeaturedService → Process → Pricing → Portfolio → WhySparkos →
About → Contact → Faq → Footer.

## 6. Animation rules

- Subtle only. Hero entrance 400–800ms staggered fade-up; no dramatic zooms.
- Hero automation card: 6s loop, sequential node illumination, cyan pulse
  along connectors, brief checkmark before reset.
- Scroll reveal via `Reveal` — small 24px rise, trigger once.
- Card hover: border brighten, slight blue/cyan glow increase, lift a few px.
- Buttons: color/brightness transitions, small arrow nudge; clear focus rings.
- Animate `transform`/`opacity` only. Every animation honors
  `prefers-reduced-motion` (global kill-switch in `index.css`; `Reveal`
  short-circuits too). Never hide content if JS fails.
- Utility: `.bg-grid` for subtle background grid detail.

## 7. Accessibility & quality bar

- Semantic HTML, correct heading order, meaningful alt text, readable contrast.
- Keyboard-operable nav/menu/accordion/form; visible `:focus-visible` styles
  (already in `index.css`).
- Mobile-first responsive; test mentally at 375 / 768 / 1024 / 1440 px.
- No empty sections, no dead buttons, no broken links, no layout shift.

## 8. Stub-replacement protocol (for the two section builders)

1. You **OVERWRITE** the stub file in place — same filename, same default
   export name, same anchor (`id` or `aria-label`). Never rename files.
2. Keep the section root as `<section>` (or `<header>`/`<footer>` for
   Navbar/Footer) with the anchor intact so nav smooth-scroll keeps working.
3. Import shared primitives from `../components/`; do not duplicate them.
4. Do not add dependencies to `package.json` without scaffold-engineer approval.
5. Do not invent content outside PROMPT.md (no fake stats, clients, or contact
   details). The inquiry form validates client-side and states honestly that
   real delivery needs a connected endpoint — never claim a message was sent.
6. After replacing, run `npm run build` and fix any TypeScript errors before
   handing off.
