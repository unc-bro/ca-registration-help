#!/usr/bin/env python3
"""Temporary stand-in for build.mjs (no Node on this machine).
Mirrors src/templates/*.mjs exactly so dist/ output matches what the real
build script will produce once Node is available. Delete this once Node is
installed and `node build.mjs` is used instead.
"""
import json
import os

BASE_URL = "https://CARegistrationHelp.com"
DIST = os.path.join(os.path.dirname(__file__), "..", "dist")

ICON_CHECK = '''<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <circle cx="10" cy="10" r="10" fill="var(--color-brand-soft)"/>
  <path d="M6 10.2l2.6 2.6L14.2 7" stroke="var(--color-brand)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>'''

ICON_SHIELD = '''<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M12 2l8 3.5v6c0 5-3.4 8.7-8 10.5-4.6-1.8-8-5.5-8-10.5v-6L12 2z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
</svg>'''

ICON_LOGO = '''<svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2" y="2" width="28" height="28" rx="8" fill="var(--color-brand)"/>
        <path d="M10 16.5l4 4 8-9" stroke="var(--color-on-brand)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>'''

ICON_MENU = '''<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
</svg>'''

ICON_CLOSE = '''<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
</svg>'''

ROUTES = {
    "home": "/",
    "checkMyVehicle": "/#check-my-vehicle",
    "guideMain": "/how-to-register-out-of-state-vehicle-california/",
    "guideMoving": "/moving-to-california-register-car/",
    "guideLienholder": "/california-registration-lienholder-title/",
    "guideMissingTitle": "/california-registration-without-title/",
    "guideSmog": "/california-smog-vin-verification-out-of-state/",
}

GUIDES = [
    {"title": "How to Register an Out-of-State Vehicle in California", "href": ROUTES["guideMain"], "description": "The full overview: documents, application, smog, and fees."},
    {"title": "Moving to California? How to Register Your Car", "href": ROUTES["guideMoving"], "description": "What new residents need to know about bringing a vehicle in."},
    {"title": "California Registration When a Lender Holds the Title", "href": ROUTES["guideLienholder"], "description": "How financed, out-of-state vehicles work through the process."},
    {"title": "Registering an Out-of-State Vehicle Without the Original Title", "href": ROUTES["guideMissingTitle"], "description": "Options when the title is lost, missing, or was never received."},
    {"title": "California Smog and VIN Verification for Out-of-State Vehicles", "href": ROUTES["guideSmog"], "description": "When emissions and vehicle identification checks may apply."},
]

OFFICIAL_SOURCES = [
    {"label": "California DMV — Out-of-State Vehicles", "href": "https://www.dmv.ca.gov/portal/vehicle-registration/registration-fees/nonresident-vehicles/"},
    {"label": "California DMV — New to California", "href": "https://www.dmv.ca.gov/portal/new-to-california/"},
    {"label": "California DMV — Vehicle Titles", "href": "https://www.dmv.ca.gov/portal/vehicle-registration/titling-a-vehicle/"},
    {"label": "California Bureau of Automotive Repair — Smog Check", "href": "https://www.bar.ca.gov/consumer/Smog_Check/"},
]

RELATED_GUIDES_MAP = {
    ROUTES["guideMain"]: [ROUTES["guideMoving"], ROUTES["guideLienholder"], ROUTES["guideMissingTitle"], ROUTES["guideSmog"]],
    ROUTES["guideMoving"]: [ROUTES["guideSmog"], ROUTES["guideMain"]],
    ROUTES["guideLienholder"]: [ROUTES["guideMissingTitle"], ROUTES["guideMain"]],
    ROUTES["guideMissingTitle"]: [ROUTES["guideLienholder"], ROUTES["guideMain"]],
    ROUTES["guideSmog"]: [ROUTES["guideMoving"], ROUTES["guideMain"]],
}


ICON_CHEVRON = '''<svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="accordion-chevron">
  <path d="M5 7.5l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>'''


