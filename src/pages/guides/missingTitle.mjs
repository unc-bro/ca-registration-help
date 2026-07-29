import { ROUTES } from "../../config.mjs";
import { layout } from "../../templates/layout.mjs";
import { breadcrumbs, breadcrumbListJsonLd } from "../../templates/breadcrumbs.mjs";
import { officialSourceCallout, tableOfContents, relatedGuides, guideEndCta, guideMidCta } from "../../templates/guideParts.mjs";

const sections = [
  { id: "overview", label: "It Depends on Why the Title Is Missing" },
  { id: "lost", label: "Lost Title" },
  { id: "lender-held", label: "Lender-Held Title" },
  { id: "copy", label: "Copy Instead of Original" },
  { id: "seller", label: "Seller Didn't Provide the Title" },
  { id: "never-received", label: "Title Never Received" },
  { id: "other-jurisdiction", label: "Title From Another Jurisdiction" },
  { id: "alt-docs", label: "Alternative Ownership Documentation" },
  { id: "help", label: "How We Can Help" },
];

export function page() {
  const trail = [
    { label: "Home", href: ROUTES.home },
    { label: "Guides", href: ROUTES.guideMain },
    { label: "Registering an Out-of-State Vehicle Without the Original Title" },
  ];

  const body = `
${breadcrumbs(trail)}
<article class="section-tight">
  <div class="container-narrow prose">
    <h1>Registering an Out-of-State Vehicle in California Without the Original Title</h1>
    <p class="lede">A missing title does not always mean registration is impossible, but it does fall outside our standard, straightforward registration service. The right path depends heavily on why the title is unavailable and what alternative ownership documentation exists — we review these situations individually.</p>

    ${tableOfContents(sections)}

    <h2 id="overview">It Depends on Why the Title Is Missing</h2>
    <p>"Missing title" covers a range of situations, and they don't all work the same way. The reason your title is unavailable is usually the first thing that matters.</p>

    <h2 id="lost">Lost Title</h2>
    <p>If the title was simply lost, the state that issued it may offer a duplicate title process. Requirements vary by state.</p>

    <h2 id="lender-held">Lender-Held Title</h2>
    <p>If a lender holds the title because the vehicle is financed, that's a related but distinct situation — see our guide on <a href="${ROUTES.guideLienholder}">registration when a lender holds the title</a>.</p>

    ${guideMidCta("Not sure why your title is unavailable?")}

    <h2 id="copy">Copy Instead of Original</h2>
    <p>A photocopy or scanned image of a title is generally not accepted in place of an original or an official duplicate. What's acceptable depends on California's current requirements.</p>

    <h2 id="seller">Seller Didn't Provide the Title</h2>
    <p>If you purchased the vehicle and the seller never provided the title, this can complicate a registration and may require additional steps to establish ownership.</p>

    <h2 id="never-received">Title Never Received</h2>
    <p>Sometimes a title was ordered or issued but never received by the owner — for example, after a payoff or a state processing delay. This is treated differently than a title that was lost after being received.</p>

    <h2 id="other-jurisdiction">Title From Another Jurisdiction</h2>
    <p>Vehicles that have moved between multiple states, or that came from outside the standard state titling system, can involve extra steps to establish a clear ownership history.</p>

    <h2 id="alt-docs">Alternative Ownership Documentation</h2>
    <p>Depending on your situation, alternative documentation — such as a bill of sale, prior registration, or lienholder release — may help establish ownership. What's usable depends on the specifics of your case, and we don't assume a specific document will work without reviewing your situation.</p>

    <h2 id="help">How We Can Help</h2>
    <p>Tell us why your title is unavailable and what documentation you do have. We'll review your situation and let you know whether it's something we're able to assist with.</p>

    ${officialSourceCallout(["https://www.dmv.ca.gov/portal/vehicle-registration/titling-a-vehicle/"])}
  </div>
</article>

<section class="section-alt section-tight">
  <div class="container">
    <div class="section-header center">
      <h2>Related Guides</h2>
    </div>
    ${relatedGuides(ROUTES.guideMissingTitle)}
  </div>
</section>

<section class="section">
  <div class="container">
    ${guideEndCta()}
  </div>
</section>
`;

  return layout({
    path: ROUTES.guideMissingTitle,
    title: "Registering an Out-of-State Vehicle in California Without the Original Title | CA Registration Help",
    description:
      "What to know if you don't have the original out-of-state title for a vehicle you're registering in California. Reviewed on a case-by-case basis.",
    bodyHtml: body,
    extraJsonLd: [breadcrumbListJsonLd(trail)],
  });
}
