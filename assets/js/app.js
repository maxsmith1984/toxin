/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/calendar.js":
/*!***********************************!*\
  !*** ./src/assets/js/calendar.js ***!
  \***********************************/
/***/ (function() {

eval("const currentDate = document.querySelector('.calendar-header__date');\r\nconst daysTag = document.querySelector('.days');\r\nconst prevNextIcon = document.querySelectorAll('.calendar-header__arrow');\r\nconst clearCalendar = document.getElementById('clear-calendar');\r\n\r\nlet date = new Date(),\r\n    currYear = date.getFullYear(),\r\n    currMonth = date.getMonth();\r\n\r\nconst month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];\r\n\r\nconst renderCalendar = () => {\r\n    let firstDayofMonth = new Date(currYear, currMonth, 0).getDay();\r\n    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();\r\n    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();\r\n    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();\r\n    let liTag = '';\r\n\r\n    for (let i = firstDayofMonth; i > 0; i--) {\r\n        liTag += `<li class=\"days__item days__item--inactive\">${lastDateofLastMonth - i + 1}</li>`;\r\n    }\r\n\r\n    for (let i = 1; i <= lastDateofMonth; i++) {\r\n        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? 'days__item--current' : '';\r\n        liTag += `<li class=\"days__item ${isToday}\">${i}</li>`;\r\n    }\r\n\r\n    for (let i = lastDayofMonth; i <= 6; i++) {\r\n        liTag += `<li class=\"days__item days__item--inactive\">${i - lastDayofMonth + 1}</li>`;\r\n    }\r\n\r\n    currentDate.innerText = `${month[currMonth]} ${currYear}`;\r\n    daysTag.innerHTML = liTag;\r\n\r\n};\r\n\r\nrenderCalendar();\r\n\r\nprevNextIcon.forEach(icon => {\r\n    icon.addEventListener('click', () => {\r\n        currMonth = icon.id === 'prev' ? currMonth - 1 : currMonth + 1;\r\n\r\n        if (currMonth < 0 || currMonth > 11) {\r\n            date = new Date(currYear, currMonth);\r\n            currYear = date.getFullYear();\r\n            currMonth = date.getMonth();\r\n        } else {\r\n            date = new Date();\r\n        }\r\n        renderCalendar();\r\n    });\r\n});\r\n\r\n\r\nlet day = document.querySelectorAll('.days__item');\r\n\r\nday.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n        let selectedDay = document.querySelectorAll('.days__item--active').length;\r\n\r\n\r\n        if (item.classList.contains('days__item--active')) {\r\n            item.classList.remove('days__item--active');\r\n\r\n        } else if (selectedDay >= 2) {\r\n        }\r\n        else {\r\n            item.classList.add('days__item--active');\r\n            clearCalendar.classList.add('menu__footer-clear--active');\r\n        }\r\n    });\r\n\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://blog/./src/assets/js/calendar.js?");

/***/ }),

/***/ "./src/assets/js/comfort_counter.js":
/*!******************************************!*\
  !*** ./src/assets/js/comfort_counter.js ***!
  \******************************************/
