const swiper = new Swiper('#banner-swiper', {
  // Optional parameters
  loop: true,
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

  breakpoints: {
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

const andvantageSlide = document.querySelectorAll('.advantages .swiper-slide').length

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
  990: {
      spaceBetween: 0,
      loop: false,
      slidesPerGroup: andvantageSlide,
      simulateTouch: false,
      pagination: {
        el: '.swiper-pagination',
        enabled: false,
      },

    },
  }










});

// const swiperSlideTemplate = new Swiper('.swiper-template', {
// 	// Optional parameters
// 	loop: true,
// 	simulateTouch: true,
// 	speed: 400,
// 	slidesPerView: 1,
// 	clickable: true,

// 	navigation: {
// 		enabled: false,
// 		nextEl: '.swiper-button-next-unique',
// 		prevEl: '.swiper-button-prev-unique',
// 	},

// 	pagination: {
// 		el: '.swiper-pagination',
// 		enabled: true,
// 		clickable: true,
// 	},

// 	// Navigation arrows


// 	breakpoints: {

// 		767: {
// 			navigation: {
// 				enabled: true,
// 				nextEl: '.swiper-button-next-unique',
// 				prevEl: '.swiper-button-prev-unique',

// 			},

// 			pagination: {
// 				el: '.swiper-pagination',
// 				enabled: false,
// 			},
// 		},


// 		861: {
// 			slidesPerView: 2,
// 			spaceBetween: 30,

// 			navigation: {
// 				enabled: true,
// 				nextEl: '.swiper-button-next-unique',
// 				prevEl: '.swiper-button-prev-unique',

// 			},

// 			pagination: {
// 				el: '.swiper-pagination',
// 				enabled: false,
// 			},



// 		},


// 		1210: {
// 			slidesPerView: 3,
// 			spaceBetween: 30,

// 			navigation: {
// 				enabled: true,
// 				nextEl: '.swiper-button-next-unique',
// 				prevEl: '.swiper-button-prev-unique',
// 			},

// 			pagination: {
// 				el: '.swiper-pagination',
// 				enabled: false,
// 			},


// 		},
// 	}





// });


const swiperTemplate = document.querySelectorAll('.swiper-template')
const sliderTemplatePrevArrow = document.querySelectorAll('.swiper-button-prev-unique')
const sliderTemplateNextArrow = document.querySelectorAll('.swiper-button-next-unique')



sliderTemplatePrevArrow.forEach((arrow, index) => {
    arrow.classList.add('swiper-button-prev-unique-' + index)
})

sliderTemplateNextArrow.forEach((arrow, index) => {
    arrow.classList.add('swiper-button-next-unique-' + index)
})

swiperTemplate.forEach((item, index) => {
    
  new Swiper(item, {

	// Optional parameters
	loop: true,
	speed: 400,
	slidesPerView: 1,

    	pagination: {
		el: '.swiper-pagination',
		enabled: true,
		clickable: true,
	},


	navigation: {
		enabled: false,
		nextEl: '.swiper-button-next-unique-' + index,
		prevEl: '.swiper-button-prev-unique-' + index,
	},



	breakpoints: {

		767: {
            slidesPerView: 1,

			navigation: {
				enabled: true,
				nextEl: '.swiper-button-next-unique-' + index,
				prevEl: '.swiper-button-prev-unique-' + index,

			},
		},
		861: {
			slidesPerView: 2,
			spaceBetween: 30,

			navigation: {
				enabled: true,
				nextEl: '.swiper-button-next-unique-' + index,
				prevEl: '.swiper-button-prev-unique-' + index,

			},
			pagination: {
				enabled: false,
			},
		},
		1210: {
			slidesPerView: 3,
			spaceBetween: 30,
			navigation: {
				enabled: true,
				nextEl: '.swiper-button-next-unique-' + index,
				prevEl: '.swiper-button-prev-unique-' + index,
			},

			pagination: {
				enabled: false,
			},


		},
	}
});
})



