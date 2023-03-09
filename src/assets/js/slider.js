let sliders = document.querySelectorAll('.slider');

for (let i = 0; i < sliders.length; i++) {
    init_slider(sliders[i]);
}

function init_slider(slider) {
    let sliderImages = slider.querySelectorAll('.slider__photo');
    let sliderLine = slider.querySelector('.slider__line');
    let sliderDost = slider.querySelectorAll('.slider__dot');
    let sliderBtnNext = slider.querySelector('.slider__btn-next');
    let sliderBtnPrev = slider.querySelector('.slider__btn-prev');


    let sliderCount = 0;
    let sliderWidth = 0;

    window.addEventListener('resize', showSlide);

    sliderBtnNext.addEventListener('click', nextSlide);
    sliderBtnPrev.addEventListener('click', prevSlide);

    function showSlide() {
        sliderWidth = document.querySelector('.slider').offsetWidth;
        sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
        sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

        rollSlider();
    }
    showSlide();

    function nextSlide() {
        sliderCount++;
        if (sliderCount >= sliderImages.length) {
            sliderCount = 0;
        }

        rollSlider();
        thisSlide(sliderCount);
    }

    function prevSlide() {
        sliderCount--;
        if (sliderCount < 0) {
            sliderCount = sliderImages.length - 1;
        };

        rollSlider();
        thisSlide(sliderCount);
    }


    function rollSlider() {
        sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`
    }

    function thisSlide(index) {
        sliderDost.forEach(item => item.classList.remove('slider__dot--active'));
        sliderDost[index].classList.add('slider__dot--active');
    }

    sliderDost.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            sliderCount = index;
            rollSlider();
            thisSlide(sliderCount);
        });
    });
}