/***/ (function() {

eval("const counterComfort = document.querySelectorAll('[data-comfort]');\r\nconst clearBtnComfort = document.getElementById('clear-comfort');\r\nlet counerInputComfort = document.querySelectorAll('.input__counter-comfort');\r\n\r\n\r\nif (counterComfort) {\r\n    counterComfort.forEach(counterComfort => {\r\n        counterComfort.addEventListener('click', event => {\r\n            const target = event.target;\r\n            if (target.closest('.counter__button-comfort')) {\r\n\r\n                if (target.closest('.menu__counter').querySelector('input').value == '' && (target.classList.contains('counter__minus') || (target.classList.contains('counter__plus')))) {\r\n                    target.closest('.menu__counter').querySelector('input').value = 0;\r\n                }\r\n\r\n                let value = parseInt(target.closest('.menu__counter').querySelector('input').value);\r\n\r\n                if (target.classList.contains('counter__plus')) {\r\n                    value++;\r\n                } else {\r\n                    --value;\r\n                }\r\n\r\n                if (value <= 0) {\r\n                    value = 0;\r\n                    target.closest('.menu__counter').querySelector('.counter__minus').classList.add('counter__minus--disabled');\r\n\r\n\r\n\r\n                } else {\r\n                    target.closest('.menu__counter').querySelector('.counter__minus').classList.remove('counter__minus--disabled');\r\n                    clearBtnComfort.classList.add('menu__footer-clear--active');\r\n                }\r\n\r\n\r\n\r\n                target.closest('.menu__counter').querySelector('input').value = value;\r\n\r\n\r\n\r\n\r\n                let sumComfort = document.getElementById('sum-comfort');\r\n\r\n\r\n\r\n\r\n                let numbersComfort = [\r\n                ];\r\n\r\n                for (let i = 0; i < counerInputComfort.length; i++) {\r\n                    numbersComfort.push(counerInputComfort[i].value);\r\n\r\n                    counerInputComfort[i].addEventListener('input', function () {\r\n                        numbersComfort[i] = this.value;\r\n\r\n                        updateResultsComfort();\r\n\r\n                    });\r\n                }\r\n                updateResultsComfort();\r\n\r\n\r\n\r\n\r\n\r\n\r\n                function updateResultsComfort() {\r\n                    sumComfort.value = sumArrComfort(numbersComfort)\r\n                    if (sumComfort.value == 1) {\r\n                        sumComfort.value = sumArrComfort(numbersComfort) + ' ' + 'удобство';\r\n                    } else if (sumComfort.value >= 2 && 4 >= sumComfort.value) {\r\n                        sumComfort.value = sumArrComfort(numbersComfort) + ' ' + 'удобства';\r\n                    } else if (sumComfort.value >= 5) {\r\n                        sumComfort.value = sumArrComfort(numbersComfort) + ' ' + 'удобств';\r\n                    } else if (sumComfort.value == 0) {\r\n                        sumComfort.value = 'Выберите удобства';\r\n                    }\r\n                }\r\n\r\n                function sumArrComfort(arrComfort) {\r\n\r\n                    let x = 0;\r\n\r\n                    for (let i = 0; i < arrComfort.length; i++) {\r\n                        x += +arrComfort[i];\r\n\r\n                    }\r\n                    if (x == 0) {\r\n                        clearBtnComfort.classList.remove('menu__footer-clear--active')\r\n                    }\r\n                    return x;\r\n\r\n                }\r\n\r\n                clearBtnComfort.addEventListener('click', event => {\r\n                    counerInputComfort.forEach(function () {\r\n\r\n                        target.closest('.menu__counter-comfort').querySelector('input').value = '0';\r\n                        clearBtnComfort.classList.remove('menu__footer-clear--active');\r\n                        sumComfort.value = 'Выберите удобства';\r\n                        target.closest('.menu__counter-comfort').querySelector('.counter__minus').classList.add('counter__minus--disabled');\r\n                    });\r\n                });\r\n\r\n            }\r\n        });\r\n    });\r\n}\r\n\r\n\r\nconst menuComfort = document.getElementById('menu-comfort');\r\nconst menuBtnComfort = document.querySelectorAll('[data-menucomfort]');\r\nconst body = document.body;\r\n\r\nif (menuComfort) {\r\n    menuBtnComfort.forEach(item => {\r\n        item.addEventListener('click', event => {\r\n            menuComfort.classList.toggle('form__menu--show');\r\n            event.stopPropagation();\r\n        });\r\n    });\r\n\r\n    function menuComfortClose() {\r\n        menuComfort.classList.remove('form__menu--show');\r\n    }\r\n\r\n\r\n    function menuComfortCloseClickOutside(e) {\r\n        if (!e.target.matches('.menu-comfort, .menu-comfort *')) {\r\n            if (menuComfort.classList.contains('form__menu--show')) {\r\n                menuComfortClose();\r\n            }\r\n        }\r\n    }\r\n\r\n    body.addEventListener('click', menuComfortCloseClickOutside);\r\n    body.addEventListener('touchstart', menuComfortCloseClickOutside);\r\n}\n\n//# sourceURL=webpack://blog/./src/assets/js/comfort_counter.js?");

/***/ }),

/***/ "./src/assets/js/counter.js":
/*!**********************************!*\
  !*** ./src/assets/js/counter.js ***!
  \**********************************/
