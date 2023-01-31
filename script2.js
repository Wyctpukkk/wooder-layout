const allLangs = ['ru', 'en'];
let currentLang = 'en';
const langButtons = document.querySelectorAll('[data-btn]');
const currentPathName = window.location.pathname;

const currentText = {};

function changeLang() {
  for (const key in currentText) {
    const elem = document.querySelector(`[data-lang=${key}]`);
    if (elem) {
      elem.textContent = currentText[key][currentLang];
    }
  }
}
changeLang();

langButtons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    currentLang = event.target.dataset.btn;
    isActive(langButtons);
    changeLang();
  });
});

function isActive(arr) {
  arr.forEach((el) => {
    el.classList.toggle('choosed');
  });
}
