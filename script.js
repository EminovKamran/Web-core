let width = 768;
let mySwiper = undefined;
let pagination = document.querySelector('.swiper-pagination');

function mobileSlider() {
    if (window.innerWidth < width && mySwiper === undefined) {
        mySwiper = new Swiper('.swiper', {
               direction: 'horizontal',
                slidesPerView: 'auto',
               spaceBetween: 15,
               loop: true,
               pagination: {
                   el: '.swiper-pagination',
                   clickable: true,
               },
           });
        pagination.style.position = 'static';
    } else if (window.innerWidth > width && mySwiper !== undefined) {
        mySwiper.destroy();
        mySwiper = undefined;
        pagination.style.position = 'absolute';
    }
}
mobileSlider()
window.addEventListener("resize", mobileSlider)


