/**
 * Inicialización del tema - ejecuta antes de cargar CSS para evitar parpadeo
 * Lee el tema guardado y aplica el atributo data-theme inmediatamente
 */
(function () {
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
})();
