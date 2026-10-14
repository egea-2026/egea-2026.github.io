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
| `src/data/speakers.js`    | Invited speakers and affiliations shown on the Speakers page       |
| `src/data/about.js`       | About copy and scientific/organizing committee members             |
| `src/data/program.js`     | Publication notice and commented draft schedule and abstracts      |
| `src/data/information.js` | Transport, practical details, Hong Kong destinations               |
| `src/theme.css`           | Site-wide color, typography, spacing, and responsive design tokens |
| `src/styles.css`          | Shared components and page-specific content layouts                |
| `public/images/`          | Local, optimized artwork and its generation prompts                |

The Program page currently displays “To be announced.” The draft schedule, titles, and abstracts remain commented out in `src/data/program.js`. To publish the confirmed program, remove its temporary empty `timeSlots` and `days` exports, uncomment and update the draft definitions, then re-enable the skipped schedule and MathJax tests in `tests/site.spec.js`. The existing Program layout reappears automatically when `days` contains entries.

Each program day has one event per entry in `timeSlots`; use `null` for an empty time slot. An event with an `abstract` automatically gets an expandable detailed entry and a clickable schedule cell. Set `speaker` to an ID from the invited roster in `src/data/speakers.js` to reuse that person’s name and affiliation throughout the timetable. The Program imports that roster through `speakerById` in `src/data/program.js`. In the preserved draft, mockup talk slots have `presenter: "To be announced"` until their assignments are confirmed; no provisional speaker names are published. All days start expanded and all talk details start collapsed. The “Expand all days” and “Collapse all days” controls change day visibility while preserving individually opened talks. Selecting a timetable entry opens its day and abstract.

Abstracts support inline TeX with `\(...\)` or `$...$`, and display equations with `\[...\]` or `$$...$$`. Use a JavaScript `String.raw` template in `src/data/program.js` to preserve TeX backslashes:

```js
abstract: String.raw`For \(X = \mathbb{P}^2\), consider the series
  \[ F(q) = \sum_{d \geq 0} N_d q^d. \]`,
```

When abstracts are published, MathJax 4 uses the STIX2 math font and loads only on the Program page. `MathText` handles both abstract details and timetable previews, including mobile day changes. The runtime and font files are served locally; `predev` and `prebuild` generate `public/vendor/mathjax/` from the pinned npm dependencies. This generated folder is ignored by Git and included in `dist/` automatically. The commented first Monday plenary abstract contains sample inline and display mathematics.

Speaker order is column-first on desktop and follows the same reading order on mobile. Change the list in `src/data/speakers.js` to update both views. The desktop columns rebalance automatically when speakers are added or removed.

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

Publish the **contents of `dist/`** to any static host. Vite uses relative asset URLs so the build also works under a subdirectory. The source repository is not the deployable output; use the build above before publishing. No deployment is performed automatically.

## Browser checks

```sh
npx playwright install chromium
npm test
```

The tests cover all five routes at desktop, tablet, and phone sizes, missing resources, horizontal overflow, mobile navigation and keyboard-operated day tabs, expandable abstracts, transport details, and dialog focus restoration.

## Artwork

The ink-wash campus and landscape paintings and six-scene Hong Kong atlas were generated with the built-in image generation tool, then converted to WebP. Exact prompts are recorded in `public/images/prompts.json`. The site uses `campus.webp`, `landscape.webp`, `landscape-mobile.webp`, and `hong-kong.webp`; the atlas is displayed using `AtlasImage`, which uses SVG viewports and proportional cropping to keep each scene undistorted. Decorative backgrounds use `cover` or an automatic dimension to preserve their source aspect ratios. The campus illustration is an artistic interpretation. The Information page embeds the same live HKUST map used on the university’s contact page, and its map link opens the campus destination in a full map.
