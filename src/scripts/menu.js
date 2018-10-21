const hamburger = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

function toggleClass() {
	hamburger.classList.toggle('active');
	menu.classList.toggle('active')
}

hamburger.addEventListener('click', toggleClass);
menu.addEventListener('click', toggleClass);
window.addEventListener('keyup', function(e){
	if (menu.classList.contains('active') && e.keyCode === 27) {
		toggleClass();
	}
})