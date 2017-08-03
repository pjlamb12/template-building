require('../scss/index.scss');

function openMainNav(nav, linksContainer) {
	if (!nav || !linksContainer) return;

	linksContainer.classList.remove('off-screen');
	
	nav.classList.toggle('main-nav-open');
	const body = document.getElementsByTagName('body')[0];
	body.classList.toggle('main-nav-open');
	if (!nav.classList.contains('main-nav-open')) {
		setTimeout(() => {
			linksContainer.classList.add('off-screen');
		}, 700);
	}
}

const mainNav = document.getElementById('main-nav');
const linksContainer = document.getElementById('links-container');
mainNav.addEventListener('click', () => openMainNav(mainNav, linksContainer));

window.onresize = () => {
	const width = window.outerWidth;
	if (width > 768) {
		document.getElementById('links-container').style.display = '';
	}
};