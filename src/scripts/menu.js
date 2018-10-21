/*const hamburger = document.querySelector('.nav-btn');
const ul = document.querySelector('.header__nav');
const  = document.querySelector('.nav__list');
const click = hamburger.addEventListener('click', function (event) {
    event ? event : event = window.event;
    event.preventDefault();
    hamburger.classList.toggle('header__button--close');

});*/

/*
const hide = function hide() {
    ul.style.visibility = "hidden";
    hamburger.classList.remove('header__button--close');
};


links.forEach(function (link) {
    return link.addEventListener('click', hide);
});*/
const trigger = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

function toggleClass() {
	trigger.classList.toggle('active');
	menu.classList.toggle('active')
}

trigger.addEventListener('click', toggleClass);
menu.addEventListener('click', toggleClass);
window.addEventListener('keyup', function(e){
	if (menu.classList.contains('active') && e.keyCode === 27) {
		toggleClass();
	}
})