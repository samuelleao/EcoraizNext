module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/product.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/buttonWhatsapp.js":
/*!**************************************!*\
  !*** ./components/buttonWhatsapp.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\conta\\Desktop\\EcoraizNext\\frontEnd\\components\\buttonWhatsapp.js";



function ButtonWhatsapp() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "buttonWpp",
    children: ["Falar no whatsapp", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaWhatsapp"], {
      size: 20,
      className: "ml-2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ButtonWhatsapp);

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_logo_logoSecond_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/logo/logoSecond.png */ "./images/logo/logoSecond.png");
/* harmony import */ var _images_logo_logoSecond_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_logo_logoSecond_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_copyright_logo_vibecriativa_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/copyright/logo_vibecriativa.png */ "./images/copyright/logo_vibecriativa.png");
/* harmony import */ var _images_copyright_logo_vibecriativa_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_copyright_logo_vibecriativa_png__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\conta\\Desktop\\EcoraizNext\\frontEnd\\components\\footer.js";






function Footer() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: 12,
          lg: 12,
          md: 12,
          className: "d-flex justify-content-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: _images_logo_logoSecond_png__WEBPACK_IMPORTED_MODULE_4___default.a,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: 12,
          lg: 12,
          md: 12,
          className: "d-flex justify-content-center mt-5",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "social-medias",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaFacebookF"], {
                size: 15
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaInstagram"], {
                size: 15
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaYoutube"], {
                size: 15
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        className: "mt-5",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          lg: 4,
          xs: "12",
          className: "d-flex justify-content-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                className: "title title-little color-black",
                children: "Institucional"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 34
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "paragraph p-medium",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "color-grey",
                href: "",
                children: "Sobre n\xF3s"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 64
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "paragraph p-medium",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "color-grey",
                href: "",
                children: "Blog"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 64
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          lg: 4,
          xs: "12",
          className: "d-flex justify-content-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                className: "title title-little color-black",
                children: "M\xEDdias sociais"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "paragraph p-medium",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "color-grey",
                href: "",
                children: "Facebook"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 64
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "paragraph p-medium",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "color-grey",
                href: "",
                children: "Instagram"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 64
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          lg: 4,
          xs: "12",
          className: "d-flex justify-content-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                className: "title title-little color-black",
                children: "Contatos"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "paragraph p-medium",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "color-grey",
                href: "",
                children: "Fale conosco"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 64
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "paragraph p-medium",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "color-grey",
                href: "",
                children: "(84) 98845-5223"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 64
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "paragraph p-medium",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "color-grey",
                href: "",
                children: "(84) 3662-5566"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 64
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          lg: 12,
          className: "d-flex justify-content-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "paragraph p-medium color-grey",
            children: ["Fazenda Tamatanduba ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 49
            }, this), "CPR / NIRF 50655779"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          lg: 12,
          className: "d-flex justify-content-center mt-5 mb-5",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: _images_copyright_logo_vibecriativa_png__WEBPACK_IMPORTED_MODULE_5___default.a
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/head.js":
/*!****************************!*\
  !*** ./components/head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\conta\\Desktop\\EcoraizNext\\frontEnd\\components\\head.js";


function HeadSeo(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "apple-touch-icon-precomposed",
      sizes: "57x57",
      href: __webpack_require__(/*! ../images/favicons/apple-touch-icon-57x57.png */ "./images/favicons/apple-touch-icon-57x57.png")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "apple-touch-icon-precomposed",
      sizes: "114x114",
      href: __webpack_require__(/*! ../images/favicons/apple-touch-icon-114x114.png */ "./images/favicons/apple-touch-icon-114x114.png")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "apple-touch-icon-precomposed",
      sizes: "72x72",
      href: __webpack_require__(/*! ../images/favicons/apple-touch-icon-72x72.png */ "./images/favicons/apple-touch-icon-72x72.png")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "apple-touch-icon-precomposed",
      sizes: "144x144",
      href: __webpack_require__(/*! ../images/favicons/apple-touch-icon-144x144.png */ "./images/favicons/apple-touch-icon-144x144.png")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "apple-touch-icon-precomposed",
      sizes: "60x60",
      href: __webpack_require__(/*! ../images/favicons/apple-touch-icon-60x60.png */ "./images/favicons/apple-touch-icon-60x60.png")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "apple-touch-icon-precomposed",
      sizes: "120x120",
      href: __webpack_require__(/*! ../images/favicons/apple-touch-icon-120x120.png */ "./images/favicons/apple-touch-icon-120x120.png")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "apple-touch-icon-precomposed",
      sizes: "76x76",
      href: __webpack_require__(/*! ../images/favicons/apple-touch-icon-76x76.png */ "./images/favicons/apple-touch-icon-76x76.png")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "apple-touch-icon-precomposed",
      sizes: "152x152",
      href: __webpack_require__(/*! ../images/favicons/apple-touch-icon-152x152.png */ "./images/favicons/apple-touch-icon-152x152.png")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "icon",
      type: "image/png",
      href: __webpack_require__(/*! ../images/favicons/favicon-196x196.png */ "./images/favicons/favicon-196x196.png"),
      sizes: "196x196"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "icon",
      type: "image/png",
      href: __webpack_require__(/*! ../images/favicons/favicon-96x96.png */ "./images/favicons/favicon-96x96.png"),
      sizes: "96x96"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "icon",
      type: "image/png",
      href: __webpack_require__(/*! ../images/favicons/favicon-32x32.png */ "./images/favicons/favicon-32x32.png"),
      sizes: "32x32"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "icon",
      type: "image/png",
      href: __webpack_require__(/*! ../images/favicons/favicon-16x16.png */ "./images/favicons/favicon-16x16.png"),
      sizes: "16x16"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "icon",
      type: "image/png",
      href: __webpack_require__(/*! ../images/favicons/favicon-128.png */ "./images/favicons/favicon-128.png"),
      sizes: "128x128"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "application-name",
      content: "\xA0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "msapplication-TileColor",
      content: "#006ECB"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "msapplication-TileImage",
      content: "mstile-144x144.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "msapplication-square70x70logo",
      content: "mstile-70x70.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "msapplication-square150x150logo",
      content: "mstile-150x150.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "msapplication-wide310x150logo",
      content: "mstile-310x150.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "msapplication-square310x310logo",
      content: "mstile-310x310.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      "http-equiv": "Content-Type",
      content: "text/html;charset=UTF-8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "description",
      content: "Empresa especializada na comercializa\xE7\xE3o e consultoria no segmento de planos de sa\xFAde no Rio Grande do Norte e Pernambuco."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "keywords",
      content: "corretora,compare,sa\xFAde,planos,odonto,ans,natal,recife,PE,RN,amil,unimed,bradesco,hapvida"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "audience",
      content: "All"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "URL",
      content: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "rating",
      content: "General"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "objectType",
      content: "Document"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "googlebot",
      content: "index, follow"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "robots",
      content: "index, follow,all"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "revisit-after",
      content: "7 Days"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "revisit",
      content: "7 days"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "classification",
      CONTENT: "Engenharia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "resource-type",
      CONTENT: "document"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "robots",
      CONTENT: "index  follow"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      content: "global",
      name: "distribution"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "distribution",
      content: "global"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "Googlebot",
      content: "all"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "robots",
      content: "index follow"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "author",
      content: "Vibecriativa Marketing Digital https://www.vibecriativa.com.br"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "UIDesign",
      content: "Samuel Le\xE3o - samueldasilva460@gmail.com"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "copyright",
      content: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "base_url",
      content: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "language",
      content: "pt-br"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "country",
      content: "BRA"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      "http-equiv": "x-dns-prefetch-control",
      content: "on"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "og:locale",
      content: "pt_BR"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "og:url",
      content: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "og:site_name",
      content: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "twitter:card",
      content: "summary_large_image"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "apple-mobile-web-app-capable",
      content: "yes"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (HeadSeo);

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\conta\\Desktop\\EcoraizNext\\frontEnd\\components\\header.js";





function Header() {
  function showMenuMobile() {
    const menu_button_mobile = document.querySelector('.menu_button_mobile');
    const menu = document.querySelector('.menu-links');

    if (menu_button_mobile.classList.contains('menu_button_active')) {
      menu_button_mobile.classList.remove('menu_button_active');
      menu.classList.remove('show_menu');
      document.querySelector('body').style = 'overflow-y: auto';
    } else {
      menu_button_mobile.classList.add('menu_button_active');
      menu.classList.add('show_menu');
      document.querySelector('body').style = 'overflow-y: hidden';
    }
  }

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  function isActive(route) {
    if (route == router.pathname) {
      return "nav-link-active";
    } else {
      return '';
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    className: "navbar fixed-top",
    expand: "lg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Brand, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: __webpack_require__(/*! ../images/logo/logoPrimary.png */ "./images/logo/logoPrimary.png"),
          alt: "Ecoraiz",
          title: "Ecoraiz"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "menu_button_mobile",
        type: "button",
        onClick: showMenuMobile,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "menu_button_mobile_icon_custom"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "menu_button_mobile_icon_custom"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "menu_button_mobile_icon_custom"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
        className: "ml-auto align-items-center menu-links",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "nav-link",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: `link ${isActive('/')}`,
              children: "In\xEDcio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "nav-link",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/about",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: `link ${isActive('/about')}`,
              children: "Sobre"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "nav-link",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: `link ${isActive('')}`,
              children: "Receitas"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "nav-link",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/blog",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: `link ${isActive('/blog')}`,
              children: "Blog"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "nav-link",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: `link ${isActive('')}`,
              children: "Contatos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/product",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              className: "bt-standard bg-color-second bt-standard-second m-0",
              children: "Produto"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./images/copyright/logo_vibecriativa.png":
/*!************************************************!*\
  !*** ./images/copyright/logo_vibecriativa.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/favicons/apple-touch-icon-114x114.png":
/*!******************************************************!*\
  !*** ./images/favicons/apple-touch-icon-114x114.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/apple-touch-icon-114x114-a30a4922e8d4afbab267756c9421a09e.png";

/***/ }),

/***/ "./images/favicons/apple-touch-icon-120x120.png":
/*!******************************************************!*\
  !*** ./images/favicons/apple-touch-icon-120x120.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/apple-touch-icon-120x120-224e9b8674f2d4ac12fecca7a8585030.png";

/***/ }),

/***/ "./images/favicons/apple-touch-icon-144x144.png":
/*!******************************************************!*\
  !*** ./images/favicons/apple-touch-icon-144x144.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/apple-touch-icon-144x144-1b18d39b3349b74881acd579d38113d5.png";

/***/ }),

/***/ "./images/favicons/apple-touch-icon-152x152.png":
/*!******************************************************!*\
  !*** ./images/favicons/apple-touch-icon-152x152.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/apple-touch-icon-152x152-9e92121f5d217acf12ff51aba50175e4.png";

/***/ }),

/***/ "./images/favicons/apple-touch-icon-57x57.png":
/*!****************************************************!*\
  !*** ./images/favicons/apple-touch-icon-57x57.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/favicons/apple-touch-icon-60x60.png":
/*!****************************************************!*\
  !*** ./images/favicons/apple-touch-icon-60x60.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/favicons/apple-touch-icon-72x72.png":
/*!****************************************************!*\
  !*** ./images/favicons/apple-touch-icon-72x72.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/favicons/apple-touch-icon-76x76.png":
/*!****************************************************!*\
  !*** ./images/favicons/apple-touch-icon-76x76.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/favicons/favicon-128.png":
/*!*****************************************!*\
  !*** ./images/favicons/favicon-128.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/favicon-128-a799589525f636f838e952204f90d2f9.png";

/***/ }),

/***/ "./images/favicons/favicon-16x16.png":
/*!*******************************************!*\
  !*** ./images/favicons/favicon-16x16.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACD0lEQVQ4jY3ST2hUVxQG8N99MxTJZEr894xPKCUUV5JREaEuXBUX3bkSkadYSqHYjQtXXQjduGmhFrpwp0zEiqKQRY10If5ZRCxFxkEkhBIKGcxgoRgTpE7e7SLPZCyz8MJZ3HPu+c73ne/yHufY6JbkeJYOvb3nWTqeZ+mXUOlLHmjUa3+3Fpfe5FmaNeq1N63FpV6ebfsghPARdjc+rG1u1GsrmMR0a3Hpj2rfoH3Yjx9xLvADWkI8JDqCEdEMlvEaLUjW2oM2TuQ7tqUYi4yVhSn8LLiELWV0A4/zLD20DsADzIjxq3LKMDTnF3qCZ6LfcQ2fYC7yG3YlkI9uTYreSg93sQczeLwGHY2hWsZ97MWtEMJP1XKbZxOVWdxBB2lgCPIdaSL6DFMxSSarPZO9SvH9xHx3eVX5qgP7cQAbsQk3y/38i4LQbnYW/hlkcei/5Fk6Ujafw4uSzUFsCvwaV106XEr9pdnpvqz0AzTqtZ2BvwSP8DlOoYcnGMfRcugXONmo15L+fyCE2E5WKu2VpBhGLjhden8GG0oLv0aGEdx7R0KfjG8IN4qieJYk4XK5j/P4Fg+bne53b98n/wfAcSw3OwtPkyTswiwuCKbxMT7Nt29d66sOANiM2xBpT3S6rT52c9gbwzrxQQBDgVcw0ekW71SCK6KharFOfBDA1cifA/JwHRsuPn++BvwfN8edmP+PtIAAAAAASUVORK5CYII="

/***/ }),

/***/ "./images/favicons/favicon-196x196.png":
/*!*********************************************!*\
  !*** ./images/favicons/favicon-196x196.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/favicon-196x196-16d138af6d02cd0d154d8ec2f095d8c5.png";

/***/ }),

/***/ "./images/favicons/favicon-32x32.png":
/*!*******************************************!*\
  !*** ./images/favicons/favicon-32x32.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/favicons/favicon-96x96.png":
/*!*******************************************!*\
  !*** ./images/favicons/favicon-96x96.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/favicon-96x96-d6cc96f6672596554ccdfe19520343e9.png";

/***/ }),

/***/ "./images/logo/logoPrimary.png":
/*!*************************************!*\
  !*** ./images/logo/logoPrimary.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/logo/logoSecond.png":
/*!************************************!*\
  !*** ./images/logo/logoSecond.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/product/differentials/1.png":
/*!********************************************!*\
  !*** ./images/product/differentials/1.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/1-636c19bad5038414be7bfa5006b9d556.png";

/***/ }),

/***/ "./images/product/differentials/2.png":
/*!********************************************!*\
  !*** ./images/product/differentials/2.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/2-4347405485d724d5670c0ab83d3c53d8.png";

/***/ }),

/***/ "./images/product/differentials/3.png":
/*!********************************************!*\
  !*** ./images/product/differentials/3.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/3-1b6f1a0a653b3663067829df0f984ddb.png";

/***/ }),

/***/ "./images/product/product-illustrator.png":
/*!************************************************!*\
  !*** ./images/product/product-illustrator.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/product-illustrator-706766dd1e1a7dd263a2221e7b77de47.png";

/***/ }),

/***/ "./images/video/play-video.svg":
/*!*************************************!*\
  !*** ./images/video/play-video.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODEiIGhlaWdodD0iODEiIHZpZXdCb3g9IjAgMCA4MSA4MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjQwLjUiIGN5PSI0MC41IiByPSIzOS41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4NCjxwYXRoIGQ9Ik02MCAzOC43NjhDNjEuMzMzMyAzOS41Mzc4IDYxLjMzMzMgNDEuNDYyMiA2MCA0Mi4yMzJMMzIuMjUgNTguMjUzNUMzMC45MTY3IDU5LjAyMzMgMjkuMjUgNTguMDYxMSAyOS4yNSA1Ni41MjE1VjI0LjQ3ODVDMjkuMjUgMjIuOTM4OSAzMC45MTY3IDIxLjk3NjcgMzIuMjUgMjIuNzQ2NUw2MCAzOC43NjhaIiBmaWxsPSIjRkZGN0Y3Ii8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (false) {}

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, options.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change(method, destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, options.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/product.js":
/*!**************************!*\
  !*** ./pages/product.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_buttonWhatsapp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/buttonWhatsapp */ "./components/buttonWhatsapp.js");
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/head */ "./components/head.js");

var _jsxFileName = "C:\\Users\\conta\\Desktop\\EcoraizNext\\frontEnd\\pages\\product.js";

 // import ReactFancyBox from 'react-fancybox';







