# DnHub — React Implementation Guide

A build guide for turning the single-file `index.html` prototype into a clean, component-based **React + JavaScript (Vite)** project.

> **Source of truth:** the existing `index.html` in this project holds the final markup, all CSS, the EN/KO copy, and the Marnee mascot (inlined as a data-URI). Lift styles and copy directly from it — this guide tells you how to slice it into components.

---

## 1. Tech stack

- **Vite** + **React 18** (JavaScript, *not* TypeScript)
- Plain **CSS** with CSS custom properties (no Tailwind/CSS-in-JS needed — the prototype is already token-based)
- No router needed (single-page, anchor-scroll sections)
- Fonts via Google Fonts: **Anton**, **Archivo Black**, **Black Han Sans** (Korean display), **Space Grotesk**, **Noto Sans KR**

---

## 2. Prerequisites

```bash
node -v   # v18+ recommended
npm -v
```

## 3. Scaffold the project

```bash
npm create vite@latest dnhub -- --template react
cd dnhub
npm install
npm run dev
```

Delete the Vite boilerplate (`src/App.css`, the demo markup in `src/App.jsx`, the logo assets).

---

## 4. Target folder structure

```
dnhub/
├─ index.html                      # Vite entry (add font <link>s + <html data-accent="yellow" data-font="anton" lang="en">)
├─ public/
│  └─ mascot/
│     └─ marnee-megaphone.png      # export the mascot pose here (see §9)
├─ src/
│  ├─ main.jsx                     # ReactDOM.createRoot
│  ├─ App.jsx                      # composes all sections + providers
│  │
│  ├─ styles/
│  │  ├─ tokens.css                # :root variables, accent + font data-attr maps
│  │  ├─ base.css                  # reset, body, .wrap, grain overlay, typography helpers
│  │  └─ components.css            # OR co-locate per-component .css (your call)
│  │
│  ├─ i18n/
│  │  ├─ LanguageContext.jsx       # provider + useLang() hook
│  │  └─ translations.js           # { en: {...}, ko: {...} } keyed dictionary
│  │
│  ├─ components/
│  │  ├─ Nav.jsx
│  │  ├─ LanguageToggle.jsx
│  │  ├─ Ribbon.jsx                # reusable marquee (props: items, tilt, dark, reverse)
│  │  ├─ Button.jsx                # variants: dark | accent | blue | ghost-dark
│  │  ├─ TagPill.jsx               # variants: default | blue | org | pur | yel
│  │  ├─ ImageSlot.jsx             # bordered image frame (replaces <image-slot>)
│  │  ├─ Polaroid.jsx
│  │  ├─ ServiceCard.jsx
│  │  ├─ WhoCard.jsx
│  │  ├─ TeamCard.jsx
│  │  ├─ Badge.jsx                 # credential badge (gold variant for Oasis)
│  │  └─ FaqItem.jsx               # <details>-based accordion
│  │
│  ├─ sections/
│  │  ├─ Hero.jsx
│  │  ├─ Statement.jsx
│  │  ├─ Stats.jsx                 # floating 50+/3M+/3/4
│  │  ├─ WhatWeDo.jsx              # yellow block
│  │  ├─ Services.jsx             # giant "SERVICES" word + 4 ServiceCards
│  │  ├─ Work.jsx                  # giant "OUR WORK" + Polaroids
│  │  ├─ Marnee.jsx                # dark section + mascot
│  │  ├─ WhoWeWorkWith.jsx
│  │  ├─ About.jsx                 # ghost word + yellow block + Badges
│  │  ├─ Team.jsx
│  │  ├─ Faq.jsx
│  │  ├─ Cta.jsx
│  │  └─ Footer.jsx
│  │
│  └─ hooks/
│     └─ useReveal.js              # IntersectionObserver scroll-reveal (.reveal -> .in)
```

---

## 5. Global setup

### `index.html` (Vite root)
Add the font links in `<head>` and set the theme attributes on `<html>`:

