
function sliderJs() {
    const imgBx = document.querySelector('.imgBx');
    const slides = imgBx.getElementsByTagName('img');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let count = 0;

    next.addEventListener('click', function nextSlide() {
        slides[count].classList.remove('active');
        count = (count + 1) % slides.length;
        slides[count].classList.add('active');
    });

    prev.addEventListener('click', function prevSlide() {
        slides[count].classList.remove('active');
        count = (count - 1 + slides.length) % slides.length;
        slides[count].classList.add('active');
    });
}


function sliderText() {
    const contentBX = document.querySelector('.contentBx');
    const slidesText = contentBX.getElementsByTagName('div');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let count = 0;

    next.addEventListener('click', function nextSlideText() {
        slidesText[count].classList.remove('active');
        count = (count + 1) % slidesText.length;
        slidesText[count].classList.add('active');
    });

    prev.addEventListener('click', function prevSlideText() {
        slidesText[count].classList.remove('active');
        count = (count - 1 + slidesText.length) % slidesText.length;
        slidesText[count].classList.add('active');
    });
}


sliderJs();
sliderText();

