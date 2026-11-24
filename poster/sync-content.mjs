// Run from any directory: node poster/sync-content.mjs
// This script reads local website data; it does not fetch external content.
import { readFile, writeFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
async function readData(path) {
  const source = await readFile(new URL(path, root), "utf8");
  return import(`data:text/javascript;base64,${Buffer.from(source).toString("base64")}`);
}
const [{ conference }, { speakers }] = await Promise.all([
  readData("src/data/conference.js"),
  readData("src/data/speakers.js"),
]);
const escapeTex = (value) => String(value).replace(
  /[\\{}$&#%_^~]/g,
  (char) => ({
    "\\": "\\textbackslash{}", "{": "\\{", "}": "\\}",
    "$": "\\$", "&": "\\&", "#": "\\#", "%": "\\%",
    "_": "\\_", "^": "\\textasciicircum{}", "~": "\\textasciitilde{}",
  })[char],
);
const collator = new Intl.Collator("en", { sensitivity: "base" });
const lastName = ({ name }) => name.trim().split(/\s+/).at(-1);
const sorted = [...speakers].sort((a, b) =>
  collator.compare(lastName(a), lastName(b)) || collator.compare(a.name, b.name),
);
if (sorted.length > 18) {
  throw new Error("This A3 layout has room for 18 speakers; adjust the row height before adding more.");
}
const middle = Math.ceil(sorted.length / 2);
const command = (name, value) => `\\newcommand{\\${name}}{${escapeTex(value)}}`;
const column = (name, people) => `\\newcommand{\\${name}}{%\n${people.map(
  ({ name, affiliation }) => `  \\PosterSpeaker{${escapeTex(name)}}{${escapeTex(affiliation)}}%`,
).join("\n")}\n}`;

// Line breaks are a deliberate part of the poster's title treatment.
if (conference.name !== "Enumerative Geometry in East Asia") {
  throw new Error("The conference title changed; update the poster title line breaks.");
}
const content = [
  "% Editable conference copy. Generated from the website's local data.",
  "% Re-run sync-content.mjs to refresh names, affiliations, dates and venue.",
  command("PosterTitle", conference.name),
  command("PosterTitleFirst", "Enumerative"),
  command("PosterTitleSecond", "Geometry"),
  command("PosterTitleThird", "in East Asia"),
  command("PosterSeries", "EGEA"),
  command("PosterYear", conference.year),
  command("PosterDates", conference.dates.replace(/\s*–\s*/g, "–")),
  command("PosterVenue", conference.venue),
  command("PosterRoom", "Cheung On Tak Lecture Theater (LT-E), 1/F Academic Building"),
  command("PosterAddress", conference.address),
  command("PosterURL", "https://egea-2026.github.io/"),
  command("PosterURLLabel", "egea-2026.github.io"),
  command("PosterFooter", "Programme · registration · visitor information"),
  "",
  "% Read down the left column, then down the right, as on the website.",
  column("PosterSpeakersLeft", sorted.slice(0, middle)),
  column("PosterSpeakersRight", sorted.slice(middle)),
  "",
].join("\n");
await writeFile(new URL("content.tex", import.meta.url), content);
console.log(`Updated content.tex: ${sorted.length} speakers, ${conference.dates}.`);
