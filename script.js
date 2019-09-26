const style = document.createElement("style");
document.head.appendChild(style);

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const menuLink = document.getElementById("menu__link");
const article = document.querySelector(".article");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("sideMenu--isActive");
});

// console.log(article);

// article.addEventListener("click", () => {
//   menu.classList.remove("toggleMenu");
// });
