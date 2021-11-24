window.onscroll = function () {
	ChangeNavbarStyle();
};

function ChangeNavbarStyle () {
	let nav = document.getElementById('navbar');
	let logo = document.getElementById('trans-logo');
	// console.log(nav);
	if (window.pageYOffset > 10) {
		nav.classList.add('scroll');
		logo.classList.add('scroll');
	}
	else {
		nav.classList.remove('scroll');
		logo.classList.remove('scroll');
	}
}

function ToggleNavbar () {
	let nav = document.getElementById('navbar');
	let icon = document.getElementById('menu-icon');
	if (nav.classList.contains('inactive')) {
		nav.classList.remove('inactive');
		icon.setAttribute('name', 'x');
	}
	else {
		nav.classList.add('inactive');
		icon.setAttribute('name', 'menu');
	}
}

function ToggleMenu (name) {
	let button = document.getElementById(name);
	if (button.classList.contains('inactive')) {
		button.classList.remove('inactive');
	}
	else {
		button.classList.add('inactive');
	}
}
