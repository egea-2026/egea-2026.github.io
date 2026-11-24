# EGEA 2026 · A3 conference poster

An A3 portrait poster (297 × 420 mm), using the website's warm ivory, ink-wash landscape, muted teal, and STIX Two Text typography. The PDF contains live text with embedded fonts, a vector QR code, and separate raster artwork.

## Compile

From this directory, with a current TeX Live or MiKTeX installation:

```sh
lualatex -halt-on-error poster.tex
lualatex -halt-on-error poster.tex
```

The second pass resolves page positioning and PDF links. Required packages are `geometry`, `fontspec`, `graphicx`, `xcolor`, `tikz`, `qrcode`, and `hyperref`. Fonts are included locally; no system font installation, shell escape, network access, or Node.js is needed to compile. Use **LuaLaTeX** in Overleaf and set `poster.tex` as the main document. Upload the entire `poster/` directory, including its fonts and artwork.

## Edit

- `poster.tex`: page layout, sizes, colors, and typography.
- `content.tex`: title, dates, venue, URL, names, and affiliations.
- `artwork.tex`: independent decorative image layer.
- `assets/landscape.png`: the website's existing landscape, converted losslessly from WebP. No lettering is included in the image.
- `fonts/`: the website's STIX Two Text fonts and SIL Open Font License.

The speaker list includes all 18 entries from `src/data/speakers.js`, alphabetized by the final word of the name to match the website. Full affiliations are retained. Each column reads from top to bottom.

To refresh `content.tex` from the website's local data, run from the repository root:

```sh
node poster/sync-content.mjs
```

This optional script requires Node.js and overwrites manual changes to `content.tex`. If the roster grows beyond 18 people, adjust the layout before regenerating.

## Print

Print `poster.pdf` at **actual size / 100% on A3**. This is a trim-size PDF, with no crop marks or bleed. All text and rules remain sharp at any resolution. The original ink-wash image is 1536 × 1024 pixels (about 131 ppi at its placed width); it is a soft decorative painting, while the conference details are rendered independently as vector text. For a printer that requires 300 ppi artwork or bleed, supply a higher-resolution painting in `assets/landscape.png` or request that production format from the printer.
