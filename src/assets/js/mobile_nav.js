const headerNav = document.getElementById('header__nav');
const burger = document.getElementById('burger');


burger.addEventListener('click', event => {
    event.stopPropagation();
    headerNav.classList.toggle('header__controls--show');
    burger.classList.toggle('burger__transform');
});



