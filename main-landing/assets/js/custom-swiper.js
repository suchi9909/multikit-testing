var sliderThree = new Swiper(".mySwiper", {
  slidesPerView: 7,
  spaceBetween: 36,
  loop: false,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 5,
    },

    1440: {
      slidesPerView: 6,
    },

    1640: {
      slidesPerView: 7,
    },
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  }
});

var sliderOne = new Swiper(".slider1", {
  slidesPerView: 7,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },

    576: {
      slidesPerView: 3,
    },

    991: {
      slidesPerView: 4,
    },

    1199: {
      slidesPerView: 5,
    },

    1440: {
      slidesPerView: 6,
    },

    1640: {
      slidesPerView: 7,
    },
  },
});