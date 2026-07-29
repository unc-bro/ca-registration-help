import { SITE_CONFIG, ROUTES } from "../config.mjs";

const PAGES = [
  ROUTES.home,
  ROUTES.guideMain,
  ROUTES.guideMoving,
  ROUTES.guideLienholder,
  ROUTES.guideMissingTitle,
  ROUTES.guideSmog,
];

export function sitemapXml() {
  const urls = PAGES.map(
    (path) => `  <url>
    <loc>${SITE_CONFIG.baseUrl}${path}</loc>
  </url>`
  ).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}
