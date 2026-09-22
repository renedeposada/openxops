/**
 * Open xOps - main.js
 * Lightweight, framework-free interactivity shared across all pages.
 */

(function () {
  "use strict";

  /* ------------------------------------------------------------------ */
  /* Mobile navigation drawer                                           */
  /* ------------------------------------------------------------------ */
  function initMobileNav() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".main-nav");

    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close drawer when a nav link is clicked (mobile UX).
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* Active navigation highlighting                                     */
  /* ------------------------------------------------------------------ */
  function initActiveNavLink() {
    const currentPage =
      document.body.dataset.page ||
      window.location.pathname.split("/").pop() ||
      "index.html";

    document.querySelectorAll(".nav-links a").forEach((link) => {
      const linkPage = link.getAttribute("href");
      if (linkPage === currentPage) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* Tools page: search + category filtering                            */
  /* ------------------------------------------------------------------ */
  function initToolsFilter() {
    const searchInput = document.querySelector("#tool-search");
    const categorySelect = document.querySelector("#tool-category");
    const cards = document.querySelectorAll("[data-tool-card]");
    const emptyState = document.querySelector("#tools-empty-state");

    if (!cards.length) return;

    function applyFilters() {
      const query = (searchInput?.value || "").trim().toLowerCase();
      const category = categorySelect?.value || "all";
      let visibleCount = 0;

      cards.forEach((card) => {
        const name = (card.dataset.name || "").toLowerCase();
        const description = (card.dataset.description || "").toLowerCase();
        const cardCategory = card.dataset.category || "all";

        const matchesQuery =
          !query || name.includes(query) || description.includes(query);
        const matchesCategory = category === "all" || cardCategory === category;
        const isVisible = matchesQuery && matchesCategory;

        card.hidden = !isVisible;
        if (isVisible) visibleCount += 1;
      });

      if (emptyState) {
        emptyState.classList.toggle("is-visible", visibleCount === 0);
      }
    }

    searchInput?.addEventListener("input", applyFilters);
    categorySelect?.addEventListener("change", applyFilters);

    applyFilters();
  }

  /* ------------------------------------------------------------------ */
  /* Smooth scrolling for in-page anchor links                          */
  /* ------------------------------------------------------------------ */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");
        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initMobileNav();
    initActiveNavLink();
    initToolsFilter();
    initSmoothScroll();
  });
})();
