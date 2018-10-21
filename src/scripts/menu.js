const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('.header__nav');
const hamburgerClose = document.querySelector('.hamburger-close');

const click = hamburger.addEventListener('click', function (event) {
    event ? event : event = window.event;
    event.preventDefault();
    this.style.display = "none";
    ul.classList.toggle('visible');
    hamburgerClose.style.visibility = "visible";
    
});