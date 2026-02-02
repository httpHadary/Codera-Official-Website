document.addEventListener("DOMContentLoaded", function () {

  const toggle  = document.querySelector(".th-menu-toggle");
  const menu    = document.querySelector(".mobile-menu");
  const close   = document.querySelector(".mobile-close");
  const overlay = document.querySelector(".mobile-overlay");

  function openMenu() {
    menu.classList.add("open");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    menu.classList.remove("open");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  toggle.addEventListener("click", openMenu);

  close.addEventListener("click", closeMenu);

  overlay.addEventListener("click", closeMenu);

  document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

});

// Language auto detecction
if (navigator.language.startsWith("ar")) {
  if (!location.href.includes("index-ar.html")) {
    location.href = "index-ar.html";
  }
}
