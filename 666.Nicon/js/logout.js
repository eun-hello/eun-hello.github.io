
/*--------------------------logout------------------------------------------- */

window.addEventListener('load', (e) => {
    if(localStorage.getItem('user') == 'login') {
        const loginuser = document.getElementById('log')
        
        console.log('login')
        loginuser.innerHTML = '<a href="./user.html" id="user" class="color01"><i class="fa-solid fa-user"></i> USER</a>│<a href="#" id="logout"><i  class="fa-solid fa-lock-open "></i> 로그아웃</a>'
    
        const moblieuser = document.getElementById('moblieUser')
        const logmobot = document.getElementById('logmobot')
        moblieuser.innerHTML = '<a href="./user.html"><i class="fa-solid fa-user" id="user"></i></a>'
        logmobot.innerHTML = '<a href="#" id="logoutmobot">로그아웃</a>'
    }
    const logout = document.getElementById('logout')
    logout.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('logout')
        localStorage.removeItem('user')
        setTimeout((e) => {
            location.reload()
        }, 100)
    });
    const logoutmobot = document.getElementById('logoutmobot')
    logmobot.addEventListener('click', function (e) {
        e.preventDefault();
        localStorage.removeItem('user')
        setTimeout((e) => {
            location.reload()
        }, 100)
    })
}); 

