import { SITE_CONFIG, CTA_LABELS, ROUTES } from "../config.mjs";
import { layout } from "../templates/layout.mjs";
import { ctaLink } from "../templates/cta.mjs";
import { faqAccordion } from "../templates/faq.mjs";
import { faqPageJsonLd, serviceJsonLd } from "../templates/structuredData.mjs";
import { heroIllustration, iconCheck } from "../templates/icons.mjs";
import {
  STANDARD_SITUATIONS,
  REVIEW_SITUATIONS,
  HOW_IT_WORKS,
  WHY_US,
  TRUST_STRIP,
  HOMEPAGE_FAQS,
} from "../data/content.mjs";

function pricingCopy() {
  if (SITE_CONFIG.serviceFee) {
    return `<p class="lede">Service fee: <strong>$${SITE_CONFIG.serviceFee}</strong></p>`;
  }
  return `<p class="lede">Service pricing will be shown before you proceed with paid assistance.</p>`;
}

function filloutEmbed() {
  if (!SITE_CONFIG.filloutUrl) {
    return `
    <div class="embed-wrap">
      <div class="embed-placeholder">
        <p><strong>Fillout intake form will appear here after the Fillout URL is added to the site configuration.</strong></p>
        <p class="micro">Set <code>filloutUrl</code> in <code>src/config.mjs</code>, then rebuild the site.</p>
      </div>
    </div>`;
  }
  return `
  <div class="embed-wrap">
    <iframe src="${SITE_CONFIG.filloutUrl}" title="CA Registration Help vehicle intake form" fetchpriority="low"></iframe>
  </div>`;
}

function pricingFaqAnswer() {
  if (SITE_CONFIG.serviceFee) {
    return `Our service fee is $${SITE_CONFIG.serviceFee}. California DMV fees, taxes, penalties, smog testing, inspections, and other government or third-party charges are separate and vary by transaction.`;
  }
  return "The service fee will be shown before you proceed with paid assistance. California DMV fees, taxes, penalties, smog testing, inspections, and other government or third-party charges are separate from our service fee and vary by transaction.";
}

