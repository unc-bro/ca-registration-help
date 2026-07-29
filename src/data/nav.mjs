import { ROUTES } from "../config.mjs";

export const PRIMARY_NAV = [
  { label: "How It Works", href: `${ROUTES.home}#how-it-works` },
  { label: "Services", href: `${ROUTES.home}#situations` },
  { label: "FAQ", href: `${ROUTES.home}#faq` },
];

export const GUIDES = [
  {
    title: "How to Register an Out-of-State Vehicle in California",
    href: ROUTES.guideMain,
    description: "The full overview: documents, application, smog, and fees.",
  },
  {
    title: "Moving to California? How to Register Your Car",
    href: ROUTES.guideMoving,
    description: "What new residents need to know about bringing a vehicle in.",
  },
  {
    title: "California Registration When a Lender Holds the Title",
    href: ROUTES.guideLienholder,
    description: "How financed, out-of-state vehicles work through the process.",
  },
  {
    title: "Registering an Out-of-State Vehicle Without the Original Title",
    href: ROUTES.guideMissingTitle,
    description: "Options when the title is lost, missing, or was never received.",
  },
  {
    title: "California Smog and VIN Verification for Out-of-State Vehicles",
    href: ROUTES.guideSmog,
    description: "When emissions and vehicle identification checks may apply.",
  },
];
