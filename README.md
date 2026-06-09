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

| Project | Type | Source |
| --- | --- | --- |
| Ada's Website | Website | [repo](https://github.com/wooolly1/Adas-website-) |
| Architect Office | Website | [repo](https://github.com/wooolly1/Adas) |
| Creative Agency | Website | [repo](https://github.com/wooolly1/creative-agency-website) |
| Agency Website | Website | [repo](https://github.com/wooolly1/agency-website-) |
| Proposal Website | Website | [repo](https://github.com/wooolly1/Proposal-website) |
| Salla Theme | E-commerce | [repo](https://github.com/wooolly1/Salla-theme-1) |
| Ordinary | E-commerce | [repo](https://github.com/wooolly1/ordinary) |
| Animal Trading Cards | Interactive | [repo](https://github.com/wooolly1/animal-trading-cards) |
| Memory Game | Interactive | [repo](https://github.com/wooolly1/memory-game) |
| Pixel Art Maker | Interactive | [repo](https://github.com/wooolly1/pixel-art-maker) |
| Rock Paper Scissors | Interactive | [repo](https://github.com/wooolly1/rock-paper-scissors-game) |

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