```html
<html lang="en" data-accent="yellow" data-font="anton">
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo+Black&family=Black+Han+Sans&family=Space+Grotesk:wght@400;500;600;700&family=Noto+Sans+KR:wght@400;500;700;900&display=swap" rel="stylesheet" />
  </head>
```

### `src/styles/tokens.css`
Copy the `:root`, `:root[data-accent="…"]`, and `:root[data-font="…"]` blocks **verbatim** from `index.html`. These are the single source of design truth:

```css
:root[data-accent="yellow"]{--accent:#ecd11d;--accent-deep:#d4ba0c;--on-accent:#1a1813;}
:root[data-accent="purple"]{--accent:#8b5cf6;--accent-deep:#6d3fe0;--on-accent:#fff;}
:root[data-accent="orange"]{--accent:#e8772a;--accent-deep:#cc5f14;--on-accent:#fff;}
/* + the --cream / --ink / --blue / --orange / --purple / fonts vars */
```

Import order in `main.jsx`:
```js
import './styles/tokens.css';
import './styles/base.css';
import './styles/components.css';
```

---

## 6. Design tokens (quick reference)

| Token | Value | Use |
|---|---|---|
| `--cream` | `#efe9d6` | page background |
| `--ink` | `#1a1813` | text, 2px borders |
| `--black` | `#16150f` | dark sections (Services, Marnee, Footer) |
| `--accent` | `#ecd11d` (yellow) | nav bar, ribbons, yellow blocks, CTA — swappable |
| `--blue` | `#a9cde8` | tag pills, service card 2, who-card 2 |
| `--orange` | `#e8772a` | tag pills, service card 3, who-card 4 |
| `--purple` | `#8b5cf6` | service card 4, Marnee mascot |
| `--font-display` | Anton / Archivo Black | giant banner words + statements |
| `--font-head` | Archivo Black | card titles, chunky headings |
| `--font-body` | Space Grotesk | body, labels, buttons |

Korean fallbacks are already chained into the font vars (`'Anton','Black Han Sans'`, `'Space Grotesk','Noto Sans KR'`) so Korean glyphs auto-render in a heavy poster face.

---

## 7. Reusable component contracts

### `Ribbon.jsx`
The scrolling marquee. Render each item twice (the CSS `@keyframes scrollx` translates `-50%`).
```jsx
// props: items: string[], tilt?: boolean, dark?: boolean, reverse?: boolean
export default function Ribbon({ items, tilt, dark, reverse }) {
  const row = [...items, ...items];
  return (
    <div className={`ribbon ${tilt ? 'tilt' : ''} ${dark ? 'dark' : ''} ${reverse ? 'rev' : ''}`}>
      <div className="ribbon-track">
        {row.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  );
}
```

### `Button.jsx`
`variant: 'dark' | 'accent' | 'blue' | 'ghost-dark'`, `href`, `children`. **No arrow icons** (the client removed them). Maps to `.btn .btn-{variant}`.

### `ImageSlot.jsx`
In production, replace the prototype's `<image-slot>` web component with a real `<img>` (or a styled placeholder when `src` is empty). Keep the 2px ink border + optional `radius`/`rotate` props so the polaroid/collage look survives.
```jsx
export default function ImageSlot({ src, alt = '', radius = 0, className = '', style }) {
  return src
    ? <img className={`img-slot ${className}`} src={src} alt={alt} style={{ borderRadius: radius, ...style }} />
    : <div className={`img-slot is-empty ${className}`} style={{ borderRadius: radius, ...style }} />;
}
```

### `ServiceCard.jsx`
`props: index, badge, title, desc, items: string[], color: 'c1'|'c2'|'c3'|'c4', image`. Renders the `.svc-card.{color}` block with the bordered "what's included" list.

### `FaqItem.jsx`
Wrap native `<details class="faq">` + `<summary>` so the CSS accordion keeps working with zero JS.

### `Badge.jsx`
`props: children, gold?` → `.std-badge` / `.std-badge.gold` (Oasis = gold, rendered black-on-accent for emphasis).

---

## 8. Internationalization (EN / KO)

