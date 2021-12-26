const nevig = document.querySelector("nav");
const bars = document.querySelector(".bars");
const scrollU = document.querySelector(".scrollUp");
// navbar click
let menubars = false;
bars.addEventListener("click", () => {
  if (!menubars) {
    nevig.classList.add("open");
    menubars = true;
  } else {
    nevig.classList.remove("open");
    menubars = false;
  }
});
// window scroll
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 400) {
    scrollU.classList.add("scrollBtn");
  } else {
    scrollU.classList.remove("scrollBtn");
  }
});
