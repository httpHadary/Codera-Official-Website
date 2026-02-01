document.addEventListener("DOMContentLoaded", function () {

  const toggle  = document.querySelector(".th-menu-toggle");
  const menu    = document.querySelector(".mobile-menu");
  const close   = document.querySelector(".mobile-close");
  const overlay = document.querySelector(".mobile-overlay");

  function openMenu() {
    menu.classList.add("open");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden"; // lock scroll
  }

  function closeMenu() {
    menu.classList.remove("open");
    overlay.classList.remove("active");
    document.body.style.overflow = ""; // restore scroll
  }

  toggle.addEventListener("click", openMenu);

  close.addEventListener("click", closeMenu);

  overlay.addEventListener("click", closeMenu);

  // Close when clicking link
  document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

});