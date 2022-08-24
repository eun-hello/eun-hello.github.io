
/*--------------------------logout------------------------------------------- */

/* const logout = document.getElementById('logout')
logout.addEventListener('click', function () {
    localStorage.clear()
    storage.removeItem('user');
}); */
/*--------------------------HEADER MOBLIE------------------------------------------- */

const moblieBtn = document.querySelector('.moblieBtn')
const menu02 = document.querySelector('.m_menu02')
moblieBtn.addEventListener('click', function (e){
    e.preventDefault();
    if (menu02.className=='m_menu02') {
        document.querySelector('.m_menu02').classList.add('active')
        setTimeout(() => {
            document.getElementById('m_menu').classList.add('active')
        }, 100);
        setTimeout(() => {
            document.querySelector('.mobliemenu').classList.add('active')
            document.querySelector('.sidenikon').classList.add('active')
        }, 400);
    } else {
        setTimeout(() => {
            document.querySelector('.m_menu02').classList.remove('active')
        }, 400)
        document.getElementById('m_menu').classList.remove('active')
        document.querySelector('.mobliemenu').classList.remove('active')
        document.querySelector('.sidenikon').classList.remove('active')
    };
});
document.querySelector('.moblieblank').addEventListener('click', function() {
    setTimeout(() => {
        document.querySelector('.m_menu02').classList.remove('active')
    }, 400)
    document.getElementById('m_menu').classList.remove('active')
    document.querySelector('.mobliemenu').classList.remove('active')
    document.querySelector('.sidenikon').classList.remove('active')
})

window.addEventListener('wheel', function (e) {
    if (e.deltaY > 0) {
        menu02.classList.remove('active')
        document.getElementById('m_menu').classList.remove('active')
        document.querySelector('.mobliemenu').classList.remove('active')
        document.querySelector('.sidenikon').classList.remove('active')
    }
});

if(matchMedia("screen and (max-width: 800px)").matches){ 
    document.querySelector('.m_menu02').classList.remove('active')
    document.getElementById('m_menu').classList.remove('active')
    document.querySelector('.mobliemenu').classList.remove('active')
    document.querySelector('.sidenikon').classList.remove('active')
};

if(matchMedia("screen and (max-width: 850px)").matches){ 
    document.querySelector('.fot_vips').innerHTML = '<li class="fot_vips"><a href="../777.vips/index.html"><img src="./_img/_logo/vips_brand010.png" alt="vips"></a></li>'
} else {
    document.querySelector('.fot_vips').innerHTML = '<li class="fot_vips"><a href="../777.vips/index.html" target="_blank" title="VIPS"><div class="logoVIP letsgo"><img src="./_img/_logo/VIPS04.png" alt="1" class="vips01"></div></a></li>'
}

document.querySelector('.f_nikon').addEventListener('click', function () {
    location.href = './index.html'
});
document.querySelector('.sidenikon').addEventListener('click', function () {
    location.href = './index.html'
});

/* // TOP 버튼 
const top = document.getElementById('top')
if(matchMedia("screen and (max-width: 800px)").matches){
    top.addEventListener('click', function () {
        location.href = '#headermoblie'
    })
} else {
    top.addEventListener('click', function () {
        location.href = '#header'
    });
}

 */
