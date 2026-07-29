import { SITE_CONFIG, ROUTES } from "../config.mjs";
import { GUIDES } from "../data/nav.mjs";

export function llmsTxt() {
  const guideLines = GUIDES.map(
    (g) => `- [${g.title}](${SITE_CONFIG.baseUrl}${g.href}): ${g.description}`
  ).join("\n");

  return `# ${SITE_CONFIG.siteName}

> A private California vehicle-registration concierge service. Standard service scope: assistance with straightforward California registration for a passenger vehicle currently titled or registered in another U.S. state — identifying requirements, organizing documents and steps, and coordinating eligible registration processing through a California DMV-authorized registration provider. More complex situations (missing titles, lienholder-held titles, salvage/rebuilt vehicles, foreign imports, prior DMV issues) are reviewed case-by-case and are not guaranteed under the standard service.

${SITE_CONFIG.siteName} is not the California DMV and has no government affiliation. No specific turnaround time, approval outcome, or fulfillment guarantee is promised.

## Pages

- [Homepage](${SITE_CONFIG.baseUrl}${ROUTES.home}): How It Works, Services, FAQ, and the vehicle intake form.
${guideLines}
`;
}
