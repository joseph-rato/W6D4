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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nfunction DOMNodeCollection (arrayHTMLELs) {\n  this.htmlstuff = arrayHTMLELs;\n}\n\nDOMNodeCollection.prototype.html = function (str) {\n  if(str === undefined) {\n    return this.innerHTML;\n  } else {\n    this.innerHTML = str;\n  }\n};\n\nDOMNodeCollection.prototype.empty = function () {\n  this.innerHTML = \"\";\n};\n\nDOMNodeCollection.prototype.append = function (el) {\n  if ((typeof el === 'object') && !(el instanceof DOMNodeCollection)) {\n    el = $l(el);\n  }\n\n  if (typeof el === 'string') {\n    this.each((htmlstuff) => {\n      htmlstuff.innerHTML += el;\n    });\n  } else if (el instanceof DOMNodeCollection) {\n    this.each((htmlstuff) => {\n      el.each((childNode) => {\n        htmlstuff.appendChild(childNode.cloneNode(true));\n      });\n    });\n  }\n};\n\nDOMNodeCollection.prototype.attr = function(key , val) {\n  let arrKeys = [];\n  if(typeof val === 'string') {\n    htmlstuff.each( (el) => {\n      el.setAttribute(key, val);\n    });\n  } else {\n    return this.htmlstuff[0].getAttribute(key);\n  }\n};\n\nDOMNodeCollection.prototype.addClass = function (className) {\n  this.each(node => {\n    node.classList.add(className);\n  });\n};\n\nDOMNodeCollection.prototype.removeClass = function (className) {\n  this.each(node => {\n    node.classList.remove(className);\n  });\n};\n\nDOMNodeCollection.prototype.children = function () {\n  let result = [];\n  if (this.children.length === 0) {\n    return [];\n  }\n  this.htmlstuff.each( (node) => {\n    result.push(node);\n    result.concat(Array.fron(node.children));\n  });\n  return new DOMNodeCollection(result);\n};\n\nDOMNodeCollection.prototype.parents = function () {\n  let result = [];\n\n  this.htmlstuff.each((node) => {\n    result.push(node.parentNode);\n  });\n\n  return new DOMNodeCollection(result);\n};\n\nDOMNodeCollection.prototype.find = function() {\n\n};\n\nmodule.exports = DOMNodeCollection;\n\n\n//# sourceURL=webpack:///./lib/dom_node_collection.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./lib/dom_node_collection.js\");\n\nwindow.$l = (arg) => {\n  if (arg.constructor.name === 'String') {\n    let args =  document.querySelectorAll(arg);\n    let htmlArray = $(args).toArray();\n    return new DOMNodeCollection(htmlArray);\n  }\n  else if (arg.constructor.name === \"Array\") {\n    return new DOMNodeCollection(arg);\n  }\n};\n\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ })

/******/ });