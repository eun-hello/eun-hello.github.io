let infoList = document.querySelectorAll('.infonav .infoList')

const subList = document.querySelectorAll('.subList')

/* for (var i=0; i<=subList.length; i++){
    console.log(subList)
    subList[i].querySelector('.subList').addEventListener('click', function (e) {
        e.preventDefault
        
        const subBox = document.querySelectorAll('.subBox')
        for (var j=0; j<=subBox.length; j++) {
            console.log(subBox)
            subBox[j]+'R'.classList.add('active')
            subBox[j].classList.remove('active')
        }

    })

} */

window.addEventListener('load', function () {
    document.querySelector('.subList01R').classList.add('active')
    document.querySelector('.subList01').classList.add('active')
});

document.querySelector('.subList01').addEventListener('click', function () {
    document.querySelector('.subList01R').classList.add('active')
    document.querySelector('.subList02R').classList.remove('active')
    document.querySelector('.subList03R').classList.remove('active')
    document.querySelector('.subList04R').classList.remove('active')

    document.querySelector('.subList01').classList.add('active')
    document.querySelector('.subList02').classList.remove('active')
    document.querySelector('.subList03').classList.remove('active')
    document.querySelector('.subList04').classList.remove('active')
});
document.querySelector('.subList02').addEventListener('click', function () {
    document.querySelector('.subList02R').classList.add('active')
    document.querySelector('.subList01R').classList.remove('active')
    document.querySelector('.subList03R').classList.remove('active')
    document.querySelector('.subList04R').classList.remove('active')

    document.querySelector('.subList02').classList.add('active')
    document.querySelector('.subList01').classList.remove('active')
    document.querySelector('.subList03').classList.remove('active')
    document.querySelector('.subList04').classList.remove('active')
});
document.querySelector('.subList03').addEventListener('click', function () {
    document.querySelector('.subList03R').classList.add('active')
    document.querySelector('.subList02R').classList.remove('active')
    document.querySelector('.subList01R').classList.remove('active')
    document.querySelector('.subList04R').classList.remove('active')

    document.querySelector('.subList03').classList.add('active')
    document.querySelector('.subList02').classList.remove('active')
    document.querySelector('.subList01').classList.remove('active')
    document.querySelector('.subList04').classList.remove('active')
});
document.querySelector('.subList04').addEventListener('click', function () {
    document.querySelector('.subList04R').classList.add('active')
    document.querySelector('.subList02R').classList.remove('active')
    document.querySelector('.subList03R').classList.remove('active')
    document.querySelector('.subList01R').classList.remove('active')

    document.querySelector('.subList04').classList.add('active')
    document.querySelector('.subList02').classList.remove('active')
    document.querySelector('.subList03').classList.remove('active')
    document.querySelector('.subList01').classList.remove('active')
});