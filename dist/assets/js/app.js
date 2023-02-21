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

/***/ "./src/assets/js/counter.js":
/*!**********************************!*\
  !*** ./src/assets/js/counter.js ***!
  \**********************************/
/***/ (function() {

eval("const counter = document.querySelectorAll('[data-counter]');\r\nconst clearBtn = document.getElementById('clear');\r\n\r\nif (counter) {\r\n    counter.forEach(counter => {\r\n        counter.addEventListener('click', event => {\r\n            const target = event.target;\r\n\r\n            if (target.closest('.counter__button')) {\r\n                if (target.closest('.menu__counter').querySelector('input').value == '' && (target.classList.contains('counter__minus') || (target.classList.contains('counter__plus')))) {\r\n                    target.closest('.menu__counter').querySelector('input').value = 0;\r\n                }\r\n\r\n                let value = parseInt(target.closest('.menu__counter').querySelector('input').value);\r\n\r\n                if (target.classList.contains('counter__plus')) {\r\n                    value++;\r\n                } else {\r\n                    --value;\r\n                }\r\n\r\n                if (value <= 0) {\r\n                    value = 0;\r\n                    target.closest('.menu__counter').querySelector('.counter__minus').classList.add('counter__minus--disabled');\r\n\r\n\r\n\r\n                } else {\r\n                    target.closest('.menu__counter').querySelector('.counter__minus').classList.remove('counter__minus--disabled');\r\n                    clearBtn.classList.add('menu__footer-clear--active');\r\n                }\r\n\r\n\r\n\r\n                target.closest('.menu__counter').querySelector('input').value = value;\r\n\r\n\r\n\r\n\r\n                let sum = document.getElementById('sum');;\r\n\r\n\r\n\r\n                let counerInput = document.querySelectorAll('.input__counter');\r\n                let numbers = [];\r\n\r\n                for (let i = 0; i < counerInput.length; i++) {\r\n                    numbers.push(counerInput[i].value);\r\n\r\n                    counerInput[i].addEventListener('input', function () {\r\n                        numbers[i] = this.value;\r\n                        updateResults();\r\n                    });\r\n                }\r\n                updateResults();\r\n\r\n\r\n                function updateResults() {\r\n                    sum.value = sumArr(numbers)\r\n                    if (sum.value == 1) {\r\n                        sum.value = sumArr(numbers) + ' ' + 'гость';\r\n                    } else if (sum.value >= 2 && 4 >= sum.value) {\r\n                        sum.value = sumArr(numbers) + ' ' + 'гостя';\r\n                    } else if (sum.value >= 5) {\r\n                        sum.value = sumArr(numbers) + ' ' + 'гостей';\r\n                    }\r\n\r\n                }\r\n\r\n                function sumArr(arr) {\r\n\r\n                    let x = 0;\r\n\r\n                    for (let i = 0; i < arr.length; i++) {\r\n                        x += +arr[i];\r\n\r\n                    }\r\n                    if (x == 0) {\r\n                        clearBtn.classList.remove('menu__footer-clear--active')\r\n                    }\r\n                    return x;\r\n\r\n                }\r\n\r\n\r\n\r\n            }\r\n        });\r\n    });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://blog/./src/assets/js/counter.js?");

/***/ }),

/***/ "./src/assets/js/menu.js":
/*!*******************************!*\
  !*** ./src/assets/js/menu.js ***!
  \*******************************/
/***/ (function() {

eval("const menu = document.getElementById('menu');\r\nconst menuBtn = document.querySelectorAll('[data-menu]')\r\n\r\n\r\n\r\nmenuBtn.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n        menu.classList.toggle('form__menu--show');\r\n\r\n    });\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://blog/./src/assets/js/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/counter.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/menu.js"]();
/******/ 	
/******/ })()
;