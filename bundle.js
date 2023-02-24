/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");

var cards = Array.from(document.querySelectorAll('.card'));
var classes = ['bart', 'crusty', 'crazy-doctor', 'willi', 'homer', 'lisa', 'maggie', 'marge', 'milhous', 'smithers', 'bart', 'crusty', 'crazy-doctor', 'willi', 'homer', 'lisa', 'maggie', 'marge', 'milhous', 'smithers'];
var pairs = [];
var openCards = [];
function cardRandomDistrib() {
    cards.forEach(function (card) {
        var num = Math.floor(Math.random() * (classes.length));
        card.classList.add(classes[num]);
        classes.splice(num, 1);
    });
}
window.addEventListener('load', cardRandomDistrib);
cards.forEach(function (card) {
    card.addEventListener('click', function () {
        var _this = this;
        if (!card.classList.contains('inverted')) {
            this.style.animation = 'turning ease-out 850ms forwards';
            pairs.push(card.className);
            setTimeout(function () {
                _this.classList.add('inverted');
            }, 300);
        }
    });
});
cards.forEach(function (card) {
    card.addEventListener('click', function () {
        if (pairs.length % 2 === 0) {
            if (pairs.length !== 0) {
                cards.forEach(function (card) {
                    card.style.pointerEvents = 'none';
                });
                setTimeout(function () {
                    cards.forEach(function (card) {
                        card.style.pointerEvents = 'auto';
                    });
                }, 1150);
            }
            if (pairs[pairs.length - 1] !== pairs[pairs.length - 2]) {
                setTimeout(function () {
                    cards.map(function (elem) {
                        if ((elem.classList.contains(pairs[pairs.length - 1].slice(5)) || elem.classList.contains(pairs[pairs.length - 2].slice(5))) && elem.classList.contains('inverted')) {
                            elem.style.animation = 'turningBack ease-out 850ms forwards';
                            setTimeout(function () {
                                elem.classList.remove('inverted');
                            }, 300);
                        }
                    });
                }, 1000);
            }
            else {
                openCards.push(pairs[pairs.length - 1].slice(5));
                if (openCards.length === 10) {
                    setTimeout(function () {
                        cards.map(function (elem) {
                            elem.style.animation = 'turningBack ease-out 850ms forwards';
                            elem.className = 'card';
                            pairs = [];
                            openCards = [];
                            classes = ['bart', 'crusty', 'crazy-doctor', 'willi', 'homer', 'lisa', 'maggie', 'marge', 'milhous', 'smithers', 'bart', 'crusty', 'crazy-doctor', 'willi', 'homer', 'lisa', 'maggie', 'marge', 'milhous', 'smithers'];
                        });
                        cardRandomDistrib();
                    }, 1500);
                }
            }
        }
    });
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map