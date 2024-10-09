const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    enabled: false,
  },

  breakpoints:{
    992: {
      navigation: {
        enabled: true,
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
      },
    },
  }




});
