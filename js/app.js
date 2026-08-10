const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", isOpen);

  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");

  menuToggle.innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';

  const menuLinks = document.querySelectorAll(".menu a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");

      menuToggle.setAttribute("aria-expanded", "false");

      menuToggle.setAttribute("aria-label", "Abrir menu");

      menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
});
