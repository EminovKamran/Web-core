const width = 768;
let mySwiper = undefined;
const pagination = document.querySelector('.swiper-pagination');
const buttonViewSlider = document.querySelector('.button-view');
const swiperSlide = document.querySelector('.swiper');
const buttonViewText = document.querySelector('.button-view__text')


buttonViewSlider.addEventListener('click', viewSlider);

function mobileSlider() {
    if (window.innerWidth < width && mySwiper === undefined) {
        mySwiper = new Swiper('.swiper', {
               direction: 'horizontal',
                slidesPerView: 'auto',
                spaceBetween: 15,
                watchOverflow: true,
               loop: true,
               pagination: {
                   el: '.swiper-pagination',
                   clickable: true,
               },
           });
    } else if (window.innerWidth >= width && mySwiper !== undefined) {
        mySwiper.destroy();
        mySwiper = undefined;
    }
}
mobileSlider();
window.addEventListener("resize", mobileSlider);

function viewSlider() {
        if (swiperSlide.classList.contains('active')) {
            swiperSlide.classList.remove('active');
            buttonViewText.textContent = 'Показать всё';
        } else {
            swiperSlide.classList.add('active')
            buttonViewText.textContent = 'Скрыть';
        }
}



