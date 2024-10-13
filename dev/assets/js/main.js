const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  autoplay: true,
  speed: 500,
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

const typeFile = document.querySelectorAll('.custom-file')

typeFile.forEach(item => {
    item.addEventListener('change', () => {
        const fileName = item.closest('.input-box').querySelector('.file-name')
        fileName.innerHTML = item.files[0].name;
    })
})
