# Abdelmalek Labbaci — AI Product Engineer

A global, bilingual (English/French) portfolio for AI product, full-stack, founding, integration and solutions engineering opportunities. The home page highlights four systems, Sawtify's MCP server, and a filterable catalog of 20 AI, SaaS and web projects. The architecture page documents engineering decisions and trade-offs with links to source material.

## Run and deploy

This is a static site: no framework, build step or environment variables are required. From the repository root run:

```sh
python3 -m http.server 4173 --bind 0.0.0.0
```

Open `http://localhost:4173/` locally. Deploy the repository as static files to any web host; keep `index.html`, `architecture.html` and the `assets/` directory together. Language defaults to the browser's French preference or English, and the choice is saved in local storage across both pages.

## Content and walkthroughs

Edit `assets/js/config.js` for identity, links, flagship data and the project catalog. Add Loom share or embed URLs to `SITE.loom.sawtify`, `jawebflow`, `fidali` or `ivision` to display a video in the corresponding system dialog. For example:

```js
loom: { sawtify: 'https://www.loom.com/share/YOUR_VIDEO_ID', jawebflow: '', fidali: '', ivision: '' }
```

When a URL is empty, the dialog displays the configured system flow instead. Record approximately 90 seconds per walkthrough. English markup lives in the HTML and French translations in `assets/js/main.js`; project descriptions and flagship trade-offs are bilingual in the config.

## Architecture decision index

- [ADR-001](architecture.html#adr-001): bounded RAG and short-lived context caching.
- [ADR-002](architecture.html#adr-002): voice prompts and on-demand knowledge retrieval.
- [ADR-003](architecture.html#adr-003): remote MCP authentication and developer keys.
- [ADR-004](architecture.html#adr-004): Live reasoning, dialectal TTS and server-side metering.
- [ADR-005](architecture.html#adr-005): social webhook rules, Supabase migration and app-less UX.

Benchmark figures describe the documented workloads, not universal performance guarantees. Review project claims and links against current source and measurements before publishing updates.
