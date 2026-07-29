import { SITE_CONFIG } from "../config.mjs";
import { siteHeader } from "./header.mjs";
import { siteFooter } from "./footer.mjs";
import { jsonLdScript, organizationJsonLd, websiteJsonLd, webPageJsonLd } from "./structuredData.mjs";

export function layout({ path, title, description, bodyHtml, extraJsonLd = [], bodyClass = "" }) {
  const canonical = `${SITE_CONFIG.baseUrl}${path}`;
  const ogImage = `${SITE_CONFIG.baseUrl}/assets/images/social-share.svg`;

  const graph = [
    organizationJsonLd(),
    websiteJsonLd(),
    webPageJsonLd({ url: canonical, name: title, description }),
    ...extraJsonLd,
  ];

  const analyticsSnippet = SITE_CONFIG.analyticsId
    ? `<!-- Analytics placeholder: SITE_CONFIG.analyticsId is set ("${SITE_CONFIG.analyticsId}").
         Insert your analytics provider's snippet here, reading the ID from
         src/config.mjs so it stays centralized. -->`
    : `<!-- Analytics disabled: SITE_CONFIG.analyticsId is blank in src/config.mjs -->`;

  return `<!doctype html>
<html lang="en-US">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="canonical" href="${canonical}">

<link rel="icon" href="/assets/icons/favicon.svg" type="image/svg+xml">
<link rel="alternate icon" href="/assets/icons/favicon.svg">
<link rel="apple-touch-icon" href="/assets/icons/favicon.svg">

<meta property="og:type" content="website">
<meta property="og:site_name" content="${SITE_CONFIG.siteName}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ogImage}">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${ogImage}">

<link rel="stylesheet" href="/assets/css/style.css">
${jsonLdScript(graph)}
${analyticsSnippet}
</head>
<body class="${bodyClass}">
${siteHeader()}
<main id="main">
${bodyHtml}
</main>
${siteFooter()}
<script src="/assets/js/main.js" defer></script>
</body>
</html>`;
}
