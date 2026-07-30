import { SITE_CONFIG, ROUTES, CTA_LABELS } from "../config.mjs";
import { GUIDES } from "../data/nav.mjs";
import { iconLogo } from "./icons.mjs";

export function siteFooter() {
  const guideLinks = GUIDES.map(
    (g) => `<a href="${g.href}">${g.title}</a>`
  ).join("");

  return `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="brand" href="/" style="text-decoration:none;">
          ${iconLogo}
          <span>${SITE_CONFIG.siteName}</span>
        </a>
        <p>California out-of-state vehicle registration assistance.</p>
        <nav aria-label="Quick links" style="margin-top:var(--space-4);">
          <a href="${ROUTES.checkMyVehicle}" style="text-decoration:none;font-weight:600;font-size:0.9rem;color:var(--color-brand-dark);">${CTA_LABELS.primary}</a>
        </nav>
      </div>
      <nav class="footer-links" aria-label="Guides">
        ${guideLinks}
      </nav>
    </div>
    <p class="footer-disclosure">
      ${SITE_CONFIG.siteName} is a private service and is not the California Department of Motor Vehicles.
      Eligible regulated registration transactions may be coordinated through a California DMV-authorized
      registration provider. Government fees, taxes, penalties, inspections, and other third-party costs
      are separate from any ${SITE_CONFIG.siteName} service fee.
    </p>
    <div class="footer-meta">
      <span>&copy; <span id="copyright-year">2026</span> ${SITE_CONFIG.siteName}</span>
      <span>${SITE_CONFIG.domain}</span>
    </div>
  </div>
</footer>`;
}
