const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 15,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});