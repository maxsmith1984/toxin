const moreComfortBtn = document.getElementById('more-comfort');
const moreComfortMenu = document.getElementById('comfort-menu');
const moreComfortArrow = document.getElementById('comfort__arrow');
const body = document.body;

if (moreComfortMenu) {
    moreComfortBtn.addEventListener('click', event => {
        moreComfortMenu.classList.toggle('more-comfort__content--show');
        moreComfortArrow.classList.toggle('more-comfort__arrow--show');
    });

    body.addEventListener('click', event => {
        if (!event.target.closest('.sidebar__item')) {
            if (moreComfortMenu.classList.contains('more-comfort__content--show')) {
                moreComfortMenu.classList.remove('more-comfort__content--show');
            }
        }
    });
}