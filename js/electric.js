/*-------------swiper------------------- */

var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    keyboard: {
        enabled: true,
    },
});

const color = ['#1D4167', '#333']
var car = document.querySelector('.electric')

/* setInterval(car.classList.toggle('active'), 2000) */

document.getElementById('.swipBtn2022').addEventListener('click', function (e) {
    
    e.preventDefault = false;
    e.stopPropagatio = false;
}) 