def guides_dropdown():
    items = "".join(f'<li><a href="{g["href"]}">{g["title"]}</a></li>' for g in GUIDES)
    return f'''
      <li class="nav-dropdown">
        <details>
          <summary>Guides {ICON_CHEVRON}</summary>
          <ul class="nav-dropdown-menu">{items}</ul>
        </details>
      </li>'''


def site_header():
    nav_items = (
        '<li><a href="/#how-it-works">How It Works</a></li>'
        '<li><a href="/#situations">Services</a></li>'
        '<li><a href="/#faq">FAQ</a></li>'
    )
    dropdown = guides_dropdown()
    return f'''<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <div class="container">
    <a class="brand" href="/">
      {ICON_LOGO}
      <span>CA Registration Help</span>
    </a>
    <nav class="primary-nav" aria-label="Primary">
      <ul>{nav_items}{dropdown}</ul>
    </nav>
    <div class="header-actions">
      <a class="btn btn-primary" href="{ROUTES["checkMyVehicle"]}" data-event="homepage_check_vehicle">Check My Vehicle</a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu">
        <span class="icon-menu">{ICON_MENU}</span>
        <span class="icon-close">{ICON_CLOSE}</span>
      </button>
    </div>
  </div>
  <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile">
    <ul>
      {nav_items}{dropdown}
    </ul>
  </nav>
</header>'''


def site_footer():
    guide_links = "".join(f'<a href="{g["href"]}">{g["title"]}</a>' for g in GUIDES)
    return f'''<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="brand" href="/" style="text-decoration:none;">
          {ICON_LOGO}
          <span>CA Registration Help</span>
        </a>
        <p>California out-of-state vehicle registration assistance.</p>
        <nav aria-label="Quick links" style="margin-top:var(--space-4);">
          <a href="{ROUTES["checkMyVehicle"]}" style="text-decoration:none;font-weight:600;font-size:0.9rem;color:var(--color-brand-dark);">Check My Vehicle</a>
        </nav>
      </div>
      <nav class="footer-links" aria-label="Guides">
        {guide_links}
      </nav>
    </div>
    <p class="footer-disclosure">
      CA Registration Help is a private service and is not the California Department of Motor Vehicles.
      Eligible regulated registration transactions may be coordinated through a California DMV-authorized
      registration provider. Government fees, taxes, penalties, inspections, and other third-party costs
      are separate from any CA Registration Help service fee.
    </p>
    <div class="footer-meta">
      <span>&copy; <span id="copyright-year">2026</span> CA Registration Help</span>
      <span>CARegistrationHelp.com</span>
    </div>
  </div>
</footer>
<script src="/assets/js/main.js" defer></script>'''


def breadcrumbs_html(trail):
    items = "".join(
        f'<li><a href="{t["href"]}">{t["label"]}</a></li>' if t.get("href") else f'<li aria-current="page">{t["label"]}</li>'
        for t in trail
    )
    return f'<nav class="breadcrumbs container" aria-label="Breadcrumb">\n  <ol>{items}</ol>\n</nav>'


def breadcrumb_jsonld(trail):
    items = []
    for i, t in enumerate(trail):
        item = {"@type": "ListItem", "position": i + 1, "name": t["label"]}
        if t.get("href"):
            item["item"] = f'{BASE_URL}{t["href"]}'
        items.append(item)
    return {"@type": "BreadcrumbList", "itemListElement": items}


def toc_html(sections):
    items = "".join(f'<li><a href="#{s["id"]}">{s["label"]}</a></li>' for s in sections)
    return f'<nav class="toc" aria-label="Table of contents">\n  <h2>On this page</h2>\n  <ol>{items}</ol>\n</nav>'


def official_source_callout(hrefs=None):
    sources = [s for s in OFFICIAL_SOURCES if hrefs is None or s["href"] in hrefs]
    items = "".join(f'<li><a href="{s["href"]}" target="_blank" rel="noopener noreferrer">{s["label"]} ↗</a></li>' for s in sources)
    return f'''<div class="callout">
  <div class="callout-icon">{ICON_SHIELD}</div>
  <div>
    <h4>Official California DMV Resources</h4>
    <p>California DMV rules and requirements can change. We link to official DMV resources where appropriate so you can verify current requirements.</p>
    <ul>{items}</ul>
  </div>
</div>'''


