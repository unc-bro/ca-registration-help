import { iconChevron } from "./icons.mjs";

export function faqAccordion(items, idPrefix = "faq") {
  const rows = items
    .map((item, i) => {
      const id = `${idPrefix}-${i}`;
      return `
      <div class="faq-item">
        <h3>
          <button class="faq-question" type="button" aria-expanded="false" aria-controls="${id}-panel" id="${id}-button">
            <span>${item.q}</span>
            ${iconChevron}
          </button>
        </h3>
        <div class="faq-answer" id="${id}-panel" role="region" aria-labelledby="${id}-button">
          <div class="faq-answer-inner">
            <p>${item.a}</p>
          </div>
        </div>
      </div>`;
    })
    .join("");

  return `<div class="faq-list" data-accordion>${rows}</div>`;
}
