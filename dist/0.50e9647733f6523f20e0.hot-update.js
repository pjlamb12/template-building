webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

function openMainNav(nav) {
	if (!nav) return;

	nav.classList.toggle('main-nav-open');
	var body = document.getElementsByTagName('body')[0];
	body.classList.toggle('main-nav-open');
}

var mainNav = document.getElementById('main-nav');
mainNav.addEventListener('click', function () {
	return openMainNav(mainNav);
});

/***/ })
])
//# sourceMappingURL=0.50e9647733f6523f20e0.hot-update.js.map