export function page() {
  const faqs = HOMEPAGE_FAQS.map((f) =>
    f.a === "SERVICE_FEE_PLACEHOLDER" ? { ...f, a: pricingFaqAnswer() } : f
  );

  const body = `
<section class="hero">
  <div class="container">
    <div class="hero-copy">
      <h1>California Out-of-State Vehicle Registration — Without Figuring Out the DMV Yourself</h1>
      <p class="lede">Moved to California or bought a vehicle with an out-of-state title? Answer a few questions to see the likely California requirements and next steps for your specific vehicle. Paid registration help is optional.</p>
      <div class="hero-cta-row">
        <div>
          ${ctaLink({ label: CTA_LABELS.primaryLine1, href: ROUTES.checkMyVehicle, variant: "btn-primary btn-large", event: "homepage_check_vehicle", line2: CTA_LABELS.primaryLine2 })}
          <p class="micro">Free personalized next steps • 2–3 minutes</p>
        </div>
        <a class="btn btn-ghost" href="#how-it-works">${CTA_LABELS.secondaryHowItWorks} →</a>
      </div>
    </div>
    <div class="hero-visual" aria-hidden="true">
      ${heroIllustration}
    </div>
  </div>
</section>

<section class="section-tight">
  <div class="container">
    <div class="grid grid-3">
      ${TRUST_STRIP.map(
        (item) => `
      <div class="card">
        <div class="card-icon">${iconCheck}</div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>`
      ).join("")}
    </div>
  </div>
</section>

<section class="section section-alt" id="situations">
  <div class="container">
    <div class="section-header">
      <span class="eyebrow">Our Standard Service</span>
      <h2>Straightforward California Out-of-State Vehicle Registration</h2>
      <p class="lede">Our standard service covers passenger vehicles currently titled or registered in another U.S. state that are ready for a direct California transfer, including situations like these:</p>
    </div>
    <div class="situation-list">
      ${STANDARD_SITUATIONS.map(
        (s) => `<div class="situation-item">${iconCheck}<span>${s}</span></div>`
      ).join("")}
    </div>

    <div class="section-header" style="margin-top:var(--space-7);">
      <span class="eyebrow">Reviewed Case-by-Case</span>
      <h2>More Complex Situations</h2>
      <p class="lede">These situations fall outside our standard service. Tell us what's going on and we'll review it to determine whether we're able to assist:</p>
    </div>
    <div class="situation-list">
      ${REVIEW_SITUATIONS.map(
        (s) => `<div class="situation-item">${iconCheck}<span>${s}</span></div>`
      ).join("")}
    </div>

    <div class="inline-cta">
      ${ctaLink({ label: CTA_LABELS.primaryLine1, href: ROUTES.checkMyVehicle, variant: "btn-primary", event: "homepage_check_vehicle", line2: CTA_LABELS.primaryLine2 })}
      <p class="micro">Free to check. No payment required.</p>
    </div>
  </div>
</section>

<section class="section" id="how-it-works">
  <div class="container">
    <div class="section-header center">
      <span class="eyebrow">Process</span>
      <h2>How It Works</h2>
    </div>
    <div class="steps">
      ${HOW_IT_WORKS.map(
        (step, i) => `
      <div class="step">
        <span class="step-number">${i + 1}</span>
        <h3>${step.title}</h3>
        <p>${step.description}</p>
      </div>`
      ).join("")}
    </div>
    <div class="inline-cta">
      ${ctaLink({ label: CTA_LABELS.primaryLine1, href: ROUTES.checkMyVehicle, variant: "btn-primary", event: "homepage_check_vehicle", line2: CTA_LABELS.primaryLine2 })}
      <p class="micro">Free to check. No payment required.</p>
    </div>
  </div>
</section>

<section class="section section-alt">
  <div class="container-narrow">
    <span class="eyebrow">Why It's Complicated</span>
    <h2>Registering an Out-of-State Vehicle in California Can Get Complicated Quickly</h2>
    <p class="lede">The exact steps depend on how you acquired the vehicle, where it's currently titled, whether you have the title in hand, whether a lender holds it, whether registration is current, and factors like mileage, emissions requirements, and vehicle verification.</p>
    <p>Instead of working through generic DMV instructions on your own, start with your actual vehicle and situation.</p>
    ${ctaLink({ label: CTA_LABELS.primaryLine1, href: ROUTES.checkMyVehicle, variant: "btn-primary", event: "homepage_check_vehicle", line2: CTA_LABELS.primaryLine2 })}
    <p class="micro">Free to check. No payment required.</p>
  </div>
</section>

<section class="section">
  <div class="container-narrow">
    <span class="eyebrow">Lienholders</span>
    <h2>What If My Lender Has the Out-of-State Title?</h2>
    <p>That is common with financed vehicles. When a lender or lienholder holds the title, it falls outside our standard, straightforward registration service. Tell us who holds the title and we'll review your situation to determine whether we're able to assist.</p>
    <a class="btn-ghost" href="${ROUTES.guideLienholder}" style="text-decoration:none;font-weight:600;">Learn about California registration when a lender holds the title →</a>
  </div>
</section>

<section class="section section-alt">
  <div class="container-narrow">
    <span class="eyebrow">Missing Title</span>
    <h2>What If I Don't Have the Original Title?</h2>
    <p>A missing or unavailable title falls outside our standard, straightforward registration service. Depending on why the title is unavailable, the vehicle's ownership history, and what documentation is available, we may be able to review your situation to determine whether we're able to assist.</p>
    <a class="btn-ghost" href="${ROUTES.guideMissingTitle}" style="text-decoration:none;font-weight:600;">Learn about registering without the out-of-state title →</a>
  </div>
</section>

<section class="section">
  <div class="container-narrow">
    <span class="eyebrow">Smog & Verification</span>
    <h2>Smog and Vehicle Verification</h2>
    <p>Out-of-state vehicles can have additional California requirements involving emissions and vehicle identification verification. The requirements depend on the vehicle and transaction.</p>
    <a class="btn-ghost" href="${ROUTES.guideSmog}" style="text-decoration:none;font-weight:600;">Learn about smog and VIN verification →</a>
  </div>
</section>

<section class="section section-alt">
  <div class="container-narrow">
    <span class="eyebrow">Pricing</span>
    <h2>What Does the Service Cost?</h2>
    ${pricingCopy()}
    <p>California DMV fees, taxes, penalties, smog testing, inspections, and other government or third-party charges are separate from our service fee and vary by transaction.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-header center">
      <span class="eyebrow">Why Us</span>
      <h2>Why Use CA Registration Help?</h2>
    </div>
    <div class="grid grid-5">
      ${WHY_US.map(
        (item) => `
      <div class="card">
        <div class="card-icon">${iconCheck}</div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>`
      ).join("")}
    </div>
  </div>
</section>

<section class="section section-alt" id="faq">
  <div class="container-narrow">
    <div class="section-header center">
      <span class="eyebrow">FAQ</span>
      <h2>Frequently Asked Questions</h2>
    </div>
    ${faqAccordion(faqs, "home-faq")}
  </div>
</section>

<section class="section section-alt" id="check-my-vehicle">
  <div class="container-narrow">
    <div class="section-header center">
      <span class="eyebrow">Get Started</span>
      <h2>Get Your Personalized Registration Plan</h2>
      <p class="lede">Answer a few questions about your vehicle, title, and situation. We'll identify the likely California requirements and explain what to do next.</p>
      <p class="micro">Free • Takes 2–3 minutes • No payment required</p>
    </div>
    ${filloutEmbed()}
  </div>
</section>
`;

  return layout({
    path: ROUTES.home,
    title: "California Out-of-State Vehicle Registration Help | CA Registration Help",
    description:
      "Get help registering an out-of-state vehicle in California. We help identify requirements, organize paperwork, and coordinate eligible registration processing.",
    bodyHtml: body,
    extraJsonLd: [serviceJsonLd(), faqPageJsonLd(faqs)],
  });
}
