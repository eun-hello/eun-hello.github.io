/*--------------------------logout------------------------------------------- */

window.addEventListener('load', (e) => {
    if(localStorage.getItem('user') == 'login') {
        const loginuser = document.getElementById('log')
        console.log('login')
        loginuser.innerHTML = '<a href="./user.html" id="user" class="color01"><i class="fa-solid fa-user"></i> USER</a>│<a href="#" id="logout"><i  class="fa-solid fa-lock-open "></i> 로그아웃</a>'
    }
    const logout = document.getElementById('logout')
    logout.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('logout')
        localStorage.removeItem('user')
        setTimeout((e) => {
            location.href = './index.html'
        }, 100)
    });
});

/*--------------------------header------------------------------------------- */

window.addEventListener('scroll', function () {
    const scroll = this.scrollY
    if(scroll<200) {
        document.getElementById('header').style.cssText = 'background-color : #fff'
        document.querySelector('.navbarcont01').style.cssText = 'background-color : #fff'
        document.querySelector('.navbarcont02').style.cssText = 'background-color : #fff'
        document.querySelector('.navbarcont03').style.cssText = 'background-color : #fff'
    } else {
        document.getElementById('header').style.cssText = 'background-color : rgb(254, 254, 254, 0.5)'
        document.getElementById('header').addEventListener('mouseover', function () {
            document.getElementById('header').style.backgroundColor = '#fff'
        })
        document.getElementById('header').addEventListener('mouseout', function () {
            document.getElementById('header').style.backgroundColor = 'rgb(254, 254, 254, 0.5)'
        })
    }
});
