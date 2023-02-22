const menu = document.getElementById('menu');
const menuBtn = document.querySelectorAll('[data-menu]')
const body = document.body;



menuBtn.forEach(item => {
    item.addEventListener('click', event => {
        menu.classList.toggle('form__menu--show');
        event.stopPropagation();



    });
});

function menuClose() {
    menu.classList.remove('form__menu--show');
}


function menuCloseClickOutside(e) {
    if (!e.target.matches('.menu, .menu *')) {
        menuClose();
    }
}

body.addEventListener('click', menuCloseClickOutside);
body.addEventListener('touchstart', menuCloseClickOutside);
