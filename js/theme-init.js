/**
 * Theme initialization script - must run before CSS loads to prevent theme flash
 * This script sets the theme attribute immediately on page load
 */
(function () {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
})();
