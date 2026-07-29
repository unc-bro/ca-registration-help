import { SITE_CONFIG } from "../config.mjs";

export function breadcrumbs(trail) {
  // trail: [{ label, href }] — last item has no href (current page)
  const items = trail
    .map((item) =>
      item.href ? `<li><a href="${item.href}">${item.label}</a></li>` : `<li aria-current="page">${item.label}</li>`
    )
    .join("");

  return `
<nav class="breadcrumbs container" aria-label="Breadcrumb">
  <ol>${items}</ol>
</nav>`;
}

export function breadcrumbListJsonLd(trail) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.href ? `${SITE_CONFIG.baseUrl}${item.href}` : undefined,
    })),
  };
}
