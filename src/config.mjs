// ============================================================================
// CENTRAL SITE CONFIGURATION
// ----------------------------------------------------------------------------
// This is the ONLY place these values should be set. Every page, button, and
// component pulls from here. To update the Fillout form, Stripe payment
// link, service fee, domain, or contact info, change it ONCE below and
// rebuild the site (`npm run build`). See README.md "Quick Configuration".
// ============================================================================

export const SITE_CONFIG = {
  siteName: "CA Registration Help",
  domain: "CARegistrationHelp.com",
  baseUrl: "https://CARegistrationHelp.com",

  // Paste your live Fillout form URL here. Leave blank ("") until it exists —
  // the site will render a clean placeholder instead of a broken embed. The
  // form is embedded directly on the homepage at /#check-my-vehicle.
  filloutUrl: "https://forms.fillout.com/t/si4kNFsfnBus",

  // Paste your live Stripe Payment Link here. Leave blank ("") until it
  // exists — payment CTAs will hide or disable themselves cleanly.
  stripePaymentUrl: "",

  // Support contact info. Leave blank until confirmed — never fabricate.
  supportEmail: "",
  supportPhone: "",

  // Service fee in whole US dollars (e.g. 199). Leave as null until a real
  // price is set — the site will show a neutral "pricing shown before you
  // proceed" message instead of inventing a number.
  serviceFee: null,

  // Analytics measurement ID (Google Analytics, Plausible domain, Cloudflare
  // Web Analytics token, etc). Leave blank to omit analytics entirely.
  analyticsId: "",
};

export const CTA_LABELS = {
  primary: "Get My Free Registration Plan",
  primaryLine1: "Get My Free",
  primaryLine2: "Registration Plan",
  secondaryHowItWorks: "See How It Works",
  payment: {
    start: "Start My Registration",
    continue: "Continue to Payment",
    fee: "Pay Service Fee",
  },
};

// The site has exactly six pages: the homepage and five guides. There is no
// separate /get-started/, /next-step/, /about/, /contact/, or FAQ page — the
// Fillout intake is embedded directly on the homepage at this anchor, and
// every primary CTA site-wide points here.
export const ROUTES = {
  home: "/",
  checkMyVehicle: "/#check-my-vehicle",
  guideMain: "/how-to-register-out-of-state-vehicle-california/",
  guideMoving: "/moving-to-california-register-car/",
  guideLienholder: "/california-registration-lienholder-title/",
  guideMissingTitle: "/california-registration-without-title/",
  guideSmog: "/california-smog-vin-verification-out-of-state/",
};
