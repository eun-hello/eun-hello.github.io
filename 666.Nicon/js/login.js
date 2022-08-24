/*=============LOG-IN=++++++++++++++++++======= */

document.querySelector('.forgot').addEventListener('mouseover', function () {
    document.querySelector('.forgot').classList.add('active')
});
document.querySelector('.forgot').addEventListener('mouseout', function () {
    document.querySelector('.forgot').classList.remove('active')
});
document.querySelector('.sign').addEventListener('mouseover', function () {
    document.querySelector('.sign').classList.add('active')
});
document.querySelector('.sign').addEventListener('mouseout', function () {
    document.querySelector('.sign').classList.remove('active')
});

/*=============LOG-IN= Btn++++++++++++++++++======= */
/* localStorage.setItem('mail', 'nikon')
localStorage.setItem('password', '1234') */

const logBtn = document.querySelector('.logBtn')
const txtmail = document.querySelector('.txtmail')
const txtpass = document.querySelector('.txtpassword')

window.addEventListener('keydown', (e) => {
    if(e.keyCode == '13') {
        logBtn.click()
    }
})

function printmail()  {
    const mail = document.getElementById('mail').value;
    txtmail.innerHTML = mail
};
function printpassword()  {
    const password = document.getElementById('password').value;
    txtpass.innerHTML = password
};


logBtn.addEventListener('click', function () {
    if (txtmail.innerHTML == 'nikon', txtpass.innerHTML == '1234') {
        setTimeout((e) => {
            document.getElementById('loading').classList.add('active')
        }, 100)
        setTimeout((e) => {
            location.href = './index.html'
        }, 800)

        localStorage.setItem('user','login')
        let userid = localStorage.getItem('user')
        console.log(userid)

        function remember(obj) {
            console.log(obj.value)
        }

    } else {
        window.Swal.fire({
            icon: 'warning',
            title: 'ID : nikon \nPW : 1234',
            text: 'Try This!',
            allowEnterKey: false,
            allowOutsideClick: true,
            allowEscapeKey: true,
            confirmButtonText: 'CLICK',
            footer: 'Please Try Again'
            })
    }
});

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

if(matchMedia("screen and (max-width: 401px)").matches){ 
    document.querySelector('.helloEmail').innerHTML = '<li class="helloEmail"><div>Email</div><input id="mail" type="text" placeholder="email" onkeyup="printmail()"></li>'
} 
if(matchMedia("screen and (max-width: 400px)").matches){ 
    document.querySelector('.helloEmail').innerHTML = '<li class="helloEmail"><div>Email Address</div><input id="mail" type="text" placeholder="email" onkeyup="printmail()"></li>'
} 
