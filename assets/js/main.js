(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var isOpen = mobileNav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });
  }

  // FAQ accordion (event delegation, works for any number of accordions on a page)
  document.addEventListener("click", function (event) {
    var button = event.target.closest(".faq-question");
    if (!button) return;
    var item = button.closest(".faq-item");
    var expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    item.classList.toggle("is-open", !expanded);
  });

  // Close an open nav dropdown when clicking outside it
  document.addEventListener("click", function (event) {
    document.querySelectorAll(".nav-dropdown[open]").forEach(function (details) {
      if (!details.contains(event.target)) {
        details.removeAttribute("open");
      }
    });
  });

  // Footer copyright year
  var yearEl = document.getElementById("copyright-year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
