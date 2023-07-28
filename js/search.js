let search = document.querySelector('.company__search'); //форма поиска
let iconSearch = document.querySelector('.company__nav-icon'); //лупа
let iconBack = document.querySelector('.company__btn-back');// назад
let inputSearch = document.querySelector('.company__search-input');//инпут
let searchIconForm = document.querySelector('.company__nav-search'); //лупа на форме
let navList = document.querySelector('.company__nav-list'); //список
let navItem = document.querySelector('.company__nav-item:not(:last-child)'); //элементы списка
let backClick = document.querySelector('#back'); //кнопка назад для закрытия поиска

iconSearch.addEventListener('click', function() {
    search.classList.add('search');
    inputSearch.classList.add('company__search-input-active');
    iconBack.classList.add('company__btn-back-active');
    inputSearch.focus();
})

iconBack.addEventListener('click', function() {
    search.classList.remove('search');
    inputSearch.classList.remove('company__search-input-active');
    iconBack.classList.remove('company__btn-back-active');
    navList.classList.remove('company__nav-list-active');
    navItem.classList.remove('company__nav-item-active:not(:last-child)');
})
