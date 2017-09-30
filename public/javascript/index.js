require('../scss/index.scss');

import { $, $$ } from './modules/bling';
import openNav from './modules/navigation';

const mainNav = document.getElementById('main-nav');
if(mainNav) {
	const mainNavToggle = mainNav.getElementsByClassName('navbar__menu-toggle')[0];
	mainNav.on('click', function() {
		openNav(this);
	});
	
	const mainNavSlidenav = document.getElementById('main-nav-slidenav');
	window.on('load', function() {
		setTimeout(function() {
			mainNavSlidenav.classList.remove('slidenav--off-screen');
		}, 750);
	});
}
