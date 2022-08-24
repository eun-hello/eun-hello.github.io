

let nav = document.getElementById('nav')
nav.addEventListener('mouseover', function () {
    nav.classList.add('active')
})
nav.addEventListener('mouseout', function () {
    nav.classList.remove('active')
})



/*(======================Scroll Menu====================================*/

/* $(function () {
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        console.log(scroll)
        if (scroll>150) {
            $('#logo').css({'height':'3.5vw','height':'3.5vw'}), $('#nav').css({'margin-top':'0'}), $('#navigator').css('height','3.5vw')
        } else {
            $('#logo').css({'height':'8vw','height':'8vw'}), $('#nav').css({'margin-top':'4.5vw'}), $('#navigator').css('height','8vw')
        }
    })
})

if(matchMedia("screen and (max-width: 1024px)").matches){ 
    $(function () {
        $(window).scroll(function () {
            let scroll = $(window).scrollTop();
            if (scroll>150) {
                $('#logo').css({'height':'4vw','height':'4vw'}), $('#nav').css({'margin-top':'0'}), $('#navigator').css('height','4vw')
            } else {
                $('#logo').css({'height':'8vw','height':'8vw'}), $('#nav').css({'margin-top':'4vw'}), $('#navigator').css('height','8vw')
            }
        })
    })
}

 */