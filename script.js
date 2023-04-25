const width = 768;
let mySwiper = undefined;
const showButton = document.querySelector('.show-button');
const showButtonText = document.querySelector('.show-button__text');
const cards = document.querySelector('.brands-container');


showButton.addEventListener('click', viewSlider);

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
        if (cards.classList.contains('active')) {
            cards.classList.remove('active');
            showButtonText.textContent = 'Показать всё';
        } else {
            cards.classList.add('active')
            showButtonText.textContent = 'Скрыть';
        }
}



