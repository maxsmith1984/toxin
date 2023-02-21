const menu = document.getElementById('menu');
const menuBtn = document.querySelectorAll('[data-menu]')



menuBtn.forEach(item => {
    item.addEventListener('click', event => {
        menu.classList.toggle('form__menu--show');

    });
});


