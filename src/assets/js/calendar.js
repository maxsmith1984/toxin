const currentDate = document.querySelector('.calendar-header__date');
const daysTag = document.querySelector('.days');
const prevNextIcon = document.querySelectorAll('.calendar-header__arrow');


let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 0).getDay();
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = '';

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="days__item days__item--inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? 'days__item--current' : '';
        liTag += `<li class="days__item ${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i <= 6; i++) {
        liTag += `<li class="days__item days__item--inactive">${i - lastDayofMonth + 1}</li>`;
    }

    currentDate.innerText = `${month[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;




    let day = document.querySelectorAll('.days__item');


    day.forEach(item => {
        item.addEventListener('click', event => {
            let selectedDay = document.querySelectorAll('.days__item--active').length;

            if (item.classList.contains('days__item--active')) {
                item.classList.remove('days__item--active');

            } else if (selectedDay >= 2) {
            } else {
                item.classList.add('days__item--active')
            }


        });

    });

};

renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener('click', () => {
        currMonth = icon.id === 'prev' ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar();
    });
});





