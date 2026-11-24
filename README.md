# EGEA 2026

Responsive React website for **Enumerative Geometry in East Asia 2026**, based on the desktop/tablet and mobile references in `mockup/`.

## Run locally

Requires Node.js 22 or later.

```sh
npm ci
npm run dev
```

## Edit the content

Layout and content are kept separate. Most updates require changes only to these files:

| File                      | Content                                                            |
| ------------------------- | ------------------------------------------------------------------ |
| `src/data/conference.js`  | Dates, venue, introductory copy, navigation, footer dialogs        |
| `src/data/speakers.js`    | Invited speakers, affiliations, and submitted titles and abstracts |
| `src/data/about.js`       | About copy and scientific/organizing committee members             |
| `src/data/program.js`     | Timetable, speaker assignments, and related events                 |
| `src/data/information.js` | Campus PDFs, practical details, Hong Kong destinations             |
| `src/theme.css`           | Site-wide color, typography, spacing, and responsive design tokens |
| `src/styles.css`          | Shared components and page-specific content layouts                |
| `public/images/`          | Local, optimized artwork and its generation prompts                |

The Program page uses the timetable from `talks/Talk_Schedule(EGEA26).xlsx`, stored in `src/data/program.js`. It includes 18 talks from December 7–11, the Tuesday conference dinner, and a free Wednesday afternoon. The dinner time is marked TBA because the spreadsheet does not specify it. Submitted titles and abstracts are stored in `src/data/speakers.js` as `String.raw` templates.

Each program day has one event per entry in `timeSlots`; use `null` for an empty time slot. Set an event's `speaker` to an ID from `src/data/speakers.js` to reuse that person's name, affiliation, title, and abstract throughout the timetable. For example, `{ speaker: "chenjing-bu" }` schedules Chenjing Bu's submitted talk. Non-talk events use a `label`; `rowSpan: 2` spans two timetable rows, with `null` in the covered slot. The mobile view combines that span into one entry and omits empty slots. Add an optional `room` only when a venue has been supplied. The Program imports the roster through `speakerById` in `src/data/speakers.js`. All days start expanded and all talk details start collapsed. The “Expand all days” and “Collapse all days” controls change day visibility while preserving individually opened talks. Selecting a timetable entry opens its day and abstract.

Abstracts support inline TeX with `\(...\)` or `$...$`, and display equations with `\[...\]` or `$$...$$`. Use JavaScript `String.raw` templates for titles and abstracts in `src/data/speakers.js` to preserve the submitted TeX:

```js
abstract: String.raw`For \(X = \mathbb{P}^2\), consider the series
  \[ F(q) = \sum_{d \geq 0} N_d q^d. \]`,
```

MathJax 4 uses the STIX2 math font and loads when the Program page renders its abstracts. `MathText` handles both abstract details and timetable previews, including mobile day changes. The runtime and font files are served locally; `predev` and `prebuild` generate `public/vendor/mathjax/` from the pinned npm dependencies. This generated folder is ignored by Git and included in `dist/` automatically.

The Speakers page sorts names by their final word (last name) before displaying them. The list reads down the first column and then the second on desktop, and keeps the same order on mobile. Edit `src/data/speakers.js` to update names and affiliations; its entry order does not control the displayed order. The desktop columns rebalance automatically when speakers are added or removed.

The desktop mockups are the content reference where mobile and desktop copy differ. The mockups contain illustrative conference details: organizers should confirm speaker affiliations, titles, abstracts, rooms, travel estimates, and the timetable before publication. Registration, accommodation, and contact information absent from the mockups are explicitly marked as forthcoming. Add confirmed details to the data files when available.

Header, footer, content gutters, page headings, and colors use the shared tokens in `src/theme.css`. Update those tokens to change the design across every page. Page-specific CSS is reserved for content layouts and artwork; it must not override the shared header, footer, or heading components.

Committee names and affiliations are stored in `src/data/about.js`. Edit each committee’s `members` records as `{ id, name, affiliation }` entries. The About and Speakers pages both render `PeopleList`, so the columns and mobile layout update automatically.

## Structure

- `src/components/`: shared header, footer, dialogs, icons, and location overview.
- `src/pages/`: Home, About, Program, Speakers, and Information layouts.
- `src/data/`: editable conference content.
- Internal links update the React page while keeping the header, footer, styles, and loaded fonts mounted. Browser Back/Forward restores the route and scroll position; modified clicks and external links keep their native behavior.
- Five HTML entry points support direct links and refreshes on static hosting, including GitHub Pages; no server-side route fallback is needed.
- The STIX Two Text fonts are bundled locally under the SIL Open Font License (`public/fonts/OFL.txt`). Artwork and fonts are bundled locally, and the site has no analytics or application backend. The Information page embeds a live Google Map, which requires an internet connection and contacts Google when loaded.

## Production build

```sh
npm run build
npm run preview
```

`npm run preview` rebuilds the site first so the preview includes the latest source changes.

Pushing to `main` runs `.github/workflows/deploy.yml`, which installs the locked dependencies, builds the site, and publishes `dist/` to GitHub Pages. The workflow can also be run manually from the Actions tab. In the repository's **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions** once. The published site is available at <https://egea-2026.github.io/> after the first successful deployment.

For other static hosts, publish the **contents of `dist/`**. Vite uses relative asset URLs, so the build also works under a subdirectory.

## Browser checks

```sh
npx playwright install chromium
npm test
```

The tests cover all five routes at desktop, tablet, and phone sizes, missing resources, horizontal overflow, mobile navigation and keyboard-operated day tabs, expandable abstracts, campus PDF links, and dialog focus restoration.

## Artwork

The ink-wash campus and landscape paintings and six-scene Hong Kong atlas were generated with the built-in image generation tool, then converted to WebP. Exact prompts are recorded in `public/images/prompts.json`. The site uses `campus.webp`, `landscape.webp`, `landscape-mobile.webp`, and `hong-kong.webp`; the atlas is displayed using `AtlasImage`, which uses SVG viewports and proportional cropping to keep each scene undistorted. Decorative backgrounds use `cover` or an automatic dimension to preserve their source aspect ratios. The campus illustration is an artistic interpretation. The Information page embeds the same live HKUST map used on the university’s contact page, and its map link opens the campus destination in a full map.

## Conference poster

The [A3 poster](poster/poster.pdf) uses the same artwork, palette, and fonts, with all 18 speakers and their affiliations. Its [LuaLaTeX source](poster/poster.tex), editable copy, separate artwork, and bundled fonts live in `poster/`. See the [poster instructions](poster/README.md) for compilation and printing. Run `node poster/sync-content.mjs` to refresh its copy from the website data.
