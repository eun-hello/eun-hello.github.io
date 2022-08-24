/*===================================head icon:hover======================= */

let ii = document.querySelector('.headiion01')

ii.addEventListener('mouseover', function () {
    ii.src = "./img/eshop/headerICON/h_util_login_on.png"
})
ii.addEventListener('mouseout', function () {
    ii.src = "./img/eshop/headerICON/h_util_login.png"
})
document.querySelector('.headiion02').addEventListener('mouseover', function() {
    document.querySelector('.headiion02').src="./img/eshop/headerICON/h_util_cart_on.png"
})
document.querySelector('.headiion02').addEventListener('mouseout', function() {
    document.querySelector('.headiion02').src="./img/eshop/headerICON/h_util_cart.png"
})
document.querySelector('.headiion03').addEventListener('mouseover', function() {
    document.querySelector('.headiion03').src="./img/eshop/headerICON/h_util_order_on.png"
})
document.querySelector('.headiion03').addEventListener('mouseout', function() {
    document.querySelector('.headiion03').src="./img/eshop/headerICON/h_util_order.png"
})
document.querySelector('.headiion04').addEventListener('mouseover', function() {
    document.querySelector('.headiion04').src="./img/eshop/headerICON/h_util_user_on.png"
})
document.querySelector('.headiion04').addEventListener('mouseout', function() {
    document.querySelector('.headiion04').src="./img/eshop/headerICON/h_util_user.png"
})

/*===========================Swip+++++++++++++++=======================+++++*/

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/* ==============================================Scroll================================= */
let menu = document.getElementById('navi') 
$(function () {
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        /* console.log(scroll) */
        if (scroll>150) {
            $('#navi').css({'background-color':'#333','color':'#fff','border':'none','height':'4vw'})
        } else {
            $('#navi').css({'background-color':'#fff','color':'#333','border-bottom':'1px solid rgb(225, 225, 225)' ,'height':'3vw'})
        }
    })
})

let cross = document.querySelector('.cross')
cross.addEventListener('click', function () {
    document.getElementById('topadv').style.display = 'none'
})

cross.addEventListener('mouseover', function () {
    cross.classList.add('active')
})
cross.addEventListener('mouseout', function () {
    cross.classList.remove('active')
})

/*&=\=============================bottom icon==================================*/

const free01 = document.querySelector('.free01')
const free02 = document.querySelector('.free02')
const free03 = document.querySelector('.free03')
const free04 = document.querySelector('.free04')
const free05 = document.querySelector('.free05')

free01.addEventListener('mouseover', function () {
    free01.src ="./img/eshop/icon/free-icon-font-calendar-on.jpg" 
})
free01.addEventListener('mouseout', function () {
    free01.src ="./img/eshop/icon/free-icon-font-calendar.png" 
})
free02.addEventListener('mouseover', function () {
    free02.src ="./img/eshop/icon/free-icon-font-rocket-on.jpg" 
})
free02.addEventListener('mouseout', function () {
    free02.src ="./img/eshop/icon/free-icon-font-rocket.png" 
})
free03.addEventListener('mouseover', function () {
    free03.src ="./img/eshop/icon/free-icon-font-ticket-on.jpg" 
})
free03.addEventListener('mouseout', function () {
    free03.src ="./img/eshop/icon/free-icon-font-ticket.png" 
})
free04.addEventListener('mouseover', function () {
    free04.src ="./img/eshop/icon/free-icon-font-shopping-on.jpg" 
})
free04.addEventListener('mouseout', function () {
    free04.src ="./img/eshop/icon/free-icon-font-shopping.png" 
})
free05.addEventListener('mouseover', function () {
    free05.src ="./img/eshop/icon/free-icon-font-phone-on.jpg" 
})
free05.addEventListener('mouseout', function () {
    free05.src ="./img/eshop/icon/free-icon-font-phone.png" 
})