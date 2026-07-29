import { ROUTES } from "../config.mjs";

// Our standard MVP service: straightforward California registration for a
// passenger vehicle currently titled/registered in another U.S. state.
export const STANDARD_SITUATIONS = [
  "Moving to California with a car already titled in another state",
  "Buying a vehicle with a clear out-of-state title",
  "Standard out-of-state title transfers for passenger vehicles",
  "Registering an out-of-state vehicle after an interstate move",
];

// Presented as situations we review case-by-case, not services we promise
// to fulfill under the standard offer.
export const REVIEW_SITUATIONS = [
  "Lender or lienholder holding the title",
  "Missing or unavailable titles",
  "Salvage or rebuilt vehicle titles",
  "Ownership or document problems",
  "Prior DMV issues on the vehicle",
  "Foreign vehicle imports",
  "Unusual or borderline emissions requirements",
  "Expired out-of-state registration",
  "DMV paperwork or application problems",
];

export const HOW_IT_WORKS = [
  {
    title: "Tell Us About Your Vehicle",
    description:
      "Answer a few questions about your vehicle, title, registration, and situation.",
  },
  {
    title: "We Determine What Applies",
    description:
      "We review your situation to identify the forms, documents, inspections, and other steps that may be required.",
  },
  {
    title: "Complete Any Required Steps",
    description:
      "If something must be completed locally, such as smog testing or vehicle verification, we explain what needs to happen.",
  },
  {
    title: "Move Forward With Registration",
    description:
      "Eligible registration transactions can be coordinated through a California DMV-authorized registration provider.",
  },
];

export const WHY_US = [
  {
    title: "Know What Applies",
    description:
      "Start with your specific vehicle instead of trying to piece together generic DMV instructions.",
  },
  {
    title: "Avoid Unnecessary Paperwork",
    description:
      "Identify the documents and steps likely to apply before submitting a transaction.",
  },
  {
    title: "Review Complex Situations",
    description:
      "If your situation involves a lienholder, a missing title, or another complication, we'll review it to see whether we can help.",
  },
  {
    title: "Understand What Comes Next",
    description:
      "Get a clear sequence of next steps rather than bouncing between multiple DMV pages.",
  },
  {
    title: "Coordinate Eligible Processing",
    description:
      "Eligible regulated registration transactions can be coordinated through a California DMV-authorized registration provider.",
  },
];

export const TRUST_STRIP = [
  {
    title: "Clear Requirements",
    description: "Know which steps apply to your specific vehicle.",
  },
  {
    title: "Complex Situations Reviewed",
    description: "Lienholders, missing titles, and other complications are reviewed individually to see if we can help.",
  },
  {
    title: "Private Registration Assistance",
    description: "Eligible regulated transactions are coordinated through an authorized provider.",
  },
];

export const HOMEPAGE_FAQS = [
  {
    q: "How do I register an out-of-state vehicle in California?",
    a: "Generally, you'll need your out-of-state title, current registration, proof of ownership, and a completed California application, along with a vehicle verification and, in many cases, a smog inspection. The exact requirements depend on your vehicle and situation, which is why we start by reviewing your specific details.",
  },
  {
    q: "Can I register a car in California with an out-of-state title?",
    a: "In many cases, yes — an out-of-state title is a normal part of the process. What's required alongside it depends on factors like whether you hold the title directly, whether a lender holds it, and the vehicle's history.",
  },
  {
    q: "What if my lender has the title?",
    a: "Financed vehicles are common, and having a lender or lienholder hold the title falls outside our standard, straightforward registration service. Tell us who holds the title and we'll review your situation to determine whether we're able to assist.",
  },
  {
    q: "What if I don't have the original title?",
    a: "A missing or unavailable title falls outside our standard, straightforward registration service. Depending on why the title is unavailable, your vehicle's ownership history, and what documentation you have, we may be able to review your situation to determine whether we're able to assist.",
  },
  {
    q: "What if my situation is more complex — a salvage title, a foreign import, or a prior DMV issue?",
    a: "Our standard service is built for straightforward registration of a passenger vehicle currently titled or registered in another U.S. state. More complex situations — including salvage or rebuilt vehicles, foreign imports, prior DMV issues, ownership or document problems, and unusual emissions circumstances — fall outside that standard service. We review these individually to determine whether we're able to assist.",
  },
  {
    q: "Do I need a California smog inspection?",
    a: "It depends on your vehicle and transaction. Some out-of-state vehicles require a smog inspection as part of California registration, and some may be exempt. We help identify which applies to your vehicle.",
  },
  {
    q: "Do I need a VIN or vehicle verification?",
    a: "Some out-of-state transactions require a vehicle identification number (VIN) verification before registration can be completed. Whether it applies to you depends on the details of your transaction.",
  },
  {
    q: "Do I have to go to the DMV?",
    a: "Some registration transactions can be handled through private, DMV-authorized registration providers, which can reduce the number of DMV visits required. However, some situations still require an in-person step. We do not guarantee you can avoid the DMV entirely.",
  },
  {
    q: "Are you the California DMV?",
    a: "No. CA Registration Help is a private vehicle-registration concierge service and is not the California Department of Motor Vehicles. Eligible regulated registration transactions may be coordinated through a California DMV-authorized registration provider.",
  },
  {
    q: "How much does the service cost?",
    a: "SERVICE_FEE_PLACEHOLDER",
  },
];

export const OFFICIAL_SOURCES = [
  {
    label: "California DMV — Out-of-State Vehicles",
    href: "https://www.dmv.ca.gov/portal/vehicle-registration/registration-fees/nonresident-vehicles/",
  },
  {
    label: "California DMV — New to California",
    href: "https://www.dmv.ca.gov/portal/new-to-california/",
  },
  {
    label: "California DMV — Vehicle Titles",
    href: "https://www.dmv.ca.gov/portal/vehicle-registration/titling-a-vehicle/",
  },
  {
    label: "California Bureau of Automotive Repair — Smog Check",
    href: "https://www.bar.ca.gov/consumer/Smog_Check/",
  },
];

export const RELATED_GUIDES_MAP = {
  [ROUTES.guideMain]: [ROUTES.guideMoving, ROUTES.guideLienholder, ROUTES.guideMissingTitle, ROUTES.guideSmog],
  [ROUTES.guideMoving]: [ROUTES.guideSmog, ROUTES.guideMain],
  [ROUTES.guideLienholder]: [ROUTES.guideMissingTitle, ROUTES.guideMain],
  [ROUTES.guideMissingTitle]: [ROUTES.guideLienholder, ROUTES.guideMain],
  [ROUTES.guideSmog]: [ROUTES.guideMoving, ROUTES.guideMain],
};
