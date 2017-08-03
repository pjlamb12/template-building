require('../scss/index.scss');

function openMainNav(nav, linksContainer) {
	if (!nav || !linksContainer) return;

	linksContainer.classList.remove('navbar__links-container--off-screen');
	
	nav.classList.toggle('navbar--main-nav-open');
	const body = document.getElementsByTagName('body')[0];
	body.classList.toggle('navbar--main-nav-open');
	if (!nav.classList.contains('navbar--main-nav-open')) {
		setTimeout(() => {
			linksContainer.classList.add('navbar__links-container--off-screen');
		}, 700);
	}
}

const mainNav = document.getElementById('main-nav');
const mainNavLinksContainer = mainNav.getElementsByClassName('navbar__links-container')[0];
const mainNavToggle = mainNav.getElementsByClassName('navbar__menu-toggle')[0];
mainNavToggle.addEventListener('click', () => openMainNav(mainNav, mainNavLinksContainer));
