const menu = document.querySelector(".nav-items");
const menuItems = document.querySelectorAll(".nav-item");
const hamburger = document.querySelector(".hamburger-button");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");

function toggleMenu() {
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("show-menu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", toggleMenu);
});
