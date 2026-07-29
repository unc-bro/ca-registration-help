import { ROUTES } from "../../config.mjs";
import { layout } from "../../templates/layout.mjs";
import { breadcrumbs, breadcrumbListJsonLd } from "../../templates/breadcrumbs.mjs";
import { officialSourceCallout, tableOfContents, relatedGuides, guideEndCta, guideMidCta } from "../../templates/guideParts.mjs";

const sections = [
  { id: "overview", label: "Why This Comes Up" },
  { id: "why-it-changes", label: "Why a Lienholder Changes the Process" },
  { id: "financed-vs-clear", label: "Financed vs. Clear-Title Situations" },
  { id: "gather", label: "Information to Gather" },
  { id: "state-variation", label: "Why Title Availability Varies by State" },
  { id: "lender-docs", label: "If the Lender Must Provide Documentation" },
  { id: "help", label: "How We Can Help" },
];

export function page() {
  const trail = [
    { label: "Home", href: ROUTES.home },
    { label: "Guides", href: ROUTES.guideMain },
    { label: "California Registration When a Lender Holds the Title" },
  ];

  const body = `
${breadcrumbs(trail)}
<article class="section-tight">
  <div class="container-narrow prose">
    <h1>California Registration When a Lender Holds the Title</h1>
    <p class="lede">When a lender or lienholder holds your vehicle's out-of-state title, California registration falls outside our standard, straightforward service. It's a common situation with financed vehicles, and it can still often be worked through — we review it individually to determine whether we're able to assist.</p>

    ${tableOfContents(sections)}

    <h2 id="overview">Why This Comes Up</h2>
    <p>Many vehicles are financed, and lenders commonly hold the title as security until the loan is paid off. That's normal — but it means the owner doesn't have the physical title in hand, which most registration processes are built around.</p>

    <h2 id="why-it-changes">Why a Lienholder Changes the Process</h2>
    <p>Registration processes generally assume the applicant can produce the title. When a lender holds it, the process may require additional coordination — such as involving the lender directly or using alternative documentation — depending on California's current requirements and the lender's own procedures.</p>

    <h2 id="financed-vs-clear">Financed vs. Clear-Title Situations</h2>
    <p>A vehicle with a clear title (no lienholder) generally fits our standard, straightforward registration service. A financed vehicle with a lender-held title does not — it requires individual review to determine the right path forward.</p>

    ${guideMidCta("Have a lender or lienholder situation?")}

    <h2 id="gather">Information to Gather</h2>
    <p>If a lender holds your title, it helps to know: the lender's name and contact information, your loan or account number, and whether the loan is still active or recently paid off. Having this on hand speeds up review.</p>

    <h2 id="state-variation">Why Title Availability Varies by State</h2>
    <p>Not all states handle lienholder titles the same way — some issue the title to the owner with the lien noted, while others hold the physical title at the lender until the loan is paid. What's available to you depends on where the vehicle is currently titled.</p>

    <h2 id="lender-docs">If the Lender Must Provide Documentation</h2>
    <p>In some cases, moving forward requires documentation directly from the lender. We don't assume a specific procedure here, since it depends on the lender and the state — we review what's needed for your situation specifically.</p>

    <h2 id="help">How We Can Help</h2>
    <p>Tell us who holds your title and the details of your loan. We'll review your situation and let you know whether it's something we're able to assist with.</p>

    ${officialSourceCallout(["https://www.dmv.ca.gov/portal/vehicle-registration/titling-a-vehicle/"])}
  </div>
</article>

<section class="section-alt section-tight">
  <div class="container">
    <div class="section-header center">
      <h2>Related Guides</h2>
    </div>
    ${relatedGuides(ROUTES.guideLienholder)}
  </div>
</section>

<section class="section">
  <div class="container">
    ${guideEndCta()}
  </div>
</section>
`;

  return layout({
    path: ROUTES.guideLienholder,
    title: "California Registration When a Lender Holds the Title | CA Registration Help",
    description:
      "What to know when a lender or lienholder holds your out-of-state vehicle title and you're registering in California. Reviewed on a case-by-case basis.",
    bodyHtml: body,
    extraJsonLd: [breadcrumbListJsonLd(trail)],
  });
}
