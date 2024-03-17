// Initialize Swiper
var swiperScreenshots = new Swiper('.swiper-screenshots', {
      slidesPerView: 1,
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1200: {
          slidesPerView: 3,
        }
      }
});