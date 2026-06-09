# Walaa Studio — Portfolio

> Digital identity for the built environment.
> حضور رقمي لعالم العمارة والتصميم الداخلي.

A single-page portfolio for **Walaa Studio** — websites and brand identities
for architecture and interior practices. Bilingual by default, restrained by
choice. Each card links to the live site.

The design is built directly from the studio's brand identity sheet:
architectural drafting language (title block, dimension lines, mono labels),
the `Walaa Studio` wordmark, the brass signature accent, and the
Newsreader / IBM Plex type system.

## Brand

| Token | Value | Role |
| --- | --- | --- |
| Graphite | `#1B1D1E` | Text · anchor |
| Steel | `#4B535A` | Secondary · UI |
| Concrete | `#B7B0A4` | Structure · lines |
| Tracing | `#E7E6E0` | Ground · paper |
| Brass | `#9C7B45` | Signature accent |
| Clay · Sage · Slate | `#B26A4A` · `#758268` · `#3F5468` | Sector accents (one per project) |

**Type** — Newsreader (display), IBM Plex Sans (body), IBM Plex Mono (labels),
IBM Plex Sans Arabic (Arabic).

**Logo assets** live in `assets/`: the wordmark, the Arabic lockup, and the
`W` monogram (also used as the favicon).

## Features

- Light, "tracing paper" aesthetic — faithful to the brand
- Responsive, mobile-first layout
- Filterable project grid (Websites · E-commerce · Lab)
- Real logo assets, animated counters, scroll reveals
- Zero build step — pure HTML, CSS & JavaScript

## Projects included

| Project | Sector | Live site |
| --- | --- | --- |
| Ada's Website | Web · Identity | [adas.com.sa](https://adas.com.sa) |
| Architect Office | Architecture | [adas-liart.vercel.app](https://adas-liart.vercel.app) |
| Agency Website | Agency | [agency-website-eight-opal.vercel.app](https://agency-website-eight-opal.vercel.app) |
| Proposal Website | Interactive | [proposal-website-blush.vercel.app](https://proposal-website-blush.vercel.app) |
| Creative Agency | Agency | _Coming soon_ |
| Salla Theme | E-commerce | _Coming soon_ |
| Ordinary | E-commerce | _Coming soon_ |
| Animal Trading Cards | Lab | _Coming soon_ |
| Memory Game | Lab | _Coming soon_ |
| Pixel Art Maker | Lab | _Coming soon_ |
| Rock Paper Scissors | Lab | _Coming soon_ |

## Project structure

```
index.html     — markup & sections
styles.css     — brand design system, layout, motion
projects.js    — the project catalog (edit this to add work)
script.js      — rendering, filters, counters, reveals
assets/        — logo files (wordmark, Arabic lockup, monogram)
```

## Adding a new project

Open `projects.js` and append an object to the `PROJECTS` array:

```js
{
  title: "My New Site",
  category: "website",          // website | ecommerce | app
  sector: "Architecture",       // short drafting label
  year: "2026",
  description: "What it is.",
  tags: ["React", "TypeScript"],
  url: "https://my-new-site.com", // "" shows "Coming soon"
  accent: "#9c7b45",            // one brand palette colour
}
```

The card appears in the grid and the stats update automatically.

## Run locally

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```
