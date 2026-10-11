(function () {
  "use strict";

  function initMobileNav() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".main-nav");
    const mobileNav = window.matchMedia("(max-width: 767px)");

    if (!toggle || !nav) return;

    function setOpen(isOpen) {
      nav.classList.toggle("is-open", isOpen);
      nav.inert = mobileNav.matches && !isOpen;
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );
    }

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") !== "true";
      setOpen(isOpen);
      if (isOpen) {
        nav.querySelector(".nav-links a")?.focus();
      }
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        setOpen(false);
      });
    });

    nav.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });

    mobileNav.addEventListener("change", () => setOpen(false));
    setOpen(false);
  }

  function initActiveNavLink() {
    const currentPage = document.body.dataset.page || window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav-links a").forEach((link) => {
      const linkPage = new URL(link.href, window.location.href).pathname.split("/").pop();
      link.removeAttribute("aria-current");

      if (linkPage === currentPage) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  function initToolFilters() {
    const searchInput = document.querySelector("#tools-search");
    const categorySelect = document.querySelector("#tools-category");
    const toolCards = document.querySelectorAll(".tool-card");

    if (!searchInput || !categorySelect || !toolCards.length) return;

    function applyFilters() {
      const query = searchInput.value.trim().toLowerCase();
      const category = categorySelect.value;

      toolCards.forEach((card) => {
        const cardText = (card.dataset.search || card.textContent || "").toLowerCase();
        const matchesSearch = !query || cardText.includes(query);
        const matchesCategory = category === "all" || card.dataset.category === category;
        card.hidden = !(matchesSearch && matchesCategory);
      });
    }

    searchInput.addEventListener("input", applyFilters);
    categorySelect.addEventListener("change", applyFilters);
    applyFilters();
  }

  function initAccordions() {
    document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
      const item = trigger.closest(".accordion-item");
      const panel = item?.querySelector(".accordion-panel");

      if (!item || !panel) return;

      trigger.addEventListener("click", () => {
        const isExpanded = trigger.getAttribute("aria-expanded") === "true";
        trigger.setAttribute("aria-expanded", String(!isExpanded));
        item.classList.toggle("is-open", !isExpanded);
        panel.hidden = isExpanded;
      });
    });
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      link.addEventListener("click", (event) => {
        event.preventDefault();
        const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
        target.scrollIntoView({ behavior, block: "start" });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initMobileNav();
    initActiveNavLink();
    initToolFilters();
    initAccordions();
    initSmoothScroll();
  });
})();
