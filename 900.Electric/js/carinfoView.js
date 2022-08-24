const Btn01 = document.querySelector('.Btn01')
const Btn02 = document.querySelector('.Btn02')
const Btn03 = document.querySelector('.Btn03')
const Btn04 = document.querySelector('.Btn04')
const Btn05 = document.querySelector('.Btn05')

const box01 = document.getElementById('maincontBox01')
const box02 = document.getElementById('maincontBox02')
const box03 = document.getElementById('maincontBox03')
const box04 = document.getElementById('maincontBox04')
const box05 = document.getElementById('maincontBox05')

window.addEventListener('load', function() {Btn01.classList.add('active')})
window.addEventListener('load', function() {box01.classList.add('active')})

Btn01.addEventListener('click', function() {
    Btn01.classList.add('active'), Btn02.classList.remove('active'), Btn03.classList.remove('active'), Btn04.classList.remove('active'), Btn05.classList.remove('active')  
    box01.classList.add('active'), box02.classList.remove('active'), box03.classList.remove('active'), box04.classList.remove('active'), box05.classList.remove('active')
})
Btn02.addEventListener('click', function() {
    Btn02.classList.add('active'), Btn01.classList.remove('active'), Btn03.classList.remove('active'), Btn04.classList.remove('active'), Btn05.classList.remove('active')  
    box02.classList.add('active'), box01.classList.remove('active'), box03.classList.remove('active'), box04.classList.remove('active'), box05.classList.remove('active')
})
Btn03.addEventListener('click', function() {
    Btn03.classList.add('active'), Btn01.classList.remove('active'), Btn02.classList.remove('active'), Btn04.classList.remove('active'), Btn05.classList.remove('active')  
    box03.classList.add('active'), box01.classList.remove('active'), box02.classList.remove('active'), box04.classList.remove('active'), box05.classList.remove('active')
})
Btn04.addEventListener('click', function() {
    Btn04.classList.add('active'), Btn01.classList.remove('active'), Btn02.classList.remove('active'), Btn03.classList.remove('active'), Btn05.classList.remove('active') 
    box04.classList.add('active'), box01.classList.remove('active'), box02.classList.remove('active'), box03.classList.remove('active'), box05.classList.remove('active')
})
Btn05.addEventListener('click', function() {
    Btn05.classList.add('active'), Btn01.classList.remove('active'), Btn02.classList.remove('active'), Btn03.classList.remove('active'), Btn04.classList.remove('active') 
    box05.classList.add('active'), box01.classList.remove('active'), box02.classList.remove('active'), box03.classList.remove('active'), box04.classList.remove('active')
})

/* ======================select box data===========================================================================*/

/* function getOptionList()  {
    // datalist의 option 목록 가져오기
    const options = document.getElementById('fruitslist').options;
    
    // 각각의 option에서 value, label 가져오기
    const optionsValue = [];
    const optionsLabel = [];
    for(let i = 0; i < options.length; i++) {
      const option = options[i];
      optionsValue.push(option.value);
      optionsLabel.push(option.label);
    }
    
    // datalist 목록 출력
    document.getElementById('valuelist').innerText = optionsValue;
    document.getElementById('labellist').innerText = optionsLabel;
}
*/
window.addEventListener('load', function () {
    document.querySelector('.A00R').classList.add('active')
});
var box = document.querySelectorAll('.RR')
const Btn = document.getElementById('Btn')

function evlist(obj) {
    var abc = document.querySelector(`.A`+obj.value)
    console.log(abc)
    for (var j=0; j<abc.length; j++) {
        abc[j].classList.remove('active')
    }
    Btn.addEventListener('click', function () {
        for (var i=0; i<box.length; i++) {
            if (box[i]==abc) {
            box[i].classList.add('active')
            } else {
            box[i].classList.remove('active')
            }
        }
    });
}
/*====================================EV6================================*/

const ev6tab = document.querySelector('.ev6tab')
const ev6txt = document.querySelector('.ev6txt')

for (i=1; i<=6; i++) {
    document.querySelector(`.ev6tab${i}`).addEventListener('click', function () {
        document.querySelector(`.ev6cont${i}`).add('active')
    });
}

window.addEventListener('load', function() {document.querySelector('.ev6cont1').classList.add('active')})

function evtab1 () {
    document.querySelector('.ev6cont1').classList.add('active')
    document.querySelector('.ev6cont2').classList.remove('active')
    document.querySelector('.ev6cont3').classList.remove('active')
    document.querySelector('.ev6cont4').classList.remove('active')
    document.querySelector('.ev6cont5').classList.remove('active')
    document.querySelector('.ev6cont6').classList.remove('active')
}
function evtab2 () {
    document.querySelector('.ev6cont2').classList.add('active')
    document.querySelector('.ev6cont1').classList.remove('active')
    document.querySelector('.ev6cont3').classList.remove('active')
    document.querySelector('.ev6cont4').classList.remove('active')
    document.querySelector('.ev6cont5').classList.remove('active')
    document.querySelector('.ev6cont6').classList.remove('active')
}
function evtab3 () {
    document.querySelector('.ev6cont3').classList.add('active')
    document.querySelector('.ev6cont1').classList.remove('active')
    document.querySelector('.ev6cont2').classList.remove('active')
    document.querySelector('.ev6cont4').classList.remove('active')
    document.querySelector('.ev6cont5').classList.remove('active')
    document.querySelector('.ev6cont6').classList.remove('active')
}
function evtab4 () {
    document.querySelector('.ev6cont4').classList.add('active')
    document.querySelector('.ev6cont1').classList.remove('active')
    document.querySelector('.ev6cont2').classList.remove('active')
    document.querySelector('.ev6cont3').classList.remove('active')
    document.querySelector('.ev6cont5').classList.remove('active')
    document.querySelector('.ev6cont6').classList.remove('active')
}
function evtab5 () {
    document.querySelector('.ev6cont5').classList.add('active')
    document.querySelector('.ev6cont1').classList.remove('active')
    document.querySelector('.ev6cont2').classList.remove('active')
    document.querySelector('.ev6cont3').classList.remove('active')
    document.querySelector('.ev6cont4').classList.remove('active')
    document.querySelector('.ev6cont6').classList.remove('active')
}
function evtab6 () {
    document.querySelector('.ev6cont6').classList.add('active')
    document.querySelector('.ev6cont1').classList.remove('active')
    document.querySelector('.ev6cont2').classList.remove('active')
    document.querySelector('.ev6cont3').classList.remove('active')
    document.querySelector('.ev6cont4').classList.remove('active')
    document.querySelector('.ev6cont5').classList.remove('active')
}


window.addEventListener('load', function() {document.querySelector('.nirocont1').classList.add('active')})

function niro1 () {
    document.querySelector('.nirocont1').classList.add('active')
    document.querySelector('.nirocont2').classList.remove('active')
    document.querySelector('.nirocont3').classList.remove('active')
}
function niro2 () {
    document.querySelector('.nirocont2').classList.add('active')
    document.querySelector('.nirocont1').classList.remove('active')
    document.querySelector('.nirocont3').classList.remove('active')
}
function niro3 () {
    document.querySelector('.nirocont3').classList.add('active')
    document.querySelector('.nirocont1').classList.remove('active')
    document.querySelector('.nirocont2').classList.remove('active')
}
