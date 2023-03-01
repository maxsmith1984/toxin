const counterComfort = document.querySelectorAll('[data-comfort]');
const clearBtnComfort = document.getElementById('clear-comfort');
let counerInputComfort = document.querySelectorAll('.input__counter-comfort');


if (counterComfort) {
    counterComfort.forEach(counterComfort => {
        counterComfort.addEventListener('click', event => {
            const target = event.target;
            if (target.closest('.counter__button-comfort')) {

                if (target.closest('.menu__counter').querySelector('input').value == '' && (target.classList.contains('counter__minus') || (target.classList.contains('counter__plus')))) {
                    target.closest('.menu__counter').querySelector('input').value = 0;
                }

                let value = parseInt(target.closest('.menu__counter').querySelector('input').value);

                if (target.classList.contains('counter__plus')) {
                    value++;
                } else {
                    --value;
                }

                if (value <= 0) {
                    value = 0;
                    target.closest('.menu__counter').querySelector('.counter__minus').classList.add('counter__minus--disabled');



                } else {
                    target.closest('.menu__counter').querySelector('.counter__minus').classList.remove('counter__minus--disabled');
                    clearBtnComfort.classList.add('menu__footer-clear--active');
                }



                target.closest('.menu__counter').querySelector('input').value = value;




                let sumComfort = document.getElementById('sum-comfort');




                let numbersComfort = [
                ];

                for (let i = 0; i < counerInputComfort.length; i++) {
                    numbersComfort.push(counerInputComfort[i].value);

                    counerInputComfort[i].addEventListener('input', function () {
                        numbersComfort[i] = this.value;

                        updateResultsComfort();

                    });
                }
                updateResultsComfort();






                function updateResultsComfort() {
                    sumComfort.value = sumArrComfort(numbersComfort)
                    if (sumComfort.value == 1) {
                        sumComfort.value = sumArrComfort(numbersComfort) + ' ' + 'удобство';
                    } else if (sumComfort.value >= 2 && 4 >= sumComfort.value) {
                        sumComfort.value = sumArrComfort(numbersComfort) + ' ' + 'удобства';
                    } else if (sumComfort.value >= 5) {
                        sumComfort.value = sumArrComfort(numbersComfort) + ' ' + 'удобств';
                    } else if (sumComfort.value == 0) {
                        sumComfort.value = 'Выберите удобства';
                    }
                }

                function sumArrComfort(arrComfort) {

                    let x = 0;

                    for (let i = 0; i < arrComfort.length; i++) {
                        x += +arrComfort[i];

                    }
                    if (x == 0) {
                        clearBtnComfort.classList.remove('menu__footer-clear--active')
                    }
                    return x;

                }

                clearBtnComfort.addEventListener('click', event => {
                    counerInputComfort.forEach(function () {

                        target.closest('.menu__counter-comfort').querySelector('input').value = '0';
                        clearBtnComfort.classList.remove('menu__footer-clear--active');
                        sumComfort.value = 'Выберите удобства';
                        target.closest('.menu__counter-comfort').querySelector('.counter__minus').classList.add('counter__minus--disabled');
                    });
                });

            }
        });
    });
}