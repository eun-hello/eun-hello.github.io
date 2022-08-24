/*-------------loading---------------------*/

const load = document.getElementById('loading')
const main = document.getElementById('main')

setTimeout(function() {
    load.style.display = 'none', main.style.display = 'block'
}, 2000)

window.addEventListener('wheel', (e) => {
    if(e.deltaY > 0) {
        document.getElementById('next').click();
    } else if(e.deltaY < 0){
        document.getElementById('prev').click();
    }
});


/*-----------------swip----------------------------*/

/* var swiper = new Swiper(".mySwiper", {
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
}); */



