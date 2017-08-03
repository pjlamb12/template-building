require('../scss/index.scss');

import { $, $$ } from './modules/bling';
import openNav from './modules/navigation';

const mainNav = document.getElementById('main-nav');
const mainNavToggle = mainNav.getElementsByClassName('navbar__menu-toggle')[0];

const navbarToggles = $$('.navbar__menu-toggle');
navbarToggles.on('click', function() {
	openNav(this.parentElement);
});
// mainNavToggle.addEventListener('click', () => openNav(mainNav));
