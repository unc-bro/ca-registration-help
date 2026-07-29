import { SITE_CONFIG } from "../config.mjs";

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": `${SITE_CONFIG.baseUrl}/#organization`,
    name: SITE_CONFIG.siteName,
    url: SITE_CONFIG.baseUrl,
    description:
      "A private California vehicle-registration concierge service that helps identify requirements, organize paperwork, and coordinate eligible registration processing through a California DMV-authorized registration provider.",
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.baseUrl}/#website`,
    name: SITE_CONFIG.siteName,
    url: SITE_CONFIG.baseUrl,
    publisher: { "@id": `${SITE_CONFIG.baseUrl}/#organization` },
  };
}

export function serviceJsonLd() {
  return {
    "@type": "Service",
    name: "California Out-of-State Vehicle Registration Assistance",
    serviceType: "Vehicle registration concierge service",
    provider: { "@id": `${SITE_CONFIG.baseUrl}/#organization` },
    areaServed: {
      "@type": "State",
      name: "California",
    },
    description:
      "Standard service: assistance with straightforward California registration for a passenger vehicle currently titled or registered in another U.S. state, including identifying requirements, organizing documents and steps, and coordinating eligible registration processing through a California DMV-authorized registration provider. More complex situations are reviewed individually.",
  };
}

export function webPageJsonLd({ url, name, description }) {
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": `${SITE_CONFIG.baseUrl}/#website` },
  };
}

export function faqPageJsonLd(items) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function jsonLdScript(graphNodes) {
  const doc = {
    "@context": "https://schema.org",
    "@graph": graphNodes,
  };
  return `<script type="application/ld+json">${JSON.stringify(doc)}</script>`;
}
