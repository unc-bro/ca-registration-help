import { SITE_CONFIG } from "../config.mjs";

export function robotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_CONFIG.baseUrl}/sitemap.xml
`;
}