/***/ (function() {

eval("const counter = document.querySelectorAll('[data-counter]');\r\nconst clearBtn = document.getElementById('clear');\r\nlet counerInput = document.querySelectorAll('.input__counter');\r\n\r\nif (counter) {\r\n    counter.forEach(counter => {\r\n        counter.addEventListener('click', event => {\r\n            const target = event.target;\r\n\r\n            if (target.closest('.counter__button')) {\r\n                if (target.closest('.menu__counter').querySelector('input').value == '' && (target.classList.contains('counter__minus') || (target.classList.contains('counter__plus')))) {\r\n                    target.closest('.menu__counter').querySelector('input').value = 0;\r\n                }\r\n\r\n                let value = parseInt(target.closest('.menu__counter').querySelector('input').value);\r\n\r\n                if (target.classList.contains('counter__plus')) {\r\n                    value++;\r\n                } else {\r\n                    --value;\r\n                }\r\n\r\n                if (value <= 0) {\r\n                    value = 0;\r\n                    target.closest('.menu__counter').querySelector('.counter__minus').classList.add('counter__minus--disabled');\r\n\r\n\r\n\r\n                } else {\r\n                    target.closest('.menu__counter').querySelector('.counter__minus').classList.remove('counter__minus--disabled');\r\n                    clearBtn.classList.add('menu__footer-clear--active');\r\n                }\r\n\r\n\r\n\r\n                target.closest('.menu__counter').querySelector('input').value = value;\r\n\r\n\r\n\r\n\r\n                let sum = document.getElementById('sum');\r\n\r\n                const num1 = [];\r\n\r\n\r\n\r\n                for (let i = 0; i < counerInput.length; i++) {\r\n                    num1.push(counerInput[i].value);\r\n\r\n                    counerInput[i].addEventListener('input', function () {\r\n                        num1[i] = this.value;\r\n                        updateResults();\r\n                    });\r\n                }\r\n                updateResults();\r\n\r\n\r\n                function updateResults() {\r\n                    sum.value = sumArr(num1)\r\n                    if (sum.value == 1) {\r\n                        sum.value = sumArr(num1) + ' ' + 'гость';\r\n                    } else if (sum.value >= 2 && 4 >= sum.value) {\r\n                        sum.value = sumArr(num1) + ' ' + 'гостя';\r\n                    } else if (sum.value >= 5) {\r\n                        sum.value = sumArr(num1) + ' ' + 'гостей';\r\n                    } else if (sum.value == 0) {\r\n                        sum.value = 'Сколько гостей';\r\n                    }\r\n                }\r\n\r\n                function sumArr(arr) {\r\n\r\n                    let x = 0;\r\n\r\n                    for (let i = 0; i < arr.length; i++) {\r\n                        x += +arr[i];\r\n\r\n                    }\r\n                    if (x == 0) {\r\n                        clearBtn.classList.remove('menu__footer-clear--active')\r\n                    }\r\n                    return x;\r\n\r\n                }\r\n\r\n                clearBtn.addEventListener('click', event => {\r\n                    counerInput.forEach(function () {\r\n\r\n                        target.closest('.menu__counter').querySelector('input').value = '0';\r\n                        clearBtn.classList.remove('menu__footer-clear--active');\r\n                        sum.value = 'Сколько гостей';\r\n                        target.closest('.menu__counter').querySelector('.counter__minus').classList.add('counter__minus--disabled');\r\n                    });\r\n                });\r\n\r\n            }\r\n        });\r\n    });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://blog/./src/assets/js/counter.js?");

/***/ }),

/***/ "./src/assets/js/menu.js":
/*!*******************************!*\
  !*** ./src/assets/js/menu.js ***!
  \*******************************/
