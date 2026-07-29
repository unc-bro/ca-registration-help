// Small inline SVG icon set. No external assets, no icon font.

export const iconLogo = `
<svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect x="2" y="2" width="28" height="28" rx="8" fill="var(--color-brand)"/>
  <path d="M10 16.5l4 4 8-9" stroke="var(--color-on-brand)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const iconCheck = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <circle cx="10" cy="10" r="10" fill="var(--color-brand-soft)"/>
  <path d="M6 10.2l2.6 2.6L14.2 7" stroke="var(--color-brand)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const iconDocument = `
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M6 2h9l5 5v15a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <path d="M15 2v5h5" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <path d="M8 13h8M8 17h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
</svg>`;

export const iconCar = `
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M4 16l1.5-5A2 2 0 017.4 9.5h9.2A2 2 0 0118.5 11L20 16" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <rect x="3" y="16" width="18" height="4" rx="1.4" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="7.5" cy="20" r="1.4" fill="currentColor"/>
  <circle cx="16.5" cy="20" r="1.4" fill="currentColor"/>
</svg>`;

export const iconShield = `
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M12 2l8 3.5v6c0 5-3.4 8.7-8 10.5-4.6-1.8-8-5.5-8-10.5v-6L12 2z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
</svg>`;

export const iconChevron = `
<svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="accordion-chevron">
  <path d="M5 7.5l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const iconMenu = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
</svg>`;

export const iconClose = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
</svg>`;

// Hero illustration: California outline + document + checkmark path, built as
// a simple flat/lightly-dimensional composition. No stock imagery.
export const heroIllustration = `
<svg viewBox="0 0 480 420" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of a vehicle registration document with a California outline and a checkmark progress path">
  <defs>
    <linearGradient id="caFill" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="var(--color-brand)" stop-opacity="0.16"/>
      <stop offset="1" stop-color="var(--color-brand)" stop-opacity="0.06"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="480" height="420" rx="24" fill="var(--color-surface-alt)"/>
  <path d="M150 60 L190 55 L205 80 L235 85 L250 120 L245 165 L265 210 L250 260 L215 300 L195 340 L165 355 L150 320 L155 270 L135 230 L140 180 L120 140 L130 100 Z"
        fill="url(#caFill)" stroke="var(--color-brand)" stroke-width="2" stroke-opacity="0.35"/>
  <g transform="translate(230,120)">
    <rect x="0" y="0" width="150" height="190" rx="10" fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="1.5"/>
    <rect x="18" y="24" width="90" height="10" rx="5" fill="var(--color-brand)" opacity="0.85"/>
    <rect x="18" y="48" width="114" height="7" rx="3.5" fill="var(--color-border)"/>
    <rect x="18" y="64" width="114" height="7" rx="3.5" fill="var(--color-border)"/>
    <rect x="18" y="80" width="80" height="7" rx="3.5" fill="var(--color-border)"/>
    <rect x="18" y="106" width="114" height="1" fill="var(--color-border)"/>
    <rect x="18" y="122" width="60" height="7" rx="3.5" fill="var(--color-border)"/>
    <rect x="18" y="138" width="90" height="7" rx="3.5" fill="var(--color-border)"/>
    <circle cx="112" cy="160" r="22" fill="var(--color-brand)"/>
    <path d="M101 160l7 7 15-16" stroke="var(--color-on-brand)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </g>
  <g transform="translate(60,260)">
    <path d="M4 40l1.5-5A2 2 0 017.4 33.5h39.2A2 2 0 0148.5 35L50 40" stroke="var(--color-ink)" stroke-width="2.2" stroke-linejoin="round" fill="none" opacity="0.75"/>
    <rect x="3" y="40" width="48" height="11" rx="3.5" stroke="var(--color-ink)" stroke-width="2.2" opacity="0.75" fill="var(--color-surface-alt)"/>
    <circle cx="13" cy="51" r="3.2" fill="var(--color-ink)" opacity="0.75"/>
    <circle cx="41" cy="51" r="3.2" fill="var(--color-ink)" opacity="0.75"/>
  </g>
  <path d="M110 300 C 160 260, 200 250, 230 210" stroke="var(--color-brand)" stroke-width="2" stroke-dasharray="4 6" fill="none" opacity="0.5"/>
</svg>`;
