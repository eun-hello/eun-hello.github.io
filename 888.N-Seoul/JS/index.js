/*-----------------swiper------------------ */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    grabCursor: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true
}
});

window.addEventListener('scroll', function () {
let scrollY = window.scrollY;
console.log(scrollY)
});

/*-----------------section04------------------------- */

document.querySelector('.s04imgBox01').addEventListener('mouseover', function () {
    document.querySelector('.s04imgBox01').src = './IMG/main/notice01_hover.jpg'
});
document.querySelector('.s04imgBox02').addEventListener('mouseover', function () {
    document.querySelector('.s04imgBox02').src = './IMG/main/notice02_hover.jpg'
});
document.querySelector('.s04imgBox03').addEventListener('mouseover', function () {
    document.querySelector('.s04imgBox03').src = './IMG/main/notice03_hover.jpg'
});
document.querySelector('.s04imgBox04').addEventListener('mouseover', function () {
    document.querySelector('.s04imgBox04').src = './IMG/main/notice04_hover.jpg'
});

document.querySelector('.s04imgBox01').addEventListener('mouseout', function () {
    document.querySelector('.s04imgBox01').src = './IMG/main/notice01.jpg'
});
document.querySelector('.s04imgBox02').addEventListener('mouseout', function () {
    document.querySelector('.s04imgBox02').src = './IMG/main/notice02.jpg'
});
document.querySelector('.s04imgBox03').addEventListener('mouseout', function () {
    document.querySelector('.s04imgBox03').src = './IMG/main/notice03.jpg'
});
document.querySelector('.s04imgBox04').addEventListener('mouseout', function () {
    document.querySelector('.s04imgBox04').src = './IMG/main/notice04.jpg'
});