// Q4. Theme Switcher Using Attribute Manipulation

const themeInfo = document.getElementById("themeInfo");

// Applies a theme using ONLY setAttribute()
function applyTheme(themeName) {
  // Add the theme class to <body>
  document.body.setAttribute("class", `theme-${themeName}`);

  // Save the current theme in a custom attribute: data-theme="dark"
  document.body.setAttribute("data-theme", themeName);

  themeInfo.textContent = `Current theme: ${document.body.getAttribute("data-theme")}`;
}

document.getElementById("lightButton").addEventListener("click", () => applyTheme("light"));
document.getElementById("darkButton").addEventListener("click", () => applyTheme("dark"));
document.getElementById("blueButton").addEventListener("click", () => applyTheme("blue"));

// Start with the light theme
applyTheme("light");