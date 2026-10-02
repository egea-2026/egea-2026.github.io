import { cp, mkdir, readFile, writeFile } from "node:fs/promises";

// Keep MathJax's runtime directory structure for its on-demand TeX/font loads.
// Vite copies public/ into dist/ unchanged, including for subdirectory hosting.
const root = new URL("../", import.meta.url);
const destination = new URL("public/vendor/mathjax/", root);
const packages = ["mathjax", "@mathjax/mathjax-stix2-font"];
const versions = await Promise.all(
  packages.map(async (name) => {
    const metadata = JSON.parse(
      await readFile(
        new URL(`node_modules/${name}/package.json`, root),
        "utf8",
      ),
    );
    return `${name}@${metadata.version}`;
  }),
);
const signature = versions.join("\n");
const stamp = new URL(".versions", destination);
// Avoid rewriting unchanged assets: a running Vite server watches this folder.
if ((await readFile(stamp, "utf8").catch(() => "")) === signature)
  process.exit(0);
await mkdir(destination, { recursive: true });
await cp(new URL("node_modules/mathjax/", root), destination, {
  recursive: true,
});
const fontSource = new URL("node_modules/@mathjax/mathjax-stix2-font/", root);
const fontDestination = new URL("stix2/", destination);
await mkdir(fontDestination, { recursive: true });
for (const entry of ["chtml.js", "chtml", "package.json"]) {
  await cp(new URL(entry, fontSource), new URL(entry, fontDestination), {
    recursive: true,
  });
}

await writeFile(stamp, signature);
