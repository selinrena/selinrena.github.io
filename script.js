(function () {
  var btn = document.getElementById("themeBtn");
  if (!btn) return;
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
})();
