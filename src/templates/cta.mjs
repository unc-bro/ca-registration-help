import { SITE_CONFIG } from "../config.mjs";

// Reusable primary-intent CTA. Every button that should open the intake flow
// renders through this function and points at ROUTES.checkMyVehicle (never
// directly at an external Fillout URL), per the funnel design.
export function ctaLink({ label, href, variant = "btn-primary", event = "cta_click", block = false, line2 = null }) {
  const blockClass = block ? " btn-block" : "";
  const stackedClass = line2 ? " btn-stacked" : "";
  const ariaLabel = line2 ? ` aria-label="${label} ${line2}"` : "";
  const content = line2
    ? `<span class="btn-line1" aria-hidden="true">${label}</span><span class="btn-line2" aria-hidden="true">${line2}</span>`
    : label;
  return `<a class="btn ${variant}${blockClass}${stackedClass}" href="${href}" data-event="${event}"${ariaLabel}>${content}</a>`;
}

// Payment CTA — the only component allowed to reference SITE_CONFIG.stripePaymentUrl.
// If the Stripe link isn't configured yet, it renders a disabled state instead
// of a broken or fake link.
export function paymentCta({ label, event = "stripe_payment_clicked" }) {
  const url = SITE_CONFIG.stripePaymentUrl;
  if (!url) {
    return `<button class="btn btn-disabled btn-block" type="button" disabled aria-disabled="true">${label}</button>
    <p class="micro">Payment will open here once the next step is ready.</p>`;
  }
  return `<a class="btn btn-primary btn-block" href="${url}" data-event="${event}" rel="noopener">${label}</a>`;
}
