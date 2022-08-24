
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,   
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

window.addEventListener('keydown', (e) => {
    if(e.keyCode==39) {
        document.getElementById('next').click();
    }
    if(e.keyCode==37) {
        document.getElementById('prev').click();
    }
});