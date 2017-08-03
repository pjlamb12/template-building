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
html.addEventListener('resize', function () {
	var width = window.width;
	if (width > 768) {
		document.getElementById('links-container').style.display = 'block';
	}
});

/***/ })
])
//# sourceMappingURL=0.61640a31d64fc9d5b799.hot-update.js.map