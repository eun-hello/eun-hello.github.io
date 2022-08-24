const Btn01 = document.querySelector('.Btn01')
const Btn02 = document.querySelector('.Btn02')

const box01 = document.getElementById('maincontBox01')
const box02 = document.getElementById('maincontBox02')

window.addEventListener('load', function() {Btn01.classList.add('active')})
window.addEventListener('load', function() {box01.classList.add('active')})

Btn01.addEventListener('click', function() {
    Btn01.classList.add('active'), Btn02.classList.remove('active')
    box01.classList.add('active'), box02.classList.remove('active')
})
Btn02.addEventListener('click', function() {
    Btn02.classList.add('active'), Btn01.classList.remove('active')
    box02.classList.add('active'), box01.classList.remove('active')
})

/*======================TABLE============================================ */
var infobox = document.querySelector('.infoBox')

window.addEventListener('load', function () {
    table6.classList.toggle('active')
    document.querySelector('.infoBox06').classList.toggle('active')
})

function infoBtn01 () {
    const table1 = document.getElementById('table1')
    table1.classList.toggle('active')
    document.getElementById('pluse01').classList.toggle('active')
    document.querySelector('.infoBox01').classList.toggle('active')
}
function infoBtn02 () {
    const table2 = document.getElementById('table2')
    table2.classList.toggle('active')
    document.getElementById('pluse02').classList.toggle('active')
    document.querySelector('.infoBox02').classList.toggle('active')
}
function infoBtn03 () {
    const table3 = document.getElementById('table3')
    table3.classList.toggle('active')
    document.getElementById('pluse03').classList.toggle('active')
    document.querySelector('.infoBox03').classList.toggle('active')
}
function infoBtn04 () {
    const table4 = document.getElementById('table4')
    table4.classList.toggle('active')
    document.getElementById('pluse04').classList.toggle('active')
    document.querySelector('.infoBox04').classList.toggle('active')
}
function infoBtn05 () {
    const table5 = document.getElementById('table5')
    table5.classList.toggle('active')
    document.getElementById('pluse05').classList.toggle('active')
    document.querySelector('.infoBox05').classList.toggle('active')
}
function infoBtn06 () {
    const table6 = document.getElementById('table6')
    table6.classList.toggle('active')
    document.getElementById('pluse06').classList.toggle('active')
    document.querySelector('.infoBox06').classList.toggle('active')
}

function showPopup () {window.open('./guidePopup.html', 'popup01', 'width=1200px, height=900px, top=50, left=50');}
