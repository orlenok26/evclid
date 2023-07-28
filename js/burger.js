let burger = document.querySelector('.company__burger');
let menu = document.querySelector('.company__nav-list');
let menuLinks = menu.querySelectorAll('.company__nav-link');
let burgerList = menu.querySelector('.company__burger-list');

burger.addEventListener('click', function () {
    menu.classList.toggle('company__nav-active');
})

menuLinks.forEach(function (el) {
    el.addEventListener('click', function() {
        burger.classList.remove('company__burger-active');
        menu.classList.remove('company__nav-active');
    })
    burgerList.addEventListener('click', function() {
        menu.classList.toggle('company__nav-active');
    })
})

