# Walaa Adas — Portfolio

A single-page portfolio that brings together **everything I've built** —
websites, e-commerce themes, and interactive projects — each card linking
straight to its source repository.

🔗 **Live site:** enable GitHub Pages (Settings → Pages → Branch:
`claude/portfolio-built-websites-b17mu9`, folder `/root`) to publish.

## Features

- Responsive, mobile-first layout
- Light / dark theme toggle (remembers your choice)
- Filterable project grid (Websites · E-commerce · Interactive)
- Animated hero, counters, scroll reveals, and gradient background
- Zero build step — pure HTML, CSS & JavaScript

## Projects included

| Project | Type | Live site |
| --- | --- | --- |
| Ada's Website | Website | [adas.com.sa](https://adas.com.sa) |
| Architect Office | Website | [adas-liart.vercel.app](https://adas-liart.vercel.app) |
| Agency Website | Website | [agency-website-eight-opal.vercel.app](https://agency-website-eight-opal.vercel.app) |
| Proposal Website | Website | [proposal-website-blush.vercel.app](https://proposal-website-blush.vercel.app) |
| Creative Agency | Website | _Coming soon_ |
| Salla Theme | E-commerce | _Coming soon_ |
| Ordinary | E-commerce | _Coming soon_ |
| Animal Trading Cards | Interactive | _Coming soon_ |
| Memory Game | Interactive | _Coming soon_ |
| Pixel Art Maker | Interactive | _Coming soon_ |
| Rock Paper Scissors | Interactive | _Coming soon_ |

## Project structure

```
index.html     — markup & sections
styles.css     — design system, layout, animations
projects.js    — the project catalog (edit this to add work)
script.js      — rendering, filters, theme, interactions
```

## Adding a new project

Open `projects.js` and append an object to the `PROJECTS` array:

```js
{
  title: "My New Site",
  category: "website",          // website | ecommerce | app
  year: "2026",
  description: "What it is.",
  tags: ["React", "TypeScript"],
  repo: "https://github.com/wooolly1/my-new-site",
  emoji: "🚀",
  accent: "#7c5cff",
}
```

The card appears in the grid and the stats update automatically.

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```
