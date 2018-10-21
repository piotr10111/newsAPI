const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('.header__nav');

const click = hamburger.addEventListener('click', function (event) {
    event ? event : event = window.event;
    event.preventDefault();
    hamburger.classList.toggle('header__button--close')
    ul.classList.toggle('visible');
    
});