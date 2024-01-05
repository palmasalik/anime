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

function searchAnime() {
  var searchText = document.getElementById('searchInput').value.toLowerCase();
  var animeTitles = document.querySelectorAll('#animeList h3');

  animeTitles.forEach(function (title) {
      var animeTitleText = title.textContent.toLowerCase();
      var parentElement = title.parentElement;

      if (animeTitleText.includes(searchText)) {
          parentElement.style.display = 'flex';
          parentElement.parentElement.style.filter = 'none'; // Снимаем фильтр у родителя элемента
          // Плавная прокрутка к найденному элементу с центрированием по вертикали
          parentElement.parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
          parentElement.style.display = 'none';
          parentElement.parentElement.style.filter = 'grayscale(100%)'; // Применяем фильтр к родителю элемента
      }
  });
}

document.getElementById('searchInput').addEventListener('input', searchAnime);