let tab = function () {
    let tabNav = document.querySelectorAll('.tab'),
        tabContent = document.querySelectorAll('.tabs-content'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    })
    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active')
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContenet(tabName);
    }
    function selectTabContenet(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName)? item.classList.add('is-active'): item.classList.remove('is-active');
        })
    }
};
tab();

// Настройка Choices.js

const elements = document.querySelectorAll('.select');
elements.forEach(el => {
new Choices(el, {
  searchEnabled: false,
  position: 'bottom'
  });
});

// Иконка сердца меняет цвет

const heartColor = document.querySelector('.properties-wrapper');
heartColor.addEventListener('click', (event) => {
    event.target.classList.toggle('like--red')
});


// Скрипт слайдера

const swiper = new Swiper('.swiper', {
    spaceBetween: 17,
    loop: true,
    slidesPerView: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
        // when window width is >= 310px
        310: {
          slidesPerView: 1,

        },
        // when window width is >= 1060px
        1060: {
          slidesPerView: 2,
        },
       
      }
    
  });


// Мобильное меню 

const btn = document.querySelectorAll('.menu__btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const closeIcon = document.querySelector('.close__icon');

btn.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {
	if (e.target === modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});

closeIcon.addEventListener('click', (e) => {
	if (e.target === closeIcon) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});