/***/ (function() {

eval("const menu = document.getElementById('menu');\r\nconst menuBtn = document.querySelectorAll('[data-menu]');\r\n\r\nconst calendar = document.getElementById('calendar');\r\nconst calendarBtn = document.querySelectorAll('[data-calendar]');\r\n\r\n\r\nconst body = document.body;\r\n\r\nif (menu) {\r\n    menuBtn.forEach(item => {\r\n        item.addEventListener('click', event => {\r\n            menu.classList.toggle('form__menu--show');\r\n            event.stopPropagation();\r\n\r\n        });\r\n    });\r\n\r\n\r\n    function menuClose() {\r\n        menu.classList.remove('form__menu--show');\r\n        calendar.classList.remove('wrapper--show');\r\n    }\r\n\r\n\r\n    function menuCloseClickOutside(e) {\r\n        if (!e.target.matches('.menu, .menu *') && !e.target.matches('.wrapper, .wrapper *')) {\r\n            if (menu.classList.contains('form__menu--show') || calendar.classList.contains('wrapper--show')) {\r\n                menuClose();\r\n            }\r\n        }\r\n    }\r\n\r\n    body.addEventListener('click', menuCloseClickOutside);\r\n    body.addEventListener('touchstart', menuCloseClickOutside);\r\n}\r\n\r\nif (calendar) {\r\n\r\n    calendarBtn.forEach(item => {\r\n        item.addEventListener('click', event => {\r\n            calendar.classList.toggle('wrapper--show');\r\n            event.stopPropagation();\r\n            event.preventDefault()\r\n        });\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://blog/./src/assets/js/menu.js?");

/***/ }),

/***/ "./src/assets/js/mobile_nav.js":
/*!*************************************!*\
  !*** ./src/assets/js/mobile_nav.js ***!
  \*************************************/
/***/ (function() {

eval("const headerNav = document.getElementById('header__nav');\r\nconst burger = document.getElementById('burger');\r\n\r\n\r\nburger.addEventListener('click', event => {\r\n    event.stopPropagation();\r\n    headerNav.classList.toggle('header__controls--show');\r\n    burger.classList.toggle('burger__transform');\r\n});\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://blog/./src/assets/js/mobile_nav.js?");

/***/ }),

/***/ "./src/assets/js/morecomfort.js":
/*!**************************************!*\
  !*** ./src/assets/js/morecomfort.js ***!
  \**************************************/
/***/ (function() {

eval("const moreComfortBtn = document.getElementById('more-comfort');\r\nconst moreComfortMenu = document.getElementById('comfort-menu');\r\nconst moreComfortArrow = document.getElementById('comfort__arrow');\r\nconst body = document.body;\r\n\r\nif (moreComfortMenu) {\r\n    moreComfortBtn.addEventListener('click', event => {\r\n        moreComfortMenu.classList.toggle('more-comfort__content--show');\r\n        moreComfortArrow.classList.toggle('more-comfort__arrow--show');\r\n    });\r\n\r\n    body.addEventListener('click', event => {\r\n        if (!event.target.closest('.sidebar__item')) {\r\n            if (moreComfortMenu.classList.contains('more-comfort__content--show')) {\r\n                moreComfortMenu.classList.remove('more-comfort__content--show');\r\n            }\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack://blog/./src/assets/js/morecomfort.js?");

/***/ }),

/***/ "./src/assets/js/range-slider.js":
/*!***************************************!*\
  !*** ./src/assets/js/range-slider.js ***!
  \***************************************/
/***/ (function() {

eval("const range = document.querySelectorAll('.progress__range');\r\nconst progress = document.querySelector('.progress__line');\r\nlet gap = 0;\r\nconst inputValue = document.querySelectorAll('.numberVal input');\r\n\r\nrange.forEach(input => {\r\n    input.addEventListener('input', event => {\r\n        let minrange = parseInt(range[0].value);\r\n        let maxrange = parseInt(range[1].value);\r\n\r\n        if (maxrange - minrange < gap) {\r\n            if (event.target.className === 'progress__min ') {\r\n                range[0].value = maxrange - gap;\r\n            }\r\n            else {\r\n                range[1].value = minrange + gap;\r\n            }\r\n        }\r\n        else {\r\n            progress.style.left = (minrange / range[0].max) * 100 + '%';\r\n            progress.style.right = 100 - (maxrange / range[1].max) * 100 + '%';\r\n            inputValue[0].value = minrange + '₽';\r\n            inputValue[1].value = maxrange + '₽';\r\n        }\r\n    });\r\n});\n\n//# sourceURL=webpack://blog/./src/assets/js/range-slider.js?");

/***/ }),

/***/ "./src/assets/js/sidebar-show.js":
/*!***************************************!*\
  !*** ./src/assets/js/sidebar-show.js ***!
  \***************************************/
