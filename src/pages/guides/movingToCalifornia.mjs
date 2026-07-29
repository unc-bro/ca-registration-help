import { ROUTES } from "../../config.mjs";
import { layout } from "../../templates/layout.mjs";
import { breadcrumbs, breadcrumbListJsonLd } from "../../templates/breadcrumbs.mjs";
import { officialSourceCallout, tableOfContents, relatedGuides, guideEndCta, guideMidCta } from "../../templates/guideParts.mjs";

const sections = [
  { id: "overview", label: "Bringing Your Vehicle to California" },
  { id: "timing", label: "Registration Timing" },
  { id: "documents", label: "Title and Registration Documents" },
  { id: "smog", label: "Smog Requirements" },
  { id: "verification", label: "Vehicle Verification" },
  { id: "lienholder", label: "If a Lender Holds Your Title" },
  { id: "expired", label: "If Your Registration Has Expired" },
  { id: "help", label: "Where We Can Help" },
];

export function page() {
  const trail = [
    { label: "Home", href: ROUTES.home },
    { label: "Guides", href: ROUTES.guideMain },
    { label: "Moving to California? How to Register Your Car" },
  ];

  const body = `
${breadcrumbs(trail)}
<article class="section-tight">
  <div class="container-narrow prose">
    <h1>Moving to California? How to Register Your Car</h1>
    <p class="lede">If you're moving to California with a vehicle you already own and its title is clear (no lienholder), registering it is generally a straightforward process: you'll bring your out-of-state title and registration, complete a California application, and handle any required smog or vehicle verification steps. If a lender holds your title or your situation is otherwise complicated, that's reviewed on a case-by-case basis.</p>

    ${tableOfContents(sections)}

    <h2 id="overview">Bringing Your Vehicle to California</h2>
    <p>New California residents who bring an already-owned vehicle into the state need to register it with the California DMV, generally using their out-of-state title and current registration as the starting point.</p>

    <h2 id="timing">Registration Timing</h2>
    <p>California sets a deadline for new residents to register their vehicle after moving. Because this deadline and any related penalties can change, we don't list a specific number of days here — check the official DMV source below for the current requirement before you rely on it.</p>

    <h2 id="documents">Title and Registration Documents</h2>
    <p>Typically you'll need your out-of-state title (or acceptable alternative documentation), your most recent registration, and a completed California application. If you don't have the original title, see our guide on <a href="${ROUTES.guideMissingTitle}">registering without the original title</a>.</p>

    ${guideMidCta()}

    <h2 id="smog">Smog Requirements</h2>
    <p>Depending on your vehicle, a California smog inspection may be required before registration is complete. Requirements and exemptions vary by vehicle — see our <a href="${ROUTES.guideSmog}">smog and VIN verification guide</a> for more detail.</p>

    <h2 id="verification">Vehicle Verification</h2>
    <p>Some out-of-state vehicles require a physical VIN verification as part of the California registration process. Whether this applies depends on your specific vehicle and situation.</p>

    <h2 id="lienholder">If a Lender Holds Your Title</h2>
    <p>If your vehicle is financed and a lender or lienholder holds the title, that falls outside our standard, straightforward registration service. See our guide on <a href="${ROUTES.guideLienholder}">registration when a lender holds the title</a> — we review these situations individually to determine whether we're able to assist.</p>

    <h2 id="expired">If Your Registration Has Expired</h2>
    <p>An expired out-of-state registration can add steps to the process and, depending on the details, may fall outside our standard service. Tell us the specifics and we'll review whether we're able to help.</p>

    <h2 id="help">Where We Can Help</h2>
    <p>Our standard service covers straightforward registration for a passenger vehicle you already own, with a clear title, currently titled or registered in another U.S. state. If that describes your situation, start with your actual vehicle details below.</p>

    ${officialSourceCallout(["https://www.dmv.ca.gov/portal/new-to-california/"])}
  </div>
</article>

<section class="section-alt section-tight">
  <div class="container">
    <div class="section-header center">
      <h2>Related Guides</h2>
    </div>
    ${relatedGuides(ROUTES.guideMoving)}
  </div>
</section>

<section class="section">
  <div class="container">
    ${guideEndCta()}
  </div>
</section>
`;

  return layout({
    path: ROUTES.guideMoving,
    title: "Moving to California? How to Register Your Car | CA Registration Help",
    description:
      "Moving to California with a car you already own? Here's how straightforward out-of-state registration works, and when a situation needs individual review.",
    bodyHtml: body,
    extraJsonLd: [breadcrumbListJsonLd(trail)],
  });
}
