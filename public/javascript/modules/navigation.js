import { $, $$ } from '../modules/bling';

function openNav(nav) {
	if (!nav) return;
	console.log({ nav, id: nav.id });
	const slideout = $(`#${nav.id}-slidenav`);
	console.log('slideout: ', slideout);
	if (!slideout) return;

	nav.classList.toggle('navbar--nav-open');
	slideout.classList.toggle('slidenav--open');
}

export default openNav;
