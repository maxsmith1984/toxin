const counter = document.querySelectorAll('[data-counter]');
const clearBtn = document.getElementById('clear');
let counerInput = document.querySelectorAll('.input__counter');

if (counter) {
    counter.forEach(counter => {
        counter.addEventListener('click', event => {
            const target = event.target;

            if (target.closest('.counter__button')) {
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
                    clearBtn.classList.add('menu__footer-clear--active');
                }



                target.closest('.menu__counter').querySelector('input').value = value;




                let sum = document.getElementById('sum');

                const num1 = [];



                for (let i = 0; i < counerInput.length; i++) {
                    num1.push(counerInput[i].value);

                    counerInput[i].addEventListener('input', function () {
                        num1[i] = this.value;
                        updateResults();
                    });
                }
                updateResults();


                function updateResults() {
                    sum.value = sumArr(num1)
                    if (sum.value == 1) {
                        sum.value = sumArr(num1) + ' ' + '??????????';
                    } else if (sum.value >= 2 && 4 >= sum.value) {
                        sum.value = sumArr(num1) + ' ' + '??????????';
                    } else if (sum.value >= 5) {
                        sum.value = sumArr(num1) + ' ' + '????????????';
                    } else if (sum.value == 0) {
                        sum.value = '?????????????? ????????????';
                    }
                }

                function sumArr(arr) {

                    let x = 0;

                    for (let i = 0; i < arr.length; i++) {
                        x += +arr[i];

                    }
                    if (x == 0) {
                        clearBtn.classList.remove('menu__footer-clear--active')
                    }
                    return x;

                }

                clearBtn.addEventListener('click', event => {
                    counerInput.forEach(function () {

                        target.closest('.menu__counter').querySelector('input').value = '0';
                        clearBtn.classList.remove('menu__footer-clear--active');
                        sum.value = '?????????????? ????????????';
                        target.closest('.menu__counter').querySelector('.counter__minus').classList.add('counter__minus--disabled');
                    });
                });

            }
        });
    });
}


