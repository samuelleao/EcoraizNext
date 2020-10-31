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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/about.js");
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

var _jsxFileName = "C:\\Users\\conta\\Desktop\\ecoraiz\\frontend\\components\\buttonWhatsapp.js";



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

var _jsxFileName = "C:\\Users\\conta\\Desktop\\ecoraiz\\frontend\\components\\footer.js";






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

var _jsxFileName = "C:\\Users\\conta\\Desktop\\ecoraiz\\frontend\\components\\head.js";


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

var _jsxFileName = "C:\\Users\\conta\\Desktop\\ecoraiz\\frontend\\components\\header.js";





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
              children: "Inicio"
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
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: `link ${isActive('')}`,
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          className: "bt-standard bg-color-second bt-standard-second m-0",
          children: "Produto"
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

/***/ "./images/illustrations/illustration1.svg":
/*!************************************************!*\
  !*** ./images/illustrations/illustration1.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/illustration1-648393c6229290cf26192e499afde72f.svg";

/***/ }),

/***/ "./images/illustrations/luciano.png":
/*!******************************************!*\
  !*** ./images/illustrations/luciano.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/luciano-a2843bd7041b25d12508f808c6308985.png";

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

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
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
/* harmony import */ var _images_illustrations_illustration1_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/illustrations/illustration1.svg */ "./images/illustrations/illustration1.svg");
/* harmony import */ var _images_illustrations_illustration1_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_illustrations_illustration1_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_illustrations_luciano_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/illustrations/luciano.png */ "./images/illustrations/luciano.png");
/* harmony import */ var _images_illustrations_luciano_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_illustrations_luciano_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_buttonWhatsapp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/buttonWhatsapp */ "./components/buttonWhatsapp.js");

var _jsxFileName = "C:\\Users\\conta\\Desktop\\ecoraiz\\frontend\\pages\\about.js";










