const toggle = document.querySelector('.toggle');
const banner = document.querySelector('.banner');

toggle.addEventListener('click',function() {
    toggle.classList.toggle('active');
    banner.classList.toggle('active');
});