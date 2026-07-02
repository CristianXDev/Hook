document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const htmlElement = document.documentElement;
  const themeIcon = document.querySelector(".theme-icon");
  const profileImg = document.querySelector(".profile-img");

  // Leer tema guardado
  const savedTheme = localStorage.getItem("theme") || "dark";

  // Establecer el estado inicial de la UI de forma estática (sin animaciones activos)
  setTheme(savedTheme);

  // Forzar reflujo para asegurar que el navegador procese los estilos iniciales instantáneamente
  void htmlElement.offsetHeight;

  // Habilitar la clase de animaciones para interacciones de clic futuras
  htmlElement.classList.add("theme-ready");

  if (themeToggle) {
    themeToggle.addEventListener("change", () => {
      const theme = themeToggle.checked ? "light" : "dark";
      setTheme(theme);
    });
  }

  function setTheme(theme) {
    htmlElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    if (themeIcon) {
      themeIcon.className =
        theme === "light" ? "bx bx-sun theme-icon" : "bx bx-moon theme-icon";
    }
    if (themeToggle) {
      themeToggle.checked = theme === "light";
    }
    if (profileImg) {
      profileImg.src =
        theme === "light"
          ? "https://ui-avatars.com/api/?name=Hook&background=52525b&color=f5f5f5"
          : "https://ui-avatars.com/api/?name=Hook&background=f2d1e6&color=18181b";
    }
  }

  // Rotación suave del indicador chevron en favoritos
  const favoritesCollapse = document.getElementById("favoritesCollapse");
  const chevronIcon = document.querySelector(
    '[aria-controls="favoritesCollapse"] .bx-chevron-down',
  );

  if (favoritesCollapse && chevronIcon) {
    chevronIcon.style.transition =
      "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)";

    favoritesCollapse.addEventListener("show.bs.collapse", () => {
      chevronIcon.style.transform = "rotate(0deg)";
    });

    favoritesCollapse.addEventListener("hide.bs.collapse", () => {
      chevronIcon.style.transform = "rotate(-90deg)";
    });
  }

  // Comportamiento responsivo para pantallas móviles (Sidebar Drawer)
  const sidebar = document.getElementById("sidebar");
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebarOverlay = document.getElementById("sidebarOverlay");

  if (sidebarToggle && sidebar && sidebarOverlay) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.add("show");
      sidebarOverlay.classList.add("show");
    });

    sidebarOverlay.addEventListener("click", () => {
      sidebar.classList.remove("show");
      sidebarOverlay.classList.remove("show");
    });
  }
});