function About() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_head__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: 'Ecoraiz | Sobre'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_header__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: "about",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "section1 illustration-branch-left illustration-branch-left-white",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "illustration-branch-white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            xs: 12,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              className: "title title-big text-white",
              children: "Sobre n\xF3s"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "paragraph p-big text-white",
              children: ["Mais que uma empresa! Uma amiga que se preocupa", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 25
              }, this), "com a qualidade de seu produto"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "section2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 12,
              lg: 6,
              md: 12,
              className: "first-column",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                  className: "title title-big color-black ",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "paragraph p-big",
                    children: "Hist\xF3ria"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 38,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 39,
                    columnNumber: 41
                  }, this), "Senta que l\xE1 vem  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "color-primary",
                    children: "hist\xF3ria!"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 55
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "paragraph color-grey",
                  children: "No ano de 1979, o Fundador Paulo Cavalcanti de Albuquerque desbravou terras da regi\xE3o, hoje denominada Fazenda Tamatanduba, localizada em Pedro Velho \u2013 RN. Sendo um dos pioneiros Produtores do Setor Canavieiro. Em 2015 iniciou-se uma Diversifica\xE7\xE3o nas Culturas, nascendo em 2020 a Ecoraiz Agroind\xFAstria."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 12,
              lg: 6,
              md: 12,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "d-block m-auto",
                src: _images_illustrations_illustration1_svg__WEBPACK_IMPORTED_MODULE_3___default.a
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "section3 illustration-line-right",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 12,
              lg: 6,
              md: 12,
              className: "cards-goals",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-goals",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaFlag"], {
                  size: 25,
                  className: "color-second mb-4"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                  className: "title tile-little color-black",
                  children: "Miss\xE3o"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "paragraph p-medium color-grey",
                  children: "Produzir e Distribuir Produtos e Servi\xE7os de Qualidade, atendendo as expectativas dos nossos clientes e parceiros."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-goals",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaStar"], {
                  size: 25,
                  className: "color-second mb-4"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                  className: "title tile-little color-black",
                  children: "Valores"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "paragraph p-medium color-grey",
                  children: "\xC9tica, Transpar\xEAncia e Respeito com Clientes, Colaboradores, Parceiros e Meio Ambiente."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-goals",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaEye"], {
                  size: 25,
                  className: "color-second mb-4"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                  className: "title tile-little color-black",
                  children: "Vis\xE3o"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "paragraph p-medium color-grey",
                  children: "Ser reconhecida como uma Empresa de Refer\xEAncia no mercado com alto padr\xE3o de Qualidade."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 12,
              lg: 6,
              md: 12,
              className: "second-column",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                  className: "title title-big color-black ",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "paragraph p-big",
                    children: "Objetivos"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 41
                  }, this), "Se for pra fazer, fazemos ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 63
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "color-second",
                    children: "bem feito!"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "paragraph color-grey ",
                  children: ["On the other hand, we denounce with righteous ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 87
                  }, this), "indignation and dislike men who are so beguiled ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 81
                  }, this), "and demoralized by the charms."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                  className: "bt-standard bt-standard-second",
                  children: "Produto"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "section4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 12,
              lg: 6,
              md: 12,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "founder d-block m-auto",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: _images_illustrations_luciano_png__WEBPACK_IMPORTED_MODULE_5___default.a
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              xs: 12,
              lg: 6,
              md: 12,
              className: "second-column",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                  className: "title title-big color-black ",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "paragraph p-big",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "title",
                      children: " Luciano "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 115,
                      columnNumber: 76
                    }, this), " - Fundador da Ecoraiz"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 41
                  }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 146
                  }, this), "\u201CFor\xE7a, Foco, F\xE9 e ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "color-primary",
                    children: "Trabalho"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 116,
                    columnNumber: 60
                  }, this), "\u201D"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "paragraph color-grey ",
                  children: ["\" On the other hand, we denounce with righteous", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 88
                  }, this), "indignation and dislike men who are so beguiled", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 81
                  }, this), "and demoralized by the charms.\""]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_buttonWhatsapp__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (About);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9uV2hhdHNhcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2ltYWdlcy9jb3B5cmlnaHQvbG9nb192aWJlY3JpYXRpdmEucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLTExNHgxMTQucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLTEyMHgxMjAucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLTE0NHgxNDQucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLTE1MngxNTIucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLTU3eDU3LnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi02MHg2MC5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Zhdmljb25zL2FwcGxlLXRvdWNoLWljb24tNzJ4NzIucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLTc2eDc2LnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvZmF2aWNvbnMvZmF2aWNvbi0xMjgucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mYXZpY29ucy9mYXZpY29uLTE2eDE2LnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvZmF2aWNvbnMvZmF2aWNvbi0xOTZ4MTk2LnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvZmF2aWNvbnMvZmF2aWNvbi0zMngzMi5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Zhdmljb25zL2Zhdmljb24tOTZ4OTYucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9pbGx1c3RyYXRpb25zL2lsbHVzdHJhdGlvbjEuc3ZnIiwid2VicGFjazovLy8uL2ltYWdlcy9pbGx1c3RyYXRpb25zL2x1Y2lhbm8ucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9sb2dvL2xvZ29QcmltYXJ5LnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvbG9nby9sb2dvU2Vjb25kLnBuZyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkJ1dHRvbldoYXRzYXBwIiwiRm9vdGVyIiwiTG9nb1NlY29uZCIsIkxvZ29WaWJlQ3JpYXRpdmEiLCJIZWFkU2VvIiwicHJvcHMiLCJyZXF1aXJlIiwidGl0bGUiLCJIZWFkZXIiLCJzaG93TWVudU1vYmlsZSIsIm1lbnVfYnV0dG9uX21vYmlsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsInN0eWxlIiwiYWRkIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNBY3RpdmUiLCJyb3V0ZSIsInBhdGhuYW1lIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiY29uc29sZSIsImVyciIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJyZXNvbHZlZEFzIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwidmFsdWUiLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwiZXNjYXBlUGF0aERlbGltaXRlcnMiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlQXMiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkRfRVJST1IiLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwic3NnNDA0IiwicGFnZSIsIm1vZCIsImNhY2hlZFJvdXRlSW5mbyIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiUHJvbWlzZSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJkYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJBYm91dCIsIklsbHVzdHJhdGlvbjEiLCJGb3VuZGVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FB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Qzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYWJvdXQuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZhV2hhdHNhcHAgfSAgZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcblxyXG5mdW5jdGlvbiBCdXR0b25XaGF0c2FwcCgpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidXR0b25XcHAnPlxyXG4gICAgICAgICAgICBGYWxhciBubyB3aGF0c2FwcFxyXG4gICAgICAgICAgICA8RmFXaGF0c2FwcCBzaXplPXsyMH0gY2xhc3NOYW1lPSdtbC0yJyAvPiAgICBcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbldoYXRzYXBwOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBGYUZhY2Vib29rRiwgRmFJbnN0YWdyYW0sIEZhWW91dHViZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IExvZ29TZWNvbmQgZnJvbSAnLi4vaW1hZ2VzL2xvZ28vbG9nb1NlY29uZC5wbmcnO1xyXG5pbXBvcnQgTG9nb1ZpYmVDcmlhdGl2YSBmcm9tICcuLi9pbWFnZXMvY29weXJpZ2h0L2xvZ29fdmliZWNyaWF0aXZhLnBuZyc7XHJcblxyXG5mdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBsZz17MTJ9IG1kPXsxMn0gY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtMb2dvU2Vjb25kfSBhbHQ9JycgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gbGc9ezEyfSBtZD17MTJ9IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtNSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzb2NpYWwtbWVkaWFzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9Jyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhRmFjZWJvb2tGIHNpemU9ezE1fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFJbnN0YWdyYW0gc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYVlvdXR1YmUgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT0nbXQtNSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17NH0geHM9JzEyJyBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPiA8aDUgY2xhc3NOYW1lPSd0aXRsZSB0aXRsZS1saXR0bGUgY29sb3ItYmxhY2snPkluc3RpdHVjaW9uYWw8L2g1PjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcC1tZWRpdW0nPjxhIGNsYXNzTmFtZT0nY29sb3ItZ3JleScgaHJlZj0nJz5Tb2JyZSBuw7NzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcC1tZWRpdW0nPjxhIGNsYXNzTmFtZT0nY29sb3ItZ3JleScgaHJlZj0nJz5CbG9nPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17NH0geHM9JzEyJyBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxoNSBjbGFzc05hbWU9J3RpdGxlIHRpdGxlLWxpdHRsZSBjb2xvci1ibGFjayc+TcOtZGlhcyBzb2NpYWlzPC9oNT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ncGFyYWdyYXBoIHAtbWVkaXVtJz48YSBjbGFzc05hbWU9J2NvbG9yLWdyZXknIGhyZWY9Jyc+RmFjZWJvb2s8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3BhcmFncmFwaCBwLW1lZGl1bSc+PGEgY2xhc3NOYW1lPSdjb2xvci1ncmV5JyBocmVmPScnPkluc3RhZ3JhbTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezR9IHhzPScxMicgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aDUgY2xhc3NOYW1lPSd0aXRsZSB0aXRsZS1saXR0bGUgY29sb3ItYmxhY2snPkNvbnRhdG9zPC9oNT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ncGFyYWdyYXBoIHAtbWVkaXVtJz48YSBjbGFzc05hbWU9J2NvbG9yLWdyZXknIGhyZWY9Jyc+RmFsZSBjb25vc2NvPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcC1tZWRpdW0nPjxhIGNsYXNzTmFtZT0nY29sb3ItZ3JleScgaHJlZj0nJz4oODQpIDk4ODQ1LTUyMjM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3BhcmFncmFwaCBwLW1lZGl1bSc+PGEgY2xhc3NOYW1lPSdjb2xvci1ncmV5JyBocmVmPScnPig4NCkgMzY2Mi01NTY2PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17MTJ9IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3BhcmFncmFwaCBwLW1lZGl1bSBjb2xvci1ncmV5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZhemVuZGEgVGFtYXRhbmR1YmEgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENQUiAvIE5JUkYgNTA2NTU3NzlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezEyfSBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTUgbWItNSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0xvZ29WaWJlQ3JpYXRpdmF9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Zvb3RlciA+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuZnVuY3Rpb24gSGVhZFNlbyhwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uLXByZWNvbXBvc2VkJyBzaXplcz0nNTd4NTcnIGhyZWY9e3JlcXVpcmUoJy4uL2ltYWdlcy9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLTU3eDU3LnBuZycpfSAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24tcHJlY29tcG9zZWQnIHNpemVzPScxMTR4MTE0JyBocmVmPXtyZXF1aXJlKCcuLi9pbWFnZXMvZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xMTR4MTE0LnBuZycpfSAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24tcHJlY29tcG9zZWQnIHNpemVzPSc3Mng3MicgaHJlZj17cmVxdWlyZSgnLi4vaW1hZ2VzL2Zhdmljb25zL2FwcGxlLXRvdWNoLWljb24tNzJ4NzIucG5nJyl9IC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbi1wcmVjb21wb3NlZCcgc2l6ZXM9JzE0NHgxNDQnIGhyZWY9e3JlcXVpcmUoJy4uL2ltYWdlcy9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLTE0NHgxNDQucG5nJyl9IC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbi1wcmVjb21wb3NlZCcgc2l6ZXM9JzYweDYwJyBocmVmPXtyZXF1aXJlKCcuLi9pbWFnZXMvZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi02MHg2MC5wbmcnKX0gLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uLXByZWNvbXBvc2VkJyBzaXplcz0nMTIweDEyMCcgaHJlZj17cmVxdWlyZSgnLi4vaW1hZ2VzL2Zhdmljb25zL2FwcGxlLXRvdWNoLWljb24tMTIweDEyMC5wbmcnKX0gLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uLXByZWNvbXBvc2VkJyBzaXplcz0nNzZ4NzYnIGhyZWY9e3JlcXVpcmUoJy4uL2ltYWdlcy9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLTc2eDc2LnBuZycpfSAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24tcHJlY29tcG9zZWQnIHNpemVzPScxNTJ4MTUyJyBocmVmPXtyZXF1aXJlKCcuLi9pbWFnZXMvZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xNTJ4MTUyLnBuZycpfSAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9J2ljb24nIHR5cGU9J2ltYWdlL3BuZycgaHJlZj17cmVxdWlyZSgnLi4vaW1hZ2VzL2Zhdmljb25zL2Zhdmljb24tMTk2eDE5Ni5wbmcnKX0gc2l6ZXM9JzE5NngxOTYnIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD0naWNvbicgdHlwZT0naW1hZ2UvcG5nJyBocmVmPXtyZXF1aXJlKCcuLi9pbWFnZXMvZmF2aWNvbnMvZmF2aWNvbi05Nng5Ni5wbmcnKX0gc2l6ZXM9Jzk2eDk2JyAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9J2ljb24nIHR5cGU9J2ltYWdlL3BuZycgaHJlZj17cmVxdWlyZSgnLi4vaW1hZ2VzL2Zhdmljb25zL2Zhdmljb24tMzJ4MzIucG5nJyl9IHNpemVzPSczMngzMicgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPSdpY29uJyB0eXBlPSdpbWFnZS9wbmcnIGhyZWY9e3JlcXVpcmUoJy4uL2ltYWdlcy9mYXZpY29ucy9mYXZpY29uLTE2eDE2LnBuZycpfSBzaXplcz0nMTZ4MTYnIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD0naWNvbicgdHlwZT0naW1hZ2UvcG5nJyBocmVmPXtyZXF1aXJlKCcuLi9pbWFnZXMvZmF2aWNvbnMvZmF2aWNvbi0xMjgucG5nJyl9IHNpemVzPScxMjh4MTI4JyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdhcHBsaWNhdGlvbi1uYW1lJyBjb250ZW50PScmbmJzcDsnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J21zYXBwbGljYXRpb24tVGlsZUNvbG9yJyBjb250ZW50PScjMDA2RUNCJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdtc2FwcGxpY2F0aW9uLVRpbGVJbWFnZScgY29udGVudD0nbXN0aWxlLTE0NHgxNDQucG5nJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdtc2FwcGxpY2F0aW9uLXNxdWFyZTcweDcwbG9nbycgY29udGVudD0nbXN0aWxlLTcweDcwLnBuZycgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0nbXNhcHBsaWNhdGlvbi1zcXVhcmUxNTB4MTUwbG9nbycgY29udGVudD0nbXN0aWxlLTE1MHgxNTAucG5nJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdtc2FwcGxpY2F0aW9uLXdpZGUzMTB4MTUwbG9nbycgY29udGVudD0nbXN0aWxlLTMxMHgxNTAucG5nJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdtc2FwcGxpY2F0aW9uLXNxdWFyZTMxMHgzMTBsb2dvJyBjb250ZW50PSdtc3RpbGUtMzEweDMxMC5wbmcnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9J0NvbnRlbnQtVHlwZScgY29udGVudD0ndGV4dC9odG1sO2NoYXJzZXQ9VVRGLTgnIC8+XHJcblxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nRW1wcmVzYSBlc3BlY2lhbGl6YWRhIG5hIGNvbWVyY2lhbGl6YcOnw6NvIGUgY29uc3VsdG9yaWEgbm8gc2VnbWVudG8gZGUgcGxhbm9zIGRlIHNhw7pkZSBubyBSaW8gR3JhbmRlIGRvIE5vcnRlIGUgUGVybmFtYnVjby4nIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J2tleXdvcmRzJyBjb250ZW50PSdjb3JyZXRvcmEsY29tcGFyZSxzYcO6ZGUscGxhbm9zLG9kb250byxhbnMsbmF0YWwscmVjaWZlLFBFLFJOLGFtaWwsdW5pbWVkLGJyYWRlc2NvLGhhcHZpZGEnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J2F1ZGllbmNlJyBjb250ZW50PSdBbGwnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J1VSTCcgY29udGVudD0nJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdyYXRpbmcnIGNvbnRlbnQ9J0dlbmVyYWwnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J29iamVjdFR5cGUnIGNvbnRlbnQ9J0RvY3VtZW50JyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdnb29nbGVib3QnIGNvbnRlbnQ9J2luZGV4LCBmb2xsb3cnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J3JvYm90cycgY29udGVudD0naW5kZXgsIGZvbGxvdyxhbGwnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J3JldmlzaXQtYWZ0ZXInIGNvbnRlbnQ9JzcgRGF5cycgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0ncmV2aXNpdCcgY29udGVudD0nNyBkYXlzJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdjbGFzc2lmaWNhdGlvbicgQ09OVEVOVD0nRW5nZW5oYXJpYScgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0ncmVzb3VyY2UtdHlwZScgQ09OVEVOVD0nZG9jdW1lbnQnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J3JvYm90cycgQ09OVEVOVD0naW5kZXggIGZvbGxvdycgLz5cclxuICAgICAgICAgICAgPG1ldGEgY29udGVudD0nZ2xvYmFsJyBuYW1lPSdkaXN0cmlidXRpb24nIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J2Rpc3RyaWJ1dGlvbicgY29udGVudD0nZ2xvYmFsJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdHb29nbGVib3QnIGNvbnRlbnQ9J2FsbCcgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0ncm9ib3RzJyBjb250ZW50PSdpbmRleCBmb2xsb3cnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J2F1dGhvcicgY29udGVudD0nVmliZWNyaWF0aXZhIE1hcmtldGluZyBEaWdpdGFsIGh0dHBzOi8vd3d3LnZpYmVjcmlhdGl2YS5jb20uYnInIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J1VJRGVzaWduJyBjb250ZW50PSdTYW11ZWwgTGXDo28gLSBzYW11ZWxkYXNpbHZhNDYwQGdtYWlsLmNvbScgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0nY29weXJpZ2h0JyBjb250ZW50PScnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J2Jhc2VfdXJsJyBjb250ZW50PScnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J2xhbmd1YWdlJyBjb250ZW50PSdwdC1icicgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0nY291bnRyeScgY29udGVudD0nQlJBJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBodHRwLWVxdWl2PSd4LWRucy1wcmVmZXRjaC1jb250cm9sJyBjb250ZW50PSdvbicgLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9J29nOmxvY2FsZScgY29udGVudD0ncHRfQlInIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzp1cmwnIGNvbnRlbnQ9JycgLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9J29nOnNpdGVfbmFtZScgY29udGVudD0nJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSd0d2l0dGVyOmNhcmQnIGNvbnRlbnQ9J3N1bW1hcnlfbGFyZ2VfaW1hZ2UnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J2FwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGUnIGNvbnRlbnQ9J3llcycgLz5cclxuICAgICAgICAgICAgPHRpdGxlPntwcm9wcy50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRTZW8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJ1dHRvbiwgTmF2YmFyLCBOYXYsIENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuXHJcbiAgICBmdW5jdGlvbiBzaG93TWVudU1vYmlsZSgpIHtcclxuICAgICAgICBjb25zdCBtZW51X2J1dHRvbl9tb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9idXR0b25fbW9iaWxlJylcclxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtbGlua3MnKVxyXG4gICAgICAgIGlmIChtZW51X2J1dHRvbl9tb2JpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51X2J1dHRvbl9hY3RpdmUnKSkge1xyXG4gICAgICAgICAgICBtZW51X2J1dHRvbl9tb2JpbGUuY2xhc3NMaXN0LnJlbW92ZSgnbWVudV9idXR0b25fYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd19tZW51Jyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zdHlsZSA9ICdvdmVyZmxvdy15OiBhdXRvJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZW51X2J1dHRvbl9tb2JpbGUuY2xhc3NMaXN0LmFkZCgnbWVudV9idXR0b25fYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnc2hvd19tZW51Jyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zdHlsZSA9ICdvdmVyZmxvdy15OiBoaWRkZW4nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgZnVuY3Rpb24gaXNBY3RpdmUocm91dGUpe1xyXG4gICAgICAgIGlmKHJvdXRlID09IHJvdXRlci5wYXRobmFtZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBcIm5hdi1saW5rLWFjdGl2ZVwiXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxOYXZiYXIgY2xhc3NOYW1lPSduYXZiYXIgZml4ZWQtdG9wJyBleHBhbmQ9J2xnJz5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoJy4uL2ltYWdlcy9sb2dvL2xvZ29QcmltYXJ5LnBuZycpfSBhbHQ9J0Vjb3JhaXonIHRpdGxlPSdFY29yYWl6JyAvPlxyXG4gICAgICAgICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdtZW51X2J1dHRvbl9tb2JpbGUnIHR5cGU9J2J1dHRvbicgb25DbGljaz17c2hvd01lbnVNb2JpbGV9ID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21lbnVfYnV0dG9uX21vYmlsZV9pY29uX2N1c3RvbSc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWVudV9idXR0b25fbW9iaWxlX2ljb25fY3VzdG9tJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtZW51X2J1dHRvbl9tb2JpbGVfaWNvbl9jdXN0b20nPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT0nbWwtYXV0byBhbGlnbi1pdGVtcy1jZW50ZXIgbWVudS1saW5rcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdi1saW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BsaW5rICR7aXNBY3RpdmUoJy8nKX1gfSA+SW5pY2lvPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdi1saW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2Fib3V0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGxpbmsgJHtpc0FjdGl2ZSgnL2Fib3V0Jyl9YH0+U29icmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2LWxpbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGxpbmsgJHtpc0FjdGl2ZSgnJyl9YH0+UmVjZWl0YXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2LWxpbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGxpbmsgJHtpc0FjdGl2ZSgnJyl9YH0+QmxvZzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXYtbGluayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgbGluayAke2lzQWN0aXZlKCcnKX1gfT5Db250YXRvczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPSdidC1zdGFuZGFyZCBiZy1jb2xvci1zZWNvbmQgYnQtc3RhbmRhcmQtc2Vjb25kIG0tMCc+UHJvZHV0bzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvTmF2YmFyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFKWUFBQUF5Q0FZQUFBQytqQ0lhQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQlVIU1VSQlZIZ0I3VndKZkZUVnVmL09tWmxNOWhBSnUreUNLNEt5Wm1HeENnVkZKSWxSQ2k3NDlPRmFhYlZXdTd6K2FIMVliU3MrdGZVcHJRcklwbGxBRVZ3ckNFbFloRnFMcUJBZ2JHRU5rQVZJTWpQM25QN1BuU1gzM3Jra21aaldpdlAvL1c3dVBkODkyejNuTzkvNWxqTWhpaUtLS0tLSUlvb29vb2lpcmNFb2lpZ0NPTFdwUTJmaDhkeENUSlFrWjlhdXB5aWlpQlRwZWVseGRFbGVqSlgreGh2a3FDbE9lYUpxWGNvdktJb29Ja0Z0YWZMOUZhdmJ6YU9oZWI4TjBrNnRUdWhjWFp3NlFjNGlydExWSlNsL3FpNU9ua2F0Qktjb3ZqT1F4V2xKWUpnbFFyQS9wc1JwRTEyYzRpZ3Z6NkhlSlY1MStqQnhyYXhtYk1yeiswc3A3b1NuK21HUUh6aSs0YnhrYWdXaWpQVmRRVmJ1OEdtTEwzb2NTdlVVbGRSOHZQM0QxK3lLbzhOeVROWEhLYjJyMXlYZm41d1FkMGdTelVuUlVtYjF2b3Jxb1lFLzY5TEVYZFFLUkJucnU0Q01HMy9JQksxZC9FbVhUTzdVeW9Ma24xNjNNNUhxK1lSMm82dkxreDAxcjlUVTFQMmtYV2IxTG5MUXlhcU5LYjJUSzJyeXBaVGZwMVlneWxqbk1qSW5KZkhNM05jWms4OUIrc1F3cHh6eTJiNTJHNE92WTdpOExzNGxYRFI0c0l0bFVKMWdmQzBrMTNCSmNpNDEwQS9ZVGFReFJudmxwKzNhVVlTSU10WTVnc0IyTmx6ZGRVSkc5bVdNbkp1eHRkMFV5c1FsL2Z6TkN3VVlUVTlpTzB6NXhiVmxzZVR1T1U2bFU3T3FWbk1IRFVuSnFEbmhZQ3pJRzU5VW41WVhVSVNJTXRhM0hLZUtVOGJDUGZBWmM5QnVZbXlEdXA4c1NkazZ2bC8xUnBLc3Z6WC8ydTN0citBdThYa3dQZk9hOG1UeU9hOE9wb1htdi91STZ0UmRFNnlTa2V4QUVTTEtXTjlpS0hjQStPQmR5Si9MalhRSXBzdGV2K2VUK0NtRGpvUVhjb29CNjdlbi9jMUF1VDRseHVlbU1kTmpWVUlTODZxN2cwbWROemdUOFV5VDFSUWhvb3oxTFVYbFgrTzZnUW5tMHRubVVPUDAzTlN0MUNYT1o2YUQ2MzY1b2g5bjNMOGRDaDlMbUhYRERnZjVhaWJVYkU1S0EybDMyU3B5QzdpNzFIc3AyZVVORHZkV2loQlJ4dnFXd3VtT3VSMnVnL2ltOGlpMyttM3ArOFBvbThwVGh6cWNjbk13UFdQMDNqU3FkNDVLR2x4N290M0k2ZzlURTlyM1NlbFUvZXJoOXpvbGNFN0hPMlJWMWxLRWFIdkd5c2diUkZsNTQ1VkZRdWM2bEhNeFBmczJ5c3lkZzNzZS9adHdiSE44bDIySEU4YXpGa1I2TCt0cXd4TXU3Y0lQdG5iOE1waVVHazNzbU9TSllRUEh4YWwwMnVqalg3SisxQkNYVk5jbHlWTTloMW9CSjdVaGVFYnVBc25FcmFSTFdkZFJPVEozTEoxcDJFbXhNVE5JQkV3UnhpdW9OTCtBemdId0N2R3E1UHhXZjRML21HWGtQQ1ZLaXg2amZ5VXliaHczOTcyeWxYMDcxenI3ZHo1Tk1jMWt4MVlXVGdUcGYxYjBkNVJlZkl6Z2hTZE40KzdaMlYreWUvSUhYQStkYldrd0c2ekRuZFJLdEozRXlzd2JpMis0MVVEcHlEU2FRL0V4S1l6WU16QmUvMCsvbUhpUXpnV01tdExkOHIwd3d0aEQvM0pKemFqRGtrMWRuV012T1VZZjdXamZiUGJETmU3UG9JdXR4S3BlZ2V0TlBDL0R2V2hyUmRKUmgwUCtGTSsvaCtSN2F0cUlpalhhR1djNXRSSGFUbUpKY1VIWUlSeEdFZnMvdmpXUW1oMER1V0NuSzcwbllwMUVSMmIyTkViOEtVaDh6RDh4S1drMmxSYit2em1UNTYxdGh4UHI5bFVteEhrMVpNSkdZQ3VWVkJlSmF1NjVvbnpjSTQ5dFBXcjNQbjY0bGJLVTJncHRKN0dFV0lPL21wR0VnZmtybmF0WWwvOFYvbjV1b2pGODc4YTNqbENyd1pTTzB3MzFuSy9mU1lZcjV5VnYxVEtuV0Zhd3VTc2x1TVJCN0dRZSs3cWtGd3czUGVuN3A0N1NONEMyWTZ3Tnk3N2thbXVRZEFDWCt0Z2l1RVIrUk9jdWhIVDRyb1dzZUIzUDJ5RTNGa2lQdUpuK0RSQ3VwRHRYZmQ1KzZPU2U1VDBSQXh3Tkpsb0haaFQ2Uy8yT05EYnIxSkZWeStnYmdtVXJuTVVwZlp1YjNBbCtSYnZoTktQMStYVzJKZFVoc1JTRUsxVmVsYzk5ekt2VnRpK2dtSlBMT3lYRjhpTzE5WUxXdjFWUFkvSVNJTTNzVzgvTXZSUmliU2hHd3dWUFhCbWRZS1gwUmI2bnlSNm41MkZWKzRhUmcvZkYxTVppTDZoRUhSdXB0R2d2dFFUcGVkMnduRlRZSTQ0Y3ZnUFV5Ym1EOHZPMUZwVlZWdUJodWhEdTZVN2tjMzlCb3VhVUVNNVpVTnlscmdWRGFiRXROemd2QmExZGdINTJ4QmJhZ0luZlM2V0RvTS9NRWswM3lPenJXek92L2xPaXpheFFKV28yNEpzbTN6em9ZUDhCblU5MytxSXk2ZERpdzUyM3RQaWJtb1A2NWdNWUw2NTFoeHlLSlM2T3dQbFZwaVJuVThYTW0vUHduUE9aZyswRk5TVEpFTjBlalVsYmF5M0hNbk9WZzZSYktCL253NW1tL1FSdjhocHA3QnE0Y0xjeHJ6aGtLTHRPa25jS1k2NVhJTmtza1hOMkJGYmxJMVJjOUJwWm9RS3EwdlU0MUlrN2tVcTB2RlVUOExFVS9FRXNoSEJuM3VBWkxoNTdZaWFreXIxSTliR1VQSTdDODhrbm5xQk55NDdyTkxoTVlHUXNieHdENkRxU0hZSlQ4WTlJOXRScGdxWmluTHBBOFgyNmNWRG9sNks0Y0hhbzdveHNmQ2QvR0cxY2FSelRRSzJWVExKRklrYWJSV3VXVi9tL01lY3VhRTEvTm1TcVF1TlZxTmhPaVVKeHVaUzZPSDdPRHNvVHFDKzVzUi9zMTFLSUNYam9GS0lSKzYwb0tYZ3BySmJNM044eFF6d1I0L3NNRlJjK3E0d1Qwcnkvd2J2SklGdUQwTXJyV29yeG5FVWxSYXR0K21iNTJJMUZCOUFEQ3hPeG5MQlNXYm5EeU1CVXdGZlFPVFl4WmxsaFV0alp1a21NWEt2RG1Vb3YwQW1qdFlCbjNYaWZpWnlSM1pGSjF5Wjg5RXdLWnlxOVVseGpHQmRZdlRkbW1ONE1uaGpQWW8rL2owSDRQVm1aeWwreVBhYnRJZWJpbitrU1ZPK0dWMW54UFlNWFBtc2ltR3A1SU8wSEIyc3hhWlk0c2pITnMzTC9GMHkxQkk5RHdwbEtiemhOZlEvek90YlQ4QWxuTzB6WERzelJ5OWdYdzlVRExweFUyaGVUWUdRcUJTRXhqc1RYR2ZQais4TlBnMElhWWVCdU45ZnJmSWV5c3Zzenpic1o3NlpUT0ZNcHFKMXVGT2JxUTdnL3B0aThELzlnZEdDaE1ZMUJ2NEhDTStXYWsyd3gyVUhqTnFKY0RzS2ZZSEQwREs2d3JROVNjZzZObU5LcnNRK09WekE1RnhteXFBbFV4ejgreEhYYVFJOEhBeXdKeHIxMHhMci9nTDlqTEUyb2VGaTloZFlOQTdtU0xoK1hvSXc3TTlnay9IR1FGZXdzVzFWNjdoV1FjdFl6NDRkMDVWNHRRak11NHM2NFI4a2VOUmlOL1FHOTFYOFJWUVF2NkxUVkpEeGhDajdvQ2VENmhSWnlCZzJmMU1sRXFkQXk4YmRqS0MzbEppcCtmUWNUL0FVVEhVb1JMdVdwVjJOK0trUUY5MEt5djBEamJrMEk2NE9WUUhHT2drQkZRZlNpa1RsWEdyTmdPQ2Nia2hMYjNjTFFjOHV3Qjh3NFNwWVVKc3FUUEFuK0h5V0thd3p2M2RCL1p1cFBXYmt3aXVWMWhuZW5zTzErRDJWSDRCb3JmZDYrb0cwd3ZPOUJubHEvZjJuVURkM0JMRE9NZlVYNkllbEtTcFpkZWFKa2ZJTGFDZzN2ZTFKaTRuOFJvcTcyM1ZadUJQWUIrbDZFWnh0cnk4OW9uRW1URW84Mm4wRjczV1Z4NFRYbzg4WFk3aWZvRzJ5d1U1TFpldTJSNDlleXBLaUhMQzNzSHJwS0NzOFBYcUtrOEJGeWEyR01KU1JjSHFYNWY4ZmpGd2F5Z3h5dVNaYittbllqcUM2TGFNd1AwdERoN3huSWg3SGxYb0wyaHVwalhzK1Z4VnBpcUNPVlRwKysydHFIY01iNk1MOGFLM0dGS1pNd01GSjYzZ0EwM00vd3VwVFc1a2ZrV01NT09ZMUtDcFNvbHJxeVhseWdUaXJPTk9aaEpDY0gycDVxb2t0NkV0dnV4eUVDekh0SmZMcTViRUNpK3B6WlpKQTBvQy9DWkR5amxGOWR1UzNPZjFkeStXTlRXY1lta0IwWUs0QnUyRTJXRkl4RDMzUHRkQXNoL1l3RkJhQUxic2Y4bHp3aWZMR3pUTXAwOGJMMzhHVzFoZzczb1FrVDNOUWFNQmFtR2tDZlN2RGZ3M2FmeVpaMHRpSHBnd0d5bER3Tk1Hems4VURmb1FkSzZGeEZ1ME81dHVSWFk2NCt0TFI0SVZsZzZ5Q0ZpYk1ZbmJ1eE1hMXo5cS84ZFdnNVJwMGZJN21RSXNNT1dsOVFHdDZvNDNWaTRrVlMwc3FQWG1yMVNLL0hwRE1KeHRiU3NHeXp5OW5ycXlRWFZ4TEVMNzZaSEJhNER6YjJGUlArUm5pN3Z1V1NYUGNhQ0NjcEhGV3lwbVk2L2VQOTA5UVNsQlRkYml2eTFKWlJYemVRKzhSZDBxd1hPYWcyTlQ1OGQ3WjRQckhGTTI5dEtIaU1Pb3JBemF2Q2Z4NHFkYjFJYUdJSmN6aVVNUkhNY0RVTm41Wk1HeGZWSUo0N0dDdThoNkhRKzFTNlRJM2hVZlM5UTJNYkFTanI4SmlqTzNtMXErSFJ1TmZVSEpOaGk4TGU4NTVVdDRwcTRrN3FZczZQUzJsVWJqOWFXMWlHRlcza2NpOTVSVDVGQXNiK1lVdFhibzNNM0oxNlc2SGFQVW9uNkdFcVRuSXRtSWlhYVNRVlNuc2FsTXRPcGpHWGZFZFlWci9aL0tLSmxwRXoxSkpyYzR1WnlnZ1lBeHlMRWd3d0FvMFBvTk5udW9McWtIWkdudVpWS243VHFrUnRKWWZPMkRnK2trSG5ZY2xoWGdsSmZwMW53L0k5NkVNeG5rWUcza0RGT0hNdDdrdTUxSEtrVVVBd2k0QVlrNWRJbXBnTWJmWWFwczU3SFJMOXdZZ0oxRUxZejlBNzd6UmczemN4RE5jZ1JqTnVWdnJNUU1NSHJBeVo2QzJFRkxLbWlkZG0zNGpncW4vTnhWbnQ0WFNuNHV2TUswbFFxM3c3bUlBekVSV0FqNDluNXI2S0Nka0twdm9OS0poTUJqOVFhRnRXOVoyeUtSblpMOU1WSzNJdHhZWWUwcnZBY21iRGluRmRNRWl6Z0RoRmRRMXZobEpaMmVQaEl0b041K3RyQWF2eGloQ3ordEdzTi8vc3NVS25YRVFhbTJIb1lJNVZxWVd5dDVnaUJDeVd4Q2E4Z21tbWxOdGJTMTZIOHZHRVRGNG90UGZoVHlPRGNNdGtDSFNWSTl3ZDEzQ1N2RzR6b3pJdGxWb0YyVktqeE4rbFZQR2s5SnZxUmlBWVRCOUJZcStudXZyVkxOYXRKTW1GOUhXZ3JGTEJZbTNZc1pFSkJIOERpdXF6RkZpZ3lEcEJ3bXJGS0YwY3FnWmJxdHp5dG4veFpFenV5eVJYeGttY29UN2xUL3NBOHcybG5SZERGN3NTUW5jdU5ZR3pNOWJhb25VUW8vdW9jU3NheG94NmdZU3A2NnBjUVJFQ0t6aWQvQ3ZUUEZsamNzN0h4dHJYUU1HSFZzRzhicS9PRGZWcUpJdDF0SDdaNTlRQ3NJeWMvWlp0QjFzU2ZXTEtsSjUzSGdiZVlDRElZK2paYm5ORjFITEdnaEl1YTJHSk5wYnc2ZEtodU9CdFU3N01uSGdiQVdWcGg4V2FrcWx4THFwclhKWmNTSzlRUHpvTjZ4MXJ0QlRYNTUvQVBMNkRwNkRiS0FuTDdsbGpiaUg1b3NaS3VlcTdrYWxXU0JlZlNtdnlHeVZzUm00bU5ZT21sQldNaDF4aXlYdEpxT3VNQ21qTm1ucUtHTmdTc25MdnNGSzVoMzVHNXBFdVJ2MCtXQ0JyVFBrWXZ5K3N5c3k4SHZqWWx6R0FmOUd2ckp3bkZWbjRuWVNOTFRQMjM4RmYvalpXS0thaTBlZURGd1NndlZYWUVrQ3BvNnI0M3BadFkxMFlVMlZrWHhiWUdzMFE3TGlsdjROTjcrdDh3OHpaa1Y4eUc3MUh4dW5odVdDS3NVV1dEQ01OejRmZ3dXczhMQ0RaeGFhYU9MenJScWFpSml4bkE1bzhOaU9FWEloS2JKMTMySEVXVVNzQkFmNEN5OHhPRVp3dEpjMFZ6OG4zSUtiRXhEQlloQzhISGxXUTl3a0s2Q2VnM3d1djlnbmhFYy9RcG9FbktYM3JRSmpFTDRJbFE0TU8xZU4zK3JxT1lXK1RWeHEzMGdIOG9IaFpqTXo1R2VKNjJHWkZMcGpwS2ROM2NmWWFhUkh0ZkNGQTkyYUN1WnoraUVjSTNmeVRISWdMWms3cWl2N1pqNTBUTVUrMWxWTlF6TW9ic0ZBZVFGeDBKY1JLVDN6bjgrWUc1U2F1eVlFMnhvQ0x4bXlMcHpVQlBVN0RPSEJkdHczejhLUGtVbWx3aFRBVnR6V0tRS0dmdEFqOStBSlJrVWV4Mk1kVE0yamF2Q3JWdDV4d0swNTVnRXVLUHJZcFlmN0NzN090RzRyUUhNekNRY1o4TzhGVWxzTi9zb1JLQ3YzR0E0TExHTGMvbWQ3Q3E0MFF6REdXdWJVT1l2MXZJZmVDSDN1RjArZi9aeGRZYVZDOFo1dTdUcmZyN1hwRkRUbzdqOHpueHQra2RRWGhSMzJhQ1JXYkVDUDJrTm5CM0IvOUxJR1VmcHBuNWl4RU9FdHQ3WmZibGwxWGhKZ3FNMG8zcmt0U0RZcTBsTXB2WnRESjVCNDYwMzZsc1BGajZmRDRqTnRoSFhhZlFydHN3a0dtdUN5WXhtUTVnOUhtbzk4dll1dCtEdkhoditQOWs5UUNOSHRzeHM1UGhiQ0pVdHFiSDI2N1dLRWtOWEE3bWlpMVhYTEtJOE95RVNmNEkyU3hVc25QeEZhTGNROWt4cmhRVUZlaHBPQnBTRjI3RTJ6bXZrbjJNWFNKVzg3Uzc3T2NwTE01WVFkbVZzeGdvWTZBbEg0SVRLN2lkVXBxS0JYQ2JFMXJQcjB1NlpOS2N1K2pwbkVhQWZkcHRHV3VGNHZLL2djVndrd1hWdXZRMy84djRVTDYxRXpVbmlOem1Ld2QrbjAzR095SEZQUUkrRU5MVGFMNTgxaUNvMFBzSTlRV3VHaTE4TWw1dGxtSnRobnpZYjBkeDlyMTZNODZqWDNFT051Q1dPMUlETFJhS2NZak9lb2ZVc0NhOGc3MXIxd0Q0SjJYcFFVM3dTcUI1NWk5UzJHbXV0eVArbVlqM0RBSVhtMHIwMHBSWERBVlR2Rzc4V3gzaG51dkh1WnBPRzlzb3k3aFVMSEVpbUJzRG1MRHptbXEyRTFaVXVpclBLamZHZE1uUkhUbGo2blRCT0g5Vkl0RkZpTWtOUnBTdU1qWUJzVUhMTjJOUlFla2h3OFBTTk42UzJtaGg1UTRkSzJBazVuYjZsaUF5MlZtdUM0T0pmRStJME9zRVVIeWNNdXVkUGt1S2ZsWXN0dXBzQmp3WGIvQ1dPYVoraTdEWFNlUitVM2FHaXFNVVIzWG1UUjNQVzFjb253akxWTnUvR2VFT3BORGM1TkhWa2ZnUzJPd0F2dGlsZmZSWFNmQ1dZNXRZbGVMMjQwVTZ1eVlBd2FQT29mRmxTOU0yeEcyYUpxQ2NsTDZ4S1hvWFh2VWdjbVRYd1c4NDQwWW1aTUpMWDRLbC80Zm1Db1hCTlMwYXFwUG02Vkx0SytEVVhtOVlkUDJ3Nmc1U0dyN3FXSGZkdHF5NWV2VkdVWHJzZk1WNnI1dkNYWGRQWTlHV2QvdGVZMHl5bCtsMk0wdmhmOG1zR3dlWFZxMmtDTDZmMVJuSy9QNUc1UUlyVXpYY3N0ZXBSSEJmNmpXRkhiTnB4N29YeGRxSWZBZEk4NzJyazEvL2hVRjBlNzVkQXUyZ2FzYTZtazU4d2VqMSs1YVFEK0MxSW1Gb3Z5Q1Q2TUJEaWZGcEhLYXNYc2h6ZU9TdG1vYVRZZklmQi81Ui91OGhOaWYvNlRIenZuMEFMZ2hGUkxEelpVQkk2Z1g5c3ZSMEMzK0ROTnRGTW9rZ0o0R0Qva3VNTVZKNXFUOTBrZjNPQmd0OE5YUnFGMzc2RkswdllENXcyU2I4ZndnbnRONmQ2ZFpldzVRbmlib0FwUmQydmNPQ3Y1cm82ZGREcm9YeHBFNldxaExjVER1SkFjaUdKQ0hlMEE3S2p4d3JISWFldlE0L1VIamRDZjZlRDMzMHR3K2Q5RmU0emhFZnduZHhvQVNOQTVPeTFWY3hmMDREVDZ3RU9hNnBNNllyRVE0bDVJeDRFTXdvY3Budmh4YTFRVmVDYXVSVVJ3bVhQOEhaM0JXR0xmbGdhaXZHNWhuUFpodkRKNkhvSjZlTVpMR0lQL0VkajdTd3pDZ3pZbUpveStFais1SHNocWIvQ1IxOWgxNTNrSTd2ZkIrOE03ejFIWkdBMUM1VmxGQm5ZV2dpYVNNS0c3Mi90ZDVhVXI1ZkJvYlRLTy80MUQrWVhoUVp0ZHFWTWtkTkZQMXQzTUhHb0w2ZlBpVzE0U1RickdPUTVTeDJoZ1kwREpNNWxWNHJNSzkzT3VsU2t5RWtqcnA5UjVkcHkzMytXRDVNcm9lZE9YbGJ5ZVVqNDVCYWtnNlZOOWdVTmlaTGtsMlFhazV4QnhVaWJUYThrNUJlcHhFK2UwZDdxUmFUUG9odFBPd3A0N0dRMUt0UkFQdHdUUWJtWmMrUlgzVHdlUUhRU3V2ZHV0Vy9BNDhINmdYNU1GZDBVM25zOERBVzBHN0dQV0ZGSGYwY1EwKzZpWGN0dys4RGRhaXBGWElvMmxlK2dyNWp6a1ozWTM3QjlaeCtHYVY5KzhBS3FCTDFjZlM0K3E1VHc5NmxGMUZQdm9Qd080RjlEaTAvRVJzeFUvMXZvTU9VeFJSUkJGRkZGRkVFVVVVVVVRUlJSUlJ0Qm4rQ1F6b0hvbDBVR215QUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2FwcGxlLXRvdWNoLWljb24tMTE0eDExNC1hMzBhNDkyMmU4ZDRhZmJhYjI2Nzc1NmM5NDIxYTA5ZS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYXBwbGUtdG91Y2gtaWNvbi0xMjB4MTIwLTIyNGU5Yjg2NzRmMmQ0YWMxMmZlY2NhN2E4NTg1MDMwLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9hcHBsZS10b3VjaC1pY29uLTE0NHgxNDQtMWIxOGQzOWIzMzQ5Yjc0ODgxYWNkNTc5ZDM4MTEzZDUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2FwcGxlLXRvdWNoLWljb24tMTUyeDE1Mi05ZTkyMTIxZjVkMjE3YWNmMTJmZjUxYWJhNTAxNzVlNC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEa0FBQUE1Q0FZQUFBQ01HSU9GQUFBQUNYQklXWE1BQUE3RUFBQU94QUdWS3c0YkFBQVJQMGxFUVZSb2dhMmFmWEFkMVhuR2Y4L2VLMFVJb1NoQ1drbFhqc2R4SE1kMUdIQVk0bEpEd0FtdTh3VXBTZmt3b0N0TW1pL2FlQm95UTFPU1lSaUdTVWlhTW9SbVdnb0pFMW5YUUVqNWFrTXBCVW9KeVlEQkJJaVR1c1Nocm1Pa2kzU3RHSTJpS0JweHRVLy8ySHZsMVdxdklETTlNMmQyOSt3NTczbWY5N3pubk9lOHV4Q25vSmFUS2NpNEJxbjM2ZWZYUzJtWnIxZHZ1ZkpGOTRPRmNFdXhFSDQ5UTcrZ2ZoUFZjbGFLRWdMcmRaWXpTREtuNjBhSjYzSkFsOU5seWYxQUlmeW94VjJJamtTZmRVeFJ3RkxGc3dBazY2U05rbndQU3cyV0JoUTBLaDhzaEszRlFuY0hTNDIwM0FpZUdzQk9vVTZaQ1phbUlDa2diZVZHMWt5bUpLQXNjTC9YdldHTDBQWTNLbmVnUDF4bGNaZWgzVGFHVjdQazFzR2tSMitSaXc0VXdsWEZRcmc2OVM3TExaZHpXeEx2bHFTQnQ0WUI0azhOSjJXOERvcjkzU2NtQ3dZTFlhdk1iYUNWa3BBRTBwRU1QUnJPblVYS1Nyd2Z1SHd3N01yU2IxSGJZaUhzS0JiQzA1ZXJrOVd2NW1uQmJFU3MvVVJmWHhBREM5Y05yT2dOQmxhRWdIYlU2MTdTMXhNWXJoWnNsZ0Y3eElETVdCYUdwRnRtemF0NjJXV0NUMGE1M0lxTTkrbjhPY0dGR1RJV3lTOFdlbFlNRkhvNkZzb2poMEFGZUhKZWJpbjI5N1FBTjh0ZUk3TVNlUCtmeGVBSjVFMFNuMGZDY01nUVljOGFIOHpTcVpFN0xlVEIzcDRXbWRXSWRvbHJpMzA5ZVphNkpVQXdVQWczQUZjQUp3d1d3bnlHVlJOZ3ZVWDRyb0ZDdU9IaXZwNDhBZTNBTk9iRUNBZlluOEIwRUJuTVpsbmhhNHJhaXl1T3p5T3V4aHkwL1UzSkt5V3RGRHFpU0MrbCtsdllRckltOWtLZUQ2SVdROTd3TDhBRnlCc3o2Z0pFZ204TGRWcGFiNmtPTW5zUkUvdEJXd1JQNStSL0FtMUVkQ0s2d0o5SDNBZzhrNnY2QVBBeDQ3enRMcHpyQlU1eFBPb3ZnMktUNGVlR3g4Ym5GaHR5K1pGY3NJTEZOR0lhRTRJbmtMNlJOWnJGUW5pQzRKUllmN3Brcjh3QW1HeXpGL2tseEl1Z1djR05tRlpNRytKeTRISGc2V3FlZG1DeklDL1JpZGtvMHlsNERuaGZEU0dDdlNrc21YTXlPVG9MNVhlTUhxNENMd0tuQWdleFQwWCsrSkkyNGd5ajJMRDJmbUJ0UXRZU0k1WkdLMU9nblZoNWNCdG9XS2dkMFl2WkI1eU1HRkdnRHlPcVJpT0dHZUM5Qm93T0E2ZGdhamoxVkFyY0VyVHBzc1Y3bEhsS3NWdUV3Q3l3NDVKQzJKcW9BL0JleFFCbkRVK0ExaVZrQll2azFkck1FMzBOL0JuRWlQRXE0N3VCeDJOWDVsS0xKNEFMTVMrQnk1cW5qRGhWVUVXZUFZWGdXZkRlQUQrUmtCMEEwV0JmMkRIWTE5T2FkTHVrRWttd0FlSVpBMWk5NEFwd01CQWZCM1lCVWJHM3V4bXpwalk5WGtLcTJuNW5TdTRTNDk0eGVqZ0NmbHpMUWJFUWJzQ3NMcFVyZHdQQlFLR25GL2tNNERGZ3JRS3dXUXU4Z0hrNytFSERDWkp1MmprNlBsV1hmVUY0UEcvSzUwNDJmQjE3eHlLT2x4cmQ1R2crQXo2Z21Cc2VBaVpCVnc3MDk3VEhMZFFPOU5aWXg2UFlLd1ZydG5mVXFlUmljQTFTQkxRQXpmVm55UjJZOWxxZkhWSEFla1NyVVFuUkRKd3VlSTZJb2FTY04rVnpIMFpjQlJTSVBKSmVBYk1ZVUpScm1wdWFmNjM1WWVQUElsV3hKN0Y3SlowSGZFY21zTWhMd3ZaL0ExdUJmTlNTYnlXZVIzVVFXV1Ivb1g5QlI2MStYTWVVYXdCZkJtWXg2d1FUeHUvRStvVHdZOGlmR2k1WG9tM2g4VUZUTHVoQ3VnRHBMUEFtMElIU2VHVW1hOVNTQ2tVQVF3Y25BZTRpM25UWEE3OEJEZ0pYWExLaXR3V29DdXJMZHhub05Sd0pxc3l5MkV1U281Wm1Xb0ZodldOUUFPU2lZRXJTemNESFFMdUE5eGgrakJnRVA0aTVhTDdxcUZnSXR6VGxjN2RKK3FYZ1N1eXdObC92cTNlUVJiZVdVcjBnZWhKekVCZ0dqZ0U2TU91Q0tEclg4VnpFWmpZZUNYVUN6dzVOVEZSWjZxS1pCcjI0MEEzaWJjQkl2V3hvYkN4U2xiK1JkQTI0QlZnRmJNYmNEL3l6eFErQ1hQQUw0RjhGMjRGMncyN0VLYkwzQ200bGRkVEtVcUFPTkNxOVBGRkZQSWgwTGpBdXVGRTRBQzdFcnJtOUs0Z1FqT0RmTTBZdEs5V29tZ0pNSGpPZGZMZHpmRHdhSGgxL05MS3VRN1RFUm1RajZEYkJKa2x0RXJPSUttSU1zVlZvR21uSGNMa3l0ZEJCc3JNTTBBbmcya204amR4Z2VKZGhuOFFaa2pvQkJMdUJkd2s5QUhxSXhlZlBkSCtMazJrQnBuTU9abFA5VXl5RXZZSDhYY3pqTlJsanlNOGE3YmY5UGNNdW0wc04rNEZady9uRG8rUDFMV1hKOXRGbzN3U2dORHIrSFBaVkVpMmdiY0FEdGpvZE01M0E4RWp0SkhFRnVMbFk2TzdLa0p2RnNoQnNCbjQ2TkRhMlVHZWdyN3VqV0FnL0Rkd0Rlam9YQmRjSzdnYk9BRmFBSHdDT1lOcUFtMlZXQ2M0cGpZNC9sdWduU0s2dVNhQlpMaHpYa2I1ai9BN3dKNEZYaFE4YVBtQUlRUHVCVWhSNVdtS25yT3VKT2VaeUtScnNDL09HendCWFhOemJtUStVSzBpNkRCZ0UvVnh3YVJUb3dGQjVMQ29Xd20rQlRxa1o1UXRnTEdZeEQyT3UwcnhlVEJreHFvTmNBSFZKWHhnRzRsemdENEJwNHBWMFNuRG90VWdQbDBiSDU0cjlQVmRMWG12VER6eU1PQTk0cURZM0R3WGlFVU9yQTBiUzhzbFlXUzFPQndyQXBseVEveTdRUzh4MkxnYzlQanc2TmxkdlZ5cFhEaFVMUGVmWVBnL1JXNVB6cE13enc2OVUwZ1E5UGc4VEg1RzZCR2NUbndNM0l6VmpRenpKbndSVzEvSUI0QmJnanBxUW5jRHR3QTFBRVRnVEdFQ3F5TDcvTlh6dG5lWERXUVI5QWV5Mm5wNmdLZWRIZ05NUlQySytiZWxlcE5sZEkyTkwyVmRqMHBLMWlzY0g4bUtoZXhEMHhScWdWWUt1K0RCcXNBNkJIMFhNWWFZbFB1bVlnVXdBM3dkK2hKbXFzWXNweExyYU5yTlNjT1p3dVRMR1V2ZGZsSXFGY0l2RWZaanI1ODNmM241ME5QN2ZVbTdEY1czdlFPeERlZ1dSQS9VQlRSS0Ezb3g0QzJZRzhXdWJXekMzUy93UE1hZDlPN0ZMbjFZRDgxdEJyK0JMdytYS0hoYVBnR3RYMWJLTGhiQUYrQzdTbDBybHlxMC9tLzV0dGFaWHZaNFR6K243Wkoycys0WG4vSENOREFQUndJcmVmT0RvZzRZdkcwNUdiaGFzY2p4eWVjSFdlQjZvQXp5RkdVRzBBV0NlbFhnZTgrQnd1WEtFZUJya0ViMVJwSEl1aWxwTDQ0ZG5FcUFEcExObERqcmkzZ2FEa0hVZVRWUEQxOTJpMUVoNHNUL2NBR3pGdkxWR2tVS2tEdXc0VENFOWpQMFVzQTd4SVpuU2NMbnlqd0FEaGU2Q29CMXJBMklWOEN5d0NmaG1xYlpCRi92REVQTnZvSXRLNWZIOURmUjRvMm5aS1pGdjlLSTBXbmtCZUtIV09MaTQwQjBFVXJQaVRYdk84OUdNQWwwSCtsL3NUc05aQTMzaHZidGVxVXdJOVNJMkFSZGh2b2c0bjNqSkg0SGFpY0g4cGVEaDRmSjRNaTZ6M0tLU3RiMDFpanhrZ214RTFCY0UzVkUrRFBHQmVSYUlpbkhRNm5Ud0hxQUZmTE9rYXdkVzlPeDRyYXE5VGJtb0FOcEh6aThRc1Fuem9jaWVyTFZkRDN3YWRDRVFYUkoydHdVQmM2V3h3K2t0Z05Sekdtalc4NUtrWmF5UjVlY0xRb3VGOEM1RU0yWlNjSWJtWG50bjFOeDBPL0N0VXJueTQ0SCtjTDNNeVk1ZHRXTlh1YktiMmp3VjNDTzBGM0hOdkdrSjR0UEN0eEhUUkg2QzZ2eHM2ZkNSQmNXM2RYZm1tNXJ5N2NUYjJDYWcxZkFnOE5LdWNtV0dCaU9ZQk5USWFvM0tvb0crNDF1QjkyTitpTmdHUExkejR0VXE2Q2JncW9FVnZTMjVxbDRFS2dHY0Y4RFBFMWI5S09nVXc5ZUhSOGVyZ1h3cTZCRHdrVGlJcFIrUXo2K3I5UmtORnNLdXBxYjhuY0R6Z2oxSU53bXVsL1FUd1krS2haN3JCZ3Bob1Y0L2tldDZSNDBzMEdnU3h3eEN1UTNFQjl3clpWV05yb2tSYURjd0owZm43aHdmajJJU3piR1JnaG1BWWlGY0I5d0UzSWcwUGREVEZXQ213QjNBak1SWkVqdVE5Z0VNRnNKT29DUTRUMmhsdkV6NmlPRUE5bU9JZmVDdGdrZUtoZkR6eFVKUFc1YlN5UmhQRmtIUFdnZ0NZQjBRQ0JYQVg4dEZ3WXRBVUJvZG85Z2YzaWR6MldCZmVIY0U3WUxmN1lyTHUyUnV0elRseVBjS2IxVXUrQUJ3QW5BRDB2NElqdXlxeFdxS2hiRE5jRFVpd3R5S1BBYThndWtFM2dXc3dXeVFGQUpndm1HNHNGZ0lyeXlWSzA4bThUVGFRaHFsK256OGM4RzNnSWNVNldNN2p3WjFLZmFIdlpqL1FubzM5bVlnaXF6N0EvbE93ZGtXKzJvaHgzMUNlNmhXSDY1R3FnYk5RU2pvSmM0cmdUK3VYVWVBTnFDTE9BWlVJWjducnlMZWg5bFNDN3ZVVlpnRjdnZnVBWGFYeXBXUlhFTDVKS05Jc28xa01oQ2NkTnl4cHlBVkNIVFJjSGw4TXRuK3BEZTN6b0xPVkJ3bE9BM3pBNG0vQWdhQUt2QThzSWVZWU9RSWd2T0RuUDVDc0xFR3NLWFcxMlpnTjlKMlVBNTRDckVSV0FkYUJYUUM3d1phVkl2M3hoKzJ5RXM2QWJoQWNNR0p4eDE3VEIxa0VwQXpRQ2FwRWh1T083WmQ4UDNTYUdWL29rMEFlTy9VVEhUU2NjZDJBK2NDYjVOb1FseEp2YkhJSVg0SHZHRHBpS1NuTlRmLzk2WHhpUWRPZW5QYjAzR29rYXVBWHdpT1Ivd0s2U1RRVngwRW41VzlCMmdIVG91akFvb1hUL0ZMek11Q2RxUW1wR29jbmVkdUpVQzhZZnEwZlZWSEFEQjBjREpyZ1FxS2hmQmN4SjNBakV5clVWbjRGc05qaUpkeXY1MmJISm84MnJaWTZHNEduUXg4QlhHR3pOOFozZzhjTWR3bmNRUFdBWXYzN0JvZG43NjA4eTFCZEV6VGFzekhnWXVBOVloSVpzYm9BSEd3Nno4TWorNGFIWit0NzVOSklPbjBSaGFraGJTdHA0ZW1uTCtDOU5jMWQzaEJjTTd3NlBoSXlualJ4WDFoYTA1c0J5NURuQkJMMElQWWUwQWo0UE9CUUdMQ2FEdHdlV2wwL05hVTBZTmlmN2c2RWxOTjAzTVRRNU9UUzNSdnlGMGJBRW5IWnRPMGk0RkN1Rkx3RTZCTDhMaWhXQ3BYeXFTMnBZRytzRTBCWDhDY1h3dFF0UUNQWVo0WGZNQ0svZ1NDbndKclpDNUYzR2F6RjNObTZaVktNZzdVU1BlRmF5TmFsd1o2OU9TUW5aTEw5UmRCWGNqN2JDNHF4V2ZLUlRLMzlmVGtKZDhqc3hXQjBSejJWd1F6aHV1TVBoSTBWYXQrcmJuWkp1ODQvUGtFMGxiaDA0RkhHeGc3clJNa3lFQ2pBSEQ2bWxWdklTSlhMSVFiZ1VIQmxGQWQ0Q0xqMUNJQm53TzJHaVpzaHNEbkFHK3hPQTEwTDlLVE94Zm11MllScmZIQjNIT1dQalhRMzV2MkxsTDlKSzlCbzg4RVdXVlpGZ3VJQTFFbnpEbllEOUZOU0swMmx3ZFZmcDRscnlubjFhQXZJKzhGSHNROGpia1I4UnhtbytDczRkR3hLbENMd1BoWnpFWFlqeU1OQVJlTGFDM3g1OFNrbmcyRGNBR0xRWkNxa0dXWjVEVWFLSVJyTFhZMkJkRjFramJLM0svcS9ORE84ZkcwaGV2eXZnenVWQnhkK3cxd2U4eldPRkhvYWt2N0UyMG1nV25CV3FUMXdQUENNOFRiVTFwdTVpaFNHOG1zWTBxam84dWl1VHZRMzUwWFhBK2NMSE95NHhQSk5jT1ZpYXlvR1plczZHNGo0b09DZndCK0k3aldVdDY0VmVhMklOTHcwTmpZVWVPS1E1aHprY0J1QTNZWWhnVi8xRURuckpFTUdoNmFzMEFseW1LQmtVSHFBdlk2THR0dFluS2RxaHMvUk1GcVlNYjRDUEFwNEh2WUpjUVRrVFEzUERhV051cUIrR0lFL1JZck1Lc043ZHM3T2hpYW5GeHVlaTJrTEpCWndNZ3NDd0tBMW5qRDUwWGgrNGJMNDJrNUFGemMzeDFnbjQxNENmTXo0QTl6TTNOak5WS1FkTEZrSDN2aWl6QmVBNHdCSDBWTXpSL1R0SkxKbzEvQVdEb1FDOWY2S1NScGdUVFRJYU5PM0xVSmdBN0hCSHJDODM0dVZXOFIwVEMrSXorZisycnRVd0JaTWxQUHp4THozVHl3QmRRTTVMRTdRSzJwUHJLTUZFQWNRYzlhVmRNV3lWcUU2a2JxRW1vRHp3MlBIejZTTXM1Q1I3VlA1d2NUNVZreTAwYXVJQTRDYXhSL0Rvemp3UUNCNTFoc3pDeXdFWFYvU3ltVnRWK205NlU0eHg5YTJvMW5hNk9aMVRZdGU4bkp2Vkc5WE5QY3RNemVHSmlydGhmYzAyYXVnWngweW93TVpHMjBTVUZIclMrdkZKb20vb2VtbWFXcDBiS2V2TS95a0FBSWhnNU9Sb2IvaklQNXloTi9LcXlDSXBHYnptcERoc3MyY3MxMHlxWjEwbXJIZndxMTYraG44Q3o2bDdaNDhqNU5IUmZWRTk0bE1ZbU5ZQTN3QW5oZnFUeDJwRkdiZE45WjZCdHh3VFJnTUd1QVE3WHZINzlxMFBiMUNNV3lJenBjUGp4bGRFZjhxeWRyYkhxSmY0bEo2cHExT2kvSVRGczhhL2l6eW1PdzRxMklXZUxRUkNOUWFmbkxjZVFHeG5YSjlpd0lTU3VBSDdJWTRMTGVrRnlGMGgyOWtRV2lDNnNMNkRTTC92Um91SmlrbEVnRHpicVBwUGxuSlhZRDJKNG1FZG5QTU13U1E3MlJoU0RJeU1RZGNqWDRYc1YvVEQyV2ZyL01mU1A1V2YweFBQTHJ5T2lXMnZ0RHJrWUhmMDlaMllVWjEwYUtObkx4clBxTlpHU2xSYklHKzd2Ymk0WHdWNE9Gbm0xdlFKOUZ1aWNKZWowMWNvUGxsRjIwK2Faa0pkOW5MUkJKV2VuMkMrK3JNSjJESFppSFVtMGF1ZjlDbi84SFN5T2Z6TXNnendFQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUR3QUFBQThDQVlBQUFBNi9ObHlBQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBUDVFbEVRVlJvZ2QyYmYyeWQ1WFhIUDkvSDErNVZhbGxXWnIrNWVlMW1Ka3V6aUxLTXNwU2xHVW9oZFAxQitkMEIrWEZ2RXRaZjYwckhMekdFVUlRUVFpaERYVnAxbEVJYlNId05oZEtXbGpJMXBTd3drdEVvWkNuTE1wUm1hZVNsdnRlK04xWmtSVmxxSFB2OTdvLzNPaVRCVHV3NFNGT1BkUDNlKzc3bk9jLzV2czk1em5PZWN4NExDRUR5KzNKZEdVY05obHVReXNWUzVabFRuNC8rNFBmaGVtMXpjOGF3VnJBV2UzQXN2Z3ovRDJsbEhEVUFkSmFyUXhOdFU0aWpqT0EycE51d0VSd2FpeStjS3lYUEpSbXVCNjZlVkNPUkJ4NU12d3ViZ2JIWUpndzRIN2ZPWHRiVzhwNi9vUHdIb2dEY0JQenBXTThMN1MxTmhiYldhU2ZkaTJmTXg2d3pOTmpHTmc0Nit4RmUzZEVjaEw2V3NYSVRWbnhtTkhlaXZDZVNFdG9SRnhuTkg3MVhhSXVhampNNDNBaHFQOTVQSExXQTEwdHFsaGlTU0pCNFh4S3FZOG1mRU9DUlkvWG5TN29hdEhRaS9JVTRXaGpFL1JQaGZSZVpPWmk5a3N1Zm16bXpvWGJ2Z1VMYmpOazFqcHVBNHlNc1dDTnBBWUROaXpYK252Vzl2V1BPL3drQmxyVVlIRUJyQ20wem90UHhyb2lqUnVCaFlONnFtdk01SFJYaTZObDhIQzFZT21QR3FDN1RRZDJHeHJlREd3cHhkQkhpYXV3NStaa3RMY0JpV2RNQjhtM1JSY0JTN1AzZ0EwalhwcGk4ZmJ6K0pnVFkwR3c0Z253VWU4M3E1dVp4MndXNFE5SWxGdTJKT1BNVUVOTWtmbFpmNThmeWNiUUFDTWpUWmMxWGtuUUluc1QwYVlRM3BYQUZwc0U0U3B1eW9xYmZEMnpld2c0MkFHOU1DVEFpQThwZ05nT3JSOTdmY1BGWWJQbGNTek93SnUxVDAyWEZFNUQraXFBRnRFam81OEFhRE1aWnhFK2R2clROaVpKKzRMTklDRnJ5dVpZc1pyRlNEUCtLdURSOUptU21Oc0tZWGNKWm9GR2lFZlBnV0tPc3VyQllJaU9NSUFIUEgwUGFxY0pmTVBTRDl3dXZGY29BQzVIYWdmMmdQVUJKUWUzQUlzR3dvVWtoekFMbVdUcU1tQ1hJQ21NWXNIUmdhb0RoelhUVVdHVFRMV25KeUxTR0pXUHdmY3lBMHo4dkFPZWRFYTdxdWtIM0F4M0E3Y2I3Z1ozZ01qQlhPRWE4anJSRW9zWDI5NEVlNEh5Z1VmWis0TExSZm9WM3kwd05jTEZjN1FiNmtDTFFFUFptWU0yS09EcnVMVmZuY2dHelFBaFFZdGh0T09NSWQvWDBEUmRMbFg5eUhSOUp4QXBRVWJBVGVBeHgzVkI5K0ZDeFZIMFRXR0dySHhFRVBZaVBJbUY0QlZpSTJTOHhDS3p0N0syYzVLR1h0N1ZtQ25GMFpTR09jcE1JTGZVcWVDa3d6YU9CdUhRRjhBT0FZU1ZOZ2hoQWVJL0ZDRmJIUktWMy9iWTZDR3dHS01UUkZRREZVblZIcW5BMEhiUVl2QlV6RjVSZ1h3QWVCbm93TzRGWldPV1FhTk5KWU9QVzVqb3JEM3dGYy9ra0lpYy9CUUpvck4zWUJkeVRiMDlmbXFDWjlJUGhaZUNQQlhOV1Q1OSt4cVZwREdvQ2hrZC9aQklkVlJvZjd3YWFqVnNRYzBDYmtKb1Jpd1JOMkovYjBOZDN2RjFoWnBTdGt4NUVYQ2NZRE1QdW53emc3ZUFETldCdkFVSDIrYkt2QkpCSUJOUUM5LzlLUjhJTlNVUGRhZGZ0Y1NnbiszaG8yTmxiR1RUc0FKb1Fid2xtWVJyQmUyU3ZreGtDWDlmWlc5MExrTSsxTmhmaUtJOTRIbWdIRmh2dDIzanc0TkNFQWRmVkgrc0hOaHVPQUJlQ2VvMk9BTGZtMjJaa01jT3VqWXFoRytnd0hBNGo5RTBhcnZpVHhPbys2WlowSDNBSjFyTk9uZUVPNEhyRFBzdzFJNG5MK1RoYVVJaWpSeFgwSzZCWWE3cElrQUZ2aEVsc0hqWjBEeVRZejRJT3BKMzVpSERBTEpUOWNaTWF2TkdneGVGMGJXWGJob01IaDA4ditXUmEzdFlhZ0phdTNtci9pZmM3UzVXWENlR2p3aDhrSGJYekVVZUJoeHg0TUlSUUNlSU53ZDlJZElDcVFKQnB3ZnlvV0s2K09DbkFBQTUxbThFNTBPemFzdkdNSUF0Y0JaQXVYZTZ2bVQyQ24wOUdmcXFRcHVPeHJhS3pwNjkvS0FrUGdQWWpJa3hWYUwzTXB3UVprMXFGb1I4NUlDMUIyb1YwOXp2eUowRmRQWDFEU044Q1h3bDYwdkEveG9NUzF3cVBPcThkd0R6UWRxVHZUaGF3b0YzdzY3R2VGV1pHMCtycmtxOEp6d1YrREhSWWJMTG9NZm94OW11R096RzNrd1krYnhrKzAxbXE3RHNyd0NsNXJXQ1RvQkZVRUhRQmtkSDgxS1Q1QmVhVGlLOTJsaXFIQzNGcis1a2tuaXllajljYzFISEs1MXF5aFRqNks4UlBzS1poM1N4N3ZVUTc5aWVBWGVCZmtmcU9heVEyeXV3R1BsTXNWWHBPbEtYSkE0WkMyNHdJZXdzb0J0OGxXR3ZvQkphQ3JnRVdKZmEzZ3JoRFVPMHNWeCtma053NHlnQmJnT3VTWktRZjFCaENXQTU4QVJRRTl5UkJMM1gxOUEydmFHdk5CbXN0MGkweWdUU3NIRUljeHJ3czY4dWR2WlYzWlQzZUZYZ3N6N1ZtUTlBRmdrV1lJY1FSOEdIUVlXQnZzVnd0RjB1VjZzcTJhSm54bzVnRTJJbTRGbmlOeEJuRHBqcnhQV0NKeFY5TzRsMnVKTTFGTFFxaHJrRHFtSHFBOVpqT3puTGw4Q2pqVTZXRGc4Q3RoWGpHRnN1WDE3QU1DSjROUjRkMmJoZ1lTTWJxNFBnSTUrTm9udEpjMGczQVBFbFpBTnM3UUkyUzV6bDFKazhqSHEyckg5by9NdFJ3bzJDRllTL284NEliak9jQkJVa1I5b0ZoK2JLblMyZjIxUGs0YWhiOEc1QkRITUdzUi96QUN2dTZldm9tbk13N0UyVUtjZXQ4MEwya2NXK0RZRGFvdGdNUW9BenlYcHRYSlQ2T3VRUHI3MGFHR2w0RUhqSDZJVGdCN3pRc1Ezd0NjOEQyZ0dEdFJNQ1M5clJjMGx6Yi8rQ0VCN3A2cTRObmJuVVdnSVVLaGdha2J1d0Y3d3o2Nk5VRG1DcndXOE90d0FXMTdNZDV5TGVEK3pIL1FwcjNuWVY1blhTeDMwd0lMMDlFaVVMYzJnVGNCWHkxN3VqUTQrT1o0N2tnQVN5UFcwTlF5QWhuTWFzUmEyUzFqR0kyREdQdkJ2WURROEJzcEdscGFvWGRpTi9KM0dyb2xxaGl2aW5ZdkxHV1Y4NjNSZG11VW5Wd2VXdHJlUHJnd1pQQUxNM2xRbjFkOHZkWXJZaTdpcVhLZXdaMkZQQzdscVpDVzJzT2REVndFMllXSW1BU3FXYnU2VXRJZ0QzWTI0RSt4R0taZXpyTDFhMDFJQUJrR0ptdW9OdVBKZUdCK3BEY1VpeFgvL0drdnVKb0x2QTlvVTkzbGl0alpoclBKWjEyV1NxMFJWbk1ORVJXWnBxbDZlQUkwd0xzdHJSWDlsK0R5dUIxd0NhYkwzVDFWcE5DSEYxSXVxbGZCZnlNTkNMN0M2RGJDZmQxOVZVSGwrWnlvVDRrUmFFM09zdVZyNy9IV0lFemxGcUtwZW9nTUs3ektNUlJCM0F6OG4yWVFVUlpjQ1B3ak5NTmVRekVvRzNnWllKK3cyOHloR0dBK3BBc0VWd0N2bnU4UHM0MWpXblNFNkhhM0Z1SENjQWh3ZlU0dWN3S3oxbjZiRmVwY3FqUTFyb0F0RkFqZWp3SnZsUm1SN0czZWdnZ0gwZE5ncDlMZXMzU3ZVcVNqT0dMV0U4VGZMUllxaDQ5c3c3Tm1XZjZCaWExT2Nud1RuVnRVdFJRbDh3eHJFUThpUGtxY0NEOGJyaC81UDBOUDVWOU8zQXZoQjNZaXkzUEVyUVVUOWdCQ1Q0UHlpcGhUV2R2MzFDaExWcU45UkhrTnF5ZkZPS29pUkZ2SzFZT0h0OFg1MmUyeHBJdUJqNEdMQWJtRnVKb08vQkRvMDAyUFUrZGt0NDVsYzY2Vm1SekFTYUwrUU9sMjdVbk53d01KRmlkb0UvbDIyYk1LWllxaVZFWDRuT0kxOTVSUEpvRDNBT3MzZGhiR1oweXRZaU9pdVFiQkYraUxoelBtYTJNby9sQjJpSjRYbkNiNENKQm8yQ0o0QkhoZncveStrSWNYYnpxTkhuenN6YnBRbHYwc05BZHRvZUZkbG44K2VpU1VvaWpCNENvd1hWZkdnekhDQTZQRnN2Vkw5Y1VuMjc0YWMxZmZ0SWpJMGNJaWlTdFE3Ump0aVArSTVqdmp5NXJoVGlhSmZnRmFJN2xZY3d3b296WkJSd20zVjE5a0RSU1BBeThrRmhyUmhJR25xbFVUdEw3ckUwYU13ZWNDQjBCMzE0c1ZkK1pTK0k1bVg4K3BwRUl3aERRQUNUNVhFc1c4YVNzaGNiM0FLdFZGLzRNbUEyc2Q4TFRYYjBuMTRRTGNkUU8zRyt4RVhzQWM4UndOTjB3OE9IYUJ1WXEwTUxhYnExSjhMZEJYQkhxZkc4KzEvS2pycjcrNDQ1M0tnWHhnQlNBdThKSTJIcmlnN3I2b1Ywang5NDNpTDBvcERuaUkwdHp1WXhDc2daekpYSS81ZytSZm9uOWlOQyt6bkxsMExMVzFtd2hqaTRGNWdFZkFHWWhMcXhOblV0cStqWW9MYVlOQW1Yd204QUI0UVZBNW9RNHNjUHdwRUs0dlJCSG14SFBGa3ZWbldkdjBuSDBQTkt1WXFseTM1alAyNktIWk9VTXZ4YnVTYUFsU0E4RHdlWlFyZURWVDVwVVQyb2dHNEJma21aRUR4bGl3YzNBRmtuM085MEdmZ1Z4RldhaFVJdmwzWmhoU1JjQ1lJWXREd28xbnF5Umo5cDBuclZKQzRva3ZEUnVlL01LK0JGZ0Z2Q0twSHR0QjBsSVRteU9rTTdMTjJ2aFQ3bnVmOTgrdEdGZ0lGblpQcVBaaWU4UzVJRnRncHVNSHdkdUFYMzQySWl1cXcvSkxPTkxNVGRMWEF6Z3RKSTJuS2FJUEdnNFgxS3dQWWo0TWJEK3JCSUFBS3M2bXNQRzd2R0QvRUljWFNSNHcrSW9Kb00waFAxdHhQTkt2Q2RCUjdwNjM1bjNTM1BOb1Q3VU40R3VCZFlnT2pCclNPdkJCMGdMWmwvQmlvQlBGc3VWcmJWK0draDNlZ1hnQ2lCQ0RHSUdrTjdDM21McEpjUmJYVDJWNUt4TitreFVpS012U25vVXdIQlljRU5ucVRMbTdtbkZ6S2c5aUR1QmF4SFRnU3pvQ2V3U3FCdDhlUTNVczVJZU1yeFlMRld1T1ZWTy9nTlJWaVBrRXJuNlZPbmdtSUhMV1kvdzZXaFpia1kyRS96ZlF1M2dIc09xWXJtNmVTemVmRHlqWGZJM01ITVJXVXdXOFFMbU40SlBKeVNma2NLV3RHN0ZNc1IzYkRYYVBxK3J0enB1MFd3OGVrOUdOeE44bTZBZGNkUnd3M2hnQzNFMFArQmZ5Vnd2dUFBVEEydGxTcUFITFQyUWFSZ2VWdXFaZytGanRyNHJIR29XTVdrSzUvcFRpS1BaZ2x2VGdoZDNGc3ZWN1dQeHJVd3JqOTlBYWtFY01ud2JjUVBRWm5FWmFaSHU5UTNkQTJBbG9QUTBuYndPMFdQcDZuemJqSmJKNm5mMmdjY3B0SEptRkEwbDZrZCtHSk16UEJFU25oaFB2dUdMd01YRzJ6RFBrWlpNMWlGdHhaNHYrRkpucVZJcjNSaWdHN0hJSTg0UzlFM1NFM2MzQXQrYWpKN254S1JYeEZHTXRMRyt6bm1aNjBIZGNuTDN4cjZ4QS9rVnVkWVd4RDNBb0ZLd2paS2VFblJqWHdKNnFMTmMyVC9LcnpUTDhpWXdUMEdMZ0xMd2J2Q3F5ZW82WlJQT3Q3VmtnL2dhc0VUb1VhTmg0TzdPM29PSHhtc1RncGJLYXBaNUVQZ2ppZnZBamNDRmdxMHkzejZSMytJQTZBcWhCdUNEaUM4YkhnTmRzS3FscFdreStrN2RwQk5OUTF4czNBMDBnOTVLeEF1bmxTcytaUE9NeE14MEQ4eHV4SE9JRjRxbDZxNHhXdXdEc2hnRWMwZ2QyRlhnclc0SUZ3R3ZUbFRkcVI4dXJVMEtXZjNnUThEM2lxWEt1Rm1TZkJ3MVk1YlVVcitIZ2NzTmIzYVZxb2ZIYXdQOHAycWxPdEJzNDU3YW1helhiUzlna29Dbk5JOWxaWUZwNENhTFBTVEpxMmVRbVFQV0hhc1BUenpUM1hkaXRtTGNOa2JicERSUGJyc0RjMVFpQUplNFZweWZxTDVUTjJreERjamE1RERiNm9icFBwM01ybkoxRDdCbk1sMWs2dDgrTUhLc29Zd2RTNHJzOUdCYUxYWStlcnIrVHFVcGUybFpUWmdtb1JaZ2NNUEJnK2VzTERKS0c5S1lmZHNKUnlxR2ExZVk1SUJOMlVzYngra3hKZThoTmRkekhzd0FBZk5MSkdwSGxWNGIvUTQ2T2hrNVUxK0h4V3pCQU5Dbk5MM3lucERFUzloSGFqODd3RHZTN3ZudFpPUUVVcE9ZeXVjODQwR2tKdUEzNTBEZW1CL1ZEKzFHNlRrdVNiTnR1ckVUMjY5T1JzN1VSOWgwa0I0VjdHT2Mvek00RjdTeGV5QXhlaXc5U1dLQUs0Ryt1dDhON1R0OXk1UHBYSmgwQnlLSG1lZHpGSmVQUjZIdTJFdVlmVVlnc29hdGs2MDBub3RZT29zMWl6U3g5cDdOWVlDTkJ3NE5JNzRqSUQzVHlaYkp5cGg2cEdXdUFYOUswREE2eDk1TE12bysrRTVaemJWYTlLUm95b0NMNWVwZVlPOVU1VXlVUXYzYkI1S2hocGVBNFpCb3JMajc5NDhLYmRIaWxUTlAvNzhYNDlIL0FmU3hLQ3NZODdzQkFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVnQUFBQklDQVlBQUFCVjdiTkhBQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBWmdFbEVRVlI0bksyY2YzQmMxWlhuUDkrclZrY1J3dHVyV0sxMlN6aGFEK3Z5RUsvRE1peERIT0xLRU1ZaHZ3WkNZREJHYlNBL0pwc2hKSnVrR0laS1VSU1ZwYWdzazhsU002bkFVZ3l5SkFnQlFoanlpOGtTd2hBbjQzVUlSWGxjSHNmTGVsd2VTVzdKaWxmbE5Zb2lwUGZkUDE1MysvWFQ2N2FUeWFsNjFmZmRkKzY1NTUxNzdybm5uSHRmZHdBQmNPMVhxWEw2M2huNDZjdkVrSDdlcWswV3pYYjkvTGJ3MlZFdTltdzYrNnd2dm5WVnoydDcvOTlyRXduZUcvem5nS2gyVS85TlEvcFpHci9WTXhLL29RMU9GajR0Nm40citGY1dDdUdOWFowRjRDSFE1ZUFuVXZnTlBuTXBBa21FTEdnbHdLeHlXdUQxKzFiNGFkcFJxajVON3pmR1AvdU5uVjFJT3hIdng1NERGbGdwN0ZCdmxINlFkV1U5YTlVbXpXVDlTdGVsWHl6cldTYk9qbkp4eTQ1eU1YZW0rS20yT1VuM1NucS80d20xaURtWjRydkJhenR0U1VQV2FDUzFJajJOU05WSEtmeDJkRnYyUFZ4YXZjcndJSGJ2bWVBbnk5dEtwV0R4S2FRL0JaQUFXTEJaSUZ0WlFsSmlXWXl2ZU9sS3VlK0M3UU45eWVldE5BdFdhbEJJNGJVcnAya0FST29JbXhGRGhuV3Q4Q3VEcTNzckEzMnIwbTA3ZzdjQWQ5YzBCeHVRRmdqaFpMSjlzazJTNlZhTU5lcHVIQ29FME9jN3pIa3BRYVNGdTZKKys1citWZGVWK3ZPSmVtaXZQYTBHN1lPQ1BBcWI2cFdWZ1dLb0RCUnpEWHlIWWREYVpOdEt1VzhRL0pCTVhqTGdTQWlaK1RkRU9rRUw3VzRsbkN3SXk2L24xa3A2djlETjE1Wkt5V2VaQnE1ZVAxenV5M2ZJOTNZR2Iwemh0N0lWOWZ1bUFicWgxSitYdFFGNFRqRHdrVktwMW84M0FoOEZvdUhCWWhmd1BxSHVldHZLbW1JT3dwZEI2d3pZVkEzUEd6QlVIenA2ZENuVlo0T0hySkZzQStGeW03elI5azc1L0ZaSXladDRPdW95UVgxVXMvQlc5RjhwRnpkVnl2MlhiR3NJZ2JETThpcmo3c2g4elhMM1lnZGNYKzdQZ1c3SHVnSkFFVU9ZQ3pHRkJqR3hUWGlyNUVnUUljMWhMcWxwMHNzMGEwNVRPVDNGTXBGcXY1R3MzNUdNNUZVSzNGRlowNTgxRFpxRXBTajBDdTVCNnFxTmRGYWZXZjF2QUo3b0RORlYxNWVMaFcybEVuVFFEUlFFWlZtcm8rVW9CSHdwNlAzZ2wycHRMNU5Vc0dJQjdUaW5ONCs0emZDcXpmT0d4ekFiSkhWaElxR2Z0UmlvekdVK0NTc2NPdU1ldzVMaEdjemw0UGUyYVYrVGtPK1d0QW5BMHUrbDhGdjNMdzRpU3BLZUNQRGp6aEI5a2tnRklDRCtJN0FRQXR1US9oWTdJdUtKNGRMcUx1QTlBTmlEUVBCeXgwYWdibysrQlF6V1ZpOE1jN1lQdHVXZjVsR0xXS2s1cDZRcUFPVXdoNFFEZ1R1R0Ivb0x0UEJIaGt1clYwdjhTYU81V1gvam12NHVXdHU5WlAwUjhQNWF5K05DZDB2Nk8wRVpNMnU4QWZFdytEaXdlemxFaHhUQ0lPS2lHcXR2aXVsb3MyQ1ZJR0QyU0Z4Y2p5Z0V4enNXbHcrMTQrTk1WckNrSnYxTU1lM0xEWHRBRjhqKzhJMkZRbnFhUlFEcUNPODB3bzdOb1hIdnNxTGs2dEp5YW9iT3hUbmdhWnNsOEFuTGR3dFY0Nm5LcFVJWFlKNERYZ0pPNU9lWEZvQkxaZlVDR0FvMSt1OENZZWtJZ1UwMmVSeXJrTkdySTcvNFJaWVAxR1NEMG94bUxYZHhuZGtiYXhGRHdKSWdDRzVlZm1Obm1leXA4aTR3UW1DT0MvWUpsV2pXMUNiQjFPdDNIcDZMUUdPSWw0Q0N6QlhBSHN5amdpSEgyalVrdUJ6eHMrV3pPbk9JRDFsTTJld0IvbVc0dExvSE9COGJ6S3ZBQjFRUFlUR0NIN0RTRmphdG5sbWVMNm02eG4xSEZQWWFMeW9leFI2YkNDZ2dmU3l4MmlSZjlHS2RDcDczR1JZUy9rbWFmcHBCeGlhbkQ1am9nOENERmpPRzg0MW5MUTRnSnBCK1lyakJDbjhOREFLWFlFK0FaekZIMUJIT1JmU0NRUDRSc0NWbXhVdVlxdkRqTGQ0M1ZOWVVDNVZ5UDdrVWMwbmtGY0hnU0xXNldCa292Z1RlREZvUG5qS01BRmZsUXZRd2NMaU92S05VN01hc3EybGNaUFE5b0dMOHUyUlA2MHdZbnp4V0plNWpwRUc3WFB3cnhPZEhKNmRQUUJ4Q2RBYTlWOUJ0TVFFTUNaMEFuNHZwQVIrT2Y4SG9jZUV0d01qT3Faa2phVDUybEl0NXcyV0NXOEh2U1d0UXU4Q3hKa1I5SjNiUjZRRm1RZWVCVGtyNnhQQmdRNHVpS0RCa3lNZE1NUS9lZzF3V0drclJ6Tks4NUQzcDV4WWxvNGFMMGRFUjVSRHZRb0tJUTVnaUVHemVnaFNNdmczOGUrQlI4RHV4VHFEd3BRVDlBSEJkcWEvYjhGbmdKc09DN2FWMklVSVNFc2JhanlORmluRVd3RG53UG1BN2R1UGxneWtKUWkzc21URE1nUXJnOVRmMjl1WVNkRW1WMi9sSHNmRTNPZG1uWXF6bHNDUXpnVmxDL0I4Z1oxeEdyQU12QWQ5RFdpZngwZGo4dURJNldUMmU3SDk0VFYrK3N5UDhGOFR2SVYwbU9OU3gxTHlLblU1SWRkd2o0TjBBU09jQyswQ3oyRVhCeDRZSGF5R0lhaThUWHdjRjU5YmNqMEtVNytodDBlZHArYWdNOU9hQUhEUUV4RWkxR2hsK1ZMTjFTNGlxNEJ4TUwrWkY4QTJ5dDJOT0lGODdlblJtRDhTSnM4cWF2a0tsM0hlcHBJY01id2ZPbDEwdytxZVJZOGVpVnVyY0tyS21vM054Q2ZobXZBcDRGZEFORHNBRXNLM3VvSUVYNnZsTHg3WnBYYTE4UEN3emwrcXJIVFE5dDNORGhybElXa3pXQzcySXRCZTRIdXRoNEZ3Z01oeEFYR21vWWo3MDJpK1hYaHd1OWZVTXIrbGJmM1ozL3MrUmZpRHBmd0lYWXdmTXVVWW5zSjhuRVdva0dXbmxtMFFBSTRmbkl1QXBteE0yOXlNMkFzZUFRZGxETXRzcWNmd1ZyMSt4bFA0MzhPWWFuWmRIamgyckI0ZFpVN2xlbjFtV09CZVl6YjIydUpTc0g1MmFuaUxpM1Vndmc4OHhIQWZtRUg4TTJnZGNaMUhzN3VwOFdFSGZrZlRqbXZONWdhMEY0RVZnc3hEQy81MFFEa0wyRk11S2k1cGZ4a3dCTDRFMlk3NERuQkM4SEdlZ1hNSHF4WFYvMVJGUVJRelZwUFVQTkR1ZnJhWnlHdXIxNXdJL0g1bWJXeUhBMGFQVHN4M0x1azN3TmRCSnhGVXlYZGd2QTE5RWZGM1NEcUV0RXIyTkhMMllBaTRFVmlIMmc3NDZObGxkcWhOdjVkVW1wMWpUVkJ5Ym1sbEEvSzNFaGNBSGdBWGpoN0dYYW9aeEU2cjVZN0FJSE1RTWdWNlY5WHhLQ09ud0pzc3dKK3ZmZ25tcEZmNUl0YnEwSEUvcDFjQzgwWFBBWmtrWHhScHRESHNOVTRhcThiZkJCVW1iSk8wMzNEQTZOVjJ0MDJ6SEtJbHkyaVlGME5PRy9VaVhnaDRFL1R2REs0SnVvWGZYNTVaZ24wV2syRUg4d3VqUjZZa0UzWFJrbjRRVkE3TjlvQytIS1Vpbi9LMGsvcFdGUXFnTUZJZUNlRWk0aExrRGZEa3daL3lNMFJIUW8rQTlvQkhnSnN3K0lHKzh6MUFabTV4dVNuKzAwNW8wTkJueHNjbnBJOWkzeUQ0dWtRZGREWHdUczJTNHhGSlhMU0gxbk16bGlHZERwRWNyNVdLK1VtNUtoMmJabXJTUUlpQUsxa2JncENOT0pQR0hTNnZEY0xrNGVIWjMva2JNMTdHV3NENG0vTGpnVlVtYk1aZUN2NCtqSHdBL3h5NEFEd3I5dWN3cndEVmprOU92cFBpS2NtUkRxeUMyR1dsWkwwUTUzNDU5SDJpSWVEcnRSenFmeUdzbGd0RzN3QjhuNHJaRm9xNE8rRk5aaDRFblU3U3owaUROQmhwdUV2eDh0RHF6Q1BFeWZYWjNmaDN3eDhCSGtCYXh2eEJKVHo0eVZWMENva3E1K0FEbUhva2VXeDlGZkJRNFhuTkRUbUovSCt0alkxUFRSMUo5QS9HK1dKWmdvaXNMaGREVDFWbVF5TlVpNnFVbGxoWVhGbGg4T2phUVllZjBkRlFaS0kyaTZCek1WY0MvQmNZdzl4TDRRNlBEanBpUzlQZVc1enZFbDBDWFdWeVg2Qzhwb0xUZGFmQlZLUmZYQXBjWmJxaVUrOWZpYUJQU2V3UlhXU3dDMzhYY1BUWTFNNUZvR3pxaWNQOXk4SXl0dThCRjFIaDJXT1lCekZPalI2ZVBaL0FUZ0VqSmlpc0xCWHE2ODczQVJzR0hnTTFBRjNDU2VObk1FVyt5dldMNE9sRjBjTHc2dTNqRFlGL0JrY1lNcXpEM0ljWnFpL3d0aG5sYkJ5US9JT2tpMi9zcy9tQjhjbVkyUTF2cXdta2F5VzM5L2FHemd5K0F0d09QQWp0QWVlVGR3Qk9nRjhjbXB5ZXkydGJMbFhKL0VYa1F3QkNoY0dCOG9wcVY2bWdDQVd4ZjA1OFBpaTRVK2lDd0ZYR2VVTTQxYW9oRjdGMmdDSHlKcEM3YnM4RDNFVitOekNzaFhqWEdnTnRyVEI4QzN3NjhHN2dhMUNOeEJIdHNkR3JtL25aTXBZVTFYQzZ1Ri94UW9tVHpxdUNSU0hvSzJEOCtPWjBsM0RPQlZ2NWVFK1NHMS9TZEovbHpTRnRyRnIyTXlkVzlQRW5ZUGlIVWJYa0c4NWUyTjB0c0JtMDN2akxBYnVCQjRGN01QT0l3K0RuZ0hzUjZ6R0Z3MVZZK3hMYm5US0J1Z0hPQ215UVZzUi9IZkc3MDZNeFVLL3pmRU5KKzJTa2JGSUp1dGRrSXFpTE94VjVWMzNLc09YNFFCMy83aWJkTEpwRnVBMStFUFFEMGdvYVFieU1PTjhhQVdhQUVkR09lQkM0UWJBSStzWE5xWmliRlhOdlZTeUZzQkhZQWZ5SDdudEdqeDA2eUV0SXZkanI2NmJha2NCb2FLU0RzZUZOdldPcnU3QWtSQmVFTldMZEl2aHdJdFh3Z1VBOGJmQng0QmRoak15bnBQOVFpNWtsRFZiSFhmTHZNUnNOQmlTSE1DOEI5SVFwN1JxclZWbm1uRmFPM1k3QVliTDZDMVdYODhmR3BtWVYyK0tseU8vcW5FMW9EbEZXNW8xenN0YmdhYzAyY0JOZXFtaTVOMWR6Mk1qQW9xZGpVMEp3d0hFYmVLYmpGNWdhSk9iMjJ1Ry9ucWRBZ25qWWhiTFY0RWRNVDdQem8wV01yak94d3ViZzVvQWVCNjBhbnB2ZWVSaUQvbWpJdDdvTllLZFZURHRnNXhTNUZ1aUNlVGd3QVpVSEpZaFhRZytrbVh0a09JMzBQK3lmQWRZaS9CNzZpaUd0SGo4NDhDNFRoY2wvQVdvc2NaQTFKVkNMckFjbm5JVlpqM3o4MmRXeXV6bUNsWE93R3ZnbDZxU1BTSFFuTmErVU8vRHJsMDAzRlJqbFRnOXJCallWQ1dEeXJNeCtrSGtYMElQSXNNekZXblptdmxJdmJRZThCL3hQeDZyVm9jOFg0MFptRjRZRmlYdVlxeEdxWmF3d1BBNnVBTnlNdXh1eHh4R2ZHcXpOUm5FS05oZ1czWWIxcjlPaXAyT2cwTDlmU1ZjakFUK1BWNzV2SzZaeDBxd2k3MFdCa2JnN21XQ0QybW1mcmJTcmw0aUR3R2ZCWEVPL0RuSkI0R2ZnazhCZmprek1MdytYaWZzRTZRemZvRmZENVFDL21BZUJRcmhiK2RJYmxFdWhPNE5tYWNQNjFHcE5WVHI5YlpybCtJaUpUR0tseWFGSG0ybElwUUhRallvNklnOEJkZ2hkeDlCVUlQeG9lNkg5cWZITDYxUkNpQTVHMVd1aFpSUnlNZ3VlRkpzTDg0bk03NStZQW91dmpnMUczU25TRHZnNjFSTHA1TC9DU3hjTDQxTXhzbW9kV2NHMnBFQVRSWTlXNUxQelRHdXNjYmFSM0JtV0FLQitpSWNSTndLdUlkeEp2d2N4cWZtbldaK1VmbDMzbmpZWENEU01UczR1VmN2RVFzQmxGQ0YxbUdFMGE4Q0EyWVQ2TTlmblJxZWtYaVZmUzl5TnVRNzViNWcrRzEvUjlYckJLdjFxYUdUMytmNU1uTTdoMmRXKytNNThySzg0YlhVeWNSbDJvbEl2Zk1leGFpc0toeDZyVnBqYnRCSlU4bzlqT3NyY2pFb0FOTW9ORzk0SnZxZFgvZE9mY1hGVHA3djhyNE1mTDNmbDNNc2NMSFZFNHZCeWlYVVpiQmZteHFabEdaTDZ0Vk1yTDBaZU1Ea2ZTMzFCUGNlQVBZRDJQdVFiNGpvTHV3VnlnZk9jSGdMazYvenZLeGZNTTl3SWJFSU5ZT1oyeXNsZUNxNTNCZXl2bC9pZU1uNmxwWWpLamtQbHlXUSt6R3JYRGU1dmpSUG8xaUEyZ0Y3Q2VBVURNZ2g5Q3VyTXkwTmMxVXExR0JPOUd2TjNvaFNUdHpoQjkxbkFKY04vNFpIVWVpT1pmZTMwSjh3UzRJRGdwOGZ1S0IvYm1xRU1ONFZUS3hTSGdJY1RsU0VNeU9TbDJjMjFIaGlwd0hEa1B2bFh3eUk1eThlcktRRjgzaWVBMmNRR1FqT2JiR21leXRTbHNIK2dMd0lXSzk2a3V4VjRBN2h3OU9qMFBoTEhKYVhZTTlEMWxjenRvQy9EczYwc2RpNTBoS2dqWGJRazd5c1Uvc25RSFpnL29NU0FNcitrclNOb0dmQng0eGVJZmdSblFrMk5UTWYxYTJ6S3dFK2tpMll1V1QxaWNCTTlnamdEejJQUEFTY1JGZ3JMUmtQRUZXTmNPbC91L3NCUnBYMkxxTlNDZDdtaWxhcTIwS2RLeWV3aGFqYnhrRXdSL3JXaDVUN0tOMFFSaXIrSXA4bXl1STFvTkZCd3pIVlhLeFMzQUE0SXV5OS9EL21SbG9QaWZNR3NSVTVoUE8vSlB4cXZINmpzWmpZWGkrbkxmS3NPWExiNkovWURpRTZ0UkhHT3pZRmlyT094NWMwMDRXMUE5T2xBdmNCWG00czRRM1RlOHB1OXZ4bzhlcTZjK1lneG91UXhtWlJ0WE9GekRwZFdyRk1JUEpGMElmcHFJbTBhUHp0UWR2Z2ppczQzTHIrZi9EUE54NEczRVcwQzNzaHhkNjQ2T1FlRnZTVHJQOW5IZ0owZy94VDRnOHlyaTRPalV6TW50ZlgyNTBLbTE4Y0VGVmlzK1FIRU9ZaU5tUFhFNnBuNEdzcnQyTFJHbmFsNGkzaStiQXo0cWs3ZlVDTWJqUWZRUzVnRHdBdkFEOEs2eHFXT3o3UnpGTXdyKzZnSkNXa0JjUHpiUnlNdzFRV1dndUJIekQwTFhHallKbjcxazM5Y2hQU0ZwQzBEdE1OTmpobjhXekFubWE4ZFkzbEVUNmlJd2c1akYvSUk0VVhZOXNBdHJtOFNnelNId0xzUmw4VmtpWVpoQWZnVnpuc1M2WnYrNHBtdk5FSUYzTzlMT2p0b0xaMzNqVUcrZGhxYTY4OC9xc1FMdkVycHpiSEw2UU9KNUU5MjNubjNXTDRFcmdFN2diWUx2U2ZvenhGWWhZWkQwSnNRN0pINFg2QUVHa0ZZajdSRThBaG9QODR0UG5YaDkrWWR2Nk96SUFaOGkxbzUzUzl4djJBcnFBTzVFL20rZ253TExpTjhSdkxVbTRCN1ZyTGZoSURBcCtDVmlWWnkrTUlCcXAzYjJwRVYzSms3akNyd2RBMzNsc053eE5WS3RadUVISU5vKzBCYzZySWRxZmxKRW5QaTZEQ21BWjIzMkMzWWIvczVpZis2MXhabVJtdk9ZcEZjcEY4OUYzSTY1V3ZIMnpUemlJc3lYRVcvSDJncnNpc3dWanh5ZFBqNDhXTXFIYUhuSTZJOFExOHZhYUp4clRDMzdwR0xCRldLNWNBVHhFUGpKOEt1bFYzL3RXT3czaFZyYWRFeDRPMUlVbnpqVFBPYUx3bzlGdUpxYmYzMCtzU0ZZaDdDdFZBaWRvWE1ENkJyZ1JxRzFobG53RFVqM1lkOEZ1dHY0ZGtrUFlyb1FONDlOVHQrZnBGTXA5eFdRenNkOEVIRUphQUY3QnBoRitrZk1McURxb0tueGlXcFROSitHMDdyd2JTQlQ0NGJYRklzU1A1UzBBY0Q0Sk9nemtrWkdKNXFXMTRhTnV6WU9XaThWZkpyWUsxNEZuSlNVTjl5QS9UN2d4OEFTYUNmNHYwcXNCZTF3bkRmL3cvSEo2Vm1hSVF3UEZwSHB0YlRvNWVYNVI0N09ybGplNjVBT05kSXYrcHRDVTl0dHBSSlNOSXkwd1RhQ0dlRFRpQ2NUd3FrTEpoWk9mMy9vRE40aWNRK21CMUVsUGxRUTJiNlQySTZ0aSt5YkZYU1g0aDNUcTdGdlJXd0RiWks5R1hnbVRYOThZZ2JpVlkvVXMzcTU2VUVyTDdKZE9kMis3WlZUVkFadXJzM25rOERITytUSHh5YW5seEo0RGMzYlVTN204aDMrclBEWGdQWEV2c3hHMmNjRk55TStBSHdTNmE3Y0cxNWZGUFRVMXFKempicHR2U1FjQkIvWlVXcDR5a25OVGc1R3hFcXRiMXpKbDAwKzREVGxyRFpwM0FpSWRwU0xTSHhPMGhDd2lIUlBaTDQ5TW5rczZhRTNlZXRHbHdCM1N5b0pyVUtjTUl4RzhEbUx0OHRzQlQxdHMydms4RnhrYTBrU2xoWWNMOUgzRW05UGJYVkhXSittbjdoUEQvcUt3YzBLSVZwZFNVSnBvbGtRQUNKcGsrQlA0cUNJcHdWL09YNTBab2xzV2x5L3ByOUgrRDdpL2ZKRHRrZHNmUkQ0bHVEem1MSWhFdHc1TmhWcllDTWd0ZmRMdkVOZS9yN05zNkF1NEtiaHdWSXVvNitzRE1XS2dUN1RVQ1ByZVN1TjRvYUIvcUlqOXk0NkhKS2pCeTExMTd6VTI4WW1weGRhMEEwQVFiN1ZjVFMrbTNpWDVHSGhLekQvR2VreDhGVlkvd056cUptRWx4QkhNTytOQ0RzRk95MHV3V3hURkgyUk9GaXRRM3BRMHphb1VjNUtkMlJwVmROTHRNRVBRQlRabjVhVTcxUzBJT2xDekNMMnJhTkhadzZuOEp0b1hsL3FHMFI4Q3BPVG1UTCtDdWhPU1Z1d2Q5aytUM0RBOE9YUm85T250TkNlTnh4UnZBdGNsRFJrV0l2OUtQQXB4RmJpVTdKcGszTGFjdGJlZkN2QnBBMWQyaFVJQUpXQnZrdUlwMVFRNnE3NTFZOEZoKy9TZWpyR0JJSnVsRlVBUDR1NVQ5SlhrZXJmcG0wU0hBZDlhR3lxc1pjZUFjSGluN0VHNHh3UWVjZDc4Qi9DUENnNEFyemp4amU5YVh6a0Y3K29DL1dNVitqa010OHUvM1BtWmV0OWtsWWJINHczSW5VUytFSnFQNnp4Y2swMHhGdHM5c25jaFhqUTBublk4NGhkaUc4QTMrMGdtc3JvOTVCRXZuYWlEVTRkOTd2Rk1BNWNGdVU3OHNUQmEzbzVieFVwUk5ENmRFZVdLbWJOMHl5TitHWHQ5eW1aVHhxZUdadWFQdFFDdC9HaTIwcWxQUGJGd0xNV1h3V1dzTzhBbmpRY0daK2NTWCtaM09BNWp2b2RDWVhhY3I4aERsQzFEZnRsUk1EdUFSbzVKRm9QZFBLK3BaSE9ZdVIwQmpvRzhXL2lIN29OczhMZmFFT3pJZlRPRUcwRnVwQ09ZejRCN0Eveml5ZDNub3JIbXZBVDVjamlPUENxelBvNEVQVmF6TzQ0OU5TSGdjaXdFWGllYkExSzg5U29iN2VyMGFwUnU1d1JtSUpsQktzUmg3M3N2UzF4RS9XV1o0UDErNHVkbW5qczhJb1RHMjBYQ290NXhSL2FySSsvTElxUEhJT1JsS3RGN3F0bzF2d3ppaURhaFJxdEdyVlRUUkJGSVl3dnhEelhzZHc0VDloS2d3Q2k4Y2xqeVN4a3kyVTNRYXRSbjhzdFJzdXY1LytYNFdyRm1aT0M0SUlFVDRCUEp1aGtyYjdKK2tiNVRFS04wNFVjelN1WlZhNTlBclVlbUs2ZGlXN25ZR2F1aG0zS0svQkhEczhCN0JhTmc2TXhKRE5YcC9JVzdZenppbkxhSjJrWk1xVHF5UGlsVXVyckFmZGlab3dYZ0lFMkRKeU9ibGE1SmI0aUR0blVJbmRqZTVmRlVqMHpabXMrZ1o4Y2FOcVZzenpLK205Ym55V1RZS0JJYkp5UEVCK1I2V3JEVEN1dFROcUpkTGtsdmdQSGliZTZxYWxMTi9aZWFnZTJoVTZtYUxZVGVLT2Nua1pSaWtEeXBiS25WTElzRlJIZHdDQ2lvUGdUaEhxbmFmd3NPR01ITG8wZk9oY1haUjZvenlyRmp1VmU0di9tbUtnNWpMOHUvVXdIS2Zuc2pGV3h4bFNKT0pmOEFuRWNkYWdON2F3UnE5K25CNmxWdVlHLzgvQmNoTmdsYWw4eGk1elJlYllQRzc4Y1JWRjZpcVY1eW9TMFE5ak9CbVU5YjhLeldVZDhLUHNFOFNHcnBHT1c3aWVMaC9ZdXhHbndJMm5XYU14dTdGUmNCS3dYL0xoajRmWDBZcEhWejRyeW1XaE0xa1htcnhoQUtpUE94NnoxcWYvbHlWcFMwOU02elhBVzgyM3h4eWVtRWRIVHFtVUxwZG8raFhteGRrQWlyVDN0N0YxRXFqTHRJN1JiQWdQWldsREdkR0dxOFhNdlpnZ3lXYzZ5YzIzOXBkUGhLeXdmUUR4ZnY3ZVpramlVd2o5VEk1MXBuTk5Fc3BnalZWZWZZZzhqSHdSdEVjeEhzSzhORThrWFQ5TEwwdUl6eHQvNUw4Y2pvNGNjYitVQTdJMldmU0lELzNRckkyUXM4NmVEVmxNQmdOejg0dmVKdDViN2dUZm5wT1JCSjlMNEdYUitTMlh2cm4xSGk5QTNjcjk2ZlRFRFA2a0FXUm9VNEZTdyt1c0lLc3MyUkFDMTQzbnBYWXIwVkdpbEViKzFjdWhjUEJFdDVyOUcvTVhoWTdVTnlIYXJhQlkwVGJNa1pOMjNzeU8vNmN1MFV1OVcvZjVhK0pXQjRyb2Q1ZUs2RnZobnJCRC9IL2N3VVp2RE80NjVBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFd0FBQUJNQ0FZQUFBREhsMUVyQUFBQUNYQklXWE1BQUE3RUFBQU94QUdWS3c0YkFBQWNEVWxFUVZSNG5NV2NmNVNjVlpublA5OWIxVTNiaHQ2YTJGMWRxZTZKV1RhVGpURWJrV1ZqekdCa09TdzYrQU9RSDRiUUZhUG9vS0xMSXNOeFdOYkRtWlBET2NNNm96TElPRGtqVHRLZEFQNFlWRUIwRUFRWmRKRERNaUdMR1NiRFpOclk2WFIzWWs1djI3WnRwZnY5N2g5dlZhWDY3ZmV0enU3K3NmZWNPdlhXZlovNzNPYys5N25QcjN0dndjSVNhcDlrQ1dmNFBnbVRiSmRWbjRZbmlTL1pOZ3MraTZhbDZrS2xYRHkzVWk1K1BZTTJBUElKQkZIRzcrYjZxQWxSOHpNcE1NbDJ5ZWM2WEIyMlhwL1dkN0xQWnZpczk4MjRrdCtOZDVjWENtRlpaL3NXd1Q1TEoxTG9iYlJwSG16ejRBT0xtZEZxTnBNRFR6SnJLUnhaRTdVVWZKTGVMR2FsdFcwdy9Pelh0RytSK0RwU0dYc3lvODlVZ3BJZEpxV2lsZVJrU1ZPcmZ0T1lrNFlubFluYnk4V3U3ZVZpUHdzbk42dDlHZzFoZTdtNFFlSkxRdDIyRVp4czFTWnJPVFVqelhxZnRSeWIyNlVOSWt2Nm10K25UZVNpWjhPbHdFMDdDb1dscERLNWZBR2lTbCt4alBoTFlDMFlKQXlUVFcwV3JabzhyY3VpR2Q3VzE1UFBtYTZoMGVNbjA0akkrRTYrYjlYWFV0TFpUTStWUUdkMFZyNGRtRTFyWCtsL1hZY2pSWHRIVDFTYjZ3Zkt2Y3V3ZHlKdE5LRGFwMG1ISlhFdDBtRlpoQzFvR0ZBSjlPbnJ5ajJkS2JBdDhXMHRsY0xXVXFrOWc2QXpvYWNPRXczMEYvc1JteXhXT1JlNk1tbDN1RFFvckdxdXEvVDE1SVczSXcwQUlEREVRbVora2FCakFVMUxFYmhJekFVYmdHMDVhOTBaREc1QlgyMGhLcmVGNkVPSi9yTU1UVXVEbzRnTE1GTkFRV2hadmI3U1YxeGY2U3V1QkxpdXZ5Y1BlcjlSWVVGamF5UGlEa3dlRzlrdnk1NjFqTVZZb3Q4RlBGaktwNnFYWmttNFZ0QnZjZU8yVW05SGl6WUxjRzViMFpzSFBpbTROb0czNWZJZDZDdTJWOHE5blZ0N2U1UFN2Z1o0QlhoSTBBVlE2ZXZOWSs0QXZRK0laSzBDTnNwMDFtaU1LdVZpdCtBdW1TSXlScE9HL1VnZG1CbnM0UVJOQy9wZGlqbU5BUVBzS0pVNlpNNUhBTG9tbDJOelJwc0ZlTGYyOWhMazlZaVBnbFo5Y0VXcEl3TjJrVUdRT1IvNFRpNVF2TGJVMnd6N3IwQVRtSTVJRkFFd0Z3S2JzWHRyYmM4RFZnTExnV2pIcWtKQWJIUE03RkhCQWVTQ3hFQU41elFSQjBsWEw1a1NsbFlpZ0RsRjdZWjJJSkxjaWJtdHNxSzNxd2ttVlZyeU9YY0pQaS9VWmJrd3AyaHRNeEdKZmhZdzBOSWtZbE9RbjhvSC8rRzJGYjN4OGhJZDRBSndhVENUQXl1S2E0VS9pNWpHZkw4R2M0VlFzRndDd3Z5cC9ETGlGUklNaHh6NTB6SlJyTzRCR0I0YW01aEkwdDlNVzVxK3lDckI4aktnM2VpUTBWZUFpNUF2VHc0eTJVNXdHN0RGTnBoT3BOV2tlL2NrZitmeXYza1ZmRkxTV3NTZE9mR3pTcmw0ZDR5SFpZZ293cHNsbmdLZGl6bHMrN21CY3M4cXpDWUFUSGVNTi9SajFzVFAraTdTZjdRVWZKcldaNU1NU3RBVHBmbEpDd2Jiak1CaUNqRURYaXQ3V3JpS2RGdWxyN2ZNUXArbFVTb3JlZ3JBUlVJZ0lTa3YrOStsOUpuNmU4L1BKcXZBdzlnQWp3RVBTZnE0WURzbXdweEEzSUlJbHIrSCtKR0pJcUZ6RWYwWUJMMDF4bTJXV0k1QStBQndrVnlUci9qN0gxclF0RWlIcFVuYmd0bSsvK2p4YWVBVkVJWU5oaEZnTGZhTkh5Z1U2dkFMZytXZ0l0SWF5M1hCbndYVzByb2tKM0tmeFF4bU9YaUdpQnN0RFFPWEFPc3dZOEFUb0RXWTJmenNmQlc0RW9QRm5GSGQzM3hiVEx1bUl5a0MxbHV1OFpKcG8xZEkxMTJoK1VlU09WbnJseHJtL2JIVHdnWmdTaGpCUU5UWnZyWUp0bm1wblI5YnNacXpZdzhDNTdSZ1VwS0dZSVhuUUY4RWxnRmJFYmRqZnc5NEdwZ0dxcGhyaEdjUXowYXZiVnVKdUFCNEdmc1o4TDhNeEpLKzNyRWJjVmg0azZTT3V2NFNQaUxyUU1yNEYwUUpaK3BXbks0VC93TjVUbWc1Z0UyMVJ2UU5XMHVsL0NKNCtBODF0eER3bE9GZlFQM2JTNzJGRmt4YVFQRGVrYkhxUE5GbmdDc1FuN0g4R05BcGNRanhOT0xIU05jWjNoTVJYZ0J0SXJhT0kwQzd6QkVGbFJEOWlsZkhrNWkzeDQ2cUo4RVJzR3Z3Mk5oMDJ0Z3I1V0xZWGk1dUFNSlNvZEdpd1JnTzFRTFVJbEFHcGd3UEFPL1A1NkoxUUdPV3R2Y1cyekZyVUkxTWVCVnAxblluWW1VTjlveksvVWVQVjRGWGF4OEFLdVhpaFlMMWc2TVRYNndQYm11cEZFTGdDa25CZUJTeEdqU0QzUytwRzN3Q0dBWldHejhHTEJjcUNEK1laRlN0andMdys4QjdnTjg5VTdmaWRGRVlCdTFIQnFrQUhBSCtOVEF0ZE9OMS9hVjhyYlBnSEYyR0VrQnNJUGtCZGgvUUxxblVURmdLc1V2VEpqcGRjMXBySmNybG9pN0V1UUNZbjhkNmp6eXdIaHlNOWx2a2djZUJmcUVObUR2M2pDNXlKNkxyVnZUMEEzY0NiNnZwNnpQMnd4cGw3OGpZTFBpYnNkR2lBNWdBQ3NCQjRITFo2K29keTNRcWRocEJWSUdmSUZZTE9zRE5ya1dTbG1SMklaV3BOZnpWWnBqOG5LWmtUbUJtRVVlQVlGeEd2QjRUQWQ4V2VvUEUreVRXZ2orbmVSWkkxK1dGUXRoZUxpNFBRWGNobGd0ZG9qaXFXREtWa2tYd000Z3hHV28rMWF1Z0Vka0Z3WTBEL2IyQjJBMkpmSnA1TThJbk1QMk9GK2kvU2VCZktwT3htRTZ4bkZoL051amVNejRlR1g1Yyt6Mk5PQ0g0N1pxa0hRTDNDZjRRMHdWOE1jaDM3aGtmandDMkZsOFhLdVdlN3JNNzI2NkoxWXdDNWhKRDNqV1hJNDNRSmVQQ1hGdjFFUEF5TXVCemdQOEZibmVzRzk1ZGN3N0JubE10N1dLWWlkQVVVSXI5SUg1R3VtVnVsV1ZkOE03bURZNmxxTGx0SlBUdDJGL2thcXg5d0RwQmgrRnh4SWRzUjhEbjVPajI2cHlyMjBvOStZRnljV05iUHZkWm9aY2tQUURxQks4aUR0d25zWi9sREJLSURTS2EzKzhlbnB3RDl0bE1ZZjRDOGUrQldhSFZnckxnZWdDcDVubkZUdUZVTUZOQ0pld1puMWI0U1NtUFV1clM2QUJ4cnFMVFJxQmVCa2ZIbnlYaWJiR09OWWFEaGhOSWw5UXlHN2ZNNDNzandvZHp1YkFyRi9SVUVIOG42Vk54bXBxVHlQdUZOa3BHOGwxRHg0NlAwdVRwTnhPMUZBUHJ0YzhDMDZCT3pLdkF6OEN2eEF6eTVaVys0anBUY3lnRVJzTlJZR1ZONFU3YkhHaGlRaGFUeUtyZjF0ZlRpV2wzMEZSYW04Rmo0NGRDeEJXQ2wwRkZ4SUR3YXR0ZkFYNG5vTDhIN2hGOFdOSm1VS01QbzZlQmErSmZPcVI1L1ZrV2c5SjBSZW9TY1M0Y1JyeUkyRmFyR1FIdnNrMGNrbmg5UGV5d0RmZ1Z3VG14bzZ1bjg3K3VUcEtSZW1aeElKK01PVU1PclFLT0VIa3EwYTd4dmVmWWVMVWFoVWVCbndMdHRwNVhIS1o5UXRMeU9NMnF1Y1pFNDFud0s4anZGU29DaDRGcjk0eU56OVJ4bm9sRXBVclkzcEd4Q0xTUFdQbCtDclRMQ01ITGl0Mkd5K3F4a0dCVzhCVHdWcXd4eEIyN0p5ZVRVblhHMlZZZ3dxd1IvRFRuTUpzRnZMMi90N010Ri8xWDRldUJMNERYR1lZdEhnZlBZRTNhL3BiTnFNMFhIUGxkaGgvSXlodGVOVnc5ZUhSOGZ6UE9wUnpYUmRGNjgwdWhoK3pvYllLUElxMnlYVEY4UzdBZWN6NFIzWTdaY0FMN0NOSW00TTdCbytPSFV2bzZrMXgrYytkdnRYbHk5OWhZMG1ERSs0eXZhVnRQNUZ0QW16RTNpdWdnNkwxRzc4UWVzWGdRKzdzT2RNcFV3VzlFdWhkWWpmd0M2Q05EUjhlYjlTeGtiSUkwTXlacnlRQXdlSFNzdXIxY3ZNTndqdUNkd0FiQlBzd2hvekxCNnhXbmc1NjNXQmJNRVl1dlhGdnFicytIY0EyT2ZqQjA3TVRvR2JLb1FkZDE1V0lKYzdIZ25nWDFwV0o3Q0d3RVBnWnNORHlMdUNKRU9zaFpwNWl2dG44RC9OOGtyVFRlaHRnaU13ZE1JVXFZNWJLZUIxZUdSc2VIMDhaOXBxRlJaaGtjblRoUjZldTkyYmdidE5MNERZSWh4RTdNV3gzMzhUZUM4NUErNDhnZCtSQnVCUzdLemVuQkJFRnBFcjFJc2dPOEc1aXdmWEpycVJEeWFpdEtiQVJ1QURhRFJvRGJaRDg2T0RvK1UyOVhXVkc4RjZsb3ZFUFFnYlNhV09kaUdBVjJFL2xQQjhjbWh0UDZoVmduTDNweFdhRVF6dTVzTDJLdmw3UU9leG8wWlR3TlRFbWFBc1pPUmVIa2cvR1NDTnY3aWhjQTk5bzhCendnK0U1dFEySFMxdlhCWGhuQkswSGNaYmdZOGRqUTBZbXJXekVtcFlTQkZiMEZ5VThDM3pTOEtMZ09XSThvRU1lWmZ3MTZlT2pvK0pHMENSZ285M1lJM28zOERxQ2RlSS90bndTUGhsOVZEOVIwYTlxRUJacVg1UHRMaGRBVzJndkFlc0hWd01Vb3JCRU9oSUR0ZzBJZFFpdVJnODJCdGhBTlZjckZoOEFqb2EzNmJGUnR2eGU0SGZpMjRRaldLdUhQZzlkWVRBdjlOZUljMlhPWWZXUXYvN1RFWnV5VXl0c1U1K0xtQkRjRFk0Zzl3UGNpNmVWOUkrTnp0SWhnOW82T3p3TGZBQjVLWTBnU1B2bWR2N3hRNExXdmFTOEc4VW5xZWtpSzl3NGQ3d1lEQ0syMi9JenRaMlV1VlJ6Z25tdTRGWFQvWExWOXlQYmVJTDFlcU4zeXE5aFJCQWNrYm96VHhRNUdqd3NJVVhnc1l5YVRqR3JBYkZ2UjJ3VytLZmFaSENGdTBMd2ZHeHc3UHQwRTE5dythNE1selZGT1Mwa25tUmZ5WjNlMmJRYytneWhnWGdCR0RhdmlqU0UxbUdiWWpabEdsR3crSS9OR3hBNU1FZmd2UWgrWGVBd1lpdXdqdFdCMVZ1Sm0wQ1dJeDdFN1pGOEV1bnIzMkZnMWc2aEZqS3EveThrZlFxekNma2lSYmhnY0cwL2JmVCtUa3ZRM2t4T1Y2WXRxZTEveEU1aGVTOTFBTjNpTG9OaklrRGFpRzg4Q0wyTU9JUDdKNkdVY1ZiSG1KTHBBcTVCL0I3UUtmQmlZeHF5djlUTUJuQ2V4RHZQbmc2TVR0eVNJYmhYd1J3Q1ZjbmNSaForQ0JpVnVHeHdaYjg1U0pLVWtEV2VXRkxXVXFHU2RBSFlVQ3FGNjlsbUVDSVR6V0pjSy95VXhFeHNyTS9iWW1VUHN4d3lEcHNHZG9JMklHZXhEeERIaVN4S1hZYllhSmhHek1rOElQZzhjM0RNNjBVb3FVblZQcGErNEUyc0w1bDFEeDhhYmwyQXJ5V3lGZnlsRGsya2xGd0Y5b0xjM3pPZWlrdEJWaUt1QnpZS0FoZUY1NUhiTWFxQkRpamNZWEU5RFc1UEFNUEkrNEdxWm5SYlB5TXdNams3TU5YYzJzS0tuWDBGWERSMmQrRUtsWE53WTdCTjdqaDAvbkNUeXVuSnhUWUFuaFQ2aWVSNnZwMlArZjVRa3d4YVZnZjVpbDh6YUdvUDZRYThUTGp2T3RoYXd1eER0bVAxSWo0QmZ3TndJL0MzaVhwbUh3MHoxaHJxNUhpajNsSUZ1V2FzUS9jQnl3NHNTL3duelB3V1BEc2JaejBhcGxJdmZCbFZsS29QSHhqTkRvZi9Ia3BTb05BTVM1VE1BRzcvM2preE1BUzhBejlmcmRoUUtvYnJzclBZUWJ6QjBBSUhJSjRmR0pxcVZjdkY5d0RyZ2g1aXFvWHUrcy8wU0p2a2VFSkM2WkcwaytPMlk1Wmc3Sks2c0pmUnVOcndSdUtYZVY2VmN2RlN3R2ZPMkdyTlMvYU1XNDJpMUJKT1d1WldsanQyS3JCZXQ2blpQVGtaTU1rdWNIR3hrQ3lybFlobTRGZmdPc1lLZlErekQzRndwOVR3M05IWjgwaEdISlcvR1BBVzZYdkpCdzJVMVltL0RORUtsU2w5UEYrYXp4R2NnaGpNR3ROU0FzOEs3TTJIMElzT3hwSVNkd1c4Z1B2c0YwYlpZK2ZNODVsWkJsWGsvNDZETHlJVVBBMyt5NzloRXRkTGY4d05iNXdielNEVUtzL2t3LzZRSTAwT2o0eTh1d0cxOVhPSWMwRjFJVlNDcXJDaWVDeFFzRGlDbTl4NmRhRDRvMTlMeWJpMFZBaEFlSEp1Y1M3UkpHMWNhcmtoa2kyeXF0VXJVTnpxb2xJdXJFTjhsZGlmdVFleVNPUlJtcW0rT1h0dTIyZFl1ekJWRHh5WmVyZlQxQnV5ckJGWERNNGFCdmFNVFgyanVmNkJjWENYeDk3THVsN2hwejlIeHVldkt2ZDBCLzFEUzNiYmZndlI1b3VnSWtlZHl2NW1iM1QwNXVZRE9yVDNMOC9tMmZKZmk3Y0R6Z2Q4Rk9vSHZHNTZ4R2RsM2JHS1d4WXpKWlBvQ3h6Q2pRZFlTWGVEOFNheVJXWTMxQ0hDbHJBN2c1ZDJUazVFZFhnQzlpTGhwb0w4VWhvNk96d2s5YnVnUWJBdHhETmpJaTIwdGxVS0F1MnBXZWVlZW83RlZEUEpWb0ZkdEY0RUNlQm5TQStUQ3AyaHJXK0RWYnk4WDE3YTE1WGNKbmtUOFJOSjlrajRrYWF1ayt3Ui9GOFRYSytYZUR3K1VpK1d0cFZKVDh3VjhhUDRzQ2gyeVlyam05MUhpR1NEWWJLemxWMStQdU5nd1lmU25RQmdhSGE4Q2R5TzlGM3Nqd09EbytFbkVDNGEzUmlFOFhlL3MvY1Z1OGlHNkNuRVY4R1draWRQOSsxSHdkNEVySk80VzdCUWNBWDF0OS9IakRWcHFKNnZ2RTlxQnRFR29vK0gxeFB1amM3V1RQMXZBT3dWZmJRdlJSN2VYdXBOSFA2UEVKeVN6RlV0bERGTDEyYlp5VDhoSmp3Z3ViWVNmMWg4UGpvN2ZWZ2ZjWHU3cEJIM2JNTlh1M05YM0hUc1dWY3JGNWNCOVE2TVRWd0JVVmhTRHhIcUx2OFdhQmQ0OE5EbytPbERxRHNCeWhmQlo0RUtrTWV6bmtYNDBkSFQ4YTgwRVZzckZrbUFmNGlLZmpsUWlZdVAwWE94d00yWDRSMFJSNWgxSVc0Qko4TXRZdDBYdzNMN1I4WHE3QlVMVWJDV1RPaXVOU1dtS01NanVBdlVEYzBBZWMxQkU5elRCTWpoNmZLYlMxL3NkMmJlZlluNGxjYXA0bGR3NC9Zd0NxekNQZ0xva2Jvc2lkMVhLeFF1Qk53SGJoWjZPN0xmdkhSMC9ra2JmOW5LeGFMalQ0Z1R3QmNIUFRaeGlpaDFxL3g2d21UaFdYaW1VTjFBN3dMTWNhWXZGRDRQNWNxV3Y1NDZobzhkUEpNYThJSUY0cHFhMUdUYU9yMHhBWUJGa3hqQWYxSzlQalMxdTYwY05Pd202RlBoendZWEVHdzFzS3hXN2JCNFFXaWt6Wi9rMmllc1J3ektIUWU4aGl2Ym5aazgxY0Y1ZUtPUTdPM0xMYzRReVFXWEg1MmMzWUo0QXVneHZyaDJtV3g1dmNEQkN2TW43Z09FRStGYWt6UTNxYkNUbExYOFU2NkpLdWZoWHhrOU16NXphLzYyYVFWblMweitUTXREYnZWeTU4RU9rbGNBTk9jOS9iZmZvaVdiR0JpQ3E5QldYQVk5Z1ppSjBSWUI5d2c5VTU2THZ0ZVZ6ZXlSZlZUdUM4RHl3Y3o2SzlzK2JrMmVkbXB1ZGlnakxPdHZYMUFMNHR4QmJ2V1hFUndWbUVLSEdyR2VBeTJ2SE1pZUFnT2lXUlJ6QTZTRDRaY1FGV0VWdy92VCthUnpnMVgvWFl1Y1pZank3SE9uK3RNdFpTMG5YNGlLaUd1RTdDZnJHN3A4dllGYWo1TnFxTS9QVjl1OEwzUlRNT3VUemJHN1A1OE5PeFJZd1hoL1d1ZUMveW9WUXpjR1VjKzFqWndOSTFkcG15azhVK1Q2TFNXRE9xQ1Q3SnVMTjJwZkFaZEFtekFuajZ3VVhXUDQ5bWZNbDFobkttRmNSeStvbnNHM1BJRTdJbExEYk9jMjRUc3dxOE1jSXZERlhZMHhkUFRiMlhwdSthWUpKTGVjdDY2b2lTOWJ1b2FQanY2N0JOcmNSNFAyVHMzclQyYStkRmZ3K2dSeXdXdUtYU0xkakJjVkhDSkE0RGh4QTNJLzVZNEsrZ2ZRdDRINVY1eDhhR2ovK3drdlR2enJ4cHE1bEFiaEM4R2VDVTBDLzRLMlNkeG5lanJSQzZOaXBLUHozWEhBOXkzb01LQW5lSk9rMXRhM0J1RmZ4SytBZkJMOXFaR3BpNmw4aFhobC9sSFJjNjh4WlN0SVd3WHhnVllFOXc1Tkw0YUZTTHZZTC90SHhhZWRJMEdscEdmYWhPTW5JVTRLRGtUbVMrM1YxZHM5cFo3U0JaNkRVM2E0UU5nTzNTMXlBT2VsNEIrbDZ4QmptYWNSS3pBQm96UEN1dlhFVXdZNUNJY3gzdG5jak5tT3VSV3lXS1NPRmVEL0VrV0VHYVFSekdQRkR3LzE3ajQ2UDFHYytPYmdrZ2JDWWFhMlkycExobFhKeG8rQW45ZFIzYlJZZnd0dzBOQm9UbFRhSmx4VUtuTjNaM3EvWXluMFEyQ1NwQzVpMWZRdndGa2t2MmY0dDBBN3dMUkozWTBxV3ZtenBZM3RIeHVhYWNRLzhkakd2aU5YQUprdy80b2pNV0p6RDA4alEwZkd4QkIwTks5a3lCa3VwYXhYWlp3YkYyMVlVMjRGS3ZBeU00L05hRHhIQ0RVTkh4MDQyNFZ6QS9LMmxVbWdMMFFEd2FVUlpzYU04VWxQUlh6Uk1DRXFPZkF1Qlhkajl3QnN4WDBQNno4QjdpWHdQVGFjakFmYitmR0tPT0pWK3FJbFdXQ3hBOWJMZzlFNlMwUHAzU05TbFBhZTlXOXlaV0Fmc2lCMWI1Z1IvWVhQOTBNallKSXVsR0NDcWxJc2QrUkM5VStJRzRxdDVFN1h2QXVnTzdIOFczQ3U0TjNkV2RWSndqaVFFVnlHZUJFOEppc0x2cmwwVFRJNHBPVW0wZU00Y1hMTjBaRWxSR2t4V2lRWldGRHNFdDlZdlVoa2VEbEc0ZWUreGlhbU05aUhPZ1BCSGdtL2FiSkswU1dpMTBaemdCdGtCY1Mvb1dVSjRvakdXK0xqNUdwdHBXODhEQ0NyUmE5cnFBV01hUTlJbWZaRWFhaFU3Tmo5bmZhZVZSWHByYTI5dmtOaEM3UWlSNFVVRjNaallPVW91Z2FndCtFTFFIMGpLMTA0QlRScnZ0cm5Tc0FIeGR1Skk0YTdCa2JHWjNjT1RjNDF3eUJveGRDTHZqRTl2YTYxRDJNS1pTVklhUDZLc2diZVNyalJwU3lzTDN1ZnpGQkIzMVBML0U0cjR5T0RJWW9YYS9MeTFWT29BNzBJRTR5T0dRY003Yk4wdCtVdkFieG5PRjlxZGkvUmlmWEFOSnhRZmtIaFBybHA5enVZYnRlb2JCdnBMeVh1ZWtNNkhWSjNlNmw4RmtvMVRsdzNwcmtmWTNsZGNSc1I1MVVqUHl2NDAwaWJzcXRIT25MVS9CZGNDdkcwaCtpUFFPZUFmQTlPQ0lXQUQrTE5ZenlHZmoxWEYzTE43ckdIOW9sakFQSTJvWWk2WWEyczdWL0JWdzhXWWpZcWlqY0F6TEpUb3BZeGVZM3pKbE01U09vM0UreXcvTGJKNU45SmRiVG0vRS9TSjJsMmhSelUzLytXVUkwck56K0c2VWs4LzhGSEZzV2trK3piRDlZSjdKVVhnUTVqekVMZlVydENjcHNXZXR2V2N6RG1DVW55RG1QT3dkMG51ck8yQ1pTcjFqUEZudnZpL1dYS0xZQ3Q5UFd1SnoxaHNFTG9QM0NrMGluVEg0TVNKNUs3UGd2YmJ5ajJFb0k4Z2RXRy9nTGtKZEpmRVZsQTcwQzc0a09CemluaDBhSFJzSVMxaUdOaU10TUh4amxRQjhTNWdqUGlZNlBrN1h2ZTZEakltdXFrK2xRZFpYbnp5ZXltM0lTejRXQmRJV21kNXhuSkg3UjdJYnMzeFNpcDhFNzRRUkcwRDVRam1ZNGc3Z1l1QnlQSWg0d2N0cmtTK2EvRFllSE0rdjE0T1MzUUMrWnBmdnFvMnhrODZYdGJGcUQyWC9PdUdOTDQwMDltQVRaNFBhK1dNSmptZnJHdGVwdkdaTEhPZ2xyYy9GOWlUMklCTmRaQ2plWFhreEhuRVI4US9VMnY3TUdiSTRua1VSdmFPTks1bEw0NHd6RDhiSTZtV3lPVGZHa1lsYmJGOUFIR0krSExZcXhsTWE3bTY2cnRHYVlCSkNXcmxCVGZYQlJSbkFCVG5wUFlMUnlFS2gxT0lXalRET2ZraW9JalVZZk0zd08zNnpkd3JnNzg0MlR3eFdRTU50VUI1Q3R4VkMrVlhnVitvd1Z3RE9tbThnZmpxVE5KeFQ0NS8wUVNuN1V1MlhNTm4xSUViOTM4NmdUSERXRTNScDhXWWpYYmIrbnBDN2NiRzFhZmE5TVNEdytQMTdiQzB5VnJrVk1aZGExaDRBdE1WbjZmeFN1TDdsQWc2TUdWRFg0dXh0RnFtVVZZK0xBbVloalRMVzQ0UVBhNm5mZUUzY2lOV1M4N29BanozSHowZUFYdFQra2d1L1ZTR0ExRys3VGNUODZmYUQ3bDJIRk5TUDlBZjd6V29acXdYWExjSktYMmtqWE9SNDVwbElaTklscFkrcXhUbnR0UXR5RGt3M2RRdVRUZW1sU1N6a3ZWcHY4UHU0Y2tJZUNIT3ErbDBRazVOMzByMXdVNnJsR3doYVJuaU5KYzBLNWxXb2crVWV2T0NjanlWRG9adXpFU3JOa3YwbGFYdk12V296RTlzUjdVL0g4TDJzQmVtUms4bDJpZWptMVNEbEVaRXZTNXA3dE1HbGVvV3pHdStZTHdjT09IWW85Nk1PY25pdnBJNG1rMTRHazFub21jQWNIeVZaeXcrMUFaSVJ4RERzWmRoa0pwdjNwNnAwQ3dnT2tsWVVsODB3eVpkaXdWd0N1cENMRGM2QXVRRkljeDVsUFNsbFBaSndqUi9wMGxFTTJ3QW90QTJkMWp3WEh6czFNVFhlUHpqMmk3dW5OeTRBZGRNZjVvQUxQSkpreFZabm04ejh1UmdFa1ZkeE50YTdVaXJEYU43amgrZmFRTElkbml6aVUzcW15dzhFUkQySERrWkllNERWMEZJV2c0c1EvR3ROdU9ES2VQT21yQ0ZqblhLNEpmU0ZXbmxkSHRUSnI1ZE1RZCtXaXk2bnBkbVFGb1pscXlKeXByTUNJaU1uak54a0IrckwyMXhmSmJ0Q0tmbUQ1TzkvTk40MGNDZjFpZ0xTU3YvNVBSemZLb3dBcDZ0K1ZSSm1MUjJTVnJTVkVXeVBrMnZOZG9NSFIwL0NmNHF1TDRUVlpCMER2RGMwUEZmTExqMjNLS1BSYnhKRXRacWNGbktlQUZDNFBVMUcxNG0va09QTEtPUnRieFNDVTJwWDhyOVFmYkRtQ08xdjdDQmVBL2hSeW53U2ZjcTAzVnFKV0ZwUGxwYVNVcGZGM1luOFIrQmRQajBmd3FtOVpGbVBKSjQwNVJ2V2xrMCthSDkxR0ZFbkxxT3ZmNFR4SmY1azdpeWxIOVM2a0thR0NZSGxVVmNNMHdEMXVaTGlLK0FKaFNmbS9oK1J0dWxjRGZUa1NWWkxTZDE5L0JrWkxRSGFhcm1nNDE0TGhwdTBXK1dMbTE4VW8rZFoveHU5WnhLY0JQY21lTEpnazFheWFWd05mcXY5QlU3Z2U4SVhZRDU5T0RvK0orazlKVTFoa1gxdVFSQS9iaEFHZ0ZPZWE3RFpCMGpTQjQ3YUNhdzduc25uOVA2ekhxdkJFd2cwZGVCWC82cStxYXpYOXN1MUkzMEJ5Lzljbm8yQlpjU2RDWEhWcTlmZENoNHFXWFlTdDlsS2ZZMCtLd2wxcXIvLzFQNkdzOFNqMkUvUFhoMHZIbi9jeW1YSWszeW92OE5aby82eXJZc2xPc0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZmF2aWNvbi0xMjgtYTc5OTU4OTUyNWY2MzZmODM4ZTk1MjIwNGY5MGQyZjkucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUNBWUFBQUFmOC85aEFBQUFDWEJJV1hNQUFBN0VBQUFPeEFHVkt3NGJBQUFDRDBsRVFWUTRqWTNTVDJoVVZ4UUc4Tjk5TXhUSlpFcjg5NHhQS0NVVVY1SlJFYUV1WEJVWDNia1NrYWRZU3FIWWpRdFhYUWpkdUdtaEZycHdwMHpFaXFLUVJZMTBJZjVaUkN4RnhrRWtoQklLR2N4Z29SZ1RwRTdlN1NMUFpDeXo4TUpaM0hQdStjNzNuZS95SHVmWTZKYmtlSllPdmIzbldUcWVaK21YVU9sTEhtalVhMyszRnBmZTVGbWFOZXExTjYzRnBWNmViZnNnaFBBUmRqYytyRzF1MUdzcm1NUjBhM0hwajJyZm9IM1lqeDl4THZBRFdrSThKRHFDRWRFTWx2RWFMVWpXMm9NMlR1UTd0cVVZaTR5VmhTbjhMTGlFTFdWMEE0L3pMRDIwRHNBRHpJanhxM0xLTURUbkYzcUNaNkxmY1EyZllDN3lHM1lsa0k5dVRZcmVTZzkzc1FjemVMd0dIWTJoV3NaOTdNV3RFTUpQMVhLYlp4T1ZXZHhCQjJsZ0NQSWRhU0w2REZNeFNTYXJQWk85U3ZIOXhIeDNlVlg1cWdQN2NRQWJzUWszeS8zOGk0TFFibllXL2hsa2NlaS81Rms2VWphZnc0dVN6VUZzQ3Z3YVYxMDZYRXI5cGRucHZxejBBelRxdFoyQnZ3U1A4RGxPb1ljbkdNZlJjdWdYT05tbzE1TCtmeUNFMkU1V0t1MlZwQmhHTGpoZGVuOEdHMG9MdjBhR0VkeDdSMEtmakc4SU40cWllSllrNFhLNWovUDRGZytibmU1M2I5OG4vd2ZBY1N3M093dFBreVRzd2l3dUNLYnhNVDdOdDI5ZDY2c09BTmlNMnhCcFQzUzZyVDUyYzlnYnd6cnhRUUJEZ1ZjdzBla1c3MVNDSzZLaGFyRk9mQkRBMWNpZkEvSndIUnN1UG4rK0J2d2ZOOGVkbVArUHRJQUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZmF2aWNvbi0xOTZ4MTk2LTE2ZDEzOGFmNmQwMmNkMGQxNTRkOGVjMmYwOTVkOGM1LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBR0dVbEVRVlJZaGIyV2JXeGJkeFhHZjgrMW0wYk95NkxnM0xnM28wU282cW9xYTdhcWpHbU1yWFFSZEVoc28zdWhOTDZob2tLRElUWlZhUEFCcGdwVmt4aEZxc1o0a1lCV3FSMWc3U1lxZ1VEdHFBWXFyVlIxbzBJaDZ5QkFRRkZ5YTdzRG1kQ0ZMTFh2NGNOMUd5ZXhrMnhDUE4vdXl6bm5PZWYvL004NTR2K0k5Qm8zSWZFOTBKNXNrQzhCT1AvTEFQMnBwRFBndWV0cWZmTzczTGdqZmdCc0J3dXZ2YTlKd1BmY0RiWGU3K3pzZEhhbVVuVkpPekZudmNHamMwRTdrbjZYbXdEQStKSkp1NUNLU0hNMkM1M3NUcVVjeEhPMVNLeUsyY0FxSi9RV0UrNTBLMEcySUtaOXoyMzJ1OXhkb0IweXRmdWVleHZ3RkdZVG1JMW5KL1AxSzFCU09ZN1JEZXp6MTNRNGMwSGN0Y0FCWU9QaTNPMlE3N2xmQlc3Q2FBV2V4U2hoUEdoWU8rTExRRWJpUnNHcjg2cTIwRlhvVUFKbWdVMUlmVldmZGdtU2dwNUY4Y1ZaNEFOQ080QSt4QzNBR0hBSGtNTFlDamlHTUhobFNRSS9ucndjSW9hQkpQRDVmcytOVjRKODBHRE1vSGx4QmZRdDRMaGhSeERuZ1djUlc0QVJvRTFRQkhwa05pRjRHU0RkNWNZSFBIZGRQVUdkQkJvQXg1SHVBOEJZRDV3Rzd0N2QzajdQTGp1Wm44NEdoZTluZzhJM01INlJuU3hrTU40UFRBRTNHenBUOGJjdkV4U0tBNTdiS09NWmc3NTZCSDZHaUFQakdGOU0zNWh5RkRtWUF0eXdJVmJUS04zVjBReVVLbFg1RlpBRDFvSDFDSTZHMkFuZmN4ODNPSTVJQXhkcUVsQ3NYTVE0Qmx3UzFxMHczQVpjVSs3NVRPNXlXTk1PclFQR0FXS2huZ2VlQTlxQmFZTitvYjlLSEFUV0M1MUN6cXMxQ1dURy94RWkvUVRZYTNCQjhQRks5aVdoQTNXcUJrYTNZQlNnUkRrTzNBNmNCMXlnQVB6UWpCY3JHdnRNZGpJWFhxL2xBMjF0enZ2YVdsWnZhazdFTnlRYXd0V041YjlaT2FaS0JqY1JDZW9sNE03ZTVzU0Y0U3ZUVjZ0ajk2L3BkQ1R1Qi83YzI5STBJT216b09lUnZRaTZGZmd3c0JZNEkrT3hURkNZQVlqM2UyNkRBdzhBbndEdUZBcFdPdzJ6NVZuT0k3NkQ4UzRpNWI4RytCS2xVSnBabUx3ajIxYnhjUVBpcU1uNTd0QkVMZ1RZblVydEtUdmhreVptaHlZTFUvT096ZmZjL1lnZWpPMUlqWmdOQTJlSXJxZ0xYQVFTd0dZZ0lmUm9Kc2ovdnRxSjMrWEdNUTRKOW1lQ3dsL3FIbEVOWEcvS3Z1ZHVSdXdGdG1KTVY0SzJBeThqaWhoL0VCeStXcUlZajdNSm1Na0doWXNWMngyZ043SkIvdlRiQ1Q2UEFFUnpvQndMb1JRNkZvKzF5U3dPYkFVK0F2d0o3SnVnM1VBYjhCN2dLREFpMkI5S1R3eFY5ZmgzUkdBaGZNOU5JSTVnZUlLdkdDUVFJeGdiZ2JGc1VCajFQZmRya2s2YVdSSUFzOU94LzF5ZEdpd1d3L1FhdDAzaURtQ3R3UW5RK0ZBd24rUnkrMEFQeGthaG9pcGRrT2c2dFV1TStaNjdCZkRDY3ZrY2tjSS9Ka2M3YVd4a3dITzNPK0lTNHVmQVV4SkhoYjNnZSs1dDFTTzlka3Vyb0xlbDZSN0JROEREbWFEd1JtOXJVenZHdTRFV29LQ29aYjhpNlZiZ05jU2doZlpIYzdnYitEVFI1RHRITkpoYWhPNEZmU29tUy9hMk5JMzJ0amI5Szc1TUJXWk42czlPNWtjcnp5OEJUd041NExoRkE2c05lQjNveHZBa05RQVBBNDFBRWxIQTJFd2thTUN1Q0I1RGV0ek1EaTlKUUxLZk9tV25kTzI1SERJVkU3Y0QzWWhUR0U4RHA4dlRzOFZZWWxVcktBMThycEo1Q0d6SHRBZXNDRHhpMkNjUmpobGpHTDhGamkwcHdvWHdQZmNXb25uK2RlVHN5MDVHamNiMzNJOENCeEZnbkJDY05QaVI0SVJCTGhzVTl0Ynp1ZUtsZEpmWDZRRFBBSU1LVlIxOEcvQUNNSXB4QlBBUXZ3RzFHdndhZUNqZDFkbGF6KytTSXJ3RzMzUHZjcUFQdUFmMFNQWlMvaTJBL2xSSGc2VGpGUUpKWUFQb1NjRS9pWFR3RmpBaHVHSDQzMi8rcnBidlpTdVE5anJpd01Fb2V6MlJEZkpYcmh2SGRKZWlJZFdIYUJZY3lBYjVpeVpLaUZaZ0UxRkh2Ym1lLzVVZVFSSTRSclRaek1Ib3FaVDV3ZGlic3gvS0JJVmZBc1RLVGtnMGx0K0wyQUJzcVY1d3E3SGNOVVFvWGlId2VqYklsYXEvR1h4N0tDaVVGdG9NNW5LaDMrV2VBMjNGU0lGTklCem1scHFWRTZDeTBSRGQ2M21vRmJ5SzNWbkpNT1B2UUdpbzVweFlub0RveGlnb2FzRXJockJUaGdLaUZYOGtIdFkrN1pWb29Cc0lnRVZMeUZMSUJKZG5nTU5JNjRHemc3bGN6UW9zVDhBWUFYSVdxZjN0NGhCbU0wU0RyQ2FXUFlKc1VCZ0cvSGNRbk5pcTJmSHliTU1YWXFGem9kNC8vd1doMVNVK0h0QUJFd0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Zhdmljb24tOTZ4OTYtZDZjYzk2ZjY2NzI1OTY1NTRjY2RmZTE5NTIwMzQzZTkucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2lsbHVzdHJhdGlvbjEtNjQ4MzkzYzYyMjkyOTBjZjI2MTkyZTQ5OWFmZGU3MmYuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2x1Y2lhbm8tYTI4NDNiZDcwNDFiMjVkMTI1MDhmODA4YzYzMDg5ODUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSllBQUFBb0NBWUFBQUFjd1FQbkFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUJHQ1NVUkJWSGdCN1Z3TGNCekZtZjU3ZG5hMWtpeFp5RnBwRnh2YnNZMEJKYjdnSTQ4NklFSEVPUjdGSllRS1NoeHNTVFltZHh4MXBLRElKUWQxZHpHa2N1RXdJVTZvVUFSTUxFdUdjc3FwQWtJU0lMd1VTRUlvUXlnY3dKQmdXMzVwSDdMV2VsaXJ4K3hNNTJ2dFNwNmQ3WjdkV1VrdUV2eFZqV1puK2pFOTNYLy83eEdqazRpV3VycUxOSi92cy9pNUhNY0t6bGdWNDF6UEZoL0gwWXNqU1p5L3hZamVOTkxwRng1T0pnL1RLZnpOUWFlVGdMWkk1SXRrbWpjVFl4Zlk3NE9vbkZXWFpRcllGYUlrb091aS9pbkMraHNFbzFsRWMzVjFiVVV3dUIyRWNqbDV4LzV0OGZnU09vV2kwZHpZR0tDREIrZFc2cm94N1Blbkt5c3IwMk45ZlhQT0docEtiaVN5NkNSaU5qa1dLeTh2L3hYT242UlN3UG5UeFZSclhyQ2dQREErL2ltZHNXYTBPWTlyV29oWjFwek1DTmg3NElwdldicSt2YU9uNTlsaStnTjNQWThzYXdmRWRCQnRnelFwcWhsTGM4NzdzQk1UT1BaaGxWNzJXZGF1clVlUC9wRktSR3M0L0FuMGRRV2VzeEljK2h6Y3FwbDRIcDZGMzFIY2oxbU12V1p5L3NMRGljU3ZDL1ZYY2V4WUUxVldQaTI0ZlFVT1BqSkNnWW9LMmxkWmVUdkZZaHZwSkdMV09GWmJPTHdlay9RVEtoRnB3emlqZ0g3RldzTGhxelhPNzhQdk9pb0F4dGk3T0YzV0hvdDF1OVZyQ1lYV2FacTJsWXJIWGhEY3BvNUU0a0h5d0JWYUdocHUwb2krWDJ4OXpPVVJiSnA3TzJLeC8xZFZhUTJGcm1hYXRqT3ZLZEc5SGZINDErZ2tZbFk0MXBwbHk2cHBhT2gvcUVSZ0lseVY5cFpJNUJ6TnNoN0VaRjlBUlFLTGZ4Wk9MN2ZXMTk4QUluaFVWYytuYWVPY1BHRXBpUGIrdG9hRy93TDEzckV0Rml0SWxNMXo1b1JBVkxlU0Z6QTJIeHpzVGp6blVuMWs1T3FIQmdlVHppb2dQRjNHS2NEQks1ejMxdFRXTGdBM25FTUtjTk1jWllIQVNObjQrTmprUGNzMGZWb3c2RGRNVXpjdHlBRy9Yd2NoQjZFL0J5MWNUOWJUL1A1OVV4Zk5wNTAydDd5c3JJV1pabzNvRjZMQWowYVZsQkVITmJpdXhhQkRLS3ZGVVkzSkwyY1p3andPWFNoa0g1UnZhT2hpbkQ1RVhzRDVFQ2J2Q0g3OTJVZWs1SFJ0OWZVWFFGUUpNVmxKM2hFR0VleEFINDNiRW9tOUpCOUhDdU9nRXJCWWNHZ3MvUG5HNk9nM0hoa1lPS2FxV0Y1WmVUNU85VlFhTGpZcUtqYlI0T0NHb2x0Z0xaMjNRQlJDVFZtaGJLTm5TSU9YbFozb2hpWTJQZW1hbHN1UmZENkN0Wi9iZlBKSFpTQndQM2IxYWtLanlVNW8wbXJEUkR1bmV1cWE4NlBrTE9QOEMwVXN6bjQ4NzJlbzl6dEtwMS90Nk9zN1VxakIrdnI2ODAzR25tS2xFZFVrQW5qbTg5Zk1uWHV1MitKUEE5ZjV5OG8rdmFHNitwOWtYRVdBVzlZNUxEdlBwUUR6dTM1ZE9Od0pzZDZWMHkvbm83SjVCMU1vazNSVFJiT0lLY0xDb0s0dWFhY3lkbHh5N3gvZG1vQmNmOXBiVmRYMjVIdnZqVkdSZ1BoYkNDWDJwNWpVT1RSOUxQU1hsOTlHQXdQL1NiTUJ4cGFueTh2dkFsZTVUbEYrR2swUERLTG9QSnk3N0RlMWpOS2ZCd1VKajlJc1l1S1p6V0JtZU5uU3Q1QU5VRW9GTi9rSGx5bzdvRWl1OWtKVUFyREEvaHRFdFlCbUNwemZBckcxeW5uYk91R3dkV0lQdU16bG1LY2JzREcyZ0FzVThxOXRXRE52M3NkbEJacWJHT1M4SGM4NUIxYkFFbXoyRnR4SnlLcUJCWnpwdkdkcG1wU3cwRmRRMG42QVpoRVRrd2d6d213akVtSmhIazBUUHVGUmR5bkhaSDJYUEdMZDRzVTFNSjIvV0tnZUYvb3IwVUdlOGVBTGhiWFJwVHJrTzl1STgzT09QdVlvK1BaQWV6VDZsRzFNUVo1S2ZRbDkzRTVDdjVKQTAzVkJ1THZ5eHNsWW5lSVozUEw1dnRVWmpSN01YdStIeVBzdDVrejBrV3Y1TWxhcWpwWjVVRWFucGRuQ0ZKZkNJK0pVR25KWktwUjhsN3B2d2lMYlRSNWhqb3hjVHhtalFUa0djSnB2VVNvVmFvL0hGOE9ZK0RpT0QzTmRGNWJnbjVTdE9MOFFKdnBLK3kxd2k2SXM1ZmJ1N2xFWUFCM2dCcDhoaFZqQjVINUVkaDl6clJMbmI5dUlLdk1jdUVmd2Jwc2tmU3gzM3ZPWjVoQVZqK00wVytEY1BLRmp3U0ZIemgwT3Rnd1Q5alZZWWYwZ21INklvbU53UkE1QWdUNCtoa01iR3h2M1YxZVAyNXZBN0t4bGlwMkFYZUtacUFTd1FFcHVoWEh2TjRtdWhBTXhqNEE2amh6NTgvcmEyaXNzdi85RlVuQVZFRklUVHEvVGlUSHFpdkVIWlRjNzQvSDljR0U4aVRaWFNjWTJSekhtZ0lKWFNBa2pFQWhzTVF6alRwYnJkOHlUTG5BZkRCU3J6MkM4S1o0N3BvbFlyVmhqRkI3RVF2YkJrSXZoZHhUR3hvQllmODAwajNPL2Z3aWVnMlp3M1c4cSs5YTByOWwzWjNmZVFDM3JSNTJKeEt2a2htU3U0ZU1pU3NTc3ZFNGVjVzFkWFJVSTUyUFNRczZ0QUdPcnRtQnhWZTIzSnBPSDFpSldxWnZtODVpTXVYbGRNTFl5ZDVBc3FPaEtkUitVcjRXSVN4VUFLU2ZENGxWSXhaQkMrWDdvOE9Fa3ZQUkhLRmZIRElzUXpzNjMzNTdhMkQ1c2RzNkw5TUtWbDI5Z3c4TzNqT2w2T25yV1dmMWRYVjNwWXByQlZiTVVUL2czVlRuZTdYWklqZnZzVnVGUjUwNzFjZTZaWFRMRjVBakFTOTVOSG1INmZKOXdLYjdIamFnbXNUMGEvU080eXZmd2RuYzR5ekFSMDRwSFFnZGFqTG03VUZhRzU3MGliYVFpWHN0U0dqUVk1enM0NVJndmdWaE02RmxUUm9TUUlnRUpZYUd0NGJ3blJEbE9zWW1MYUpTS0FhSVNGMkxzajVNSVBVa0h5ZTRIVVcwVVA2YzRKM1p1ekZuUEI4OHJlUVRZcHBLd3VBdlJLZHR3dmt4UkZMZFNxVTFVSkh6cGRMdmlBUTFVT3VEVXR1NVNGV0lqUGE0b2toSVc1bWVRVkEvaS9HWG5QVGdxYzhZZWpVYjdGZjJhTkUzQTNYTXAzQmxQa0VyWDVmd3ZCMkt4R3ljdnB3Z0xrOUJMTXdEbW9oUkNYNnNtci8xeGZvYThNLzVtNS9IakNTb1MrNVBKS05ya0V6Wmp1Y3E2WmFsRTNsVGIxcXFxZWEwTkRWY2lIdm9LRThGdkNUQVB0MjVOSlBZcCtwSVRGdWRLRndDSTQ0RHpIdHdMaSt6WFhaa3g5dEVNWTEwbzFBejk2cGVZcXhwRmxiM1FxeTdwc3MyUlhYbVBPNlgrbUdHbzlRb0YwRTlNcVdOeGZqcDU3VS9UVkRxYlFSN1FoWmR1eTNETVhFS1NFWnNjQzlZMU5EeUc5eE9pYzBXMnJiUWlpTzBlV0hOM0tuc1NZVEtKamdXT0VGd1REamV5ZE5wTVcxWXE2UE1aWkJpakV6RTZiRmdyL3ptMWtyNkZvajF0dDlFazJpS1JUeU51K0dQMDZWTlVPWXBuWGdvUjJHMi9lWUt3WVBreFI3d0hyMTYxdHE0dWdyUEkvSXlnZytYWU9RdEJJSHRnYW45ZDloUk1RcmVtQ0ZkZ1lzSTBVNEF2eUV2MXBzeTc1bThVWWZrVWh4cVEwWlZ1RlZCK0VETzRmbXNzOXJ4YlBSY0RZYlV1d21wWUJ4K09DYkpGckU2UW9DeHRBbXRXSitsYldGTXprc2UySGtRT1VmK29TNlJnRERSelRYdFBUMTdjVlcvQ01iKzJOZ3huM2dybkRnUXh2VVQyeFppTUdZS0xLQjVFUjVMSjJLS0dobEdTZTNzOUVVTzJ6VkZGMFJua0FVdnE2cGJLRkEwc1RrSGx2d2dNNDlnTTk4dmRXL3Y3cFhvT3JLbXZZLzQrU2hrRjNMTWtrQUdMR3NxN3lma2hQT2RqTkUyMHpwKy8zRXFubnlGMy8rR3RJS3BuWkFVNmlFQk1Ta0RCMWxYV2kzSkhkQW1SQTBVT0x5ZUxuSzhrajhEQ3Y2TUkyRFpnc1M3WlZrUUNuTUE0RmxYR3kySDVQa2ZUQkxqSmlzNUMxaWxqNStMdkdwcEJNQW5IZ2tRNU5sMS8rb1NsbTA2L2dKOUsxUVZpZUJQRXZUS2ZUS3hZZ0x3Q1l1aGZJNUVLVlRGSTlQZUtvaVdmaDErS1BDQTlQdjZjekZ6T2pxT1Zpb1JQMDY2UzNZY2ZwNHVLdzdPcWNjRHcrVjhxQk02TEU3blErYkpSa0QzaW1WRG9PMEc0bTNGZkJNeHoraEFmb3ppYlR6ZzRwd0VZSkIvR000V2I1SFQxRVBsOUlLcHZ1UFZUaktQMlZmUzBIUzl4SXlxdkVwbWRaUXNXVkQ4UWphWlVEVUROdXhSRndScWY3elBrQVNLMWhUdmllVGFzWGhlSm5FMEZBQitXK0RKb3RhVG8wVWVpMFFOVUJMQzR2NFJuK3hacElXUHJzTXViQ25RUnd6ejI0M2hQVlFIY2VjdUJ4c1p5S01KaGhLUWFjZnd6UW1DdDRJWTNnelBmalhuSXNUSkJSQitTUHFkRVRJUzNPQmRSQ3JjNFpEZU1pb0paSVVLaDNRZWllUWZpN1JCMnlvWWM4eHZVanhmS2o5QW5rNjZkWWhHZWdJZ1prSG02OFl5YmNIcWN2T0UvY0x4QitYbFlQaXpHTDJCSmZmN2hXT3h0V2NNTmtjaWl0TWcyelVjL3hpa25GQVU2NHZGN1FhUTEyRGg1amxiTTFlWW1SQWk2YkNhM0hTQ1l6ZkJ1M3kweU4zVy8vNUNzRHZvZGMvV0FjOTdqc0NiekNJdUwwQnQ1eDdYaDhNVW01NC9ocDV0THFCZGp2TmlOcVV4Q3c2NVkyaEdMWFlHZGNYMWVTRUdTZVZnTXNNTVNJcjFZVWR3RTNhaXc2TEFobSsycE10K1h3cEo2cTYyaDRaNld1anFodEU3TUswSkJweU1Nc2hGRUpUNTJXQ3hwZDdkTUw5SVVRV2d0bTA2RGVmbzJUbjl3bHVOOVA3b29IRmFtWTA4U2pMK3NUSjBPWENoVjNPbEF4Y2JOcGluWk91R2U4NnpBOVM4ek04NWNWejhqTnVML0ZmcG1ZQkpPVWVnMG5Fck9pWWZDL1FOMUlic2RoUENnTUdlZFJjSzlzVFlVdWt3bzV2YjdxWGo4dTJqM0VxbHhNNnpZWFdnM0R1ZmxFRUpCUjVqSWVKQmJOVnV3b2I0ajZ3VG1kWm4wdmkxUHkyOFl3aW1hNy96ay9DWTRFMTFkS3FaaGxKNm95SG1lODlNeWpCeFhnTmZvQnNSZkcveFV2NkFDR2FYWXJUL0FSdHhNUlNLWHNGUktjZ2tRYWJNdVNyekFkVmpFM1NDdzMrSjRBZ1R4TE01NzRML1pCMFg3U1V4UXU3Mnl5QmxMcFZKZndCaC9SMjZBS0hkSlN4SFltMkxzTm5WekJaZld0Q2xPc0NXWlBBeXY5dzJTV3RYbzRDWnlBWGNaRzhaZDV0cVdzWjY4TnVLN0JIc2RHY2ZpWEtwTHcrSDdWYlQvb1l2emN4SjdhV3hzSTNuQWpHU05xb0JKWEl2VFFXV0Z6QXVKTDIzK0JiOUZVcHhReENkY0hKamt5TnI2K3ZQdDFYY09EaVpUaWNSRnFIc1hsWWJkaHFhdDJobUxLY05YVE1HbE5RZEJkRWFqVC9QTXAyYzVFT2trTGVId1JhU0MzMSt5RDhzbnlTYkZZQ1AyYTJsNk1tTjVsbjliS1BRbHJNOERWRUQ4Z2V2L0JadnRzKzBLLzV3S2hRakxjOURZRHFIRFFDNDNpWndwOGdwWVVPQmVlYnRiY0s1dHNkZzMwZTlYY1BrT0ZRdUlVWjlwWGw3SUN1VE8yT0VKNUJGRTBEQnVRNzk1aWpqME1hV3VwYVhUYW03S2VhRmdjWjc0VFRzeVNWWHB5WFpjczNEaGFlREF4WHpUMkdNeWRtbXhlcFVkaFhTb0FFU1UwR3RHTVpCK09PU09JWFkzaUFrWW1ZaEphVnJDdEt3bzlJK3hSM3A3WDVSMWtGV1FsMERKL0NvbS9FYUY0elFEemdmRkZ6UlkzQitPeE9NdjdzelgrZXo5N3NCcGgxQThFVWE2RnB6bUtwSVRSUktLNlFiVWY1eGx2bDRxQ1Z5U0MvL0FzV01ERU4vQ1luVmF1YXVFKzhINUZZMEF2T1ZWcWhnanh1K3FlQnVHY1JnV1pjNDl6Um5ZUjJ5UmZPNlN6V2NZSWhYSk5XNkx1VXBpSFM3cGpNV1VURUdrWnc4UERKUlY2bnI1NUxPSCsvdUh4THJsVGxaK0RFdDhLcFhKTmNKa2NHSHEyajRKRTc5OU9PTVFiTkwxeXhNc3JERDVIMnlkTjIrKzV2ZWZDV0tvMDdJY0NTNkRJYkRjM1lHRkM3c2ZlTzAxVDNwZU5nLzlLZkdTVmlxMUVxTTZIWHBERmZTM05NNnZIemo3N0hlRlJiYWRwZzFwQ2hHTWdKK0R1SVNmTGVmRERCRGlqNXBnS1hZNXVMNHhNdkpZc0x5OEcxWkNEUW9xcDZ4UTZFWXdPTjRnRjJURFpTS3hiMHEwWWQ1eU1nNFFta3RSZ1dRL1pwb2hLcER2em9YUncvbWJlRGQxblpFUnFnZ0VUdXhXeERVclVCL0IvaTg3ZDZFSTc1U2lBeFF0TXJQZkQ4cS9JZXd0UFhNbm03aVdsN05Fc1pMOWhUbGdMbC9sUUJ6ZENyL2RLNDdVNGNaRjlmVmZwa1RpWVh2ZGlXOFpCd1pVcmhoWGRJbHdHY1FUMmQwbmpsUVdFSFNxb0I5TDhmM2hUQUdNSXBtalk0SHlma2FsUUhpVS80NGhRaXpRWFo1UmxjTTV1d3NMbGEremFOcWRYa05ZQmNINW5weHJoNVRSeFpmY0JhQVp4clBvWnkvTkVvVEtsTU94NEZtK2ZuMXQ3WGRNWGI5STVQK0l6NmlnUUxQeGREcW1pd1ErSWI4RnNwYU55SmN1R3hsSlQ4ZlNlZCtCODUrQU8vMUIrSzJFaUlmSWpnNHo5dTdPZU53MVRUczRObmJIbU4vL09TejBtYmErRmlDRUpWd2IzdjVQZ3d0Z3RIVG5jQU5IWXFKSUxrUjBvRVVRSE41akhIcHRFaHdrNTd1RnJJVzM3Q3VSU0YxWk9qM2ovNytqL2VqUjJPenh3dzhnMXMrYjkwbEwxNFdmemE0OWkzOS9kRjRwbjczSkFPZnZiVmkwRTg1ZHkzcG9XMi92ZGZRK3c2ejZzVDVvMk5yWEovUXNwMjlMT0d5L1RUTUV6ZkUxVlNuZkVad01uT0pZTXcvV0ZnNy9CbUx3VXprM09mLzM5a1RpZnBvbVJHd1FJbm9xTVFDLzl6OVVaSWJHeWNRcHdwb0ZZUEUvb21VK3JiZG4zeDVLbVdianp0N2UyZnNDK1gyRVFqR2lVeWdCdTRlSEUrZFdWL2VDYTMzT2RudXVuN0hVRzhQREw5RUhBS2M0MWl4aVhTaDBydjA2N2ZlUGJPL3BlWmMrQVBncnhua1QyVStZelRJQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUxJQUFBQXVDQVlBQUFDTUxrTlFBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFCWXNTVVJCVkhnQjdWMExlRjFWbFY1N24zTnoweVNsdGJUMGtmc0toUmExQ0NPRndYNGlEMkdVSkEwUHBUS2dvQTRLZmpLZm95QVdIYVVPb1BLd2pxOEJjZkF4TW9PQUlMYTlLWUxmZ0FxZFlZUlJCeFNrcGJtdjlFRmY2U05wa252T1h2UHZtNlRtM3ZPODl5YTE0K1R2MTU3azdIMzJPV2Z2dGRkZTYxL3I3QW82QXBEcmppOGtOczRqUVlzRmkrT0plQkVUVFI4ckYwSWNFTXg1L1BnS3lncXNxRWZaL092a2hibmYweFNtQUFqNkU0RlhuV1Z1T1MzekxpYnh0OFRxZEJ3TnFoTE05b21KenZ5TE5JWC85L2lUQ0hKbVRiTE5NT1FERU1WVHFYYjhKdDZSK1F1YXdoUUFrdzR6Q3VuVXlUQWJub1FRejZSNndPb3VxZ0g1eDJLemhCMDVsMGtkcFlSbzBlY0UweUFydFZHMXlHZmF6czRNVXBYb1NhZm1tU3pPSmFFYXNiTGdSMm9jSzVPMnNLQXUraVNKYllxSFg0b3ZML1RTSkNHM0puNnFrT1ppM0g4R0M0NlU3czk4UUxKOHpiTHNUYldZWW9WMEs4eTh5RzFDMEY1aS9NRzdzR0w5am5QeDY3ZVRIYmtuNkFqQVlSWGsza2NYeGhYWjNmaXhQaUVHaXJieGs3QjFlMzZjbW1sRzFTWEU4aXF5YUNrR1dlckZTUElmNndncFNRN1E3bngzNmtmV0VIMng3YUpNSm16N0p2TXlOUGNEM2FaZTRzUzRkc2R1b2lBRGtISEtwMU85RUlDWERFSDNIeHcybnpqdXdsZnpWQWNLYTF0UEl0bHdNOW84ZzByOXloWFBJRWpoRnhtUit0NnZvZXkzVXZMZHUvY1BQTDVreFk0RFFlM2J0ckZJR25RaGo3V25qMkxrUGRHZkcvSHZFU0hJa2c0amxHbXR3bUUrMVF2QlB6NzJncDd0UWRYNFc2ZEVlcnZicmpVYmVDTTYvUjZjT2szTHI4OGxzekJRSHpZYjZPWGU5YW1iS0NSWWlLTW9QRm9oQnVjcUZ2ZEdJL2JHUW5mcS9zTGE1RnVvQnVUWHBzNWlHZmtOaEhnNWhWTU94MEFPejdPVmVIaEdjOU5MdVhYSkR3WmRJRXpaN0ZuSWFnWWRJVGhzR3JtUVBuWVJOT0VWeEV6MUFvTHpZRkNkN0xyRUtRV3g4M3VvdktRR1Z5Q3FGSzNLcjArZDNqOThZTVVKRit6YzcxY1pab25TR3IwR1JORWRsNUlVbHhiU3lZZUt3K0tHYWxZQ0lmZ0xYTE9iSTJKUXJQZml2bWYxOVdldldyS0NobDJycWRGbHhyVUoyZWgyT3YrVDJIR1dNUDFseTZaQm9YaklGTlp3VVVUc3NyS0dVZE5zZU9Sb21sWUVZeDRsRVdtMGhUclVyb2xmaGcvMi9XSGhpajE3SFRmTFBSNWZJSXJtNVZnS0RWQmhGak8zbUpLaU51dysvTjRpU050SGpLTnNWS3dhOFpiYXptd3MvUlZZTzRrM3g5c3o3NmhzRjNYZkx1cWJPSVBvMEIzbzJGY2I1TUcxZmhVTDNXMVg0TG0xRGQxRTlVRFJPNXZObG45aDNua3hCdDF6QmdvaGg2bE9RQ0F2aVVUcDlPeTZ0dXVTblQwUEJkVi85WWxqWi9Dd09wM3FCTzc3dnBuTmJhQTFlMjZoS21GSTVSRGtuaWRUalRSQUd3TUhlb1NqZ3Y5Z0RwcU00M2lNK1JoakFnMnhHWmxMQ21iY3VIb3cyNkxOTXpLRjlJeUx5dTdYc3o2VkVrVjZHcS9YV3RJdnNLMHdnTGg4ek9iaWtkRmtNV3IzVjB4VnJXMlpkcE1MME01N0tDeVlEK0lXejZEOVp6QUROc0tlL08vNUhkbVgvWVJwRFBsMXliK0JFUDh6VFJ3dXpIV25QZ3l1NVZzMHlVRDN4YVhnQndyclU3SFkrWm12K05XTkRCZkJ0eHNUd2pwaExQOEJmc1I5cnF1QmdnTHhJRWFockoxbVJ4K0VyNEZDQW80eFU0dkxBNFVHcXFZZ2hsOHFFMlJEMFVVNHRGSWRnQ1ozTE1QUFBYZEtoTGJ2ZW12UXRSaVYvYmorcTgxeS94MUh0Ky9lUjFVaXQyN2hFaExXM1RUQndLVCtjdjdSMkliNGhZVVhhUEloRVBCWm5WMmIySlJjbnZOY2VjQkVUT2VKSTArRjBWQWErNjlVZFZYdGRzM0Vnc1VieXd3Ny9ES0g2b1FVME9rVm1MTjF4OXVJS0NqZ01XZ0pmaytpSS92WldvU1k5ZUloN0VkSzFNREVvMWxFekI5d0xRTW4rQUF1ZW8ycWhDSEZkelk4R0p2bVZRNU45RG9LQk8rRVU1bEczVitnZ3diSTl6SDV6ZTdueVpPT2hJM3UxS1l6cVdyNnNuNm9jZzlGS2YrWHJSbFNCZ1krbU1VM1UrM1o5VlFqOHV0U1YrTndQRTBTSUF3bmpkN0RBUkJjUHBOSC9DeldrWmtiYTBxQjE3WGVCTTl3SlU3K2hnTHZKMmJIbTQzTFBjdFpIT04zUFdiMTA0TmkvMExZMjUySmpzeVpnMzJSK2VET0gvQzVvT3FWMkMwYW16b3JNMFNIRzB4WldYRmlOMDBDOExaSnYzS1l2djJHR3Z3YzFZaVNOcFowZGVnTEJPMkM0L28wTHZ3Uk5NNGFuUG1mVUpkSi91U3U3bGtPcW8wUmhRaTg5dXluckhoSDRZVjRaKzQySFpGVXRqb0RtanJqZTVHaXQzbVdTVXFRRHl5bHZuVDh1Slh0K1BkdTJwZm95RjBLUDhQTFhJblJCR0RVanluUzRZVGkrOHNFR1FOVjlaTHVoTEFyejhDWjhPMGsySHJyVzd1MjFyd2E5SUpDd3VIa29IcTR6MWIwOGdmRllIRnhyTFBuakhobjlwSllaK1lDYU10VGNQNERxQkl3a2NXeEI5WE1NeXJQd3E2djJweEpkdVdldG13K0J6L3U4YXJEVXI3ZXF3d1Q4R2p5Z1IwMVhPMTVUUHBiTVNCT2xrV0FRM2VCSXVWTFBibytHeDFXOHlJM1FNWDd5d2JBRnVaQm84UlJsRU5yRHZDcVA4VjAyNGxYNjlNQ3o3YmNpMWpZVGp0aWJlTitzWnVsT05oZjdBZU5Nc2VsazBEUitYaWlOcVB0ZWlERTh1QXE5RUN4S0Q3bUZralIyaEtINzRGN2ZnRTIvaTl3eG9lMjQzYjhreDUvUmlyWTVSNDBzcVl2eVFPcHJteFBJZDBHRzViZjYxWXVpV2Q3WFlzVjZDZy9TdjdnbnYydWt4S3J3Yk9JOElHWm9uUEtDakF4WG54eVRzdVNzOHVqZllZcCs2dGwvckZBUXBCNXVsZDV5V2RnOFFwbzNMeGk3VVBJMTdSY1laQVFUcWVEa0xVK21FRzdwQ0h2UmZWRlBuZGk4TkhYTE83YXVyT0N0VkM3M0FZRXRuTTZzVHg3TFlYQ0RwZmJhZDdaMjArS01HZW9IakNkNytlR1FYczl0YUgvMU10WHJIakk5bXNtMlpsN1ByYzJkUjJFNUM2Znh0N3VPQ1ZFeElzendzVHdqb3lSWGlYWWM1SkRJRHhEeUV6VVNENW83bSsyM01aQ0E0THlBcnlqY3lyUFQ5ODM3U1FjbmltN2oyVWNRT1NCcWdGVTRiVjR3QVd3TXFEVW9PU1VLa0Q1OVVrWjdlczdzTGN2VEdnOG4wN295T29pL3h1SmxmR3VUTW12S2hOa0Z2Wk80VUl1UU52MlV4MFFBVXdDVm9JK3FoRjVlUFl3R1U3d0tvY3R2SDhvS3E1YzBmbFFxTkZJTE0vY0RWUGxGSENrVjdtVlE0RGlsZWQwOE1ncnJnZWQ0Y2s4akRibzV6OWtmYTd6RmVTMkQzZ25QMGxTdjNQTFRoQ0dkTHliaUF3TzhraitrY3N6dUs4SnlZNmV3TWlySHdxUEpUOE5UZnRadjVVQXE5ZzNvVnh2SC91OW5INlRVTytZZzVVWGdacXAxeFAxdFpsc1d3WE9VQzl3ay9rMnYzSWwxTzBMejl1Y295cGdEQTErQmkxNzJleE5PZ21KSmdDNWRhbExjZkJPUlJYOFM2OGk5bE1PUXZqMlo1SHMvL0pvMVBGZURRZUcrM3p1czVjbUdQbnUxRzFzaTF2OTh0TWg0RC9mMXord2N2eTVNa0V1UFRRTEIrY0pxa2RSZlpnQUo5SUxmS0pQMllDeTZWK3BTc3k3ZVB0cjBPU2V3aDlSWnBuZEszeWRQV0c1bmMydmpaMG1CWDNWOHlyaTdVMjB6OVBFQVlmcmZjOEF6bGhHVEZkZVd3bmhpQ01jVXpJRDJLSkpobWFlQ3VuVVhaRFNHd0lxYnFLSWZWbWxlVklteUtXSGx0NWVkSzJBUnZjVlpGTlpFYW9aY3FiM2ZVVk9PMVJVVTdQQ00yOVlOdHBsMm9LRnQzWkVtTzdRYXFTL2l1bFprem9CenRaWGhUUTJRTE40Y3NFMjhVMitnU0VmMDBJRXNDL0phRllienc2S1RESzNlYlM0bVNZWk1PYytqLzY0eHI4Vzd4SEM2a2o4Vlg1TFpZbGpBSVRpUFN6S1BTY3AvTzJ4SUNpU2UvM1NKR3pUbUU0MW91Ukllamg2WEFNdE5xNWRUeTVVRFJxaHZSLzA1VklzbDAraHdWaUJNakU4VUhUazJieTlVemluSDRmajZadmJnWGR1OEdFdCtqYjlkTzR4eHNDMDRWUXhzMStzb0xMbkZXZVRsVTh6dEhKNUVBU0wrYkVlN1JVb3lQR3FBK2lmeitOZFBodFFiVkFLWHQ3YTN2dUtXNkZqb05uRnZ0SmZCSlNPMENpOUp4Ym0yZEhodVloQUxJSkh2Z1EweWFMWWdleWxsWjAxSHRESU8veFlCVE5pektMSmdKQ05HN3VQaXg3ZnZxbDZHMTlQWGk4MndSN2NSZUdoMnprelpDcnB5NVpOSDJqcnl2eG5VRVZXb3FFOGczOWNHZEhwVVd2YWRwMjhVMmhJVVNITk51dlVnWkZ3c3pZVHRlSndyb0tLM2FON0xMWjYzYXRlYU1lT2JRb09oakZmMjlxUmU4YXIyRVZqY1g5bHB3dERYSTdsY0NrMGlrNGJqTXBSaTJURWFSWFVhN1RPeCtKUUlFK296WDQ1L05ZUXo2TWFBZXFyM3p0ZGltZEh6U0VkT05oQzFZTEZMUGQyZVdkOFJlRWdUU3lLNlBFN2M2K3pibDYyekwxdDdXQWFVVHFMTEY1Z1JNUWNVR2loKzZ6a09IR0pqdkpmV1lWd1pWZ1VxNE5TVEh4K1VHRjk2a1lJOGExQjllQ2pmUzdSbWJuWHI0Nlo2MDVkQ0ZkdU1VdE9TaFluWWVhOXlXWEptamY2MXhYV05GTTdYSjZDWEZUR3N4SHBQYVBCYWRiODFZaGdPNk9qQXg1b0ZFWGpUVlNsSUwvNDRKd1d2U1dCNi8xSS9Kb21FT2lWNzBwaGZpN1d2cW5nVzdGQjU0UFRqM1htcGxLalYwNDhQQktSZENCc1lxRy9UbUZGWHdpcUIyVjVKNFQ0NXFCNkVqYnhIVHFmRTQ3UlI5QTF5eUQ5TFZRbGhCS0wvY3AzdDg1NkNmM3VxY1ZBbHA5RHRVS3BKLzJLb1VmZVNWVml4clNtODhoRGU4SHVycFlqOVEvWDJ2WVBBNFVZYU92SWJQT2hCQ2NLVFNPVHVCeGdTS294cFFLUmZ5ejFNYXlrOXdiVmcwSmRzMitnK1RNVUFuckZxRVBEbEl5THJmQjJmZW1acFV1ZjE0N1RIN3lib1pOWHJhcnQrOEg0QllWTmFLREh1Mm02c2xyZUYvYmtoejNhMm9lUTZyOVRGWUFXdlJFWGVsSjUwakR1MjdBaE5vM0NJVnhTRjBQWEVXdldCWHl4dUErVGJ6VkdTblBqSDRMQ1dvRzQ3cGxrODRmY0xtMDVxc25oZUN0Qk5RZXNLcUhOQ1hoVC94aWlhay8vY1BHRFMxYjhQdFRYTndnK2lsOURnaTRKcWdqTnRnRjFmeS9aenNNTTBjN0lxL1oybzljdmdsUUc1bi9EMVBaSzdKbjUvcVhKODFkUk5rMDF3RmEwR3FHMXIzdTEzZEJBbjhMeFJncUIzbldKY3pGd1hscjhVYkFKVlZGUlJVbVppQzI2RUlwK2lsdytFTVhrbUJQck0xZmp4NDhFdHlaMlU0bE5FYStNaE1vOWFEOHBmaEZ2ejV6dDExSjJiU0lpWFJ4UTB4WnpjZGc2L2h6NmRndlZHMGtnL2QxbTh1OHh4UUxOQk5MVVlORzY0UFVYOTRaZUNVell4OXRBSUdxTmlxVkw2Q1ZPTDZrT2dZTTNja2RiZTgralZDTll5bWY5S0RoRGl1dXBJaGtuZE51V3VBOWsxQ2Z3L0s0OEtNWmdaV0Y5c3IvMW5kbGIvVDZYMnBKdVM5ck0zL2U0Q3lPNHNvcHFRR3g1ejIrejNZa1BTWmF1MytKQmExK1RXM1BzZHhKZG0zL2wyMDU3NXVTeDU4K25rNTcwb0ZEQnRDTk1TTmNKaVhGT1VVVytORXpITGZWYTVQbTFxUytpalpWaDZpS0VmbjFybFYvanlDSERmRGpXMURZdDNwR054enN5YjFGTXJnTXBiVlhYbHhjTjVzRHpHSU9NWndXbXM3TGRxYitqR3RCMlVhWVBBL05wdnpxZ3EyNHVkS2Qrbmswbnpxc3MwL2thaGU3a2RVb3Z4WUlXdUY5UDEvc0VWenhkK3JGK1M3Ym5mb1FnaDJmVVNwcFkvaC8wLzRybWtCQ1hUQkh2SUF5TFlEOW41NEtzcTEwdUxPSE11QlBGbXAwOUhiSEw2NjBWWkRnaGhobjBYZEJzWDZNcUljR3g3aHROWS9TRkNKRTg3b2Q1NzlqZWowbmlHeTRHc2JHNk45MzJ5WTFmT3k3cVYrOUJsd0dIWi90RENLS3ZNQU5uZ0RwOFBKOXUyNUZMdHoyUlg1ZThEN1RpYzZMWjNJNkpjQ2M2MFNQU3hqOUlMTSt1OW14VmtlZnpqdSszVkVmMkRzamlPdGM3TUwrMXR6bHhHWVdBNkdzOG11ckUwcVU2c3Vka0k4QWdPY3lmSWtkcUNsSHJjZHJTbmJ3SC9iTXE1Q1U5NklmcnFBWTRoRk95NnZlaHMrcUNYUlIzbWczaWF2TE9zNFdsdzdjM0xyU3ZnSUE5ckpUNkpRUnNEL1JkVkJpOHhHQnhnbzVHUVMyZGx1OVdkOGZiYzdlUHZ6anhxOHh0K1ZOU1MvRDRBUUxCczZGQ3o2VlJialJnMmV3Wk1rMWZ6OW5RdWNFZVpiWXNaeTJFUGZ4Umt0RlQ5WlpUenRwaTljYnVXVDg1UHVDYlJWVlU4L3p6Q1VOR05MbVVBMXc1RnM3RUlYdklVa2FVcW9FVzRtWE5xVzlBdVZ3VjZnTEIvWllsMnR1NmNqV2xTRGdrRnJic3BIMm1vazBBZU1zaGpIMWVnbjl1a2xMK3pEREU4N0NmTjhDK3ZBZXIxQ2NnTUhwYmdUYlliWTd0QmNRcVV0TlU5Qm93K04ra0NRRnZVVUoxSHZlT2dHMnRSTEJwTVliV3JxMDVSRW8vNm5vM0VyT25xZW5YVXdDRVZDMEJqeE9PUW5WakkxZzVCSG5ZanJwcVpOajJyanNzdmZqZ0d4citzaWw1VjNEdXhLR2JhcDdsQmtRMFg2WWFjVmkzek5LSWQyVytodWYrT3RVSjJJRnZ6ajZXZUdQbCtUa1gvR0YvZkhuMldyQUVXaUIyVUswUWxKZTJlRHRzMnpBYi8zbHZIZVdTanh6dnlqNk1QbkExcy9CZU4yUWVUdm9HaUJCcHE1cnJkNFVRam04Vk1TTWR3dGxnRExsU1lPeXgvZGowcHY1dmdOZDFwZmRjb2NUS1JHZjJuNmdPaEJaa3M1VHRQekdJRFdRL1RpWEhwNDc5c3dUOXptYkwwM1pMdEdlL2JFazZEWFA5RWFvU2VLcG5iWXZQYkEycklYdzBNaUxEcm11eUlhUTJWOXo0MmFqUlNIZVM3LzJNb0NTdVVKU29zcFdEMjJkRE9DYmw4UFJvYVBJdG40NmRXSjBRcXkvRmwyZHVwem9SMm9HekJkMElyNzhMRHRFK2crVmV5MWFEYklwK0dMVkRHTWFEVEdxbnlXSzNZbU1IUjR2OTM5bVEzNFlnaDJzSGpDUVlaZS9JZGNjZllaWTN3WE83TE14RzM5QUEyeUJsajRELy9EYW9xTUJQNnR2T0wrMmM4eTY5NzV6TjZqb3BTbnk1NTM0UUVPRHRlTG83NHgwOVh3NnpxMUVZU0krODRRVWRQZGxzT3JVU21zUmxReG54N2x3Ni9wVkVSLzQ1dDJ1RnovZHdHbjZmU0pXMUk5bVJsd3h6d1dHNzY2MTI0Yk5RT01pTFExYlVETVV0aWVXNW9LeTNVSENtY2RwWVdseEZTaXpGUUMvVjNXaVgwbERFU0VMVXFDN1NxNHdxN1dlcXdOWVlkT1ZKcWJaVjVMOGhYNkk5L3lvT1Y4Q211bXBHeThCYllEdWVpcVpUVW81ODV3Wkh6MFlNZmJjdHhQUEN0cDVPMUxpM2NLeGpzMDc5MDlzRlhLMDNOd1NUZ1B2d0c2RTVXdlE5ZENJUXVOZkhhYmI5SC9GbEU1c1FaQmplSzVscW91L0xmcjRDUy95eWlxSUc5T2NxSER0ZHIyTitDcjMvTVdGelFrZ3hYYWQwanB6SHV5REtpc2pkOHhRR0FvRU9kcHp6Mm1aQWEvbkFkRjVtSXk1Q1pzcmhIZDVYU0tmZUcxUlA2WndabmY2cWM3QjFGSWNaZWxYcWJkVTA3ZnJYaVk3Tnp6bTFoUlE4RVFrcDNCQSs3MjgwRFBuejBiK1RDdjJCS1E3aEJub0NZQ3ZweWNHV05GMTM4aFowZDdlelZIUVUxaVRQaVhWbEhTSHhVVDY3YXE2MUVwWXdzNUZLNjQ2RjYyNVRxRFVzUWdpeW5raFY3TWVVRENNa1l2d1BQUElEdEhrei9wbU5GYjEweG1Fakd5RjJ3UW1EcUQxWXU2UDFad1RCeFpmOHl1TjZkeVhCMzNZdE5NVWRwZDB0SndsTlV1NXhKaUt4MmZOZDV6MWw2TDBxK0JVNmpBQ2RXUXFuT3pUeS9JNmVwMkVQM1FWaXZKTkxpZGFsL3pwQWYwVXRkSzR5bG9OU2dqWWZlakZoam4yemR1aWNJS09lRFZmK3I4RzJ1UWo3MnhxTnRnMWlhYldnNlBxZ05YNEdjMmhqMFBYU0dyNEZQTzI3cWNKK1J4dHZOZ2RLZTE1TTVPNmloekMzNGRYZEJTdXBFNUhLOS9HWVdkSzhaWUpyTSszR080NEdqTmlDT1RPSWFLbERhSXVOeHIzbWtIMDZMSUJGZ3FnNjhya0d4STVhQ0RzLzc3MEk2Qzhyd0J2TlVlYVFzdnVOQVZXVTNCQWJIcDVvRy9MUEFUcjFjV2JMakpuRkljdHNicURCSWdJSUM2WXY3Z3NUTVIxRGJtM3FQUWprL05DbGFKdmNPM1JpNjJWYkp6d251SFRmZE9wM0VJSTNqRCtIaDU0L2tqYjZSeFFlT2VGb1lRN09HYlpwVUJsU1RUZlU4SnltMU01cTNuRXljV1JzQ3pxRkVncnA1RnE0MFE0SEQ5cnZIckEwNGZlMnF3TDU5YW4xZWtQenN2c05tdkhZdTRKenBJOGtIUGFBeUJTOHNUODY3ZjE2WjhuSzh6QXhyc3F0aXkraFNZQ3kyQ0d3Vm5PeHVxMkZqZ0FjOXYrZWJBcmVlUDI1TCsvS3IwOStIRHhtWlJBSGpLU3ArZWJBemRLckJjTGQzMklGN3A5R05qWTBoVko3OTdWTTZCY2hod05UcHNVUmlQeTY1RDNrRWgxRGFQcDlvQS92b3lrNE1HVmFISUZReEorQ2puSDgxOFJTeU51Zld6Ty92di9nNTg4VVU0SjhCQUphZDQ5dHF5dHBKQmRqL045cGMyWGtVelFGQi80WDhtWHhvZHVabXBrQUFBQUFTVVZPUks1Q1lJST1cIiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3csIGxvY2FsZSB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKS5tYXAoZXNjYXBlUGF0aERlbGltaXRlcnMpLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SID0gJ1NTRyBEYXRhIE5PVF9GT1VORCdcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAvLyBUT0RPOiBoYW5kbGUgcmVsb2FkaW5nIGluIGRldmVsb3BtZW50IGZyb20gZmFsbGJhY2sgcmV0dXJuaW5nIDIwMFxuICAgICAgICAvLyB0byBvbi1kZW1hbmQtZW50cnktaGFuZGxlciBjYXVzaW5nIGl0IHRvIHJlbG9hZCBwZXJpb2RpY2FsbHlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFNTR19EQVRBX05PVF9GT1VORF9FUlJPUilcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7XG4gICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgsXG4gICAgICB9ID0gcmVxdWlyZSgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKSBhcyB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCcpXG5cbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKGFzLCB0aGlzLmxvY2FsZXMpXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICB1cmwgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbiwgb3B0aW9ucylcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgYWRkTG9jYWxlKGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcbiAgICAgIGNvbnN0IHNzZzQwNCA9IGVyci5tZXNzYWdlID09PSBTU0dfREFUQV9OT1RfRk9VTkRfRVJST1JcblxuICAgICAgaWYgKHNzZzQwNCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxldCBtb2Q6IGFueVxuICAgICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzLCBtb2QgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgICAnLzQwNCdcbiAgICAgICAgICApKVxuXG4gICAgICAgICAgLy8gVE9ETzogc2hvdWxkIHdlIHRvbGVyYXRlIHRoZXNlIHByb3BzIG1pc3NpbmcgYW5kIHN0aWxsIHJlbmRlciB0aGVcbiAgICAgICAgICAvLyBwYWdlIGluc3RlYWQgb2YgZmFsbGluZyBiYWNrIHRvIF9lcnJvcj9cbiAgICAgICAgICBpZiAobW9kICYmIG1vZC5fX05fU1NHKSB7XG4gICAgICAgICAgICBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZignLzQwNCcsICcvNDA0JywgdHJ1ZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChfZXJyKSB7XG4gICAgICAgICAgLy8gbm9uLWZhdGFsIGZhbGxiYWNrIHRvIF9lcnJvclxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycjogc3NnNDA0ID8gdW5kZWZpbmVkIDogZXJyLFxuICAgICAgICBlcnJvcjogc3NnNDA0ID8gdW5kZWZpbmVkIDogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEoXG4gICAgICAgIHVybCxcbiAgICAgICAgYXNQYXRoLFxuICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBlc2NhcGUgZGVsaW1pdGVycyB1c2VkIGJ5IHBhdGgtdG8tcmVnZXhwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVQYXRoRGVsaW1pdGVycyhzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9bLyM/XS9nLCAoY2hhcjogc3RyaW5nKSA9PiBlbmNvZGVVUklDb21wb25lbnQoY2hhcikpXG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtkZXN0aW5hdGlvbkNvbXBpbGVyKFxuICAgICAgcGFyYW1zXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChhc1BhdGgpKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgSGVhZEVudHJ5ID0gW3N0cmluZywgeyBba2V5OiBzdHJpbmddOiBhbnkgfV1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGhlYWQ6IEhlYWRFbnRyeVtdXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIENvbCwgUm93LCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgSWxsdXN0cmF0aW9uMSBmcm9tICcuLi9pbWFnZXMvaWxsdXN0cmF0aW9ucy9pbGx1c3RyYXRpb24xLnN2ZydcclxuaW1wb3J0IHsgRmFGbGFnLCBGYVN0YXIsIEZhRXllIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcbmltcG9ydCBGb3VuZGVyIGZyb20gJy4uL2ltYWdlcy9pbGx1c3RyYXRpb25zL2x1Y2lhbm8ucG5nJ1xyXG5pbXBvcnQgSGVhZFNlbyBmcm9tICcuLi9jb21wb25lbnRzL2hlYWQnXHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5pbXBvcnQgQnV0dG9uV2hhdHNhcHAgZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b25XaGF0c2FwcCdcclxuXHJcbmZ1bmN0aW9uIEFib3V0KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZFNlbyB0aXRsZT17J0Vjb3JhaXogfCBTb2JyZSd9IC8+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdhYm91dCc+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3NlY3Rpb24xIGlsbHVzdHJhdGlvbi1icmFuY2gtbGVmdCBpbGx1c3RyYXRpb24tYnJhbmNoLWxlZnQtd2hpdGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbGx1c3RyYXRpb24tYnJhbmNoLXdoaXRlJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPSd0aXRsZSB0aXRsZS1iaWcgdGV4dC13aGl0ZSc+U29icmUgbsOzczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3BhcmFncmFwaCBwLWJpZyB0ZXh0LXdoaXRlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWlzIHF1ZSB1bWEgZW1wcmVzYSEgVW1hIGFtaWdhIHF1ZSBzZSBwcmVvY3VwYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tIGEgcXVhbGlkYWRlIGRlIHNldSBwcm9kdXRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdzZWN0aW9uMic+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBsZz17Nn0gbWQ9ezEyfSBjbGFzc05hbWU9J2ZpcnN0LWNvbHVtbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT0ndGl0bGUgdGl0bGUtYmlnIGNvbG9yLWJsYWNrICc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3BhcmFncmFwaCBwLWJpZyc+SGlzdMOzcmlhPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbnRhIHF1ZSBsw6EgdmVtICA8c3BhbiBjbGFzc05hbWU9J2NvbG9yLXByaW1hcnknPmhpc3TDs3JpYSE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncGFyYWdyYXBoIGNvbG9yLWdyZXknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm8gYW5vIGRlIDE5NzksIG8gRnVuZGFkb3IgUGF1bG8gQ2F2YWxjYW50aSBkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxidXF1ZXJxdWUgZGVzYnJhdm91IHRlcnJhcyBkYSByZWdpw6NvLCBob2plIGRlbm9taW5hZGEgRmF6ZW5kYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFtYXRhbmR1YmEsIGxvY2FsaXphZGEgZW0gUGVkcm8gVmVsaG8g4oCTIFJOLiBTZW5kbyB1bSBkb3MgcGlvbmVpcm9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9kdXRvcmVzIGRvIFNldG9yIENhbmF2aWVpcm8uIEVtIDIwMTUgaW5pY2lvdS1zZSB1bWEgRGl2ZXJzaWZpY2HDp8Ojb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFzIEN1bHR1cmFzLCBuYXNjZW5kbyBlbSAyMDIwIGEgRWNvcmFpeiBBZ3JvaW5kw7pzdHJpYS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBsZz17Nn0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nZC1ibG9jayBtLWF1dG8nIHNyYz17SWxsdXN0cmF0aW9uMX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdzZWN0aW9uMyBpbGx1c3RyYXRpb24tbGluZS1yaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBsZz17Nn0gbWQ9ezEyfSBjbGFzc05hbWU9J2NhcmRzLWdvYWxzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1nb2Fscyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUZsYWcgc2l6ZT17MjV9IGNsYXNzTmFtZT0nY29sb3Itc2Vjb25kIG1iLTQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9J3RpdGxlIHRpbGUtbGl0dGxlIGNvbG9yLWJsYWNrJz5NaXNzw6NvPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcC1tZWRpdW0gY29sb3ItZ3JleSc+UHJvZHV6aXIgZSBEaXN0cmlidWlyIFByb2R1dG9zIGUgU2VydmnDp29zIGRlIFF1YWxpZGFkZSwgYXRlbmRlbmRvIGFzIGV4cGVjdGF0aXZhcyBkb3Mgbm9zc29zIGNsaWVudGVzIGUgcGFyY2Vpcm9zLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtZ29hbHMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFTdGFyIHNpemU9ezI1fSBjbGFzc05hbWU9J2NvbG9yLXNlY29uZCBtYi00JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPSd0aXRsZSB0aWxlLWxpdHRsZSBjb2xvci1ibGFjayc+VmFsb3JlczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncGFyYWdyYXBoIHAtbWVkaXVtIGNvbG9yLWdyZXknPsOJdGljYSwgVHJhbnNwYXLDqm5jaWEgZSBSZXNwZWl0byBjb20gQ2xpZW50ZXMsIENvbGFib3JhZG9yZXMsIFBhcmNlaXJvcyBlIE1laW8gQW1iaWVudGUuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1nb2Fscyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUV5ZSBzaXplPXsyNX0gY2xhc3NOYW1lPSdjb2xvci1zZWNvbmQgbWItNCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT0ndGl0bGUgdGlsZS1saXR0bGUgY29sb3ItYmxhY2snPlZpc8OjbzwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncGFyYWdyYXBoIHAtbWVkaXVtIGNvbG9yLWdyZXknPlNlciByZWNvbmhlY2lkYSBjb21vIHVtYSBFbXByZXNhIGRlIFJlZmVyw6puY2lhIG5vIG1lcmNhZG8gY29tIGFsdG8gcGFkcsOjbyBkZSBRdWFsaWRhZGUuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IGxnPXs2fSBtZD17MTJ9IGNsYXNzTmFtZT0nc2Vjb25kLWNvbHVtbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT0ndGl0bGUgdGl0bGUtYmlnIGNvbG9yLWJsYWNrICc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3BhcmFncmFwaCBwLWJpZyc+T2JqZXRpdm9zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlIGZvciBwcmEgZmF6ZXIsIGZhemVtb3MgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NvbG9yLXNlY29uZCc+YmVtIGZlaXRvITwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdwYXJhZ3JhcGggY29sb3ItZ3JleSAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT24gdGhlIG90aGVyIGhhbmQsIHdlIGRlbm91bmNlIHdpdGggcmlnaHRlb3VzIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGlnbmF0aW9uIGFuZCBkaXNsaWtlIG1lbiB3aG8gYXJlIHNvIGJlZ3VpbGVkIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBkZW1vcmFsaXplZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5IHRoZSBjaGFybXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT0nYnQtc3RhbmRhcmQgYnQtc3RhbmRhcmQtc2Vjb25kJz5Qcm9kdXRvPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nc2VjdGlvbjQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gbGc9ezZ9IG1kPXsxMn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3VuZGVyIGQtYmxvY2sgbS1hdXRvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0ZvdW5kZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBsZz17Nn0gbWQ9ezEyfSBjbGFzc05hbWU9J3NlY29uZC1jb2x1bW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9J3RpdGxlIHRpdGxlLWJpZyBjb2xvci1ibGFjayAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwYXJhZ3JhcGggcC1iaWcnPiA8c3BhbiBjbGFzc05hbWU9J3RpdGxlJz4gTHVjaWFubyA8L3NwYW4+IC0gRnVuZGFkb3IgZGEgRWNvcmFpejwvc3Bhbj4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigJxGb3LDp2EsIEZvY28sIEbDqSBlIDxzcGFuIGNsYXNzTmFtZT0nY29sb3ItcHJpbWFyeSc+VHJhYmFsaG88L3NwYW4+4oCdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdwYXJhZ3JhcGggY29sb3ItZ3JleSAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgT24gdGhlIG90aGVyIGhhbmQsIHdlIGRlbm91bmNlIHdpdGggcmlnaHRlb3VzPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGlnbmF0aW9uIGFuZCBkaXNsaWtlIG1lbiB3aG8gYXJlIHNvIGJlZ3VpbGVkPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBkZW1vcmFsaXplZCBieSB0aGUgY2hhcm1zLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbldoYXRzYXBwIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9