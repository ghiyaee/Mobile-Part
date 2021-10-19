const menu = document.querySelector("#menu");
const nav = document.querySelector(".navbar");

menu.addEventListener("click", navbar);

let check = true;
function navbar() {
  if (check) {
    nav.style.display = "block";
    nav.style.position = " absolute";
    nav.style.top = "0";
    nav.style.right = "0";
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    check = false;
  } else {
    nav.style.display = "none";
    check = true;
  }
}