def related_guides_html(current_path):
    hrefs = RELATED_GUIDES_MAP.get(current_path, [])
    by_href = {g["href"]: g for g in GUIDES}
    cards = "".join(
        f'<a class="related-card" href="{by_href[h]["href"]}"><h3>{by_href[h]["title"]}</h3><p>{by_href[h]["description"]}</p></a>'
        for h in hrefs if h in by_href
    )
    return f'<div class="related-guides">{cards}</div>'


def guide_end_cta():
    return f'''<div class="inline-cta">
  <a class="btn btn-primary btn-large" href="{ROUTES["checkMyVehicle"]}" data-event="guide_check_vehicle">Check My Vehicle</a>
  <p class="micro">Takes about 2–3 minutes. No obligation.</p>
</div>'''


def guide_mid_cta(text="Not sure how this applies to your vehicle?"):
    return f'''<div class="callout" style="align-items:center;">
  <div class="callout-icon">{ICON_SHIELD}</div>
  <div>
    <h4>{text}</h4>
    <p>Start with your actual vehicle and situation instead of generic instructions.</p>
    <a class="btn btn-primary" href="{ROUTES["checkMyVehicle"]}" data-event="guide_check_vehicle">Check My Vehicle</a>
  </div>
</div>'''


def page_html(path, title, description, article_html, trail):
    canonical = f"{BASE_URL}{path}"
    og_image = f"{BASE_URL}/assets/images/social-share.svg"
    graph = [
        {
            "@type": "Organization", "@id": f"{BASE_URL}/#organization", "name": "CA Registration Help",
            "url": BASE_URL,
            "description": "A private California vehicle-registration concierge service that helps identify requirements, organize paperwork, and coordinate eligible registration processing through a California DMV-authorized registration provider.",
        },
        {"@type": "WebSite", "@id": f"{BASE_URL}/#website", "name": "CA Registration Help", "url": BASE_URL, "publisher": {"@id": f"{BASE_URL}/#organization"}},
        {"@type": "WebPage", "@id": f"{canonical}#webpage", "url": canonical, "name": title, "description": description, "isPartOf": {"@id": f"{BASE_URL}/#website"}},
        breadcrumb_jsonld(trail),
    ]
    jsonld = json.dumps({"@context": "https://schema.org", "@graph": graph}, ensure_ascii=False)

    return f'''<!doctype html>
<html lang="en-US">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{description}">
<link rel="canonical" href="{canonical}">

<link rel="icon" href="/assets/icons/favicon.svg" type="image/svg+xml">
<link rel="alternate icon" href="/assets/icons/favicon.svg">
<link rel="apple-touch-icon" href="/assets/icons/favicon.svg">

<meta property="og:type" content="website">
<meta property="og:site_name" content="CA Registration Help">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{description}">
<meta property="og:url" content="{canonical}">
<meta property="og:image" content="{og_image}">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{title}">
<meta name="twitter:description" content="{description}">
<meta name="twitter:image" content="{og_image}">

<link rel="stylesheet" href="/assets/css/style.css">
<script type="application/ld+json">{jsonld}</script>
<!-- Analytics disabled: SITE_CONFIG.analyticsId is blank in src/config.mjs -->
</head>
<body class="">
{site_header()}
<main id="main">
{breadcrumbs_html(trail)}
<article class="section-tight">
  <div class="container-narrow prose">
{article_html}
  </div>
</article>

<section class="section-alt section-tight">
  <div class="container">
    <div class="section-header center">
      <h2>Related Guides</h2>
    </div>
    {related_guides_html(path)}
  </div>
</section>

<section class="section">
  <div class="container">
    {guide_end_cta()}
  </div>
</section>
</main>
{site_footer()}
</body>
</html>
'''


def write(path_out, html):
    full = os.path.join(DIST, path_out)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8") as f:
        f.write(html)
    print("wrote", path_out)


