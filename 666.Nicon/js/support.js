
/*---------------------header------------------------------- */

const navi = document.getElementById('navi')

navi.addEventListener('mouseover', function () {
    navi.style.height = '12vw'
});
navi.addEventListener('mouseout', function () {
    navi.style.height = '2.5vw'
});

const menu = document.querySelectorAll('.menu')
document.querySelector('.naviBox').addEventListener('mouseover', function () {
    document.querySelector('.naviBox').classList.add('active')
})
document.querySelector('.naviBox').addEventListener('mouseout', function () {
    document.querySelector('.naviBox').classList.remove('active')
})
for(i=0; i < menu.length; i++) {
    menu[i].querySelector('.menulist').addEventListener('mouseover', function () {
        this.parentNode.classList.add('active')
    })
    menu[i].querySelector('.menulist').addEventListener('mouseout', function () {
        this.parentNode.classList.remove('active')
    })
};
for(j=0; j < menu.length; j++) {
    menu[j].querySelector('.hellolist').addEventListener('mouseover', function () {
        this.parentNode.classList.add('active')
    })
    menu[j].querySelector('.hellolist').addEventListener('mouseout', function () {
        this.parentNode.classList.remove('active')
    })
};

document.querySelector('.scroll_logo').addEventListener('click', function () {
    location.href = './index.html'
})

document.querySelector('.sideBtn').addEventListener('mouseover', function () {
    document.querySelector('.hamBtn').className ='fa-solid fa-unlock-keyhole hamBtn'
});
document.querySelector('.sideBtn').addEventListener('mouseout', function () {
    document.querySelector('.hamBtn').className ='fa-solid fa-circle-plus hamBtn'
});

/*----------------------------SCROll-------------------------------------*/

window.addEventListener('scroll', function () {
    let scroll = window.scrollY
    const scrollnavi = document.getElementById('scrollnavi')
    const scrollhead = document.querySelector('.scrollhead')
    const naviin = document.querySelector('.s_naviin')
/*     console.log(scroll) */
    if(scroll > 230) {
        scrollnavi.classList.add('active')
        setTimeout(() => {
            scrollhead.classList.add('active')
        }, 100)
        window.addEventListener('wheel', function (e) {
            if (e.deltaY > 0) {
                naviin.classList.remove('active')
            } else {
                naviin.classList.add('active')
            }
        });
    } else {
        scrollhead.classList.remove('active')
        scrollnavi.classList.remove('active')
        window.addEventListener('wheel', function (e) {
            naviin.classList.remove('active')
        })
    }
    if (matchMedia("screen and (max-width : 800px)").matches) { 
        scrollnavi.classList.remove('active')
        naviin.classList.remove('active')
    }
});

/*--------------------------SIDE MENU____________________________*/

const sidemenu = document.querySelector('.sidemenu')
const sidelist = document.querySelector('.sidelist_menu')

document.querySelector('.sideBtn').addEventListener('click', function (e) {
    e.preventDefault()
    sidemenu.classList.add('active')
    console.log(sidemenu.className)
    if(sidemenu.className=='sidemenu active') {
        setTimeout(() => {
            sidelist.classList.add('active')
        }, 100)
    } 
});
document.querySelector('.sideclick').addEventListener('click', function (e) {
    e.preventDefault()
    sidelist.classList.remove('active')
    setTimeout(() => {
        sidemenu.classList.remove('active')
    }, 400)
});



/*-------------------------------table----------------------------------------- */

const tab = document.querySelectorAll('.btn01, .btn02, .btn03')
const list = document.querySelectorAll('.list')

window.addEventListener('load', function () {
    document.querySelector('.list01').classList.add('active')
    document.querySelector('.btn01').classList.add('active')
    }); 

for (var i=0; i<tab.length; i++) {
    tab[i].querySelector('.icon').addEventListener('click', function (e) {
        e.preventDefault();
        for(j=0; j<tab.length; j++) {
            tab[j].classList.remove('active')
        };
        this.parentNode.classList.add('active')

        for (w=0; w<list.length; w++) {
            list[w].classList.remove('active')
        };

        for(k=0; k<4; k++) {
            if(document.querySelector(`.btn0${k}.active`)) {
                document.querySelector(`.list0${k}`).classList.add('active')
            } 
        };
    });
};

const s20Btn = document.querySelectorAll('.s02Btn')
for(i=0; i < s20Btn.length; i++) {
    console.log(s20Btn[i])
    s20Btn[i].querySelector('.s02Bhover').addEventListener('mouseover', function () {
        for(j=0; j<s20Btn.length; j++) {
            s20Btn[j].classList.remove('active')
        }
        this.parentNode.classList.add('active')
    })
    s20Btn[i].querySelector('.s02Bhover').addEventListener('mouseout', function () {
        this.parentNode.classList.remove('active')
    })
}

document.querySelector('.s04ho').addEventListener('mouseover', function() {
    document.querySelector('.s04ho').classList.add('active')
})
document.querySelector('.s04ho').addEventListener('mouseout', function() {
    document.querySelector('.s04ho').classList.remove('active')
})

/*------------------------section04---------------------------*/

const eshoptxt = document.querySelectorAll('.eshopitem')
if (matchMedia("screen and (max-width : 800px)").matches) {
    for(i=0; i<eshoptxt.length; i++) {
        eshoptxt[i].querySelector('.eeimg').addEventListener('click', function() {
            location.href = './Eshop.html'
        })
    }
} 

document.querySelector('.s07title').addEventListener('mouseover', function () {
    document.querySelector('.s07title').style.color = '#fee600'
});
document.querySelector('.s07title').addEventListener('mouseout', function () {
    document.querySelector('.s07title').style.color = '#333333'
});

document.querySelector('.s04hello1').addEventListener('click', function () {
    location.href = './Eshop.html'
});
document.querySelector('.s04hello1').addEventListener('mouseover', function () {
    document.querySelector('.s04hello1').style.cssText = 'cursor: pointer;'
});

/*------------------------section05---------------------------*/

if (matchMedia("screen and (max-width : 486px)").matches) {
    const s05txt = document.querySelectorAll('.s05realmelist p br')
    for (i=0; i<s05txt.length; i++) {
        s05txt[i].remove()
    }
};

/*------------------------section07---------------------------*/

const boticon = document.querySelectorAll('.boticonlistA')
const boticonB = document.querySelectorAll('.boticonlistB')
for (i=0; i<boticon.length; i++) {
    boticon[i].querySelector('.boticonlistB').addEventListener('mouseover', function () {
        for (j=0; j<boticonB.length; j++) {
            boticon[j].classList.remove('active')
        }
        this.classList.add('active')
    })
    boticon[i].querySelector('.boticonlistB').addEventListener('mouseout', function () {
        this.classList.remove('active')
    })
}


