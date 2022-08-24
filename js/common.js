const head = document.getElementById('header')
window.addEventListener('scroll', function() {
    let scroll = this.scrollY
    console.log(scroll)
    if(scroll>10) {
        head.classList.add('active')
    } else {
        head.classList.remove('active')
    }
});
head.addEventListener('mouseover', function() {
    head.classList.add('active')
});
head.addEventListener('mouseout', function() {
    head.classList.remove('active')
})

const fotLogo = document.getElementById('footerlogo')

/*----------------- moblie menu -----------------------*/

const subBtn = document.querySelector('.subm')

subBtn.addEventListener('click', function () {
    document.getElementById('moblie_nav').classList.toggle('active')
    document.getElementById('head_m').classList.toggle('active')
    setTimeout((e) => {
        document.querySelector('.moblie_menu').classList.toggle('active')
    }, 100)
})
document.querySelector('.moblie_click').addEventListener('click', function () {
    document.getElementById('moblie_nav').classList.remove('active')
    document.getElementById('head_m').classList.remove('active')
    document.querySelector('.moblie_menu').classList.remove('active')
});


/* document.querySelector('.search').addEventListener('click', function (e) {
    e.preventDefault();
    fotLogo.classList.toggle('active')

    document.querySelector('.help01').classList.remove('active')
    document.querySelector('.help02').classList.remove('active')
    document.querySelector('.help03').classList.remove('active')

    setTimeout(function () {fotLogo.classList.remove('active')}, 3000)
});

const help01 = document.querySelector('.help01')
const help02 = document.querySelector('.help02')
const help03 = document.querySelector('.help03')

document.querySelector('.tag').addEventListener('click', function (e) {
    e.preventDefault();
    help01.classList.toggle('active')
    help02.classList.remove('active')
    help03.classList.remove('active')

    fotLogo.classList.remove('active')

    console.log(help01.className)
    if(help01.className==='help01 active'){
        setTimeout(function () {help01.classList.remove('active')}, 3000)
    };
});

document.querySelector('.phone').addEventListener('click', function (e) {
    e.preventDefault();
    help02.classList.toggle('active')
    help01.classList.remove('active')
    help03.classList.remove('active')

    fotLogo.classList.remove('active')

    if(help02.className==='help02 active'){
        setTimeout(function () {help02.classList.remove('active')}, 3000)
    };
});
document.querySelector('.home').addEventListener('click', function (e) {
    e.preventDefault();
    help03.classList.toggle('active')
    help01.classList.remove('active')
    help02.classList.remove('active')

    fotLogo.classList.remove('active')
    
    if(help03.className==='help03 active'){
        setTimeout(function () {help03.classList.remove('active')}, 3000)
    };
}); */


/*----------------- moblie menu -----------------------*/

/* const subBtn = document.querySelector('.sub_m')

subBtn.addEventListener('click', function () {
    document.getElementById('moblie_nav').classList.add('active')
    setTimeout((e) => {
        document.querySelector('.moblie_menu').classList.add('active')
    }, 100)
}) */