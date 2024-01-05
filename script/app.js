const navBtn = document.querySelector(".nav_btn");
const navList = document.querySelector(".list");
const bg = document.querySelector(".nav_bg");
const body = document.querySelector("body");

navBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
  navBtn.classList.toggle("active");
  bg.classList.toggle("active");
  body.classList.toggle("active");
});

bg.addEventListener("click", () => {
  bg.classList.remove("active");
  navList.classList.remove("active");
  navBtn.classList.remove("active");
  body.classList.remove("active");
});
