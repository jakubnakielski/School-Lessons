const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");

hamburger.addEventListener("click", () => {
  sideMenu.classList.toggle("sideMenu--isActive");
});

window.addEventListener("click", e => {
  if (sideMenu.contains(e.target)) {
  } else if (
    e.target.classList.value != "menu__hamburgerContainer" &&
    e.target.classList.value != "menu__hamburger"
  ) {
    sideMenu.classList.remove("sideMenu--isActive");
  }
});
