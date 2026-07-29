import { SITE_CONFIG } from "../config.mjs";

// Reusable "Check My Vehicle" style CTA. Every button that should open the
// intake flow renders through this function and points at ROUTES.getStarted
// (never directly at an external Fillout URL), per the funnel design.
export function ctaLink({ label, href, variant = "btn-primary", event = "cta_click", block = false }) {
  const blockClass = block ? " btn-block" : "";
  return `<a class="btn ${variant}${blockClass}" href="${href}" data-event="${event}">${label}</a>`;
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