The prototype walks text nodes; in React, do it **declaratively** with a keyed dictionary instead.

### `src/i18n/translations.js`
Port every string from the `I18N` object in `index.html`. Keep `en` as the canonical key set; `ko` mirrors it. **Leave proper nouns in English in the `ko` map too** (`K-Beauty`, `DnHub`, `Marnee`, `UGC`, `AI`, the email).

```js
export const translations = {
  en: { nav_services: 'Services', hero_line1: 'K-Beauty,', hero_line2: 'unignorable.', /* … */ },
  ko: { nav_services: '서비스',   hero_line1: 'K-Beauty,', hero_line2: '무시할 수 없게.', /* … */ },
};
```

### `src/i18n/LanguageContext.jsx`
```jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const Ctx = createContext();
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en');
  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);
  const t = (key) => translations[lang][key] ?? translations.en[key] ?? key;
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}
export const useLang = () => useContext(Ctx);
```

Usage in any component: `const { t } = useLang(); …{t('nav_services')}`.
`LanguageToggle.jsx` calls `setLang('en' | 'ko')` and highlights the active button.

---

## 9. The Marnee mascot

The pose currently used (purple monster + megaphone) is inlined as a data-URI in `index.html`. To extract it for the React app:
1. Open `index.html`, find `<img class="marnee-mascot" src="data:image/png;base64,…">`.
2. Decode that base64 to a file and save as `public/mascot/marnee-megaphone.png` (any base64→PNG tool, or `node -e`).
3. In `Marnee.jsx`: `<img className="marnee-mascot" src="/mascot/marnee-megaphone.png" alt="Marnee mascot" />`.

The original 9-pose sprite sheet is available if you want a different pose (headphones+tablet reads more "dashboard").

---

## 10. Scroll reveal hook

```js
// hooks/useReveal.js
import { useEffect } from 'react';
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
```
Call `useReveal()` once in `App.jsx`.

---

## 11. App composition

```jsx
// App.jsx
export default function App() {
  useReveal();
  return (
    <LanguageProvider>
      <Nav />
      <main id="top">
        <Hero />
        <Ribbon items={['K-Beauty Growth','Creator Campaigns','UGC Production','Social Strategy','AI Workflows','Seoul → Global']} tilt />
        <Statement />
        <Stats />
        <WhatWeDo />
        <Services />
        <Work />
        <Ribbon items={['Where K-Beauty Breaks Borders','Build Loud','Grow Bold','Make Noise']} tilt reverse />
        <Marnee />
        <WhoWeWorkWith />
        <About />
        <Ribbon items={['Meet the Team','Meet the Team','Meet the Team']} />
        <Team />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
```

---

## 12. Things to keep intact when porting

- **2px solid `--ink` borders + hard offset shadows** (`box-shadow: 4px 5px 0 …`) — the "sticker" look.
- **Grain overlay** on `body::before` (the inline SVG `feTurbulence` data-URI).
- **Floating stats have no boxes** — just big `--font-display` numbers with the `+` in `--accent-deep`.
- **Oasis badge = gold/black** for emphasis (most important credential for the studio).
- **`data-accent` / `data-font`** on `<html>` drive the whole theme — keep them as the Tweaks mechanism (a small settings UI can just set these attributes).
- Buttons have **no arrow icons**.
- `K-Beauty` stays Latin in Korean.

---

## 13. Build & deploy

```bash
npm run build      # outputs to /dist
npm run preview    # local preview of the production build
```
Deploy `/dist` to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

---

## 14. Suggested build order for Claude (local)

1. Scaffold Vite + fonts + `tokens.css` / `base.css`.
2. Build `LanguageProvider` + `translations.js` (port the dictionary first — everything depends on copy).
3. Primitives: `Button`, `TagPill`, `ImageSlot`, `Ribbon`, `Badge`.
4. `Nav` + `LanguageToggle`.
5. Sections top-to-bottom (Hero → Footer), pasting CSS per component from `index.html`.
6. `useReveal` hook + final QA pass (responsive at 920px / 600px breakpoints, EN/KO toggle, accent swap).
