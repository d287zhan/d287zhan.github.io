(function () {
  var button = document.querySelector(".theme-toggle");
  if (!button) return;

  function currentTheme() {
    return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  }

  function updateButton() {
    var theme = currentTheme();
    var nextTheme = theme === "dark" ? "light" : "dark";
    button.textContent = theme === "dark" ? "Light" : "Dark";
    button.setAttribute("aria-label", "Switch to " + nextTheme + " mode");
    button.setAttribute("title", "Switch to " + nextTheme + " mode");
  }

  button.addEventListener("click", function () {
    var nextTheme = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    updateButton();
  });

  updateButton();
})();
