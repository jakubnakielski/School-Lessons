const style = document.createElement("style");
document.head.appendChild(style);

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const menuLink = document.getElementById("menu__link");
hamburger.addEventListener("click", () => {
  console.log(menu.firstElementChild);
  menu.classList.toggle("toggleMenu");
  menu.firstElementChild.classList.toggle("toggleColor");
});
