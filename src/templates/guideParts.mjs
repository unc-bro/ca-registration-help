import { OFFICIAL_SOURCES, RELATED_GUIDES_MAP } from "../data/content.mjs";
import { GUIDES } from "../data/nav.mjs";
import { iconShield } from "./icons.mjs";
import { ctaLink } from "./cta.mjs";
import { ROUTES, CTA_LABELS } from "../config.mjs";

export function officialSourceCallout(hrefs) {
  const sources = hrefs
    ? OFFICIAL_SOURCES.filter((s) => hrefs.includes(s.href))
    : OFFICIAL_SOURCES;
  const list = sources
    .map((s) => `<li><a href="${s.href}" target="_blank" rel="noopener noreferrer">${s.label} ↗</a></li>`)
    .join("");

  return `
<div class="callout">
  <div class="callout-icon">${iconShield}</div>
  <div>
    <h4>Official California DMV Resources</h4>
    <p>California DMV rules and requirements can change. We link to official DMV resources where appropriate so you can verify current requirements.</p>
    <ul>${list}</ul>
  </div>
</div>`;
}

export function tableOfContents(sections) {
  const items = sections
    .map((s) => `<li><a href="#${s.id}">${s.label}</a></li>`)
    .join("");
  return `
<nav class="toc" aria-label="Table of contents">
  <h2>On this page</h2>
  <ol>${items}</ol>
</nav>`;
}

export function relatedGuides(currentPath) {
  const relatedHrefs = RELATED_GUIDES_MAP[currentPath] || [];
  const cards = relatedHrefs
    .map((href) => GUIDES.find((g) => g.href === href))
    .filter(Boolean)
    .map(
      (g) => `
      <a class="related-card" href="${g.href}">
        <h3>${g.title}</h3>
        <p>${g.description}</p>
      </a>`
    )
    .join("");

  return `
<div class="related-guides">${cards}</div>`;
}

export function guideEndCta() {
  return `
<div class="inline-cta">
  ${ctaLink({ label: CTA_LABELS.primary, href: ROUTES.checkMyVehicle, variant: "btn-primary btn-large", event: "guide_check_vehicle" })}
  <p class="micro">Takes about 2–3 minutes. No obligation.</p>
</div>`;
}

export function guideMidCta(text = "Not sure how this applies to your vehicle?") {
  return `
<div class="callout" style="align-items:center;">
  <div class="callout-icon">${iconShield}</div>
  <div>
    <h4>${text}</h4>
    <p>Start with your actual vehicle and situation instead of generic instructions.</p>
    ${ctaLink({ label: CTA_LABELS.primary, href: ROUTES.checkMyVehicle, variant: "btn-primary", event: "guide_check_vehicle" })}
  </div>
</div>`;
}
