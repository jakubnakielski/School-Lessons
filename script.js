const style = document.createElement("style");
document.head.appendChild(style);

const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");

hamburger.addEventListener("click", () => {
  sideMenu.classList.toggle("sideMenu--isActive");
  style.sheet.disabled = false;
  style.sheet.insertRule(`
  
  .menu__hamburgerInner::after {
    bottom: 0;
    transform: rotate(45deg);
  }
  `);
  style.sheet.insertRule(`
  .menu__hamburgerInner::before {
    top: 0;
    transform: rotate(-45deg);
  }
  
  `);
  style.sheet.insertRule(`
  .menu__hamburgerInner {
    height: 0;

  }
  
  `);
});

window.addEventListener("click", e => {
  if (
    sideMenu.contains(e.target) == false &&
    e.target.classList.value != "menu__hamburgerWrapper" &&
    e.target.classList.value != "menu__hamburgerInner" &&
    e.target.classList.value != "menu__hamburger"
  ) {
    sideMenu.classList.remove("sideMenu--isActive");
    style.sheet.disabled = true;
  }
});
