/** Toggle button mobile */
const button = document.querySelector('.menu-mobile__button');
const mobileMenu = document.querySelector('.menu-mobile__list');

function toggleMenu() {
  mobileMenu.classList.toggle('activeList');
  button.classList.toggle('activeButton');
}

button.addEventListener('click', toggleMenu, false);
/** Toggle button mobile */

/** Initialize Swiper */
// Swiper Header
let swiperHeader = new Swiper('.header__swiper', {
  pagination: {
    el: '.swiper-pagination-header',
    type: 'progressbar',
  },
  grabCursor: true,
  slidesPreview: 'auto',
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Swiper links
let swiperLinks = new Swiper('.links__swiper', {
  grabCursor: true,
  breakpoints: {
    540: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 6,
    },
    1500: {
      slidesPerView: 8,
    },
  },
});

// Swiper News
let swiperNews = new Swiper('.news__swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  grabCursor: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination-news',
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 84,
    },
  },
});

// Swiper Saving
let swiperSaving = new Swiper('.saving__swiper', {
  pagination: {
    el: '.swiper-pagination-saving',
  },
  spaceBetween: 84,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

// Swiper Items
let swiperItems = new Swiper('.other-services__items-swiper', {
  spaceBetween: 24,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
/** Initialize Swiper */
