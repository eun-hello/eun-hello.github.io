
/*\===========================Header================================*/

$(function () {
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
/*         console.log(scroll) */
        if (scroll<200) {
            $('#header').css('background-color','#fff'), 
            $('.navbarcont01').css('background-color','#fff')
            $('.navbarcont02').css('background-color','#fff')
            $('.navbarcont03').css('background-color','#fff')
        } else {
            $('#header').css('background-color','rgb(254, 254, 254, 0.5)'), 
            document.getElementById('header').addEventListener('mouseover', function () {
                document.getElementById('header').style.backgroundColor = '#fff'
            })
            document.getElementById('header').addEventListener('mouseout', function () {
                document.getElementById('header').style.backgroundColor = 'rgb(254, 254, 254, 0.5)'
            })
        }
    })
}); 

/*================================section01================================*/ 

if(matchMedia("screen and (max-width: 800px)").matches){ 
    $(function () {
        $('.section01txt').css('padding-top','0vw')
    })
    console.log("mobile");
} else {
    $(function () {
        $(window).scroll(function () {
            let scroll = $(window).scrollTop();
            
            if (scroll>240) {
                $('.section01txt').css('padding-top','7vw')
            } else {
                $('.section01txt').css('padding-top','0')
            }
        })
    })
    console.log('window')
} 

/*==================================section02============================*/

if(matchMedia("screen and (max-width: 800px)").matches){
    $(function () {
        
        $('.shopsec01').css('margin-top','0vw')
        $('.shopsec02').css('margin-top','0vw')
    })
} else {
    $(function () {
        $(window).scroll(function () {
            let scroll = $(window).scrollTop();
            let scrolltop = $('.shopsec01').offset().top;
            let shopscroll = scroll+800
            
            if (shopscroll>=scrolltop) {
                $('.shopsec01').css('margin-top','0vw')
                $('.shopsec02').css('margin-top','0vw')
            }
        })
    })
} 

