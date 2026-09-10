// Altus Dev — menú móvil accesible y año del pie de página.
(function () {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");

  function closeNav() {
    nav.setAttribute("data-open", "false");
    toggle.setAttribute("aria-expanded", "false");
  }

  function openNav() {
    nav.setAttribute("data-open", "true");
    toggle.setAttribute("aria-expanded", "true");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeNav();
      }
    });

    document.addEventListener("click", function (event) {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      if (isOpen && !nav.contains(event.target) && !toggle.contains(event.target)) {
        closeNav();
      }
    });
  }

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
