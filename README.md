# Yash — Portfolio Website

**Refined Editorial Futurism** · Bilingual EN/JP · 6-Page SPA · Three.js 3D Hero

---

## 📁 Folder Structure

```
yash-portfolio/
├── index.html              ← Entry point (open this in browser)
├── README.md
│
├── css/
│   ├── base.css            ← Design tokens, reset, global styles, cursor, loader
│   ├── components.css      ← Nav, buttons, cards, marquee, shared UI
│   ├── pages.css           ← Page-specific styles (all 6 pages)
│   └── responsive.css      ← Breakpoints: 320px → 1440px+ / print / touch
│
└── js/
    ├── data.js             ← ★ ALL CONTENT DATA — edit here to update the site
    ├── i18n.js             ← Bilingual system (EN/JA). Translation strings here.
    ├── cursor.js           ← Custom cursor + trailing ring
    ├── loader.js           ← Cinematic Y→A→S→H letter loader
    ├── nav.js              ← Navigation, scroll progress bar, mobile hamburger
    ├── router.js           ← Client-side page router + curtain transitions
    ├── hero3d.js           ← Three.js: icosahedron, torus, particles
    ├── animations.js       ← Scroll observer, count-up, magnetic buttons, parallax
    ├── main.js             ← Entry point — boots all modules
    │
    └── pages/
        ├── home.js         ← Home: hero, marquee, services preview
        ├── about.js        ← About: stats, timeline, profiles
        ├── resume.js       ← Resume: 5-tab system (work/edu/skills/certs/achievements)
        ├── projects.js     ← Projects: filterable card grid
        ├── services.js     ← Services + interactive skill matrix
        └── contact.js      ← Contact form + social links
```

---

## 🚀 Quick Start

### Option A — Open directly (easiest)
```bash
open index.html
```
Or double-click `index.html`. Works in any modern browser.

### Option B — Local server (recommended for fonts/CDN)
```bash
# Python
python3 -m http.server 3000

# Node.js (npx)
npx serve .

# VS Code
# Install "Live Server" extension → right-click index.html → "Open with Live Server"
```
Then open `http://localhost:3000`

---

## ✏️ How to Customise

### Update Content
Edit **`js/data.js`** — all content (experience, projects, skills, certifications, etc.) lives here. No need to touch HTML.

### Update Translations
Edit **`js/i18n.js`** → the `T = { en: {}, ja: {} }` object.

### Update Colours / Fonts
Edit the `:root` block in **`css/base.css`**.

### Add a New Project
In `js/data.js`, add an object to the `projects` array:
```js
{
  category: 'web',     // 'blockchain' | 'web' | 'java' | 'ai'
  icon:     '🚀',
  period:   'Jan 2024 – Mar 2024',
  titleEn:  'My New Project',
  titleJa:  '新しいプロジェクト',
  descEn:   'Description in English.',
  descJa:   '日本語の説明。',
  stack:    ['React', 'Node.js', 'PostgreSQL'],
}
```

---

## 🛠 Tech Stack

| Concern | Tool |
|---------|------|
| HTML/CSS/JS | Vanilla — no build step required |
| 3D Hero | [Three.js r128](https://threejs.org/) via CDN |
| Fonts | Google Fonts: DM Serif Display, Syne, Noto Sans JP, JetBrains Mono |
| Animations | CSS transitions + IntersectionObserver (no GSAP dependency) |
| Language | EN/JP toggle, persisted in `localStorage` |
| Routing | Custom client-side router with curtain transitions |

---

## 🌐 Deployment

The site is **zero-dependency** — no build step, no npm install.

### Netlify Drop
Drag the `yash-portfolio/` folder to [netlify.com/drop](https://app.netlify.com/drop)

### GitHub Pages
Push to a repo → Settings → Pages → Deploy from branch

### Vercel
```bash
npx vercel --prod
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| `--navy` | `#0D2137` |
| `--teal` | `#1D9E75` |
| `--off-white` | `#F7F8FA` |
| Display font | DM Serif Display |
| UI font | Syne |
| Japanese font | Noto Sans JP |
| Code font | JetBrains Mono |

---

## 📋 Pages

1. **Home** — Cinematic loader · 3D hero (Three.js) · tech marquee · services preview
2. **About** — Bilingual bio · stat count-ups · India→Tokyo timeline · profile links
3. **Resume** — 5-tab system: Work · Education · Skills · Certifications · Achievements
4. **Projects** — Filterable card grid: All / Blockchain / Web / Java
5. **Skills** — 6 service cards · interactive skill proficiency matrix with animated bars
6. **Contact** — Availability badge · contact form · social links

---

*Built with ♥ in Tokyo · ヤシュ*
