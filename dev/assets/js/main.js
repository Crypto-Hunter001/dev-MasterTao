const swiper = new Swiper('#banner-swiper', {
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

const swiperAdvantages = new Swiper('#advantages', {
	// Optional parameters
	loop: true,
	simulateTouch: true,
	slidesPerView: 1,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		enabled: true,
	},

	breakpoints: {
		1025: {
			spaceBetween: 0,
			loop: false,
			slidesPerGroup: 8,
			simulateTouch: false,
			pagination: {
				el: '.swiper-pagination',
				enabled: false,
			},

		},
	}

});
