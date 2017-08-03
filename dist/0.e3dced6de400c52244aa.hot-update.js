webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

function openMainNav(nav) {
	if (!nav) return;

	nav.classList.toggle('main-nav-open');
	var body = Array.isArray(document.getElementsByTagName('body')) ? document.getElementsByTagName('body')[0] : document.getElementsByTagName('body');

	body.classList.toggle('main-nav-open');
}

var mainNav = document.getElementById('main-nav');
mainNav.addEventListener('click', function () {
	return openMainNav(mainNav);
});

/***/ })
])
//# sourceMappingURL=0.e3dced6de400c52244aa.hot-update.js.map