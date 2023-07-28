let tabsBtn = document.querySelectorAll('.work__step-btn');
let tabsItem = document.querySelectorAll('.work__consultation');

tabsBtn.forEach(function(element) {
    element.addEventListener('click', function(e){
        const path = e.currentTarget.dataset.path;
        tabsBtn.forEach(function(btn) {
            btn.classList.remove('work__btn-active');
        });
        e.currentTarget.classList.add('work__btn-active');

        tabsItem.forEach(function(element) {
            element.classList.remove('work__consultation-active');
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('work__consultation-active');
    });
});
