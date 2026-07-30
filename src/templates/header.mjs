import { SITE_CONFIG, CTA_LABELS, ROUTES } from "../config.mjs";
import { PRIMARY_NAV, GUIDES } from "../data/nav.mjs";
import { iconLogo, iconMenu, iconClose, iconChevron } from "./icons.mjs";
import { ctaLink } from "./cta.mjs";

function guidesDropdown() {
  const items = GUIDES.map((g) => `<li><a href="${g.href}">${g.title}</a></li>`).join("");
  return `
      <li class="nav-dropdown">
        <details>
          <summary>Guides ${iconChevron}</summary>
          <ul class="nav-dropdown-menu">${items}</ul>
        </details>
      </li>`;
}

export function siteHeader() {
  const navItems = PRIMARY_NAV.map(
    (item) => `<li><a href="${item.href}">${item.label}</a></li>`
  ).join("");

  return `
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <div class="container">
    <a class="brand" href="${ROUTES.home}">
      ${iconLogo}
      <span>${SITE_CONFIG.siteName}</span>
    </a>
    <nav class="primary-nav" aria-label="Primary">
      <ul>${navItems}${guidesDropdown()}</ul>
    </nav>
    <div class="header-actions">
      ${ctaLink({ label: CTA_LABELS.primaryLine1, href: ROUTES.checkMyVehicle, variant: "btn-primary", event: "homepage_check_vehicle", line2: CTA_LABELS.primaryLine2 })}
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu">
        <span class="icon-menu">${iconMenu}</span>
        <span class="icon-close">${iconClose}</span>
      </button>
    </div>
  </div>
  <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile">
    <ul>
      ${PRIMARY_NAV.map((item) => `<li><a href="${item.href}">${item.label}</a></li>`).join("")}${guidesDropdown()}
    </ul>
  </nav>
</header>`;
}