# ---------------------------------------------------------------------------
# Guide 1: main guide
# ---------------------------------------------------------------------------
main_sections = [
    {"id": "overview", "label": "Overview of the Process"},
    {"id": "ownership-documents", "label": "Ownership Documents"},
    {"id": "out-of-state-title", "label": "Your Out-of-State Title"},
    {"id": "registration-documents", "label": "Registration Documents"},
    {"id": "application-paperwork", "label": "California Application Paperwork"},
    {"id": "smog", "label": "Smog Considerations"},
    {"id": "verification", "label": "Vehicle Verification"},
    {"id": "lienholders", "label": "Lienholder Issues"},
    {"id": "fees", "label": "Fees and Taxes"},
    {"id": "complications", "label": "When the Process Gets Complicated"},
]
main_trail = [{"label": "Home", "href": ROUTES["home"]}, {"label": "How to Register an Out-of-State Vehicle"}]
main_article = f'''
    <h1>How to Register an Out-of-State Vehicle in California</h1>
    <p class="lede">Registering an out-of-state vehicle in California generally involves your out-of-state title, current registration, proof of ownership, a completed California application, and — depending on the vehicle — a smog inspection and a vehicle identification (VIN) verification. The exact combination of steps depends on your specific vehicle, how you acquired it, and whether a lender holds the title.</p>

    {toc_html(main_sections)}

    <h2 id="overview">Overview of the Process</h2>
    <p>At a high level, registering a vehicle from another state involves confirming ownership, verifying the vehicle, satisfying any California emissions requirements, and submitting an application along with the applicable fees. Some of this can be coordinated through a private registration provider; other steps, like a smog test or vehicle verification, typically happen in person.</p>

    <h2 id="ownership-documents">Ownership Documents</h2>
    <p>You'll generally need to show proof of ownership. This usually means your out-of-state title, but can also involve a bill of sale, prior registration, or lienholder documentation depending on your situation.</p>

    <h2 id="out-of-state-title">Your Out-of-State Title</h2>
    <p>Your existing title is central to the process. California will typically want to see the original out-of-state title (or acceptable alternative documentation) as part of the transfer. If you don't have it in hand — because a lender holds it or it's missing — the process branches. See our guides on <a href="{ROUTES["guideLienholder"]}">lienholder titles</a> and <a href="{ROUTES["guideMissingTitle"]}">missing titles</a>.</p>

    {guide_mid_cta()}

    <h2 id="registration-documents">Registration Documents</h2>
    <p>Along with the title, your current or most recent out-of-state registration helps establish the vehicle's history and can be requested as part of the transaction.</p>

    <h2 id="application-paperwork">California Application Paperwork</h2>
    <p>California registration involves a completed application along with any required supporting forms. Which specific forms apply depends on details like whether the vehicle is financed, whether it was purchased or already owned, and its emissions profile.</p>

    <h2 id="smog">Smog Considerations</h2>
    <p>Out-of-state vehicles can be subject to a California smog inspection as part of registration, though exemptions can apply depending on the vehicle. See our dedicated guide on <a href="{ROUTES["guideSmog"]}">smog and VIN verification</a> for more detail.</p>

    <h2 id="verification">Vehicle Verification</h2>
    <p>Some out-of-state vehicles require a physical VIN verification before registration can be completed. Whether this applies depends on your specific transaction.</p>

    <h2 id="lienholders">Lienholder Issues</h2>
    <p>If a lender or lienholder holds your title, the process can look different than a clear-title transaction — and falls outside our standard, straightforward service. Read our guide on <a href="{ROUTES["guideLienholder"]}">registration when a lender holds the title</a>.</p>

    <h2 id="fees">Fees and Taxes</h2>
    <p>California registration involves government fees and, in some cases, use tax, separate from any service fee charged by a private concierge or registration provider. Fee amounts vary by vehicle and situation and are outside the scope of this guide — the DMV is the authoritative source for current fee amounts.</p>

    <h2 id="complications">When the Process Gets Complicated</h2>
    <p>Titles held by lenders, missing documents, expired registrations, and unusual vehicle histories can all add steps, and generally fall outside our standard service — we review these individually. If your situation looks straightforward — a passenger vehicle you already own, with a clear title, currently titled in another state — start with your actual vehicle details.</p>

    {official_source_callout()}
'''
write(ROUTES["guideMain"].strip("/") + "/index.html", page_html(
    ROUTES["guideMain"],
    "How to Register an Out-of-State Vehicle in California | CA Registration Help",
    "A clear overview of registering an out-of-state vehicle in California: documents, application paperwork, smog, VIN verification, and lienholder issues.",
    main_article,
    main_trail,
))

