function imgSlider (anything) {
    document.querySelector('.starbucks').src = anything;
}

function changeColors(colors) {
const circle = document.querySelector('.circle');
circle.style.background = colors;
}


function toggleMenu() {
    let menuToggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');

    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

