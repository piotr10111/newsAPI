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
/*const color_ul = document.querySelector('.header__inside-ul');

function hideUl() {
	color_ul.classList.toggle('hide-ul');

	if (color_ul.style.visibility === "hidden") {
		color_ul.style.visibility = "visible";
	} else {
		color_ul.style.visibility = "hidden";
	}
}

const items = Array.from(document.querySelectorAll('.header-a'));
		items.forEach(function (link) {
			return link.addEventListener('click', hideUl);
			
		});*/
//color_ul.style.visibility = "visible";

// Changing color of a document on a click
const body = document.querySelector("body");
const colors = [
	'#2B2B2B',
	'#e55039',
	'#f6b93b',
	'#2980b9',
	'#27ae60'
]

const changeColor = (color) =>  {
	const header = document.querySelector(".header");
	const footer = document.querySelector(".footer");
	const body = document.querySelector("body");

	header.style.background = color;
	footer.style.background = color ; 

}

document.querySelector('.grey').addEventListener('click', () => {
	changeColor( colors[0] );
	body.style.background = "white";
})
document.querySelector('.red').addEventListener('click', () => {
	changeColor( colors[1] );
	body.style.background = "#eecec9";
})
document.querySelector('.orange').addEventListener('click', () =>  {
	changeColor( colors[2] );
	body.style.background = "rgb(245, 230, 200)";
})
document.querySelector('.blue').addEventListener('click', () => {
	changeColor( colors[3] );
	body.style.background = "rgb(162, 201, 226)";
})
document.querySelector('.green').addEventListener('click', () => {
	changeColor( colors[4] );
	body.style.background = "rgb(198, 238, 215)";
})