# ---------------------------------------------------------------------------
# Guide 2: moving to California
# ---------------------------------------------------------------------------
moving_sections = [
    {"id": "overview", "label": "Bringing Your Vehicle to California"},
    {"id": "timing", "label": "Registration Timing"},
    {"id": "documents", "label": "Title and Registration Documents"},
    {"id": "smog", "label": "Smog Requirements"},
    {"id": "verification", "label": "Vehicle Verification"},
    {"id": "lienholder", "label": "If a Lender Holds Your Title"},
    {"id": "expired", "label": "If Your Registration Has Expired"},
    {"id": "help", "label": "Where We Can Help"},
]
moving_trail = [{"label": "Home", "href": ROUTES["home"]}, {"label": "Guides", "href": ROUTES["guideMain"]}, {"label": "Moving to California? How to Register Your Car"}]
moving_article = f'''
    <h1>Moving to California? How to Register Your Car</h1>
    <p class="lede">If you're moving to California with a vehicle you already own and its title is clear (no lienholder), registering it is generally a straightforward process: you'll bring your out-of-state title and registration, complete a California application, and handle any required smog or vehicle verification steps. If a lender holds your title or your situation is otherwise complicated, that's reviewed on a case-by-case basis.</p>

    {toc_html(moving_sections)}

    <h2 id="overview">Bringing Your Vehicle to California</h2>
    <p>New California residents who bring an already-owned vehicle into the state need to register it with the California DMV, generally using their out-of-state title and current registration as the starting point.</p>

    <h2 id="timing">Registration Timing</h2>
    <p>California sets a deadline for new residents to register their vehicle after moving. Because this deadline and any related penalties can change, we don't list a specific number of days here — check the official DMV source below for the current requirement before you rely on it.</p>

    <h2 id="documents">Title and Registration Documents</h2>
    <p>Typically you'll need your out-of-state title (or acceptable alternative documentation), your most recent registration, and a completed California application. If you don't have the original title, see our guide on <a href="{ROUTES["guideMissingTitle"]}">registering without the original title</a>.</p>

    {guide_mid_cta()}

    <h2 id="smog">Smog Requirements</h2>
    <p>Depending on your vehicle, a California smog inspection may be required before registration is complete. Requirements and exemptions vary by vehicle — see our <a href="{ROUTES["guideSmog"]}">smog and VIN verification guide</a> for more detail.</p>

    <h2 id="verification">Vehicle Verification</h2>
    <p>Some out-of-state vehicles require a physical VIN verification as part of the California registration process. Whether this applies depends on your specific vehicle and situation.</p>

    <h2 id="lienholder">If a Lender Holds Your Title</h2>
    <p>If your vehicle is financed and a lender or lienholder holds the title, that falls outside our standard, straightforward registration service. See our guide on <a href="{ROUTES["guideLienholder"]}">registration when a lender holds the title</a> — we review these situations individually to determine whether we're able to assist.</p>

    <h2 id="expired">If Your Registration Has Expired</h2>
    <p>An expired out-of-state registration can add steps to the process and, depending on the details, may fall outside our standard service. Tell us the specifics and we'll review whether we're able to help.</p>

    <h2 id="help">Where We Can Help</h2>
    <p>Our standard service covers straightforward registration for a passenger vehicle you already own, with a clear title, currently titled or registered in another U.S. state. If that describes your situation, start with your actual vehicle details below.</p>

    {official_source_callout(["https://www.dmv.ca.gov/portal/new-to-california/"])}
'''
write(ROUTES["guideMoving"].strip("/") + "/index.html", page_html(
    ROUTES["guideMoving"],
    "Moving to California? How to Register Your Car | CA Registration Help",
    "Moving to California with a car you already own? Here's how straightforward out-of-state registration works, and when a situation needs individual review.",
    moving_article,
    moving_trail,
))

