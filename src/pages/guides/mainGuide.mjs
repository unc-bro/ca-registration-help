import { ROUTES } from "../../config.mjs";
import { layout } from "../../templates/layout.mjs";
import { breadcrumbs, breadcrumbListJsonLd } from "../../templates/breadcrumbs.mjs";
import { officialSourceCallout, tableOfContents, relatedGuides, guideEndCta, guideMidCta } from "../../templates/guideParts.mjs";

const sections = [
  { id: "overview", label: "Overview of the Process" },
  { id: "ownership-documents", label: "Ownership Documents" },
  { id: "out-of-state-title", label: "Your Out-of-State Title" },
  { id: "registration-documents", label: "Registration Documents" },
  { id: "application-paperwork", label: "California Application Paperwork" },
  { id: "smog", label: "Smog Considerations" },
  { id: "verification", label: "Vehicle Verification" },
  { id: "lienholders", label: "Lienholder Issues" },
  { id: "fees", label: "Fees and Taxes" },
  { id: "complications", label: "When the Process Gets Complicated" },
];

export function page() {
  const trail = [
    { label: "Home", href: ROUTES.home },
    { label: "How to Register an Out-of-State Vehicle" },
  ];

  const body = `
${breadcrumbs(trail)}
<article class="section-tight">
  <div class="container-narrow prose">
    <h1>How to Register an Out-of-State Vehicle in California</h1>
    <p class="lede">Registering an out-of-state vehicle in California generally involves your out-of-state title, current registration, proof of ownership, a completed California application, and — depending on the vehicle — a smog inspection and a vehicle identification (VIN) verification. The exact combination of steps depends on your specific vehicle, how you acquired it, and whether a lender holds the title.</p>

    ${tableOfContents(sections)}

    <h2 id="overview">Overview of the Process</h2>
    <p>At a high level, registering a vehicle from another state involves confirming ownership, verifying the vehicle, satisfying any California emissions requirements, and submitting an application along with the applicable fees. Some of this can be coordinated through a private registration provider; other steps, like a smog test or vehicle verification, typically happen in person.</p>

    <h2 id="ownership-documents">Ownership Documents</h2>
    <p>You'll generally need to show proof of ownership. This usually means your out-of-state title, but can also involve a bill of sale, prior registration, or lienholder documentation depending on your situation.</p>

    <h2 id="out-of-state-title">Your Out-of-State Title</h2>
    <p>Your existing title is central to the process. California will typically want to see the original out-of-state title (or acceptable alternative documentation) as part of the transfer. If you don't have it in hand — because a lender holds it or it's missing — the process branches. See our guides on <a href="${ROUTES.guideLienholder}">lienholder titles</a> and <a href="${ROUTES.guideMissingTitle}">missing titles</a>.</p>

    ${guideMidCta()}

    <h2 id="registration-documents">Registration Documents</h2>
    <p>Along with the title, your current or most recent out-of-state registration helps establish the vehicle's history and can be requested as part of the transaction.</p>

    <h2 id="application-paperwork">California Application Paperwork</h2>
    <p>California registration involves a completed application along with any required supporting forms. Which specific forms apply depends on details like whether the vehicle is financed, whether it was purchased or already owned, and its emissions profile.</p>

    <h2 id="smog" class="prose">Smog Considerations</h2>
    <p>Out-of-state vehicles can be subject to a California smog inspection as part of registration, though exemptions can apply depending on the vehicle. See our dedicated guide on <a href="${ROUTES.guideSmog}">smog and VIN verification</a> for more detail.</p>

    <h2 id="verification">Vehicle Verification</h2>
    <p>Some out-of-state vehicles require a physical VIN verification before registration can be completed. Whether this applies depends on your specific transaction.</p>

    <h2 id="lienholders">Lienholder Issues</h2>
    <p>If a lender or lienholder holds your title, the process can look different than a clear-title transaction. Read our guide on <a href="${ROUTES.guideLienholder}">registration when a lender holds the title</a>.</p>

    <h2 id="fees">Fees and Taxes</h2>
    <p>California registration involves government fees and, in some cases, use tax, separate from any service fee charged by a private concierge or registration provider. Fee amounts vary by vehicle and situation and are outside the scope of this guide — the DMV is the authoritative source for current fee amounts.</p>

    <h2 id="complications">When the Process Gets Complicated</h2>
    <p>Titles held by lenders, missing documents, expired registrations, and unusual vehicle histories can all add steps. If your situation doesn't look straightforward, starting with your actual vehicle details — rather than a generic checklist — is usually the fastest way to find out what applies.</p>

    ${officialSourceCallout()}
  </div>
</article>

<section class="section-alt section-tight">
  <div class="container">
    <div class="section-header center">
      <h2>Related Guides</h2>
    </div>
    ${relatedGuides(ROUTES.guideMain)}
  </div>
</section>

<section class="section">
  <div class="container">
    ${guideEndCta()}
  </div>
</section>
`;

  return layout({
    path: ROUTES.guideMain,
    title: "How to Register an Out-of-State Vehicle in California | CA Registration Help",
    description:
      "A clear overview of registering an out-of-state vehicle in California: documents, application paperwork, smog, VIN verification, and lienholder issues.",
    bodyHtml: body,
    extraJsonLd: [breadcrumbListJsonLd(trail)],
  });
}
