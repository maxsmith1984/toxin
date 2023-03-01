const menu = document.getElementById('menu');
const menuBtn = document.querySelectorAll('[data-menu]');

const menuComfort = document.getElementById('menu-comfort');
const menuBtnComfort = document.querySelectorAll('[data-menucomfort]');

const calendar = document.getElementById('calendar');
const calendarBtn = document.querySelectorAll('[data-calendar]');


const body = document.body;

if (menu || menuComfort) {
    menuBtn.forEach(item => {
        item.addEventListener('click', event => {
            menu.classList.toggle('form__menu--show');
            event.stopPropagation();

        });
    });

    menuBtnComfort.forEach(item => {
        item.addEventListener('click', event => {
            menuComfort.classList.toggle('form__menu--show');
            event.stopPropagation();

        });
    });

    function menuClose() {
        menu.classList.remove('form__menu--show');
        menuComfort.classList.remove('form__menu--show');
        calendar.classList.remove('wrapper--show');
    }


    function menuCloseClickOutside(e) {
        if (!e.target.matches('.menu, .menu *') && !e.target.matches('.menu-comfort, .menu-comfort *') && !e.target.matches('.wrapper, .wrapper *')) {
            if (menu.classList.contains('form__menu--show') || menuComfort.classList.contains('form__menu--show') || calendar.classList.contains('wrapper--show')) {
                menuClose();
            }
        }
    }

    body.addEventListener('click', menuCloseClickOutside);
    body.addEventListener('touchstart', menuCloseClickOutside);
}

if (calendar) {

    calendarBtn.forEach(item => {
        item.addEventListener('click', event => {
            calendar.classList.toggle('wrapper--show');
            event.stopPropagation();
            event.preventDefault()
        });
    });
}