# ---------------------------------------------------------------------------
# Guide 3: lienholder
# ---------------------------------------------------------------------------
lien_sections = [
    {"id": "overview", "label": "Why This Comes Up"},
    {"id": "why-it-changes", "label": "Why a Lienholder Changes the Process"},
    {"id": "financed-vs-clear", "label": "Financed vs. Clear-Title Situations"},
    {"id": "gather", "label": "Information to Gather"},
    {"id": "state-variation", "label": "Why Title Availability Varies by State"},
    {"id": "lender-docs", "label": "If the Lender Must Provide Documentation"},
    {"id": "help", "label": "How We Can Help"},
]
lien_trail = [{"label": "Home", "href": ROUTES["home"]}, {"label": "Guides", "href": ROUTES["guideMain"]}, {"label": "California Registration When a Lender Holds the Title"}]
lien_article = f'''
    <h1>California Registration When a Lender Holds the Title</h1>
    <p class="lede">When a lender or lienholder holds your vehicle's out-of-state title, California registration falls outside our standard, straightforward service. It's a common situation with financed vehicles, and it can still often be worked through — we review it individually to determine whether we're able to assist.</p>

    {toc_html(lien_sections)}

    <h2 id="overview">Why This Comes Up</h2>
    <p>Many vehicles are financed, and lenders commonly hold the title as security until the loan is paid off. That's normal — but it means the owner doesn't have the physical title in hand, which most registration processes are built around.</p>

    <h2 id="why-it-changes">Why a Lienholder Changes the Process</h2>
    <p>Registration processes generally assume the applicant can produce the title. When a lender holds it, the process may require additional coordination — such as involving the lender directly or using alternative documentation — depending on California's current requirements and the lender's own procedures.</p>

    <h2 id="financed-vs-clear">Financed vs. Clear-Title Situations</h2>
    <p>A vehicle with a clear title (no lienholder) generally fits our standard, straightforward registration service. A financed vehicle with a lender-held title does not — it requires individual review to determine the right path forward.</p>

    {guide_mid_cta("Have a lender or lienholder situation?")}

    <h2 id="gather">Information to Gather</h2>
    <p>If a lender holds your title, it helps to know: the lender's name and contact information, your loan or account number, and whether the loan is still active or recently paid off. Having this on hand speeds up review.</p>

    <h2 id="state-variation">Why Title Availability Varies by State</h2>
    <p>Not all states handle lienholder titles the same way — some issue the title to the owner with the lien noted, while others hold the physical title at the lender until the loan is paid. What's available to you depends on where the vehicle is currently titled.</p>

    <h2 id="lender-docs">If the Lender Must Provide Documentation</h2>
    <p>In some cases, moving forward requires documentation directly from the lender. We don't assume a specific procedure here, since it depends on the lender and the state — we review what's needed for your situation specifically.</p>

    <h2 id="help">How We Can Help</h2>
    <p>Tell us who holds your title and the details of your loan. We'll review your situation and let you know whether it's something we're able to assist with.</p>

    {official_source_callout(["https://www.dmv.ca.gov/portal/vehicle-registration/titling-a-vehicle/"])}
'''
write(ROUTES["guideLienholder"].strip("/") + "/index.html", page_html(
    ROUTES["guideLienholder"],
    "California Registration When a Lender Holds the Title | CA Registration Help",
    "What to know when a lender or lienholder holds your out-of-state vehicle title and you're registering in California. Reviewed on a case-by-case basis.",
    lien_article,
    lien_trail,
))

