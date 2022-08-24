function ability() {
    const line = document.querySelectorAll('.abilityLine')
    for (var i=0; i<=line.length; i++) {
            line[i].classList.toggle('active');
    }       
}

function blink () {
    var goblink = document.querySelector('.adBtn')
    goblink.style.visibility = goblink.style.visibility == ""?"hidden":""
}
function startBlink () {
    if(document.all) {
    setInterval(blink, 300)
    }
}

window.onload = startBlink;

const roket = document.querySelector('.roket')
const puzzle = document.querySelector('.puzzle')
let glue = document.querySelector('.glue')

/*-----------------------hover-------------------------*/

roket.addEventListener('mouseover', function () {
    document.querySelector('.txttt01').classList.add('active')
});
// roket.addEventListener('mouseout', function () {
//     document.querySelector('.txttt01').classList.remove('active')
// });

puzzle.addEventListener('mouseover', function () {
    document.querySelector('.txttt02').classList.add('active')
});
// puzzle.addEventListener('mouseout', function () {
//     document.querySelector('.txttt02').classList.remove('active')
// });

glue.addEventListener('mouseover', function () {
    glue.src = "./_img/_icon/glue-2.png"
    document.querySelector('.txttt03').classList.add('active')
});
glue.addEventListener('mouseout', function () {
    glue.src = "./_img/_icon/glue-1.png"
    // document.querySelector('.txttt03').classList.remove('active')
});

/*-----------------------WINK--------------------------*/

const me = document.querySelector('.me')
setInterval (
    function () {
        if (me.src = './_img/_main/my-Design-2.png') {
            setTimeout(function () {me.src = './_img/_main/my-Design-3.png'}, 500)    
        } else if (me.src = './_img/_main/my-Design-3.png') {
            setTimeout(function () {me.src = './_img/_main/my-Design-2.png'}, 500) 
        }
    }, 1000)

if(matchMedia("screen and (max-width: 800px)").matches){
    ability().click()

    function moblieblank() {
        document.querySelector('.txttt01').classList.add('active')
        document.querySelector('.txttt02').classList.add('active')
        document.querySelector('.txttt03').classList.add('active')
    }
    setTimeout((e) => {
        moblieblank()
    }, 100)        
}