/***/ (function() {

eval("let sidebarBtn = document.querySelector('.sidebar-btn');\r\nlet sidebar = document.querySelector('.sidebar');\r\nlet body = document.body;\r\n\r\nif (sidebar) {\r\n    sidebarBtn.addEventListener('click', event => {\r\n        sidebar.classList.toggle('sidebar--show');\r\n        sidebarBtn.classList.toggle('sidebar-btn__transform');\r\n        event.stopPropagation();\r\n    });\r\n\r\n    body.addEventListener('click', event => {\r\n        if (!event.target.closest('.sidebar')) {\r\n            console.log('pip')\r\n            sidebarClose()\r\n        }\r\n    });\r\n\r\n    function sidebarClose() {\r\n        sidebar.classList.remove('sidebar--show');\r\n        sidebarBtn.classList.remove('sidebar-btn__transform');\r\n    };\r\n\r\n\r\n}\r\nif (!sidebar) {\r\n    sidebarBtn.style.opacity = 0;\r\n\r\n}\n\n//# sourceURL=webpack://blog/./src/assets/js/sidebar-show.js?");

/***/ }),

/***/ "./src/assets/js/slider.js":
/*!*********************************!*\
  !*** ./src/assets/js/slider.js ***!
  \*********************************/
/***/ (function() {

eval("let sliders = document.querySelectorAll('.slider');\r\n\r\nfor (let i = 0; i < sliders.length; i++) {\r\n    init_slider(sliders[i]);\r\n}\r\n\r\nfunction init_slider(slider) {\r\n    let sliderImages = slider.querySelectorAll('.slider__photo');\r\n    let sliderLine = slider.querySelector('.slider__line');\r\n    let sliderDost = slider.querySelectorAll('.slider__dot');\r\n    let sliderBtnNext = slider.querySelector('.slider__btn-next');\r\n    let sliderBtnPrev = slider.querySelector('.slider__btn-prev');\r\n\r\n\r\n    let sliderCount = 0;\r\n    let sliderWidth = 0;\r\n\r\n    window.addEventListener('resize', showSlide);\r\n\r\n    sliderBtnNext.addEventListener('click', nextSlide);\r\n    sliderBtnPrev.addEventListener('click', prevSlide);\r\n\r\n    function showSlide() {\r\n        sliderWidth = document.querySelector('.slider').offsetWidth;\r\n        sliderLine.style.width = sliderWidth * sliderImages.length + 'px';\r\n        sliderImages.forEach(item => item.style.width = sliderWidth + 'px');\r\n\r\n        rollSlider();\r\n    }\r\n    showSlide();\r\n\r\n    function nextSlide() {\r\n        sliderCount++;\r\n        if (sliderCount >= sliderImages.length) {\r\n            sliderCount = 0;\r\n        }\r\n\r\n        rollSlider();\r\n        thisSlide(sliderCount);\r\n    }\r\n\r\n    function prevSlide() {\r\n        sliderCount--;\r\n        if (sliderCount < 0) {\r\n            sliderCount = sliderImages.length - 1;\r\n        };\r\n\r\n        rollSlider();\r\n        thisSlide(sliderCount);\r\n    }\r\n\r\n\r\n    function rollSlider() {\r\n        sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`\r\n    }\r\n\r\n    function thisSlide(index) {\r\n        sliderDost.forEach(item => item.classList.remove('slider__dot--active'));\r\n        sliderDost[index].classList.add('slider__dot--active');\r\n    }\r\n\r\n    sliderDost.forEach((dot, index) => {\r\n        dot.addEventListener('click', () => {\r\n            sliderCount = index;\r\n            rollSlider();\r\n            thisSlide(sliderCount);\r\n        });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://blog/./src/assets/js/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/calendar.js"]();
/******/ 	__webpack_modules__["./src/assets/js/comfort_counter.js"]();
/******/ 	__webpack_modules__["./src/assets/js/counter.js"]();
/******/ 	__webpack_modules__["./src/assets/js/menu.js"]();
/******/ 	__webpack_modules__["./src/assets/js/mobile_nav.js"]();
/******/ 	__webpack_modules__["./src/assets/js/morecomfort.js"]();
/******/ 	__webpack_modules__["./src/assets/js/range-slider.js"]();
/******/ 	__webpack_modules__["./src/assets/js/sidebar-show.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/slider.js"]();
/******/ 	
/******/ })()
;