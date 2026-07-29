// Zero-dependency static site build. Node's built-in fs/path only.
// Run via `npm run build`. Outputs the full static site to /dist. New pages
// get added to the `pages` array below as
// { outPath: "<dist-relative dir>/index.html", render: pageModule.page }.
import { mkdirSync, writeFileSync, rmSync, cpSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { page as homePage } from "./src/pages/index.mjs";
import { page as mainGuidePage } from "./src/pages/guides/mainGuide.mjs";
import { page as movingGuidePage } from "./src/pages/guides/movingToCalifornia.mjs";
import { page as lienholderGuidePage } from "./src/pages/guides/lienholder.mjs";
import { page as missingTitleGuidePage } from "./src/pages/guides/missingTitle.mjs";
import { page as smogVinGuidePage } from "./src/pages/guides/smogVin.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "dist");

const pages = [
  { outPath: "index.html", render: homePage },
  { outPath: "how-to-register-out-of-state-vehicle-california/index.html", render: mainGuidePage },
  { outPath: "moving-to-california-register-car/index.html", render: movingGuidePage },
  { outPath: "california-registration-lienholder-title/index.html", render: lienholderGuidePage },
  { outPath: "california-registration-without-title/index.html", render: missingTitleGuidePage },
  { outPath: "california-smog-vin-verification-out-of-state/index.html", render: smogVinGuidePage },
];

function writePage(outPath, html) {
  const fullPath = join(DIST, outPath);
  mkdirSync(dirname(fullPath), { recursive: true });
  writeFileSync(fullPath, html, "utf8");
  console.log("wrote", outPath);
}

if (existsSync(DIST)) rmSync(DIST, { recursive: true, force: true });
mkdirSync(DIST, { recursive: true });

for (const { outPath, render } of pages) {
  writePage(outPath, render());
}

cpSync(join(__dirname, "assets"), join(DIST, "assets"), { recursive: true });

console.log(`\nBuild complete: ${pages.length} page(s) written to /dist`);
