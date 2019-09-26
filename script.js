const style = document.createElement("style");
document.head.appendChild(style);

const hamburger = document.getElementById("hamburger");
// const sideMenu = document.getElementById("sideMenu");
const sideMenu = document.querySelector(".sideMenu");

hamburger.addEventListener("click", () => {
  sideMenu.classList.toggle("sideMenu--isActive");
});

document.querySelector(".header").addEventListener("click", () => {
  sideMenu.classList.remove("sideMenu--isActive");
});
