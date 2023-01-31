const allLangs = ['ru', 'en'];
let currentLang = 'en';
const langButtons = document.querySelectorAll('[data-btn]');
const currentPathName = window.location.pathname;

const currentText = {
  nav_home: {
    ru: 'Главная',
    en: 'Home',
  },
  nav_products: {
    ru: 'Продукты',
    en: 'Products',
  },
  nav_about: {
    ru: 'О нас',
    en: 'About',
  },
  //   btn_more: {
  //     ru: 'Узнать больше',
  //     en: 'Learn more',
  //   },
  //   btn_watch: {
  //     ru: 'Смотреть видео',
  //     en: 'watch video',
  //   },
  furniture__title: {
    ru: 'Фурнитура',
    en: 'Furniture',
  },
  furniture__desc: {
    ru: 'В Wooden используются материалы, которые в противном случае остались бы позади, став бесполезными по своему первоначальному назначению. Создавая новые изделия из переработанного branwood',
    en: ' Wooder utilizes materials otherwise left behind, rendered useless in their original intent. By creating new pieces made of reclaimed barnwood',
  },
  decor__title: {
    ru: 'Декор',
    en: 'Decor',
  },
  decor__desc: {
    ru: 'Мы изготавливаем все виды деревянного декора в соответствии с дизайном, предоставленным архитектором, дизайнером интерьера, подрядчиком, который подходит вашему предпосылки.',
    en: 'We make all types of wooden decor as per design given by Architect,Interior designer, contractor which is suitable your premises.',
  },
  video__title: {
    ru: 'дерево это качество',
    en: 'wooder – is quality',
  },
  video__desc1: {
    ru: 'Мы создаем уникальный объекты дизайна из редкого сруба, специально под заказ.',
    en: 'We create unique design objects made of rare wood, specially under the order.',
  },
  video__desc2: {
    ru: 'Посмотрите короткое видео о нашей работе.',
    en: 'Look at the short video about our work.',
  },
  video__p1: {
    ru: 'Инновационный дизайн',
    en: 'Innovative Design',
  },
  video__p2: {
    ru: 'Удобство',
    en: 'High-level Skills',
  },
  video__p3: {
    ru: 'Качественная продукция',
    en: 'Quality Products',
  },
  back__title: {
    ru: 'Мы готовы к любой сложности',
    en: ' we Do the design of any complexity',
  },
  back__desc: {
    ru: 'Мы команда профессионалов, которые изготавливают мебель и изделия из дерева декор на высоком уровне. Создание современного дизайна. Придерживаясь глобального стандарты качества. И мы делаем работу с любовью.',
    en: 'This is a team of professionals that make the furniture and wood décor high standard. Creating modern designs. Adhering to the global quality standards. And we are doing work with love.',
  },
  about__title: {
    ru: 'О нас',
    en: 'about us',
  },
  about__desc: {
    ru: 'Мы - команда профессионалов в области обработки древесины и создания деревянной мебели высочайшего класса',
    en: 'We are a team of professionals in the wood processing and the creation of wooden furniture of the highest class',
  },
};

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
