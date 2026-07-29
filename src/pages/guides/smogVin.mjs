import { ROUTES } from "../../config.mjs";
import { layout } from "../../templates/layout.mjs";
import { breadcrumbs, breadcrumbListJsonLd } from "../../templates/breadcrumbs.mjs";
import { officialSourceCallout, tableOfContents, relatedGuides, guideEndCta } from "../../templates/guideParts.mjs";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "smog", label: "Smog Certification" },
  { id: "exemptions", label: "Possible Exemptions" },
  { id: "verification", label: "Vehicle (VIN) Verification" },
  { id: "newer-vehicles", label: "Newer, Low-Mileage Vehicles" },
  { id: "help", label: "How We Can Help" },
];

export function page() {
  const trail = [
    { label: "Home", href: ROUTES.home },
    { label: "Guides", href: ROUTES.guideMain },
    { label: "California Smog and VIN Verification for Out-of-State Vehicles" },
  ];

  const body = `
${breadcrumbs(trail)}
<article class="section-tight">
  <div class="container-narrow prose">
    <h1>California Smog and VIN Verification for Out-of-State Vehicles</h1>
    <p class="lede">Out-of-state vehicles registering in California can be subject to a smog inspection, a vehicle identification number (VIN) verification, or both. Whether either applies — and whether any exemption applies — depends on the specific vehicle and transaction, so we don't make blanket claims here.</p>

    ${tableOfContents(sections)}

    <h2 id="overview">Overview</h2>
    <p>California has emissions and vehicle-identification requirements that can apply when a vehicle is registered from out of state. These exist alongside the standard title and application paperwork.</p>

    <h2 id="smog">Smog Certification</h2>
    <p>A smog inspection may be required as part of registering an out-of-state vehicle in California. Whether it's required, and what the current process looks like, depends on the vehicle.</p>

    <h2 id="exemptions">Possible Exemptions</h2>
    <p>California's smog program includes exemptions for certain vehicles. We don't list specific exemption criteria here because they can change — check the official source below for current exemption rules before relying on one.</p>

    <h2 id="verification">Vehicle (VIN) Verification</h2>
    <p>Some out-of-state vehicles require a physical VIN verification before California registration can be completed. This confirms the vehicle's identification matches its paperwork. Whether it applies depends on your specific transaction.</p>

    <h2 id="newer-vehicles">Newer, Low-Mileage Vehicles</h2>
    <p>Newer, low-mileage vehicles can involve different emissions considerations than older vehicles. Any specific mileage or age threshold should be confirmed against current California DMV or Bureau of Automotive Repair guidance rather than assumed — thresholds like this can change.</p>

    <h2 id="help">How We Can Help</h2>
    <p>If your situation involves an unusual or borderline emissions circumstance, that's reviewed individually rather than covered automatically under our standard service. For a straightforward registration, tell us about your vehicle and we'll identify what smog or verification steps may apply.</p>

    ${officialSourceCallout(["https://www.bar.ca.gov/consumer/Smog_Check/", "https://www.dmv.ca.gov/portal/vehicle-registration/registration-fees/nonresident-vehicles/"])}
  </div>
</article>

<section class="section-alt section-tight">
  <div class="container">
    <div class="section-header center">
      <h2>Related Guides</h2>
    </div>
    ${relatedGuides(ROUTES.guideSmog)}
  </div>
</section>

<section class="section">
  <div class="container">
    ${guideEndCta()}
  </div>
</section>
`;

  return layout({
    path: ROUTES.guideSmog,
    title: "California Smog and VIN Verification for Out-of-State Vehicles | CA Registration Help",
    description:
      "What to know about California smog inspection and VIN verification requirements when registering an out-of-state vehicle.",
    bodyHtml: body,
    extraJsonLd: [breadcrumbListJsonLd(trail)],
  });
}
