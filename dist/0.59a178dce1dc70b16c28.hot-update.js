webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

function openMainNav(nav, linksContainer) {
	if (!nav || !linksContainer) return;

	linksContainer.style.display = 'block';

	nav.classList.toggle('main-nav-open');
	var body = document.getElementsByTagName('body')[0];
	body.classList.toggle('main-nav-open');
	if (!nav.classList.contains('main-nav-open')) {
		setTimeout(function () {
			linksContainer.style.display = 'none';
		}, 700);
	}
}

var mainNav = document.getElementById('main-nav');
var linksContainer = document.getElementById('links-container');
mainNav.addEventListener('click', function () {
	return openMainNav(mainNav, linksContainer);
});

var html = document.getElementsByTagName('html')[0];
html.addEventListener('resize', function () {});

/***/ })
])
//# sourceMappingURL=0.59a178dce1dc70b16c28.hot-update.js.map