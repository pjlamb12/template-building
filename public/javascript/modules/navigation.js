function openNav(nav) {
	if (!nav) return;
	const linksContainer = nav.getElementsByClassName('navbar__links-container')[0];

	linksContainer.classList.remove('navbar__links-container--off-screen');

	nav.classList.toggle('navbar--nav-open');
	const body = document.getElementsByTagName('body')[0];
	body.classList.toggle('navbar--nav-open');
	if (nav.classList.contains('navbar--nav-open')) {
		body.classList.add('navbar--transitioning');
		setTimeout(() => {
			body.classList.remove('navbar--transitioning');
		}, 700);
	}
	if (!nav.classList.contains('navbar--nav-open')) {
		body.classList.add('navbar--transitioning');
		setTimeout(() => {
			body.classList.remove('navbar--transitioning');
			linksContainer.classList.add('navbar__links-container--off-screen');
		}, 700);
	}
}

export default openNav;
