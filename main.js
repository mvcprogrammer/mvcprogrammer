/* mvcprogrammer.com — main.js
   Small, dependency-free enhancements. Everything degrades gracefully
   if this file fails to load: the page is fully usable without it. */

(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));

  /* ---------- Footer year ---------- */
  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  /* ---------- Mobile navigation ---------- */
  function setMenu(open) {
    if (!toggle || !nav) return;
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  function isMenuOpen() {
    return !!(nav && nav.classList.contains("is-open"));
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(!isMenuOpen());
    });

    // Close after choosing a section so the page is visible when it scrolls.
    nav.addEventListener("click", function (event) {
      var link = event.target.closest("a");
      if (link && isMenuOpen()) {
        setMenu(false);
      }
    });

    // Escape closes the menu and returns focus to the button.
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && isMenuOpen()) {
        setMenu(false);
        toggle.focus();
      }
    });

    // Clicking outside the header closes the menu.
    document.addEventListener("click", function (event) {
      if (isMenuOpen() && header && !header.contains(event.target)) {
        setMenu(false);
      }
    });

    // If the viewport grows past the mobile breakpoint, reset the menu state.
    var mq = window.matchMedia("(min-width: 48em)");
    var onChange = function (e) {
      if (e.matches) setMenu(false);
    };
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", onChange);
    } else if (typeof mq.addListener === "function") {
      mq.addListener(onChange);
    }
  }

  /* ---------- Header border on scroll ---------- */
  if (header) {
    var updateHeader = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  /* ---------- Highlight the nav link for the section in view ---------- */
  var sections = navLinks
    .map(function (link) {
      var id = link.getAttribute("href");
      return id && id.charAt(0) === "#" ? document.querySelector(id) : null;
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var current = null;

    var setCurrent = function (id) {
      if (id === current) return;
      current = id;
      navLinks.forEach(function (link) {
        if (link.getAttribute("href") === "#" + id) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    var visible = {};
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          visible[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0;
        });
        var best = null;
        var bestRatio = 0;
        sections.forEach(function (section) {
          var ratio = visible[section.id] || 0;
          if (ratio > bestRatio) {
            best = section.id;
            bestRatio = ratio;
          }
        });
        if (best) {
          setCurrent(best);
        } else if (window.scrollY < 200) {
          setCurrent(null);
        }
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ---------- Portfolio image fallback ----------
     Until the real images are added, show a labeled slot instead of a
     broken-image icon. Remove this block once all images are in place. */
  var media = document.querySelectorAll(".card-media img");
  Array.prototype.forEach.call(media, function (img) {
    var markMissing = function () {
      var wrapper = img.closest(".card-media");
      if (!wrapper) return;
      var file = (img.getAttribute("src") || "").split("/").pop();
      wrapper.setAttribute("data-label", "image pending: " + file);
      wrapper.classList.add("is-missing");
    };
    if (img.complete && img.naturalWidth === 0 && img.getAttribute("src")) {
      markMissing();
    } else {
      img.addEventListener("error", markMissing, { once: true });
    }
  });
})();
