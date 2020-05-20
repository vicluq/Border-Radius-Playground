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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/textArea.js
// textarea css display
const textareaCSS = document.querySelector("#cssText");
const copyBut = document.querySelector("#copyBut");

//CSS DIsplay function to be called after every onchange of the inputs

const displayCSS = () => {
  textareaCSS.innerHTML = `
  /* border radius */
  border-top-left-radius: ${square.style.borderTopLeftRadius || "0"};
  border-top-right-radius: ${square.style.borderTopRightRadius || "0"};
  border-bottom-left-radius: ${square.style.borderBottomLeftRadius || "0"};
  border-bottom-right-radius: ${square.style.borderBottomRightRadius || "0"};

  /* eliptical borders */
  border-start-start-radius: ${square.style.borderStartStartRadius || "0"};
  border-start-end-radius: ${square.style.borderStartEndRadius || "0"};
  border-end-start-radius: ${square.style.borderEndStartRadius || "0"};
  border-end-end-radius: ${square.style.borderEndEndRadius || "0"};
  `;
  textareaCSS.value = textareaCSS.innerHTML;
};

copyBut.onclick = (event) => {
  textareaCSS.select();
  document.execCommand("copy", true);
};

// EXTERNAL MODULE: ./src/index.scss
var src = __webpack_require__(0);

// CONCATENATED MODULE: ./src/script.js




//getting borders input reference
const border_top_left = document.getElementById("border-top-left");
const border_top_right = document.getElementById("border-top-right");
const border_bottom_left = document.getElementById("border-bottom-left");
const border_bottom_right = document.getElementById("border-bottom-right");

// Eliptical Borders
const border_start_start_radius = document.getElementById(
  "border-start-start-radius"
);
const border_start_end_radius = document.getElementById(
  "border-start-end-radius"
);
const border_end_start_radius = document.getElementById(
  "border-end-start-radius"
);
const border_end_end_radius = document.getElementById("border-end-end-radius");

//the target square
const script_square = document.querySelector("#square");

border_top_left.onchange = () => {
  script_square.style.borderTopLeftRadius = `${border_top_left.value}px`;
  displayCSS();
};

border_top_right.onchange = () => {
  script_square.style.borderTopRightRadius = `${border_top_right.value}px`;
  displayCSS();
};

border_bottom_left.onchange = () => {
  script_square.style.borderBottomLeftRadius = `${border_bottom_left.value}px`;
  displayCSS();
};

border_bottom_right.onchange = () => {
  script_square.style.borderBottomRightRadius = `${border_bottom_right.value}px`;
  displayCSS();
};

//Eliptical borders input events
border_start_start_radius.onchange = () => {
  script_square.style.borderStartStartRadius = `${border_start_start_radius.value}px`;
  displayCSS();
};

border_start_end_radius.onchange = () => {
  script_square.style.borderStartEndRadius = `${border_start_end_radius.value}px`;
  displayCSS();
};

border_end_start_radius.onchange = () => {
  script_square.style.borderEndStartRadius = `${border_end_start_radius.value}px`;
  displayCSS();
};

border_end_end_radius.onchange = () => {
  script_square.style.borderEndEndRadius = `${border_end_end_radius.value}px`;
  displayCSS();
};

// Options

const enableMetrics = document.querySelector("#metricsBut");
const metrics = document.querySelector("#metrics");

enableMetrics.onclick = function () {
  metrics.classList.toggle("enabled");
  enableMetrics.classList.toggle("enabled");
  if (metrics.classList.contains("enabled")) {
    enableMetrics.innerText = "Turn Off";
    metrics.style.border = "3px dashed rgb(160, 193, 206)";
  } else {
    enableMetrics.innerText = "Turn On";
    metrics.style.border = "none";
  }
};

const heightInput = document.querySelector("#height");
const widthtInput = document.querySelector("#width");

heightInput.oninput = function (event) {
  metrics.style.height = `${heightInput.value}px`;
};
widthtInput.oninput = function (event) {
  metrics.style.width = `${widthtInput.value}px`;
};


/***/ })
/******/ ]);