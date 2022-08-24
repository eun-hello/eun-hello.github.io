const Btn01 = document.querySelector('.Btn01')
const Btn02 = document.querySelector('.Btn02')
const Btn03 = document.querySelector('.Btn03')
const Btn04 = document.querySelector('.Btn04')

const box01 = document.getElementById('maincontBox01')
const box02 = document.getElementById('maincontBox02')
const box03 = document.getElementById('maincontBox03')
const box04 = document.getElementById('maincontBox04')

window.addEventListener('load', function() {Btn01.classList.add('active')})
window.addEventListener('load', function() {box01.classList.add('active')})

Btn01.addEventListener('click', function() {
    Btn01.classList.add('active'), Btn02.classList.remove('active'), Btn03.classList.remove('active'), Btn04.classList.remove('active') 
    box01.classList.add('active'), box02.classList.remove('active'), box03.classList.remove('active'), box04.classList.remove('active')
})
Btn02.addEventListener('click', function() {
    Btn02.classList.add('active'), Btn01.classList.remove('active'), Btn03.classList.remove('active'), Btn04.classList.remove('active')  
    box02.classList.add('active'), box01.classList.remove('active'), box03.classList.remove('active'), box04.classList.remove('active')
})
Btn03.addEventListener('click', function() {
    Btn03.classList.add('active'), Btn01.classList.remove('active'), Btn02.classList.remove('active'), Btn04.classList.remove('active')  
    box03.classList.add('active'), box01.classList.remove('active'), box02.classList.remove('active'), box04.classList.remove('active')
})
Btn04.addEventListener('click', function() {
    Btn04.classList.add('active'), Btn01.classList.remove('active'), Btn02.classList.remove('active'), Btn03.classList.remove('active') 
    box04.classList.add('active'), box01.classList.remove('active'), box02.classList.remove('active'), box03.classList.remove('active')
})