function Product() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_head__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: 'Ecoraiz | Produto'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_header__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      id: "productPage",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "section1 position-relative",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 12,
              lg: 6,
              md: 12,
              className: "d-flex justify-content-center  flex-column",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "title-little color-primary",
                children: "Ecoraiz"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                className: "title-big  color-black",
                children: "O que \xE9?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "paragraph p-big color-grey",
                children: "Macaxeira Descascada, Embalada \xE0 V\xE1cuo e Congelada"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 12,
              lg: 6,
              md: 12,
              className: "d-flex justify-content-center align-items-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: __webpack_require__(/*! ../images/product/product-illustrator.png */ "./images/product/product-illustrator.png"),
                alt: "",
                title: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "section2 bg-light",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            xs: 12,
            lg: 12,
            md: 12,
            className: "d-flex justify-content-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "cards-differentials",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Img, {
                  variant: "top",
                  src: __webpack_require__(/*! ../images/product/differentials/1.png */ "./images/product/differentials/1.png")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      className: "title title-little",
                      children: "Qualidade"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 42,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 41,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "paragraph p-medium",
                      children: "Produtos cuidadosamente selecionados e beneficiados de acordo com um Controle de Qualidade, visando atender as expectativas do mercado consumidor."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 47,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Img, {
                  variant: "top",
                  src: __webpack_require__(/*! ../images/product/differentials/2.png */ "./images/product/differentials/2.png")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      className: "title title-little",
                      children: "Padroniza\xE7\xE3o"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 60,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "paragraph p-medium",
                      children: "Trabalho cont\xEDnuo com o objetivo de sele\xE7\xE3o das sementes, tratos culturais e irriga\xE7\xE3o, buscando uma padroniza\xE7\xE3o do Campo \xE0 Agroind\xFAstria.."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 65,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Img, {
                  variant: "top",
                  src: __webpack_require__(/*! ../images/product/differentials/3.png */ "./images/product/differentials/3.png")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      className: "title title-little",
                      children: "Praticidade"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 78,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "paragraph p-medium",
                      children: "Produtos beneficiados e prontos para o preparo no seu lar."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 83,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "title title-big text-left col-lg-6 col-12",
            children: ["Veja mais dos nossos produtos e ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "color-primary",
              children: "ambiente de produ\xE7\xE3o"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 115
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "gallery-grid mt-5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 12,
              lg: 6,
              md: 12,
              className: "mb-5",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "video",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
                  className: "border-radius-elements",
                  "data-filter_video": "video1",
                  src: "https://www.youtube-nocookie.com/embed/hWkYtZxpQUo",
                  allow: "accelerometer; autoplay; \r clipboard-write; encrypted-media; \r gyroscope; picture-in-picture"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "video-mask",
                  id: "video1",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: __webpack_require__(/*! ../images/video/play-video.svg */ "./images/video/play-video.svg")
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 12,
              lg: 6,
              md: 12,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "video",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
                  className: "border-radius-elements",
                  "data-filter_video": "video2",
                  src: "https://www.youtube.com/embed/U2dl07OnQy0",
                  allow: "accelerometer; autoplay; \r clipboard-write; encrypted-media; \r gyroscope; picture-in-picture"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "video-mask",
                  id: "video2",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: __webpack_require__(/*! ../images/video/play-video.svg */ "./images/video/play-video.svg")
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "bg-light illustration-branch-left section4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 12,
              lg: 6,
              md: 12,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
                className: "card-form",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      className: "paragraph ml-1",
                      children: "Nome"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 152,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
                      className: "mb-3",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Text, {
                          id: "basic-addon1",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaUser"], {
                            size: 18,
                            className: "color-grey"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 156,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 155,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 154,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
                        placeholder: "Ex: J\xFAlio Emiliano",
                        "aria-label": "Username",
                        "aria-describedby": "basic-addon1"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 159,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 153,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 151,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      className: "paragraph ml-1",
                      children: "Telefone"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 168,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
                      className: "mb-3",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Text, {
                          id: "basic-addon1",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaPhoneAlt"], {
                            size: 18,
                            className: "color-grey"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 172,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 171,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 170,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
                        placeholder: "Ex: (84) 00000-0000",
                        "aria-label": "Username",
                        "aria-describedby": "basic-addon1"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 175,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 169,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      className: "paragraph ml-1",
                      children: "Email"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 184,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
                      className: "mb-3",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Prepend, {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Text, {
                          id: "basic-addon1",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaEnvelope"], {
                            size: 18,
                            className: "color-grey"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 188,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 187,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 186,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
                        placeholder: "Ex: ana@gmail.com",
                        "aria-label": "Username",
                        "aria-describedby": "basic-addon1"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 191,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 185,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 183,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                    className: "bt-standard bg-color-green m-0 w-100 mt-3",
                    children: "Solicitar Produto"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 198,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 12,
              lg: 6,
              md: 12,
              className: "d-flex align-items-center second-column pt-lg-0 pb-lg-0 pt-5 pb-5 order-lg-last order-first",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  className: "title title-medium color-black",
                  children: ["Deseja adiquirir nosso", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 205,
                    columnNumber: 37
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "color-primary",
                    children: "produto?"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 206,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "paragraph p-big",
                  children: "Voc\xEA s\xF3 precisa de preencher o formul\xE1rio e voc\xEA estar\xE1 solicitando o Ecoraiz, e basta aguardar o retorno em seu email ou whatsapp"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 207,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_buttonWhatsapp__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9uV2hhdHNhcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2ltYWdlcy9jb3B5cmlnaHQvbG9nb192aWJlY3JpYXRpdmEucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLTExNHgxMTQucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLTEyMHgxMjAucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLTE0NHgxNDQucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLTE1MngxNTIucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLTU3eDU3LnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi02MHg2MC5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Zhdmljb25zL2FwcGxlLXRvdWNoLWljb24tNzJ4NzIucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLTc2eDc2LnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvZmF2aWNvbnMvZmF2aWNvbi0xMjgucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mYXZpY29ucy9mYXZpY29uLTE2eDE2LnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvZmF2aWNvbnMvZmF2aWNvbi0xOTZ4MTk2LnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvZmF2aWNvbnMvZmF2aWNvbi0zMngzMi5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Zhdmljb25zL2Zhdmljb24tOTZ4OTYucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9sb2dvL2xvZ29QcmltYXJ5LnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvbG9nby9sb2dvU2Vjb25kLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvcHJvZHVjdC9kaWZmZXJlbnRpYWxzLzEucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9wcm9kdWN0L2RpZmZlcmVudGlhbHMvMi5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3Byb2R1Y3QvZGlmZmVyZW50aWFscy8zLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvcHJvZHVjdC9wcm9kdWN0LWlsbHVzdHJhdG9yLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvdmlkZW8vcGxheS12aWRlby5zdmciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkJ1dHRvbldoYXRzYXBwIiwiRm9vdGVyIiwiTG9nb1NlY29uZCIsIkxvZ29WaWJlQ3JpYXRpdmEiLCJIZWFkU2VvIiwicHJvcHMiLCJyZXF1aXJlIiwidGl0bGUiLCJIZWFkZXIiLCJzaG93TWVudU1vYmlsZSIsIm1lbnVfYnV0dG9uX21vYmlsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsInN0eWxlIiwiYWRkIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNBY3RpdmUiLCJyb3V0ZSIsInBhdGhuYW1lIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiY29uc29sZSIsImVyciIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJyZXNvbHZlZEFzIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwidmFsdWUiLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwiZXNjYXBlUGF0aERlbGltaXRlcnMiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlQXMiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkRfRVJST1IiLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwic3NnNDA0IiwicGFnZSIsIm1vZCIsImNhY2hlZFJvdXRlSW5mbyIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiUHJvbWlzZSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJkYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJQcm9kdWN0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFD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O0FBQUssZ0JBQUUsRUFBRSxFQUFUO0FBQWEsZ0JBQUUsRUFBRSxDQUFqQjtBQUFvQixnQkFBRSxFQUFFLEVBQXhCO0FBQTRCLHVCQUFTLEVBQUMsNkZBQXRDO0FBQUEscUNBQ0k7QUFBQSx3Q0FDSTtBQUFJLDJCQUFTLEVBQUMsZ0NBQWQ7QUFBQSxvRUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURBLGVBRUE7QUFBTSw2QkFBUyxFQUFDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixlQUlJO0FBQUcsMkJBQVMsRUFBQyxpQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXZESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhJSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQTJNSSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM01KLGVBNE1JLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1TUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnTkg7O0FBRWM4VCxzRUFBZixFOzs7Ozs7Ozs7OztBQzlOQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9wcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9wcm9kdWN0LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGYVdoYXRzYXBwIH0gIGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5cclxuZnVuY3Rpb24gQnV0dG9uV2hhdHNhcHAoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uV3BwJz5cclxuICAgICAgICAgICAgRmFsYXIgbm8gd2hhdHNhcHBcclxuICAgICAgICAgICAgPEZhV2hhdHNhcHAgc2l6ZT17MjB9IGNsYXNzTmFtZT0nbWwtMicgLz4gICAgXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25XaGF0c2FwcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgRmFGYWNlYm9va0YsIEZhSW5zdGFncmFtLCBGYVlvdXR1YmUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCBMb2dvU2Vjb25kIGZyb20gJy4uL2ltYWdlcy9sb2dvL2xvZ29TZWNvbmQucG5nJztcclxuaW1wb3J0IExvZ29WaWJlQ3JpYXRpdmEgZnJvbSAnLi4vaW1hZ2VzL2NvcHlyaWdodC9sb2dvX3ZpYmVjcmlhdGl2YS5wbmcnO1xyXG5cclxuZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gbGc9ezEyfSBtZD17MTJ9IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17TG9nb1NlY29uZH0gYWx0PScnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IGxnPXsxMn0gbWQ9ezEyfSBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc29jaWFsLW1lZGlhcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUZhY2Vib29rRiBzaXplPXsxNX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9Jyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhSW5zdGFncmFtIHNpemU9ezE1fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFZb3V0dWJlIHNpemU9ezE1fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9J210LTUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezR9IHhzPScxMicgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gPGg1IGNsYXNzTmFtZT0ndGl0bGUgdGl0bGUtbGl0dGxlIGNvbG9yLWJsYWNrJz5JbnN0aXR1Y2lvbmFsPC9oNT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ncGFyYWdyYXBoIHAtbWVkaXVtJz48YSBjbGFzc05hbWU9J2NvbG9yLWdyZXknIGhyZWY9Jyc+U29icmUgbsOzczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ncGFyYWdyYXBoIHAtbWVkaXVtJz48YSBjbGFzc05hbWU9J2NvbG9yLWdyZXknIGhyZWY9Jyc+QmxvZzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezR9IHhzPScxMicgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aDUgY2xhc3NOYW1lPSd0aXRsZSB0aXRsZS1saXR0bGUgY29sb3ItYmxhY2snPk3DrWRpYXMgc29jaWFpczwvaDU+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3BhcmFncmFwaCBwLW1lZGl1bSc+PGEgY2xhc3NOYW1lPSdjb2xvci1ncmV5JyBocmVmPScnPkZhY2Vib29rPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcC1tZWRpdW0nPjxhIGNsYXNzTmFtZT0nY29sb3ItZ3JleScgaHJlZj0nJz5JbnN0YWdyYW08L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXs0fSB4cz0nMTInIGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGg1IGNsYXNzTmFtZT0ndGl0bGUgdGl0bGUtbGl0dGxlIGNvbG9yLWJsYWNrJz5Db250YXRvczwvaDU+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3BhcmFncmFwaCBwLW1lZGl1bSc+PGEgY2xhc3NOYW1lPSdjb2xvci1ncmV5JyBocmVmPScnPkZhbGUgY29ub3NjbzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ncGFyYWdyYXBoIHAtbWVkaXVtJz48YSBjbGFzc05hbWU9J2NvbG9yLWdyZXknIGhyZWY9Jyc+KDg0KSA5ODg0NS01MjIzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcC1tZWRpdW0nPjxhIGNsYXNzTmFtZT0nY29sb3ItZ3JleScgaHJlZj0nJz4oODQpIDM2NjItNTU2NjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezEyfSBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwYXJhZ3JhcGggcC1tZWRpdW0gY29sb3ItZ3JleSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGYXplbmRhIFRhbWF0YW5kdWJhIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUFIgLyBOSVJGIDUwNjU1Nzc5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsxMn0gY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC01IG1iLTUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtMb2dvVmliZUNyaWF0aXZhfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9mb290ZXIgPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmZ1bmN0aW9uIEhlYWRTZW8ocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbi1wcmVjb21wb3NlZCcgc2l6ZXM9JzU3eDU3JyBocmVmPXtyZXF1aXJlKCcuLi9pbWFnZXMvZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi01N3g1Ny5wbmcnKX0gLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uLXByZWNvbXBvc2VkJyBzaXplcz0nMTE0eDExNCcgaHJlZj17cmVxdWlyZSgnLi4vaW1hZ2VzL2Zhdmljb25zL2FwcGxlLXRvdWNoLWljb24tMTE0eDExNC5wbmcnKX0gLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uLXByZWNvbXBvc2VkJyBzaXplcz0nNzJ4NzInIGhyZWY9e3JlcXVpcmUoJy4uL2ltYWdlcy9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLTcyeDcyLnBuZycpfSAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24tcHJlY29tcG9zZWQnIHNpemVzPScxNDR4MTQ0JyBocmVmPXtyZXF1aXJlKCcuLi9pbWFnZXMvZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xNDR4MTQ0LnBuZycpfSAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24tcHJlY29tcG9zZWQnIHNpemVzPSc2MHg2MCcgaHJlZj17cmVxdWlyZSgnLi4vaW1hZ2VzL2Zhdmljb25zL2FwcGxlLXRvdWNoLWljb24tNjB4NjAucG5nJyl9IC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbi1wcmVjb21wb3NlZCcgc2l6ZXM9JzEyMHgxMjAnIGhyZWY9e3JlcXVpcmUoJy4uL2ltYWdlcy9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLTEyMHgxMjAucG5nJyl9IC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbi1wcmVjb21wb3NlZCcgc2l6ZXM9Jzc2eDc2JyBocmVmPXtyZXF1aXJlKCcuLi9pbWFnZXMvZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi03Nng3Ni5wbmcnKX0gLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uLXByZWNvbXBvc2VkJyBzaXplcz0nMTUyeDE1MicgaHJlZj17cmVxdWlyZSgnLi4vaW1hZ2VzL2Zhdmljb25zL2FwcGxlLXRvdWNoLWljb24tMTUyeDE1Mi5wbmcnKX0gLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPSdpY29uJyB0eXBlPSdpbWFnZS9wbmcnIGhyZWY9e3JlcXVpcmUoJy4uL2ltYWdlcy9mYXZpY29ucy9mYXZpY29uLTE5NngxOTYucG5nJyl9IHNpemVzPScxOTZ4MTk2JyAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9J2ljb24nIHR5cGU9J2ltYWdlL3BuZycgaHJlZj17cmVxdWlyZSgnLi4vaW1hZ2VzL2Zhdmljb25zL2Zhdmljb24tOTZ4OTYucG5nJyl9IHNpemVzPSc5Nng5NicgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPSdpY29uJyB0eXBlPSdpbWFnZS9wbmcnIGhyZWY9e3JlcXVpcmUoJy4uL2ltYWdlcy9mYXZpY29ucy9mYXZpY29uLTMyeDMyLnBuZycpfSBzaXplcz0nMzJ4MzInIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD0naWNvbicgdHlwZT0naW1hZ2UvcG5nJyBocmVmPXtyZXF1aXJlKCcuLi9pbWFnZXMvZmF2aWNvbnMvZmF2aWNvbi0xNngxNi5wbmcnKX0gc2l6ZXM9JzE2eDE2JyAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9J2ljb24nIHR5cGU9J2ltYWdlL3BuZycgaHJlZj17cmVxdWlyZSgnLi4vaW1hZ2VzL2Zhdmljb25zL2Zhdmljb24tMTI4LnBuZycpfSBzaXplcz0nMTI4eDEyOCcgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0nYXBwbGljYXRpb24tbmFtZScgY29udGVudD0nJm5ic3A7JyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdtc2FwcGxpY2F0aW9uLVRpbGVDb2xvcicgY29udGVudD0nIzAwNkVDQicgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0nbXNhcHBsaWNhdGlvbi1UaWxlSW1hZ2UnIGNvbnRlbnQ9J21zdGlsZS0xNDR4MTQ0LnBuZycgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0nbXNhcHBsaWNhdGlvbi1zcXVhcmU3MHg3MGxvZ28nIGNvbnRlbnQ9J21zdGlsZS03MHg3MC5wbmcnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J21zYXBwbGljYXRpb24tc3F1YXJlMTUweDE1MGxvZ28nIGNvbnRlbnQ9J21zdGlsZS0xNTB4MTUwLnBuZycgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0nbXNhcHBsaWNhdGlvbi13aWRlMzEweDE1MGxvZ28nIGNvbnRlbnQ9J21zdGlsZS0zMTB4MTUwLnBuZycgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0nbXNhcHBsaWNhdGlvbi1zcXVhcmUzMTB4MzEwbG9nbycgY29udGVudD0nbXN0aWxlLTMxMHgzMTAucG5nJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBodHRwLWVxdWl2PSdDb250ZW50LVR5cGUnIGNvbnRlbnQ9J3RleHQvaHRtbDtjaGFyc2V0PVVURi04JyAvPlxyXG5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J0VtcHJlc2EgZXNwZWNpYWxpemFkYSBuYSBjb21lcmNpYWxpemHDp8OjbyBlIGNvbnN1bHRvcmlhIG5vIHNlZ21lbnRvIGRlIHBsYW5vcyBkZSBzYcO6ZGUgbm8gUmlvIEdyYW5kZSBkbyBOb3J0ZSBlIFBlcm5hbWJ1Y28uJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdrZXl3b3JkcycgY29udGVudD0nY29ycmV0b3JhLGNvbXBhcmUsc2HDumRlLHBsYW5vcyxvZG9udG8sYW5zLG5hdGFsLHJlY2lmZSxQRSxSTixhbWlsLHVuaW1lZCxicmFkZXNjbyxoYXB2aWRhJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdhdWRpZW5jZScgY29udGVudD0nQWxsJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdVUkwnIGNvbnRlbnQ9JycgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0ncmF0aW5nJyBjb250ZW50PSdHZW5lcmFsJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdvYmplY3RUeXBlJyBjb250ZW50PSdEb2N1bWVudCcgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0nZ29vZ2xlYm90JyBjb250ZW50PSdpbmRleCwgZm9sbG93JyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdyb2JvdHMnIGNvbnRlbnQ9J2luZGV4LCBmb2xsb3csYWxsJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdyZXZpc2l0LWFmdGVyJyBjb250ZW50PSc3IERheXMnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J3JldmlzaXQnIGNvbnRlbnQ9JzcgZGF5cycgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0nY2xhc3NpZmljYXRpb24nIENPTlRFTlQ9J0VuZ2VuaGFyaWEnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J3Jlc291cmNlLXR5cGUnIENPTlRFTlQ9J2RvY3VtZW50JyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdyb2JvdHMnIENPTlRFTlQ9J2luZGV4ICBmb2xsb3cnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9J2dsb2JhbCcgbmFtZT0nZGlzdHJpYnV0aW9uJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdkaXN0cmlidXRpb24nIGNvbnRlbnQ9J2dsb2JhbCcgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0nR29vZ2xlYm90JyBjb250ZW50PSdhbGwnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J3JvYm90cycgY29udGVudD0naW5kZXggZm9sbG93JyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdhdXRob3InIGNvbnRlbnQ9J1ZpYmVjcmlhdGl2YSBNYXJrZXRpbmcgRGlnaXRhbCBodHRwczovL3d3dy52aWJlY3JpYXRpdmEuY29tLmJyJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdVSURlc2lnbicgY29udGVudD0nU2FtdWVsIExlw6NvIC0gc2FtdWVsZGFzaWx2YTQ2MEBnbWFpbC5jb20nIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J2NvcHlyaWdodCcgY29udGVudD0nJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdiYXNlX3VybCcgY29udGVudD0nJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdsYW5ndWFnZScgY29udGVudD0ncHQtYnInIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J2NvdW50cnknIGNvbnRlbnQ9J0JSQScgLz5cclxuICAgICAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj0neC1kbnMtcHJlZmV0Y2gtY29udHJvbCcgY29udGVudD0nb24nIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzpsb2NhbGUnIGNvbnRlbnQ9J3B0X0JSJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6dXJsJyBjb250ZW50PScnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzpzaXRlX25hbWUnIGNvbnRlbnQ9JycgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0ndHdpdHRlcjpjYXJkJyBjb250ZW50PSdzdW1tYXJ5X2xhcmdlX2ltYWdlJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlJyBjb250ZW50PSd5ZXMnIC8+XHJcbiAgICAgICAgICAgIDx0aXRsZT57cHJvcHMudGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkU2VvIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCdXR0b24sIE5hdmJhciwgTmF2LCBDb250YWluZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuXHJcbiAgICBmdW5jdGlvbiBzaG93TWVudU1vYmlsZSgpIHtcclxuICAgICAgICBjb25zdCBtZW51X2J1dHRvbl9tb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9idXR0b25fbW9iaWxlJylcclxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtbGlua3MnKVxyXG4gICAgICAgIGlmIChtZW51X2J1dHRvbl9tb2JpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51X2J1dHRvbl9hY3RpdmUnKSkge1xyXG4gICAgICAgICAgICBtZW51X2J1dHRvbl9tb2JpbGUuY2xhc3NMaXN0LnJlbW92ZSgnbWVudV9idXR0b25fYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd19tZW51Jyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zdHlsZSA9ICdvdmVyZmxvdy15OiBhdXRvJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZW51X2J1dHRvbl9tb2JpbGUuY2xhc3NMaXN0LmFkZCgnbWVudV9idXR0b25fYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnc2hvd19tZW51Jyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zdHlsZSA9ICdvdmVyZmxvdy15OiBoaWRkZW4nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgZnVuY3Rpb24gaXNBY3RpdmUocm91dGUpIHtcclxuICAgICAgICBpZiAocm91dGUgPT0gcm91dGVyLnBhdGhuYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIm5hdi1saW5rLWFjdGl2ZVwiXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE5hdmJhciBjbGFzc05hbWU9J25hdmJhciBmaXhlZC10b3AnIGV4cGFuZD0nbGcnPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZSgnLi4vaW1hZ2VzL2xvZ28vbG9nb1ByaW1hcnkucG5nJyl9IGFsdD0nRWNvcmFpeicgdGl0bGU9J0Vjb3JhaXonIC8+XHJcbiAgICAgICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J21lbnVfYnV0dG9uX21vYmlsZScgdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXtzaG93TWVudU1vYmlsZX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWVudV9idXR0b25fbW9iaWxlX2ljb25fY3VzdG9tJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtZW51X2J1dHRvbl9tb2JpbGVfaWNvbl9jdXN0b20nPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21lbnVfYnV0dG9uX21vYmlsZV9pY29uX2N1c3RvbSc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPSdtbC1hdXRvIGFsaWduLWl0ZW1zLWNlbnRlciBtZW51LWxpbmtzJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2LWxpbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGxpbmsgJHtpc0FjdGl2ZSgnLycpfWB9ID5JbsOtY2lvPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdi1saW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2Fib3V0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGxpbmsgJHtpc0FjdGl2ZSgnL2Fib3V0Jyl9YH0+U29icmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2LWxpbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGxpbmsgJHtpc0FjdGl2ZSgnJyl9YH0+UmVjZWl0YXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2LWxpbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYmxvZyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BsaW5rICR7aXNBY3RpdmUoJy9ibG9nJyl9YH0+QmxvZzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXYtbGluayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgbGluayAke2lzQWN0aXZlKCcnKX1gfT5Db250YXRvczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9wcm9kdWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT0nYnQtc3RhbmRhcmQgYmctY29sb3Itc2Vjb25kIGJ0LXN0YW5kYXJkLXNlY29uZCBtLTAnPlByb2R1dG88L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L05hdmJhcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSllBQUFBeUNBWUFBQUMrakNJYUFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUJVSFNVUkJWSGdCN1Z3SmZGVFZ1Zi9PbVpsTTloQUp1K3lDSzRLeVptR3hDZ1ZGSklsUkNpNzQ5T0ZhYWJWV3U3eithSDFZYlNzK3RmVXByUXJJcGxsQUVWd3JDRWxZaEZxTHFCQWdiR0VOa0FWSU1qUDNuUDdQblNYMzNya2ttWmpXaXZQLy9XN3VQZDg5Mnozbk85LzVsak1oaWlLS0tLS0lJb29vb29paXJjRW9paWdDT0xXcFEyZmg4ZHhDVEpRa1o5YXVweWlpaUJUcGVlbHhkRWxlakpYK3hodmtxQ2xPZWFKcVhjb3ZLSW9vSWtGdGFmTDlGYXZiemFPaGViOE4wazZ0VHVoY1hadzZRYzRpcnRMVkpTbC9xaTVPbmthdEJLY292ak9ReFdsSllKZ2xRckEvcHNScEUxMmM0aWd2ejZIZUpWNTErakJ4cmF4bWJNcnorMHNwN29TbittR1FIemkrNGJ4a2FnV2lqUFZkUVZidThHbUxMM29jU3ZVVWxkUjh2UDNEMSt5S284TnlUTlhIS2IycjF5WGZuNXdRZDBnU3pVblJVbWIxdm9ycW9ZRS82OUxFWGRRS1JCbnJ1NENNRzMvSUJLMWQvRW1YVE83VXlvTGtuMTYzTTVIcStZUjJvNnZMa3gwMXI5VFUxUDJrWFdiMUxuTFF5YXFOS2IyVEsycnlwWlRmcDFZZ3lsam5NakluSmZITTNOY1prODlCK3NRd3B4enkyYjUyRzRPdlk3aThMczRsWERSNHNJdGxVSjFnZkMwazEzQkpjaTQxMEEvWVRhUXhSbnZscCszYVVZU0lNdFk1Z3NCMk5semRkVUpHOW1XTW5KdXh0ZDBVeXNRbC9mek5Dd1VZVFU5aU8wejV4YlZsc2VUdU9VNmxVN09xVm5NSERVbkpxRG5oWUN6SUc1OVVuNVlYVUlTSU10YTNIS2VLVThiQ1BmQVpjOUJ1WW15RHVwOHNTZGs2dmwvMVJwS3N2elgvMnUzdHIrQXU4WGt3UGZPYThtVHlPYThPcG9YbXYvdUk2dFJkRTZ5U2tleEFFU0xLV045aUtIY0ErT0JkeUovTGpYUUlwc3RlditlVCtDbURqb1FYY29vQjY3ZW4vYzFBdVQ0bHh1ZW1NZE5qVlVJUzg2cTdnMG1kTnpnVDhVeVQxUlFob296MUxVWGxYK082Z1FubTB0bm1VT1AwM05TdDFDWE9aNmFENjM2NW9oOW4zTDhkQ2g5TG1IWEREZ2Y1YWliVWJFNUtBMmwzMlNweUM3aTcxSHNwMmVVTkR2ZFdpaEJSeHZxV3d1bU91UjJ1Zy9pbThpaTMrbTNwKzhQb204cFRoenFjY25Nd1BXUDAzalNxZDQ1S0dseDdvdDNJNmc5VEU5cjNTZWxVL2VyaDl6b2xjRTdITzJSVjFsS0VhSHZHeXNnYlJGbDU0NVZGUXVjNmxITXhQZnMyeXN5ZGczc2UvWnR3YkhOOGwyMkhFOGF6RmtSNkwrdHF3eE11N2NJUHRuYjhNcGlVR2szc21PU0pZUVBIeGFsMDJ1ampYN0orMUJDWFZOY2x5Vk05aDFvQko3VWhlRWJ1QXNuRXJhUkxXZGRST1RKM0xKMXAyRW14TVROSUJFd1J4aXVvTkwrQXpnSHdDdkdxNVB4V2Y0TC9tR1hrUENWS2l4NmpmeVV5Ymh3Mzk3MnlsWDA3MXpyN2R6NU5NYzFreDFZV1RnVHBmMWIwZDVSZWZJemdoU2RONCs3WjJWK3llL0lIWEErZGJXa3dHNnpEbmRSS3RKM0V5c3diaTIrNDFVRHB5RFNhUS9FeEtZellNekJlLzArL21IaVF6Z1dNbXRMZDhyMHd3dGhELzNKSnphakRrazFkbldNdk9VWWY3V2pmYlBiRE5lN1BvSXV0eEtwZWdldE5QQy9EdldoclJkSlJoMFArRk0rL2grUjdhdHFJaWpYYUdXYzV0UkhhVG1KSmNVSFlJUnhHRWZzL3ZqV1FtaDBEdVdDbks3MG5ZcDFFUjJiMk5FYjhLVWg4ekQ4eEtXazJsUmIrdnptVDU2MXRoeFByOWxVbXhIazFaTUpHWUN1VlZCZUphdTY1b256Y0k0OXRQV3IzUG42NGxiS1UyZ3B0SjdHRVdJTy9tcEdFZ2Zrcm5hdFlsLzhWL241dW9qRjg3OGEzamxDcndaU08wdzMxbksvZlNZWXI1eVZ2MVRLbldGYXd1U3NsdU1SQjdHUWUrN3FrRnd3M1BlbjdwNDdTTjRDMlk2d055NzdrYW11UWRBQ1grdGdpdUVSK1JPY3VoSFQ0cm9Xc2VCM1AyeUUzRmtpUHVKbitEUkN1cER0WGZkNSs2T1NlNVQwUkF4d05KbG9IWmhUNlMvMk9ORGJyMUpGVnkrZ2JnbVVybk1VcGZadWIzQWwrUmJ2aE5LUDErWFcySmRVaHNSU0VLMVZlbGM5OXpLdlZ0aStnbUpQTE95WEY4aU8xOVlMV3YxVlBZL0lTSU0zc1c4L012UlJpYlNoR3d3VlBYQm1kWUtYMFJiNm55UjZuNTJGVis0YVJnL2ZGMU1aaUw2aEVIUnVwdEdndnRRVHBlZDJ3bkZUWUk0NGN2Z1BVeWJtRDh2TzFGcFZWVnVCaHVoRHU2VTdrYzM5Qm91YVVFTTVaVU55bHJnVkRhYkV0TnpndkJhMWRnSDUyeEJiYWdJbmZTNldEb00vTUVrMDN5T3pyV3pPdi9sT2l6YXhRSldvMjRKc20zenpvWVA4Qm5VOTMrcUl5NmREaXc1MjN0UGlibW9QNjVnTVlMNjUxaHh5S0pTNk93UGxWcGlSblU4WE1tL1B3blBPWmcrMEZOU1RKRU4wZWpVbGJheTNITW5PVmc2UmJLQi9udzVtbS9RUnY4aHBwN0JxNGNMY3hyemhrS0x0T2tuY0tZNjVYSU5rc2tYTjJCRmJsSTFSYzlCcFpvUUtxMHZVNDFJazdrVXEwdkZVVDhMRVUvRUVzaEhCbjN1QVpMaDU3WWlha3lyMUk5YkdVUEk3Qzg4a25ucUJOeTQ3ck5MaE1ZR1FzYnh3RDZEcVNIWUpUOFk5STl0UnBncVppbkxwQThYMjZjVkRvbDZLNGNIYW83b3hzZkNkL0dHMWNhUnpUUUsyVlRMSkZJa2FiUld1V1YvbS9NZWN1YUUxL05tU3FRdU5WcU5oT2lVSnh1WlM2T0g3T0Rzb1RxQys1c1IvczExS0lDWGpvRktJUis2MG9LWGdwckpiTTNOOHhRendSNC9zTUZSYytxNHdUMHJ5L3didkpJRnVEME1ycldvcnhuRVVsUmF0dCttYjUySTFGQjlBREN4T3huTEJTV2JuRHlNQlV3RmZRT1RZeFpsbGhVdGpadWttTVhLdkRtVW92MEFtanRZQm4zWGlmaVp5UjNaRkoxeVo4OUV3S1p5cTlVbHhqR0JkWXZUZG1tTjRNbmhqUFlvKy9qMEg0UFZtWnlsK3lQYWJ0SWViaW4ra1NWTytHVjFueFBZTVhQbXNpbUdwNUlPMEhCMnN4YVpZNHNqSE5zM0wvRjB5MUJJOUR3cGxLYnpoTmZRL3pPdGJUOEFsbk8welhEc3pSeTlnWHc5VURMcHhVMmhlVFlHUXFCU0V4anNUWEdmUGorOE5QZzBJYVllQnVOOWZyZklleXN2c3p6YnNaNzZaVE9GTXBxSjF1Rk9icVE3Zy9wdGk4RC85Z2RHQ2hNWTFCdjRIQ00rV2FrMnd4MlVIak5xSmNEc0tmWUhEMERLNndyUTlTY2c2Tm1OS3JzUStPVnpBNUZ4bXlxQWxVeHo4K3hIWGFRSThIQXl3SnhyMTB4THIvZ0w5akxFMm9lRmk5aGRZTkE3bVNMaCtYb0l3N005Z2svSEdRRmV3c1cxVjY3aFdRY3RZejQ0ZDA1VjR0UWpNdTRzNjRSOGtlTlJpTi9RRzkxWDhSVlFRdjZMVFZKRHhoQ2o3b0NlRDZoUlp5QmcyZjFNbEVxZEF5OGJkaktDM2xKaXArZlFjVC9BVVRIVW9STHVXcFYyTitLa1FGOTBLeXYwRGpiazBJNjRPVlFIR09na0JGUWZTaWtUbFhHck5nT0NjYmtoTGIzY0xRYzh1d0I4dzRTcFlVSnNxVFBBbitIeVdLYXd6djNkQi9adXBQV2Jrd2l1VjFobmVuc08xK0QyVkg0Qm9yZmQ2K29HMHd2TzlCbmxxL2YyblVEZDNCTERPTWZVWDZJZWxLU3BaZGVhSmtmSUxhQ2czdmUxSmk0bjhSb3E3MjNWWnVCUFlCK2w2RVp4dHJ5ODlvbkVtVEVvODJuMEY3M1dWeDRUWG84OFhZN2lmb0cyeXdVNUxaZXUyUjQ5ZXlwS2lITEMzc0hycEtDczhQWHFLazhCRnlhMkdNSlNSY0hxWDVmOGZqRndheWd4eXVTWmIrbW5ZanFDNkxhTXdQMHREaDd4bkloN0hsWG9MMmh1cGpYcytWeFZwaXFDT1ZUcCsrMnRxSGNNYjZNTDhhSzNHRktaTXdNRko2M2dBMDNNL3d1cFRXNWtma1dNTU9PWTFLQ3BTb2xycXlYbHlnVGlyT05PWmhKQ2NIMnA1cW9rdDZFdHZ1eHlFQ3pIdEpmTHE1YkVDaStwelpaSkEwb0MvQ1pEeWpsRjlkdVMzT2YxZHkrV05UV2NZbWtCMFlLNEJ1MkUyV0ZJeEQzM1B0ZEFzaC9Zd0ZCYUFMYnNmOGx6d2lmTEd6VE1wMDhiTDM4R1cxaGc3M29Ra1QzTlFhTUJhbUdrQ2ZTdkRmdzNhZnlaWjB0aUhwZ3dHeWxEd05NR3prOFVEZm9RZEs2RnhGdTBPNXR1UlhZNjQrdExSNElWbGc2eUNGaWJNWW5idXhNYTF6OXEvOGRXZzVScDBmSTdtUUlzTU9XbDlRR3Q2bzQzVmk0a1ZTMHNxUFhtcjFTSy9IcERNSnh0YlNzR3l6eTlucnF5UVhWeExFTDc2WkhCYTREemIyRlJQK1JuaTd2dVdTWFBjYUNDY3BIRld5cG1ZNi9lUDkwOVFTbEJUZGJpdnkxSlpSWHplUSs4UmQwcXdYT2FnMk5UNThkN1o0UHJIRk0yOXRLSGlNT29yQXphdkNmeDRxZGIxSWFHSUpjemlVTVJITWNEVU5uNVpNR3hmVklKNDdHQ3U4aDZIUSsxUzZUSTNoVWZTOVEyTWJBU2pyOEppak8zbTFxK0hSdU5mVUhKTmhpOExlODU1VXQ0cHE0azdxWXM2UFMybFViajlhVzFpR0ZXM2tjaTk1UlQ1RkFzYitZVXRYYm8zTTNKMTZXNkhhUFVvbjZHRXFUbkl0bUlpYWFTUVZTbnNhbE10T3BqR1hmRWRZVnIvWi9LS0pscEV6MUpKcmM0dVp5Z2dZQXh5TEVnd3dBbzBQb05ObnVvTHFrSFpHbnVaVktuN1Rxa1J0SllmTzJEZytra0huWWNsaFhnbEpmcDFudy9JOTZFTXhua1lHM2tERk9ITXQ3a3U1MUhLa1VVQXdpNEFZazVkSW1wZ01iZllhcHM1N0hSTDl3WWdKMUVMWXo5QTc3elJnM3pjeEROY2dSak51VnZyTVFNTUhyQXlaNkMyRUZMS21pZGRtMzRqZ3FuL054Vm50NFhTbjR1dk1LMGxRcTN3N21JQXpFUldBajQ5bjVyNktDZGtLcHZvTktKaE1CajlRYUZ0VzlaMnlLUm5aTDlNVkszSXR4WVllMHJ2QWNtYkRpbkZkTUVpemdEaEZkUTF2aGxKWjJlUGhJdG9ONSt0ckFhdnhpaEN6K3RHc04vL3NzVUtuWEVRYW0ySG9ZSTVWcVlXeXQ1Z2lCQ3lXeENhOGdtbW1sTnRiUzE2SDh2R0VURjRvdFBmaFR5T0RjTXRrQ0hTVkk5d2QxM0NTdkc0em96SXRsVm9GMlZLanhOK2xWUEdrOUp2cVJpQVlUQjlCWXErbnV2clZMTmF0Sk1tRjlIV2dyRkxCWW0zWXNaRUpCSDhEaXVxekZGaWd5RHBCd21yRktGMGNxZ1picXR6eXRuL3haRXp1eXlSWHhrbWNvVDdsVC9zQTh3MmxuUmRERjdzU1FuY3VOWUd6TTliYW9uVVFvL3VvY1NzYXhveDZnWVNwNjZwY1FSRUNLemlkL0N2VFBGbGpjczdIeHRyWFFNR0hWc0c4YnEvT0RmVnFKSXQxdEg3WjU5UUNzSXljL1padEIxc1NmV0xLbEo1M0hnYmVZQ0RJWStqWmJuTkYxSExHZ2hJdWEyR0pOcGJ3NmRLaHVPQnRVNzdNbkhnYkFXVnBoOFdha3FseExxcHJYSlpjU0s5UVB6b042eDFydEJUWDU1L0FQTDZEcDZEYktBbkw3bGxqYmlINW9zWkt1ZXE3a2FsV1NCZWZTbXZ5R3lWc1JtNG1OWU9tbEJXTWgxeGl5WHRKcU91TUNtak5tbnFLR05nU3NuTHZzRks1aDM1RzVwRXVSdjArV0NCclRQa1l2eStzeXN5OEh2allsekdBZjlHdnJKd25GVm40bllTTkxUUDIzOEZmL2paV0tLYWkwZWVERndTZ3ZWWFlFa0NwbzZyNDNwWnRZMTBZVTJWa1h4YllHczBRN0xpbHY0Tk43K3Q4dzh6WmtWOHlHNzFIeHVuaHVXQ0tzVVdXRENNTno0Zmd3V3M4TENEWnhhYWFPTHpyUnFhaUppeG5BNW84TmlPRVhJaEtiSjEzMkhFV1VTc0JBZjRDeTh4T0Vad3RKYzBWejhuM0lLYkV4REJZaEM4SEhsV1E5d2tLNkNlZzN3dXY5Z25oRWMvUXBvRW5LWDNyUUpqRUw0SWxRNE1PMWVOMytycU9ZVytUVnhxMzBnSDhvSGhaak16NUdlSjYyR1pGTHBqcEtkTjNjZllhYVJIdGZDRkE5MmFDdVp6K2lFY0kzZnlUSElnTFprN3FpdjdaajUwVE1VKzFsVk5Rek1vYnNGQWVRRngwSmNSS1Qzem44K1lHNVNhdXlZRTJ4b0NMeG15THB6VUJQVTdET0hCZHR3M3o4S1BrVW1sd2hUQVZ0eldLUUtHZnRBajkrQUpSa1VleDJNZFRNMmphdkNyVnQ1eHdLMDU1Z0V1S1ByWXBZZjdDczdPdEc0clFITXpDUWNaOE84RlVsc04vc29SS0N2M0dBNExMR0xjL21kN0NxNDBRekRHV3ViVU9ZdjF2SWZlQ0gzdUYwK2YvWnhkWWFWQzhaNXU3VHJmcjdYcEZEVG83ajh6bnh0K2tkUVhoUjMyYUNSV2JFQ1Aya05uQjNCLzlMSUdVZnBwbjVpeEVPRXR0N1pmYmxsMVhoSmdxTTBvM3JrdFNEWXEwbE1wdlp0REo1QjQ2MDM2bHNQRmo2ZkQ0ak50aEhYYWZRcnRzd2tHbXVDeVl4bVE1ZzlIbW85OHZZdXQrRHZIaHYrUDlrOVFDTkh0c3hzNVBoYkNKVXRxYkgyNjdXS0VrTlhBN21paTFYWExLSThPeUVTZjRJMlN4VXNuUHhGYUxjUTlreHJoUVVGZWhwT0JwU0YyN0Uyem12a24yTVhTSlc4N1M3N09jcExNNVlRZG1Wc3hnb1k2QWxINElUSzdpZFVwcUtCWENiRTFyUHIwdTZaTktjdStqcG5FYUFmZHB0R1d1RjR2Sy9nY1Z3a3dYVnV2UTMvOHY0VUw2MUV6VW5pTnptS3dkK24wM0dPeUhGUFFJK0VOTFRhTDU4MWlDbzBQc0k5UVd1R2kxOE1sNXRsbUp0aG56WWIwZHg5cjE2TTg2algzRU9OdUNXTzFJRExSYUtjWWpPZW9mVXNDYThnNzFyMXdENEoyWHBRVTN3U3FCNTVpOVMyR211dHlQK21ZajNEQUlYbTByMDBwUlhEQVZUdkc3OFd4M2hudXZIdVpwT0c5c295N2hVTEhFaW1Cc0RtTER6bW1xMkUxWlV1aXJQS2pmR2RNblJIVGxqNm5UQk9IOVZJdEZGaU1rTlJwU3VNallCc1VITE4yTlJRZWtodzhQU05ONlMybWhoNVE0ZEsyQWs1bmI2bGlBeTJWbXVDNE9KZkUrSTBPc0VVSHljTXV1ZFBrdUtmbFlzdHVwc0Jqd1hiL0NXT2FaK2k3RFhTZVIrVTNhR2lxTVVSM1htVFIzUFcxY29ud2pMVk51L0dlRU9wTkRjNU5IVmtmZ1MyT3dBdnRpbGZmUlhTZkNXWTV0WWxlTDI0MFU2dXlZQXdhUE9vZkZsUzlNMnhHMmFKcUNjbEw2eEtYb1hYdlVnY21UWHdXODQ0MFltWk1KTFg0S2wvNGZtQ29YQk5TMGFxcFBtNlZMdEsrRFVYbTlZZFAydzZnNVNHcjdxV0hmZHRxeTVldlZHVVhyc2ZNVjZyNXZDWFhkUFk5R1dkL3RlWTB5eWwrbDJNMHZoZjhtc0d3ZVhWcTJrQ0w2ZjFSbksvUDVHNVFJclV6WGNzdGVwUkhCZjZqV0ZIYk5weDdvWHhkcUlmQWRJODcycmsxLy9oVUYwZTc1ZEF1Mmdhc2E2bWs1OHdlajErNWFRRCtDMUltRm92eUNUNk1CRGlmRnBIS2FzWHNoemVPU3Rtb2FUWWZJZkIvNVIvdThoTmlmLzZUSHp2bjBBTGdoRlJMRHpaVUJJNmdYOXN2UjBDMytETk50Rk1va2dKNEdEL2t1TU1WSjVxVDkwa2YzT0JndDhOWFJxRjM3NkZLMHZZRDV3MlNiOGZ3Z250TjZkNmRaZXc1UW5pYm9BcFJkMnZjT0N2NXJvNmRkRHJvWHhwRTZXcWhMY1REdUpBY2lHSkNIZTBBN0tqeHdySElhZXZRNC9VSGpkQ2Y2ZUQzMzB0dytkOUZlNHpoRWZ3bmR4b0FTTkE1T3kxVmN4ZjA0RFQ2d0VPYTZwTTZZckVRNGw1SXg0RU13b2NwbnZoeGExUVZlQ2F1UlVSd21YUDhIWjNCV0dMZmxnYWl2RzVoblBaaHZESjZIb0o2ZU1aTEdJUC9FZGo3U3d6Q2d6WW1Kb3krRWorNUhzaHFiL0NSMTloMTUza0k3dmZCKzhNN3oxSFpHQTFDNVZsRkJuWVdnaWFTTUtHNzIvdGQ1YVVyNWZCb2JUS08vNDFEK1lYaFFadGRxVk1rZE5GUDF0M01IR29MNmZQaVcxNFNUYnJHT1E1U3gyaGdZMERKTTVsVjRyTUs5M091bFNreUVranJwOVI1ZHB5MzMrV0Q1TXJvZWRPWGxieWVVajQ1QmFrZzZWTjlnVU5pWkxrbDJRYWs1eEJ4VWliVGE4azVCZXB4RStlMGQ3cVJhVFBvaHRQT3dwNDdHUTFLdFJBUHR3VFFibVpjK1JYM1R3ZVFIUVN1dmR1dFcvQTQ4SDZnWDVNRmQwVTNuczhEQVcwRzdHUFdGRkhmMGNRMCs2aVhjdHcrOERkYWlwRlhJbzJsZStncjVqemtaM1kzN0I5WngrR2FWOSs4QUtxQkwxY2ZTNCtxNVR3OTZsRjFGUHZvUHdPNEY5RGkwL0VSc3hVLzF2b01PVXhSUlJCRkZGRkZFRVVVVVVVUVJSUlJSdEJuK0NRem9Ib2wwVUdteUFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9hcHBsZS10b3VjaC1pY29uLTExNHgxMTQtYTMwYTQ5MjJlOGQ0YWZiYWIyNjc3NTZjOTQyMWEwOWUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2FwcGxlLXRvdWNoLWljb24tMTIweDEyMC0yMjRlOWI4Njc0ZjJkNGFjMTJmZWNjYTdhODU4NTAzMC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYXBwbGUtdG91Y2gtaWNvbi0xNDR4MTQ0LTFiMThkMzliMzM0OWI3NDg4MWFjZDU3OWQzODExM2Q1LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9hcHBsZS10b3VjaC1pY29uLTE1MngxNTItOWU5MjEyMWY1ZDIxN2FjZjEyZmY1MWFiYTUwMTc1ZTQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRGtBQUFBNUNBWUFBQUNNR0lPRkFBQUFDWEJJV1hNQUFBN0VBQUFPeEFHVkt3NGJBQUFSUDBsRVFWUm9nYTJhZlhBZDFYbkdmOC9lSzBVSW9TaENXa2xYanNkeEhNZDFHSEFZNGxKRHdBbXU4d1VwU2Zrd29DdE1taS9hZUJveVExT1NZUmlHU1VpYU1vUm1XZ29KRTFuWFFFajVha01wQlVvSnlZREJCSWlUdXNTaHJtT2tpM1N0R0kyaUtCcHh0VS8vMkh2bDFXcXZJRE05TTJkMjkrdzU3M21mOTd6bm5PZTh1eENub0phVEtjaTRCcW4zNmVmWFMybVpyMWR2dWZKRjk0T0ZjRXV4RUg0OVE3K2dmaFBWY2xhS0VnTHJkWll6U0RLbjYwYUo2M0pBbDlObHlmMUFJZnlveFYySWprU2ZkVXhSd0ZMRnN3QWs2NlNOa253UFN3MldCaFEwS2g4c2hLM0ZRbmNIUzQyMDNBaWVHc0JPb1U2WkNaYW1JQ2tnYmVWRzFreW1KS0FzY0wvWHZXR0wwUFkzS25lZ1AxeGxjWmVoM1RhR1Y3UGsxc0drUjIrUml3NFV3bFhGUXJnNjlTN0xMWmR6V3hMdmxxU0J0NFlCNGs4TkoyVzhEb3I5M1NjbUN3WUxZYXZNYmFDVmtwQUUwcEVNUFJyT25VWEtTcndmdUh3dzdNclNiMUhiWWlIc0tCYkMwNWVyazlXdjVtbkJiRVNzL1VSZlh4QURDOWNOck9nTkJsYUVnSGJVNjE3UzF4TVlyaFpzbGdGN3hJRE1XQmFHcEZ0bXphdDYyV1dDVDBhNTNJcU05K244T2NHRkdUSVd5UzhXZWxZTUZIbzZGc29qaDBBRmVISmViaW4yOTdRQU44dGVJN01TZVArZnhlQUo1RTBTbjBmQ2NNZ1FZYzhhSDh6U3FaRTdMZVRCM3A0V21kV0lkb2xyaTMwOWVaYTZKVUF3VUFnM0FGY0FKd3dXd255R1ZSTmd2VVg0cm9GQ3VPSGl2cDQ4QWUzQU5PYkVDQWZZbjhCMEVCbk1abG5oYTRyYWl5dU96eU91eGh5MC9VM0pLeVd0RkRxaVNDK2wrbHZZUXJJbTlrS2VENklXUTk3d0w4QUZ5QnN6NmdKRWdtOExkVnBhYjZrT01uc1JFL3RCV3dSUDUrUi9BbTFFZENLNndKOUgzQWc4azZ2NkFQQXg0N3p0THB6ckJVNXhQT292ZzJLVDRlZUd4OGJuRmh0eStaRmNzSUxGTkdJYUU0SW5rTDZSTlpyRlFuaUM0SlJZZjdwa3I4d0FtR3l6Ri9rbHhJdWdXY0dObUZaTUcrSnk0SEhnNldxZWRtQ3pJQy9SaWRrbzB5bDREbmhmRFNHQ3ZTa3NtWE15T1RvTDVYZU1IcTRDTHdLbkFnZXhUMFgrK0pJMjRneWoyTEQyZm1CdFF0WVNJNVpHSzFPZ25WaDVjQnRvV0tnZDBZdlpCNXlNR0ZHZ0R5T3FSaU9HR2VDOUJvd09BNmRnYWpqMVZBcmNFclRwc3NWN2xIbEtzVnVFd0N5dzQ1SkMySnFvQS9CZXhRQm5EVStBMWlWa0JZdmsxZHJNRTMwTi9CbkVpUEVxNDd1QngyTlg1bEtMSjRBTE1TK0J5NXFuakRoVlVFV2VBWVhnV2ZEZUFEK1JrQjBBMFdCZjJESFkxOU9hZEx1a0VrbXdBZUlaQTFpOTRBcHdNQkFmQjNZQlViRzN1eG16cGpZOVhrS3EybjVuU3U0UzQ5NHhlamdDZmx6TFFiRVFic0NzTHBVcmR3UEJRS0duRi9rTTRERmdyUUt3V1F1OGdIazcrRUhEQ1pKdTJqazZQbFdYZlVGNFBHL0s1MDQyZkIxN3h5S09seHJkNUdnK0F6NmdtQnNlQWlaQlZ3NzA5N1RITGRRTzlOWll4NlBZS3dWcnRuZlVxZVJpY0ExU0JMUUF6ZlZueVIyWTlscWZIVkhBZWtTclVRblJESnd1ZUk2SW9hU2NOK1Z6SDBaY0JSU0lQSkplQWJNWVVKUnJtcHVhZjYzNVllUFBJbFd4SjdGN0paMEhmRWNtc01oTHd2Wi9BMXVCZk5TU2J5V2VSM1VRV1dSL29YOUJSNjErWE1lVWF3QmZCbVl4NndRVHh1L0Urb1R3WThpZkdpNVhvbTNoOFVGVEx1aEN1Z0RwTFBBbTBJSFNlR1VtYTlTU0NrVUFRd2NuQWU0aTNuVFhBNzhCRGdKWFhMS2l0d1dvQ3VyTGR4bm9OUndKcXN5eTJFdVNvNVptV29GaHZXTlFBT1NpWUVyU3pjREhRTHVBOXhoK2pCZ0VQNGk1YUw3cXFGZ0l0elRsYzdkSitxWGdTdXl3TmwvdnEzZVFSYmVXVXIwZ2VoSnpFQmdHamdFNk1PdUNLRHJYOFZ6RVpqWWVDWFVDenc1TlRGUlo2cUtaQnIyNDBBM2liY0JJdld4b2JDeFNsYitSZEEyNEJWZ0ZiTWJjRC95enhRK0NYUEFMNEY4RjI0RjJ3MjdFS2JMM0NtNGxkZFRLVXFBT05DcTlQRkZGUEloMExqQXV1RkU0QUM3RXJybTlLNGdRak9EZk0wWXRLOVdvbWdKTUhqT2RmTGR6ZkR3YUhoMS9OTEt1UTdURVJtUWo2RGJCSmtsdEVyT0lLbUlNc1ZWb0dtbkhjTGt5dGRCQnNyTU0wQW5nMmttOGpkeGdlSmRobjhRWmtqb0JCTHVCZHdrOUFIcUl4ZWZQZEgrTGsya0Jwbk1PWmxQOVV5eUV2WUg4WGN6ak5SbGp5TThhN2JmOVBjTXVtMHNOKzRGWncvbkRvK1AxTFdYSjl0Rm8zd1NnTkRyK0hQWlZFaTJnYmNBRHRqb2RNNTNBOEVqdEpIRUZ1TGxZNk83S2tKdkZzaEJzQm40Nk5EYTJVR2Vncjd1aldBZy9EZHdEZWpvWEJkY0s3Z2JPQUZhQUh3Q09ZTnFBbTJWV0NjNHBqWTQvbHVnblNLNnVTYUJaTGh6WGtiNWovQTd3SjRGWGhROGFQbUFJUVB1QlVoUjVXbUtuck91Sk9lWnlLUnJzQy9PR3p3QlhYTnpibVErVUswaTZEQmdFL1Z4d2FSVG93RkI1TENvV3dtK0JUcWtaNVF0Z0xHWXhEMk91MHJ4ZVRCa3hxb05jQUhWSlh4Z0c0bHpnRDRCcDRwVjBTbkRvdFVnUGwwYkg1NHI5UFZkTFhtdlREenlNT0E5NHFEWTNEd1hpRVVPckEwYlM4c2xZV1MxT0J3ckFwbHlRL3k3UVM4eDJMZ2M5UGp3Nk5sZHZWeXBYRGhVTFBlZllQZy9SVzVQenBNd3p3NjlVMGdROVBnOFRINUc2QkdjVG53TTNJelZqUXp6Sm53UlcxL0lCNEJiZ2pwcVFuY0R0d0ExQUVUZ1RHRUNxeUw3L05YenRuZVhEV1FSOUFleTJucDZnS2VkSGdOTVJUMksrYmVsZXBObGRJMk5MMlZkajBwSzFpc2NIOG1LaGV4RDB4UnFnVllLdStEQnFzQTZCSDBYTVlhWWxQdW1ZZ1V3QTN3ZCtoSm1xc1lzcHhMcmFOck5TY09ad3VUTEdVdmRmbElxRmNJdkVmWmpyNTgzZjNuNTBOUDdmVW03RGNXM3ZRT3hEZWdXUkEvVUJUUktBM294NEMyWUc4V3ViV3pDM1Mvd1BNYWQ5TzdGTG4xWUQ4MXRCcitCTHcrWEtIaGFQZ0d0WDFiS0xoYkFGK0M3U2wwcmx5cTAvbS81dHRhWlh2WjRUeituN1pKMnMrNFhuL0hDTkRBUFJ3SXJlZk9Eb2c0WXZHMDVHYmhhc2NqeHllY0hXZUI2b0F6eUZHVUcwQVdDZWxYZ2U4K0J3dVhLRWVCcmtFYjFScEhJdWlscEw0NGRuRXFBRHBMTmxEanJpM2dhRGtIVWVUVlBEMTkyaTFFaDRzVC9jQUd6RnZMVkdrVUtrRHV3NFRDRTlqUDBVc0E3eElablNjTG55andBRGhlNkNvQjFyQTJJVjhDeXdDZmhtcWJaQkYvdkRFUE52b0l0SzVmSDlEZlI0bzJuWktaRnY5S0kwV25rQmVLSFdPTGk0MEIwRVVyUGlUWHZPODlHTUFsMEgrbC9zVHNOWkEzM2h2YnRlcVV3STlTSTJBUmRodm9nNG4zakpINEhhaWNIOHBlRGg0Zko0TWk2ejNLS1N0YjAxaWp4a2dteEUxQmNFM1ZFK0RQR0JlUmFJaW5IUTZuVHdIcUFGZkxPa2F3ZFc5T3g0cmFxOVRibW9BTnBIemk4UXNRbnpvY2llckxWZEQzd2FkQ0VRWFJKMnR3VUJjNld4dytrdGdOUnpHbWpXODVLa1pheVI1ZWNMUW91RjhDNUVNMlpTY0libVhudG4xTngwTy9DdFVybnk0NEgrY0wzTXlZNWR0V05YdWJLYjJqd1YzQ08wRjNITnZHa0o0dFBDdHhIVFJINkM2dnhzNmZDUkJjVzNkWGZtbTVyeTdjVGIyQ2FnMWZBZzhOS3VjbVdHQmlPWUJOVElhbzNLb29HKzQxdUI5Mk4raU5nR1BMZHo0dFVxNkNiZ3FvRVZ2UzI1cWw0RUtnR2NGOERQRTFiOUtPZ1V3OWVIUjhlcmdYd3E2QkR3a1RpSXBSK1F6NityOVJrTkZzS3VwcWI4bmNEemdqMUlOd211bC9RVHdZK0toWjdyQmdwaG9WNC9rZXQ2UjQwczBHZ1N4d3hDdVEzRUI5d3JaVldOcm9rUmFEY3dKMGZuN2h3ZmoySVN6YkdSZ2htQVlpRmNCOXdFM0lnMFBkRFRGV0Ntd0IzQWpNUlpFanVROWdFTUZzSk9vQ1E0VDJobHZFejZpT0VBOW1PSWZlQ3Rna2VLaGZEenhVSlBXNWJTeVJoUEZrSFBXZ2dDWUIwUUNCWEFYOHRGd1l0QVVCb2RvOWdmM2lkejJXQmZlSGNFN1lMZjdZckx1MlJ1dHpUbHlQY0tiMVV1K0FCd0FuQUQwdjRJanV5cXhXcUtoYkROY0RVaXd0eUtQQWE4Z3VrRTNnV3N3V3lRRkFKZ3ZtRzRzRmdJcnl5VkswOG04VFRhUWhxbCtuejhjOEczZ0ljVTZXTTdqd1oxS2ZhSHZaai9Rbm8zOW1ZZ2lxejdBL2xPd2RrVysyb2h4MzFDZTZoV0g2NUdxZ2JOUVNqb0pjNHJnVCt1WFVlQU5xQ0xPQVpVSVo3bnJ5TGVoOWxTQzd2VVZaZ0Y3Z2Z1QVhhWHlwV1JYRUw1SktOSXNvMWtNaENjZE55eHB5QVZDSFRSY0hsOE10bitwRGUzem9MT1ZCd2xPQTN6QTRtL0FnYUFLdkE4c0llWVlPUUlndk9EblA1Q3NMRUdzS1hXMTJaZ045SjJVQTU0Q3JFUldBZGFCWFFDN3daYVZJdjN4aCsyeUVzNkFiaEFjTUdKeHgxN1RCMWtFcEF6UUNhcEVodU9PN1pkOFAzU2FHVi9vazBBZU8vVVRIVFNjY2QyQStjQ2I1Tm9RbHhKdmJISUlYNEh2R0RwaUtTbk5UZi85Nlh4aVFkT2VuUGIwM0dva2F1QVh3aU9SL3dLNlNUUVZ4MEVuNVc5QjJnSFRvdWpBb29YVC9GTHpNdUNkcVFtcEdvY25lZHVKVUM4WWZxMGZWVkhBREIwY0RKcmdRcUtoZkJjeEozQWpFeXJVVm40RnNOamlKZHl2NTJiSEpvODJyWlk2RzRHblF4OEJYR0d6TjhaM2c4Y01kd25jUVBXQVl2MzdCb2RuNzYwOHkxQmRFelRhc3pIZ1l1QTlZaElac2JvQUhHdzZ6OE1qKzRhSFordDc1TkpJT24wUmhha2hiU3RwNGVtbkwrQzlOYzFkM2hCY003dzZQaEl5bmpSeFgxaGEwNXNCeTVEbkJCTDBJUFllMEFqNFBPQlFHTENhRHR3ZVdsMC9OYVUwWU5pZjdnNkVsTk4wM01UUTVPVFMzUnZ5RjBiQUVuSFp0TzBpNEZDdUZMd0U2Qkw4TGloV0NwWHlxUzJwWUcrc0UwQlg4Q2NYd3RRdFFDUFlaNFhmTUNLL2dTQ253SnJaQzVGM0dhekYzTm02WlZLTWc3VVNQZUZheU5hbHdaNjlPU1FuWkxMOVJkQlhjajdiQzRxeFdmS1JUSzM5ZlRrSmQ4anN4V0IwUnoyVndRemh1dU1QaEkwVmF0K3JiblpKdTg0L1BrRTBsYmgwNEZIR3hnN3JSTWt5RUNqQUhENm1sVnZJU0pYTElRYmdVSEJsRkFkNENMajFDSUJud08yR2lac2hzRG5BRyt4T0ExMEw5S1RPeGZtdTJZUnJmSEIzSE9XUGpYUTM1djJMbEw5Sks5Qm84OEVXV1ZaRmd1SUExRW56RG5ZRDlGTlNLMDJsd2RWZnA0bHJ5bm4xYUF2SSs4RkhzUThqYmtSOFJ4bW8rQ3M0ZEd4S2xDTHdQaFp6RVhZanlNTkFSZUxhQzN4NThTa25nMkRjQUdMUVpDcWtHV1o1RFVhS0lSckxYWTJCZEYxa2piSzNLL3EvTkRPOGZHMGhldnl2Z3p1VkJ4ZCt3MXdlOHpXT0ZIb2FrdjdFMjBtZ1duQldxVDF3UFBDTThUYlUxcHU1aWhTRzhtc1kwcWpvOHVpdVR2UTM1MFhYQStjTEhPeTR4UEpOY09WaWF5b0daZXM2RzRqNG9PQ2Z3QitJN2pXVXQ2NFZlYTJJTkx3ME5qWVVlT0tRNWh6a2NCdUEzWVloZ1YvMUVEbnJKRU1HaDZhczBBbHltS0JrVUhxQXZZNkx0dHRZbktkcWhzL1JNRnFZTWI0Q1BBcDRIdllKY1FUa1RRM1BEYVdOdXFCK0dJRS9SWXJNS3NON2RzN09oaWFuRnh1ZWkya0xKQlp3TWdzQ3dLQTFuakQ1MFhoKzRiTDQyazVBRnpjM3gxZ240MTRDZk16NEE5ek0zTmpOVktRZExGa0gzdmlpekJlQTR3QkgwVk16Ui9UdEpMSm8xL0FXRG9RQzlmNktTUnBnVFRUSWFOTzNMVUpnQTdIQkhyQzgzNHVWVzhSMFRDK0l6K2YrMnJ0VXdCWk1sUFB6eEx6M1R5d0JkUU01TEU3UUsycFByS01GRUFjUWM5YVZkTVd5VnFFNmticUVtb0R6dzJQSHo2U01zNUNSN1ZQNXdjVDVWa3kwMGF1SUE0Q2F4Ui9Eb3pqd1FDQjUxaHN6Q3l3RVhWL1N5bVZ0VittOTZVNHh4OWEybzFuYTZPWjFUWXRlOG5KdlZHOVhOUGN0TXplR0ppcnRoZmMwMmF1Z1p4MHlvd01aRzIwU1VGSHJTK3ZGSm9tL29lbW1hV3AwYktldk0veWtBQUloZzVPUm9iL2pJUDV5aE4vS3F5Q0lwR2J6bXBEaHNzMmNzMTB5cVoxMG1ySGZ3cTE2K2huOEN6Nmw3WjQ4ajVOSFJmVkU5NGxNWW1OWUEzd0FuaGZxVHgycEZHYmROOVo2QnR4d1RSZ01HdUFRN1h2SDc5cTBQYjFDTVd5SXpwY1BqeGxkRWY4cXlkcmJIcUpmNGxKNnBxMU9pL0lURnM4YS9penltT3c0cTJJV2VMUVJDTlFhZm5MY2VRR3huWEo5aXdJU1N1QUg3SVk0TExla0Z5RjBoMjlrUVdpQzZzTDZEU0wvdlJvdUppa2xFZ0R6YnFQcFBsbkpYWUQySjRtRWRuUE1Nd1NRNzJSaFNESXlNUWRjalg0WHNWL1REMldmci9NZlNQNVdmMHhQUExyeU9pVzJ2dERya1lIZjA5WjJZVVoxMGFLTm5MeHJQcU5aR1NsUmJJRys3dmJpNFh3VjRPRm5tMXZRSjlGdWljSmVqMDFjb1BsbEYyMCthWmtKZDluTFJCSldlbjJDKytyTUoyREhaaUhVbTBhdWY5Q24vOEhTeU9mek1zZ3p3RUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEd0FBQUE4Q0FZQUFBQTYvTmx5QUFBQUNYQklXWE1BQUE3RUFBQU94QUdWS3c0YkFBQVA1RWxFUVZSb2dkMmJmMnlkNVhYSFA5L0gxKzVWYWxsV1pyKzVlZTFtSmt1emlMS01zcFNsR1VvaGRQMUIrZDBCK1hGdkV0WmY2MHJITHpHRVVJUVFRaWhEWFZwMWxFSWJTSHdOaGRLV2xqSTFwU3d3a3RFb1pDbkxNcFJtYWVTbHZ0ZStOMVprUlZscUhQdjk3by8zT2lUQlR1dzRTRk9QZFAzZSs3N25PYy81dnM5NXpuT2VjeDRMQ0VEeSszSmRHVWNOaGx1UXlzVlM1WmxUbjQvKzRQZmhlbTF6Yzhhd1ZyQVdlM0Fzdmd6L0QybGxIRFVBZEphclF4TnRVNGlqak9BMnBOdXdFUndhaXkrY0t5WFBKUm11QjY2ZVZDT1JCeDVNdnd1YmdiSFlKZ3c0SDdmT1h0Ylc4cDYvb1B3SG9nRGNCUHpwV004TDdTMU5oYmJXYVNmZGkyZk14Nnd6Tk5qR05nNDYreEZlM2RFY2hMNldzWElUVm54bU5IZWl2Q2VTRXRvUkZ4bk5INzFYYUl1YWpqTTQzQWhxUDk1UEhMV0ExMHRxbGhpU1NKQjRYeEtxWThtZkVPQ1JZL1huUzdvYXRIUWkvSVU0V2hqRS9SUGhmUmVaT1ppOWtzdWZtem16b1hidmdVTGJqTmsxanB1QTR5TXNXQ05wQVlETml6WCtudlc5dldQTy93a0JsclVZSEVCckNtMHpvdFB4cm9palJ1QmhZTjZxbXZNNUhSWGk2Tmw4SEMxWU9tUEdxQzdUUWQyR3hyZURHd3B4ZEJIaWF1dzUrWmt0TGNCaVdkTUI4bTNSUmNCUzdQM2dBMGpYcHBpOGZieitKZ1RZMEd3NGdud1VlODNxNXVaeDJ3VzRROUlsRnUySk9QTVVFTk1rZmxaZjU4ZnljYlFBQ01qVFpjMVhrblFJbnNUMGFZUTNwWEFGcHNFNFNwdXlvcWJmRDJ6ZXdnNDJBRzlNQ1RBaUE4cGdOZ09yUjk3ZmNQRlliUGxjU3pPd0p1MVQwMlhGRTVEK2lxQUZ0RWpvNThBYURNWlp4RStkdnJUTmlaSis0TE5JQ0ZyeXVaWXNackZTRFArS3VEUjlKbVNtTnNLWVhjSlpvRkdpRWZQZ1dLT3N1ckJZSWlPTUlBSFBIMFBhcWNKZk1QU0Q5d3V2RmNvQUM1SGFnZjJnUFVCSlFlM0FJc0d3b1VraHpBTG1XVHFNbUNYSUNtTVlzSFJnYW9EaHpYVFVXR1RUTFduSnlMU0dKV1B3ZmN5QTB6OHZBT2VkRWE3cXVrSDNBeDNBN2NiN2daM2dNakJYT0VhOGpyUkVvc1gyOTRFZTRIeWdVZlorNExMUmZvVjN5MHdOY0xGYzdRYjZrQ0xRRVBabVlNMktPRHJ1TFZmbmNnR3pRQWhRWXRodE9PTUlkL1gwRFJkTGxYOXlIUjlKeEFwUVViQVRlQXh4M1ZCOStGQ3hWSDBUV0dHckh4RUVQWWlQSW1GNEJWaUkyUzh4Q0t6dDdLMmM1S0dYdDdWbUNuRjBaU0dPY3BNSUxmVXFlQ2t3emFPQnVIUUY4QU9BWVNWTmdoaEFlSS9GQ0ZiSFJLVjMvYlk2Q0d3R0tNVFJGUURGVW5WSHFuQTBIYlFZdkJVekY1UmdYd0FlQm5vd080RlpXT1dRYU5OSllPUFc1am9yRDN3RmMva2tJaWMvQlFKb3JOM1lCZHlUYjA5Zm1xQ1o5SVBoWmVDUEJYTldUNTkreHFWcERHb0Noa2QvWkJJZFZSb2Y3d2FhalZzUWMwQ2JrSm9SaXdSTjJKL2IwTmQzdkYxaFpwU3RreDVFWENjWURNUHVud3pnN2VBRE5XQnZBVUgyK2JLdkJKQklCTlFDOS85S1I4SU5TVVBkYWRmdGNTZ24rM2hvMk5sYkdUVHNBSm9RYndsbVlSckJlMlN2a3hrQ1g5ZlpXOTBMa00rMU5oZmlLSTk0SG1nSEZodnQyM2p3NE5DRUFkZlZIK3NITmh1T0FCZUNlbzJPQUxmbTIyWmtNY091allxaEcrZ3dIQTRqOUUwYXJ2aVR4T28rNlpaMEgzQUoxck5PbmVFTzRIckRQc3cxSTRuTCtUaGFVSWlqUnhYMEs2QllhN3BJa0FGdmhFbHNIalowRHlUWXo0SU9wSjM1aUhEQUxKVDljWk1hdk5HZ3hlRjBiV1hiaG9NSGgwOHYrV1JhM3RZYWdKYXUzbXIvaWZjN1M1V1hDZUdqd2g4a0hiWHpFVWVCaHh4NE1JUlFDZUlOd2Q5SWRJQ3FRSkJwd2Z5b1dLNitPQ25BQUE1MW04RTUwT3phc3ZHTUlBdGNCWkF1WGU2dm1UMkNuMDlHZnFxUXB1T3hyYUt6cDY5L0tBa1BnUFlqSWt4VmFMM01wd1FaazFxRm9SODVJQzFCMm9WMDl6dnlKMEZkUFgxRFNOOENYd2w2MHZBL3hvTVMxd3FQT3E4ZHdEelFkcVR2VGhhd29GM3c2N0dlRldaRzArcnJrcThKendWK0RIUlliTExvTWZveDltdUdPekcza3dZK2J4ayswMW1xN0RzcndDbDVyV0NUb0JGVUVIUUJrZEg4MUtUNUJlYVRpSzkybGlxSEMzRnIrNWtrbml5ZWo5Y2MxSEhLNTFxeWhUajZLOFJQc0taaDNTeDd2VVE3OWllQVhlQmZrZnFPYXlRMnl1d0dQbE1zVlhwT2xLWEpBNFpDMjR3SWV3c29CdDhsV0d2b0JKYUNyZ0VXSmZhM2dyaERVTzBzVngrZmtOdzR5Z0JiZ091U1pLUWYxQmhDV0E1OEFSUUU5eVJCTDNYMTlBMnZhR3ZOQm1zdDBpMHlnVFNzSEVJY3hyd3M2OHVkdlpWM1pUM2VGWGdzejdWbVE5QUZna1dZSWNRUjhHSFFZV0J2c1Z3dEYwdVY2c3EyYUpueG81Z0UySW00Rm5pTnhCbkRwanJ4UFdDSnhWOU80bDJ1Sk0xRkxRcWhya0RxbUhxQTlaak96bkxsOENqalU2V0RnOEN0aFhqR0ZzdVgxN0FNQ0o0TlI0ZDJiaGdZU01icTRQZ0k1K05vbnRKYzBnM0FQRWxaQU5zN1FJMlM1emwxSms4akhxMnJIOW8vTXRSd28yQ0ZZUy9vODRJYmpPY0JCVWtSOW9GaCtiS25TMmYyMVBrNGFoYjhHNUJESE1Hc1IvekFDdnU2ZXZvbW5NdzdFMlVLY2V0ODBMMmtjVytEWURhb3RnTVFvQXp5WHB0WEpUNk91UVByNzBhR0dsNEVIakg2SVRnQjd6UXNRM3dDYzhEMmdHRHRSTUNTOXJSYzBsemIvK0NFQjdwNnE0Tm5iblVXZ0lVS2hnYWtidXdGN3d6NjZOVURtQ3J3VzhPdHdBVzE3TWQ1eUxlRCt6SC9RcHIzbllWNW5YU3gzMHdJTDA5RWlVTGMyZ1RjQlh5MTd1alE0K09aNDdrZ0FTeVBXME5ReUFobk1hc1JhMlMxakdJMkRHUHZCdllEUThCc3BHbHBhb1hkaU4vSjNHcm9scWhpdmluWXZMR1dWODYzUmRtdVVuVndlV3RyZVByZ3daUEFMTTNsUW4xZDh2ZFlyWWk3aXFYS2V3WjJGUEM3bHFaQ1cyc09kRFZ3RTJZV0ltQVNxV2J1NlV0SWdEM1kyNEUreEdLWmV6ckwxYTAxSUFCa0dKbXVvTnVQSmVHQitwRGNVaXhYLy9Ha3Z1Sm9MdkE5b1U5M2xpdGpaaHJQSloxMldTcTBSVm5NTkVSV1pwcWw2ZUFJMHdMc3RyUlg5bCtEeXVCMXdDYWJMM1QxVnBOQ0hGMUl1cWxmQmZ5TU5DTDdDNkRiQ2ZkMTlWVUhsK1p5b1Q0a1JhRTNPc3VWcjcvSFdJRXpsRnFLcGVvZ01LN3pLTVJSQjNBejhuMllRVVJaY0NQd2pOTU5lUXpFb0czZ1pZSit3Mjh5aEdHQStwQXNFVndDdm51OFBzNDFqV25TRTZIYTNGdUhDY0Fod2ZVNHVjd0t6MW42YkZlcGNxalExcm9BdEZBamVqd0p2bFJtUjdHM2VnZ2dIMGROZ3A5TGVzM1N2VXFTak9HTFdFOFRmTFJZcWg0OXN3N05tV2Y2QmlhMU9jbndUblZ0VXRSUWw4d3hyRVE4aVBrcWNDRDhicmgvNVAwTlA1VjlPM0F2aEIzWWl5M1BFclFVVDlnQkNUNFB5aXBoVFdkdjMxQ2hMVnFOOVJIa05xeWZGT0tvaVJGdksxWU9IdDhYNTJlMnhwSXVCajRHTEFibUZ1Sm9PL0JEbzAwMlBVK2RrdDQ1bGM2NlZtUnpBU2FMK1FPbDI3VW5Od3dNSkZpZG9FL2wyMmJNS1pZcWlWRVg0bk9JMTk1UlBKb0QzQU9zM2RoYkdaMHl0WWlPaXVRYkJGK2lMaHpQbWEyTW8vbEIyaUo0WG5DYjRDSkJvMkNKNEJIaGZ3L3kra0ljWGJ6cU5IbnpzemJwUWx2MHNOQWR0b2VGZGxuOCtlaVNVb2lqQjRDb3dYVmZHZ3pIQ0E2UEZzdlZMOWNVbjI3NGFjMWZmdElqSTBjSWlpU3RRN1JqdGlQK0k1anZqeTVyaFRpYUpmZ0ZhSTdsWWN3d29velpCUndtM1YxOWtEUlNQQXk4a0ZoclJoSUducWxVVHRMN3JFMGFNd2VjQ0IwQjMxNHNWZCtaUytJNW1YOCtwcEVJd2hEUUFDVDVYRXNXOGFTc2hjYjNBS3RWRi80TW1BMnNkOExUWGIwbjE0UUxjZFFPM0creEVYc0FjOFJ3Tk4wdzhPSGFCdVlxME1MYWJxMUo4TGRCWEJIcWZHOCsxL0tqcnI3KzQ0NTNLZ1h4Z0JTQXU4SkkySHJpZzdyNm9WMGp4OTQzaUwwb3BEbmlJMHR6dVl4Q3NnWnpKWEkvNWcrUmZvbjlpTkMrem5MbDBMTFcxbXdoamk0RjVnRWZBR1loTHF4Tm5VdHErallvTGFZTkFtWHdtOEFCNFFWQTVvUTRzY1B3cEVLNHZSQkhteEhQRmt2Vm5XZHYwbkgwUE5LdVlxbHkzNWpQMjZLSFpPVU12eGJ1U2FBbFNBOER3ZVpRcmVEVlQ1cFVUMm9nRzRCZmttWkVEeGxpd2MzQUZrbjNPOTBHZmdWeEZXYWhVSXZsM1poaFNSY0NZSVl0RHdvMW5xeVJqOXAwbnJWSkM0b2t2RFJ1ZS9NSytCRmdGdkNLcEh0dEIwbElUbXlPa003TE4ydmhUN251Zjk4K3RHRmdJRm5aUHFQWmllOFM1SUZ0Z3B1TUh3ZHVBWDM0MklpdXF3L0pMT05MTVRkTFhBemd0SkkybkthSVBHZzRYMUt3UFlqNE1iRCtyQklBQUtzNm1zUEc3dkdEL0VJY1hTUjR3K0lvSm9NMGhQMXR4UE5LdkNkQlI3cDYzNW4zUzNQTm9UN1VONEd1QmRZZ09qQnJTT3ZCQjBnTFpsL0Jpb0JQRnN1VnJiVitHa2gzZWdYZ0NpQkNER0lHa043QzNtTHBKY1JiWFQyVjVLeE4ra3hVaUtNdlNub1V3SEJZY0VObnFUTG03bW5GektnOWlEdUJheEhUZ1N6b0Nld1NxQnQ4ZVEzVXM1SWVNcnhZTEZXdU9WVk8vZ05SVmlQa0VybjZWT25nbUlITFdZL3c2V2haYmtZMkUvemZRdTNnSHNPcVlybTZlU3plZkR5alhmSTNNSE1SV1V3VzhRTG1ONEpQSnlTZmtjS1d0RzdGTXNSM2JEWGFQcStydHpwdTBXdzhlazlHTnhOOG02QWRjZFJ3dzNoZ0MzRTBQK0JmeVZ3dnVBQVRBMnRsU3FBSExUMlFhUmdlVnVxWmcrRmp0cjRySEdvV01Xa0s1L3BUaUtQWmdsdlRnaGQzRnN2VjdXUHhyVXdyajk5QWFrRWNNbndiY1FQUVpuRVphWkh1OVEzZEEyQWxvUFEwbmJ3TzBXUHA2bnpiakpiSjZuZjJnY2NwdEhKbUZBMGw2a2QrR0pNelBCRVNuaGhQdnVHTHdNWEcyekRQa1paTTFpRnR4WjR2K0ZKbnFWSXIzUmlnRzdISUk4NFM5RTNTRTNjM0F0K2FqSjdueEtSWHhGR010TEcrem5tWjYwSGRjbkwzeHI2eEEva1Z1ZFlXeEQzQW9GS3dqWktlRW5Salh3SjZxTE5jMlQvS3J6VEw4aVl3VDBHTGdMTHdidkNxeWVvNlpSUE90N1ZrZy9nYXNFVG9VYU5oNE83TzNvT0h4bXNUZ3BiS2FwWjVFUGdqaWZ2QWpjQ0ZncTB5M3o2UjMrSUE2QXFoQnVDRGlDOGJIZ05kc0txbHBXa3krazdkcEJOTlExeHMzQTAwZzk1S3hBdW5sU3MrWlBPTXhNeDBEOHh1eEhPSUY0cWw2cTR4V3V3RHNoZ0VjMGdkMkZYZ3JXNElGd0d2VGxUZHFSOHVyVTBLV2YzZ1E4RDNpcVhLdUZtU2ZCdzFZNWJVVXIrSGdjc05iM2FWcW9mSGF3UDhwMnFsT3RCczQ1N2FtYXpYYlM5Z2tvQ25OSTlsWllGcDRDYUxQU1RKcTJlUW1RUFdIYXNQVHp6VDNYZGl0bUxjTmtiYnBEUlBicnNEYzFRaUFKZTRWcHlmcUw1VE4ya3hEY2phNUREYjZvYnBQcDNNcm5KMUQ3Qm5NbDFrNnQ4K01IS3NvWXdkUzRyczlHQmFMWFkrZXJyK1RxVXBlMmxaVFpnbW9SWmdjTVBCZytlc0xESktHOUtZZmRzSlJ5cUdhMWVZNUlCTjJVc2J4K2t4SmU4aE5kZHpIc3dBQWZOTEpHcEhsVjRiL1E0Nk9oazVVMStIeFd6QkFOQ25OTDN5bnBERVM5aEhhajg3d0R2Uzd2bnRaT1FFVXBPWXl1Yzg0MEdrSnVBMzUwRGVtQi9WRCsxRzZUa3VTYk50dXJFVDI2OU9SczdVUjloMGtCNFY3R09jL3pNNEY3U3hleUF4ZWl3OVNXS0FLNEcrdXQ4TjdUdDl5NVBwWEpoMEJ5S0htZWR6RkplUFI2SHUyRXVZZlVZZ3NvYXRrNjAwbm90WU9vczFpelN4OXA3TllZQ05CdzROSTc0aklEM1R5WmJKeXBoNnBHV3VBWDlLMERBNng5NUxNdm8rK0U1WnpiVmE5S1JveW9DTDVlcGVZTzlVNVV5VVF2M2JCNUtoaHBlQTRaQm9yTGo3OTQ4S2JkSGlsVE5QLzc4WDQ5SC9BZlN4S0NzWTg3c0JBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFZ0FBQUJJQ0FZQUFBQlY3Yk5IQUFBQUNYQklXWE1BQUE3RUFBQU94QUdWS3c0YkFBQVpnRWxFUVZSNG5LMmNmM0JjMVpYblA5K3JWa2NSd3R1cldLMTJTemhhRCt2eUVLL0RNaXhESE9MS0VNWWh2d1pDWURCR2JTQS9KcHNoSkp1a0dJWktVUlNWcGFnc2s4bFNNNm5BVWd5eUpBZ0JRaGp5aThrU3doQW40M1VJUlhsY0hzZkxlbHdlU1c3SmlsZmxOWW9pcFBmZFAxNTMrL1hUNjdhVHlhbDYxZmZkZCs2NTU1MTc3cm5ubkh0ZmR3QUJjTzFYcVhMNjNobjQ2Y3ZFa0g3ZXFrMFd6WGI5L0xidzJWRXU5bXc2KzZ3dnZuVlZ6MnQ3Lzk5ckV3bmVHL3puZ0toMlUvOU5RL3BaR3IvVk14Sy9vUTFPRmo0dDZuNHIrRmNXQ3VHTlhaMEY0Q0hRNWVBblV2Z05Qbk1wQWttRUxHZ2x3S3h5V3VEMSsxYjRhZHBScWo1Tjd6ZkdQL3VOblYxSU94SHZ4NTRERmxncDdGQnZsSDZRZFdVOWE5VW16V1Q5U3RlbFh5enJXU2JPam5KeHk0NXlNWGVtK0ttMk9VbjNTbnEvNHdtMWlEbVo0cnZCYXp0dFNVUFdhQ1MxSWoyTlNOVkhLZngyZEZ2MlBWeGF2Y3J3SUhidm1lQW55OXRLcFdEeEthUS9CWkFBV0xCWklGdFpRbEppV1l5dmVPbEt1ZStDN1FOOXllZXROQXRXYWxCSTRiVXJwMmtBUk9vSW14RkRobld0OEN1RHEzc3JBMzJyMG0wN2c3Y0FkOWMwQnh1UUZnamhaTEo5c2syUzZWYU1OZXB1SENvRTBPYzd6SGtwUWFTRnU2SisrNXIrVmRlVit2T0plbWl2UGEwRzdZT0NQQXFiNnBXVmdXS29EQlJ6RFh5SFlkRGFaTnRLdVc4US9KQk1YakxnU0FpWitUZEVPa0VMN1c0bG5Dd0l5Ni9uMWtwNnY5RE4xNVpLeVdlWkJxNWVQMXp1eTNmSTkzWUdiMHpodDdJVjlmdW1BYnFoMUorWHRRRjRUakR3a1ZLcDFvODNBaDhGb3VIQlloZndQcUh1ZXR2S21tSU93cGRCNnd6WVZBM1BHekJVSHpwNmRDblZaNE9IckpGc0ErRnltN3pSOWs3NS9GWkl5WnQ0T3VveVFYMVVzL0JXOUY4cEZ6ZFZ5djJYYkdzSWdiRE04aXJqN3NoOHpYTDNZZ2RjWCs3UGdXN0h1Z0pBRVVPWUN6R0ZCakd4VFhpcjVFZ1FJYzFoTHFscDBzczBhMDVUT1QzRk1wRnF2NUdzMzVHTTVGVUszRkZaMDU4MURacUVwU2owQ3U1QjZxcU5kRmFmV2YxdkFKN29ETkZWMTVlTGhXMmxFblRRRFJRRVpWbXJvK1VvQkh3cDZQM2dsMnB0TDVOVXNHSUI3VGluTjQrNHpmQ3F6Zk9HeHpBYkpIVmhJcUdmdFJpb3pHVStDU3NjT3VNZXc1TGhHY3psNFBlMmFWK1RrTytXdEFuQTB1K2w4RnYzTHc0aVNwS2VDUERqemhCOWtrZ0ZJQ0QrSTdBUUF0dVEvaFk3SXVLSjRkTHFMdUE5QU5pRFFQQnl4MGFnYm8rK0JReldWaThNYzdZUHR1V2Y1bEdMV0trNXA2UXFBT1V3aDRRRGdUdUdCL29MdFBCSGhrdXJWMHY4U2FPNVdYL2ptdjR1V3R1OVpQMFI4UDVheStOQ2QwdjZPMEVaTTJ1OEFmRXcrRGl3ZXpsRWh4VENJT0tpR3F0dml1bG9zMkNWSUdEMlNGeGNqeWdFeHpzV2x3KzE0K05NVnJDa0p2MU1NZTNMRFh0QUY4ais4STJGUW5xYVJRRHFDTzgwd283Tm9YSHZzcUxrNnRKeWFvYk94VG5nYVpzbDhBbkxkd3RWNDZuS3BVSVhZSjREWGdKTzVPZVhGb0JMWmZVQ0dBbzErdThDWWVrSWdVMDJlUnlya05Hckk3LzRSWllQMUdTRDBveG1MWGR4bmRrYmF4RkR3SklnQ0c1ZWZtTm5tZXlwOGk0d1FtQ09DL1lKbFdqVzFDYkIxT3QzSHA2TFFHT0lsNENDekJYQUhzeWpnaUhIMmpVa3VCenhzK1d6T25PSUQxbE0yZXdCL21XNHRMb0hPQjhiekt2QUIxUVBZVEdDSDdEU0ZqYXRubG1lTDZtNnhuMUhGUFlhTHlvZXhSNmJDQ2dnZlN5eDJpUmY5R0tkQ3A3M0dSWVMva21hZnBwQnhpYW5ENWpvZzhDREZqT0c4NDFuTFE0Z0pwQitZcmpCQ244TkRBS1hZRStBWnpGSDFCSE9SZlNDUVA0UnNDVm14VXVZcXZEakxkNDNWTllVQzVWeVA3a1VjMG5rRmNIZ1NMVzZXQmtvdmdUZURGb1BuaktNQUZmbFF2UXdjTGlPdktOVTdNYXNxMmxjWlBROW9HTDh1MlJQNjB3WW56eFdKZTVqcEVHN1hQd3J4T2RISjZkUFFCeENkQWE5VjlCdE1RRU1DWjBBbjR2cEFSK09mOEhvY2VFdHdNak9xWmtqYVQ1MmxJdDV3MldDVzhIdlNXdFF1OEN4SmtSOUozYlI2UUZtUWVlQlRrcjZ4UEJnUTR1aUtEQmt5TWRNTVEvZWcxd1dHa3JSek5LODVEM3A1eFlsbzRhTDBkRVI1UkR2UW9LSVE1Z2lFR3plZ2hTTXZnMzhlK0JSOER1eFRxRHdwUVQ5QUhCZHFhL2I4Rm5nSnNPQzdhVjJJVUlTRXNiYWp5TkZpbkVXd0Rud1BtQTdkdVBsZ3lrSlFpM3NtVERNZ1FyZzlUZjI5dVlTZEVtVjIvbEhzZkUzT2RtbllxemxzQ1F6Z1ZsQy9COGdaMXhHckFNdkFkOURXaWZ4MGRqOHVESTZXVDJlN0g5NFRWKytzeVA4RjhUdklWMG1PTlN4MUx5S25VNUlkZHdqNE4wQVNPY0MrMEN6MkVYQng0WUhheUdJYWk4VFh3Y0Y1OWJjajBLVTcraHQwZWRwK2FnTTlPYUFIRFFFeEVpMUdobCtWTE4xUzRpcTRCeE1MK1pGOEEyeXQyTk9JRjg3ZW5SbUQ4U0pzOHFhdmtLbDNIZXBwSWNNYndmT2wxMHcrcWVSWThlaVZ1cmNLckttbzNOeENmaG12QXA0RmRBTkRzQUVzSzN1b0lFWDZ2bEx4N1pwWGExOFBDd3psK3FySFRROXQzTkRocmxJV2t6V0M3Mkl0QmU0SHV0aDRGd2dNaHhBWEdtb1lqNzAyaStYWGh3dTlmVU1yK2xiZjNaMy9zK1JmaURwZndJWFl3Zk11VVluc0o4bkVXb2tHV25sbTBRQUk0Zm5JdUFwbXhNMjl5TTJBc2VBUWRsRE10c3FjZndWcjEreGxQNDM4T1lhblpkSGpoMnJCNGRaVTdsZW4xbVdPQmVZemIyMnVKU3NINTJhbmlMaTNVZ3ZnODh4SEFmbUVIOE0yZ2RjWjFIczd1cDhXRUhma2ZUam12TjVnYTBGNEVWZ3N4REMvNTBRRGtMMkZNdUtpNXBmeGt3Qkw0RTJZNzREbkJDOEhHZWdYTUhxeFhWLzFSRlFSUXpWcFBVUE5EdWZyYVp5R3VyMTV3SS9INW1iV3lIQTBhUFRzeDNMdWszd05kQkp4RlV5WGRndkExOUVmRjNTRHFFdEVyMk5ITDJZQWk0RVZpSDJnNzQ2TmxsZHFoTnY1ZFVtcDFqVFZCeWJtbGxBL0szRWhjQUhnQVhqaDdHWGFvWnhFNnI1WTdBSUhNUU1nVjZWOVh4S0NPbndKc3N3Sit2ZmdubXBGZjVJdGJxMEhFL3AxY0M4MFhQQVpra1h4UnB0REhzTlU0YXE4YmZCQlVtYkpPMDMzREE2TlYydDAyekhLSWx5MmlZRjBOT0cvVWlYZ2g0RS9UdkRLNEp1b1hmWDU1WmduMFdrMkVIOHd1alI2WWtFM1hSa240UVZBN045b0MrSEtVaW4vSzBrL3BXRlFxZ01GSWVDZUVpNGhMa0RmRGt3Wi95TTBSSFFvK0E5b0JIZ0pzdytJRys4ejFBWm01eHVTbiswMDVvME5CbnhzY25wSTlpM3lENHVrUWRkRFh3VHMyUzR4RkpYTFNIMW5NemxpR2REcEVjcjVXSytVbTVLaDJiWm1yU1FJaUFLMWtiZ3BDTk9KUEdIUzZ2RGNMazRlSFozL2tiTTE3R1dzRDRtL0xqZ1ZVbWJNWmVDdjQrakh3QS94eTRBRHdyOXVjd3J3RFZqazlPdnBQaUtjbVJEcXlDMkdXbFpMMFE1MzQ1OUgyaUllRHJ0UnpxZnlHc2xndEczd0I4bjRyWkZvcTRPK0ZOWmg0RW5VN1N6MGlETkJocHVFdng4dERxekNQRXlmWFozZmgzd3g4QkhrQmF4dnhCSlR6NHlWVjBDb2txNStBRG1Ib2tlV3g5RmZCUTRYbk5EVG1KL0grdGpZMVBUUjFKOUEvRytXSlpnb2lzTGhkRFQxVm1ReU5VaTZxVWxsaFlYRmxoOE9qYVFZZWYwZEZRWktJMmk2QnpNVmNDL0JjWXc5eEw0UTZQRGpwaVM5UGVXNXp2RWwwQ1hXVnlYNkM4cG9MVGRhZkJWS1JmWEFwY1picWlVKzlmaWFCUFNld1JYV1N3QzM4WGNQVFkxTTVGb0d6cWljUDl5OEl5dHU4QkYxSGgyV09ZQnpGT2pSNmVQWi9BVGdFakppaXNMQlhxNjg3M0FSc0dIZ00xQUYzQ1NlTm5NRVcreXZXTDRPbEYwY0x3NnUzakRZRi9Ca2NZTXF6RDNJY1pxaS93dGhubGJCeVEvSU9raTIvc3MvbUI4Y21ZMlExdnF3bWtheVczOS9hR3pneStBdHdPUEFqdEFlZVRkd0JPZ0Y4Y21weWV5MnRiTGxYSi9FWGtRd0JDaGNHQjhvcHFWNm1nQ0FXeGYwNThQaWk0VStpQ3dGWEdlVU00MWFvaEY3RjJnQ0h5SnBDN2JzOEQzRVYrTnpDc2hYalhHZ050clRCOEMzdzY4RzdnYTFDTnhCSHRzZEdybS9uWk1wWVUxWEM2dUYveFFvbVR6cXVDUlNIb0syRDgrT1owbDNET0JWdjVlRStTRzEvU2RKL2x6U0Z0ckZyMk15ZFc5UEVuWVBpSFViWGtHODVlMk4wdHNCbTAzdmpMQWJ1QkI0RjdNUE9JdytEbmdIc1I2ekdGdzFWWSt4TGJuVEtCdWdIT0NteVFWc1IvSGZHNzA2TXhVSy96ZkVOSisyU2tiRklKdXRka0lxaUxPeFY1VjMzS3NPWDRRQjMvN2liZExKcEZ1QTErRVBRRDBnb2FRYnlNT044YUFXYUFFZEdPZUJDNFFiQUkrc1hOcVppYkZYTnZWU3lGc0JIWUFmeUg3bnRHangwNnlFdEl2ZGpyNjZiYWtjQm9hS1NEc2VGTnZXT3J1N0FrUkJlRU5XTGRJdmh3SXRYd2dVQThiZkJ4NEJkaGpNeW5wUDlRaTVrbERWYkhYZkx2TVJzTkJpU0hNQzhCOUlRcDdScXJWVm5tbkZhTzNZN0FZYkw2QzFXWDg4ZkdwbVlWMitLbHlPL3FuRTFvRGxGVzVvMXpzdGJnYWMwMmNCTmVxbWk1TjFkejJNakFvcWRqVTBKd3dIRWJlS2JqRjVnYUpPYjIydUcvbnFkQWdualloYkxWNEVkTVQ3UHpvMFdNcmpPeHd1Ymc1b0FlQjYwYW5wdmVlUmlEL21qSXQ3b05ZS2RWVER0ZzV4UzVGdWlDZVRnd0FaVUhKWWhYUWcra21YdGtPSTMwUCt5ZkFkWWkvQjc2aWlHdEhqODQ4QzRUaGNsL0FXb3NjWkExSlZDTHJBY25uSVZaajN6ODJkV3l1em1DbFhPd0d2Z2w2cVNQU0hRbk5hK1VPL0RybDAwM0ZSamxUZzlyQmpZVkNXRHlyTXgra0hrWDBJUElzTXpGV25abXZsSXZiUWU4Qi94UHg2clZvYzhYNDBabUY0WUZpWHVZcXhHcVphd3dQQTZ1QU55TXV4dXh4eEdmR3F6TlJuRUtOaGdXM1liMXI5T2lwMk9nMEw5ZlNWY2pBVCtQVjc1dks2WngwcXdpNzBXQmtiZzdtV0NEMm1tZnJiU3JsNGlEd0dmQlhFTy9EbkpCNEdmZ2s4QmZqa3pNTHcrWGlmc0U2UXpmb0ZmRDVRQy9tQWVCUXJoYitkSWJsRXVoTzRObWFjUDYxR3BOVlRyOWJacmwrSWlKVEdLbHlhRkhtMmxJcFFIUWpZbzZJZzhCZGdoZHg5QlVJUHhvZTZIOXFmSEw2MVJDaUE1RzFXdWhaUlJ5TWd1ZUZKc0w4NG5NNzUrWUFvdXZqZzFHM1NuU0R2ZzYxUkxwNUwvQ1N4Y0w0MU14c21vZFdjRzJwRUFUUlk5VzVMUHpUR3VzY2JhUjNCbVdBS0IraUljUk53S3VJZHhKdndjeHFmbW5XWitVZmwzM25qWVhDRFNNVHM0dVZjdkVRc0JsRkNGMW1HRTBhOENBMllUNk05Zm5ScWVrWGlWZlM5eU51UTc1YjVnK0cxL1I5WHJCS3YxcWFHVDMrZjVNbk03aDJkVysrTTU4cks4NGJYVXljUmwyb2xJdmZNZXhhaXNLaHg2clZwamJ0QkpVOG85ak9zcmNqRW9BTk1vTkc5NEp2cWRYL2RPZmNYRlRwN3Y4cjRNZkwzZmwzTXNjTEhWRTR2QnlpWFVaYkJmbXhxWmxHWkw2dFZNckwwWmVNRGtmUzMxQlBjZUFQWUQyUHVRYjRqb0x1d1Z5Z2ZPY0hnTGs2L3p2S3hmTU05d0liRUlOWU9aMnlzbGVDcTUzQmV5dmwvaWVNbjZscFlqS2prUGx5V1ErekdyWERlNXZqUlBvMWlBMmdGN0NlQVVETWdoOUN1ck15ME5jMVVxMUdCTzlHdk4zb2hTVHR6aEI5MW5BSmNOLzRaSFVlaU9aZmUzMEo4d1M0SURncDhmdUtCL2JtcUVNTjRWVEt4U0hnSWNUbFNFTXlPU2wyYzIxSGhpcHdIRGtQdmxYd3lJNXk4ZXJLUUY4M2llQTJjUUdRak9iYkdtZXl0U2xzSCtnTHdJV0s5Nmt1eFY0QTdodzlPajBQaExISmFYWU05RDFsY3p0b0MvRHM2MHNkaTUwaEtnalhiUWs3eXNVL3NuUUhaZy9vTVNBTXIra3JTTm9HZkJ4NHhlSWZnUm5RazJOVE1mMWEyekt3RStraTJZdVdUMWljQk05Z2pnRHoyUFBBU2NSRmdyTFJrUEVGV05jT2wvdS9zQlJwWDJMcU5TQ2Q3bWlsYXEyMEtkS3lld2hhamJ4a0V3Ui9yV2g1VDdLTjBRUmlyK0lwOG15dUkxb05GQnd6SFZYS3hTM0FBNEl1eTkvRC9tUmxvUGlmTUdzUlU1aFBPL0pQeHF2SDZqc1pqWVhpK25MZktzT1hMYjZKL1lEaUU2dFJIR096WUZpck9PeDVjMDA0VzFBOU9sQXZjQlhtNHM0UTNUZThwdTl2eG84ZXE2YytZZ3hvdVF4bVpSdFhPRnpEcGRXckZNSVBKRjBJZnBxSW0wYVB6dFFkdmdqaXM0M0xyK2YvRFBOeDRHM0VXMEMzc2h4ZDY0Nk9RZUZ2U1RyUDluSGdKMGcveFQ0Zzh5cmk0T2pVek1udGZYMjUwS20xOGNFRlZpcytRSEVPWWlObVBYRTZwbjRHc3J0MkxSR25hbDRpM2krYkF6NHFrN2ZVQ01ialFmUVM1Z0R3QXZBRDhLNnhxV096N1J6Rk13cis2Z0pDV2tCY1B6YlJ5TXcxUVdXZ3VCSHpEMExYR2pZSm43MWszOWNoUFNGcEMwRHRNTk5qaG44V3pBbm1hOGRZM2xFVDZpSXdnNWpGL0lJNFVYWTlzQXRybThTZ3pTSHdMc1JsOFZraVlaaEFmZ1Z6bnNTNlp2KzRwbXZORUlGM085TE9qdG9MWjMzalVHK2RocWE2ODgvcXNRTHZFcnB6YkhMNlFPSjVFOTIzbm4zV0w0RXJnRTdnYllMdlNmb3p4RlloWVpEMEpzUTdKSDRYNkFFR2tGWWo3UkU4QWhvUDg0dFBuWGg5K1lkdjZPeklBWjhpMW81M1M5eHYyQXJxQU81RS9tK2dud0xMaU44UnZMVW00QjdWckxmaElEQXArQ1ZpVlp5K01JQnFwM2IycEVWM0prN2pDcndkQTMzbHNOd3hOVkt0WnVFSElObyswQmM2cklkcWZsSkVuUGk2RENtQVoyMzJDM1liL3M1aWYrNjF4Wm1SbXZPWXBGY3BGODlGM0k2NVd2SDJ6VHppSXN5WEVXL0gyZ3JzaXN3Vmp4eWRQajQ4V01xSGFIbkk2SThRMTh2YWFKeHJUQzM3cEdMQkZXSzVjQVR4RVBqSjhLdWxWMy90V093M2hWcmFkRXg0TzFJVW56alRQT2FMd285RnVKcWJmMzArc1NGWWg3Q3RWQWlkb1hNRDZCcmdScUcxaGxud0RVajNZZDhGdXR2NGRra1BZcm9RTjQ5TlR0K2ZwRk1wOXhXUXpzZDhFSEVKYUFGN0JwaEYra2ZNTHFEcW9LbnhpV3BUTkorRzA3cndiU0JUNDRiWEZJc1NQNVMwQWNENEpPZ3pra1pHSjVxVzE0YU51ellPV2k4VmZKcllLMTRGbkpTVU45eUEvVDdneDhBU2FDZjR2MHFzQmUxd25EZi93L0hKNlZtYUlRd1BGcEhwdGJUbzVlWDVSNDdPcmxqZTY1QU9OZEl2K3B0Q1U5dHRwUkpTTkl5MHdUYUNHZURUaUNjVHdxa0xKaFpPZjMvb0RONGljUSttQjFFbFBsUVEyYjZUMkk2dGkreWJGWFNYNGgzVHE3RnZSV3dEYlpLOUdYZ21UWDk4WWdiaVZZL1VzM3E1NlVFckw3SmRPZDIrN1pWVFZBWnVyczNuazhESE8rVEh4eWFubHhKNERjM2JVUzdtOGgzK3JQRFhnUFhFdnN4RzJjY0ZOeU0rQUh3UzZhN2NHMTVmRlBUVTFxSnpqYnB0dlNRY0JCL1pVV3A0eWtuTlRnNUd4RXF0YjF6SmwwMCs0RFRsckRacDNBaUlkcFNMU0h4TzBoQ3dpSFJQWkw0OU1ua3M2YUUzZWV0R2x3QjNTeW9KclVLY01JeEc4RG1MdDh0c0JUMXRzMnZrOEZ4a2Ewa1NsaFljTDlIM0VtOVBiWFZIV0orbW43aFBEL3FLd2MwS0lWcGRTVUpwb2xrUUFDSnBrK0JQNHFDSXB3Vi9PWDUwWm9sc1dseS9wcjlIK0Q3aS9mSkR0a2RzZlJENGx1RHptTEloRXR3NU5oVnJZQ01ndGZkTHZFTmUvcjdOczZBdTRLYmh3Vkl1bzYrc0RNV0tnVDdUVUNQcmVTdU40b2FCL3FJajl5NDZISktqQnkxMTE3elUyOFltcHhkYTBBMEFRYjdWY1RTK20zaVg1R0hoS3pEL0dla3g4RlZZL3dOenFKbUVseEJITU8rTkNEc0ZPeTB1d1d4VEZIMlJPRml0UTNwUTB6YW9VYzVLZDJScFZkTkx0TUVQUUJUWm41YVU3MVMwSU9sQ3pDTDJyYU5IWnc2bjhKdG9YbC9xRzBSOENwT1RtVEwrQ3VoT1NWdXdkOWsrVDNEQThPWFJvOU9udE5DZU54eFJ2QXRjbERSa1dJdjlLUEFweEZiaVU3SnBrM0xhY3RiZWZDdkJwQTFkMmhVSUFKV0J2a3VJcDFRUTZxNzUxWThGaCsvU2VqckdCSUp1bEZVQVA0dTVUOUpYa2VyZnBtMFNIQWQ5YUd5cXNaY2VBY0hpbjdFRzR4d1FlY2Q3OEIvQ1BDZzRBcnpqeGplOWFYemtGNytvQy9XTVYramtNdDh1LzNQbVpldDlrbFliSDR3M0luVVMrRUpxUDZ6eGNrMDB4RnRzOXNuY2hYalEwbm5ZODRoZGlHOEEzKzBnbXNybzk1QkV2bmFpRFU0ZDk3dkZNQTVjRnVVNzhzVEJhM281YnhVcFJORDZkRWVXS21iTjB5eU4rR1h0OXltWlR4cWVHWnVhUHRRQ3QvR2kyMHFsUFBiRndMTVdYd1dXc084QW5qUWNHWitjU1grWjNPQTVqdm9kQ1lYYWNyOGhEbEMxRGZ0bFJNRHVBUm81SkZvUGRQSytwWkhPWXVSMEJqb0c4Vy9pSDdvTnM4TGZhRU96SWZUT0VHMEZ1cENPWXo0QjdBL3ppeWQzbm9ySG12QVQ1Y2ppT1BDcXpQbzRFUFZhek80NDlOU0hnY2l3RVhpZWJBMUs4OVNvYjdlcjBhcFJ1NXdSbUlKbEJLc1JoNzNzdlMxeEUvV1daNFAxKzR1ZG1uanM4SW9URzIwWENvdDV4Ui9hckkrL0xJcVBISU9SbEt0RjdxdG8xdnd6aWlEYWhScXRHclZUVFJCRklZd3Z4RHpYc2R3NFQ5aEtnd0NpOGNsanlTeGt5MlUzUWF0Um44c3RSc3V2NS8rWDRXckZtWk9DNElJRVQ0QlBKdWhrcmI3SitrYjVURUtOMDRVY3pTdVpWYTU5QXJVZW1LNmRpVzduWUdhdWhtM0tLL0JIRHM4QjdCYU5nNk14SkROWHAvSVc3WXp6aW5MYUoya1pNcVRxeVBpbFV1cnJBZmRpWm93WGdJRTJESnlPYmxhNUpiNGlEdG5VSW5kamU1ZkZVajB6Wm1zK2daOGNhTnFWc3p6SyttOWJueVdUWUtCSWJKeVBFQitSNldyRFRDdXRUTnFKZExrbHZnUEhpYmU2cWFsTE4vWmVhZ2UyaFU2bWFMWVRlS09jbmtaUmlrRHlwYktuVkxJc0ZSSGR3Q0Npb1BnVGhIcW5hZndzT0dNSExvMGZPaGNYWlI2b3p5ckZqdVZlNHYvbW1LZzVqTDh1L1V3SEtmbnNqRld4eGxTSk9KZjhBbkVjZGFnTjdhd1JxOStuQjZsVnVZRy84L0JjaE5nbGFsOHhpNXpSZWJZUEc3OGNSVkY2aXFWNXlvUzBROWpPQm1VOWI4S3pXVWQ4S1BzRThTR3JwR09XN2llTGgvWXV4R253STJuV2FNeHU3RlJjQkt3WC9MaGo0ZlgwWXBIVno0cnltV2hNMWtYbXJ4aEFLaVBPeDZ6MXFmL2x5VnBTMDlNNnpYQVc4MjN4eHllbUVkSFRxbVVMcGRvK2hYbXhka0FpclQzdDdGMUVxakx0STdSYkFnUFpXbERHZEdHcThYTXZaZ2d5V2M2eWMyMzlwZFBoS3l3ZlFEeGZ2N2Vaa2ppVXdqOVRJNTFwbk5ORXNwZ2pWVmVmWWc4akh3UnRFY3hIc0s4TkU4a1hUOUxMMHVJenh0LzVMOGNqbzRjY2IrVUE3STJXZlNJRC8zUXJJMlFzODZlRFZsTUJnTno4NHZlSnQ1YjdnVGZucE9SQko5TDRHWFIrUzJYdnJuMUhpOUEzY3I5NmZURURQNmtBV1JvVTRGU3crdXNJS3NzMlJBQzE0M25wWFlyMFZHaWxFYisxY3VoY1BCRXQ1cjlHL01YaFk3VU55SGFyYUJZMFRiTWtaTjIzc3lPLzZjdTBVdTlXL2Y1YStKV0I0cm9kNWVLNkZ2aG5yQkQvSC9jd1VadkRPNDY1QUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRXdBQUFCTUNBWUFBQURIbDFFckFBQUFDWEJJV1hNQUFBN0VBQUFPeEFHVkt3NGJBQUFjRFVsRVFWUjRuTVdjZjVTY1Zabm5QOTliMVUzYmh0NmEyRjFkcWU2SldUYVRqVEVia1dWanpHQmtPU3c2K0FPUUg0YlFGYVBvb0tMTElzTnhXTmJEbVpQRE9jTTZvekxJT0RralR0S2RBUDRZVkVCMEVBUVpkSkRETWlHTEdTYkRaTnJZNlhSM1lrNXYyN1p0cGZ2OTdoOXZWYVg2N2ZldHp1NytzZmVjT3ZYV2ZaLzczT2MrOTduUHIzdHZ3Y0lTYXA5a0NXZjRQZ21UYkpkVm40WW5pUy9aTmdzK2k2YWw2a0tsWER5M1VpNStQWU0yQVBJSkJGSEc3K2I2cUFsUjh6TXBNTWwyeWVjNlhCMjJYcC9XZDdMUFp2aXM5ODI0a3QrTmQ1Y1hDbUZaWi9zV3dUNUxKMUxvYmJScEhteno0QU9MbWRGcU5wTURUekpyS1J4WkU3VVVmSkxlTEdhbHRXMHcvT3pYdEcrUitEcFNHWHN5bzg5VWdwSWRKcVdpbGVSa1NWT3JmdE9ZazRZbmxZbmJ5OFd1N2VWaVB3c25ONnQ5R2cxaGU3bTRRZUpMUXQyMkVaeHMxU1pyT1RVanpYcWZ0UnliMjZVTklrdjZtdCtuVGVTaVo4T2x3RTA3Q29XbHBESzVmQUdpU2wreGpQaExZQzBZSkF5VFRXMFdyWm84cmN1aUdkN1cxNVBQbWE2aDBlTW4wNGpJK0U2K2I5WFhVdExaVE0rVlFHZDBWcjRkbUUxclgrbC9YWWNqUlh0SFQxU2I2d2ZLdmN1d2R5SnROS0RhcDBtSEpYRXQwbUZaaEMxb0dGQUo5T25yeWoyZEtiQXQ4VzB0bGNMV1VxazlnNkF6b2FjT0V3MzBGL3NSbXl4V09SZTZNbWwzdURRb3JHcXVxL1QxNUlXM0l3MEFJRERFUW1aK2thQmpBVTFMRWJoSXpBVWJnRzA1YTkwWkRHNUJYMjBoS3JlRjZFT0ovck1NVFV1RG80Z0xNRk5BUVdoWnZiN1NWMXhmNlN1dUJMaXV2eWNQZXI5UllVRmpheVBpRGt3ZUc5a3Z5NTYxak1WWW90OEZQRmpLcDZxWFprbTRWdEJ2Y2VPMlVtOUhpellMY0c1YjBac0hQaW00Tm9HMzVmSWQ2Q3UyVjhxOW5WdDdlNVBTdmdaNEJYaEkwQVZRNmV2TlkrNEF2UStJWkswQ05zcDAxbWlNS3VWaXQrQXVtU0l5UnBPRy9VZ2RtQm5zNFFSTkMvcGRpam1OQVFQc0tKVTZaTTVIQUxvbWwyTnpScHNGZUxmMjloTGs5WWlQZ2xaOWNFV3BJd04ya1VHUU9SLzRUaTVRdkxiVTJ3ejdyMEFUbUk1SUZBRXdGd0tic1h0cmJjOERWZ0xMZ1dqSHFrSkFiSFBNN0ZIQkFlU0N4RUFONXpRUkIwbFhMNWtTbGxZaWdEbEY3WVoySUpMY2libXRzcUszcXdrbVZWcnlPWGNKUGkvVVpia3dwMmh0TXhHSmZoWXcwTklrWWxPUW44b0gvK0cyRmIzeDhoSWQ0QUp3YVRDVEF5dUthNFUvaTVqR2ZMOEdjNFZRc0Z3Q3d2eXAvRExpRlJJTWh4ejUwekpSck80QkdCNGFtNWhJMHQ5TVc1cSt5Q3JCOGpLZzNlaVEwVmVBaTVBdlR3NHkyVTV3RzdERk5waE9wTldrZS9ja2YrZnl2M2tWZkZMU1dzU2RPZkd6U3JsNGQ0eUhaWWdvd3BzbG5nS2RpemxzKzdtQmNzOHF6Q1lBVEhlTU4vUmoxc1RQK2k3U2Y3UVVmSnJXWjVNTVN0QVRwZmxKQ3diYmpNQmlDakVEWGl0N1dyaUtkRnVscjdmTVFwK2xVU29yZWdyQVJVSWdJU2t2KzkrbDlKbjZlOC9QSnF2QXc5Z0Fqd0VQU2ZxNFlEc213cHhBM0lJSWxyK0grSkdKSXFGekVmMFlCTDAxeG0yV1dJNUErQUJ3a1Z5VHIvajdIMXJRdEVpSHBVbmJndG0rLytqeGFlQVZFSVlOaGhGZ0xmYU5IeWdVNnZBTGcrV2dJdElheTNYQm53WFcwcm9rSjNLZnhReG1PWGlHaUJzdERRT1hBT3N3WThBVG9EV1kyZnpzZkJXNEVvUEZuRkhkMzN4YlRMdW1JeWtDMWx1dThaSnBvMWRJMTEyaCtVZVNPVm5ybHhybS9iSFR3Z1pnU2hqQlFOVFp2cllKdG5tcG5SOWJzWnF6WXc4QzU3UmdVcEtHWUlYblFGOEVsZ0ZiRWJkamZ3OTRHcGdHcXBocmhHY1F6MGF2YlZ1SnVBQjRHZnNaOEw4TXhKSyszckViY1ZoNGs2U091djRTUGlMclFNcjRGMFFKWitwV25LNFQvd041VG1nNWdFMjFSdlFOVzB1bC9DSjQrQTgxdHhEd2xPRmZRUDNiUzcyRkZreGFRUERla2JIcVBORm5nQ3NRbjdIOEdOQXBjUWp4Tk9MSFNOY1ozaE1SWGdCdElyYU9JMEM3ekJFRmxSRDlpbGZIazVpM3g0NnFKOEVSc0d2dzJOaDAydGdyNVdMWVhpNXVBTUpTb2RHaXdSZ08xUUxVSWxBR3Bnd1BBTy9QNTZKMVFHT1d0dmNXMnpGclVJMU1lQlZwMW5ZblltVU45b3pLL1VlUFY0RlhheDhBS3VYaWhZTDFnNk1UWDZ3UGJtdXBGRUxnQ2tuQmVCU3hHalNEM1MrcEczd0NHQVpXR3o4R0xCY3FDRCtZWkZTdGp3THcrOEI3Z044OVU3ZmlkRkVZQnUxSEJxa0FIQUgrTlRBdGRPTjEvYVY4cmJQZ0hGMkdFa0JzSVBrQmRoL1FMcW5VVEZnS3NVdlRKanBkYzFwckpjcmxvaTdFdVFDWW44ZDZqenl3SGh5TTlsdmtnY2VCZnFFTm1EdjNqQzV5SjZMclZ2VDBBM2NDYjZ2cDZ6UDJ3eHBsNzhqWUxQaWJzZEdpQTVnQUNzQkI0SExaNitvZHkzUXFkaHBCVklHZklGWUxPc0ROcmtXU2xtUjJJWldwTmZ6VlpwajhuS1prVG1CbUVVZUFZRnhHdkI0VEFkOFdlb1BFK3lUV2dqK25lUlpJMStXRlF0aGVMaTRQUVhjaGxndGRvamlxV0RLVmtrWHdNNGd4R1dvKzFhdWdFZGtGd1kwRC9iMkIyQTJKZkpwNU04SW5NUDJPRitpL1NlQmZLcE94bUU2eG5GaC9OdWplTXo0ZUdYNWMrejJOT0NINDdacWtIUUwzQ2Y0UTB3VjhNY2gzN2hrZmp3QzJGbDhYS3VXZTdyTTcyNjZKMVl3QzVoSkQzaldYSTQzUUplUENYRnYxRVBBeU11QnpnUDhGYm5lc0c5NWRjdzdCbmxNdDdXS1lpZEFVVUlyOUlINUd1bVZ1bFdWZDhNN21EWTZscUxsdEpQVHQyRi9rYXF4OXdEcEJoK0Z4eElkc1I4RG41T2oyNnB5cjIwbzkrWUZ5Y1dOYlB2ZFpvWmNrUFFEcUJLOGlEdHduc1ovbERCS0lEU0thMys4ZW5wd0Q5dGxNWWY0QzhlK0JXYUhWZ3JMZ2VnQ3A1bm5GVHVGVU1GTkNKZXdabjFiNFNTbVBVdXJTNkFCeHJxTFRScUJlQmtmSG55WGliYkdPTllhRGhoTklsOVF5RzdmTTQzc2p3b2R6dWJBckYvUlVFSDhuNlZOeG1wcVR5UHVGTmtwRzhsMUR4NDZQMHVUcE54TzFGQVBydGM4QzA2Qk96S3ZBejhDdnhBenk1WlcrNGpwVGN5Z0VSc05SWUdWTjRVN2JIR2hpUWhhVHlLcmYxdGZUaVdsMzBGUmFtOEZqNDRkQ3hCV0NsMEZGeElEd2F0dGZBWDRub0w4SDdoRjhXTkptVUtNUG82ZUJhK0pmT3FSNS9Wa1dnOUowUmVvU2NTNGNScnlJMkZhckdRSHZzazBja25oOVBleXdEZmdWd1RteG82dW44Nyt1VHBLUmVtWnhJSitNT1VNT3JRS09FSGtxMGE3eHZlZlllTFVhaFVlQm53THR0cDVYSEtaOVF0THlPTTJxdWNaRTQxbndLOGp2RlNvQ2g0RnI5NHlOejlSeG5vbEVwVXJZM3BHeENMU1BXUGwrQ3JUTENNSExpdDJHeStxeGtHQlc4QlR3VnF3eHhCMjdKeWVUVW5YRzJWWWd3cXdSL0RUbk1Kc0Z2TDIvdDdNdEYvMVg0ZXVCTDREWEdZWXRIZ2ZQWUUzYS9wYk5xTTBYSFBsZGhoL0l5aHRlTlZ3OWVIUjhmelBPcFJ6WFJkRjY4MHVoaCt6b2JZS1BJcTJ5WFRGOFM3QWVjejRSM1k3WmNBTDdDTkltNE03Qm8rT0hVdm82azF4K2MrZHZ0WGx5OTloWTBtREUrNHl2YVZ0UDVGdEFtekUzaXVnZzZMMUc3OFFlc1hnUSs3c09kTXBVd1c5RXVoZFlqZndDNkNORFI4ZWI5U3hrYklJME15WnJ5UUF3ZUhTc3VyMWN2TU53anVDZHdBYkJQc3dob3pMQjZ4V25nNTYzV0JiTUVZdXZYRnZxYnMrSGNBMk9makIwN01Ub0diS29RZGQxNVdJSmM3SGduZ1gxcFdKN0NHd0VQZ1pzTkR5THVDSkVPc2hacDVpdnRuOEQvTjhrclRUZWh0Z2lNd2RNSVVxWTViS2VCMWVHUnNlSDA4WjlwcUZSWmhrY25UaFI2ZXU5MmJnYnROTDREWUloeEU3TVd4MzM4VGVDODVBKzQ4Z2QrUkJ1QlM3S3plbkJCRUZwRXIxSXNnTzhHNWl3ZlhKcnFSRHlhaXRLYkFSdUFEYURSb0RiWkQ4Nk9EbytVMjlYV1ZHOEY2bG92RVBRZ2JTYVdPZGlHQVYyRS9sUEI4Y21odFA2aFZnbkwzcHhXYUVRenU1c0wyS3ZsN1FPZXhvMFpUd05URW1hQXNaT1JlSGtnL0dTQ052N2loY0E5OW84Qnp3ZytFNXRRMkhTMXZYQlhobkJLMEhjWmJnWThkalEwWW1yV3pFbXBZU0JGYjBGeVU4QzN6UzhLTGdPV0k4b0VNZVpmdzE2ZU9qbytKRzBDUmdvOTNZSTNvMzhEcUNkZUkvdG53U1BobDlWRDlSMGE5cUVCWnFYNVB0TGhkQVcyZ3ZBZXNIVndNVW9yQkVPaElEdGcwSWRRaXVSZzgyQnRoQU5WY3JGaDhBam9hMzZiRlJ0dnhlNEhmaTI0UWpXS3VIUGc5ZFlUQXY5TmVJYzJYT1lmV1F2LzdURVp1eVV5dHNVNStMbUJEY0RZNGc5d1BjaTZlVjlJK056dEloZzlvNk96d0xmQUI1S1kwZ1NQdm1kdjd4UTRMV3ZhUzhHOFVucWVraUs5dzRkN3dZRENLMjIvSXp0WjJVdVZSemdubXU0RlhUL1hMVjl5UGJlSUwxZXFOM3lxOWhSQkFja2JvelR4UTVHandzSVVYZ3NZeWFUakdyQWJGdlIyd1crS2ZhWkhDRnUwTHdmR3h3N1B0MEUxOXcrYTRNbHpWRk9TMGtubVJmeVozZTJiUWMrZ3loZ1hnQkdEYXZpalNFMW1HYllqWmxHbEd3K0kvTkd4QTVNRWZndlFoK1hlQXdZaXV3anRXQjFWdUptMENXSXg3RTdaRjhFdW5yMzJGZzFnNmhGaktxL3k4a2ZRcXpDZmtpUmJoZ2NHMC9iZlQrVGt2UTNreE9WNll0cWUxL3hFNWhlUzkxQU4zaUxvTmpJa0RhaUc4OENMMk1PSVA3SjZHVWNWYkhtSkxwQXE1Qi9CN1FLZkJpWXhxeXY5VE1CbkNleER2UG5nNk1UdHlTSWJoWHdSd0NWY25jUmhaK0NCaVZ1R3h3WmI4NVNKS1VrRFdlV0ZMV1VxR1NkQUhZVUNxRjY5bG1FQ0lUeldKY0sveVV4RXhzck0vYlltVVBzeHd5RHBzR2RvSTJJR2V4RHhESGlTeEtYWWJZYUpoR3pNazhJUGc4YzNETTYwVW9xVW5WUHBhKzRFMnNMNWwxRHg4YWJsMkFyeVd5RmZ5bERrMmtsRndGOW9MYzN6T2Vpa3RCVmlLdUJ6WUtBaGVGNTVIYk1hcUJEaWpjWVhFOURXNVBBTVBJKzRHcVpuUmJQeU13TWprN01OWGMyc0tLblgwRlhEUjJkK0VLbFhOd1k3Qk43amgwL25DVHl1bkp4VFlBbmhUNmllUjZ2cDJQK2Y1UWt3eGFWZ2Y1aWw4emFHb1A2UWE4VExqdk90aGF3dXhEdG1QMUlqNEJmd053SS9DM2lYcG1IdzB6MWhycTVIaWozbElGdVdhc1EvY0J5dzRzUy93bnpQd1dQRHNiWnowYXBsSXZmQmxWbEtvUEh4ak5Eb2YvSGtwU29OQU1TNVRNQUc3LzNqa3hNQVM4QXo5ZnJkaFFLb2Jyc3JQWVFiekIwQUlISUo0ZkdKcXFWY3ZGOXdEcmdoNWlxb1h1K3MvMFNKdmtlRUpDNlpHMGsrTzJZNVpnN0pLNnNKZlJ1TnJ3UnVLWGVWNlZjdkZTd0dmTzJHck5TL2FNVzQyaTFCSk9XdVpXbGp0MktyQmV0Nm5aUFRrWk1Na3VjSEd4a0N5cmxZaG00RmZnT3NZS2ZRK3pEM0Z3cDlUdzNOSFo4MGhHSEpXL0dQQVc2WHZKQncyVTFZbS9ETkVLbFNsOVBGK2F6eEdjZ2hqTUd0TlNBczhLN00ySDBJc094cElTZHdXOGdQdnNGMGJaWStmTTg1bFpCbFhrLzQ2REx5SVVQQTMreTc5aEV0ZExmOHdOYjV3YnpTRFVLcy9rdy82UUkwME9qNHk4dXdHMTlYT0ljMEYxSVZTQ3FyQ2llQ3hRc0RpQ205eDZkYUQ0bzE5THliaTBWQWhBZUhKdWNTN1JKRzFjYXJraGtpMnlxdFVyVU56cW9sSXVyRU44bGRpZnVRZXlTT1JSbXFtK09YdHUyMmRZdXpCVkR4eVplcmZUMUJ1eXJCRlhETTRhQnZhTVRYMmp1ZjZCY1hDWHg5N0x1bDdocHo5SHh1ZXZLdmQwQi8xRFMzYmJmZ3ZSNW91Z0lrZWR5djVtYjNUMDV1WURPclQzTDgvbTJmSmZpN2NEemdkOEZPb0h2RzU2eEdkbDNiR0tXeFl6SlpQb0N4ekNqUWRZU1hlRDhTYXlSV1kzMUNIQ2xyQTdnNWQyVGs1RWRYZ0M5aUxocG9MOFVobzZPendrOWJ1Z1FiQXR4RE5qSWkyMHRsVUtBdTJwV2VlZWVvN0ZWRFBKVm9GZHRGNEVDZUJuU0ErVENwMmhyVytEVmJ5OFgxN2ExNVhjSm5rVDhSTko5a2o0a2FhdWsrd1IvRjhUWEsrWGVEdytVaStXdHBWSlQ4d1Y4YVA0c0NoMnlZcmptOTFIaUdTRFliS3psVjErUHVOZ3dZZlNuUUJnYUhhOENkeU85RjNzandPRG8rRW5FQzRhM1JpRThYZS9zL2NWdThpRzZDbkVWOEdXa2lkUDkrMUh3ZDRFckpPNFc3QlFjQVgxdDkvSGpEVnBxSjZ2dkU5cUJ0RUdvbytIMXhQdWpjN1dUUDF2QU93VmZiUXZSUjdlWHVwTkhQNlBFSnlTekZVdGxERkwxMmJaeVQ4aEpqd2d1YllTZjFoOFBqbzdmVmdmY1h1N3BCSDNiTU5YdTNOWDNIVHNXVmNyRjVjQjlRNk1UVndCVVZoU0R4SHFMdjhXYUJkNDhORG8rT2xEcURzQnloZkJaNEVLa01lem5rWDQwZEhUOGE4MEVWc3JGa21BZjRpS2ZqbFFpWXVQMFhPeHdNMlg0UjBSUjVoMUlXNEJKOE10WXQwWHczTDdSOFhxN0JVTFViQ1dUT2l1TlNXbUtNTWp1QXZVRGMwQWVjMUJFOXpUQk1qaDZmS2JTMS9zZDJiZWZZbjRsY2FwNGxkdzQvWXdDcXpDUGdMb2tib3NpZDFYS3hRdUJOd0hiaFo2TzdMZnZIUjAva2tiZjluS3hhTGpUNGdUd0JjSFBUWnhpaWgxcS94NndtVGhXWGltVU4xQTd3TE1jYVl2RkQ0UDVjcVd2NTQ2aG84ZFBKTWE4SUlGNHBxYTFHVGFPcjB4QVlCRmt4akFmMUs5UGpTMXU2MGNOT3dtNkZQaHp3WVhFR3cxc0t4VzdiQjRRV2lrelovazJpZXNSd3pLSFFlOGhpdmJuWms4MWNGNWVLT1E3TzNMTGM0UXlRV1hINTJjM1lKNEF1Z3h2cmgybVd4NXZjREJDdk1uN2dPRUUrRmFrelEzcWJDVGxMWDhVNjZKS3VmaFh4azlNejV6YS82MmFRVm5TMHorVE10RGJ2Vnk1OEVPa2xjQU5PYzkvYmZmb2lXYkdCaUNxOUJXWEFZOWdaaUowUllCOXdnOVU1Nkx2dGVWemV5UmZWVHVDOER5d2N6Nks5cytiazJlZG1wdWRpZ2pMT3R2WDFBTDR0eEJidldYRVJ3Vm1FS0hHckdlQXkydkhNaWVBZ09pV1JSekE2U0Q0WmNRRldFVncvdlQrYVJ6ZzFYL1hZdWNaWWp5N0hPbit0TXRaUzBuWDRpS2lHdUU3Q2ZyRzdwOHZZRmFqNU5xcU0vUFY5dThMM1JUTU91VHpiRzdQNThOT3hSWXdYaC9XdWVDL3lvVlF6Y0dVYysxalp3TkkxZHBteWs4VStUNkxTV0RPcUNUN0p1TE4ycGZBWmRBbXpBbmo2d1VYV1A0OW1mTWwxaG5LbUZjUnkrb25zRzNQSUU3SWxMRGJPYzI0VHN3cThNY0l2REZYWTB4ZFBUYjJYcHUrYVlKSkxlY3Q2Nm9pUzlidW9hUGp2NjdCTnJjUjRQMlRzM3JUMmErZEZmdytnUnl3V3VLWFNMZGpCY1ZIQ0pBNERoeEEzSS81WTRLK2dmUXQ0SDVWNXg4YUdqLyt3a3ZUdnpyeHBxNWxBYmhDOEdlQ1UwQy80SzJTZHhuZWpyUkM2TmlwS1B6M1hIQTl5M29NS0FuZUpPazF0YTNCdUZmeEsrQWZCTDlxWkdwaTZsOGhYaGwvbEhSYzY4eFpTdElXd1h4Z1ZZRTl3NU5MNGFGU0x2WUwvdEh4YWVkSTBHbHBHZmFoT01uSVU0S0RrVG1TKzNWMWRzOXBaN1NCWjZEVTNhNFFOZ08zUzF5QU9lbDRCK2w2eEJqbWFjUkt6QUJvelBDdXZYRVV3WTVDSWN4M3RuY2pObU91Uld5V0tTT0ZlRC9Fa1dFR2FRUnpHUEZEdy8xN2o0NlAxR2MrT2Jna2diQ1lhYTJZMnBMaGxYSnhvK0FuOWRSM2JSWWZ3dHcwTkJvVGxUYUpseFVLbk4zWjNxL1l5bjBRMkNTcEM1aTFmUXZ3RmtrdjJmNHQwQTd3TFJKM1kwcVd2bXpwWTN0SHh1YWFjUS84ZGpHdmlOWEFKa3cvNG9qTVdKekQwOGpRMGZHeEJCME5LOWt5Qmt1cGF4WFpad2JGMjFZVTI0Rkt2QXlNNC9OYUR4SENEVU5IeDA0MjRWekEvSzJsVW1nTDBRRHdhVVJac2FNOFVsUFJYelJNQ0VxT2ZBdUJYZGo5d0JzeFgwUDZ6OEI3aVh3UFRhY2pBZmIrZkdLT09KVitxSWxXV0N4QTliTGc5RTZTMFBwM1NOU2xQYWU5Vzl5WldBZnNpQjFiNWdSL1lYUDkwTWpZSkl1bEdDQ3FsSXNkK1JDOVUrSUc0cXQ1RTdYdkF1Z083SDhXM0N1NE4zZFdkVkp3amlRRVZ5R2VCRThKaXNMdnJsMFRUSTRwT1VtMGVNNGNYTE4wWkVsUkdreFdpUVpXRkRzRXQ5WXZVaGtlRGxHNGVlK3hpYW1NOWlIT2dQQkhnbS9hYkpLMFNXaTEwWnpnQnRrQmNTL29XVUo0b2pHVytMajVHcHRwVzg4RENDclJhOXJxQVdNYVE5SW1mWkVhYWhVN05qOW5mYWVWUlhwcmEyOXZrTmhDN1FpUjRVVUYzWmpZT1VvdWdhZ3QrRUxRSDBqSzEwNEJUUnJ2dHJuU3NBSHhkdUpJNGE3QmtiR1ozY09UYzQxd3lCb3hkQ0x2akU5dmE2MUQyTUtaU1ZJYVA2S3NnYmVTcmpScFN5c0wzdWZ6RkJCMzFQTC9FNHI0eU9ESVlvWGEvTHkxVk9vQTcwSUU0eU9HUWNNN2JOMHQrVXZBYnhuT0Y5cWRpL1JpZlhBTkp4UWZrSGhQcmxwOXp1WWJ0ZW9iQnZwTHlYdWVrTTZIVkozZTZsOEZrbzFUbHczcHJrZlkzbGRjUnNSNTFValB5djQwMGlic3F0SE9uTFUvQmRjQ3ZHMGgraVBRT2VBZkE5T0NJV0FEK0xOWXp5R2ZqMVhGM0xON3JHSDlvbGpBUEkyb1lpNllhMnM3Vi9CVnc4V1lqWXFpamNBekxKVG9wWXhlWTN6SmxNNVNPbzNFK3l3L0xiSjVOOUpkYlRtL0UvU0oybDJoUnpVMy8rV1VJMHJOeitHNlVrOC84RkhGc1drayt6YkQ5WUo3SlVYZ1E1anpFTGZVcnRDY3BzV2V0dldjekRtQ1VueURtUE93ZDBudXJPMkNaU3IxalBGbnZ2aS9XWEtMWUN0OVBXdUp6MWhzRUxvUDNDazBpblRINE1TSjVLN1BndmJieWoyRW9JOGdkV0cvZ0xrSmRKZkVWbEE3MEM3NGtPQnppbmgwYUhSc0lTMWlHTmlNdE1IeGpsUUI4UzVnalBpWTZQazdYdmU2RGpJbXVxaytsUWRaWG56eWV5bTNJU3o0V0JkSVdtZDV4bkpIN1I3SWJzM3hTaXA4RTc0UVJHMEQ1UWptWTRnN2dZdUJ5UEloNHdjdHJrUythL0RZZUhNK3YxNE9TM1FDK1pwZnZxbzJ4azg2WHRiRnFEMlgvT3VHTkw0MDA5bUFUWjRQYStXTUpqbWZyR3RlcHZHWkxIT2dscmMvRjlpVDJJQk5kWkNqZVhYa3hIbkVSOFEvVTJ2N01HYkk0bmtVUnZhT05LNWxMNDR3ekQ4Ykk2bVd5T1RmR2tZbGJiRjlBSEdJK0hMWXF4bE1hN202NnJ0R2FZQkpDV3JsQlRmWEJSUm5BQlRucFBZTFJ5RUtoMU9JV2pURE9ma2lvSWpVWWZNM3dPMzZ6ZHdyZzc4NDJUd3hXUU1OdFVCNUN0eFZDK1ZYZ1Yrb3dWd0RPbW04Z2ZqcVROSnhUNDUvMFFTbjdVdTJYTU5uMUlFYjkzODZnVEhEV0UzUnA4V1lqWGJiK25wQzdjYkcxYWZhOU1TRHcrUDE3YkMweVZya1ZNWmRhMWg0QXRNVm42ZnhTdUw3bEFnNk1HVkRYNHV4dEZxbVVWWStMQW1ZaGpUTFc0NFFQYTZuZmVFM2NpTldTODdvQWp6M0h6MGVBWHRUK2tndS9WU0dBMUcrN1RjVDg2ZmFEN2wySEZOU1A5QWY3eldvWnF3WFhMY0pLWDJralhPUjQ1cGxJWk5JbHBZK3F4VG50dFF0eURrdzNkUXVUVGVtbFNTemt2VnB2OFB1NGNrSWVDSE9xK2wwUWs1TjMwcjF3VTZybEd3aGFSbmlOSmMwSzVsV29nK1Vldk9DY2p5VkRvWnV6RVNyTmt2MGxhWHZNdldvekU5c1I3VS9IOEwyc0JlbVJrOGwyaWVqbTFTRGxFWkV2UzVwN3RNR2xlb1d6R3UrWUx3Y09PSFlvOTZNT2NuaXZwSTRtazE0R2sxbm9tY0FjSHlWWnl3KzFBWklSeEREc1pkaGtKcHYzcDZwMEN3Z09rbFlVbDgwd3laZGl3VndDdXBDTERjNkF1UUZJY3g1bFBTbGxQWkp3alIvcDBsRU0yd0FvdEEyZDFqd1hIenMxTVRYZVB6ajJpN3VuTnk0QWRkTWY1b0FMUEpKa3hWWm5tOHo4dVJnRWtWZHhOdGE3VWlyRGFON2poK2ZhUUxJZG5pemlVM3FteXc4RVJEMkhEa1pJZTREVjBGSVdnNHNRL0d0TnVPREtlUE9tckNGam5YSzRKZlNGV25sZEh0VEpyNWRNUWQrV2l5Nm5wZG1RRm9abHF5Snlwck1DSWlNbmpOeGtCK3JMMjF4ZkpidENLZm1ENU85L05ONDBjQ2YxaWdMU1N2LzVQUnpmS293QXA2dCtWUkptTFIyU1ZyU1ZFV3lQazJ2TmRvTUhSMC9DZjRxdUw0VFZaQjBEdkRjMFBGZkxMajIzS0tQUmJ4SkV0WnFjRm5LZUFGQzRQVTFHMTRtL2tPUExLT1J0YnhTQ1UycFg4cjlRZmJEbUNPMXY3Q0JlQS9oUnlud1NmY3EwM1ZxSldGcFBscGFTVXBmRjNZbjhSK0JkUGowZndxbTlaRm1QSko0MDVSdldsazArYUg5MUdGRW5McU92ZjRUeEpmNWs3aXlsSDlTNmtLYUdDWUhsVVZjTTB3RDF1WkxpSytBSmhTZm0vaCtSdHVsY0RmVGtTVlpMU2QxOS9Ca1pMUUhhYXJtZzQxNExocHUwVytXTG0xOFVvK2RaL3h1OVp4S2NCUGNtZUxKZ2sxYXlhVndOZnF2OUJVN2dlOElYWUQ1OU9EbytKK2s5SlUxaGtYMXVRUkEvYmhBR2dGT2VhN0RaQjBqU0I0N2FDYXc3bnNubjlQNnpIcXZCRXdnMGRlQlgvNnErcWF6WDlzdTFJMzBCeS85Y25vMkJaY1NkQ1hIVnE5ZmRDaDRxV1hZU3Q5bEtmWTArS3dsMXFyLy8xUDZHczhTajJFL1BYaDB2SG4vY3ltWElrM3lvdjhOWm8vNnlyWXNsT3NBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Zhdmljb24tMTI4LWE3OTk1ODk1MjVmNjM2ZjgzOGU5NTIyMDRmOTBkMmY5LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFDQVlBQUFBZjgvOWhBQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBQ0QwbEVRVlE0alkzU1QyaFVWeFFHOE45OU14VEpaRXI4OTR4UEtDVVVWNUpSRWFFdVhCVVgzYmtTa2FkWVNxSFlqUXRYWFFqZHVHbWhGcnB3cDB6RWlxS1FSWTEwSWY1WlJDeEZ4a0VraEJJS0djeGdvUmdUcEU3ZTdTTFBaQ3l6OE1KWjNIUHUrYzczbmUveUh1Zlk2SmJrZUpZT3ZiM25XVHFlWittWFVPbExIbWpVYTMrM0ZwZmU1Rm1hTmVxMU42M0ZwVjZlYmZzZ2hQQVJkamMrckcxdTFHc3JtTVIwYTNIcGoycmZvSDNZang5eEx2QURXa0k4SkRxQ0VkRU1sdkVhTFVqVzJvTTJUdVE3dHFVWWk0eVZoU244TExpRUxXVjBBNC96TEQyMERzQUR6SWp4cTNMS01EVG5GM3FDWjZMZmNRMmZZQzd5RzNZbGtJOXVUWXJlU2c5M3NRY3plTHdHSFkyaFdzWjk3TVd0RU1KUDFYS2JaeE9WV2R4QkIybGdDUElkYVNMNkRGTXhTU2FyUFpPOVN2SDl4SHgzZVZYNXFnUDdjUUFic1FrM3kvMzhpNExRYm5ZVy9obGtjZWkvNUZrNlVqYWZ3NHVTelVGc0N2d2FWMTA2WEVyOXBkbnB2cXowQXpUcXRaMkJ2d1NQOERsT29ZY25HTWZSY3VnWE9ObW8xNUwrZnlDRTJFNVdLdTJWcEJoR0xqaGRlbjhHRzBvTHYwYUdFZHg3UjBLZmpHOElONHFpZUpZazRYSzVqL1A0RmcrYm5lNTNiOThuL3dmQWNTdzNPd3RQa3lUc3dpd3VDS2J4TVQ3TnQyOWQ2NnNPQU5pTTJ4QnBUM1M2clQ1MmM5Z2J3enJ4UVFCRGdWY3cwZWtXNzFTQ0s2S2hhckZPZkJEQTFjaWZBL0p3SFJzdVBuKytCdndmTjhlZG1QK1B0SUFBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Zhdmljb24tMTk2eDE5Ni0xNmQxMzhhZjZkMDJjZDBkMTU0ZDhlYzJmMDk1ZDhjNS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FZQUFBQnplbnIwQUFBQUNYQklXWE1BQUE3RUFBQU94QUdWS3c0YkFBQUdHVWxFUVZSWWhiMldiV3hiZHhYR2Y4KzFtMGJPeTZMZzNMZzNvMFNvNnFvcWE3YXFqR21NclhRUmRFaHNvM3VoTkw2aG9rS0RJVFpWYVBBQnBncFZreGhGcXNaNGtZQldxUjFnN1NZcWdVRHRxQVlxclZSMW8wSWg2eUJBUUZGeWE3c0RtZENGTExYdjRjTjFHeWV4azJ4Q1BOL3V5em5uT2VmLy9NODU0ditJOUJvM0lmRTkwSjVza0M4Qk9QL0xBUDJwcERQZ3VldHFmZk83M0xnamZnQnNCd3V2dmE5SndQZmNEYlhlNyt6c2RIYW1VblZKT3pGbnZjR2pjMEU3a242WG13REErSkpKdTVDS1NITTJDNTNzVHFVY3hITzFTS3lLMmNBcUovUVdFKzUwSzBHMklLWjl6MjMydTl4ZG9CMHl0ZnVlZXh2d0ZHWVRtSTFuSi9QMUsxQlNPWTdSRGV6ejEzUTRjMEhjdGNBQllPUGkzTzJRNzdsZkJXN0NhQVdleFNoaFBHaFlPK0xMUUViaVJzR3I4NnEyMEZYb1VBSm1nVTFJZlZXZmRnbVNncDVGOGNWWjRBTkNPNEEreEMzQUdIQUhrTUxZQ2ppR01IaGxTUUkvbnJ3Y0lvYUJKUEQ1ZnMrTlY0SjgwR0RNb0hseEJmUXQ0TGhoUnhEbmdXY1JXNEFSb0UxUUJIcGtOaUY0R1NEZDVjWUhQSGRkUFVHZEJCb0F4NUh1QThCWUQ1d0c3dDdkM2o3UExqdVpuODRHaGU5bmc4STNNSDZSblN4a01ONFBUQUUzR3pwVDhiY3ZFeFNLQTU3YktPTVpnNzU2Qkg2R2lBUGpHRjlNMzVoeUZEbVlBdHl3SVZiVEtOM1YwUXlVS2xYNUZaQUQxb0gxQ0k2RzJBbmZjeDgzT0k1SUF4ZHFFbENzWE1RNEJsd1MxcTB3M0FaY1UrNzVUTzV5V05NT3JRUEdBV0tobmdlZUE5cUJhWU4rb2I5S0hBVFdDNTFDenFzMUNXVEcveEVpL1FUWWEzQkI4UEZLOWlXaEEzV3FCa2EzWUJTZ1JEa08zQTZjQjF5Z0FQelFqQmNyR3Z0TWRqSVhYcS9sQTIxdHp2dmFXbFp2YWs3RU55UWF3dFdONWI5Wk9hWktCamNSQ2VvbDRNN2U1c1NGNFN2VFY2dGo5Ni9wZENUdUIvN2MyOUkwSU9tem9PZVJ2UWk2RmZnd3NCWTRJK094VEZDWUFZajNlMjZEQXc4QW53RHVGQXBXT3cyejVWbk9JNzZEOFM0aTViOEcrQktsVUpwWm1Md2oyMWJ4Y1FQaXFNbjU3dEJFTGdUWW5VcnRLVHZoa3labWh5WUxVL09PemZmYy9ZZ2VqTzFJalpnTkEyZUlycWdMWEFRU3dHWWdJZlJvSnNqL3Z0cUozK1hHTVE0SjltZUN3bC9xSGxFTlhHL0t2dWR1UnV3RnRtSk1WNEsyQXk4amloaC9FQnkrV3FJWWo3TUptTWtHaFlzVjJ4MmdON0pCL3ZUYkNUNlBBRVJ6b0J3TG9SUTZGbysxeVN3T2JBVStBdndKN0p1ZzNVQWI4QjdnS0RBaTJCOUtUd3hWOWZoM1JHQWhmTTlOSUk1Z2VJS3ZHQ1FRSXhnYmdiRnNVQmoxUGZkcmtrNmFXUklBczlPeC8xeWRHaXdXdy9RYXQwM2lEbUN0d1FuUStGQXduK1J5KzBBUHhrYWhvaXBka09nNnRVdU0rWjY3QmZEQ2N2a2NrY0kvSmtjN2FXeGt3SE8zTytJUzR1ZkFVeEpIaGIzZ2UrNXQxU085ZGt1cm9MZWw2UjdCUThERG1hRHdSbTlyVXp2R3U0RVdvS0NvWmI4aTZWYmdOY1NnaGZaSGM3Z2IrRFRSNUR0SE5KaGFoTzRGZlNvbVMvYTJOSTMydGpiOUs3NU1CV1pONnM5TzVrY3J6eThCVHdONTRMaEZBNnNOZUIzb3h2QWtOUUFQQTQxQUVsSEEyRXdrYU1DdUNCNURldHpNRGk5SlFMS2ZPbVduZE8yNUhESVZFN2NEM1loVEdFOERwOHZUczhWWVlsVXJLQTE4cnBKNUNHekh0QWVzQ0R4aTJDY1JqaGxqR0w4RmppMHB3b1h3UGZjV29ubitkZVRzeTA1R2pjYjMzSThDQnhGZ25CQ2NOUGlSNElSQkxoc1U5dGJ6dWVLbGRKZlg2UURQQUlNS1ZSMThHL0FDTUlweEJQQVF2d0cxR3Z3YWVDamQxZGxheisrU0lyd0czM1B2Y3FBUHVBZjBTUFpTL2kyQS9sUkhnNlRqRlFKSllBUG9TY0UvaVhUd0ZqQWh1R0g0MzIvK3JwYnZaU3VROWpyaXdNRW9lejJSRGZKWHJodkhkSmVpSWRXSGFCWWN5QWI1aXlaS2lGWmdFMUZIdmJtZS81VWVRUkk0UnJUWnpNSG9xWlQ1d2RpYnN4L0tCSVZmQXNUS1RrZzBsdCtMMkFCc3FWNXdxN0hjTlVRb1hpSHdlamJJbGFxL0dYeDdLQ2lVRnRvTTVuS2gzK1dlQTIzRlNJRk5JQnptbHBxVkU2Q3kwUkRkNjNtb0ZieUszVm5KTU9QdlFHaW81cHhZbm9Eb3hpZ29hc0VyaHJCVGhnS2lGWDhrSHRZKzdaVm9vQnNJZ0VWTHlGTElCSmRuZ01OSTY0R3pnN2xjelFvc1Q4QVlBWElXcWYzdDRoQm1NMFNEckNhV1BZSnNVQmdHL0hjUW5OaXEyZkh5Yk1NWFlxRnpvZDQvL3dXaDFTVStIdEFCRXdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9mYXZpY29uLTk2eDk2LWQ2Y2M5NmY2NjcyNTk2NTU0Y2NkZmUxOTUyMDM0M2U5LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUpZQUFBQW9DQVlBQUFBY3dRUG5BQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFCR0NTVVJCVkhnQjdWd0xjQnpGbWY1N2RuYTFraXhaeUZwcEZ4dmJzWTBCSmI3Z0k0ODZJRUhFT1I3RkpZUUtTaHhzU1RZbWR4eDFwS0RJSlFkMWR6R2tjdUV3SVU2b1VBUk1MRXVHY3NxcEFrSVNJTHdVU0VJb1F5Z2N3SkJnVzM1cEg3TFdlbGlyeCt4TTUydnRTcDZkN1o3ZFdVa3VFdnhWaldabitqRTkzWC8vN3hHams0aVd1cnFMTkovdnMvaTVITWNLemxnVjQxelBGaC9IMFlzalNaeS94WWplTk5McEZ4NU9KZy9US2Z6TlFhZVRnTFpJNUl0a21qY1RZeGZZNzRPb25GV1haUXJZRmFJa29PdWkvaW5DK2hzRW8xbEVjM1YxYlVVd3VCMkVjamw1eC81dDhmZ1NPb1dpMGR6WUdLQ0RCK2RXNnJveDdQZW5LeXNyMDJOOWZYUE9HaHBLYmlTeTZDUmlOamtXS3k4di94WE9uNlJTd1BuVHhWUnJYckNnUERBKy9pbWRzV2EwT1k5cldvaFoxcHpNQ05oNzRJcHZXYnErdmFPbjU5bGkrZ04zUFk4c2F3ZkVkQkJ0Z3pRcHFobExjODc3c0JNVE9QWmhsVjcyV2RhdXJVZVAvcEZLUkdzNC9BbjBkUVdlc3hJYytoemNxcGw0SHA2RjMxSGNqMW1NdldaeS9zTERpY1N2Qy9WWGNleFlFMVZXUGkyNGZRVU9QakpDZ1lvSzJsZFplVHZGWWh2cEpHTFdPRlpiT0x3ZWsvUVRLaEZwd3ppamdIN0ZXc0xocXpYTzc4UHZPaW9BeHRpN09GM1dIb3QxdTlWckNZWFdhWnEybFlySFhoRGNwbzVFNGtIeXdCVmFHaHB1MG9pK1gyeDl6T1VSYkpwN08yS3gvMWRWYVEyRnJtYWF0ak92S2RHOUhmSDQxK2drWWxZNDFwcGx5NnBwYU9oL3FFUmdJbHlWOXBaSTVCek5zaDdFWkY5QVJRS0xmeFpPTDdmVzE5OEFJbmhVVmMrbmFlT2NQR0VwaVBiK3RvYUcvd0wxM3JFdEZpdElsTTF6NW9SQVZMZVNGekEySHh6c1Rqem5VbjFrNU9xSEJnZVR6aW9nUEYzR0tjREJLNXozMXRUV0xnQTNuRU1LY05NY1pZSEFTTm40K05qa1BjczBmVm93NkRkTVV6Y3R5QUcvWHdjaEI2RS9CeTFjVDliVC9QNTlVeGZOcDUwMnQ3eXNySVdaWm8zb0Y2TEFqMGFWbEJFSE5iaXV4YUJES0t2RlVZM0pMMmNad2p3T1hTaGtINVJ2YU9oaW5ENUVYc0Q1RUNidkNINzkyVWVrNUhSdDlmVVhRRlFKTVZsSjNoRUdFZXhBSDQzYkVvbTlKQjlIQ3VPZ0VyQlljR2dzL1BuRzZPZzNIaGtZT0thcVdGNVplVDVPOVZRYUxqWXFLamJSNE9DR29sdGdMWjIzUUJSQ1RWbWhiS05uU0lPWGxaM29oaVkyUGVtYWxzdVJmRDZDdFovYmZQSkhaU0J3UDNiMWFrS2p5VTVvMG1yRFJEdW5ldXFhODZQa0xPUDhDMFVzem40ODcyZW85enRLcDEvdDZPczdVcWpCK3ZyNjgwM0dubUtsRWRVa0Fuam04OWZNblh1dTIrSlBBOWY1eThvK3ZhRzYrcDlrWEVXQVc5WTVMRHZQcFFEenUzNWRPTndKc2Q2VjB5L25vN0o1QjFNb2szUlRSYk9JS2NMQ29LNHVhYWN5ZGx4eTd4L2Rtb0JjZjlwYlZkWDI1SHZ2alZHUmdQaGJDQ1gycDVqVU9UUjlMUFNYbDk5R0F3UC9TYk1CeHBhbnk4dnZBbGU1VGxGK0drMFBES0xvUEp5NzdEZTFqTktmQndVSmo5SXNZdUtaeldCbWVOblN0NUFOVUVvRk4va0hseW83b0VpdTlrSlVBckRBL2h0RXRZQm1DcHpmQXJHMXlubmJPdUd3ZFdJUHVNemxtS2Nic0RHMmdBc1U4cTl0V0ROdjNzZGxCWnFiR09TOEhjODVCMWJBRW16MkZ0eEp5S3FCQlp6cHZHZHBtcFN3MEZkUTBuNkFaaEVUa3dnendtd2pFbUpoSGswVFB1RlJkeW5IWkgyWFBHTGQ0c1UxTUoyL1dLZ2VGL29yMFVHZThlQUxoYlhScFRya085dUk4M09PUHVZbytQWkFlelQ2bEcxTVFaNUtmUWw5M0U1Q3Y1SkEwM1ZCdUx2eXhzbFluZUlaM1BMNXZ0VVpqUjdNWHUrSHlQc3Q1a3owa1d2NU1sYXFqcFo1VUVhbnBkbkNGSmZDSStKVUduSlpLcFI4bDdwdndpTGJUUjVoam94Y1R4bWpRVGtHY0pwdlVTb1Zhby9IRjhPWStEaU9EM05kRjViZ241U3RPTDhRSnZwSyt5MXdpNklzNWZidTdsRVlBQjNnQnA4aGhWakI1SDVFZGg5enJSTG5iOXVJS3ZNY3VFZndicHNrZlN4MzN2T1o1aEFWaitNMFcrRGNQS0Zqd1NGSHpoME90Z3dUOWpWWVlmMGdtSDZJb21Od1JBNUFnVDQraGtNYkd4djNWMWVQMjV2QTdLeGxpcDJBWGVLWnFBU3dRRXB1aFhIdk40bXVoQU14ajRBNmpoejU4L3JhMmlzc3YvOUZVbkFWRUZJVFRxL1RpVEhxaXZFSFpUYzc0L0g5Y0dFOGlUWlhTY1kyUnpIbWdJSlhTQWtqRUFoc01RempUcGJyZDh5VExuQWZEQlNyejJDOEtaNDdwb2xZclZoakZCN0VRdmJCa0l2aGR4VEd4b0JZZjgwMGozTy9md2llZzJadzNXOHErOWEwcjlsM1ozZmVRQzNyUjUySnhLdmtobVN1NGVNaVNzU3N2RTRlY1cxZFhSVUk1MlBTUXM2dEFHT3J0bUJ4VmUyM0pwT0gxaUpXcVp2bTg1aU11WGxkTUxZeWQ1QXNxT2hLZFIrVXI0V0lTeFVBS1NmRDRsVkl4WkJDK1g3bzhPRWt2UFJIS0ZmSERJc1F6czYzMzU3YTJENXNkczZMOU1LVmwyOWd3OE8zak9sNk9ucldXZjFkWFYzcFlwckJWYk1VVC9nM1ZUbmU3WFpJamZ2c1Z1RlI1MDcxY2U2WlhUTEY1QWpBUzk1TkhtSDZmSjl3S2I3SGphZ21zVDBhL1NPNHl2ZndkbmM0eXpBUjA0cEhRZ2RhakxtN1VGYUc1NzBpYmFRaVhzdFNHalFZNXpzNDVSZ3ZnVmhNNkZsVFJvU1FJZ0VKWWFHdDRid25SRGxPc1ltTGFKU0tBYUlTRjJMc2o1TUlQVWtIeWU0SFVXMFVQNmM0SjNadXpGblBCODhyZVFUWXBwS3d1QXZSS2R0d3ZreFJGTGRTcVUxVUpIenBkTHZpQVExVU91RFV0dTVTRldJalBhNG9raElXNW1lUVZBL2kvR1huUFRncWM4WWVqVWI3RmYyYU5FM0EzWE1wM0JsUGtFclg1Znd2QjJLeEd5Y3Zwd2dMazlCTE13RG1vaFJDWDZzbXIvMXhmb2E4TS81bTUvSGpDU29TKzVQSktOcmtFelpqdWNxNlphbEUzbFRiMXFxcWVhME5EVmNpSHZvS0U4RnZDVEFQdDI1TkpQWXArcElURnVkS0Z3Q0k0NER6SHR3TGkrelhYWmt4OXRFTVkxMG8xQXo5NnBlWXF4cEZsYjNRcXk3cHNzMlJYWG1QTzZYK21HR285UW9GMEU5TXFXTnhmanA1N1UvVFZEcWJRUjdRaFpkdXkzRE1YRUtTRVpzY0M5WTFORHlHOXhPaWMwVzJyYlFpaU8wZVdITjNLbnNTWVRLSmpnV09FRndURGpleWROcE1XMVlxNlBNWlpCaWpFekU2YkZnci96bTFrcjZGb2oxdHQ5RWsyaUtSVHlOdStHUDA2Vk5VT1lwblhnb1IyRzIvZVlLd1lQa3hSN3dIcjE2MXRxNHVnclBJL0l5Z2crWFlPUXRCSUh0Z2FuOWQ5aFJNUXJlbUNGZGdZc0kwVTRBdnlFdjFwc3k3NW04VVlma1VoeHFRMFpWdUZWQitFRE80Zm1zczlyeGJQUmNEWWJVdXdtcFlCeCtPQ2JKRnJFNlFvQ3h0QW10V0orbGJXRk16a3NlMkhrUU9VZitvUzZSZ0REUnpUWHRQVDE3Y1ZXL0NNYisyTmd4bjNncm5EZ1F4dlVUMnhaaU1HWUtMS0I1RVI1TEoyS0tHaGxHU2UzczlFVU8yelZGRjBSbmtBVXZxNnBiS0ZBMHNUa0hsdndnTTQ5Z005OHZkVy92N3BYb09yS212WS80K1Noa0YzTE1ra0FHTEdzcTd5ZmtoUE9kak5FMjB6cCsvM0Vxbm55RjMvK0d0SUtwblpBVTZpRUJNU2tEQjFsWFdpM0pIZEFtUkEwVU9MeWVMbks4a2o4REN2Nk1JMkRaZ3NTN1pWa1FDbk1BNEZsWEd5Mkg1UGtmVEJMakppczVDMWlsajUrTHZHcHBCTUFuSGdrUTVObDEvK29TbG0wNi9nSjlLMVFWaWVCUEV2VEtmVEt4WWdMd0NZdWhmSTVFS1ZURkk5UGVLb2lXZmgxK0tQQ0E5UHY2Y3pGek9qcU9WaW9SUDA2NlMzWWNmcDR1S3c3T3FjY0R3K1Y4cUJNNkxFN25RK2JKUmtEM2ltVkRvTzBHNG0zRmZCTXh6K2hBZm96aWJUemc0cHdFWUpCL0dNNFdiNUhUMUVQbDlJS3B2dVBWVGpLUDJWZlMwSFM5eEl5cXZFcG1kWlFzV1ZEOFFqYVpVRFVETnV4UkZ3UnFmN3pQa0FTSzFoVHZpZVRhc1hoZUpuRTBGQUIrVytESm90YVRvMFVlaTBRTlVCTEM0djRSbit4WnBJV1Byc011YkNuUVJ3enoyNDNoUFZRSGNlY3VCeHNaeUtNSmhoS1FhY2Z3elFtQ3Q0SVkzZ3pQZmpYbklzVEpCUkIrU1BxZEVUSVMzT0JkUkNyYzRaRGVNaW9KWklVS2gzUWVpZVFmaTdSQjJ5b1ljOHh2VWp4ZktqOUFuazY2ZFloR2VnSWdaa0htNjhZeWJjSHFjdk9FL2NMeEIrWGxZUGl6R0wyQkpmZjdoV094dFdjTU5rY2lpdE1nMnpVYy94aWtuRkFVNjR2RjdRYVExMkRoNWpsYk0xZVltUkFpNmJDYTNIU0NZemZCdTN5MHlOM1cvLzVDc0R2b2RjL1dBYzk3anNDYnpDSXVMMEJ0NXg3WGg4TVVtNTQvaHA1dExxQmRqdk5pTnFVeEN3NjVZMmhHTFhZR2RjWDFlU0VHU2VWZ01zTU1TSXIxWVVkd0UzYWl3NkxBaG0rMnBNdCtYd3BKNnE2Mmg0WjZXdWpxaHRFN01LMEpCcHlNTXNoRkVKVDUyV0N4cGQ3ZE1MOUlVUVdndG0wNkRlZm8yVG45d2x1TjlQN29vSEZhbVkwOFNqTCtzVEowT1hDaFYzT2xBeGNiTnBpblpPdUdlODZ6QTlTOHpNODVjVno4ak51TC9GZnBtWUJKT1VlZzBuRXJPaVlmQy9RTjFJYnNkaFBDZ01HZWRSY0s5c1RZVXVrd281dmI3cVhqOHUyajNFcWx4TTZ6WVhXZzNEdWZsRUVKQlI1akllSkJiTlZ1d29iNGo2d1RtZFpuMHZpMVB5MjhZd2ltYTcvemsvQ1k0RTExZEtxWmhsSjZveUhtZTg5TXlqQnhYZ05mb0JzUmZHL3hVdjZBQ0dhWFlyVC9BUnR4TVJTS1hzRlJLY2drUWFiTXVTcnpBZFZqRTNTQ3czK0o0QWdUeExNNTc0TC9aQjBYN1NVeFF1NzJ5eUJsTHBWSmZ3QmgvUjI2QUtIZEpTeEhZbTJMc05uVnpCWmZXdENsT3NDV1pQQXl2OXcyU1d0WG80Q1p5QVhjWkc4WmQ1dHFXc1o2OE51SzdCSHNkR2NmaVhLcEx3K0g3VmJUL29ZdnpjeEo3YVd4c0kzbkFqR1NOcW9CSlhJdlRRV1dGekF1SkwyMytCYjlGVXB4UXhDZGNISmpreU5yNit2UHQxWGNPRGlaVGljUkZxSHNYbFliZGhxYXQyaG1MS2NOWFRNR2xOUWRCZEVhalQvUE1wMmM1RU9ra0xlSHdSYVNDMzEreUQ4c255U2JGWUNQMmEybDZNbU41bG45YktQUWxyTThEVkVEOGdldi9CWnZ0cyswSy81d0toUWpMYzlEWURxSERRQzQzaVp3cDhncFlVT0JlZWJ0YmNLNXRzZGczMGU5WGNQa09GUXVJVVo5cFhsN0lDdVRPMk9FSjVCRkUwREJ1UTc5NWlqajBNYVd1cGFYVGFtN0tlYUZnY1o3NFRUc3lTVlhweVhaY3MzRGhhZURBeFh6VDJHTXlkbW14ZXBVZGhYU29BRVNVMEd0R01aQitPT1NPSVhZM2lBa1ltWWhKYVZyQ3RLd285SSt4UjNwN1g1UjFrRldRbDBESi9Db20vRWFGNHpRRHpnZkZGelJZM0IrT3hPTXY3c3pYK2V6OTdzQnBoMUE4RVVhNkZwem1LcElUUlJLSzZRYlVmNXhsdmw0cUNWeVNDLy9Bc1dNREVOL0NZblZhdWF1RSs4SDVGWTBBdk9WVnFoZ2p4dStxZUJ1R2NSZ1daYzQ5elJuWVIyeVJmTzZTeldjWUloWEpOVzZMdVVwaUhTN3BqTVdVVEVHa1p3OFBESlJWNm5yNTVMT0grL3VIeExybFRsWitERXQ4S3BYSk5jSmtjR0hxMmo0SkU3OTlPT01RYk5MMXl4TXNyREQ1SDJ5ZE4yKys1dmVmQ1dLbzA3SWNDUzZESWJEYzNZR0ZDN3NmZU8wMVQzcGVOZy85S2ZHU1ZpcTFFcU02SFhwREZmUzNOTTZ2SHpqNzdIZUZSYmFkcGcxcENoR01nSitEdUlTZkxlZkREQkRpajVwZ0tYWTV1TDR4TXZKWXNMeThHMVpDRFFvcXA2eFE2RVl3T040Z0YyVERaU0t4YjBxMFlkNXlNZzRRbWt0UmdXUS9acG9oS3BEdnpvWFJ3L21iZURkMW5aRVJxZ2dFVHV4V3hEVXJVQi9CL2k4N2Q2RUk3NVNpQXhRdE1yUGZEOHEvSWV3dFBYTW5tN2lXbDdORXNaTDloVGxnTGwvbFFCemRDci9kSzQ3VTRjWkY5ZlZmcGtUaVlYdmRpVzhaQndaVXJoaFhkSWx3R2NRVDJkMG5qbFFXRUhTcW9COUw4ZjNoVEFHTUlwbWpZNEh5ZmthbFFIaVUvNDRoUWl6UVhaNVJsY001dXdzTGxhK3phTnFkWGtOWUJjSDVucHhyaDVUUnhaZmNCYUFaeHJQb1p5L05Fb1RLbE1PeDRGbStmbjF0N1hkTVhiOUk1UCtJejZpZ1FMUHhkRHFtaXdRK0liOEZzcGFOeUpjdUd4bEpUOGZTZWQrQjg1K0FPLzFCK0syRWlJZklqZzR6OXU3T2VOdzFUVHM0Tm5iSG1OLy9PU3owbWJhK0ZpQ0VKVndiM3Y1UGd3dGd0SFRuY0FOSFlxSklMa1Iwb0VVUUhONWpISHB0RWh3azU3dUZySVczN0N1UlNGMVpPajNqLzcrai9lalIyT3p4d3c4ZzFzK2I5MGxMMTRXZnphNDlpMzkvZEY0cG43M0pBT2Z2YlZpMEU4NWR5M3BvVzIvdmRmUSt3Nno2c1Q1bzJOclhKL1FzcDI5TE9HeS9UVE1FemZFMVZTbmZFWndNbk9KWU13L1dGZzcvQm1Md1V6azNPZi8zOWtUaWZwb21SR3dRSW5vcU1RQy85ejlVWkliR3ljUXB3cG9GWVBFL29tVStyYmRuM3g1S21XYmp6dDdlMmZzQytYMkVRakdpVXlnQnU0ZUhFK2RXVi9lQ2EzM09kbnV1bjdIVUc4UERMOUVIQUtjNDFpeGlYU2gwcnYwNjdmZVBiTy9wZVpjK0FQZ3J4bmtUMlUrWXpUSUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFMSUFBQUF1Q0FZQUFBQ01Ma05RQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQllzU1VSQlZIZ0I3VjBMZUYxVmxWNTduM056MHlTbHRiVDBrZnNLaFJhMUNDT0Z3WDRpRDJHVUpBMFBwVEtnb0E0S2ZqS2ZveUFXSGFVT29QS3dqcThCY2ZBeE1vT0FJTGE5S1lMZmdBcWRZWVJSQnhTa3BibXY5RUZmNlNOcGtudk9YdlB2bTZUbTN2Tzg5eWExNCtUdjE1N2s3SDMyT1dmdnRkZGU2MS9yN0FvNkFwRHJqaThrTnM0alFZc0ZpK09KZUJFVFRSOHJGMEljRU14NS9QZ0t5Z3FzcUVmWi9PdmtoYm5mMHhTbUFBajZFNEZYbldWdU9TM3pMaWJ4dDhUcWRCd05xaExNOW9tSnp2eUxOSVgvOS9pVENISm1UYkxOTU9RREVNVlRxWGI4SnQ2UitRdWF3aFFBa3c0ekN1blV5VEFibm9RUXo2UjZ3T291cWdINXgyS3poQjA1bDBrZHBZUm8wZWNFMHlBcnRWRzF5R2ZhenM0TVVwWG9TYWZtbVN6T0phRWFzYkxnUjJvY0s1TzJzS0F1K2lTSmJZcUhYNG92TC9UU0pDRzNKbjZxa09aaTNIOEdDNDZVN3M5OFFMSjh6YkxzVGJXWVlvVjBLOHk4eUcxQzBGNWkvTUc3c0dMOWpuUHg2N2VUSGJrbjZBakFZUlhrM2tjWHhoWFozZml4UGlFR2lyYnhrN0IxZTM2Y21tbEcxU1hFOGlxeWFDa0dXZXJGU1BJZjZ3Z3BTUTdRN254MzZrZldFSDJ4N2FKTUptejdKdk15TlBjRDNhWmU0c1M0ZHNkdW9pQURrSEhLcDFPOUVJQ1hERUgzSHh3Mm56anV3bGZ6VkFjS2ExdFBJdGx3TTlvOGcwcjl5aFhQSUVqaEZ4bVIrdDZ2b2V5M1V2TGR1L2NQUEw1a3hZNERRZTNidHJGSUduUWhqN1duajJMa1BkR2ZHL0h2RVNISWtnNGpsR210d21FKzFRdkJQejcyZ3A3dFFkWDRXNmRFZXJ2YnJqVWJlQ002L1I2Y09rM0xyODhsc3pCUUh6WWI2T1hlOWFtYktDUllpS01vUEZvaEJ1Y3FGdmRHSS9iR1FuZnEvc0xhNUZ1b0J1VFhwczVpR2ZrTmhIZzVoVk1PeDBBT3o3T1ZlSGhHYzlOTHVYWEpEd1pkSUV6WjdGbklhZ1lkSVRoc0dybVFQbllSTk9FVnhFejFBb0x6WUZDZDdMckVLUVd4ODN1b3ZLUUdWeUNxRkszS3IwK2Qzajk4WU1VSkYremM3MWNaWm9uU0dyMEdSTkVkbDVJVWx4YlN5WWVLdytLR2FsWUNJZmdMWExPYkkySlFyUGZpdm1mMTlXZXZXcktDaGwycnFkRmx4clVKMmVoMk92K1QySEdXTVAxbHk2WkJvWGpJRk5ad1VVVHNzcktHVWROc2VPUm9tbFlFWXg0bEVXbTBoVHJVcm9sZmhnLzIvV0hoaWoxN0hUZkxQUjVmSUlybTVWZ0tEVkJoRmpPM21KS2lOdXcrL040aVNOdEhqS05zVkt3YThaYmF6bXdzL1JWWU80azN4OXN6NzZoc0YzWGZMdXFiT0lQbzBCM28yRmNiNU1HMWZoVUwzVzFYNExtMURkMUU5VURSTzV2TmxuOWgzbmt4QnQxekJnb2hoNmxPUUNBdmlVVHA5T3k2dHV1U25UMFBCZFYvOVlsalovQ3dPcDNxQk83N3Zwbk5iYUExZTI2aEttRkk1UkRrbmlkVGpUUkFHd01IZW9Tamd2OWdEcHFNNDNpTStSaGpBZzJ4R1psTENtYmN1SG93MjZMTk16S0Y5SXlMeXU3WHN6NlZFa1Y2R3EvWFd0SXZzSzB3Z0xoOHpPYmlrZEZrTVdyM1YweFZyVzJaZHBNTDBNNTdLQ3lZRCtJV3o2RDlaekFETnNLZS9PLzVIZG1YL1lScERQbDF5YitCRVA4elRSd3V6SFduUGd5dTVWczB5VUQzeGFYZ0J3cnJVN0hZK1ptditOV05EQmZCdHhzVHdqcGhMUDhCZnNSOXJxdUJnZ0x4SUVhaHJKMW1SeCtFcjRGQ0FvNHhVNHZMQTRVR3FxWWdobDhxRTJSRDBVVTR0RklkZ0NaM0xNUFBQWGRLaExidmVtdlF0UmlWL2JqK3E4MXkveDFIdCsvZVIxVWl0MjdoRWhMVzNUVEJ3S1QrY3Y3UjJJYjRoWVVYYVBJaEVQQlpuVjJiMkpSY252TmNlY0JFVE9lSkkwK0YwVkFhKzY5VWRWWHRkczNFZ3NVYnl3dzcvREtINm9RVTBPa1ZtTE4xeDl1SUtDamdNV2dKZmsraUkvdlpXb1NZOWVJaDdFZEsxTURFbzFsRXpCOXdMUU1uK0FBdWVvMnFoQ0hGZHpZOEdKdm1WUTVOOURvS0JPK0VVNWxHM1YrZ2d3Ykk5ekg1emU3bnlaT09oSTN1MUtZenFXcjZzbjZvY2c5RktmK1hyUmxTQmdZK21NVTNVKzNaOVZRajh1dFNWK053UEUwU0lBd25qZDdEQVJCY1BwTkgvQ3pXa1prYmEwcUIxN1hlQk05d0pVNytoZ0x2SjJiSG00M0xQY3RaSE9OM1BXYjEwNE5pLzBMWTI1Mkpqc3laZzMyUitlRE9IL0M1b09xVjJDMGFtem9yTTBTSEcweFpXWEZpTjAwQzhMWkp2M0tZdnYyR0d2d2MxWWlTTnBaMGRlZ0xCTzJDNC9vMEx2d1JOTTRhblBtZlVKZEovdVN1N2xrT3FvMFJoUWk4OXV5bnJIaEg0WVY0Wis0MkhaRlV0am9EbWpyamU1R2l0M21XU1VxUUR5eWx2blQ4dUpYdCtQZHUycGZveUYwS1A4UExYSW5SQkdEVWp5blM0WVRpKzhzRUdRTlY5Wkx1aExBcno4Q1o4TzBrMkhyclc3dTIxcndhOUlKQ3d1SGtvSHE0ejFiMDhnZkZZSEZ4ckxQbmpIaG45cEpZWitZQ2FNdFRjUDREcUJJd2tjV3hCOVhNTXlyUHdxNnYycHhKZHVXZXRtdytCei91OGFyRFVyN2Vxd3dUOEdqeWdSMDFYTzE1VFBwYk1TQk9sa1dBUTNlQkl1VkxQYm8rR3gxVzh5STNRTVg3eXdiQUZ1WkJvOFJSbEVOckR2Q3FQOFYwMjRsWDY5TUN6N2JjaTFqWVRqdGliZU4rc1p1bE9OaGY3QWVOTXNlbGswRFIrWGlpTnFQdGVpREU4dUFxOUVDeEtEN21Ga2pSMmhLSDc0RjdmZ0UyL2k5d3hvZTI0M2I4a3g1L1Jpclk1UjQwc3FZdnlRT3BybXhQSWQwR0c1YmY2MVl1aVdkN1hZc1Y2Q2cvU3Y3Z252MnVreEtyd2JPSThJR1pvblBLQ2pBeFhueHlUc3VTczh1amZZWXArNnRsL3JGQVFwQjV1bGQ1eVdkZzhRcG8zTHhpN1VQSTE3UmNZWkFRVHFlRGtMVSttRUc3cENIdlJmVkZQbmRpOE5IWExPN2F1ck9DdFZDNzNBWUV0bk02c1R4N0xZWENEcGZiYWQ3WjIwK0tNR2VvSGpDZDcrZUdRWHM5dGFILzFNdFhySGpJOW1zbTJabDdQcmMyZFIyRTVDNmZ4dDd1T0NWRXhJc3p3c1R3am95UlhpWFljNUpESUR4RHlFelVTRDVvN20rMjNNWkNBNEx5QXJ5amN5clBUOTgzN1NRY25pbTdqMlVjUU9TQnFnRlU0YlY0d0FXd01xRFVvT1NVS2tENTlVa1o3ZXM3c0xjdlRHZzhuMDdveU9vaS94dUpsZkd1VE1tdktoTmtGdlpPNFVJdVFOdjJVeDBRQVV3Q1ZvSStxaEY1ZVBZd0dVN3dLb2N0dkg4b0txNWMwZmxRcU5GSUxNL2NEVlBsRkhDa1Y3bVZRNERpbGVkMDhNZ3JyZ2VkNGNrOGpEYm81ejlrZmE3ekZlUzJEM2duUDBsU3YzUExUaENHZEx5YmlBd084a2ora2NzenVLOEp5WTZld01pckh3cVBKVDhOVGZ0WnY1VUFxOWczb1Z4dkgvdTluSDZUVU8rWWc1VVhnWnFwMXhQMXRabHNXd1hPVUM5d2svazJ2M0lsMU8wTHo5dWNveXBnREExK0JpMTcyZXhOT2dtSkpnQzVkYWxMY2ZCT1JSWDhTNjhpOWxNT1F2ajJaNUhzLy9KbzFQRmVEUWVHKzN6dXM1Y21HUG51MUcxc2kxdjk4dE1oNEQvZjF6K3djdnk1TWtFdVBUUUxCK2NKcWtkUmZaZ0FKOUlMZktKUDJZQ3k2VitwU3N5N2VQdHIwT1Nld2g5UlpwbmRLM3lkUFdHNW5jMnZqWjBtQlgzVjh5cmk3VTIwejlQRUFZZnJmYzhBemxoR1RGZGVXd25oaUNNY1V6SUQyS0pKaG1hZUN1blVYWkRTR3dJcWJxS0lmVm1sZVZJbXlLV0hsdDVlZEsyQVJ2Y1ZaRk5aRWFvWmNxYjNmVVZPTzFSVVU3UENNMjlZTnRwbDJvS0Z0M1pFbU83UWFxUy9pdWxaa3pvQnp0WlhoVFEyUUxONGNzRTI4VTIrZ1NFZjAwSUVzQy9KYUZZYnp3NktUREszZWJTNG1TWVpNT2Mrai82NHhyOFc3eEhDNmtqOFZYNUxaWWxqQUlUaVBTektQU2NwL08yeElDaVNlLzNTSkd6VG1FNDFvdVJJZWpoNlhBTXROcTVkVHk1VURScWh2Ui8wNVZJc2wwK2h3VmlCTWpFOFVIVGsyYnk5VXppbkg0Zmo2WnZiZ1hkdThHRXQramI5ZE80eHhzQzA0VlF4czErc29MTG5GV2VUbFU4enRISjVFQVNMK2JFZTdSVW95UEdxQStpZnorTmRQaHRRYlZBS1h0N2EzdnVLVzZGam9ObkZ2dEpmQkpTTzBDaTlKeGJtMmRIaHVZaEFMSUpIdmdRMHlhTFlnZXlsbFowMUh0RElPL3hZQlROaXpLTEpnSkNORzd1UGl4N2Z2cWw2RzE5UFhpODJ3UjdjUmVHaDJ6a3paQ3JweTVaTkgyanJ5dnhuVUVWV29xRThnMzljR2RIcFVXdmFkcDI4VTJoSVVTSE5OdXZVZ1pGd3N6WVR0ZUp3cm9LSzNhTjdMTFo2M2F0ZWFNZU9iUW9PaGpGZjI5cVJlOGFyMkVWamNYOWxwd3REWEk3bGNDazBpazRiak1wUmkyVEVhUlhVYTdUT3grSlFJRStvelg0NS9OWVF6Nk1hQWVxcjN6dGRpbWRIelNFZE9OaEMxWUxGTFBkMmVXZDhSZUVnVFN5SzZQRTdjNit6Ymw2MnpMMXQ3V0FhVVRxTExGNWdSTVFjVUdpaCs2emtPSEdKanZKZldZVndaVmdVcTROU1RIeCtVR0Y5NmtZSThhMUI5ZUNqZlM3Um1iblhyNDZaNjA1ZENGZHVNVXRPU2hZblllYTl5V1hKbWpmNjF4WFdORk03WEo2Q1hGVEdzeEhwUGFQQmFkYjgxWWhnTzZPakF4NW9GRVhqVFZTbElMLzQ0SndXdlNXQjYvMUkvSm9tRU9pVjcwcGhmaTdXdnFuZ1c3RkI1NFBUajNYbXBsS2pWMDQ4UEJLUmRDQnNZcUcvVG1GRlh3aXFCMlY1SjRUNDVxQjZFamJ4SFRxZkU0N1JSOUExeXlEOUxWUWxoQktML2NwM3Q4NTZDZjN1cWNWQWxwOUR0VUtwSi8yS29VZmVTVlZpeHJTbTg4aERlOEh1cnBZajlRL1gydllQQTRVWWFPdkliUE9oQkNjS1RTT1R1QnhnU0tveHBRS1JmeXoxTWF5azl3YlZnMEpkczIrZytUTVVBbnJGcUVQRGxJeUxyZkIyZmVtWnBVdWYxNDdUSDd5Ym9aTlhyYXJ0KzhINEJZVk5hS0RIdTJtNnNscmVGL2JraHozYTJvZVE2cjlURllBV3ZSRVhlbEo1MGpEdTI3QWhObzNDSVZ4U0YwUFhFV3ZXQlh5eHVBK1RielZHU25Qakg0TENXb0c0N3Bsazg0ZmNMbTA1cXNuaGVDdEJOUWVzS3FITkNYaFQveGlpYWsvL2NQR0RTMWI4UHRUWE53ZytpbDlEZ2k0SnFnak50Z0YxZnkvWnpzTU0wYzdJcS9aMm85Y3ZnbFFHNW4vRDFQWks3Sm41L3FYSjgxZFJOazAxd0ZhMEdxRzFyM3UxM2RCQW44THhSZ3FCM25XSmN6RndYbHI4VWJBSlZWRlJSVW1aaUMyNkVJcCtpbHcrRU1Ya21CUHJNMWZqeDQ4RXR5WjJVNGxORWErTWhNbzlhRDhwZmhGdno1enQxMUoyYlNJaVhSeFEweFp6Y2RnNi9oejZkZ3ZWRzBrZy9kMW04dTh4eFFMTkJOTFVZTkc2NFBVWDk0WmVDVXpZeDl0QUlHcU5pcVZMNkNWT0w2a09nWU0zY2tkYmU4K2pWQ05ZeW1mOUtEaERpdXVwSWhrbmROdVd1QTlrMUNmdy9LNDhLTVpnWldGOXNyLzFuZGxiL1Q2WDJwSnVTOXJNMy9lNEN5TzRzb3BxUUd4NXoyK3ozWWtQU1phdTMrSkJhMStUVzNQc2R4SmRtMy9sMjA1NzV1U3g1OCtuazU3MG9GREJ0Q05NU05jSmlYRk9VVVcrTkV6SExmVmE1UG0xcVMraWpaVmg2aUtFZm4xcmxWL2p5Q0hEZkRqVzFEWXQzcEdOeHpzeWIxRk1yZ01wYlZYWGx4Y041c0R6R0lPTVp3V21zN0xkcWIrakd0QjJVYVlQQS9OcHZ6cWdxMjR1ZEtkK25rMG56cXNzMC9rYWhlN2tkVW92eFlJV3VGOVAxL3NFVnp4ZCtyRitTN2JuZm9RZ2gyZlVTcHBZL2gvMC80cm1rQkNYVEJIdklBeUxZRDluNTRLc3ExMHVMT0hNdUJQRm1wMDlIYkhMNjYwVlpEZ2hoaG4wWGRCc1g2TXFJY0d4N2h0TlkvU0ZDSkU4N29kNTc5amVqMG5pR3k0R3NiRzZOOTMyeVkxZk95N3FWKzlCbHdHSFovdERDS0t2TUFObmdEcDhQSjl1MjVGTHR6MlJYNWU4RDdUaWM2TFozSTZKY0NjNjBTUFN4ajlJTE0rdTlteFZrZWZ6anUrM1ZFZjJEc2ppT3RjN01MKzF0emx4R1lXQTZHczhtdXJFMHFVNnN1ZGtJOEFnT2N5ZklrZHFDbEhyY2RyU25id0gvYk1xNUNVOTZJZnJxQVk0aEZPeTZ2ZWhzK3FDWFJSM21nM2lhdkxPczRXbHc3YzNMclN2Z0lBOXJKVDZKUVJzRC9SZFZCaTh4R0J4Z281R1FTMmRsdTlXZDhmYmM3ZVB2emp4cTh4dCtWTlNTL0Q0QVFMQnM2RkN6NlZSYmpSZzJld1pNazFmejluUXVjRWVaYllzWnkyRVBmeFJrdEZUOVpaVHp0cGk5Y2J1V1Q4NVB1Q2JSVlZVOC96ekNVTkdOTG1VQTF3NUZzN0VJWHZJVWthVXFvRVc0bVhOcVc5QXVWd1Y2Z0xCL1pZbDJ0dTZjaldsU0Rna0ZyYnNwSDJtb2swQWVNc2hqSDFlZ245dWtsTCt6RERFODdDZk44Qyt2QWVyMUNjZ01IcGJnVGJZYlk3dEJjUXFVdE5VOUJvdytOK2tDUUZ2VVVKMUh2ZU9nRzJ0UkxCcE1ZYldycTA1UkVvLzZubzNFck9ucWVuWFV3Q0VWQzBCanhPT1FuVmpJMWc1QkhuWWpycHFaTmoycmpzc3ZmamdHeHIrc2lsNVYzRHV4S0diYXA3bEJrUTBYNllhY1ZpM3pOS0lkMlcraHVmK090VUoySUZ2emo2V2VHUGwrVGtYL0dGL2ZIbjJXckFFV2lCMlVLMFFsSmUyZUR0czJ6QWIvM2x2SGVXU2p4enZ5ajZNUG5BMXMvQmVOMlFlVHZvR2lCQnBxNXJyZDRVUWptOFZNU01kd3RsZ0RMbFNZT3l4L2RqMHB2NXZnTmQxcGZkY29jVEtSR2YybjZnT2hCWmtzNVR0UHpHSURXUS9UaVhIcDQ3OXN3VDl6bWJMMDNaTHRHZS9iRWs2RFhQOUVhb1NlS3BuYll2UGJBMnJJWHcwTWlMRHJtdXlJYVEyVjl6NDJhalJTSGVTNy8yTW9DU3VVSlNvc3BXRDIyZERPQ2JsOFBSb2FQSXRuNDZkV0owUXF5L0ZsMmR1cHpvUjJvR3pCZDBJcjc4TER0RStnK1ZleTFhRGJJcCtHTFZER01hRFRHcW55V0szWW1NSFI0djkzOW1RMzRZZ2gyc0hqQ1FZWmUvSWRjY2ZZWlkzd1hPN0xNeEczOUFBMnlCbGo0RC8vRGFvcU1CUDZ0dk9MKzJjOHk2OTc1ek42am9wU255NTUzNFFFT0R0ZUxvNzR4MDlYdzZ6cTFFWVNJKzg0UVVkUGRsc09yVVNtc1JsUXhueDdsdzYvcFZFUi80NXQydUZ6L2R3R242ZlNKVzFJOW1SbHd4endXRzc2NjEyNGJOUU9NaUxRMWJVRE1VdGllVzVvS3kzVUhDbWNkcFlXbHhGU2l6RlFDL1YzV2lYMGxERVNFTFVxQzdTcTR3cTdXZXF3TllZZE9WSnFiWlY1TDhoWDZJOS95b09WOENtdW1wR3k4QmJZRHVlaXFaVFVvNTg1d1pIejBZTWZiY3R4UFBDdHA1TzFMaTNjS3hqczA3OTA5c0ZYSzAzTndTVGdQdndHNkU1V3ZROWRDSVF1TmZIYWJiOUgvRmxFNXNRWkJqZUs1bHFvdS9MZnI0Q1MveXlpcUlHOU9jcUhEdGRyMk4rQ3IzL01XRnpRa2d4WGFkMGpwekh1eURLaXNqZDh4UUdBb0VPZHB6ejJtWkFhL25BZEY1bUl5NUNac3JoSGQ1WFNLZmVHMVJQNlp3Wm5mNnFjN0IxRkljWmVsWHFiZFUwN2ZyWGlZN056em0xaFJROEVRa3AzQkErNzI4MERQbnowYitUQ3YyQktRN2hCbm9DWUN2cHljR1dORjEzOGhaMGQ3ZXpWSFFVMWlUUGlYVmxIU0h4VVQ2N2FxNjFFcFl3czVGSzY0NkY2MjVUcURVc1FnaXlua2hWN01lVURDTWtZdndQUFBJRHRIa3ovcG1ORmIxMHhtRWpHeUYyd1FtRHFEMVl1NlAxWndUQnhaZjh5dU42ZHlYQjMzWXROTVVkcGQwdEp3bE5VdTV4SmlLeDJmTmQ1ejFsNkwwcStCVTZqQUNkV1Fxbk96VHkvSTZlcDJFUDNRVml2Sk5MaWRhbC96cEFmMFV0ZEs0eWxvTlNnallmZWpGaGpuMnpkdWljSUtPZURWZityOEcydVFqNzJ4cU50ZzFpYWJXZzZQcWdOWDRHYzJoajBQWFNHcjRGUE8yN3FjSitSeHR2TmdkS2UxNU01TzZpaHpDMzRkWGRCU3VwRTVISzkvR1lXZEs4WllKck0rM0dPNDRHak5pQ09UT0lhS2xEYUl1TnhyM21rSDA2TElCRmdxZzY4cmtHeEk1YUNEcy83NzBJNkM4cndCdk5VZWFRc3Z1TkFWV1UzQkFiSHA1b0cvTFBBVHIxY1diTGpKbkZJY3RzYnFEQklnSUlDNll2N2dzVE1SMURibTNxUFFqay9OQ2xhSnZjTzNSaTYyVmJKendudUhUZmRPcDNFSUkzakQrSGg1NC9ramI2UnhRZU9lRm9ZUTdPR2JacFVCbFNUVGZVOEp5bTFNNXEzbkV5Y1dSc0N6cUZFZ3JwNUZxNDBRNEhEOXJ2SHJBMDRmZTJxd0w1OWFuMWVrUHpzdnNObXZIWXU0SnpwSThrSFBhQXlCUzhzVDg2N2YxNlo4bks4ekF4cnNxdGl5K2hTWUN5MkNHd1ZuT3h1cTJGamdBYzl2K2ViQXJlZVAyNUwrL0tyMDkrSER4bVpSQUhqS1NwK2ViQXpkS3JCY0xkMzJJRjdwOUdOalkwaFZKNzk3Vk02QmNoaHdOVHBzVVJpUHk2NUQza0VoMURhUHA5b0Evdm95azRNR1ZhSElGUXhKK0Nqbkg4MThSU3lOdWZXek8vdnYvZzU4OFVVNEo4QkFKYWQ0OXRxeXRwSkJkai9OOXBjMlhrVXpRRkIvNFg4bVh4b2R1Wm1wa0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvMS02MzZjMTliYWQ1MDM4NDE0YmU3YmZhNTAwNmI5ZDU1Ni5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvMi00MzQ3NDA1NDg1ZDcyNGQ1NjcwYzBhYjgzZDNjNTNkOC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvMy0xYjZmMWEwYTY1M2IzNjYzMDY3ODI5ZGYwZjk4NGRkYi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcHJvZHVjdC1pbGx1c3RyYXRvci03MDY3NjZkZDFlMWE3ZGQyNjNhMjIyMWU3Yjc3ZGU0Ny5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpT0RFaUlHaGxhV2RvZEQwaU9ERWlJSFpwWlhkQ2IzZzlJakFnTUNBNE1TQTRNU0lnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0TkNqeGphWEpqYkdVZ1kzZzlJalF3TGpVaUlHTjVQU0kwTUM0MUlpQnlQU0l6T1M0MUlpQnpkSEp2YTJVOUluZG9hWFJsSWlCemRISnZhMlV0ZDJsa2RHZzlJaklpTHo0TkNqeHdZWFJvSUdROUlrMDJNQ0F6T0M0M05qaEROakV1TXpNek15QXpPUzQxTXpjNElEWXhMak16TXpNZ05ERXVORFl5TWlBMk1DQTBNaTR5TXpKTU16SXVNalVnTlRndU1qVXpOVU16TUM0NU1UWTNJRFU1TGpBeU16TWdNamt1TWpVZ05UZ3VNRFl4TVNBeU9TNHlOU0ExTmk0MU1qRTFWakkwTGpRM09EVkRNamt1TWpVZ01qSXVPVE00T1NBek1DNDVNVFkzSURJeExqazNOamNnTXpJdU1qVWdNakl1TnpRMk5VdzJNQ0F6T0M0M05qaGFJaUJtYVd4c1BTSWpSa1pHTjBZM0lpOCtEUW84TDNOMlp6NE5DZz09XCIiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93LCBsb2NhbGUgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORF9FUlJPUiA9ICdTU0cgRGF0YSBOT1RfRk9VTkQnXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgLy8gVE9ETzogaGFuZGxlIHJlbG9hZGluZyBpbiBkZXZlbG9wbWVudCBmcm9tIGZhbGxiYWNrIHJldHVybmluZyAyMDBcbiAgICAgICAgLy8gdG8gb24tZGVtYW5kLWVudHJ5LWhhbmRsZXIgY2F1c2luZyBpdCB0byByZWxvYWQgcGVyaW9kaWNhbGx5XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihTU0dfREFUQV9OT1RfRk9VTkRfRVJST1IpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1xuICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoLFxuICAgICAgfSA9IHJlcXVpcmUoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKVxuXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChhcywgdGhpcy5sb2NhbGVzKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgdXJsID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24sIG9wdGlvbnMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG4gICAgICBjb25zdCBzc2c0MDQgPSBlcnIubWVzc2FnZSA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SXG5cbiAgICAgIGlmIChzc2c0MDQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsZXQgbW9kOiBhbnlcbiAgICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cywgbW9kIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICAgJy80MDQnXG4gICAgICAgICAgKSlcblxuICAgICAgICAgIC8vIFRPRE86IHNob3VsZCB3ZSB0b2xlcmF0ZSB0aGVzZSBwcm9wcyBtaXNzaW5nIGFuZCBzdGlsbCByZW5kZXIgdGhlXG4gICAgICAgICAgLy8gcGFnZSBpbnN0ZWFkIG9mIGZhbGxpbmcgYmFjayB0byBfZXJyb3I/XG4gICAgICAgICAgaWYgKG1vZCAmJiBtb2QuX19OX1NTRykge1xuICAgICAgICAgICAgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoJy80MDQnLCAnLzQwNCcsIHRydWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgIC8vIG5vbi1mYXRhbCBmYWxsYmFjayB0byBfZXJyb3JcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnI6IHNzZzQwNCA/IHVuZGVmaW5lZCA6IGVycixcbiAgICAgICAgZXJyb3I6IHNzZzQwNCA/IHVuZGVmaW5lZCA6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2FyZCwgQ29sLCBDb250YWluZXIsIFJvdywgSW5wdXRHcm91cCwgRm9ybUNvbnRyb2wsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbi8vIGltcG9ydCBSZWFjdEZhbmN5Qm94IGZyb20gJ3JlYWN0LWZhbmN5Ym94JztcclxuaW1wb3J0IHsgRmFVc2VyLCBGYVBob25lQWx0LCBGYUVudmVsb3BlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcic7XHJcbmltcG9ydCBCdXR0b25XaGF0c2FwcCBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbldoYXRzYXBwJztcclxuXHJcbmltcG9ydCBIZWFkU2VvIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZCc7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZFNlbyB0aXRsZT17J0Vjb3JhaXogfCBQcm9kdXRvJ30gLz5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8bWFpbiBpZD0ncHJvZHVjdFBhZ2UnPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdzZWN0aW9uMSBwb3NpdGlvbi1yZWxhdGl2ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBsZz17Nn0gbWQ9ezEyfSBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyICBmbGV4LWNvbHVtbicgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RpdGxlLWxpdHRsZSBjb2xvci1wcmltYXJ5Jz5FY29yYWl6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RpdGxlLWJpZyAgY29sb3ItYmxhY2snPk8gcXVlIMOpPzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcC1iaWcgY29sb3ItZ3JleSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hY2F4ZWlyYSBEZXNjYXNjYWRhLCBFbWJhbGFkYSDDoCBWw6FjdW8gZSBDb25nZWxhZGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBsZz17Nn0gbWQ9ezEyfSBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlcicgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCcuLi9pbWFnZXMvcHJvZHVjdC9wcm9kdWN0LWlsbHVzdHJhdG9yLnBuZycpfSBhbHQ9JycgdGl0bGU9JycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nc2VjdGlvbjIgYmctbGlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBsZz17MTJ9IG1kPXsxMn0gY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlcicgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRzLWRpZmZlcmVudGlhbHMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5JbWcgdmFyaWFudD1cInRvcFwiIHNyYz17cmVxdWlyZSgnLi4vaW1hZ2VzL3Byb2R1Y3QvZGlmZmVyZW50aWFscy8xLnBuZycpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGl0bGUgdGl0bGUtbGl0dGxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUXVhbGlkYWRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcC1tZWRpdW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9kdXRvcyBjdWlkYWRvc2FtZW50ZSBzZWxlY2lvbmFkb3MgZSBiZW5lZmljaWFkb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGUgYWNvcmRvIGNvbSB1bSBDb250cm9sZSBkZSBRdWFsaWRhZGUsIHZpc2FuZG8gYXRlbmRlciBhc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RhdGl2YXMgZG8gbWVyY2FkbyBjb25zdW1pZG9yLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkltZyB2YXJpYW50PVwidG9wXCIgc3JjPXtyZXF1aXJlKCcuLi9pbWFnZXMvcHJvZHVjdC9kaWZmZXJlbnRpYWxzLzIucG5nJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0aXRsZSB0aXRsZS1saXR0bGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYWRyb25pemHDp8Ojb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncGFyYWdyYXBoIHAtbWVkaXVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhYmFsaG8gY29udMOtbnVvIGNvbSBvIG9iamV0aXZvIGRlIHNlbGXDp8OjbyBkYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VtZW50ZXMsIHRyYXRvcyBjdWx0dXJhaXMgZSBpcnJpZ2HDp8OjbywgYnVzY2FuZG8gdW1hIHBhZHJvbml6YcOnw6NvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvIENhbXBvIMOgIEFncm9pbmTDunN0cmlhLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5JbWcgdmFyaWFudD1cInRvcFwiIHNyYz17cmVxdWlyZSgnLi4vaW1hZ2VzL3Byb2R1Y3QvZGlmZmVyZW50aWFscy8zLnBuZycpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGl0bGUgdGl0bGUtbGl0dGxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJhdGljaWRhZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3BhcmFncmFwaCBwLW1lZGl1bSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1dG9zIGJlbmVmaWNpYWRvcyBlIHByb250b3MgcGFyYSBvIHByZXBhcm8gbm8gc2V1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0aXRsZSB0aXRsZS1iaWcgdGV4dC1sZWZ0IGNvbC1sZy02IGNvbC0xMic+VmVqYSBtYWlzIGRvcyBub3Nzb3MgcHJvZHV0b3MgZSA8c3BhbiBjbGFzc05hbWU9J2NvbG9yLXByaW1hcnknPmFtYmllbnRlIGRlIHByb2R1w6fDo288L3NwYW4+PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhbGxlcnktZ3JpZCBtdC01Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8UmVhY3RGYW5jeUJveCBjbGFzc05hbWU9J2dhbGxlcnktaW1nJyB0aHVtYm5haWw9e3JlcXVpcmUoJy4uL2ltYWdlcy9wcm9kdWN0L2dhbGxlcnkvMS5wbmcnKX0gaW1hZ2U9e3JlcXVpcmUoJy4uL2ltYWdlcy9wcm9kdWN0L2dhbGxlcnkvMS5wbmcnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdEZhbmN5Qm94IGNsYXNzTmFtZT0nZ2FsbGVyeS1pbWcnIHRodW1ibmFpbD17cmVxdWlyZSgnLi4vaW1hZ2VzL3Byb2R1Y3QvZ2FsbGVyeS8yLnBuZycpfSBpbWFnZT17cmVxdWlyZSgnLi4vaW1hZ2VzL3Byb2R1Y3QvZ2FsbGVyeS8yLnBuZycpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0RmFuY3lCb3ggY2xhc3NOYW1lPSdnYWxsZXJ5LWltZycgdGh1bWJuYWlsPXtyZXF1aXJlKCcuLi9pbWFnZXMvcHJvZHVjdC9nYWxsZXJ5LzMucG5nJyl9IGltYWdlPXtyZXF1aXJlKCcuLi9pbWFnZXMvcHJvZHVjdC9nYWxsZXJ5LzMucG5nJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RGYW5jeUJveCBjbGFzc05hbWU9J2dhbGxlcnktaW1nJyB0aHVtYm5haWw9e3JlcXVpcmUoJy4uL2ltYWdlcy9wcm9kdWN0L2dhbGxlcnkvNC5wbmcnKX0gaW1hZ2U9e3JlcXVpcmUoJy4uL2ltYWdlcy9wcm9kdWN0L2dhbGxlcnkvNC5wbmcnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdEZhbmN5Qm94IGNsYXNzTmFtZT0nZ2FsbGVyeS1pbWcnIHRodW1ibmFpbD17cmVxdWlyZSgnLi4vaW1hZ2VzL3Byb2R1Y3QvZ2FsbGVyeS81LnBuZycpfSBpbWFnZT17cmVxdWlyZSgnLi4vaW1hZ2VzL3Byb2R1Y3QvZ2FsbGVyeS81LnBuZycpfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdEZhbmN5Qm94IGNsYXNzTmFtZT0nZ2FsbGVyeS1pbWcnIHRodW1ibmFpbD17cmVxdWlyZSgnLi4vaW1hZ2VzL3Byb2R1Y3QvZ2FsbGVyeS82LnBuZycpfSBpbWFnZT17cmVxdWlyZSgnLi4vaW1hZ2VzL3Byb2R1Y3QvZ2FsbGVyeS82LnBuZycpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0RmFuY3lCb3ggY2xhc3NOYW1lPSdnYWxsZXJ5LWltZycgdGh1bWJuYWlsPXtyZXF1aXJlKCcuLi9pbWFnZXMvcHJvZHVjdC9nYWxsZXJ5LzQucG5nJyl9IGltYWdlPXtyZXF1aXJlKCcuLi9pbWFnZXMvcHJvZHVjdC9nYWxsZXJ5LzcucG5nJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RGYW5jeUJveCBjbGFzc05hbWU9J2dhbGxlcnktaW1nJyB0aHVtYm5haWw9e3JlcXVpcmUoJy4uL2ltYWdlcy9wcm9kdWN0L2dhbGxlcnkvOC5wbmcnKX0gaW1hZ2U9e3JlcXVpcmUoJy4uL2ltYWdlcy9wcm9kdWN0L2dhbGxlcnkvOC5wbmcnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdEZhbmN5Qm94IGNsYXNzTmFtZT0nZ2FsbGVyeS1pbWcnIHRodW1ibmFpbD17cmVxdWlyZSgnLi4vaW1hZ2VzL3Byb2R1Y3QvZ2FsbGVyeS85LnBuZycpfSBpbWFnZT17cmVxdWlyZSgnLi4vaW1hZ2VzL3Byb2R1Y3QvZ2FsbGVyeS85LnBuZycpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0RmFuY3lCb3ggY2xhc3NOYW1lPSdnYWxsZXJ5LWltZycgdGh1bWJuYWlsPXtyZXF1aXJlKCcuLi9pbWFnZXMvcHJvZHVjdC9nYWxsZXJ5LzEwLnBuZycpfSBpbWFnZT17cmVxdWlyZSgnLi4vaW1hZ2VzL3Byb2R1Y3QvZ2FsbGVyeS8xMC5wbmcnKX0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBsZz17Nn0gbWQ9ezEyfSBjbGFzc05hbWU9J21iLTUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd2aWRlbycgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIGNsYXNzTmFtZT0nYm9yZGVyLXJhZGl1cy1lbGVtZW50cycgZGF0YS1maWx0ZXJfdmlkZW89J3ZpZGVvMSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0naHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvaFdrWXRaeHBRVW8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvdz0nYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZScgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ZpZGVvLW1hc2snIGlkPSd2aWRlbzEnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCcuLi9pbWFnZXMvdmlkZW8vcGxheS12aWRlby5zdmcnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gbGc9ezZ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ZpZGVvJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgY2xhc3NOYW1lPSdib3JkZXItcmFkaXVzLWVsZW1lbnRzJyBkYXRhLWZpbHRlcl92aWRlbz0ndmlkZW8yJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPSdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9VMmRsMDdPblF5MCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93PSdhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaWZyYW1lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndmlkZW8tbWFzaycgaWQ9J3ZpZGVvMicgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoJy4uL2ltYWdlcy92aWRlby9wbGF5LXZpZGVvLnN2ZycpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nYmctbGlnaHQgaWxsdXN0cmF0aW9uLWJyYW5jaC1sZWZ0IHNlY3Rpb240Jz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IGxnPXs2fSBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT0nY2FyZC1mb3JtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3BhcmFncmFwaCBtbC0xJz5Ob21lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlByZXBlbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5UZXh0IGlkPVwiYmFzaWMtYWRkb24xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhVXNlciBzaXplPXsxOH0gY2xhc3NOYW1lPSdjb2xvci1ncmV5JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXg6IErDumxpbyBFbWlsaWFub1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdwYXJhZ3JhcGggbWwtMSc+VGVsZWZvbmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlRleHQgaWQ9XCJiYXNpYy1hZGRvbjFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFQaG9uZUFsdCBzaXplPXsxOH0gY2xhc3NOYW1lPSdjb2xvci1ncmV5JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXg6ICg4NCkgMDAwMDAtMDAwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdwYXJhZ3JhcGggbWwtMSc+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuUHJlcGVuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwLlRleHQgaWQ9XCJiYXNpYy1hZGRvbjFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFFbnZlbG9wZSBzaXplPXsxOH0gY2xhc3NOYW1lPSdjb2xvci1ncmV5JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5QcmVwZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXg6IGFuYUBnbWFpbC5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9J2J0LXN0YW5kYXJkIGJnLWNvbG9yLWdyZWVuIG0tMCB3LTEwMCBtdC0zJz5Tb2xpY2l0YXIgUHJvZHV0bzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gbGc9ezZ9IG1kPXsxMn0gY2xhc3NOYW1lPSdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHNlY29uZC1jb2x1bW4gcHQtbGctMCBwYi1sZy0wIHB0LTUgcGItNSBvcmRlci1sZy1sYXN0IG9yZGVyLWZpcnN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0aXRsZSB0aXRsZS1tZWRpdW0gY29sb3ItYmxhY2snPkRlc2VqYSBhZGlxdWlyaXIgbm9zc28gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY29sb3ItcHJpbWFyeSc+cHJvZHV0bz88L3NwYW4+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcC1iaWcnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVm9jw6ogc8OzIHByZWNpc2EgZGUgcHJlZW5jaGVyIG8gZm9ybXVsw6FyaW8gZSB2b2PDqiBlc3RhcsOhIHNvbGljaXRhbmRvIG8gRWNvcmFpeixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgYmFzdGEgYWd1YXJkYXIgbyByZXRvcm5vIGVtIHNldSBlbWFpbCBvdSB3aGF0c2FwcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgPEJ1dHRvbldoYXRzYXBwLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=