# ---------------------------------------------------------------------------
# Guide 4: missing title
# ---------------------------------------------------------------------------
missing_sections = [
    {"id": "overview", "label": "It Depends on Why the Title Is Missing"},
    {"id": "lost", "label": "Lost Title"},
    {"id": "lender-held", "label": "Lender-Held Title"},
    {"id": "copy", "label": "Copy Instead of Original"},
    {"id": "seller", "label": "Seller Didn't Provide the Title"},
    {"id": "never-received", "label": "Title Never Received"},
    {"id": "other-jurisdiction", "label": "Title From Another Jurisdiction"},
    {"id": "alt-docs", "label": "Alternative Ownership Documentation"},
    {"id": "help", "label": "How We Can Help"},
]
missing_trail = [{"label": "Home", "href": ROUTES["home"]}, {"label": "Guides", "href": ROUTES["guideMain"]}, {"label": "Registering an Out-of-State Vehicle Without the Original Title"}]
missing_article = f'''
    <h1>Registering an Out-of-State Vehicle in California Without the Original Title</h1>
    <p class="lede">A missing title does not always mean registration is impossible, but it does fall outside our standard, straightforward registration service. The right path depends heavily on why the title is unavailable and what alternative ownership documentation exists — we review these situations individually.</p>

    {toc_html(missing_sections)}

    <h2 id="overview">It Depends on Why the Title Is Missing</h2>
    <p>"Missing title" covers a range of situations, and they don't all work the same way. The reason your title is unavailable is usually the first thing that matters.</p>

    <h2 id="lost">Lost Title</h2>
    <p>If the title was simply lost, the state that issued it may offer a duplicate title process. Requirements vary by state.</p>

    <h2 id="lender-held">Lender-Held Title</h2>
    <p>If a lender holds the title because the vehicle is financed, that's a related but distinct situation — see our guide on <a href="{ROUTES["guideLienholder"]}">registration when a lender holds the title</a>.</p>

    {guide_mid_cta("Not sure why your title is unavailable?")}

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

    {official_source_callout(["https://www.dmv.ca.gov/portal/vehicle-registration/titling-a-vehicle/"])}
'''
write(ROUTES["guideMissingTitle"].strip("/") + "/index.html", page_html(
    ROUTES["guideMissingTitle"],
    "Registering an Out-of-State Vehicle in California Without the Original Title | CA Registration Help",
    "What to know if you don't have the original out-of-state title for a vehicle you're registering in California. Reviewed on a case-by-case basis.",
    missing_article,
    missing_trail,
))

# ---------------------------------------------------------------------------
# Guide 5: smog / VIN
# ---------------------------------------------------------------------------
smog_sections = [
    {"id": "overview", "label": "Overview"},
    {"id": "smog", "label": "Smog Certification"},
    {"id": "exemptions", "label": "Possible Exemptions"},
    {"id": "verification", "label": "Vehicle (VIN) Verification"},
    {"id": "newer-vehicles", "label": "Newer, Low-Mileage Vehicles"},
    {"id": "help", "label": "How We Can Help"},
]
smog_trail = [{"label": "Home", "href": ROUTES["home"]}, {"label": "Guides", "href": ROUTES["guideMain"]}, {"label": "California Smog and VIN Verification for Out-of-State Vehicles"}]
smog_article = f'''
    <h1>California Smog and VIN Verification for Out-of-State Vehicles</h1>
    <p class="lede">Out-of-state vehicles registering in California can be subject to a smog inspection, a vehicle identification number (VIN) verification, or both. Whether either applies — and whether any exemption applies — depends on the specific vehicle and transaction, so we don't make blanket claims here.</p>

    {toc_html(smog_sections)}

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

    {official_source_callout(["https://www.bar.ca.gov/consumer/Smog_Check/", "https://www.dmv.ca.gov/portal/vehicle-registration/registration-fees/nonresident-vehicles/"])}
'''
write(ROUTES["guideSmog"].strip("/") + "/index.html", page_html(
    ROUTES["guideSmog"],
    "California Smog and VIN Verification for Out-of-State Vehicles | CA Registration Help",
    "What to know about California smog inspection and VIN verification requirements when registering an out-of-state vehicle.",
    smog_article,
    smog_trail,
))

print("\nDone: 5 guide pages written to /dist")
