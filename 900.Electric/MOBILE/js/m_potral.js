const menu = document.querySelector('.menu')
menu.addEventListener('click', function() {
    document.getElementById('sidemenu').classList.toggle('active')
})


let fotbtn = document.querySelector('.sidebtn04')
fotbtn.addEventListener('click', function () {
    document.querySelector('.sidebtn01').classList.toggle('active')
    document.querySelector('.sidebtn02').classList.toggle('active')
    document.querySelector('.sidebtn03').classList.toggle('active')
    document.getElementById('foticon01').classList.toggle('active')
    document.getElementById('foticon02').classList.toggle('active')
})

const bot01 = document.querySelector('.bot01')
const bot02 = document.querySelector('.bot02')
const bot03 = document.querySelector('.bot03')
const botbox01 = document.getElementById('buttonbox01')
const botbox02 = document.getElementById('buttonbox02')
const botbox03 = document.getElementById('buttonbox03')

window.addEventListener('load', function() {bot01.classList.add('active'), botbox01.classList.add('active')})

bot01.addEventListener('click', function() {
    bot01.classList.add('active'), bot02.classList.remove('active'), bot03.classList.remove('active')
    botbox01.classList.add('active'), botbox02.classList.remove('active'), botbox03.classList.remove('active')
})
bot02.addEventListener('click', function() {
    bot02.classList.add('active'), bot01.classList.remove('active'), bot03.classList.remove('active') 
    botbox02.classList.add('active'), botbox01.classList.remove('active'), botbox03.classList.remove('active')
})
bot03.addEventListener('click', function() {
    bot03.classList.add('active'), bot02.classList.remove('active'), bot01.classList.remove('active') 
    botbox03.classList.add('active'), botbox02.classList.remove('active'), botbox01.classList.remove('active')
})