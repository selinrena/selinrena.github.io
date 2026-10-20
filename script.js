(function () {
  var btn = document.getElementById("themeBtn");
  if (btn) {
    var saved = null;
    try { saved = localStorage.getItem("theme"); } catch (e) {}
    var dark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) document.documentElement.classList.add("dark");
    btn.textContent = dark ? "\u2600" : "\u263D";
    btn.addEventListener("click", function () {
      dark = !dark;
      document.documentElement.classList.toggle("dark", dark);
      btn.textContent = dark ? "\u2600" : "\u263D";
      try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
    });
  }

  // repo buttons live inside cards that are themselves links, so they are
  // spans with data-href: open in a new tab without nesting anchors.
  document.querySelectorAll(".repo-btn[data-href]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      window.open(el.getAttribute("data-href"), "_blank", "noopener");
    });
    el.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        e.stopPropagation();
        window.open(el.getAttribute("data-href"), "_blank", "noopener");
      }
    });
  });
})();
