const button = document.querySelector('.hamburger');
const ul = document.querySelector('.header__nav');

button.addEventListener('click', function (event) {
    event ? event : event = window.event;
    event.preventDefault();
    button.classList.toggle('header__button--close');
    ul.classList.toggle('visible') ;
});