/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calculator */ "./src/js/modules/calculator.js");

window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  Object(_modules_calculator__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

/***/ }),

/***/ "./src/js/modules/calculator.js":
/*!**************************************!*\
  !*** ./src/js/modules/calculator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const calculator = () => {
  let wrapper = document.querySelector('.wrapper'),
      result = document.querySelector('.result'),
      total = 0,
      sign,
      arrayOfNum;

  function calc(result) {
    let res;
    sign = result.match(/[*+/-]/g);
    console.log(sign);
    arrayOfNum = result.split(/[*+/-]/g);
    console.log(arrayOfNum);

    for (let i = 0; i < sign.length; i++) {
      switch (sign[i]) {
        case '+':
          res = Number(arrayOfNum[i]) + Number(arrayOfNum[i + 1]);
          break;

        case '/':
          res = Number(arrayOfNum[i]) / Number(arrayOfNum[i + 1]);
          break;

        case '*':
          res = Number(arrayOfNum[i]) * Number(arrayOfNum[i + 1]);
          break;

        case '-':
          res = Number(arrayOfNum[i]) - Number(arrayOfNum[i + 1]);
          break;
      }
    }

    return res;
  }

  wrapper.addEventListener('click', e => {
    e.preventDefault();

    if (result.textContent == '0') {
      result.textContent = '';
    }

    const target = e.target;

    if (e.target && target.classList.contains('number')) {
      result.textContent = result.textContent + e.target.value;
    }

    if (e.target && target.classList.contains('dot')) {
      if (result.textContent.match(/\./)) {
        result.textContent = `${result.textContent}`;
      } else {
        result.textContent = `${result.textContent}.`;
      }
    }

    if (e.target && target.classList.contains('invert')) {
      result.textContent = result.textContent * -1;
    }

    if (e.target && target.classList.contains('equals')) {
      total = calc(result.textContent);
      result.textContent = `${total}`;
    }

    if (e.target && target.classList.contains('backspace')) {
      if (result.textContent.length > 1) {
        result.textContent = `${result.textContent.slice(0, -1)}`;
      } else {
        result.textContent = "0";
      }
    }

    if (e.target && target.classList.contains('clear')) {
      result.textContent = "0";
    }

    switch (target.value) {
      case '+':
        if (result.textContent.match(/\+/)) {
          result.textContent = `${result.textContent}`;
        } else {
          result.textContent = `${result.textContent}${target.value}`;
        }

        break;

      case '/':
        if (result.textContent.match(/\//)) {
          result.textContent = `${result.textContent}`;
        } else {
          result.textContent = `${result.textContent}${target.value}`;
        }

        break;

      case '*':
        if (result.textContent.match(/\*/)) {
          result.textContent = `${result.textContent}`;
        } else {
          result.textContent = `${result.textContent}${target.value}`;
        }

        break;

      case '-':
        if (result.textContent.match(/-/)) {
          result.textContent = `${result.textContent}`;
        } else {
          result.textContent = `${result.textContent}${target.value}`;
        }

        break;

      /* case 'dot':
          if (result.textContent.match(/\./)) {
              result.textContent = `${result.textContent}`;
          } else {
              result.textContent = `${result.textContent}.`;
          }
      break;
      case 'invert':
          result.textContent = result.textContent * (-1);
      break;
      case '=': 
          total = calc(result.textContent);
          result.textContent = `${total}`
      break;
      case 'back':
          result.textContent = `${result.textContent.slice(0, -1)}`;
      break;
      case 'clear':
          result.textContent = "0";
      break; */
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (calculator);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map