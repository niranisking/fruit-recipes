document.querySelector(".nav-btn").addEventListener("click", showNav);

function showNav() {
  document.querySelector(".nav-links").classList.toggle("show-links");
}

const date = getElement("#date");
const currentYear = new Date().getFullYear();
date.textContent = currentYear;
