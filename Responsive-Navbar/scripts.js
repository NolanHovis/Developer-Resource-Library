const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".list");

hamburger.addEventListener("click", function () {
  this.classList.toggle("active");

  menu.classList.toggle("expanded");
});
