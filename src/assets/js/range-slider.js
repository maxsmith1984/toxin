const range = document.querySelectorAll('.progress__range');
const progress = document.querySelector('.progress__line');
let gap = 0;
const inputValue = document.querySelectorAll('.numberVal input');

range.forEach(input => {
    input.addEventListener('input', event => {
        let minrange = parseInt(range[0].value);
        let maxrange = parseInt(range[1].value);

        if (maxrange - minrange < gap) {
            if (event.target.className === 'progress__min ') {
                range[0].value = maxrange - gap;
            }
            else {
                range[1].value = minrange + gap;
            }
        }
        else {
            progress.style.left = (minrange / range[0].max) * 100 + '%';
            progress.style.right = 100 - (maxrange / range[1].max) * 100 + '%';
            inputValue[0].value = minrange + '₽';
            inputValue[1].value = maxrange + '₽';
        }
    });
});