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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/blog.js");
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

/***/ "./images/blog/blog1.png":
/*!*******************************!*\
  !*** ./images/blog/blog1.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blog1-8b0adc095663fb3d38d8f3c87eb1b087.png";

/***/ }),

/***/ "./images/blog/blog2.png":
/*!*******************************!*\
  !*** ./images/blog/blog2.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blog2-5ac9ab17d9461d1a7ef1daf42b237c5b.png";

/***/ }),

/***/ "./images/blog/blog3.png":
/*!*******************************!*\
  !*** ./images/blog/blog3.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blog3-b85f6383253d5dc4d1abad6614606cfc.png";

/***/ }),

/***/ "./images/blog/blog4.png":
/*!*******************************!*\
  !*** ./images/blog/blog4.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blog4-0f7b008df9f85a647c93c9e47565d976.png";

/***/ }),

/***/ "./images/blog/blog5.png":
/*!*******************************!*\
  !*** ./images/blog/blog5.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blog5-a7e3688dda22cf442c90a035e650f0c3.png";

/***/ }),

/***/ "./images/blog/blog6.png":
/*!*******************************!*\
  !*** ./images/blog/blog6.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blog6-21f4d690629da82f430e033294d45361.png";

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

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_buttonWhatsapp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/buttonWhatsapp */ "./components/buttonWhatsapp.js");

var _jsxFileName = "C:\\Users\\conta\\Desktop\\EcoraizNext\\frontEnd\\pages\\blog.js";








function Filter() {
  var button_show_elements = document.querySelectorAll('.blog-categories .bt-standard');
  var categories_elements = document.querySelectorAll('.blog-card');
  button_show_elements.forEach(element => {
    let button_data = element.getAttribute('data-show-category');
    element.addEventListener('click', () => {
      categories_elements.forEach(el => {
        el.classList.remove('effectShow');

        if (button_data == 'todos') {
          el.classList.add('effectShow');
        }
      });
      let div_show = document.querySelectorAll(`.${button_data}`);
      div_show.forEach(element_show => {
        element_show.classList.add('effectShow');
      });
    });
  });
}

function ActiveButton() {
  var buttons = document.querySelectorAll(`.blog-categories .bt-standard`);
  buttons.forEach(element => {
    element.addEventListener('click', () => {
      for (var i = 0; i <= buttons.length - 1; i++) {
        buttons[i].classList.remove('activeButton');
      }

      element.classList.add('activeButton');
    });
  });
}

const Blog = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    ActiveButton();
    Filter();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_head__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: 'Ecoraiz | Blog'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_header__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      id: "blog",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "blog-categories",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              "data-show-category": "todos",
              className: "bt-standard bg-color-second activeButton",
              children: "Todos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              "data-show-category": "curiosidades",
              className: "bt-standard bg-color-second",
              children: "Curiosidades"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              "data-show-category": "novidades",
              className: "bt-standard bg-color-second",
              children: "Novidades"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              "data-show-category": "receitas",
              className: "bt-standard bg-color-second",
              children: "Receitas"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "posts-area",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
              className: "effectShow blog-card receitas",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-img-top",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: __webpack_require__(/*! ../images/blog/blog1.png */ "./images/blog/blog1.png")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "category text-white",
                  children: "Receitas"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, {
                  className: "color-black title title-little",
                  children: "Comida org\xE2nica: 9 receitas com ingredientes sustent\xE1veis"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
                  className: "paragraph p-medium color-grey",
                  children: "Some quick example text to build on the card title and make up the bulk of the card's content."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "blog-card-footer",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-clock",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaClock"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 92,
                      columnNumber: 45
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "12:44"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 93,
                      columnNumber: 45
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 41
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-calendar",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaCalendarAlt"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 96,
                      columnNumber: 45
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "09/12/2020"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 97,
                      columnNumber: 45
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 41
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
              className: "effectShow blog-card receitas",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-img-top",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: __webpack_require__(/*! ../images/blog/blog2.png */ "./images/blog/blog2.png")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "category text-white",
                  children: "Receitas"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, {
                  className: "color-black title title-little",
                  children: "Mandioca: conhe\xE7a 9 benef\xEDcios desse alimento"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
                  className: "paragraph p-medium color-grey",
                  children: "Some quick example text to build on the card title and make up the bulk of the card's content."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "blog-card-footer",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-clock",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaClock"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 117,
                      columnNumber: 45
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "12:44"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 118,
                      columnNumber: 45
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 116,
                    columnNumber: 41
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-calendar",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaCalendarAlt"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 121,
                      columnNumber: 45
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "09/12/2020"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 122,
                      columnNumber: 45
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 41
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
              className: "effectShow blog-card curiosidades",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-img-top",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: __webpack_require__(/*! ../images/blog/blog3.png */ "./images/blog/blog3.png")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "category text-white",
                  children: "Curiosidades"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, {
                  className: "color-black title title-little",
                  children: "Por que consumir alimentos org\xE2nicos?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
                  className: "paragraph p-medium color-grey",
                  children: "Some quick example text to build on the card title and make up the bulk of the card's content."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "blog-card-footer",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-clock",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaClock"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 142,
                      columnNumber: 45
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "12:44"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 143,
                      columnNumber: 45
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 41
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-calendar",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaCalendarAlt"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 146,
                      columnNumber: 45
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "09/12/2020"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 147,
                      columnNumber: 45
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 145,
                    columnNumber: 41
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
              className: "effectShow blog-card receitas",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-img-top",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: __webpack_require__(/*! ../images/blog/blog4.png */ "./images/blog/blog4.png")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "category text-white",
                  children: "Receitas"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, {
                  className: "color-black title title-little",
                  children: "9 receitas vegetarianas e veganas perfeitas..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
                  className: "paragraph p-medium color-grey",
                  children: "Some quick example text to build on the card title and make up the bulk of the card's content."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "blog-card-footer",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-clock",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaClock"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 167,
                      columnNumber: 45
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "12:44"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 168,
                      columnNumber: 45
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 166,
                    columnNumber: 41
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-calendar",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaCalendarAlt"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 171,
                      columnNumber: 45
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "09/12/2020"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 172,
                      columnNumber: 45
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 170,
                    columnNumber: 41
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
              className: "effectShow blog-card novidades",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-img-top",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: __webpack_require__(/*! ../images/blog/blog5.png */ "./images/blog/blog5.png")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "category text-white",
                  children: "Novidades"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, {
                  className: "color-black title title-little",
                  children: "Conhe\xE7a a fazenda tamatanduba"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 185,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
                  className: "paragraph p-medium color-grey",
                  children: "Some quick example text to build on the card title and make up the bulk of the card's content."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "blog-card-footer",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-clock",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaClock"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 192,
                      columnNumber: 45
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "12:44"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 193,
                      columnNumber: 45
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 191,
                    columnNumber: 41
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-calendar",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaCalendarAlt"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 196,
                      columnNumber: 45
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "09/12/2020"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 197,
                      columnNumber: 45
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 195,
                    columnNumber: 41
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 190,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
              className: "effectShow blog-card",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-img-top",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: __webpack_require__(/*! ../images/blog/blog6.png */ "./images/blog/blog6.png")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 205,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "category text-white",
                  children: "Receitas"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 206,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, {
                  className: "color-black title title-little",
                  children: "Comida org\xE2nica: 9 receitas com ingredientes sustent\xE1veis"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
                  className: "paragraph p-medium color-grey",
                  children: "Some quick example text to build on the card title and make up the bulk of the card's content."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "blog-card-footer",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-clock",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaClock"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 217,
                      columnNumber: 45
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "12:44"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 218,
                      columnNumber: 45
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 216,
                    columnNumber: 41
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-calendar",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaCalendarAlt"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 221,
                      columnNumber: 45
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "09/12/2020"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 222,
                      columnNumber: 45
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 220,
                    columnNumber: 41
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 215,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_buttonWhatsapp__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Blog);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9uV2hhdHNhcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2ltYWdlcy9ibG9nL2Jsb2cxLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvYmxvZy9ibG9nMi5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Jsb2cvYmxvZzMucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9ibG9nL2Jsb2c0LnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvYmxvZy9ibG9nNS5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Jsb2cvYmxvZzYucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9jb3B5cmlnaHQvbG9nb192aWJlY3JpYXRpdmEucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLTExNHgxMTQucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLTEyMHgxMjAucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLTE0NHgxNDQucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLTE1MngxNTIucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLTU3eDU3LnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi02MHg2MC5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Zhdmljb25zL2FwcGxlLXRvdWNoLWljb24tNzJ4NzIucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLTc2eDc2LnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvZmF2aWNvbnMvZmF2aWNvbi0xMjgucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9mYXZpY29ucy9mYXZpY29uLTE2eDE2LnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvZmF2aWNvbnMvZmF2aWNvbi0xOTZ4MTk2LnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvZmF2aWNvbnMvZmF2aWNvbi0zMngzMi5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Zhdmljb25zL2Zhdmljb24tOTZ4OTYucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9sb2dvL2xvZ29QcmltYXJ5LnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvbG9nby9sb2dvU2Vjb25kLnBuZyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQnV0dG9uV2hhdHNhcHAiLCJGb290ZXIiLCJMb2dvU2Vjb25kIiwiTG9nb1ZpYmVDcmlhdGl2YSIsIkhlYWRTZW8iLCJwcm9wcyIsInJlcXVpcmUiLCJ0aXRsZSIsIkhlYWRlciIsInNob3dNZW51TW9iaWxlIiwibWVudV9idXR0b25fbW9iaWxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwic3R5bGUiLCJhZGQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc0FjdGl2ZSIsInJvdXRlIiwicGF0aG5hbWUiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwiZXJyIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInJlc29sdmVkQXMiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJ2YWx1ZSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsInJlc29sdmVBcyIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORF9FUlJPUiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJsb2NhbGVzIiwiZGVmYXVsdExvY2FsZSIsInN0YXRlIiwib3B0aW9ucyIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJwcmVwYXJlVXJsQXMiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwicGFyc2VkIiwibWV0aG9kIiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJhcHBDb21wIiwiZXJyb3IiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJzc2c0MDQiLCJwYWdlIiwibW9kIiwiY2FjaGVkUm91dGVJbmZvIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJQcm9taXNlIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsImRhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzZWdtZW50IiwiY2hhciIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInZhbGlkYXRlIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5Iiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkZpbHRlciIsImJ1dHRvbl9zaG93X2VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNhdGVnb3JpZXNfZWxlbWVudHMiLCJmb3JFYWNoIiwiZWxlbWVudCIsImJ1dHRvbl9kYXRhIiwiZ2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpdl9zaG93IiwiZWxlbWVudF9zaG93IiwiQWN0aXZlQnV0dG9uIiwiYnV0dG9ucyIsImxlbmd0aCIsIkJsb2ciLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7QUFFQSxTQUFTQSxjQUFULEdBQXlCO0FBQ3JCLHNCQUNJO0FBQVEsYUFBUyxFQUFDLFdBQWxCO0FBQUEsaURBRUkscUVBQUMseURBQUQ7QUFBWSxVQUFJLEVBQUUsRUFBbEI7QUFBc0IsZUFBUyxFQUFDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFE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QUksRUFBRTtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURKLGVBRUk7QUFBTSwrQkFBUyxFQUFDLCtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBOUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixlQThLSSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlLSixlQStLSSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9LSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQW1MSCxDQTFMRDs7QUE0TGU0VSxtRUFBZixFOzs7Ozs7Ozs7OztBQzVPQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9ibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9ibG9nLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGYVdoYXRzYXBwIH0gIGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5cclxuZnVuY3Rpb24gQnV0dG9uV2hhdHNhcHAoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uV3BwJz5cclxuICAgICAgICAgICAgRmFsYXIgbm8gd2hhdHNhcHBcclxuICAgICAgICAgICAgPEZhV2hhdHNhcHAgc2l6ZT17MjB9IGNsYXNzTmFtZT0nbWwtMicgLz4gICAgXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25XaGF0c2FwcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgRmFGYWNlYm9va0YsIEZhSW5zdGFncmFtLCBGYVlvdXR1YmUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCBMb2dvU2Vjb25kIGZyb20gJy4uL2ltYWdlcy9sb2dvL2xvZ29TZWNvbmQucG5nJztcclxuaW1wb3J0IExvZ29WaWJlQ3JpYXRpdmEgZnJvbSAnLi4vaW1hZ2VzL2NvcHlyaWdodC9sb2dvX3ZpYmVjcmlhdGl2YS5wbmcnO1xyXG5cclxuZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gbGc9ezEyfSBtZD17MTJ9IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17TG9nb1NlY29uZH0gYWx0PScnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IGxnPXsxMn0gbWQ9ezEyfSBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc29jaWFsLW1lZGlhcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUZhY2Vib29rRiBzaXplPXsxNX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9Jyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhSW5zdGFncmFtIHNpemU9ezE1fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFZb3V0dWJlIHNpemU9ezE1fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9J210LTUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezR9IHhzPScxMicgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gPGg1IGNsYXNzTmFtZT0ndGl0bGUgdGl0bGUtbGl0dGxlIGNvbG9yLWJsYWNrJz5JbnN0aXR1Y2lvbmFsPC9oNT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ncGFyYWdyYXBoIHAtbWVkaXVtJz48YSBjbGFzc05hbWU9J2NvbG9yLWdyZXknIGhyZWY9Jyc+U29icmUgbsOzczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ncGFyYWdyYXBoIHAtbWVkaXVtJz48YSBjbGFzc05hbWU9J2NvbG9yLWdyZXknIGhyZWY9Jyc+QmxvZzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezR9IHhzPScxMicgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aDUgY2xhc3NOYW1lPSd0aXRsZSB0aXRsZS1saXR0bGUgY29sb3ItYmxhY2snPk3DrWRpYXMgc29jaWFpczwvaDU+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3BhcmFncmFwaCBwLW1lZGl1bSc+PGEgY2xhc3NOYW1lPSdjb2xvci1ncmV5JyBocmVmPScnPkZhY2Vib29rPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcC1tZWRpdW0nPjxhIGNsYXNzTmFtZT0nY29sb3ItZ3JleScgaHJlZj0nJz5JbnN0YWdyYW08L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXs0fSB4cz0nMTInIGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGg1IGNsYXNzTmFtZT0ndGl0bGUgdGl0bGUtbGl0dGxlIGNvbG9yLWJsYWNrJz5Db250YXRvczwvaDU+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3BhcmFncmFwaCBwLW1lZGl1bSc+PGEgY2xhc3NOYW1lPSdjb2xvci1ncmV5JyBocmVmPScnPkZhbGUgY29ub3NjbzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ncGFyYWdyYXBoIHAtbWVkaXVtJz48YSBjbGFzc05hbWU9J2NvbG9yLWdyZXknIGhyZWY9Jyc+KDg0KSA5ODg0NS01MjIzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcC1tZWRpdW0nPjxhIGNsYXNzTmFtZT0nY29sb3ItZ3JleScgaHJlZj0nJz4oODQpIDM2NjItNTU2NjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezEyfSBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwYXJhZ3JhcGggcC1tZWRpdW0gY29sb3ItZ3JleSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGYXplbmRhIFRhbWF0YW5kdWJhIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUFIgLyBOSVJGIDUwNjU1Nzc5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsxMn0gY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC01IG1iLTUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtMb2dvVmliZUNyaWF0aXZhfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9mb290ZXIgPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmZ1bmN0aW9uIEhlYWRTZW8ocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbi1wcmVjb21wb3NlZCcgc2l6ZXM9JzU3eDU3JyBocmVmPXtyZXF1aXJlKCcuLi9pbWFnZXMvZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi01N3g1Ny5wbmcnKX0gLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uLXByZWNvbXBvc2VkJyBzaXplcz0nMTE0eDExNCcgaHJlZj17cmVxdWlyZSgnLi4vaW1hZ2VzL2Zhdmljb25zL2FwcGxlLXRvdWNoLWljb24tMTE0eDExNC5wbmcnKX0gLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uLXByZWNvbXBvc2VkJyBzaXplcz0nNzJ4NzInIGhyZWY9e3JlcXVpcmUoJy4uL2ltYWdlcy9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLTcyeDcyLnBuZycpfSAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24tcHJlY29tcG9zZWQnIHNpemVzPScxNDR4MTQ0JyBocmVmPXtyZXF1aXJlKCcuLi9pbWFnZXMvZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xNDR4MTQ0LnBuZycpfSAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9J2FwcGxlLXRvdWNoLWljb24tcHJlY29tcG9zZWQnIHNpemVzPSc2MHg2MCcgaHJlZj17cmVxdWlyZSgnLi4vaW1hZ2VzL2Zhdmljb25zL2FwcGxlLXRvdWNoLWljb24tNjB4NjAucG5nJyl9IC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbi1wcmVjb21wb3NlZCcgc2l6ZXM9JzEyMHgxMjAnIGhyZWY9e3JlcXVpcmUoJy4uL2ltYWdlcy9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLTEyMHgxMjAucG5nJyl9IC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbi1wcmVjb21wb3NlZCcgc2l6ZXM9Jzc2eDc2JyBocmVmPXtyZXF1aXJlKCcuLi9pbWFnZXMvZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi03Nng3Ni5wbmcnKX0gLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uLXByZWNvbXBvc2VkJyBzaXplcz0nMTUyeDE1MicgaHJlZj17cmVxdWlyZSgnLi4vaW1hZ2VzL2Zhdmljb25zL2FwcGxlLXRvdWNoLWljb24tMTUyeDE1Mi5wbmcnKX0gLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPSdpY29uJyB0eXBlPSdpbWFnZS9wbmcnIGhyZWY9e3JlcXVpcmUoJy4uL2ltYWdlcy9mYXZpY29ucy9mYXZpY29uLTE5NngxOTYucG5nJyl9IHNpemVzPScxOTZ4MTk2JyAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9J2ljb24nIHR5cGU9J2ltYWdlL3BuZycgaHJlZj17cmVxdWlyZSgnLi4vaW1hZ2VzL2Zhdmljb25zL2Zhdmljb24tOTZ4OTYucG5nJyl9IHNpemVzPSc5Nng5NicgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPSdpY29uJyB0eXBlPSdpbWFnZS9wbmcnIGhyZWY9e3JlcXVpcmUoJy4uL2ltYWdlcy9mYXZpY29ucy9mYXZpY29uLTMyeDMyLnBuZycpfSBzaXplcz0nMzJ4MzInIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD0naWNvbicgdHlwZT0naW1hZ2UvcG5nJyBocmVmPXtyZXF1aXJlKCcuLi9pbWFnZXMvZmF2aWNvbnMvZmF2aWNvbi0xNngxNi5wbmcnKX0gc2l6ZXM9JzE2eDE2JyAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9J2ljb24nIHR5cGU9J2ltYWdlL3BuZycgaHJlZj17cmVxdWlyZSgnLi4vaW1hZ2VzL2Zhdmljb25zL2Zhdmljb24tMTI4LnBuZycpfSBzaXplcz0nMTI4eDEyOCcgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0nYXBwbGljYXRpb24tbmFtZScgY29udGVudD0nJm5ic3A7JyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdtc2FwcGxpY2F0aW9uLVRpbGVDb2xvcicgY29udGVudD0nIzAwNkVDQicgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0nbXNhcHBsaWNhdGlvbi1UaWxlSW1hZ2UnIGNvbnRlbnQ9J21zdGlsZS0xNDR4MTQ0LnBuZycgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0nbXNhcHBsaWNhdGlvbi1zcXVhcmU3MHg3MGxvZ28nIGNvbnRlbnQ9J21zdGlsZS03MHg3MC5wbmcnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J21zYXBwbGljYXRpb24tc3F1YXJlMTUweDE1MGxvZ28nIGNvbnRlbnQ9J21zdGlsZS0xNTB4MTUwLnBuZycgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0nbXNhcHBsaWNhdGlvbi13aWRlMzEweDE1MGxvZ28nIGNvbnRlbnQ9J21zdGlsZS0zMTB4MTUwLnBuZycgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0nbXNhcHBsaWNhdGlvbi1zcXVhcmUzMTB4MzEwbG9nbycgY29udGVudD0nbXN0aWxlLTMxMHgzMTAucG5nJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBodHRwLWVxdWl2PSdDb250ZW50LVR5cGUnIGNvbnRlbnQ9J3RleHQvaHRtbDtjaGFyc2V0PVVURi04JyAvPlxyXG5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J0VtcHJlc2EgZXNwZWNpYWxpemFkYSBuYSBjb21lcmNpYWxpemHDp8OjbyBlIGNvbnN1bHRvcmlhIG5vIHNlZ21lbnRvIGRlIHBsYW5vcyBkZSBzYcO6ZGUgbm8gUmlvIEdyYW5kZSBkbyBOb3J0ZSBlIFBlcm5hbWJ1Y28uJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdrZXl3b3JkcycgY29udGVudD0nY29ycmV0b3JhLGNvbXBhcmUsc2HDumRlLHBsYW5vcyxvZG9udG8sYW5zLG5hdGFsLHJlY2lmZSxQRSxSTixhbWlsLHVuaW1lZCxicmFkZXNjbyxoYXB2aWRhJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdhdWRpZW5jZScgY29udGVudD0nQWxsJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdVUkwnIGNvbnRlbnQ9JycgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0ncmF0aW5nJyBjb250ZW50PSdHZW5lcmFsJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdvYmplY3RUeXBlJyBjb250ZW50PSdEb2N1bWVudCcgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0nZ29vZ2xlYm90JyBjb250ZW50PSdpbmRleCwgZm9sbG93JyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdyb2JvdHMnIGNvbnRlbnQ9J2luZGV4LCBmb2xsb3csYWxsJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdyZXZpc2l0LWFmdGVyJyBjb250ZW50PSc3IERheXMnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J3JldmlzaXQnIGNvbnRlbnQ9JzcgZGF5cycgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0nY2xhc3NpZmljYXRpb24nIENPTlRFTlQ9J0VuZ2VuaGFyaWEnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J3Jlc291cmNlLXR5cGUnIENPTlRFTlQ9J2RvY3VtZW50JyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdyb2JvdHMnIENPTlRFTlQ9J2luZGV4ICBmb2xsb3cnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9J2dsb2JhbCcgbmFtZT0nZGlzdHJpYnV0aW9uJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdkaXN0cmlidXRpb24nIGNvbnRlbnQ9J2dsb2JhbCcgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0nR29vZ2xlYm90JyBjb250ZW50PSdhbGwnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J3JvYm90cycgY29udGVudD0naW5kZXggZm9sbG93JyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdhdXRob3InIGNvbnRlbnQ9J1ZpYmVjcmlhdGl2YSBNYXJrZXRpbmcgRGlnaXRhbCBodHRwczovL3d3dy52aWJlY3JpYXRpdmEuY29tLmJyJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdVSURlc2lnbicgY29udGVudD0nU2FtdWVsIExlw6NvIC0gc2FtdWVsZGFzaWx2YTQ2MEBnbWFpbC5jb20nIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J2NvcHlyaWdodCcgY29udGVudD0nJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdiYXNlX3VybCcgY29udGVudD0nJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdsYW5ndWFnZScgY29udGVudD0ncHQtYnInIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J2NvdW50cnknIGNvbnRlbnQ9J0JSQScgLz5cclxuICAgICAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj0neC1kbnMtcHJlZmV0Y2gtY29udHJvbCcgY29udGVudD0nb24nIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzpsb2NhbGUnIGNvbnRlbnQ9J3B0X0JSJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6dXJsJyBjb250ZW50PScnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzpzaXRlX25hbWUnIGNvbnRlbnQ9JycgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0ndHdpdHRlcjpjYXJkJyBjb250ZW50PSdzdW1tYXJ5X2xhcmdlX2ltYWdlJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlJyBjb250ZW50PSd5ZXMnIC8+XHJcbiAgICAgICAgICAgIDx0aXRsZT57cHJvcHMudGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkU2VvIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCdXR0b24sIE5hdmJhciwgTmF2LCBDb250YWluZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd01lbnVNb2JpbGUoKSB7XHJcbiAgICAgICAgY29uc3QgbWVudV9idXR0b25fbW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfYnV0dG9uX21vYmlsZScpXHJcbiAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWxpbmtzJylcclxuICAgICAgICBpZiAobWVudV9idXR0b25fbW9iaWxlLmNsYXNzTGlzdC5jb250YWlucygnbWVudV9idXR0b25fYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgbWVudV9idXR0b25fbW9iaWxlLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfYnV0dG9uX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dfbWVudScpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc3R5bGUgPSAnb3ZlcmZsb3cteTogYXV0byc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVudV9idXR0b25fbW9iaWxlLmNsYXNzTGlzdC5hZGQoJ21lbnVfYnV0dG9uX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ3Nob3dfbWVudScpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc3R5bGUgPSAnb3ZlcmZsb3cteTogaGlkZGVuJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGZ1bmN0aW9uIGlzQWN0aXZlKHJvdXRlKXtcclxuICAgICAgICBpZihyb3V0ZSA9PSByb3V0ZXIucGF0aG5hbWUpe1xyXG4gICAgICAgICAgICByZXR1cm4gXCJuYXYtbGluay1hY3RpdmVcIlxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gJydcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TmF2YmFyIGNsYXNzTmFtZT0nbmF2YmFyIGZpeGVkLXRvcCcgZXhwYW5kPSdsZyc+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCcuLi9pbWFnZXMvbG9nby9sb2dvUHJpbWFyeS5wbmcnKX0gYWx0PSdFY29yYWl6JyB0aXRsZT0nRWNvcmFpeicgLz5cclxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbWVudV9idXR0b25fbW9iaWxlJyB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e3Nob3dNZW51TW9iaWxlfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtZW51X2J1dHRvbl9tb2JpbGVfaWNvbl9jdXN0b20nPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21lbnVfYnV0dG9uX21vYmlsZV9pY29uX2N1c3RvbSc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWVudV9idXR0b25fbW9iaWxlX2ljb25fY3VzdG9tJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9J21sLWF1dG8gYWxpZ24taXRlbXMtY2VudGVyIG1lbnUtbGlua3MnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXYtbGluayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgbGluayAke2lzQWN0aXZlKCcvJyl9YH0gPkluw61jaW88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2LWxpbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYWJvdXQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgbGluayAke2lzQWN0aXZlKCcvYWJvdXQnKX1gfT5Tb2JyZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXYtbGluayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgbGluayAke2lzQWN0aXZlKCcnKX1gfT5SZWNlaXRhczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXYtbGluayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9ibG9nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGxpbmsgJHtpc0FjdGl2ZSgnL2Jsb2cnKX1gfT5CbG9nPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdi1saW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BsaW5rICR7aXNBY3RpdmUoJycpfWB9PkNvbnRhdG9zPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9J2J0LXN0YW5kYXJkIGJnLWNvbG9yLXNlY29uZCBidC1zdGFuZGFyZC1zZWNvbmQgbS0wJz5Qcm9kdXRvPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9OYXZiYXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9ibG9nMS04YjBhZGMwOTU2NjNmYjNkMzhkOGYzYzg3ZWIxYjA4Ny5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmxvZzItNWFjOWFiMTdkOTQ2MWQxYTdlZjFkYWY0MmIyMzdjNWIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jsb2czLWI4NWY2MzgzMjUzZDVkYzRkMWFiYWQ2NjE0NjA2Y2ZjLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9ibG9nNC0wZjdiMDA4ZGY5Zjg1YTY0N2M5M2M5ZTQ3NTY1ZDk3Ni5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmxvZzUtYTdlMzY4OGRkYTIyY2Y0NDJjOTBhMDM1ZTY1MGYwYzMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jsb2c2LTIxZjRkNjkwNjI5ZGE4MmY0MzBlMDMzMjk0ZDQ1MzYxLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUpZQUFBQXlDQVlBQUFDK2pDSWFBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFCVUhTVVJCVkhnQjdWd0pmRlRWdWYvT21abE05aEFKdSt5Q0s0S3labUd4Q2dWRkpJbFJDaTc0OU9GYWFiVld1N3orYUgxWWJTcyt0ZlVwclFySXBsbEFFVndyQ0VsWWhGcUxxQkFnYkdFTmtBVklNalAzblA3UG5TWDMzcmtrbVpqV2l2UC8vVzd1UGQ4OTJ6M25POS81bGpNaGlpS0tLS0tJSW9vb29vaWlyY0VvaWlnQ09MV3BRMmZoOGR4Q1RKUWtaOWF1cHlpaWlCVHBlZWx4ZEVsZWpKWCt4aHZrcUNsT2VhSnFYY292S0lvb0lrRnRhZkw5RmF2YnphT2hlYjhOMGs2dFR1aGNYWnc2UWM0aXJ0TFZKU2wvcWk1T25rYXRCS2NvdmpPUXhXbEpZSmdsUXJBL3BzUnBFMTJjNGlndno2SGVKVjUxK2pCeHJheG1iTXJ6KzBzcDdvU24rbUdRSHppKzRieGthZ1dpalBWZFFWYnU4R21MTDNvY1N2VVVsZFI4dlAzRDEreUtvOE55VE5YSEtiMnIxeVhmbjV3UWQwZ1N6VW5SVW1iMXZvcnFvWUUvNjlMRVhkUUtSQm5ydTRDTUczL0lCSzFkL0VtWFRPN1V5b0xrbjE2M001SHErWVIybzZ2TGt4MDFyOVRVMVAya1hXYjFMbkxReWFxTktiMlRLMnJ5cFpUZnAxWWd5bGpuTWpJbkpmSE0zTmNaazg5QitzUXdweHp5MmI1Mkc0T3ZZN2k4THM0bFhEUjRzSXRsVUoxZ2ZDMGsxM0JKY2k0MTBBL1lUYVF4Um52bHArM2FVWVNJTXRZNWdzQjJObHpkZFVKRzltV01uSnV4dGQwVXlzUWwvZnpOQ3dVWVRVOWlPMHo1eGJWbHNlVHVPVTZsVTdPcVZuTUhEVW5KcURuaFlDeklHNTlVbjVZWFVJU0lNdGEzSEtlS1U4YkNQZkFaYzlCdVlteUR1cDhzU2RrNnZsLzFScEtzdnpYLzJ1M3RyK0F1OFhrd1BmT2E4bVR5T2E4T3BvWG12L3VJNnRSZEU2eVNrZXhBRVNMS1dOOWlLSGNBK09CZHlKL0xqWFFJcHN0ZXYrZVQrQ21Eam9RWGNvb0I2N2VuL2MxQXVUNGx4dWVtTWROalZVSVM4NnE3ZzBtZE56Z1Q4VXlUMVJRaG9vejFMVVhsWCtPNmdRbm0wdG5tVU9QMDNOU3QxQ1hPWjZhRDYzNjVvaDluM0w4ZENoOUxtSFhERGdmNWFpYlViRTVLQTJsMzJTcHlDN2k3MUhzcDJlVU5EdmRXaWhCUnh2cVd3dW1PdVIydWcvaW04aWkzK20zcCs4UG9tOHBUaHpxY2NuTXdQV1AwM2pTcWQ0NUtHbHg3b3QzSTZnOVRFOXIzU2VsVS9lcmg5em9sY0U3SE8yUlYxbEtFYUh2R3lzZ2JSRmw1NDVWRlF1YzZsSE14UGZzMnlzeWRnM3NlL1p0d2JITjhsMjJIRThhekZrUjZMK3Rxd3hNdTdjSVB0bmI4TXBpVUdrM3NtT1NKWVFQSHhhbDAydWpqWDdKKzFCQ1hWTmNseVZNOWgxb0JKN1VoZUVidUFzbkVyYVJMV2RkUk9USjNMSjFwMkVteE1UTklCRXdSeGl1b05MK0F6Z0h3Q3ZHcTVQeFdmNEwvbUdYa1BDVktpeDZqZnlVeWJodzM5NzJ5bFgwNzF6cjdkejVOTWMxa3gxWVdUZ1RwZjFiMGQ1UmVmSXpnaFNkTjQrN1oyVit5ZS9JSFhBK2RiV2t3RzZ6RG5kUkt0SjNFeXN3YmkyKzQxVURweURTYVEvRXhLWXpZTXpCZS8wKy9tSGlRemdXTW10TGQ4cjB3d3RoRC8zSkp6YWpEa2sxZG5XTXZPVVlmN1dqZmJQYkROZTdQb0l1dHhLcGVnZXROUEMvRHZXaHJSZEpSaDBQK0ZNKy9oK1I3YXRxSWlqWGFHV2M1dFJIYVRtSkpjVUhZSVJ4R0Vmcy92aldRbWgwRHVXQ25LNzBuWXAxRVIyYjJORWI4S1VoOHpEOHhLV2sybFJiK3Z6bVQ1NjF0aHhQcjlsVW14SGsxWk1KR1lDdVZWQmVKYXU2NW9uemNJNDl0UFdyM1BuNjRsYktVMmdwdEo3R0VXSU8vbXBHRWdma3JuYXRZbC84Vi9uNXVvakY4NzhhM2psQ3J3WlNPMHczMW5LL2ZTWVlyNXlWdjFUS25XRmF3dVNzbHVNUkI3R1FlKzdxa0Z3dzNQZW43cDQ3U040QzJZNndOeTc3a2FtdVFkQUNYK3RnaXVFUitST2N1aEhUNHJvV3NlQjNQMnlFM0ZraVB1Sm4rRFJDdXBEdFhmZDUrNk9TZTVUMFJBeHdOSmxvSFpoVDZTLzJPTkRicjFKRlZ5K2diZ21Vcm5NVXBmWnViM0FsK1JidmhOS1AxK1hXMkpkVWhzUlNFSzFWZWxjOTl6S3ZWdGkrZ21KUExPeVhGOGlPMTlZTFd2MVZQWS9JU0lNM3NXOC9NdlJSaWJTaEd3d1ZQWEJtZFlLWDBSYjZueVI2bjUyRlYrNGFSZy9mRjFNWmlMNmhFSFJ1cHRHZ3Z0UVRwZWQyd25GVFlJNDRjdmdQVXlibUQ4dk8xRnBWVlZ1Qmh1aER1NlU3a2MzOUJvdWFVRU01WlVOeWxyZ1ZEYWJFdE56Z3ZCYTFkZ0g1MnhCYmFnSW5mUzZXRG9NL01FazAzeU96cld6T3YvbE9pemF4UUpXbzI0SnNtM3p6b1lQOEJuVTkzK3FJeTZkRGl3NTIzdFBpYm1vUDY1Z01ZTDY1MWh4eUtKUzZPd1BsVnBpUm5VOFhNbS9Qd25QT1pnKzBGTlNUSkVOMGVqVWxiYXkzSE1uT1ZnNlJiS0Ivbnc1bW0vUVJ2OGhwcDdCcTRjTGN4cnpoa0tMdE9rbmNLWTY1WElOa3NrWE4yQkZibEkxUmM5QnBab1FLcTB2VTQxSWs3a1VxMHZGVVQ4TEVVL0VFc2hIQm4zdUFaTGg1N1lpYWt5cjFJOWJHVVBJN0M4OGtubnFCTnk0N3JOTGhNWUdRc2J4d0Q2RHFTSFlKVDhZOUk5dFJwZ3FaaW5McEE4WDI2Y1ZEb2w2SzRjSGFvN294c2ZDZC9HRzFjYVJ6VFFLMlZUTEpGSWthYlJXdVdWL20vTWVjdWFFMS9ObVNxUXVOVnFOaE9pVUp4dVpTNk9IN09Ec29UcUMrNXNSL3MxMUtJQ1hqb0ZLSVIrNjBvS1hncHJKYk0zTjh4UXp3UjQvc01GUmMrcTR3VDByeS93YnZKSUZ1RDBNcnJXb3J4bkVVbFJhdHQrbWI1MkkxRkI5QURDeE94bkxCU1dibkR5TUJVd0ZmUU9UWXhabGxoVXRqWnVrbU1YS3ZEbVVvdjBBbWp0WUJuM1hpZmlaeVIzWkZKMXlaODlFd0taeXE5VWx4akdCZFl2VGRtbU40TW5oalBZbysvajBINFBWbVp5bCt5UGFidEllYmluK2tTVk8rR1YxbnhQWU1YUG1zaW1HcDVJTzBIQjJzeGFaWTRzakhOczNML0YweTFCSTlEd3BsS2J6aE5mUS96T3RiVDhBbG5PMHpYRHN6Unk5Z1h3OVVETHB4VTJoZVRZR1FxQlNFeGpzVFhHZlBqKzhOUGcwSWFZZUJ1TjlmcmZJZXlzdnN6emJzWjc2WlRPRk1wcUoxdUZPYnFRN2cvcHRpOEQvOWdkR0NoTVkxQnY0SENNK1dhazJ3eDJVSGpOcUpjRHNLZllIRDBESzZ3clE5U2NnNk5tTktyc1ErT1Z6QTVGeG15cUFsVXh6OCt4SFhhUUk4SEF5d0p4cjEweExyL2dMOWpMRTJvZUZpOWhkWU5BN21TTGgrWG9JdzdNOWdrL0hHUUZld3NXMVY2N2hXUWN0WXo0NGQwNVY0dFFqTXU0czY0UjhrZU5SaU4vUUc5MVg4UlZRUXY2TFRWSkR4aENqN29DZUQ2aFJaeUJnMmYxTWxFcWRBeThiZGpLQzNsSmlwK2ZRY1QvQVVUSFVvUkx1V3BWMk4rS2tRRjkwS3l2MERqYmswSTY0T1ZRSEdPZ2tCRlFmU2lrVGxYR3JOZ09DY2JraExiM2NMUWM4dXdCOHc0U3BZVUpzcVRQQW4rSHlXS2F3enYzZEIvWnVwUFdia3dpdVYxaG5lbnNPMStEMlZINEJvcmZkNitvRzB3dk85Qm5scS9mMm5VRGQzQkxET01mVVg2SWVsS1NwWmRlYUprZklMYUNnM3ZlMUppNG44Um9xNzIzVlp1QlBZQitsNkVaeHRyeTg5b25FbVRFbzgybjBGNzNXVng0VFhvODhYWTdpZm9HMnl3VTVMWmV1MlI0OWV5cEtpSExDM3NIcnBLQ3M4UFhxS2s4QkZ5YTJHTUpTUmNIcVg1ZjhmakZ3YXlneHl1U1piK21uWWpxQzZMYU13UDB0RGg3eG5JaDdIbFhvTDJodXBqWHMrVnhWcGlxQ09WVHArKzJ0cUhjTWI2TUw4YUszR0ZLWk13TUZKNjNnQTAzTS93dXBUVzVrZmtXTU1PT1kxS0NwU29scnF5WGx5Z1Rpck9OT1poSkNjSDJwNXFva3Q2RXR2dXh5RUN6SHRKZkxxNWJFQ2krcHpaWkpBMG9DL0NaRHlqbEY5ZHVTM09mMWR5K1dOVFdjWW1rQjBZSzRCdTJFMldGSXhEMzNQdGRBc2gvWXdGQmFBTGJzZjhsendpZkxHelRNcDA4YkwzOEdXMWhnNzNvUWtUM05RYU1CYW1Ha0NmU3ZEZnczYWZ5WlowdGlIcGd3R3lsRHdOTUd6azhVRGZvUWRLNkZ4RnUwTzV0dVJYWTY0K3RMUjRJVmxnNnlDRmliTVluYnV4TWExejlxLzhkV2c1UnAwZkk3bVFJc01PV2w5UUd0Nm80M1ZpNGtWUzBzcVBYbXIxU0svSHBETUp4dGJTc0d5enk5bnJxeVFYVnhMRUw3NlpIQmE0RHpiMkZSUCtSbmk3dnVXU1hQY2FDQ2NwSEZXeXBtWTYvZVA5MDlRU2xCVGRiaXZ5MUpaUlh6ZVErOFJkMHF3WE9hZzJOVDU4ZDdaNFBySEZNMjl0S0hpTU9vckF6YXZDZng0cWRiMUlhR0lKY3ppVU1SSE1jRFVObjVaTUd4ZlZJSjQ3R0N1OGg2SFErMVM2VEkzaFVmUzlRMk1iQVNqcjhKaWpPM20xcStIUnVOZlVISk5oaThMZTg1NVV0NHBxNGs3cVlzNlBTMmxVYmo5YVcxaUdGVzNrY2k5NVJUNUZBc2IrWVV0WGJvM00zSjE2VzZIYVBVb242R0VxVG5JdG1JaWFhU1FWU25zYWxNdE9wakdYZkVkWVZyL1ovS0tKbHBFejFKSnJjNHVaeWdnWUF4eUxFZ3d3QW8wUG9OTm51b0xxa0haR251WlZLbjdUcWtSdEpZZk8yRGcra2tIblljbGhYZ2xKZnAxbncvSTk2RU14bmtZRzNrREZPSE10N2t1NTFIS2tVVUF3aTRBWWs1ZEltcGdNYmZZYXBzNTdIUkw5d1lnSjFFTFl6OUE3N3pSZzN6Y3hETmNnUmpOdVZ2ck1RTU1IckF5WjZDMkVGTEttaWRkbTM0amdxbi9OeFZudDRYU240dXZNSzBsUXEzdzdtSUF6RVJXQWo0OW41cjZLQ2RrS3B2b05LSmhNQmo5UWFGdFc5WjJ5S1JuWkw5TVZLM0l0eFlZZTBydkFjbWJEaW5GZE1FaXpnRGhGZFExdmhsSloyZVBoSXRvTjUrdHJBYXZ4aWhDeit0R3NOLy9zc1VLblhFUWFtMkhvWUk1VnFZV3l0NWdpQkN5V3hDYThnbW1tbE50YlMxNkg4dkdFVEY0b3RQZmhUeU9EY010a0NIU1ZJOXdkMTNDU3ZHNHpvekl0bFZvRjJWS2p4TitsVlBHazlKdnFSaUFZVEI5QllxK251dnJWTE5hdEpNbUY5SFdnckZMQlltM1lzWkVKQkg4RGl1cXpGRmlneURwQndtckZLRjBjcWdaYnF0enl0bi94WkV6dXl5Ulh4a21jb1Q3bFQvc0E4dzJsblJkREY3c1NRbmN1TllHek05YmFvblVRby91b2NTc2F4b3g2Z1lTcDY2cGNRUkVDS3ppZC9DdlRQRmxqY3M3SHh0clhRTUdIVnNHOGJxL09EZlZxSkl0MXRIN1o1OVFDc0l5Yy9aWnRCMXNTZldMS2xKNTNIZ2JlWUNESVkralpibk5GMUhMR2doSXVhMkdKTnBidzZkS2h1T0J0VTc3TW5IZ2JBV1ZwaDhXYWtxbHhMcXByWEpaY1NLOVFQem9ONngxcnRCVFg1NS9BUEw2RHA2RGJLQW5MN2xsamJpSDVvc1pLdWVxN2thbFdTQmVmU212eUd5VnNSbTRtTllPbWxCV01oMXhpeVh0SnFPdU1DbWpObW5xS0dOZ1Nzbkx2c0ZLNWgzNUc1cEV1UnYwK1dDQnJUUGtZdnkrc3lzeThIdmpZbHpHQWY5R3ZySnduRlZuNG5ZU05MVFAyMzhGZi9qWldLS2FpMGVlREZ3U2d2VlhZRWtDcG82cjQzcFp0WTEwWVUyVmtYeGJZR3MwUTdMaWx2NE5ONyt0OHc4elprVjh5RzcxSHh1bmh1V0NLc1VXV0RDTU56NGZnd1dzOExDRFp4YWFhT0x6clJxYWlKaXhuQTVvOE5pT0VYSWhLYkoxMzJIRVdVU3NCQWY0Q3k4eE9FWnd0SmMwVno4bjNJS2JFeERCWWhDOEhIbFdROXdrSzZDZWczd3V2OWduaEVjL1Fwb0VuS1gzclFKakVMNElsUTRNTzFlTjMrcnFPWVcrVFZ4cTMwZ0g4b0hoWmpNejVHZUo2MkdaRkxwanBLZE4zY2ZZYWFSSHRmQ0ZBOTJhQ3VaeitpRWNJM2Z5VEhJZ0xaazdxaXY3Wmo1MFRNVSsxbFZOUXpNb2JzRkFlUUZ4MEpjUktUM3puOCtZRzVTYXV5WUUyeG9DTHhteUxwelVCUFU3RE9IQmR0dzN6OEtQa1VtbHdoVEFWdHpXS1FLR2Z0QWo5K0FKUmtVZXgyTWRUTTJqYXZDclZ0NXh3SzA1NWdFdUtQcllwWWY3Q3M3T3RHNHJRSE16Q1FjWjhPOEZVbHNOL3NvUktDdjNHQTRMTEdMYy9tZDdDcTQwUXpER1d1YlVPWXYxdklmZUNIM3VGMCtmL1p4ZFlhVkM4WjV1N1RyZnI3WHBGRFRvN2o4em54dCtrZFFYaFIzMmFDUldiRUNQMmtObkIzQi85TElHVWZwcG41aXhFT0V0dDdaZmJsbDFYaEpncU0wbzNya3RTRFlxMGxNcHZadERKNUI0NjAzNmxzUEZqNmZENGpOdGhIWGFmUXJ0c3drR211Q3lZeG1RNWc5SG1vOTh2WXV0K0R2SGh2K1A5azlRQ05IdHN4czVQaGJDSlV0cWJIMjY3V0tFa05YQTdtaWkxWFhMS0k4T3lFU2Y0STJTeFVzblB4RmFMY1E5a3hyaFFVRmVocE9CcFNGMjdFMnptdmtuMk1YU0pXODdTNzdPY3BMTTVZUWRtVnN4Z29ZNkFsSDRJVEs3aWRVcHFLQlhDYkUxclByMHU2Wk5LY3UranBuRWFBZmRwdEdXdUY0dksvZ2NWd2t3WFZ1dlEzLzh2NFVMNjFFelVuaU56bUt3ZCtuMDNHT3lIRlBRSStFTkxUYUw1ODFpQ28wUHNJOVFXdUdpMThNbDV0bG1KdGhuelliMGR4OXIxNk04NmpYM0VPTnVDV08xSURMUmFLY1lqT2VvZlVzQ2E4ZzcxcjF3RDRKMlhwUVUzd1NxQjU1aTlTMkdtdXR5UCttWWozREFJWG0wcjAwcFJYREFWVHZHNzhXeDNobnV2SHVacE9HOXNveTdoVUxIRWltQnNEbUxEem1tcTJFMVpVdWlyUEtqZkdkTW5SSFRsajZuVEJPSDlWSXRGRmlNa05ScFN1TWpZQnNVSExOMk5SUWVraHc4UFNOTjZTMm1oaDVRNGRLMkFrNW5iNmxpQXkyVm11QzRPSmZFK0kwT3NFVUh5Y011dWRQa3VLZmxZc3R1cHNCandYYi9DV09hWitpN0RYU2VSK1UzYUdpcU1VUjNYbVRSM1BXMWNvbndqTFZOdS9HZUVPcE5EYzVOSFZrZmdTMk93QXZ0aWxmZlJYU2ZDV1k1dFlsZUwyNDBVNnV5WUF3YVBPb2ZGbFM5TTJ4RzJhSnFDY2xMNnhLWG9YWHZVZ2NtVFh3Vzg0NDBZbVpNSkxYNEtsLzRmbUNvWEJOUzBhcXBQbTZWTHRLK0RVWG05WWRQMnc2ZzVTR3I3cVdIZmR0cXk1ZXZWR1VYcnNmTVY2cjV2Q1hYZFBZOUdXZC90ZVkweXlsK2wyTTB2aGY4bXNHd2VYVnEya0NMNmYxUm5LL1A1RzVRSXJVelhjc3RlcFJIQmY2aldGSGJOcHg3b1h4ZHFJZkFkSTg3MnJrMS8vaFVGMGU3NWRBdTJnYXNhNm1rNTh3ZWoxKzVhUUQrQzFJbUZvdnlDVDZNQkRpZkZwSEthc1hzaHplT1N0bW9hVFlmSWZCLzVSL3U4aE5pZi82VEh6dm4wQUxnaEZSTER6WlVCSTZnWDlzdlIwQzMrRE5OdEZNb2tnSjRHRC9rdU1NVko1cVQ5MGtmM09CZ3Q4TlhScUYzNzZGSzB2WUQ1dzJTYjhmd2dudE42ZDZkWmV3NVFuaWJvQXBSZDJ2Y09DdjVybzZkZERyb1h4cEU2V3FoTGNURHVKQWNpR0pDSGUwQTdLanh3ckhJYWV2UTQvVUhqZENmNmVEMzMwdHcrZDlGZTR6aEVmd25keG9BU05BNU95MVZjeGYwNERUNndFT2E2cE02WXJFUTRsNUl4NEVNd29jcG52aHhhMVFWZUNhdVJVUndtWFA4SFozQldHTGZsZ2Fpdkc1aG5QWmh2REo2SG9KNmVNWkxHSVAvRWRqN1N3ekNnelltSm95K0VqKzVIc2hxYi9DUjE5aDE1M2tJN3ZmQis4TTd6MUhaR0ExQzVWbEZCbllXZ2lhU01LRzcyL3RkNWFVcjVmQm9iVEtPLzQxRCtZWGhRWnRkcVZNa2RORlAxdDNNSEdvTDZmUGlXMTRTVGJyR09RNVN4MmhnWTBESk01bFY0ck1LOTNPdWxTa3lFa2pycDlSNWRweTMzK1dENU1yb2VkT1hsYnllVWo0NUJha2c2Vk45Z1VOaVpMa2wyUWFrNXhCeFVpYlRhOGs1QmVweEUrZTBkN3FSYVRQb2h0UE93cDQ3R1ExS3RSQVB0d1RRYm1aYytSWDNUd2VRSFFTdXZkdXRXL0E0OEg2Z1g1TUZkMFUzbnM4REFXMEc3R1BXRkZIZjBjUTArNmlYY3R3KzhEZGFpcEZYSW8ybGUrZ3I1anprWjNZMzdCOVp4K0dhVjkrOEFLcUJMMWNmUzQrcTVUdzk2bEYxRlB2b1B3TzRGOURpMC9FUnN4VS8xdm9NT1V4UlJSQkZGRkZGRUVVVVVVVVFSUlJSUnRCbitDUXpvSG9sMFVHbXlBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYXBwbGUtdG91Y2gtaWNvbi0xMTR4MTE0LWEzMGE0OTIyZThkNGFmYmFiMjY3NzU2Yzk0MjFhMDllLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9hcHBsZS10b3VjaC1pY29uLTEyMHgxMjAtMjI0ZTliODY3NGYyZDRhYzEyZmVjY2E3YTg1ODUwMzAucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2FwcGxlLXRvdWNoLWljb24tMTQ0eDE0NC0xYjE4ZDM5YjMzNDliNzQ4ODFhY2Q1NzlkMzgxMTNkNS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYXBwbGUtdG91Y2gtaWNvbi0xNTJ4MTUyLTllOTIxMjFmNWQyMTdhY2YxMmZmNTFhYmE1MDE3NWU0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURrQUFBQTVDQVlBQUFDTUdJT0ZBQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBUlAwbEVRVlJvZ2EyYWZYQWQxWG5HZjgvZUswVUlvU2hDV2tsWGpzZHhITWQxR0hBWTRsSkR3QW11OHdVcFNma3dvQ3RNbWkvYWVCb3lRMU9TWVJpR1NVaWFNb1JtV2dvSkUxblhRRWo1YWtNcEJVb0p5WURCQklpVHVzU2hybU9raTNTdEdJMmlLQnB4dFUvLzJIdmwxV3F2SURNOU0yZDI5K3c1NzNtZjk3em5uT2U4dXhDbm9KYVRLY2k0QnFuMzZlZlhTMm1acjFkdnVmSkY5NE9GY0V1eEVINDlRNytnZmhQVmNsYUtFZ0xyZFpZelNES242MGFKNjNKQWw5Tmx5ZjFBSWZ5b3hWMklqa1NmZFV4UndGTEZzd0FrNjZTTmtud1BTdzJXQmhRMEtoOHNoSzNGUW5jSFM0MjAzQWllR3NCT29VNlpDWmFtSUNrZ2JlVkcxa3ltSktBc2NML1h2V0dMMFBZM0tuZWdQMXhsY1plaDNUYUdWN1BrMXNHa1IyK1JpdzRVd2xYRlFyZzY5UzdMTFpkeld4THZscVNCdDRZQjRrOE5KMlc4RG9yOTNTY21Dd1lMWWF2TWJhQ1ZrcEFFMHBFTVBSck9uVVhLU3J3ZnVId3c3TXJTYjFIYllpSHNLQmJDMDVlcms5V3Y1bW5CYkVTcy9VUmZYeEFEQzljTnJPZ05CbGFFZ0hiVTYxN1MxeE1Zcmhac2xnRjd4SURNV0JhR3BGdG16YXQ2MldXQ1QwYTUzSXFNOStuOE9jR0ZHVElXeVM4V2VsWU1GSG82RnNvamgwQUZlSEplYmluMjk3UUFOOHRlSTdNU2VQK2Z4ZUFKNUUwU24wZkNjTWdRWWM4YUg4elNxWkU3TGVUQjNwNFdtZFdJZG9scmkzMDllWmE2SlVBd1VBZzNBRmNBSnd3V3dueUdWUk5ndlVYNHJvRkN1T0hpdnA0OEFlM0FOT2JFQ0FmWW44QjBFQm5NWmxuaGE0cmFpeXVPenlPdXhoeTAvVTNKS3lXdEZEcWlTQytsK2x2WVFySW05a0tlRDZJV1E5N3dMOEFGeUJzejZnSkVnbThMZFZwYWI2a09NbnNSRS90Qld3UlA1K1IvQW0xRWRDSzZ3SjlIM0FnOGs2djZBUEF4NDd6dExwenJCVTV4UE9vdmcyS1Q0ZWVHeDhibkZodHkrWkZjc0lMRk5HSWFFNElua0w2Uk5ackZRbmlDNEpSWWY3cGtyOHdBbUd5ekYva2x4SXVnV2NHTm1GWk1HK0p5NEhIZzZXcWVkbUN6SUMvUmlka28weWw0RG5oZkRTR0N2U2tzbVhNeU9Ub0w1WGVNSHE0Q0x3S25BZ2V4VDBYKytKSTI0Z3lqMkxEMmZtQnRRdFlTSTVaR0sxT2duVmg1Y0J0b1dLZ2QwWXZaQjV5TUdGR2dEeU9xUmlPR0dlQzlCb3dPQTZkZ2FqajFWQXJjRXJUcHNzVjdsSGxLc1Z1RXdDeXc0NUpDMkpxb0EvQmV4UUJuRFUrQTFpVmtCWXZrMWRyTUUzME4vQm5FaVBFcTQ3dUJ4Mk5YNWxLTEo0QUxNUytCeTVxbmpEaFZVRVdlQVlYZ1dmRGVBRCtSa0IwQTBXQmYyREhZMTlPYWRMdWtFa213QWVJWkExaTk0QXB3TUJBZkIzWUJVYkczdXhtenBqWTlYa0txMm41blN1NFM0OTR4ZWpnQ2ZsekxRYkVRYnNDc0xwVXJkd1BCUUtHbkYva000REZnclFLd1dRdThnSGs3K0VIRENaSnUyams2UGxXWGZVRjRQRy9LNTA0MmZCMTd4eUtPbHhyZDVHZytBejZnbUJzZUFpWkJWdzcwOTdUSExkUU85TlpZeDZQWUt3VnJ0bmZVcWVSaWNBMVNCTFFBemZWbnlSMlk5bHFmSFZIQWVrU3JVUW5SREp3dWVJNklvYVNjTitWekgwWmNCUlNJUEpKZUFiTVlVSlJybXB1YWY2MzVZZVBQSWxXeEo3RjdKWjBIZkVjbXNNaEx3dlovQTF1QmZOU1NieVdlUjNVUVdXUi9vWDlCUjYxK1hNZVVhd0JmQm1ZeDZ3UVR4dS9FK29Ud1k4aWZHaTVYb20zaDhVRlRMdWhDdWdEcExQQW0wSUhTZUdVbWE5U1NDa1VBUXdjbkFlNGkzblRYQTc4QkRnSlhYTEtpdHdXb0N1ckxkeG5vTlJ3SnFzeXkyRXVTbzVabVdvRmh2V05RQU9TaVlFclN6Y0RIUUx1QTl4aCtqQmdFUDRpNWFMN3FxRmdJdHpUbGM3ZEorcVhnU3V5d05sL3ZxM2VRUmJlV1VyMGdlaEp6RUJnR2pnRTZNT3VDS0RyWDhWekVaalllQ1hVQ3p3NU5URlJaNnFLWkJyMjQwQTNpYmNCSXZXeG9iQ3hTbGIrUmRBMjRCVmdGYk1iY0QveXp4UStDWFBBTDRGOEYyNEYydzI3RUtiTDNDbTRsZGRUS1VxQU9OQ3E5UEZGRlBJaDBMakF1dUZFNEFDN0Vycm05SzRnUWpPRGZNMFl0SzlXb21nSk1Iak9kZkxkemZEd2FIaDEvTkxLdVE3VEVSbVFqNkRiQkprbHRFck9JS21JTXNWVm9HbW5IY0xreXRkQkJzck1NMEFuZzJrbThqZHhnZUpkaG44UVpram9CQkx1QmR3azlBSHFJeGVmUGRIK0xrMmtCcG5NT1psUDlVeXlFdllIOFhjempOUmxqeU04YTdiZjlQY011bTBzTis0Rlp3L25EbytQMUxXWEo5dEZvM3dTZ05EcitIUFpWRWkyZ2JjQUR0am9kTTUzQThFanRKSEVGdUxsWTZPN0trSnZGc2hCc0JuNDZORGEyVUdlZ3I3dWpXQWcvRGR3RGVqb1hCZGNLN2diT0FGYUFId0NPWU5xQW0yVldDYzRwalk0L2x1Z25TSzZ1U2FCWkxoelhrYjVqL0E3d0o0RlhoUThhUG1BSVFQdUJVaFI1V21LbnJPdUpPZVp5S1Jyc0MvT0d6d0JYWE56Ym1RK1VLMGk2REJnRS9WeHdhUlRvd0ZCNUxDb1d3bStCVHFrWjVRdGdMR1l4RDJPdTByeGVUQmt4cW9OY0FIVkpYeGdHNGx6Z0Q0QnA0cFYwU25Eb3RVZ1BsMGJINTRyOVBWZExYbXZURHp5TU9BOTRxRFkzRHdYaUVVT3JBMGJTOHNsWVdTMU9Cd3JBcGx5US95N1FTOHgyTGdjOVBqdzZObGR2VnlwWERoVUxQZWZZUGcvUlc1UHpwTXd6dzY5VTBnUTlQZzhUSDVHNkJHY1Rud00zSXpWalF6ekpud1JXMS9JQjRCYmdqcHFRbmNEdHdBMUFFVGdUR0VDcXlMNy9OWHp0bmVYRFdRUjlBZXkybnA2Z0tlZEhnTk1SVDJLK2JlbGVwTmxkSTJOTDJWZGowcEsxaXNjSDhtS2hleEQweFJxZ1ZZS3UrREJxc0E2QkgwWE1ZYVlsUHVtWWdVd0Ezd2QraEptcXNZc3B4THJhTnJOU2NPWnd1VExHVXZkZmxJcUZjSXZFZlpqcjU4M2YzbjUwTlA3ZlVtN0RjVzN2UU94RGVnV1JBL1VCVFJLQTNveDRDMllHOFd1Yld6QzNTL3dQTWFkOU83RkxuMVlEODF0QnIrQkx3K1hLSGhhUGdHdFgxYktMaGJBRitDN1NsMHJseXEwL20vNXR0YVpYdlo0VHorbjdaSjJzKzRYbi9IQ05EQVBSd0lyZWZPRG9nNFl2RzA1R2JoYXNjanh5ZWNIV2VCNm9BenlGR1VHMEFXQ2VsWGdlOCtCd3VYS0VlQnJrRWIxUnBISXVpbHBMNDRkbkVxQURwTE5sRGpyaTNnYURrSFVlVFZQRDE5MmkxRWg0c1QvY0FHekZ2TFZHa1VLa0R1dzRUQ0U5alAwVXNBN3hJWm5TY0xueWp3QURoZTZDb0IxckEySVY4Q3l3Q2ZobXFiWkJGL3ZERVBOdm9JdEs1Zkg5RGZSNG8yblpLWkZ2OUtJMFdua0JlS0hXT0xpNDBCMEVVclBpVFh2Tzg5R01BbDBIK2wvc1RzTlpBMzNodmJ0ZXFVd0k5U0kyQVJkaHZvZzRuM2pKSDRIYWljSDhwZURoNGZKNE1pNnozS0tTdGIwMWlqeGtnbXhFMUJjRTNWRStEUEdCZVJhSWluSFE2blR3SHFBRmZMT2thd2RXOU94NHJhcTlUYm1vQU5wSHppOFFzUW56b2NpZXJMVmREM3dhZENFUVhSSjJ0d1VCYzZXeHcra3RnTlJ6R21qVzg1S2taYXlSNWVjTFFvdUY4QzVFTTJaU2NJYm1YbnRuMU54ME8vQ3RVcm55NDRIK2NMM015WTVkdFdOWHViS2IyandWM0NPMEYzSE52R2tKNHRQQ3R4SFRSSDZDNnZ4czZmQ1JCY1czZFhmbW01cnk3Y1RiMkNhZzFmQWc4Tkt1Y21XR0JpT1lCTlRJYW8zS29vRys0MXVCOTJOK2lOZ0dQTGR6NHRVcTZDYmdxb0VWdlMyNXFsNEVLZ0djRjhEUEUxYjlLT2dVdzllSFI4ZXJnWHdxNkJEd2tUaUlwUitRejYrcjlSa05Gc0t1cHFiOG5jRHpnajFJTndtdWwvUVR3WStLaFo3ckJncGhvVjQva2V0NlI0MHMwR2dTeHd4Q3VRM0VCOXdyWlZXTnJva1JhRGN3SjBmbjdod2ZqMklTemJHUmdobUFZaUZjQjl3RTNJZzBQZERURldDbXdCM0FqTVJaRWp1UTlnRU1Gc0pPb0NRNFQyaGx2RXo2aU9FQTltT0lmZUN0Z2tlS2hmRHp4VUpQVzViU3lSaFBGa0hQV2dnQ1lCMFFDQlhBWDh0RndZdEFVQm9kbzlnZjNpZHoyV0JmZUhjRTdZTGY3WXJMdTJSdXR6VGx5UGNLYjFVdStBQndBbkFEMHY0SWp1eXF4V3FLaGJETmNEVWl3dHlLUEFhOGd1a0UzZ1dzd1d5UUZBSmd2bUc0c0ZnSXJ5eVZLMDhtOFRUYVFocWwrbno4YzhHM2dJY1U2V003andaMUtmYUh2WmovUW5vMzltWWdpcXo3QS9sT3dka1crMm9oeDMxQ2U2aFdINjVHcWdiTlFTam9KYzRyZ1QrdVhVZUFOcUNMT0FaVUlaN25yeUxlaDlsU0M3dlVWWmdGN2dmdUFYYVh5cFdSWEVMNUpLTklzbzFrTWhDY2ROeXhweUFWQ0hUUmNIbDhNdG4rcERlM3pvTE9WQndsT0EzekE0bS9BZ2FBS3ZBOHNJZVlZT1FJZ3ZPRG5QNUNzTEVHc0tYVzEyWmdOOUoyVUE1NENyRVJXQWRhQlhRQzd3WmFWSXYzeGgrMnlFczZBYmhBY01HSnh4MTdUQjFrRXBBelFDYXBFaHVPTzdaZDhQM1NhR1Yvb2swQWVPL1VUSFRTY2NkMkErY0NiNU5vUWx4SnZiSElJWDRIdkdEcGlLU25OVGYvOTZYeGlRZE9lblBiMDNHb2thdUFYd2lPUi93SzZTVFFWeDBFbjVXOUIyZ0hUb3VqQW9vWFQvRkx6TXVDZHFRbXBHb2NuZWR1SlVDOFlmcTBmVlZIQURCMGNESnJnUXFLaGZCY3hKM0FqRXlyVVZuNEZzTmppSmR5djUyYkhKbzgyclpZNkc0R25ReDhCWEdHek44WjNnOGNNZHduY1FQV0FZdjM3Qm9kbjc2MDh5MUJkRXpUYXN6SGdZdUE5WWhJWnNib0FIR3c2ejhNais0YUhaK3Q3NU5KSU9uMFJoYWtoYlN0cDRlbW5MK0M5TmMxZDNoQmNNN3c2UGhJeW5qUnhYMWhhMDVzQnk1RG5CQkwwSVBZZTBBajRQT0JRR0xDYUR0d2VXbDAvTmFVMFlOaWY3ZzZFbE5OMDNNVFE1T1RTM1J2eUYwYkFFbkhadE8waTRGQ3VGTHdFNkJMOExpaFdDcFh5cVMycFlHK3NFMEJYOENjWHd0UXRRQ1BZWjRYZk1DSy9nU0Nud0pyWkM1RjNHYXpGM05tNlpWS01nN1VTUGVGYXlOYWx3WjY5T1NRblpMTDlSZEJYY2o3YkM0cXhXZktSVEszOWZUa0pkOGpzeFdCMFJ6MlZ3UXpodXVNUGhJMFZhdCtyYm5aSnU4NC9Qa0UwbGJoMDRGSEd4ZzdyUk1reUVDakFIRDZtbFZ2SVNKWExJUWJnVUhCbEZBZDRDTGoxQ0lCbndPMkdpWnNoc0RuQUcreE9BMTBMOUtUT3hmbXUyWVJyZkhCM0hPV1BqWFEzNXYyTGxMOUpLOUJvODhFV1dWWkZndUlBMUVuekRuWUQ5Rk5TSzAybHdkVmZwNGxyeW5uMWFBdkkrOEZIc1E4amJrUjhSeG1vK0NzNGRHeEtsQ0x3UGhaekVYWWp5TU5BUmVMYUMzeDU4U2tuZzJEY0FHTFFaQ3FrR1daNURVYUtJUnJMWFkyQmRGMWtqYkszSy9xL05ETzhmRzBoZXZ5dmd6dVZCeGQrdzF3ZTh6V09GSG9ha3Y3RTIwbWdXbkJXcVQxd1BQQ004VGJVMXB1NWloU0c4bXNZMHFqbzh1aXVUdlEzNTBYWEErY0xIT3k0eFBKTmNPVmlheW9HWmVzNkc0ajRvT0Nmd0IrSTdqV1V0NjRWZWEySU5MdzBOallVZU9LUTVoemtjQnVBM1lZaGdWLzFFRG5ySkVNR2g2YXMwQWx5bUtCa1VIcUF2WTZMdHR0WW5LZHFocy9STUZxWU1iNENQQXA0SHZZSmNRVGtUUTNQRGFXTnVxQitHSUUvUllyTUtzTjdkczdPaGlhbkZ4dWVpMmtMSkJad01nc0N3S0ExbmpENTBYaCs0Ykw0Mms1QUZ6YzN4MWduNDE0Q2ZNejRBOXpNM05qTlZLUWRMRmtIM3ZpaXpCZUE0d0JIMFZNelIvVHRKTEpvMS9BV0RvUUM5ZjZLU1JwZ1RUVElhTk8zTFVKZ0E3SEJIckM4MzR1Vlc4UjBUQytJeitmKzJydFV3QlpNbFBQenhMejNUeXdCZFFNNUxFN1FLMnBQcktNRkVBY1FjOWFWZE1XeVZxRTZrYnFFbW9EencyUEh6NlNNczVDUjdWUDV3Y1Q1Vmt5MDBhdUlBNENheFIvRG96andRQ0I1MWhzekN5d0VYVi9TeW1WdFYrbTk2VTR4eDlhMm8xbmE2T1oxVFl0ZThuSnZWRzlYTlBjdE16ZUdKaXJ0aGZjMDJhdWdaeDB5b3dNWkcyMFNVRkhyUyt2RkpvbS9vZW1tYVdwMGJLZXZNL3lrQUFJaGc1T1JvYi9qSVA1eWhOL0txeUNJcEdiem1wRGhzczJjczEweXFaMTBtckhmd3ExNitobjhDejZsN1o0OGo1TkhSZlZFOTRsTVltTllBM3dBbmhmcVR4MnBGR2JkTjlaNkJ0eHdUUmdNR3VBUTdYdkg3OXEwUGIxQ01XeUl6cGNQanhsZEVmOHF5ZHJiSHFKZjRsSjZwcTFPaS9JVEZzOGEvaXp5bU93NHEySVdlTFFSQ05RYWZuTGNlUUd4blhKOWl3SVNTdUFIN0lZNExMZWtGeUYwaDI5a1FXaUM2c0w2RFNML3ZSb3VKaWtsRWdEemJxUHBQbG5KWFlEMko0bUVkblBNTXdTUTcyUmhTREl5TVFkY2pYNFhzVi9URDJXZnIvTWZTUDVXZjB4UFBMcnlPaVcydnREcmtZSGYwOVoyWVVaMTBhS05uTHhyUHFOWkdTbFJiSUcrN3ZiaTRYd1Y0T0ZubTF2UUo5RnVpY0plajAxY29QbGxGMjArYVprSmQ5bkxSQkpXZW4yQysrck1KMkRIWmlIVW0wYXVmOUNuLzhIU3lPZnpNc2d6d0VBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRHdBQUFBOENBWUFBQUE2L05seUFBQUFDWEJJV1hNQUFBN0VBQUFPeEFHVkt3NGJBQUFQNUVsRVFWUm9nZDJiZjJ5ZDVYWEhQOS9IMSs1VmFsbFdacis1ZWUxbUprdXppTEtNc3BTbEdVb2hkUDFCK2QwQitYRnZFdFpmNjBySEx6R0VVSVFRUWloRFhWcDFsRUliU0h3TmhkS1dsakkxcFN3d2t0RW9aQ25MTXBSbWFlU2x2dGUrTjFaa1JWbHFIUHY5N28vM09pVEJUdXc0U0ZPUGRQM2UrNzduT2MvNXZzOTV6bk9lY3g0TENFRHkrM0pkR1VjTmhsdVF5c1ZTNVpsVG40Lys0UGZoZW0xemM4YXdWckFXZTNBc3Znei9EMmxsSERVQWRKYXJReE50VTRpampPQTJwTnV3RVJ3YWl5K2NLeVhQSlJtdUI2NmVWQ09SQng1TXZ3dWJnYkhZSmd3NEg3Zk9YdGJXOHA2L29Qd0hvZ0RjQlB6cFdNOEw3UzFOaGJiV2FTZmRpMmZNeDZ3ek5OakdOZzQ2K3hGZTNkRWNoTDZXc1hJVFZueG1OSGVpdkNlU0V0b1JGeG5OSDcxWGFJdWFqak00M0FocVA5NVBITFdBMTB0cWxoaVNTSkI0WHhLcVk4bWZFT0NSWS9YblM3b2F0SFFpL0lVNFdoakUvUlBoZlJlWk9aaTlrc3VmbXptem9YYnZnVUxiak5rMWpwdUE0eU1zV0NOcEFZRE5pelgrbnZXOXZXUE8vd2tCbHJVWUhFQnJDbTB6b3RQeHJvaWpSdUJoWU42cW12TTVIUlhpNk5sOEhDMVlPbVBHcUM3VFFkMkd4cmVER3dweGRCSGlhdXc1K1prdExjQmlXZE1COG0zUlJjQlM3UDNnQTBqWHBwaThmYnorSmdUWTBHdzRnbndVZTgzcTV1Wngyd1c0UTlJbEZ1MkpPUE1VRU5Na2ZsWmY1OGZ5Y2JRQUNNalRaYzFYa25RSW5zVDBhWVEzcFhBRnBzRTRTcHV5b3FiZkQyemV3ZzQyQUc5TUNUQWlBOHBnTmdPclI5N2ZjUEZZYlBsY1N6T3dKdTFUMDJYRkU1RCtpcUFGdEVqbzU4QWFETVpaeEUrZHZyVE5pWkorNExOSUNGcnl1WllzWnJGU0RQK0t1RFI5Sm1TbU5zS1lYY0pab0ZHaUVmUGdXS09zdXJCWUlpT01JQUhQSDBQYXFjSmZNUFNEOXd1dkZjb0FDNUhhZ2YyZ1BVQkpRZTNBSXNHd29Va2h6QUxtV1RxTW1DWElDbU1Zc0hSZ2FvRGh6WFRVV0dUVExXbkp5TFNHSldQd2ZjeUEwejh2QU9lZEVhN3F1a0gzQXgzQTdjYjdnWjNnTWpCWE9FYThqclJFb3NYMjk0RWU0SHlnVWZaKzRMTFJmb1YzeTB3TmNMRmM3UWI2a0NMUUVQWm1ZTTJLT0RydUxWZm5jZ0d6UUFoUVl0aHRPT01JZC9YMERSZExsWDl5SFI5SnhBcFFVYkFUZUF4eDNWQjkrRkN4VkgwVFdHR3JIeEVFUFlpUEltRjRCVmlJMlM4eENLenQ3SzJjNUtHWHQ3Vm1DbkYwWlNHT2NwTUlMZlVxZUNrd3phT0J1SFFGOEFPQVlTVk5naGhBZUkvRkNGYkhSS1YzL2JZNkNHd0dLTVRSRlFERlVuVkhxbkEwSGJRWXZCVXpGNVJnWHdBZUJub3dPNEZaV09XUWFOTkpZT1BXNWpvckQzd0ZjL2trSWljL0JRSm9yTjNZQmR5VGIwOWZtcUNaOUlQaFplQ1BCWE5XVDU5K3hxVnBER29DaGtkL1pCSWRWUm9mN3dhYWpWc1FjMENia0pvUml3Uk4ySi9iME5kM3ZGMWhacFN0a3g1RVhDY1lETVB1bnd6ZzdlQUROV0J2QVVIMitiS3ZCSkJJQk5RQzkvOUtSOElOU1VQZGFkZnRjU2duKzNobzJObGJHVFRzQUpvUWJ3bG1ZUnJCZTJTdmt4a0NYOWZaVzkwTGtNKzFOaGZpS0k5NEhtZ0hGaHZ0MjNqdzROQ0VBZGZWSCtzSE5odU9BQmVDZW8yT0FMZm0yMlprTWNPdWpZcWhHK2d3SEE0ajlFMGFydmlUeE9vKzZaWjBIM0FKMXJOT25lRU80SHJEUHN3MUk0bkwrVGhhVUlpalJ4WDBLNkJZYTdwSWtBRnZoRWxzSGpaMER5VFl6NElPcEozNWlIREFMSlQ5Y1pNYXZOR2d4ZUYwYldYYmhvTUhoMDh2K1dSYTN0WWFnSmF1M21yL2lmYzdTNVdYQ2VHandoOGtIYlh6RVVlQmh4eDRNSVJRQ2VJTndkOUlkSUNxUUpCcHdmeW9XSzYrT0NuQUFBNTFtOEU1ME96YXN2R01JQXRjQlpBdVhlNnZtVDJDbjA5R2ZxcVFwdU94cmFLenA2OS9LQWtQZ1BZaklreFZhTDNNcHdRWmsxcUZvUjg1SUMxQjJvVjA5enZ5SjBGZFBYMURTTjhDWHdsNjB2QS94b01TMXdxUE9xOGR3RHpRZHFUdlRoYXdvRjN3NjdHZUZXWkcwK3Jya3E4Snp3VitESFJZYkxMb01mb3g5bXVHT3pHM2t3WStieGsrMDFtcTdEc3J3Q2w1cldDVG9CRlVFSFFCa2RIODFLVDVCZWFUaUs5MmxpcUhDM0ZyKzVra25peWVqOWNjMUhISzUxcXloVGo2SzhSUHNLWmgzU3g3dlVRNzlpZUFYZUJma2ZxT2F5UTJ5dXdHUGxNc1ZYcE9sS1hKQTRaQzI0d0lld3NvQnQ4bFdHdm9CSmFDcmdFV0pmYTNncmhEVU8wc1Z4K2ZrTnc0eWdCYmdPdVNaS1FmMUJoQ1dBNThBUlFFOXlSQkwzWDE5QTJ2YUd2TkJtc3QwaTB5Z1RTc0hFSWN4cndzNjh1ZHZaVjNaVDNlRlhnc3o3Vm1ROUFGZ2tXWUljUVI4R0hRWVdCdnNWd3RGMHVWNnNxMmFKbnhvNWdFMkltNEZuaU54Qm5EcGpyeFBXQ0p4VjlPNGwydUpNMUZMUXFocmtEcW1IcUE5WmpPem5MbDhDampVNldEZzhDdGhYakdGc3VYMTdBTUNKNE5SNGQyYmhnWVNNYnE0UGdJNStOb250SmMwZzNBUEVsWkFOczdRSTJTNXpsMUprOGpIcTJySDlvL010UndvMkNGWVMvbzg0SWJqT2NCQlVrUjlvRmgrYktuUzJmMjFQazRhaGI4RzVCREhNR3NSL3pBQ3Z1NmV2b21uTXc3RTJVS2NldDgwTDJrY1crRFlEYW90Z01Rb0F6eVhwdFhKVDZPdVFQcjcwYUdHbDRFSGpINklUZ0I3elFzUTN3Q2M4RDJnR0R0Uk1DUzlyUmMwbHpiLytDRUI3cDZxNE5uYm5VV2dJVUtoZ2FrYnV3Rjd3ejY2TlVEbUNyd1c4T3R3QVcxN01kNXlMZUQrekgvUXByM25ZVjVuWFN4MzB3SUwwOUVpVUxjMmdUY0JYeTE3dWpRNCtPWjQ3a2dBU3lQVzBOUXlBaG5NYXNSYTJTMWpHSTJER1B2QnZZRFE4QnNwR2xwYW9YZGlOL0ozR3JvbHFoaXZpbll2TEdXVjg2M1JkbXVVblZ3ZVd0cmVQcmd3WlBBTE0zbFFuMWQ4dmRZcllpN2lxWEtld1oyRlBDN2xxWkNXMnNPZERWd0UyWVdJbUFTcVdidTZVdElnRDNZMjRFK3hHS1plenJMMWEwMUlBQmtHSm11b051UEplR0IrcERjVWl4WC8vR2t2dUpvTHZBOW9VOTNsaXRqWmhyUEpaMTJXU3EwUlZuTU5FUldacHFsNmVBSTB3THN0clJYOWwrRHl1QjF3Q2FiTDNUMVZwTkNIRjFJdXFsZkJmeU1OQ0w3QzZEYkNmZDE5VlVIbCtaeW9UNGtSYUUzT3N1VnI3L0hXSUV6bEZxS3Blb2dNSzd6S01SUkIzQXo4bjJZUVVSWmNDUHdqTk1OZVF6RW9HM2daWUordzI4eWhHR0ErcEFzRVZ3Q3ZudThQczQxalduU0U2SGEzRnVIQ2NBaHdmVTR1Y3dLejFuNmJGZXBjcWpRMXJvQXRGQWplandKdmxSbVI3RzNlZ2dnSDBkTmdwOUxlczNTdlVxU2pPR0xXRThUZkxSWXFoNDlzdzdObVdmNkJpYTFPY253VG5WdFV0UlFsOHd4ckVROGlQa3FjQ0Q4YnJoLzVQME5QNVY5TzNBdmhCM1lpeTNQRXJRVVQ5Z0JDVDRQeWlwaFRXZHYzMUNoTFZxTjlSSGtOcXlmRk9Lb2lSRnZLMVlPSHQ4WDUyZTJ4cEl1Qmo0R0xBYm1GdUpvTy9CRG8wMDJQVStka3Q0NWxjNjZWbVJ6QVNhTCtRT2wyN1VuTnd3TUpGaWRvRS9sMjJiTUtaWXFpVkVYNG5PSTE5NVJQSm9EM0FPczNkaGJHWjB5dFlpT2l1UWJCRitpTGh6UG1hMk1vL2xCMmlKNFhuQ2I0Q0pCbzJDSjRCSGhmdy95K2tJY1hienFOSG56c3picFFsdjBzTkFkdG9lRmRsbjgrZWlTVW9pakI0Q293WFZmR2d6SENBNlBGc3ZWTDljVW4yNzRhYzFmZnRJakkwY0lpaVN0UTdSanRpUCtJNWp2ank1cmhUaWFKZmdGYUk3bFljd3dvb3paQlJ3bTNWMTlrRFJTUEF5OGtGaHJSaElHbnFsVVR0TDdyRTBhTXdlY0NCMEIzMTRzVmQrWlMrSTVtWDgrcHBFSXdoRFFBQ1Q1WEVzVzhhU3NoY2IzQUt0VkYvNE1tQTJzZDhMVFhiMG4xNFFMY2RRTzNHK3hFWHNBYzhSd05OMHc4T0hhQnVZcTBNTGFicTFKOExkQlhCSHFmRzgrMS9LanJyNys0NDUzS2dYeGdCU0F1OEpJMkhyaWc3cjZvVjBqeDk0M2lMMG9wRG5pSTB0enVZeENzZ1p6SlhJLzVnK1Jmb245aU5DK3puTGwwTExXMW13aGppNEY1Z0VmQUdZaExxeE5uVXRxK2pZb0xhWU5BbVh3bThBQjRRVkE1b1E0c2NQd3BFSzR2UkJIbXhIUEZrdlZuV2R2MG5IMFBOS3VZcWx5MzVqUDI2S0haT1VNdnhidVNhQWxTQThEd2VaUXJlRFZUNXBVVDJvZ0c0QmZrbVpFRHhsaXdjM0FGa24zTzkwR2ZnVnhGV2FoVUl2bDNaaGhTUmNDWUlZdER3bzFucXlSajlwMG5yVkpDNG9rdkRSdWUvTUsrQkZnRnZDS3BIdHRCMGxJVG15T2tNN0xOMnZoVDdudWY5OCt0R0ZnSUZuWlBxUFppZThTNUlGdGdwdU1Id2R1QVgzNDJJaXVxdy9KTE9OTE1UZExYQXpndEpJMm5LYUlQR2c0WDFLd1BZajRNYkQrckJJQUFLczZtc1BHN3ZHRC9FSWNYU1I0dytJb0pvTTBoUDF0eFBOS3ZDZEJSN3A2MzVuM1MzUE5vVDdVTjRHdUJkWWdPakJyU092QkIwZ0xabC9CaW9CUEZzdVZyYlYrR2toM2VnWGdDaUJDREdJR2tON0MzbUxwSmNSYlhUMlY1S3hOK2t4VWlLTXZTbm9Vd0hCWWNFTm5xVExtN21uRnpLZzlpRHVCYXhIVGdTem9DZXdTcUJ0OGVRM1VzNUllTXJ4WUxGV3VPVlZPL2dOUlZpUGtFcm42Vk9uZ21JSExXWS93NldoWmJrWTJFL3pmUXUzZ0hzT3FZcm02ZVN6ZWZEeWpYZkkzTUhNUldVd1c4UUxtTjRKUEp5U2ZrY0tXdEc3Rk1zUjNiRFhhUHErcnR6cHUwV3c4ZWs5R054TjhtNkFkY2RSd3czaGdDM0UwUCtCZnlWd3Z1QUFUQTJ0bFNxQUhMVDJRYVJnZVZ1cVpnK0ZqdHI0ckhHb1dNV2tLNS9wVGlLUFpnbHZUZ2hkM0ZzdlY3V1B4clV3cmo5OUFha0VjTW53YmNRUFFabkVaYVpIdTlRM2RBMkFsb1BRMG5id08wV1BwNm56YmpKYko2bmYyZ2NjcHRISm1GQTBsNmtkK0dKTXpQQkVTbmhoUHZ1R0x3TVhHMnpEUGtaWk0xaUZ0eFo0ditGSm5xVklyM1JpZ0c3SElJODRTOUUzU0UzYzNBdCthako3bnhLUlh4RkdNdExHK3pubVo2MEhkY25MM3hyNnhBL2tWdWRZV3hEM0FvRkt3alpLZUVuUmpYd0o2cUxOYzJUL0tyelRMOGlZd1QwR0xnTEx3YnZDcXllbzZaUlBPdDdWa2cvZ2FzRVRvVWFOaDRPN08zb09IeG1zVGdwYkthcFo1RVBnamlmdkFqY0NGZ3EweTN6NlIzK0lBNkFxaEJ1Q0RpQzhiSGdOZHNLcWxwV2t5K2s3ZHBCTk5RMXhzM0EwMGc5NUt4QXVubFNzK1pQT014TXgwRDh4dXhIT0lGNHFsNnE0eFd1d0RzaGdFYzBnZDJGWGdyVzRJRndHdlRsVGRxUjh1clUwS1dmM2dROEQzaXFYS3VGbVNmQncxWTViVVVyK0hnY3NOYjNhVnFvZkhhd1A4cDJxbE90QnM0NTdhbWF6WGJTOWdrb0NuTkk5bFpZRnA0Q2FMUFNUSnEyZVFtUVBXSGFzUFR6elQzWGRpdG1MY05rYmJwRFJQYnJzRGMxUWlBSmU0VnB5ZnFMNVROMmt4RGNqYTVERGI2b2JwUHAzTXJuSjFEN0JuTWwxazZ0OCtNSEtzb1l3ZFM0cnM5R0JhTFhZK2VycitUcVVwZTJsWlRaZ21vUlpnY01QQmcrZXNMREpLRzlLWWZkc0pSeXFHYTFlWTVJQk4yVXNieCtreEplOGhOZGR6SHN3QUFmTkxKR3BIbFY0Yi9RNDZPaGs1VTErSHhXekJBTkNuTkwzeW5wREVTOWhIYWo4N3dEdlM3dm50Wk9RRVVwT1l5dWM4NDBHa0p1QTM1MERlbUIvVkQrMUc2VGt1U2JOdHVyRVQyNjlPUnM3VVI5aDBrQjRWN0dPYy96TTRGN1N4ZXlBeGVpdzlTV0tBSzRHK3V0OE43VHQ5eTVQcFhKaDBCeUtIbWVkekZKZVBSNkh1MkV1WWZVWWdzb2F0azYwMG5vdFlPb3MxaXpTeDlwN05ZWUNOQnc0Tkk3NGpJRDNUeVpiSnlwaDZwR1d1QVg5SzBEQTZ4OTVMTXZvKytFNVp6YlZhOUtSb3lvQ0w1ZXBlWU85VTVVeVVRdjNiQjVLaGhwZUE0WkJvckxqNzk0OEtiZEhpbFROUC83OFg0OUgvQWZTeEtDc1k4N3NCQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRWdBQUFCSUNBWUFBQUJWN2JOSEFBQUFDWEJJV1hNQUFBN0VBQUFPeEFHVkt3NGJBQUFaZ0VsRVFWUjRuSzJjZjNCYzFaWG5QOStyVmtjUnd0dXJXSzEyU3poYUQrdnlFSy9ETWl4REhPTEtFTVlodndaQ1lEQkdiU0EvSnBzaEpKdWtHSVpLVVJTVnBhZ3NrOGxTTTZuQVVneXlKQWdCUWhqeWk4a1N3aEFuNDNVSVJYbGNIc2ZMZWx3ZVNXN0ppbGZsTllvaXBQZmRQMTUzKy9YVDY3YVR5YWw2MWZmZGQrNjU1NTE3N3Jubm5IdGZkd0FCY08xWHFYTDYzaG40NmN2RWtIN2VxazBXelhiOS9MYncyVkV1OW13Nis2d3Z2blZWejJ0Ny85OXJFd25lRy96bmdLaDJVLzlOUS9wWkdyL1ZNeEsvb1ExT0ZqNHQ2bjRyK0ZjV0N1R05YWjBGNENIUTVlQW5VdmdOUG5NcEFrbUVMR2dsd0t4eVd1RDErMWI0YWRwUnFqNU43emZHUC91Tm5WMUlPeEh2eDU0REZsZ3A3RkJ2bEg2UWRXVTlhOVVteldUOVN0ZWxYeXpyV1NiT2puSnh5NDV5TVhlbStLbTJPVW4zU25xLzR3bTFpRG1aNHJ2QmF6dHRTVVBXYUNTMUlqMk5TTlZIS2Z4MmRGdjJQVnhhdmNyd0lIYnZtZUFueTl0S3BXRHhLYVEvQlpBQVdMQlpJRnRaUWxKaVdZeXZlT2xLdWUrQzdRTjl5ZWV0TkF0V2FsQkk0YlVycDJrQVJPb0lteEZEaG5XdDhDdURxM3NyQTMycjBtMDdnN2NBZDljMEJ4dVFGZ2poWkxKOXNrMlM2VmFNTmVwdUhDb0UwT2M3ekhrcFFhU0Z1NkorKzVyK1ZkZVYrdk9KZW1pdlBhMEc3WU9DUEFxYjZwV1ZnV0tvREJSekRYeUhZZERhWk50S3VXOFEvSkJNWGpMZ1NBaVorVGRFT2tFTDdXNGxuQ3dJeTYvbjFrcDZ2OUROMTVaS3lXZVpCcTVlUDF6dXkzZkk5M1lHYjB6aHQ3SVY5ZnVtQWJxaDFKK1h0UUY0VGpEd2tWS3AxbzgzQWg4Rm91SEJZaGZ3UHFIdWV0dkttbUlPd3BkQjZ3ellWQTNQR3pCVUh6cDZkQ25WWjRPSHJKRnNBK0Z5bTd6UjlrNzUvRlpJeVp0NE91b3lRWDFVcy9CVzlGOHBGemRWeXYyWGJHc0lnYkRNOGlyajdzaDh6WEwzWWdkY1grN1BnVzdIdWdKQUVVT1lDekdGQmpHeFRYaXI1RWdRSWMxaExxbHAwc3MwYTA1VE9UM0ZNcEZxdjVHczM1R001RlVLM0ZGWjA1ODFEWnFFcFNqMEN1NUI2cXFOZEZhZldmMXZBSjdvRE5GVjE1ZUxoVzJsRW5UUURSUUVaVm1ybytVb0JId3A2UDNnbDJwdEw1TlVzR0lCN1Rpbk40KzR6ZkNxemZPR3h6QWJKSFZoSXFHZnRSaW96R1UrQ1NzY091TWV3NUxoR2N6bDRQZTJhVitUa08rV3RBbkEwdStsOEZ2M0x3NGlTcEtlQ1BEanpoQjlra2dGSUNEK0k3QVFBdHVRL2hZN0l1S0o0ZExxTHVBOUFOaURRUEJ5eDBhZ2JvKytCUXpXVmk4TWM3WVB0dVdmNWxHTFdLazVwNlFxQU9Vd2g0UURnVHVHQi9vTHRQQkhoa3VyVjB2OFNhTzVXWC9qbXY0dVd0dTlaUDBSOFA1YXkrTkNkMHY2TzBFWk0ydThBZkV3K0Rpd2V6bEVoeFRDSU9LaUdxdHZpdWxvczJDVklHRDJTRnhjanlnRXh6c1dsdysxNCtOTVZyQ2tKdjFNTWUzTERYdEFGOGorOEkyRlFucWFSUURxQ084MHdvN05vWEh2c3FMazZ0Snlhb2JPeFRuZ2Fac2w4QW5MZHd0VjQ2bktwVUlYWUo0RFhnSk81T2VYRm9CTFpmVUNHQW8xK3U4Q1lla0lnVTAyZVJ5cmtOR3JJNy80UlpZUDFHU0Qwb3htTFhkeG5ka2JheEZEd0pJZ0NHNWVmbU5ubWV5cDhpNHdRbUNPQy9ZSmxXalcxQ2JCMU90M0hwNkxRR09JbDRDQ3pCWEFIc3lqZ2lISDJqVWt1Qnp4cytXek9uT0lEMWxNMmV3Qi9tVzR0TG9IT0I4YnpLdkFCMVFQWVRHQ0g3RFNGamF0bmxtZUw2bTZ4bjFIRlBZYUx5b2V4UjZiQ0NnZ2ZTeXgyaVJmOUdLZENwNzNHUllTL2ttYWZwcEJ4aWFuRDVqb2c4Q0RGak9HODQxbkxRNGdKcEIrWXJqQkNuOE5EQUtYWUUrQVp6RkgxQkhPUmZTQ1FQNFJzQ1ZteFV1WXF2RGpMZDQzVk5ZVUM1VnlQN2tVYzBua0ZjSGdTTFc2V0Jrb3ZnVGVERm9QbmpLTUFGZmxRdlF3Y0xpT3ZLTlU3TWFzcTJsY1pQUTlvR0w4dTJSUDYwd1luenhXSmU1anBFRzdYUHdyeE9kSEo2ZFBRQnhDZEFhOVY5QnRNUUVNQ1owQW40dnBBUitPZjhIb2NlRXR3TWpPcVpramFUNTJsSXQ1dzJXQ1c4SHZTV3RRdThDeEprUjlKM2JSNlFGbVFlZUJUa3I2eFBCZ1E0dWlLREJreU1kTU1RL2VnMXdXR2tyUnpOSzg1RDNwNXhZbG80YUwwZEVSNVJEdlFvS0lRNWdpRUd6ZWdoU012ZzM4ZStCUjhEdXhUcUR3cFFUOUFIQmRxYS9iOEZuZ0pzT0M3YVYySVVJU0VzYmFqeU5GaW5FV3dEbndQbUE3ZHVQbGd5a0pRaTNzbVRETWdRcmc5VGYyOXVZU2RFbVYyL2xIc2ZFM09kbW5ZcXpsc0NRemdWbEMvQjhnWjF4R3JBTXZBZDlEV2lmeDBkajh1REk2V1QyZTdIOTRUVisrc3lQOEY4VHZJVjBtT05TeDFMeUtuVTVJZGR3ajROMEFTT2NDKzBDejJFWEJ4NFlIYXlHSWFpOFRYd2NGNTliY2owS1U3K2h0MGVkcCthZ005T2FBSERRRXhFaTFHaGwrVkxOMVM0aXE0QnhNTCtaRjhBMnl0Mk5PSUY4N2VuUm1EOFNKczhxYXZrS2wzSGVwcEljTWJ3Zk9sMTB3K3FlUlk4ZWlWdXJjS3JLbW8zTnhDZmhtdkFwNEZkQU5Ec0FFc0szdW9JRVg2dmxMeDdacFhhMThQQ3d6bCtxckhUUTl0M05EaHJsSVdreldDNzJJdEJlNEh1dGg0RndnTWh4QVhHbW9ZajcwMmkrWFhod3U5ZlVNcitsYmYzWjMvcytSZmlEcGZ3SVhZd2ZNdVVZbnNKOG5FV29rR1dubG0wUUFJNGZuSXVBcG14TTI5eU0yQXNlQVFkbERNdHNxY2Z3VnIxK3hsUDQzOE9ZYW5aZEhqaDJyQjRkWlU3bGVuMW1XT0JlWXpiMjJ1SlNzSDUyYW5pTGkzVWd2Zzg4eEhBZm1FSDhNMmdkY1oxSHM3dXA4V0VIZmtmVGptdk41Z2EwRjRFVmdzeERDLzUwUURrTDJGTXVLaTVwZnhrd0JMNEUyWTc0RG5CQzhIR2VnWE1IcXhYVi8xUkZRUlF6VnBQVVBORHVmcmFaeUd1cjE1d0kvSDVtYld5SEEwYVBUc3gzTHVrM3dOZEJKeEZVeVhkZ3ZBMTlFZkYzU0RxRXRFcjJOSEwyWUFpNEVWaUgyZzc0Nk5sbGRxaE52NWRVbXAxalRWQnlibWxsQS9LM0VoY0FIZ0FYamg3R1hhb1p4RTZyNVk3QUlITVFNZ1Y2VjlYeEtDT253SnNzd0ordmZnbm1wRmY1SXRicTBIRS9wMWNDODBYUEFaa2tYeFJwdERIc05VNGFxOGJmQkJVbWJKTzAzM0RBNk5WMnQwMnpIS0lseTJpWUYwTk9HL1VpWGdoNEUvVHZESzRKdW9YZlg1NVpnbjBXazJFSDh3dWpSNllrRTNYUmtuNFFWQTdOOW9DK0hLVWluL0sway9wV0ZRcWdNRkllQ2VFaTRoTGtEZkRrd1oveU0wUkhRbytBOW9CSGdKc3crSUcrOHoxQVptNXh1U24rMDA1bzBOQm54c2NucEk5aTN5RDR1a1FkZERYd1RzMlM0eEZKWExTSDFuTXpsaUdkRHBFY3I1V0srVW01S2gyYlptclNRSWlBSzFrYmdwQ05PSlBHSFM2dkRjTGs0ZUhaMy9rYk0xN0dXc0Q0bS9MamdWVW1iTVplQ3Y0K2pId0EveHk0QUR3cjl1Y3dyd0RWams5T3ZwUGlLY21SRHF5QzJHV2xaTDBRNTM0NTlIMmlJZURydFJ6cWZ5R3NsZ3RHM3dCOG40clpGb3E0TytGTlpoNEVuVTdTejBpRE5CaHB1RXZ4OHREcXpDUEV5ZlhaM2ZoM3d4OEJIa0JheHZ4QkpUejR5VlYwQ29rcTUrQURtSG9rZVd4OUZmQlE0WG5ORFRtSi9IK3RqWTFQVFIxSjlBL0crV0paZ29pc0xoZERUMVZtUXlOVWk2cVVsbGhZWEZsaDhPamFRWWVmMGRGUVpLSTJpNkJ6TVZjQy9CY1l3OXhMNFE2UERqcGlTOVBlVzV6dkVsMENYV1Z5WDZDOHBvTFRkYWZCVktSZlhBcGNaYnFpVSs5ZmlhQlBTZXdSWFdTd0MzOFhjUFRZMU01Rm9HenFpY1A5eThJeXR1OEJGMUhoMldPWUJ6Rk9qUjZlUFovQVRnRWpKaWlzTEJYcTY4NzNBUnNHSGdNMUFGM0NTZU5uTUVXK3l2V0w0T2xGMGNMdzZ1M2pEWUYvQmtjWU1xekQzSWNacWkvd3RobmxiQnlRL0lPa2kyL3NzL21COGNtWTJRMXZxd21rYXlXMzkvYUd6Z3krQXR3T1BBanRBZWVUZHdCT2dGOGNtcHlleTJ0YkxsWEovRVhrUXdCQ2hjR0I4b3BxVjZtZ0NBV3hmMDU4UGlpNFUraUN3RlhHZVVNNDFhb2hGN0YyZ0NIeUpwQzdiczhEM0VWK056Q3NoWGpYR2dOdHJUQjhDM3c2OEc3Z2ExQ054Qkh0c2RHcm0vblpNcFlVMVhDNnVGL3hRb21UenF1Q1JTSG9LMkQ4K09aMGwzRE9CVnY1ZUUrU0cxL1NkSi9selNGdHJGcjJNeWRXOVBFbllQaUhVYlhrRzg1ZTJOMHRzQm0wM3ZqTEFidUJCNEY3TVBPSXcrRG5nSHNSNnpHRncxVlkreExiblRLQnVnSE9DbXlRVnNSL0hmRzcwNk14VUsvemZFTkorMlNrYkZJSnV0ZGtJcWlMT3hWNVYzM0tzT1g0UUIzLzdpYmRMSnBGdUExK0VQUUQwZ29hUWJ5TU9OOGFBV2FBRWRHT2VCQzRRYkFJK3NYTnFaaWJGWE52VlN5RnNCSFlBZnlIN250R2p4MDZ5RXRJdmRqcjY2YmFrY0JvYUtTRHNlRk52V09ydTdBa1JCZUVOV0xkSXZod0l0WHdnVUE4YmZCeDRCZGhqTXlucFA5UWk1a2xEVmJIWGZMdk1Sc05CaVNITUM4QjlJUXA3UnFyVlZubW5GYU8zWTdBWWJMNkMxV1g4OGZHcG1ZVjIrS2x5Ty9xbkUxb0RsRlc1bzF6c3RiZ2FjMDJjQk5lcW1pNU4xZHoyTWpBb3FkalUwSnd3SEViZUtiakY1Z2FKT2IyMnVHL25xZEFnbmpZaGJMVjRFZE1UN1B6bzBXTXJqT3h3dWJnNW9BZUI2MGFucHZlZVJpRC9takl0N29OWUtkVlREdGc1eFM1RnVpQ2VUZ3dBWlVISlloWFFnK2ttWHRrT0kzMFAreWZBZFlpL0I3NmlpR3RIajg0OEM0VGhjbC9BV29zY1pBMUpWQ0xyQWNubklWWmozejgyZFd5dXptQ2xYT3dHdmdsNnFTUFNIUW5OYStVTy9EcmwwMDNGUmpsVGc5ckJqWVZDV0R5ck14K2tIa1gwSVBJc016RlduWm12bEl2YlFlOEIveFB4NnJWb2M4WDQwWm1GNFlGaVh1WXF4R3FaYXd3UEE2dUFOeU11eHV4eHhHZkdxek5SbkVLTmhnVzNZYjFyOU9pcDJPZzBMOWZTVmNqQVQrUFY3NXZLNlp4MHF3aTcwV0JrYmc3bVdDRDJtbWZyYlNybDRpRHdHZkJYRU8vRG5KQjRHZmdrOEJmamt6TUx3K1hpZnNFNlF6Zm9GZkQ1UUMvbUFlQlFyaGIrZElibEV1aE80Tm1hY1A2MUdwTlZUcjliWnJsK0lpSlRHS2x5YUZIbTJsSXBRSFFqWW82SWc4QmRnaGR4OUJVSVB4b2U2SDlxZkhMNjFSQ2lBNUcxV3VoWlJSeU1ndWVGSnNMODRuTTc1K1lBb3V2amcxRzNTblNEdmc2MVJMcDVML0NTeGNMNDFNeHNtb2RXY0cycEVBVFJZOVc1TFB6VEd1c2NiYVIzQm1XQUtCK2lJY1JOd0t1SWR4SnZ3Y3hxZm1uV1orVWZsMzNuallYQ0RTTVRzNHVWY3ZFUXNCbEZDRjFtR0UwYThDQTJZVDZNOWZuUnFla1hpVmZTOXlOdVE3NWI1ZytHMS9SOVhyQkt2MXFhR1QzK2Y1TW5NN2gyZFcrK001OHJLODRiWFV5Y1JsMm9sSXZmTWV4YWlzS2h4NnJWcGpidEJKVThvOWpPc3JjakVvQU5Nb05HOTRKdnFkWC9kT2ZjWEZUcDd2OHI0TWZMM2ZsM01zY0xIVkU0dkJ5aVhVWmJCZm14cVpsR1pMNnRWTXJMMFplTURrZlMzMUJQY2VBUFlEMlB1UWI0am9MdXdWeWdmT2NIZ0xrNi96dkt4Zk1NOXdJYkVJTllPWjJ5c2xlQ3E1M0JleXZsL2llTW42bHBZaktqa1BseVdRK3pHclhEZTV2alJQbzFpQTJnRjdDZUFVRE1naDlDdXJNeTBOYzFVcTFHQk85R3ZOM29oU1R0emhCOTFuQUpjTi80WkhVZWlPWmZlMzBKOHdTNElEZ3A4ZnVLQi9ibXFFTU40VlRLeFNIZ0ljVGxTRU15T1NsMmMyMUhoaXB3SERrUHZsWHd5STV5OGVyS1FGODNpZUEyY1FHUWpPYmJHbWV5dFNsc0grZ0x3SVdLOTZrdXhWNEE3aHc5T2owUGhMSEphWFlNOUQxbGN6dG9DL0RzNjBzZGk1MGhLZ2pYYlFrN3lzVS9zblFIWmcvb01TQU1yK2tyU05vR2ZCeDR4ZUlmZ1JuUWsyTlRNZjFhMnpLd0Ura2kyWXVXVDFpY0JNOWdqZ0R6MlBQQVNjUkZnckxSa1BFRldOY09sL3Uvc0JScFgyTHFOU0NkN21pbGFxMjBLZEt5ZXdoYWpieGtFd1IvcldoNVQ3S04wUVJpcitJcDhteXVJMW9ORkJ3ekhWWEt4UzNBQTRJdXk5L0QvbVJsb1BpZk1Hc1JVNWhQTy9KUHhxdkg2anNaallYaStuTGZLc09YTGI2Si9ZRGlFNnRSSEdPellGaXJPT3g1YzAwNFcxQTlPbEF2Y0JYbTRzNFEzVGU4cHU5dnhvOGVxNmMrWWd4b3VReG1aUnRYT0Z6RHBkV3JGTUlQSkYwSWZwcUltMGFQenRRZHZnamlzNDNMcitmL0RQTng0RzNFVzBDM3NoeGQ2NDZPUWVGdlNUclA5bkhnSjBnL3hUNGc4eXJpNE9qVXpNbnRmWDI1MEttMThjRUZWaXMrUUhFT1lpTm1QWEU2cG40R3NydDJMUkduYWw0aTNpK2JBejRxazdmVUNNYmpRZlFTNWdEd0F2QUQ4SzZ4cVdPejdSekZNd3IrNmdKQ1drQmNQemJSeU13MVFXV2d1Qkh6RDBMWEdqWUpuNzFrMzljaFBTRnBDMER0TU5OamhuOFd6QW5tYThkWTNsRVQ2aUl3ZzVqRi9JSTRVWFk5c0F0cm04U2d6U0h3THNSbDhWa2lZWmhBZmdWem5zUzZadis0cG12TkVJRjNPOUxPanRvTFozM2pVRytkaHFhNjg4L3FzUUx2RXJwemJITDZRT0o1RTkyM25uM1dMNEVyZ0U3Z2JZTHZTZm96eEZZaFlaRDBKc1E3Skg0WDZBRUdrRllqN1JFOEFob1A4NHRQblhoOStZZHY2T3pJQVo4aTFvNTNTOXh2MkFycUFPNUUvbStnbndMTGlOOFJ2TFVtNEI3VnJMZmhJREFwK0NWaVZaeStNSUJxcDNiMnBFVjNKazdqQ3J3ZEEzM2xzTnd4TlZLdFp1RUhJTm8rMEJjNnJJZHFmbEpFblBpNkRDbUFaMjMyQzNZYi9zNWlmKzYxeFptUm12T1lwRmNwRjg5RjNJNjVXdkgyelR6aUlzeVhFVy9IMmdyc2lzd1ZqeHlkUGo0OFdNcUhhSG5JNkk4UTE4dmFhSnhyVEMzN3BHTEJGV0s1Y0FUeEVQako4S3VsVjMvdFdPdzNoVnJhZEV4NE8xSVVuempUUE9hTHdvOUZ1SnFiZjMwK3NTRlloN0N0VkFpZG9YTUQ2QnJnUnFHMWhsbndEVWozWWQ4RnV0djRka2tQWXJvUU40OU5UdCtmcEZNcDl4V1F6c2Q4RUhFSmFBRjdCcGhGK2tmTUxxRHFvS254aVdwVE5KK0cwN3J3YlNCVDQ0YlhGSXNTUDVTMEFjRDRKT2d6a2taR0o1cVcxNGFOdXpZT1dpOFZmSnJZSzE0Rm5KU1VOOXlBL1Q3Z3g4QVNhQ2Y0djBxc0JlMXduRGYvdy9ISjZWbWFJUXdQRnBIcHRiVG81ZVg1UjQ3T3JsamU2NUFPTmRJditwdENVOXR0cFJKU05JeTB3VGFDR2VEVGlDY1R3cWtMSmhaT2YzL29ETjRpY1ErbUIxRWxQbFFRMmI2VDJJNnRpK3liRlhTWDRoM1RxN0Z2Uld3RGJaSzlHWGdtVFg5OFlnYmlWWS9VczNxNTZVRXJMN0pkT2QyKzdaVlRWQVp1cnMzbms4REhPK1RIeHlhbmx4SjREYzNiVVM3bThoMytyUERYZ1BYRXZzeEcyY2NGTnlNK0FId1M2YTdjRzE1ZkZQVFUxcUp6amJwdHZTUWNCQi9aVVdwNHlrbk5UZzVHeEVxdGIxekpsMDArNERUbHJEWnAzQWlJZHBTTFNIeE8waEN3aUhSUFpMNDlNbmtzNmFFM2VldEdsd0IzU3lvSnJVS2NNSXhHOERtTHQ4dHNCVDF0czJ2azhGeGthMGtTbGhZY0w5SDNFbTlQYlhWSFdKK21uN2hQRC9xS3djMEtJVnBkU1VKcG9sa1FBQ0pwaytCUDRxQ0lwd1YvT1g1MFpvbHNXbHkvcHI5SCtEN2kvZkpEdGtkc2ZSRDRsdUR6bUxJaEV0dzVOaFZyWUNNZ3RmZEx2RU5lL3I3TnM2QXU0S2Jod1ZJdW82K3NETVdLZ1Q3VFVDUHJlU3VONG9hQi9xSWo5eTQ2SEpLakJ5MTExN3pVMjhZbXB4ZGEwQTBBUWI3VmNUUyttM2lYNUdIaEt6RC9HZWt4OEZWWS93TnpxSm1FbHhCSE1PK05DRHNGT3kwdXdXeFRGSDJST0ZpdFEzcFEwemFvVWM1S2QyUnBWZE5MdE1FUFFCVFpuNWFVNzFTMElPbEN6Q0wycmFOSFp3Nm44SnRvWGwvcUcwUjhDcE9UbVRMK0N1aE9TVnV3ZDlrK1QzREE4T1hSbzlPbnROQ2VOeHhSdkF0Y2xEUmtXSXY5S1BBcHhGYmlVN0pwazNMYWN0YmVmQ3ZCcEExZDJoVUlBSldCdmt1SXAxUVE2cTc1MVk4RmgrL1NlanJHQklKdWxGVUFQNHU1VDlKWGtlcmZwbTBTSEFkOWFHeXFzWmNlQWNIaW43RUc0eHdRZWNkNzhCL0NQQ2c0QXJ6anhqZTlhWHprRjcrb0MvV01WK2prTXQ4dS8zUG1aZXQ5a2xZYkg0dzNJblVTK0VKcVA2enhjazAweEZ0czlzbmNoWGpRMG5uWTg0aGRpRzhBMyswZ21zcm85NUJFdm5haURVNGQ5N3ZGTUE1Y0Z1VTc4c1RCYTNvNWJ4VXBSTkQ2ZEVlV0ttYk4weXlOK0dYdDl5bVpUeHFlR1p1YVB0UUN0L0dpMjBxbFBQYkZ3TE1XWHdXV3NPOEFualFjR1orY1NYK1ozT0E1anZvZENZWGFjcjhoRGxDMURmdGxSTUR1QVJvNUpGb1BkUEsrcFpIT1l1UjBCam9HOFcvaUg3b05zOExmYUVPeklmVE9FRzBGdXBDT1l6NEI3QS96aXlkM25vckhtdkFUNWNqaU9QQ3F6UG80RVBWYXpPNDQ5TlNIZ2Npd0VYaWViQTFLODlTb2I3ZXIwYXBSdTV3Um1JSmxCS3NSaDczc3ZTMXhFL1dXWjRQMSs0dWRtbmpzOElvVEcyMFhDb3Q1eFIvYXJJKy9MSXFQSElPUmxLdEY3cXRvMXZ3emlpRGFoUnF0R3JWVFRSQkZJWXd2eER6WHNkdzRUOWhLZ3dDaThjbGp5U3hreTJVM1FhdFJuOHN0UnN1djUvK1g0V3JGbVpPQzRJSUVUNEJQSnVoa3JiN0ora2I1VEVLTjA0VWN6U3VaVmE1OUFyVWVtSzZkaVc3bllHYXVobTNLSy9CSERzOEI3QmFOZzZNeEpETlhwL0lXN1l6emluTGFKMmtaTXFUcXlQaWxVdXJyQWZkaVpvd1hnSUUyREp5T2JsYTVKYjRpRHRuVUluZGplNWZGVWowelptcytnWjhjYU5xVnN6eksrbTlibnlXVFlLQkliSnlQRUIrUjZXckRUQ3V0VE5xSmRMa2x2Z1BIaWJlNnFhbExOL1plYWdlMmhVNm1hTFlUZUtPY25rWlJpa0R5cGJLblZMSXNGUkhkd0NDaW9QZ1RoSHFuYWZ3c09HTUhMbzBmT2hjWFpSNm96eXJGanVWZTR2L21tS2c1akw4dS9Vd0hLZm5zakZXeHhsU0pPSmY4QW5FY2RhZ043YXdScTkrbkI2bFZ1WUcvOC9CY2hOZ2xhbDh4aTV6UmViWVBHNzhjUlZGNmlxVjV5b1MwUTlqT0JtVTliOEt6V1VkOEtQc0U4U0dycEdPVzdpZUxoL1l1eEdud0kybldhTXh1N0ZSY0JLd1gvTGhqNGZYMFlwSFZ6NHJ5bVdoTTFrWG1yeGhBS2lQT3g2ejFxZi9seVZwUzA5TTZ6WEFXODIzeHh5ZW1FZEhUcW1VTHBkbytoWG14ZGtBaXJUM3Q3RjFFcWpMdEk3UmJBZ1BaV2xER2RHR3E4WE12WmdneVdjNnljMjM5cGRQaEt5d2ZRRHhmdjdlWmtqaVV3ajlUSTUxcG5OTkVzcGdqVlZlZllnOGpId1J0RWN4SHNLOE5FOGtYVDlMTDB1SXp4dC81TDhjam80Y2NiK1VBN0kyV2ZTSUQvM1FySTJRczg2ZURWbE1CZ056ODR2ZUp0NWI3Z1RmbnBPUkJKOUw0R1hSK1MyWHZybjFIaTlBM2NyOTZmVEVEUDZrQVdSb1U0RlN3K3VzSUtzczJSQUMxNDNucFhZcjBWR2lsRWIrMWN1aGNQQkV0NXI5Ry9NWGhZN1VOeUhhcmFCWTBUYk1rWk4yM3N5Ty82Y3UwVXU5Vy9mNWErSldCNHJvZDVlSzZGdmhuckJEL0gvY3dVWnZETzQ2NUFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUV3QUFBQk1DQVlBQUFESGwxRXJBQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBY0RVbEVRVlI0bk1XY2Y1U2NWWm5uUDk5YjFVM2JodDZhMkYxZHFlNkpXVGFUalRFYmtXVmp6R0JrT1N3NitBT1FINGJRRmFQb29LTExJc054V05iRG1aUERPY002b3pMSU9Ea2pUdEtkQVA0WVZFQjBFQVFaZEpERE1pR0xHU2JEWk5yWTZYUjNZazV2MjdadHBmdjk3aDl2VmFYNjdmZXR6dTcrc2ZlY092WFdmWi83M09jKzk3blByM3R2d2NJU2FwOWtDV2Y0UGdtVGJKZFZuNFluaVMvWk5ncytpNmFsNmtLbFhEeTNVaTUrUFlNMkFQSUpCRkhHNytiNnFBbFI4ek1wTU1sMnllYzZYQjIyWHAvV2Q3TFBadmlzOTgyNGt0K05kNWNYQ21GWlovc1d3VDVMSjFMb2JiUnBIbXp6NEFPTG1kRnFOcE1EVHpKcktSeFpFN1VVZkpMZUxHYWx0VzB3L096WHRHK1IrRHBTR1hzeW84OVVncElkSnFXaWxlUmtTVk9yZnRPWWs0WW5sWW5ieThXdTdlVmlQd3NuTjZ0OUdnMWhlN200UWVKTFF0MjJFWnhzMVNack9UVWp6WHFmdFJ5YjI2VU5Ja3Y2bXQrblRlU2laOE9sd0UwN0NvV2xwREs1ZkFHaVNsK3hqUGhMWUMwWUpBeVRUVzBXclpvOHJjdWlHZDdXMTVQUG1hNmgwZU1uMDRqSStFNitiOVhYVXRMWlRNK1ZRR2QwVnI0ZG1FMXJYK2wvWFljalJYdEhUMVNiNndmS3ZjdXdkeUp0TktEYXAwbUhKWEV0MG1GWmhDMW9HRkFKOU9ucnlqMmRLYkF0OFcwdGxjTFdVcWs5ZzZBem9hY09FdzMwRi9zUm15eFdPUmU2TW1sM3VEUW9yR3F1cS9UMTVJVzNJdzBBSURERVFtWitrYUJqQVUxTEViaEl6QVViZ0cwNWE5MFpERzVCWDIwaEtyZUY2RU9KL3JNTVRVdURvNGdMTUZOQVFXaFp2YjdTVjF4ZjZTdXVCTGl1dnljUGVyOVJZVUZqYXlQaURrd2VHOWt2eTU2MWpNVllvdDhGUEZqS3A2cVhaa200VnRCdmNlTzJVbTlIaXpZTGNHNWIwWnNIUGltNE5vRzM1ZklkNkN1MlY4cTluVnQ3ZTVQU3ZnWjRCWGhJMEFWUTZldk5ZKzRBdlErSVpLMENOc3AwMW1pTUt1Vml0K0F1bVNJeVJwT0cvVWdkbUJuczRRUk5DL3BkaWptTkFRUHNLSlU2Wk01SEFMb21sMk56UnBzRmVMZjI5aExrOVlpUGdsWjljRVdwSXdOMmtVR1FPUi80VGk1UXZMYlUyd3o3cjBBVG1JNUlGQUV3RndLYnNYdHJiYzhEVmdMTGdXakhxa0pBYkhQTTdGSEJBZVNDeEVBTjV6UVJCMGxYTDVrU2xsWWlnRGxGN1laMklKTGNpYm10c3FLM3F3a21WVnJ5T1hjSlBpL1VaYmt3cDJodE14R0pmaFl3ME5Ja1lsT1FuOG9ILytHMkZiM3g4aElkNEFKd2FUQ1RBeXVLYTRVL2k1akdmTDhHYzRWUXNGd0N3dnlwL0RMaUZSSU1oeHo1MHpKUnJPNEJHQjRhbTVoSTB0OU1XNXEreUNyQjhqS2czZWlRMFZlQWk1QXZUdzR5MlU1d0c3REZOcGhPcE5Xa2UvY2tmK2Z5djNrVmZGTFNXc1NkT2ZHelNybDRkNHlIWllnb3dwc2xuZ0tkaXpscys3bUJjczhxekNZQVRIZU1OL1JqMXNUUCtpN1NmN1FVZkpyV1o1TU1TdEFUcGZsSkN3YmJqTUJpQ2pFRFhpdDdXcmlLZEZ1bHI3Zk1RcCtsVVNvcmVnckFSVUlnSVNrdis5K2w5Sm42ZTgvUEpxdkF3OWdBandFUFNmcTRZRHNtd3B4QTNJSUlscitIK0pHSklxRnpFZjBZQkwwMXhtMldXSTVBK0FCd2tWeVRyL2o3SDFyUXRFaUhwVW5iZ3RtKy8ranhhZUFWRUlZTmhoRmdMZmFOSHlnVTZ2QUxnK1dnSXRJYXkzWEJud1hXMHJva0ozS2Z4UXhtT1hpR2lCc3REUU9YQU9zd1k4QVRvRFdZMmZ6c2ZCVzRFb1BGbkZIZDMzeGJUTHVtSXlrQzFsdXU4WkpwbzFkSTExMmgrVWVTT1Zucmx4cm0vYkhUd2daZ1NoakJRTlRadnJZSnRubXBuUjlic1pxell3OEM1N1JnVXBLR1lJWG5RRjhFbGdGYkViZGpmdzk0R3BnR3FwaHJoR2NRejBhdmJWdUp1QUI0R2ZzWjhMOE14SksrM3JFYmNWaDRrNlNPdXY0U1BpTHJRTXI0RjBRSlorcFduSzRUL3dONVRtZzVnRTIxUnZRTlcwdWwvQ0o0K0E4MXR4RHdsT0ZmUVAzYlM3MkZGa3hhUVBEZWtiSHFQTkZuZ0NzUW43SDhHTkFwY1FqeE5PTEhTTmNaM2hNUlhnQnRJcmFPSTBDN3pCRUZsUkQ5aWxmSGs1aTN4NDZxSjhFUnNHdncyTmgwMnRncjVXTFlYaTV1QU1KU29kR2l3UmdPMVFMVUlsQUdwZ3dQQU8vUDU2SjFRR09XdHZjVzJ6RnJVSTFNZUJWcDFuWW5ZbVVOOW96Sy9VZVBWNEZYYXg4QUt1WGloWUwxZzZNVFg2d1BibXVwRkVMZ0NrbkJlQlN4R2pTRDNTK3BHM3dDR0FaV0d6OEdMQmNxQ0QrWVpGU3Rqd0x3KzhCN2dOODlVN2ZpZEZFWUJ1MUhCcWtBSEFIK05UQXRkT04xL2FWOHJiUGdIRjJHRWtCc0lQa0JkaC9RTHFuVVRGZ0tzVXZUSmpwZGMxcHJKY3Jsb2k3RXVRQ1luOGQ2anp5d0hoeU05bHZrZ2NlQmZxRU5tRHYzakM1eUo2THJWdlQwQTNjQ2I2dnA2elAyd3hwbDc4allMUGlic2RHaUE1Z0FDc0JCNEhMWjYrb2R5M1FxZGhwQlZJR2ZJRllMT3NETnJrV1NsbVIySVpXcE5melZacGo4bktaa1RtQm1FVWVBWUZ4R3ZCNFRBZDhXZW9QRSt5VFdnaituZVJaSTErV0ZRdGhlTGk0UFFYY2hsZ3Rkb2ppcVdES1Zra1h3TTRneEdXbysxYXVnRWRrRndZMEQvYjJCMkEySmZKcDVNOEluTVAyT0YraS9TZUJmS3BPeG1FNnhuRmgvTnVqZU16NGVHWDVjK3oyTk9DSDQ3WnFrSFFMM0NmNFEwd1Y4TWNoMzdoa2Zqd0MyRmw4WEt1V2U3ck03MjY2SjFZd0M1aEpEM2pXWEk0M1FKZVBDWEZ2MUVQQXlNdUJ6Z1A4RmJuZXNHOTVkY3c3Qm5sTXQ3V0tZaWRBVVVJcjlJSDVHdW1WdWxXVmQ4TTdtRFk2bHFMbHRKUFR0MkYva2FxeDl3RHBCaCtGeHhJZHNSOERuNU9qMjZweXIyMG85K1lGeWNXTmJQdmRab1pja1BRRHFCSzhpRHR3bnNaL2xEQktJRFNLYTMrOGVucHdEOXRsTVlmNEM4ZStCV2FIVmdyTGdlZ0NwNW5uRlR1RlVNRk5DSmV3Wm4xYjRTU21QVXVyUzZBQnhycUxUUnFCZUJrZkhueVhpYmJHT05ZYURoaE5JbDlReUc3Zk00M3Nqd29kenViQXJGL1JVRUg4bjZWTnhtcHFUeVB1Rk5rcEc4bDFEeDQ2UDB1VHBOeE8xRkFQcnRjOEMwNkJPekt2QXo4Q3Z4QXp5NVpXKzRqcFRjeWdFUnNOUllHVk40VTdiSEdoaVFoYVR5S3JmMXRmVGlXbDMwRlJhbThGajQ0ZEN4QldDbDBGRnhJRHdhdHRmQVg0bm9MOEg3aEY4V05KbVVLTVBvNmVCYStKZk9xUjUvVmtXZzlKMFJlb1NjUzRjUnJ5STJGYXJHUUh2c2swY2tuaDlQZXl3RGZnVndUbXhvNnVuODcrdVRwS1JlbVp4SUorTU9VTU9yUUtPRUhrcTBhN3h2ZWZZZUxVYWhVZUJud0x0dHA1WEhLWjlRdEx5T00ycXVjWkU0MW53SzhqdkZTb0NoNEZyOTR5Tno5Unhub2xFcFVyWTNwR3hDTFNQV1BsK0NyVExDTUhMaXQyR3krcXhrR0JXOEJUd1Zxd3h4QjI3SnllVFVuWEcyVllnd3F3Ui9EVG5NSnNGdkwyL3Q3TXRGLzFYNGV1Qkw0RFhHWVl0SGdmUFlFM2EvcGJOcU0wWEhQbGRoaC9JeWh0ZU5WdzllSFI4ZnpQT3BSelhSZEY2ODB1aGgrem9iWUtQSXEyeVhURjhTN0FlY3o0UjNZN1pjQUw3Q05JbTRNN0JvK09IVXZvNmsxeCtjK2R2dFhseTk5aFkwbURFKzR5dmFWdFA1RnRBbXpFM2l1Z2c2TDFHNzhRZXNYZ1ErN3NPZE1wVXdXOUV1aGRZamZ3QzZDTkRSOGViOVN4a2JJSTBNeVpyeVFBd2VIU3N1cjFjdk1Od2p1Q2R3QWJCUHN3aG96TEI2eFduZzU2M1dCYk1FWXV2WEZ2cWJzK0hjQTJPZmpCMDdNVG9HYktvUWRkMTVXSUpjN0hnbmdYMXBXSjdDR3dFUGdac05EeUx1Q0pFT3NoWnA1aXZ0bjhEL044a3JUVGVodGdpTXdkTUlVcVk1YktlQjFlR1JzZUgwOFo5cHFGUlpoa2NuVGhSNmV1OTJiZ2J0Tkw0RFlJaHhFN01XeDMzOFRlQzg1QSs0OGdkK1JCdUJTN0t6ZW5CQkVGcEVyMUlzZ084RzVpd2ZYSnJxUkR5YWl0S2JBUnVBRGFEUm9EYlpEODZPRG8rVTI5WFdWRzhGNmxvdkVQUWdiU2FXT2RpR0FWMkUvbFBCOGNtaHRQNmhWZ25MM3B4V2FFUXp1NXNMMkt2bDdRT2V4bzBaVHdOVEVtYUFzWk9SZUhrZy9HU0NOdjdpaGNBOTlvOEJ6d2crRTV0UTJIUzF2WEJYaG5CSzBIY1piZ1k4ZGpRMFltcld6RW1wWVNCRmIwRnlVOEMzelM4S0xnT1dJOG9FTWVaZncxNmVPam8rSkcwQ1JnbzkzWUkzbzM4RHFDZGVJL3Rud1NQaGw5VkQ5UjBhOXFFQlpxWDVQdExoZEFXMmd2QWVzSFZ3TVVvckJFT2hJRHRnMElkUWl1Umc4MkJ0aEFOVmNyRmg4QWpvYTM2YkZSdHZ4ZTRIZmkyNFFqV0t1SFBnOWRZVEF2OU5lSWMyWE9ZZldRdi83VEVadXlVeXRzVTUrTG1CRGNEWTRnOXdQY2k2ZVY5SStOenRJaGc5bzZPendMZkFCNUtZMGdTUHZtZHY3eFE0TFd2YVM4RzhVbnFla2lLOXc0ZDd3WURDSzIyL0l6dFoyVXVWUnpnbm11NEZYVC9YTFY5eVBiZUlMMWVxTjN5cTloUkJBY2tib3pUeFE1R2p3c0lVWGdzWXlhVGpHckFiRnZSMndXK0tmYVpIQ0Z1MEx3Zkd4dzdQdDBFMTl3K2E0TWx6VkZPUzBrbm1SZnlaM2UyYlFjK2d5aGdYZ0JHRGF2aWpTRTFtR2JZalpsR2xHdytJL05HeEE1TUVmZ3ZRaCtYZUF3WWl1d2p0V0IxVnVKbTBDV0l4N0U3WkY4RXVucjMyRmcxZzZoRmpLcS95OGtmUXF6Q2ZraVJiaGdjRzAvYmZUK1RrdlEza3hPVjZZdHFlMS94RTVoZVM5MUFOM2lMb05qSWtEYWlHODhDTDJNT0lQN0o2R1VjVmJIbUpMcEFxNUIvQjdRS2ZCaVl4cXl2OVRNQm5DZXhEdlBuZzZNVHR5U0liaFh3UndDVmNuY1JoWitDQmlWdUd4d1piODVTSktVa0RXZVdGTFdVcUdTZEFIWVVDcUY2OWxtRUNJVHpXSmNLL3lVeEV4c3JNL2JZbVVQc3h3eURwc0dkb0kySUdleER4REhpU3hLWFliWWFKaEd6TWs4SVBnOGMzRE02MFVvcVVuVlBwYSs0RTJzTDVsMUR4OGFibDJBcnlXeUZmeWxEazJrbEZ3RjlvTGMzek9laWt0QlZpS3VCellLQWhlRjU1SGJNYXFCRGlqY1lYRTlEVzVQQU1QSSs0R3FablJiUHlNd01qazdNTlhjMnNLS25YMEZYRFIyZCtFS2xYTndZN0JON2poMC9uQ1R5dW5KeFRZQW5oVDZpZVI2dnAyUCtmNVFrd3hhVmdmNWlsOHphR29QNlFhOFRManZPdGhhd3V4RHRtUDFJajRCZndOd0kvQzNpWHBtSHcwejFocnE1SGlqM2xJRnVXYXNRL2NCeXc0c1Mvd256UHdXUERzYlp6MGFwbEl2ZkJsVmxLb1BIeGpORG9mL0hrcFNvTkFNUzVUTUFHNy8zamt4TUFTOEF6OWZyZGhRS29icnNyUFlRYnpCMEFJSElKNGZHSnFxVmN2Rjl3RHJnaDVpcW9YdStzLzBTSnZrZUVKQzZaRzBrK08yWTVaZzdKSzZzSmZSdU5yd1J1S1hlVjZWY3ZGU3dHZk8yR3JOUy9hTVc0MmkxQkpPV3VaV2xqdDJLckJldDZuWlBUa1pNTWt1Y0hHeGtDeXJsWWhtNEZmZ09zWUtmUSt6RDNGd3A5VHczTkhaODBoR0hKVy9HUEFXNlh2SkJ3MlUxWW0vRE5FS2xTbDlQRithenhHY2doak1HdE5TQXM4SzdNMkgwSXNPeHBJU2R3VzhnUHZzRjBiWlkrZk04NWxaQmxYay80NkRMeUlVUEEzK3k3OWhFdGRMZjh3TmI1d2J6U0RVS3Mva3cvNlFJMDBPajR5OHV3RzE5WE9JYzBGMUlWU0NxckNpZUN4UXNEaUNtOXg2ZGFENG8xOUx5YmkwVkFoQWVISnVjUzdSSkcxY2Fya2hraTJ5cXRVclVOenFvbEl1ckVOOGxkaWZ1UWV5U09SUm1xbStPWHR1MjJkWXV6QlZEeHlaZXJmVDFCdXlyQkZYRE00YUJ2YU1UWDJqdWY2QmNYQ1h4OTdMdWw3aHB6OUh4dWV2S3ZkMEIvMURTM2JiZmd2UjVvdWdJa2VkeXY1bWIzVDA1dVlET3JUM0w4L20yZkpmaTdjRHpnZDhGT29Idkc1NnhHZGwzYkdLV3hZekpaUG9DeHpDalFkWVNYZUQ4U2F5UldZMzFDSENsckE3ZzVkMlRrNUVkWGdDOWlMaHBvTDhVaG82T3p3azlidWdRYkF0eEROaklpMjB0bFVLQXUycFdlZWVlbzdGVkRQSlZvRmR0RjRFQ2VCblNBK1RDcDJoclcrRFZieThYMTdhMTVYY0pua1Q4Uk5KOWtqNGthYXVrK3dSL0Y4VFhLK1hlRHcrVWkrV3RwVkpUOHdWOGFQNHNDaDJ5WXJqbTkxSGlHU0RZYkt6bFYxK1B1Tmd3WWZTblFCZ2FIYThDZHlPOUYzc2p3T0RvK0VuRUM0YTNSaUU4WGUvcy9jVnU4aUc2Q25FVjhHV2tpZFA5KzFId2Q0RXJKTzRXN0JRY0FYMXQ5L0hqRFZwcUo2dnZFOXFCdEVHb28rSDF4UHVqYzdXVFAxdkFPd1ZmYlF2UlI3ZVh1cE5IUDZQRUp5U3pGVXRsREZMMTJiWnlUOGhKandndWJZU2YxaDhQam83ZlZnZmNYdTdwQkgzYk1OWHUzTlgzSFRzV1ZjckY1Y0I5UTZNVFZ3QlVWaFNEeEhxTHY4V2FCZDQ4TkRvK09sRHFEc0J5aGZCWjRFS2tNZXpua1g0MGRIVDhhODBFVnNyRmttQWY0aUtmamxRaVl1UDBYT3h3TTJYNFIwUlI1aDFJVzRCSjhNdFl0MFh3M0w3UjhYcTdCVUxVYkNXVE9pdU5TV21LTU1qdUF2VURjMEFlYzFCRTl6VEJNamg2ZktiUzEvc2QyYmVmWW40bGNhcDRsZHc0L1l3Q3F6Q1BnTG9rYm9zaWQxWEt4UXVCTndIYmhaNk83TGZ2SFIwL2trYmY5bkt4YUxqVDRnVHdCY0hQVFp4aWloMXEveDZ3bVRoV1hpbVVOMUE3d0xNY2FZdkZENFA1Y3FXdjU0NmhvOGRQSk1hOElJRjRwcWExR1RhT3IweEFZQkZreGpBZjFLOVBqUzF1NjBjTk93bTZGUGh6d1lYRUd3MXNLeFc3YkI0UVdpa3paL2syaWVzUnd6S0hRZThoaXZiblprODFjRjVlS09RN08zTExjNFF5UVdYSDUyYzNZSjRBdWd4dnJoMm1XeDV2Y0RCQ3ZNbjdnT0VFK0Zha3pRM3FiQ1RsTFg4VTY2Skt1ZmhYeGs5TXo1emEvNjJhUVZuUzB6K1RNdERidlZ5NThFT2tsY0FOT2M5L2JmZm9pV2JHQmlDcTlCV1hBWTlnWmlKMFJZQjl3ZzlVNTZMdnRlVnpleVJmVlR1QzhEeXdjejZLOXMrYmsyZWRtcHVkaWdqTE90dlgxQUw0dHhCYnZXWEVSd1ZtRUtIR3JHZUF5MnZITWllQWdPaVdSUnpBNlNENFpjUUZXRVZ3L3ZUK2FSemcxWC9YWXVjWllqeTdIT24rdE10WlMwblg0aUtpR3VFN0Nmckc3cDh2WUZhajVOcXFNL1BWOXU4TDNSVE1PdVR6Ykc3UDU4Tk94Ull3WGgvV3VlQy95b1ZRemNHVWMrMWpad05JMWRwbXlrOFUrVDZMU1dET3FDVDdKdUxOMnBmQVpkQW16QW5qNndVWFdQNDltZk1sMWhuS21GY1J5K29uc0czUElFN0lsTERiT2MyNFRzd3E4TWNJdkRGWFkweGRQVGIyWHB1K2FZSkpMZWN0NjZvaVM5YnVvYVBqdjY3Qk5yY1I0UDJUczNyVDJhK2RGZncrZ1J5d1d1S1hTTGRqQmNWSENKQTREaHhBM0kvNVk0SytnZlF0NEg1VjV4OGFHai8rd2t2VHZ6cnhwcTVsQWJoQzhHZUNVMEMvNEsyU2R4bmVqclJDNk5pcEtQejNYSEE5eTNvTUtBbmVKT2sxdGEzQnVGZnhLK0FmQkw5cVpHcGk2bDhoWGhsL2xIUmM2OHhaU3RJV3dYeGdWWUU5dzVOTDRhRlNMdllML3RIeGFlZEkwR2xwR2ZhaE9NbklVNEtEa1RtUyszVjFkczlwWjdTQlo2RFUzYTRRTmdPM1MxeUFPZWw0QitsNnhCam1hY1JLekFCb3pQQ3V2WEVVd1k1Q0ljeDN0bmNqTm1PdVJXeVdLU09GZUQvRWtXRUdhUVJ6R1BGRHcvMTdqNDZQMUdjK09iZ2tnYkNZYWEyWTJwTGhsWEp4bytBbjlkUjNiUllmd3R3ME5Cb1RsVGFKbHhVS25OM1ozcS9ZeW4wUTJDU3BDNWkxZlF2d0Zra3YyZjR0MEE3d0xSSjNZMHFXdm16cFkzdEh4dWFhY1EvOGRqR3ZpTlhBSmt3LzRvak1XSnpEMDhqUTBmR3hCQjBOSzlreUJrdXBheFhaWndiRjIxWVUyNEZLdkF5TTQvTmFEeEhDRFVOSHgwNDI0VnpBL0sybFVtZ0wwUUR3YVVSWnNhTThVbFBSWHpSTUNFcU9mQXVCWGRqOXdCc3hYMFA2ejhCN2lYd1BUYWNqQWZiK2ZHS09PSlYrcUlsV1dDeEE5YkxnOUU2UzBQcDNTTlNsUGFlOVc5eVpXQWZzaUIxYjVnUi9ZWFA5ME1qWUpJdWxHQ0NxbElzZCtSQzlVK0lHNHF0NUU3WHZBdWdPN0g4VzNDdTROM2RXZFZKd2ppUUVWeUdlQkU4SmlzTHZybDBUVEk0cE9VbTBlTTRjWExOMFpFbFJHa3hXaVFaV0ZEc0V0OVl2VWhrZURsRzRlZSt4aWFtTTlpSE9nUEJIZ20vYWJKSzBTV2kxMFp6Z0J0a0JjUy9vV1VKNG9qR1crTGo1R3B0cFc4OERDQ3JSYTlycUFXTWFROUltZlpFYWFoVTdOajluZmFlVlJYcHJhMjl2a05oQzdRaVI0VVVGM1pqWU9Vb3VnYWd0K0VMUUgwaksxMDRCVFJydnRyblNzQUh4ZHVKSTRhN0JrYkdaM2NPVGM0MXd5Qm94ZENMdmpFOXZhNjFEMk1LWlNWSWFQNktzZ2JlU3JqUnBTeXNMM3VmekZCQjMxUEwvRTRyNHlPRElZb1hhL0x5MVZPb0E3MElFNHlPR1FjTTdiTjB0K1V2QWJ4bk9GOXFkaS9SaWZYQU5KeFFma0hoUHJscDl6dVlidGVvYkJ2cEx5WHVla002SFZKM2U2bDhGa28xVGx3M3Bya2ZZM2xkY1JzUjUxVWpQeXY0MDBpYnNxdEhPbkxVL0JkY0N2RzBoK2lQUU9lQWZBOU9DSVdBRCtMTll6eUdmajFYRjNMTjdyR0g5b2xqQVBJMm9ZaTZZYTJzN1YvQlZ3OFdZallxaWpjQXpMSlRvcFl4ZVkzekpsTTVTT28zRSt5dy9MYko1TjlKZGJUbS9FL1NKMmwyaFJ6VTMvK1dVSTByTnorRzZVazgvOEZIRnNXa2sremJEOVlKN0pVWGdRNWp6RUxmVXJ0Q2Nwc1dldHZXY3pEbUNVbnlEbVBPd2QwbnVyTzJDWlNyMWpQRm52dmkvV1hLTFlDdDlQV3VKejFoc0VMb1AzQ2swaW5USDRNU0o1SzdQZ3ZiYnlqMkVvSThnZFdHL2dMa0pkSmZFVmxBNzBDNzRrT0J6aW5oMGFIUnNJUzFpR05pTXRNSHhqbFFCOFM1Z2pQaVk2UGs3WHZlNkRqSW11cWsrbFFkWlhuenlleW0zSVN6NFdCZElXbWQ1eG5KSDdSN0liczN4U2lwOEU3NFFSRzBENVFqbVk0ZzdnWXVCeVBJaDR3Y3Rya1MrYS9EWWVITSt2MTRPUzNRQytacGZ2cW8yeGs4Nlh0YkZxRDJYL091R05MNDAwOW1BVFo0UGErV01Kam1mckd0ZXB2R1pMSE9nbHJjL0Y5aVQySUJOZFpDamVYWGt4SG5FUjhRL1UydjdNR2JJNG5rVVJ2YU9OSzVsTDQ0d3pEOGJJNm1XeU9UZkdrWWxiYkY5QUhHSStITFlxeGxNYTdtNjZydEdhWUJKQ1dybEJUZlhCUlJuQUJUbnBQWUxSeUVLaDFPSVdqVERPZmtpb0lqVVlmTTN3TzM2emR3cmc3ODQyVHd4V1FNTnRVQjVDdHhWQytWWGdWK293VndET21tOGdmanFUTkp4VDQ1LzBRU243VXUyWE1ObjFJRWI5Mzg2Z1RIRFdFM1JwOFdZalhiYitucEM3Y2JHMWFmYTlNU0R3K1AxN2JDMHlWcmtWTVpkYTFoNEF0TVZuNmZ4U3VMN2xBZzZNR1ZEWDR1eHRGcW1VVlkrTEFtWWhqVExXNDRRUGE2bmZlRTNjaU5XUzg3b0FqejNIejBlQVh0VCtrZ3UvVlNHQTFHKzdUY1Q4NmZhRDdsMkhGTlNQOUFmN3pXb1pxd1hYTGNKS1gya2pYT1I0NXBsSVpOSWxwWStxeFRudHRRdHlEa3czZFF1VFRlbWxTU3prdlZwdjhQdTRja0llQ0hPcStsMFFrNU4zMHIxd1U2cmxHd2hhUm5pTkpjMEs1bFdvZytVZXZPQ2NqeVZEb1p1ekVTck5rdjBsYVh2TXZXb3pFOXNSN1UvSDhMMnNCZW1SazhsMmllam0xU0RsRVpFdlM1cDd0TUdsZW9Xekd1K1lMd2NPT0hZbzk2TU9jbml2cEk0bWsxNEdrMW5vbWNBY0h5Vlp5dysxQVpJUnhERHNaZGhrSnB2M3A2cDBDd2dPa2xZVWw4MHd5WmRpd1Z3Q3VwQ0xEYzZBdVFGSWN4NWxQU2xsUFpKd2pSL3AwbEVNMndBb3RBMmQxandYSHpzMU1UWGVQemoyaTd1bk55NEFkZE1mNW9BTFBKSmt4VlpubTh6OHVSZ0VrVmR4TnRhN1VpckRhTjdqaCtmYVFMSWRuaXppVTNxbXl3OEVSRDJIRGtaSWU0RFYwRklXZzRzUS9HdE51T0RLZVBPbXJDRmpuWEs0SmZTRldubGRIdFRKcjVkTVFkK1dpeTZucGRtUUZvWmxxeUp5cHJNQ0lpTW5qTnhrQityTDIxeGZKYnRDS2ZtRDVPOS9OTjQwY0NmMWlnTFNTdi81UFJ6Zktvd0FwNnQrVlJKbUxSMlNWclNWRVd5UGsydk5kb01IUjAvQ2Y0cXVMNFRWWkIwRHZEYzBQRmZMTGoyM0tLUFJieEpFdFpxY0ZuS2VBRkM0UFUxRzE0bS9rT1BMS09SdGJ4U0NVMnBYOHI5UWZiRG1DTzF2N0NCZUEvaFJ5bndTZmNxMDNWcUpXRnBQbHBhU1VwZkYzWW44UitCZFBqMGZ3cW05WkZtUEpKNDA1UnZXbGswK2FIOTFHRkVuTHFPdmY0VHhKZjVrN2l5bEg5UzZrS2FHQ1lIbFVWY00wd0QxdVpMaUsrQUpoU2ZtL2grUnR1bGNEZlRrU1ZaTFNkMTkvQmtaTFFIYWFybWc0MTRMaHB1MFcrV0xtMThVbytkWi94dTlaeEtjQlBjbWVMSmdrMWF5YVZ3TmZxdjlCVTdnZThJWFlENTlPRG8rSitrOUpVMWhrWDF1UVJBL2JoQUdnRk9lYTdEWkIwalNCNDdhQ2F3N25zbm45UDZ6SHF2QkV3ZzBkZUJYLzZxK3Fhelg5c3UxSTMwQnkvOWNubzJCWmNTZENYSFZxOWZkQ2g0cVdYWVN0OWxLZlkwK0t3bDFxci8vMVA2R3M4U2oyRS9QWGgwdkhuL2N5bVhJazN5b3Y4TlpvLzZ5cllzbE9zQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9mYXZpY29uLTEyOC1hNzk5NTg5NTI1ZjYzNmY4MzhlOTUyMjA0ZjkwZDJmOS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQ0FZQUFBQWY4LzloQUFBQUNYQklXWE1BQUE3RUFBQU94QUdWS3c0YkFBQUNEMGxFUVZRNGpZM1NUMmhVVnhRRzhOOTlNeFRKWkVyODk0eFBLQ1VVVjVKUkVhRXVYQlVYM2JrU2thZFlTcUhZalF0WFhRamR1R21oRnJwd3AwekVpcUtRUlkxMElmNVpSQ3hGeGtFa2hCSUtHY3hnb1JnVHBFN2U3U0xQWkN5ejhNSlozSFB1K2M3M25lL3lIdWZZNkpia2VKWU92YjNuV1RxZVorbVhVT2xMSG1qVWEzKzNGcGZlNUZtYU5lcTFONjNGcFY2ZWJmc2doUEFSZGpjK3JHMXUxR3NybU1SMGEzSHBqMnJmb0gzWWp4OXhMdkFEV2tJOEpEcUNFZEVNbHZFYUxValcyb00yVHVRN3RxVVlpNHlWaFNuOExMaUVMV1YwQTQvekxEMjBEc0FEeklqeHEzTEtNRFRuRjNxQ1o2TGZjUTJmWUM3eUczWWxrSTl1VFlyZVNnOTNzUWN6ZUx3R0hZMmhXc1o5N01XdEVNSlAxWEtiWnhPVldkeEJCMmxnQ1BJZGFTTDZERk14U1NhclBaTzlTdkg5eEh4M2VWWDVxZ1A3Y1FBYnNRazN5LzM4aTRMUWJuWVcvaGxrY2VpLzVGazZVamFmdzR1U3pVRnNDdndhVjEwNlhFcjlwZG5wdnF6MEF6VHF0WjJCdndTUDhEbE9vWWNuR01mUmN1Z1hPTm1vMTVMK2Z5Q0UyRTVXS3UyVnBCaEdMamhkZW44R0cwb0x2MGFHRWR4N1IwS2ZqRzhJTjRxaWVKWWs0WEs1ai9QNEZnK2JuZTUzYjk4bi93ZkFjU3czT3d0UGt5VHN3aXd1Q0tieE1UN050MjlkNjZzT0FOaU0yeEJwVDNTNnJUNTJjOWdid3pyeFFRQkRnVmN3MGVrVzcxU0NLNktoYXJGT2ZCREExY2lmQS9Kd0hSc3VQbisrQnZ3Zk44ZWRtUCtQdElBQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9mYXZpY29uLTE5NngxOTYtMTZkMTM4YWY2ZDAyY2QwZDE1NGQ4ZWMyZjA5NWQ4YzUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFDWEJJV1hNQUFBN0VBQUFPeEFHVkt3NGJBQUFHR1VsRVFWUlloYjJXYld4YmR4WEdmOCsxbTBiT3k2TGczTGczbzBTbzZxb3FhN2FxakdtTXJYUVJkRWhzbzN1aE5MNmhva0tESVRaVmFQQUJwZ3BWa3hoRnFzWjRrWUJXcVIxZzdTWXFnVUR0cUFZcXJWUjFvMEloNnlCQVFGRnlhN3NEbWRDRkxMWHY0Y04xR3lleGsyeENQTi91eXpubk9lZi8vTTg1NHYrSTlCbzNJZkU5MEo1c2tDOEJPUC9MQVAycHBEUGd1ZXRxZmZPNzNMZ2pmZ0JzQnd1dnZhOUp3UGZjRGJYZTcrenNkSGFtVW5WSk96Rm52Y0dqYzBFN2tuNlhtd0RBK0pKSnU1Q0tTSE0yQzUzc1RxVWN4SE8xU0t5SzJjQXFKL1FXRSs1MEswRzJJS1o5ejIzMnU5eGRvQjB5dGZ1ZWV4dndGR1lUbUkxbkovUDFLMUJTT1k3UkRlenoxM1E0YzBIY3RjQUJZT1BpM08yUTc3bGZCVzdDYUFXZXhTaGhQR2hZTytMTFFFYmlSc0dyODZxMjBGWG9VQUptZ1UxSWZWV2ZkZ21TZ3A1RjhjVlo0QU5DTzRBK3hDM0FHSEFIa01MWUNqaUdNSGhsU1FJL25yd2NJb2FCSlBENWZzK05WNEo4MEdETW9IbHhCZlF0NExoaFJ4RG5nV2NSVzRBUm9FMVFCSHBrTmlGNEdTRGQ1Y1lIUEhkZFBVR2RCQm9BeDVIdUE4QllENXdHN3Q3ZDNqN1BManVabjg0R2hlOW5nOEkzTUg2Um5TeGtNTjRQVEFFM0d6cFQ4YmN2RXhTS0E1N2JLT01aZzc1NkJINkdpQVBqR0Y5TTM1aHlGRG1ZQXR5d0lWYlRLTjNWMFF5VUtsWDVGWkFEMW9IMUNJNkcyQW5mY3g4M09JNUlBeGRxRWxDc1hNUTRCbHdTMXEwdzNBWmNVKzc1VE81eVdOTU9yUVBHQVdLaG5nZWVBOXFCYVlOK29iOUtIQVRXQzUxQ3pxczFDV1RHL3hFaS9RVFlhM0JCOFBGSzlpV2hBM1dxQmthM1lCU2dSRGtPM0E2Y0IxeWdBUHpRakJjckd2dE1kaklYWHEvbEEyMXR6dnZhV2xadmFrN0VOeVFhd3RXTjViOVpPYVpLQmpjUkNlb2w0TTdlNXNTRjRTdlRWNnRqOTYvcGRDVHVCLzdjMjlJMElPbXpvT2VSdlFpNkZmZ3dzQlk0SStPeFRGQ1lBWWozZTI2REF3OEFud0R1RkFwV093Mno1Vm5PSTc2RDhTNGk1YjhHK0JLbFVKcFptTHdqMjFieGNRUGlxTW41N3RCRUxnVFluVXJ0S1R2aGt5Wm1oeVlMVS9PT3pmZmMvWWdlak8xSWpaZ05BMmVJcnFnTFhBUVN3R1lnSWZSb0pzai92dHFKMytYR01RNEo5bWVDd2wvcUhsRU5YRy9LdnVkdVJ1d0Z0bUpNVjRLMkF5OGppaGgvRUJ5K1dxSVlqN01KbU1rR2hZc1YyeDJnTjdKQi92VGJDVDZQQUVSem9Cd0xvUlE2Rm8rMXlTd09iQVUrQXZ3SjdKdWczVUFiOEI3Z0tEQWkyQjlLVHd4VjlmaDNSR0FoZk05TklJNWdlSUt2R0NRUUl4Z2JnYkZzVUJqMVBmZHJrazZhV1JJQXM5T3gvMXlkR2l3V3cvUWF0MDNpRG1DdHdRblErRkF3bitSeSswQVB4a2Fob2lwZGtPZzZ0VXVNK1o2N0JmRENjdmtja2NJL0prYzdhV3hrd0hPM08rSVM0dWZBVXhKSGhiM2dlKzV0MVNPOWRrdXJvTGVsNlI3QlE4RERtYUR3Um05clV6dkd1NEVXb0tDb1piOGk2VmJnTmNTZ2hmWkhjN2diK0RUUjVEdEhOSmhhaE80RmZTb21TL2EyTkkzMnRqYjlLNzVNQldaTjZzOU81a2Nyenk4QlR3TjU0TGhGQTZzTmVCM294dkFrTlFBUEE0MUFFbEhBMkV3a2FNQ3VDQjVEZXR6TURpOUpRTEtmT21XbmRPMjVIRElWRTdjRDNZaFRHRThEcDh2VHM4VllZbFVyS0ExOHJwSjVDR3pIdEFlc0NEeGkyQ2NSamhsakdMOEZqaTBwd29Yd1BmY1dvbm4rZGVUc3kwNUdqY2IzM0k4Q0J4RmduQkNjTlBpUjRJUkJMaHNVOXRienVlS2xkSmZYNlFEUEFJTUtWUjE4Ry9BQ01JcHhCUEFRdndHMUd2d2FlQ2pkMWRsYXorK1NJcndHMzNQdmNxQVB1QWYwU1BaUy9pMkEvbFJIZzZUakZRSkpZQVBvU2NFL2lYVHdGakFodUdINDMyLytycGJ2WlN1UTlqcml3TUVvZXoyUkRmSlhyaHZIZEplaUlkV0hhQlljeUFiNWl5WktpRlpnRTFGSHZibWUvNVVlUVJJNFJyVFp6TUhvcVpUNXdkaWJzeC9LQklWZkFzVEtUa2cwbHQrTDJBQnNxVjV3cTdIY05VUW9YaUh3ZWpiSWxhcS9HWHg3S0NpVUZ0b001bktoMytXZUEyM0ZTSUZOSUJ6bWxwcVZFNkN5MFJEZDYzbW9GYnlLM1ZuSk1PUHZRR2lvNXB4WW5vRG94aWdvYXNFcmhyQlRoZ0tpRlg4a0h0WSs3WlZvb0JzSWdFVkx5RkxJQkpkbmdNTkk2NEd6ZzdsY3pRb3NUOEFZQVhJV3FmM3Q0aEJtTTBTRHJDYVdQWUpzVUJnRy9IY1FuTmlxMmZIeWJNTVhZcUZ6b2Q0Ly93V2gxU1UrSHRBQkV3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZmF2aWNvbi05Nng5Ni1kNmNjOTZmNjY3MjU5NjU1NGNjZGZlMTk1MjAzNDNlOS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFKWUFBQUFvQ0FZQUFBQWN3UVBuQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQkdDU1VSQlZIZ0I3VndMY0J6Rm1mNTdkbmExa2l4WnlGcHBGeHZic1kwQkpiN2dJNDg2SUVIRU9SN0ZKWVFLU2h4c1NUWW1keHgxcEtESUpRZDFkekdrY3VFd0lVNm9VQVJNTEV1R2NzcXBBa0lTSUx3VVNFSW9ReWdjd0pCZ1czNXBIN0xXZWxpcngreE01MnZ0U3A2ZDdaN2RXVWt1RXZ4VmpXWm4rakU5M1gvLzd4R2prNGlXdXJxTE5KL3ZzL2k1SE1jS3psZ1Y0MXpQRmgvSDBZc2pTWnkveFlqZU5OTHBGeDVPSmcvVEtmek5RYWVUZ0xaSTVJdGttamNUWXhmWTc0T29uRldYWlFyWUZhSWtvT3VpL2luQytoc0VvMWxFYzNWMWJVVXd1QjJFY2psNXgvNXQ4ZmdTT29XaTBkellHS0NEQitkVzZyb3g3UGVuS3lzcjAyTjlmWFBPR2hwS2JpU3k2Q1JpTmprV0t5OHYveFhPbjZSU3dQblR4VlJyWHJDZ1BEQSsvaW1kc1dhME9ZOXJXb2haMXB6TUNOaDc0SXB2V2JxK3ZhT241OWxpK2dOM1BZOHNhd2ZFZEJCdGd6UXBxaGxMYzg3N3NCTVRPUFpobFY3MldkYXVyVWVQL3BGS1JHczQvQW4wZFFXZXN4SWMraHpjcXBsNEhwNkYzMUhjajFtTXZXWnkvc0xEaWNTdkMvVlhjZXhZRTFWV1BpMjRmUVVPUGpKQ2dZb0sybGRaZVR2RllodnBKR0xXT0ZaYk9Md2VrL1FUS2hGcHd6aWpnSDdGV3NMaHF6WE83OFB2T2lvQXh0aTdPRjNXSG90MXU5VnJDWVhXYVpxMmxZckhYaERjcG81RTRrSHl3QlZhR2hwdTBvaStYMng5ek9VUmJKcDdPMkt4LzFkVmFRMkZybWFhdGpPdktkRzlIZkg0MStna1lsWTQxcHBseTZwcGFPaC9xRVJnSWx5VjlwWkk1QnpOc2g3RVpGOUFSUUtMZnhaT0w3ZlcxOThBSW5oVVZjK25hZU9jUEdFcGlQYit0b2FHL3dMMTNyRXRGaXRJbE0xejVvUkFWTGVTRnpBMkh4enNUanpuVW4xazVPcUhCZ2VUemlvZ1BGM0dLY0RCSzV6MzF0VFdMZ0EzbkVNS2NOTWNaWUhBU05uNCtOamtQY3MwZlZvdzZEZE1VemN0eUFHL1h3Y2hCNkUvQnkxY1Q5YlQvUDU5VXhmTnA1MDJ0N3lzcklXWlpvM29GNkxBajBhVmxCRUhOYml1eGFCREtLdkZVWTNKTDJjWndqd09YU2hrSDVSdmFPaGluRDVFWHNENUVDYnZDSDc5MlVlazVIUnQ5ZlVYUUZRSk1WbEozaEVHRWV4QUg0M2JFb205SkI5SEN1T2dFckJZY0dncy9Qbkc2T2czSGhrWU9LYXFXRjVaZVQ1TzlWUWFMallxS2piUjRPQ0dvbHRnTFoyM1FCUkNUVm1oYktOblNJT1hsWjNvaGlZMlBlbWFsc3VSZkQ2Q3RaL2JmUEpIWlNCd1AzYjFha0tqeVU1bzBtckRSRHVuZXVxYTg2UGtMT1A4QzBVc3puNDg3MmVvOXp0S3AxL3Q2T3M3VXFqQit2cjY4MDNHbm1LbEVkVWtBbmptODlmTW5YdXUyK0pQQTlmNXk4byt2YUc2K3A5a1hFV0FXOVk1TER2UHBRRHp1MzVkT053SnNkNlYweS9ubzdKNUIxTW9rM1JUUmJPSUtjTENvSzR1YWFjeWRseHk3eC9kbW9CY2Y5cGJWZFgyNUh2dmpWR1JnUGhiQ0NYMnA1alVPVFI5TFBTWGw5OUdBd1AvU2JNQnhwYW55OHZ2QWxlNVRsRitHazBQREtMb1BKeTc3RGUxak5LZkJ3VUpqOUlzWXVLWnpXQm1lTm5TdDVBTlVFb0ZOL2tIbHlvN29FaXU5a0pVQXJEQS9odEV0WUJtQ3B6ZkFyRzF5bm5iT3VHd2RXSVB1TXpsbUtjYnNERzJnQXNVOHE5dFdETnYzc2RsQlpxYkdPUzhIYzg1QjFiQUVtejJGdHhKeUtxQkJaenB2R2RwbXBTdzBGZFEwbjZBWmhFVGt3Z3p3bXdqRW1KaEhrMFRQdUZSZHluSFpIMlhQR0xkNHNVMU1KMi9XS2dlRi9vcjBVR2U4ZUFMaGJYUnBUcmtPOXVJODNPT1B1WW8rUFpBZXpUNmxHMU1RWjVLZlFsOTNFNUN2NUpBMDNWQnVMdnl4c2xZbmVJWjNQTDV2dFVaalI3TVh1K0h5UHN0NWt6MGtXdjVNbGFxanBaNVVFYW5wZG5DRkpmQ0krSlVHbkpaS3BSOGw3cHZ3aUxiVFI1aGpveGNUeG1qUVRrR2NKcHZVU29WYW8vSEY4T1krRGlPRDNOZEY1YmduNVN0T0w4UUp2cEsreTF3aTZJczVmYnU3bEVZQUIzZ0JwOGhoVmpCNUg1RWRoOXpyUkxuYjl1SUt2TWN1RWZ3YnBza2ZTeDMzdk9aNWhBVmorTTBXK0RjUEtGandTRkh6aDBPdGd3VDlqVllZZjBnbUg2SW9tTndSQTVBZ1Q0K2hrTWJHeHYzVjFlUDI1dkE3S3hsaXAyQVhlS1pxQVN3UUVwdWhYSHZONG11aEFNeGo0QTZqaHo1OC9yYTJpc3N2LzlGVW5BVkVGSVRUcS9UaVRIcWl2RUhaVGM3NC9IOWNHRThpVFpYU2NZMlJ6SG1nSUpYU0FrakVBaHNNUXpqVHBicmQ4eVRMbkFmREJTcnoyQzhLWjQ3cG9sWXJWaGpGQjdFUXZiQmtJdmhkeFRHeG9CWWY4MDBqM08vZndpZWcyWnczVzhxKzlhMHI5bDNaM2ZlUUMzclI1Mkp4S3ZraG1TdTRlTWlTc1NzdkU0ZWNXMWRYUlVJNTJQU1FzNnRBR09ydG1CeFZlMjNKcE9IMWlKV3Fadm04NWlNdVhsZE1MWXlkNUFzcU9oS2RSK1VyNFdJU3hVQUtTZkQ0bFZJeFpCQytYN284T0VrdlBSSEtGZkhESXNRenM2MzM1N2EyRDVzZHM2TDlNS1ZsMjlndzhPM2pPbDZPbnJXV2YxZFhWM3BZcHJCVmJNVVQvZzNWVG5lN1haSWpmdnNWdUZSNTA3MWNlNlpYVExGNUFqQVM5NU5IbUg2Zko5d0tiN0hqYWdtc1QwYS9TTzR5dmZ3ZG5jNHl6QVIwNHBIUWdkYWpMbTdVRmFHNTcwaWJhUWlYc3RTR2pRWTV6czQ1Umd2Z1ZoTTZGbFRSb1NRSWdFSllhR3Q0YnduUkRsT3NZbUxhSlNLQWFJU0YyTHNqNU1JUFVrSHllNEhVVzBVUDZjNEozWnV6Rm5QQjg4cmVRVFlwcEt3dUF2UktkdHd2a3hSRkxkU3FVMVVKSHpwZEx2aUFRMVVPdURVdHU1U0ZXSWpQYTRva2hJVzVtZVFWQS9pL0dYblBUZ3FjOFllalViN0ZmMmFORTNBM1hNcDNCbFBrRXJYNWZ3dkIyS3hHeWN2cHdnTGs5QkxNd0Rtb2hSQ1g2c21yLzF4Zm9hOE0vNW01L0hqQ1NvUys1UEpLTnJrRXpaanVjcTZaYWxFM2xUYjFxcXFlYTBORFZjaUh2b0tFOEZ2Q1RBUHQyNU5KUFlwK3BJVEZ1ZEtGd0NJNDREekh0d0xpK3pYWFpreDl0RU1ZMTBvMUF6OTZwZVlxeHBGbGIzUXF5N3BzczJSWFhtUE82WCttR0dvOVFvRjBFOU1xV054ZmpwNTdVL1RWRHFiUVI3UWhaZHV5M0RNWEVLU0Vac2NDOVkxTkR5Rzl4T2ljMFcycmJRaWlPMGVXSE4zS25zU1lUS0pqZ1dPRUZ3VERqZXlkTnBNVzFZcTZQTVpaQmlqRXpFNmJGZ3Ivem0xa3I2Rm9qMXR0OUVrMmlLUlR5TnUrR1AwNlZOVU9ZcG5YZ29SMkcyL2VZS3dZUGt4Ujd3SHIxNjF0cTR1Z3JQSS9JeWdnK1hZT1F0QklIdGdhbjlkOWhSTVFyZW1DRmRnWXNJMFU0QXZ5RXYxcHN5NzVtOFVZZmtVaHhxUTBaVnVGVkIrRURPNGZtc3M5cnhiUFJjRFliVXV3bXBZQngrT0NiSkZyRTZRb0N4dEFtdFdKK2xiV0ZNemtzZTJIa1FPVWYrb1M2UmdERFJ6VFh0UFQxN2NWVy9DTWIrMk5neG4zZ3JuRGdReHZVVDJ4WmlNR1lLTEtCNUVSNUxKMktLR2hsR1NlM3M5RVVPMnpWRkYwUm5rQVV2cTZwYktGQTBzVGtIbHZ3Z000OWdNOTh2ZFcvdjdwWG9PckttdlkvNCtTaGtGM0xNa2tBR0xHc3E3eWZraFBPZGpORTIwenArLzNFcW5ueUYzLytHdElLcG5aQVU2aUVCTVNrREIxbFhXaTNKSGRBbVJBMFVPTHllTG5LOGtqOERDdjZNSTJEWmdzUzdaVmtRQ25NQTRGbFhHeTJINVBrZlRCTGpKaXM1QzFpbGo1K0x2R3BwQk1Bbkhna1E1TmwxLytvU2xtMDYvZ0o5SzFRVmllQlBFdlRLZlRLeFlnTHdDWXVoZkk1RUtWVEZJOVBlS29pV2ZoMStLUENBOVB2NmN6RnpPanFPVmlvUlAwNjZTM1ljZnA0dUt3N09xY2NEdytWOHFCTTZMRTduUStiSlJrRDNpbVZEb08wRzRtM0ZmQk14eitoQWZvemliVHpnNHB3RVlKQi9HTTRXYjVIVDFFUGw5SUtwdnVQVlRqS1AyVmZTMEhTOXhJeXF2RXBtZFpRc1dWRDhRamFaVURVRE51eFJGd1JxZjd6UGtBU0sxaFR2aWVUYXNYaGVKbkUwRkFCK1crREpvdGFUbzBVZWkwUU5VQkxDNHY0Um4reFpwSVdQcnNNdWJDblFSd3p6MjQzaFBWUUhjZWN1QnhzWnlLTUpoaEtRYWNmd3pRbUN0NElZM2d6UGZqWG5Jc1RKQlJCK1NQcWRFVElTM09CZFJDcmM0WkRlTWlvSlpJVUtoM1FlaWVRZmk3UkIyeW9ZYzh4dlVqeGZLajlBbms2NmRZaEdlZ0lnWmtIbTY4WXliY0hxY3ZPRS9jTHhCK1hsWVBpekdMMkJKZmY3aFdPeHRXY01Oa2NpaXRNZzJ6VWMveGlrbkZBVTY0dkY3UWFRMTJEaDVqbGJNMWVZbVJBaTZiQ2EzSFNDWXpmQnUzeTB5TjNXLy81Q3NEdm9kYy9XQWM5N2pzQ2J6Q0l1TDBCdDV4N1hoOE1VbTU0L2hwNXRMcUJkanZOaU5xVXhDdzY1WTJoR0xYWUdkY1gxZVNFR1NlVmdNc01NU0lyMVlVZHdFM2FpdzZMQWhtKzJwTXQrWHdwSjZxNjJoNFo2V3VqcWh0RTdNSzBKQnB5TU1zaEZFSlQ1MldDeHBkN2RNTDlJVVFXZ3RtMDZEZWZvMlRuOXdsdU45UDdvb0hGYW1ZMDhTakwrc1RKME9YQ2hWM09sQXhjYk5waW5aT3VHZTg2ekE5Uzh6TTg1Y1Z6OGpOdUwvRmZwbVlCSk9VZWcwbkVyT2lZZkMvUU4xSWJzZGhQQ2dNR2VkUmNLOXNUWVV1a3dvNXZiN3FYajh1MmozRXFseE02ellYV2czRHVmbEVFSkJSNWpJZUpCYk5WdXdvYjRqNndUbWRabjB2aTFQeTI4WXdpbWE3L3prL0NZNEUxMWRLcVpobEo2b3lIbWU4OU15akJ4WGdOZm9Cc1JmRy94VXY2QUNHYVhZclQvQVJ0eE1SU0tYc0ZSS2Nna1FhYk11U3J6QWRWakUzU0N3MytKNEFnVHhMTTU3NEwvWkIwWDdTVXhRdTcyeXlCbExwVkpmd0JoL1IyNkFLSGRKU3hIWW0yTHNOblZ6QlpmV3RDbE9zQ1daUEF5djl3MlNXdFhvNENaeUFYY1pHOFpkNXRxV3NaNjhOdUs3QkhzZEdjZmlYS3BMdytIN1ZiVC9vWXZ6Y3hKN2FXeHNJM25BakdTTnFvQkpYSXZUUVdXRnpBdUpMMjMrQmI5RlVweFF4Q2RjSEpqa3lOcjYrdlB0MVhjT0RpWlRpY1JGcUhzWGxZYmRocWF0MmhtTEtjTlhUTUdsTlFkQmRFYWpUL1BNcDJjNUVPa2tMZUh3UmFTQzMxK3lEOHNueVNiRllDUDJhMmw2TW1ONWxuOWJLUFFsck04RFZFRDhnZXYvQlp2dHMrMEsvNXdLaFFqTGM5RFlEcUhEUUM0M2lad3A4Z3BZVU9CZWVidGJjSzV0c2RnMzBlOVhjUGtPRlF1SVVaOXBYbDdJQ3VUTzJPRUo1QkZFMERCdVE3OTVpamowTWFXdXBhWFRhbTdLZWFGZ2NaNzRUVHN5U1ZYcHlYWmNzM0RoYWVEQXhYelQyR015ZG1teGVwVWRoWFNvQUVTVTBHdEdNWkIrT09TT0lYWTNpQWtZbVloSmFWckN0S3dvOUkreFIzcDdYNVIxa0ZXUWwwREovQ29tL0VhRjR6UUR6Z2ZGRnpSWTNCK094T012N3N6WCtlejk3c0JwaDFBOEVVYTZGcHptS3BJVFJSS0s2UWJVZjV4bHZsNHFDVnlTQy8vQXNXTURFTi9DWW5WYXVhdUUrOEg1RlkwQXZPVlZxaGdqeHUrcWVCdUdjUmdXWmM0OXpSbllSMnlSZk82U3pXY1lJaFhKTlc2THVVcGlIUzdwak1XVVRFR2tadzhQREpSVjZucjU1TE9IKy91SHhMcmxUbForREV0OEtwWEpOY0prY0dIcTJqNEpFNzk5T09NUWJOTDF5eE1zckRENUgyeWROMisrNXZlZkNXS28wN0ljQ1M2REliRGMzWUdGQzdzZmVPMDFUM3BlTmcvOUtmR1NWaXExRXFNNkhYcERGZlMzTk02dkh6ajc3SGVGUmJhZHBnMXBDaEdNZ0orRHVJU2ZMZWZEREJEaWo1cGdLWFk1dUw0eE12SllzTHk4RzFaQ0RRb3FwNnhRNkVZd09ONGdGMlREWlNLeGIwcTBZZDV5TWc0UW1rdFJnV1EvWnBvaEtwRHZ6b1hSdy9tYmVEZDFuWkVScWdnRVR1eFd4RFVyVUIvQi9pODdkNkVJNzVTaUF4UXRNclBmRDhxL0lld3RQWE1ubTdpV2w3TkVzWkw5aFRsZ0xsL2xRQnpkQ3IvZEs0N1U0Y1pGOWZWZnBrVGlZWHZkaVc4WkJ3WlVyaGhYZElsd0djUVQyZDBuamxRV0VIU3FvQjlMOGYzaFRBR01JcG1qWTRIeWZrYWxRSGlVLzQ0aFFpelFYWjVSbGNNNXV3c0xsYSt6YU5xZFhrTllCY0g1bnB4cmg1VFJ4WmZjQmFBWnhyUG9aeS9ORW9US2xNT3g0Rm0rZm4xdDdYZE1YYjlJNVArSXo2aWdRTFB4ZERxbWl3UStJYjhGc3BhTnlKY3VHeGxKVDhmU2VkK0I4NStBTy8xQitLMkVpSWZJamc0ejl1N09lTncxVFRzNE5uYkhtTi8vT1N6MG1iYStGaUNFSlZ3YjN2NVBnd3RndEhUbmNBTkhZcUpJTGtSMG9FVVFITjVqSEhwdEVod2s1N3VGcklXMzdDdVJTRjFaT2ozai83K2ovZWpSMk96eHd3OGcxcytiOTBsTDE0V2Z6YTQ5aTM5L2RGNHBuNzNKQU9mdmJWaTBFODVkeTNwb1cyL3ZkZlErdzZ6NnNUNW8yTnJYSi9Rc3AyOUxPR3kvVFRNRXpmRTFWU25mRVp3TW5PSllNdy9XRmc3L0JtTHdVemszT2YvMzlrVGlmcG9tUkd3UUlub3FNUUMvOXo5VVpJYkd5Y1Fwd3BvRllQRS9vbVUrcmJkbjN4NUttV2JqenQ3ZTJmc0MrWDJFUWpHaVV5Z0J1NGVIRStkV1YvZUNhMzNPZG51dW43SFVHOFBETDlFSEFLYzQxaXhpWFNoMHJ2MDY3ZmVQYk8vcGVaYytBUGdyeG5rVDJVK1l6VElBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTElBQUFBdUNBWUFBQUNNTGtOUUFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUJZc1NVUkJWSGdCN1YwTGVGMVZsVjU3bjNOejB5U2x0YlQwa2ZzS2hSYTFDQ09Gd1g0aUQyR1VKQTBQcFRLZ29BNEtmaktmb3lBV0hhVU9vUEt3anE4QmNmQXhNb09BSUxhOUtZTGZnQXFkWVlSUkJ4U2twYm12OUVGZjZTTnBrbnZPWHZQdm02VG0zdk84OXlhMTQrVHYxNTdrN0gzMk9XZnZ0ZGRlNjEvcjdBbzZBcERyamk4a05zNGpRWXNGaStPSmVCRVRUUjhyRjBJY0VNeDUvUGdLeWdxc3FFZlovT3ZraGJuZjB4U21BQWo2RTRGWG5XVnVPUzN6TGlieHQ4VHFkQndOcWhMTTlvbUp6dnlMTklYLzkvaVRDSEptVGJMTk1PUURFTVZUcVhiOEp0NlIrUXVhd2hRQWt3NHpDdW5VeVRBYm5vUVF6NlI2d09vdXFnSDV4Mkt6aEIwNWwwa2RwWVJvMGVjRTB5QXJ0VkcxeUdmYXpzNE1VcFhvU2FmbW1Tek9KYUVhc2JMZ1Iyb2NLNU8yc0tBdStpU0piWXFIWDRvdkwvVFNKQ0czSm42cWtPWmkzSDhHQzQ2VTdzOThRTEo4emJMc1RiV1lZb1YwSzh5OHlHMUMwRjVpL01HN3NHTDlqblB4NjdlVEhia242QWpBWVJYazNrY1h4aFhaM2ZpeFBpRUdpcmJ4azdCMWUzNmNtbWxHMVNYRThpcXlhQ2tHV2VyRlNQSWY2d2dwU1E3UTdueDM2a2ZXRUgyeDdhSk1KbXo3SnZNeU5QY0QzYVplNHNTNGRzZHVvaUFEa0hIS3AxTzlFSUNYREVIM0h4dzJuemp1d2xmelZBY0thMXRQSXRsd005bzhnMHI5eWhYUElFamhGeG1SK3Q2dm9leTNVdkxkdS9jUFBMNWt4WTREUWUzYnRyRklHblFoajdXbmoyTGtQZEdmRy9IdkVTSElrZzRqbEdtdHdtRSsxUXZCUHo3MmdwN3RRZFg0VzZkRWVydmJyalViZUNNNi9SNmNPazNMcjg4bHN6QlFIelliNk9YZTlhbWJLQ1JZaUtNb1BGb2hCdWNxRnZkR0kvYkdRbmZxL3NMYTVGdW9CdVRYcHM1aUdma05oSGc1aFZNT3gwQU96N09WZUhoR2M5Tkx1WFhKRHdaZElFelo3Rm5JYWdZZElUaHNHcm1RUG5ZUk5PRVZ4RXoxQW9MellGQ2Q3THJFS1FXeDgzdW92S1FHVnlDcUZLM0tyMCtkM2o5OFlNVUpGK3pjNzFjWlpvblNHcjBHUk5FZGw1SVVseGJTeVllS3crS0dhbFlDSWZnTFhMT2JJMkpRclBmaXZtZjE5V2V2V3JLQ2hsMnJxZEZseHJVSjJlaDJPditUMkhHV01QMWx5NlpCb1hqSUZOWndVVVRzc3JLR1VkTnNlT1JvbWxZRVl4NGxFV20waFRyVXJvbGZoZy8yL1dIaGlqMTdIVGZMUFI1ZklJcm01VmdLRFZCaEZqTzNtSktpTnV3Ky9ONGlTTnRIaktOc1ZLd2E4WmJhem13cy9SVllPNGszeDlzejc2aHNGM1hmTHVxYk9JUG8wQjNvMkZjYjVNRzFmaFVMM1cxWDRMbTFEZDFFOVVEUk81dk5sbjloM25reEJ0MXpCZ29oaDZsT1FDQXZpVVRwOU95NnR1dVNuVDBQQmRWLzlZbGpaL0N3T3AzcUJPNzd2cG5OYmFBMWUyNmhLbUZJNVJEa25pZFRqVFJBR3dNSGVvU2pndjlnRHBxTTQzaU0rUmhqQWcyeEdabExDbWJjdUhvdzI2TE5NektGOUl5THl1N1hzejZWRWtWNkdxL1hXdEl2c0swd2dMaDh6T2Jpa2RGa01XcjNWMHhWclcyWmRwTUwwTTU3S0N5WUQrSVd6NkQ5WnpBRE5zS2UvTy81SGRtWC9ZUnBEUGwxeWIrQkVQOHpUUnd1ekhXblBneXU1VnMweVVEM3hhWGdCd3JyVTdIWStabXYrTldOREJmQnR4c1R3anBoTFA4QmZzUjlycXVCZ2dMeElFYWhySjFtUngrRXI0RkNBbzR4VTR2TEE0VUdxcVlnaGw4cUUyUkQwVVU0dEZJZGdDWjNMTVBQUFhkS2hMYnZlbXZRdFJpVi9iaitxODF5L3gxSHQrL2VSMVVpdDI3aEVoTFczVFRCd0tUK2N2N1IySWI0aFlVWGFQSWhFUEJablYyYjJKUmNudk5jZWNCRVRPZUpJMCtGMFZBYSs2OVVkVlh0ZHMzRWdzVWJ5d3c3L0RLSDZvUVUwT2tWbUxOMXg5dUlLQ2pnTVdnSmZrK2lJL3ZaV29TWTllSWg3RWRLMU1ERW8xbEV6Qjl3TFFNbitBQXVlbzJxaENIRmR6WThHSnZtVlE1TjlEb0tCTytFVTVsRzNWK2dnd2JJOXpINXplN255Wk9PaEkzdTFLWXpxV3I2c242b2NnOUZLZitYclJsU0JnWSttTVUzVSszWjlWUWo4dXRTVitOd1BFMFNJQXduamQ3REFSQmNQcE5IL0N6V2taa2JhMHFCMTdYZUJNOXdKVTcraGdMdkoyYkhtNDNMUGN0WkhPTjNQV2IxMDROaS8wTFkyNTJKanN5WmczMlIrZURPSC9DNW9PcVYyQzBhbXpvck0wU0hHMHhaV1hGaU4wMEM4TFpKdjNLWXZ2MkdHdndjMVlpU05wWjBkZWdMQk8yQzQvbzBMdndSTk00YW5QbWZVSmRKL3VTdTdsa09xbzBSaFFpODl1eW5ySGhINFlWNForNDJIWkZVdGpvRG1qcmplNUdpdDNtV1NVcVFEeXlsdm5UOHVKWHQrUGR1MnBmb3lGMEtQOFBMWEluUkJHRFVqeW5TNFlUaSs4c0VHUU5WOVpMdWhMQXJ6OENaOE8wazJIcnJXN3UyMXJ3YTlJSkN3dUhrb0hxNHoxYjA4Z2ZGWUhGeHJMUG5qSGhuOXBKWVorWUNhTXRUY1A0RHFCSXdrY1d4QjlYTU15clB3cTZ2MnB4SmR1V2V0bXcrQnovdThhckRVcjdlcXd3VDhHanlnUjAxWE8xNVRQcGJNU0JPbGtXQVEzZUJJdVZMUGJvK0d4MVc4eUkzUU1YN3l3YkFGdVpCbzhSUmxFTnJEdkNxUDhWMDI0bFg2OU1DejdiY2kxallUanRpYmVOK3NadWxPTmhmN0FlTk1zZWxrMERSK1hpaU5xUHRlaURFOHVBcTlFQ3hLRDdtRmtqUjJoS0g3NEY3ZmdFMi9pOXd4b2UyNDNiOGt4NS9SaXJZNVI0MHNxWXZ5UU9wcm14UElkMEdHNWJmNjFZdWlXZDdYWXNWNkNnL1N2N2dudjJ1a3hLcndiT0k4SUdab25QS0NqQXhYbnh5VHN1U3M4dWpmWVlwKzZ0bC9yRkFRcEI1dWxkNXlXZGc4UXBvM0x4aTdVUEkxN1JjWVpBUVRxZURrTFUrbUVHN3BDSHZSZlZGUG5kaThOSFhMTzdhdXJPQ3RWQzczQVlFdG5NNnNUeDdMWVhDRHBmYmFkN1oyMCtLTUdlb0hqQ2Q3K2VHUVhzOXRhSC8xTXRYckhqSTltc20yWmw3UHJjMmRSMkU1QzZmeHQ3dU9DVkV4SXN6d3NUd2pveVJYaVhZYzVKRElEeER5RXpVU0Q1bzdtKzIzTVpDQTRMeUFyeWpjeXJQVDk4MzdTUWNuaW03ajJVY1FPU0JxZ0ZVNGJWNHdBV3dNcURVb09TVUtrRDU5VWtaN2VzN3NMY3ZUR2c4bjA3b3lPb2kveHVKbGZHdVRNbXZLaE5rRnZaTzRVSXVRTnYyVXgwUUFVd0NWb0krcWhGNWVQWXdHVTd3S29jdHZIOG9LcTVjMGZsUXFORklMTS9jRFZQbEZIQ2tWN21WUTREaWxlZDA4TWdycmdlZDRjazhqRGJvNXo5a2ZhN3pGZVMyRDNnblAwbFN2M1BMVGhDR2RMeWJpQXdPOGtqK2tjc3p1SzhKeVk2ZXdNaXJId3FQSlQ4TlRmdFp2NVVBcTlnM29WeHZIL3U5bkg2VFVPK1lnNVVYZ1pxcDF4UDF0WmxzV3dYT1VDOXdrL2sydjNJbDFPMEx6OXVjb3lwZ0RBMStCaTE3MmV4Tk9nbUpKZ0M1ZGFsTGNmQk9SUlg4UzY4aTlsTU9RdmoyWjVIcy8vSm8xUEZlRFFlRyszenVzNWNtR1BudTFHMXNpMXY5OHRNaDREL2Yxeit3Y3Z5NU1rRXVQVFFMQitjSnFrZFJmWmdBSjlJTGZLSlAyWUN5NlYrcFNzeTdlUHRyME9TZXdoOVJacG5kSzN5ZFBXRzVuYzJ2alowbUJYM1Y4eXJpN1UyMHo5UEVBWWZyZmM4QXpsaEdURmRlV3duaGlDTWNVeklEMktKSmhtYWVDdW5VWFpEU0d3SXFicUtJZlZtbGVWSW15S1dIbHQ1ZWRLMkFSdmNWWkZOWkVhb1pjcWIzZlVWT08xUlVVN1BDTTI5WU50cGwyb0tGdDNaRW1PN1FhcVMvaXVsWmt6b0J6dFpYaFRRMlFMTjRjc0UyOFUyK2dTRWYwMElFc0MvSmFGWWJ6dzZLVERLM2ViUzRtU1laTU9jK2ovNjR4cjhXN3hIQzZrajhWWDVMWllsakFJVGlQU3pLUFNjcC9PMnhJQ2lTZS8zU0pHelRtRTQxb3VSSWVqaDZYQU10TnE1ZFR5NVVEUnFodlIvMDVWSXNsMCtod1ZpQk1qRThVSFRrMmJ5OVV6aW5INGZqNlp2YmdYZHU4R0V0K2piOWRPNHh4c0MwNFZReHMxK3NvTExuRldlVGxVOHp0SEo1RUFTTCtiRWU3UlVveVBHcUEraWZ6K05kUGh0UWJWQUtYdDdhM3Z1S1c2RmpvTm5GdnRKZkJKU08wQ2k5SnhibTJkSGh1WWhBTElKSHZnUTB5YUxZZ2V5bGxaMDFIdERJTy94WUJUTml6S0xKZ0pDTkc3dVBpeDdmdnFsNkcxOVBYaTgyd1I3Y1JlR2gyemt6WkNycHk1Wk5IMmpyeXZ4blVFVldvcUU4ZzM5Y0dkSHBVV3ZhZHAyOFUyaElVU0hOTnV2VWdaRndzellUdGVKd3JvS0szYU43TExaNjNhdGVhTWVPYlFvT2hqRmYyOXFSZThhcjJFVmpjWDlscHd0RFhJN2xjQ2swaWs0YmpNcFJpMlRFYVJYVWE3VE94K0pRSUUrb3pYNDUvTllRejZNYUFlcXIzenRkaW1kSHpTRWRPTmhDMVlMRkxQZDJlV2Q4UmVFZ1RTeUs2UEU3YzYremJsNjJ6TDF0N1dBYVVUcUxMRjVnUk1RY1VHaWgrNnprT0hHSmp2SmZXWVZ3WlZnVXE0TlNUSHgrVUdGOTZrWUk4YTFCOWVDamZTN1JtYm5YcjQ2WjYwNWRDRmR1TVV0T1NoWW5ZZWE5eVdYSm1qZjYxeFhXTkZNN1hKNkNYRlRHc3hIcFBhUEJhZGI4MVloZ082T2pBeDVvRkVYalRWU2xJTC80NEp3V3ZTV0I2LzFJL0pvbUVPaVY3MHBoZmk3V3ZxbmdXN0ZCNTRQVGozWG1wbEtqVjA0OFBCS1JkQ0JzWXFHL1RtRkZYd2lxQjJWNUo0VDQ1cUI2RWpieEhUcWZFNDdSUjlBMXl5RDlMVlFsaEJLTC9jcDN0ODU2Q2YzdXFjVkFscDlEdFVLcEovMktvVWZlU1ZWaXhyU204OGhEZThIdXJwWWo5US9YMnZZUEE0VVlhT3ZJYlBPaEJDY0tUU09UdUJ4Z1NLb3hwUUtSZnl6MU1heWs5d2JWZzBKZHMyK2crVE1VQW5yRnFFUERsSXlMcmZCMmZlbVpwVXVmMTQ3VEg3eWJvWk5YcmFydCs4SDRCWVZOYUtESHUybTZzbHJlRi9ia2h6M2Eyb2VRNnI5VEZZQVd2UkVYZWxKNTBqRHUyN0FoTm8zQ0lWeFNGMFBYRVd2V0JYeXh1QStUYnpWR1NuUGpINExDV29HNDdwbGs4NGZjTG0wNXFzbmhlQ3RCTlFlc0txSE5DWGhUL3hpaWFrLy9jUEdEUzFiOFB0VFhOd2craWw5RGdpNEpxZ2pOdGdGMWZ5L1p6c01NMGM3SXEvWjJvOWN2Z2xRRzVuL0QxUFpLN0puNS9xWEo4MWRSTmswMXdGYTBHcUcxcjN1MTNkQkFuOEx4UmdxQjNuV0pjekZ3WGxyOFViQUpWVkZSUlVtWmlDMjZFSXAraWx3K0VNWGttQlByTTFmang0OEV0eVoyVTRsTkVhK01oTW85YUQ4cGZoRnZ6NXp0MTFKMmJTSWlYUnhRMHhaemNkZzYvaHo2ZGd2Vkcwa2cvZDFtOHU4eHhRTE5CTkxVWU5HNjRQVVg5NFplQ1V6WXg5dEFJR3FOaXFWTDZDVk9MNmtPZ1lNM2NrZGJlOCtqVkNOWXltZjlLRGhEaXV1cEloa25kTnVXdUE5azFDZncvSzQ4S01aZ1pXRjlzci8xbmRsYi9UNlgycEp1UzlyTTMvZTRDeU80c29wcVFHeDV6Mit6M1lrUFNaYXUzK0pCYTErVFczUHNkeEpkbTMvbDIwNTc1dVN4NTgrbms1NzBvRkRCdENOTVNOY0ppWEZPVVVXK05FekhMZlZhNVBtMXFTK2lqWlZoNmlLRWZuMXJsVi9qeUNIRGZEalcxRFl0M3BHTnh6c3liMUZNcmdNcGJWWFhseGNONXNEekdJT01ad1dtczdMZHFiK2pHdEIyVWFZUEEvTnB2enFncTI0dWRLZCtuazBuenFzczAva2FoZTdrZFVvdnhZSVd1RjlQMS9zRVZ6eGQrckYrUzdibmZvUWdoMmZVU3BwWS9oLzAvNHJta0JDWFRCSHZJQXlMWUQ5bjU0S3NxMTB1TE9ITXVCUEZtcDA5SGJITDY2MFZaRGdoaGhuMFhkQnNYNk1xSWNHeDdodE5ZL1NGQ0pFODdvZDU3OWplajBuaUd5NEdzYkc2TjkzMnlZMWZPeTdxVis5Qmx3R0haL3REQ0tLdk1BTm5nRHA4UEo5dTI1Rkx0ejJSWDVlOEQ3VGljNkxaM0k2SmNDYzYwU1BTeGo5SUxNK3U5bXhWa2Vmemp1KzNWRWYyRHNqaU90YzdNTCsxdHpseEdZV0E2R3M4bXVyRTBxVTZzdWRrSThBZ09jeWZJa2RxQ2xIcmNkclNuYndIL2JNcTVDVTk2SWZycUFZNGhGT3k2dmVocytxQ1hSUjNtZzNpYXZMT3M0V2x3N2MzTHJTdmdJQTlySlQ2SlFSc0QvUmRWQmk4eEdCeGdvNUdRUzJkbHU5V2Q4ZmJjN2VQdnpqeHE4eHQrVk5TUy9ENEFRTEJzNkZDejZWUmJqUmcyZXdaTWsxZno5blF1Y0VlWmJZc1p5MkVQZnhSa3RGVDlaWlR6dHBpOWNidVdUODVQdUNiUlZWVTgvenpDVU5HTkxtVUExdzVGczdFSVh2SVVrYVVxb0VXNG1YTnFXOUF1VndWNmdMQi9aWWwydHU2Y2pXbFNEZ2tGcmJzcEgybW9rMEFlTXNoakgxZWduOXVrbEwrekRERTg3Q2ZOOEMrdkFlcjFDY2dNSHBiZ1RiWWJZN3RCY1FxVXROVTlCb3crTitrQ1FGdlVVSjFIdmVPZ0cydFJMQnBNWWJXcnEwNVJFby82bm8zRXJPbnFlblhVd0NFVkMwQmp4T09RblZqSTFnNUJIbllqcnBxWk5qMnJqc3N2ZmpnR3hyK3NpbDVWM0R1eEtHYmFwN2xCa1EwWDZZYWNWaTN6TktJZDJXK2h1ZitPdFVKMklGdnpqNldlR1BsK1RrWC9HRi9mSG4yV3JBRVdpQjJVSzBRbEplMmVEdHMyekFiLzNsdkhlV1NqeHp2eWo2TVBuQTFzL0JlTjJRZVR2b0dpQkJwcTVycmQ0VVFqbThWTVNNZHd0bGdETGxTWU95eC9kajBwdjV2Z05kMXBmZGNvY1RLUkdmMm42Z09oQlprczVUdFB6R0lEV1EvVGlYSHA0Nzlzd1Q5em1iTDAzWkx0R2UvYkVrNkRYUDlFYW9TZUtwbmJZdlBiQTJySVh3ME1pTERybXV5SWFRMlY5ejQyYWpSU0hlUzcvMk1vQ1N1VUpTb3NwV0QyMmRET0NibDhQUm9hUEl0bjQ2ZFdKMFFxeS9GbDJkdXB6b1Iyb0d6QmQwSXI3OExEdEUrZytWZXkxYURiSXArR0xWREdNYURUR3FueVdLM1ltTUhSNHY5MzltUTM0WWdoMnNIakNRWVplL0lkY2NmWVpZM3dYTzdMTXhHMzlBQTJ5QmxqNEQvL0Rhb3FNQlA2dHZPTCsyYzh5Njk3NXpONmpvcFNueTU1MzRRRU9EdGVMbzc0eDA5WHc2enExRVlTSSs4NFFVZFBkbHNPclVTbXNSbFF4bng3bHc2L3BWRVIvNDV0MnVGei9kd0duNmZTSlcxSTltUmx3eHp3V0c3NjYxMjRiTlFPTWlMUTFiVURNVXRpZVc1b0t5M1VIQ21jZHBZV2x4RlNpekZRQy9WM1dpWDBsREVTRUxVcUM3U3E0d3E3V2Vxd05ZWWRPVkpxYlpWNUw4aFg2STkveW9PVjhDbXVtcEd5OEJiWUR1ZWlxWlRVbzU4NXdaSHowWU1mYmN0eFBQQ3RwNU8xTGkzY0t4anMwNzkwOXNGWEswM053U1RnUHZ3RzZFNVd2UTlkQ0lRdU5mSGFiYjlIL0ZsRTVzUVpCamVLNWxxb3UvTGZyNENTL3l5aXFJRzlPY3FIRHRkcjJOK0NyMy9NV0Z6UWtneFhhZDBqcHpIdXlES2lzamQ4eFFHQW9FT2RwenoybVpBYS9uQWRGNW1JeTVDWnNyaEhkNVhTS2ZlRzFSUDZad1puZjZxYzdCMUZJY1plbFhxYmRVMDdmclhpWTdOenptMWhSUThFUWtwM0JBKzcyODBEUG56MGIrVEN2MkJLUTdoQm5vQ1lDdnB5Y0dXTkYxMzhoWjBkN2V6VkhRVTFpVFBpWFZsSFNIeFVUNjdhcTYxRXBZd3M1Rks2NDZGNjI1VHFEVXNRZ2l5bmtoVjdNZVVEQ01rWXZ3UFBQSUR0SGt6L3BtTkZiMTB4bUVqR3lGMndRbURxRDFZdTZQMVp3VEJ4WmY4eXVONmR5WEIzM1l0Tk1VZHBkMHRKd2xOVXU1eEppS3gyZk5kNXoxbDZMMHErQlU2akFDZFdRcW5PelR5L0k2ZXAyRVAzUVZpdkpOTGlkYWwvenBBZjBVdGRLNHlsb05TZ2pZZmVqRmhqbjJ6ZHVpY0lLT2VEVmYrcjhHMnVRajcyeHFOdGcxaWFiV2c2UHFnTlg0R2MyaGowUFhTR3I0RlBPMjdxY0orUnh0dk5nZEtlMTVNNU82aWh6QzM0ZFhkQlN1cEU1SEs5L0dZV2RLOFpZSnJNKzNHTzQ0R2pOaUNPVE9JYUtsRGFJdU54cjNta0gwNkxJQkZncWc2OHJrR3hJNWFDRHMvNzcwSTZDOHJ3QnZOVWVhUXN2dU5BVldVM0JBYkhwNW9HL0xQQVRyMWNXYkxqSm5GSWN0c2JxREJJZ0lJQzZZdjdnc1RNUjFEYm0zcVBRamsvTkNsYUp2Y08zUmk2MlZiSnp3bnVIVGZkT3AzRUlJM2pEK0hoNTQva2piNlJ4UWVPZUZvWVE3T0diWnBVQmxTVFRmVThKeW0xTTVxM25FeWNXUnNDenFGRWdycDVGcTQwUTRIRDlydkhyQTA0ZmUycXdMNTlhbjFla1B6c3ZzTm12SFl1NEp6cEk4a0hQYUF5QlM4c1Q4NjdmMTZaOG5LOHpBeHJzcXRpeStoU1lDeTJDR3dWbk94dXEyRmpnQWM5ditlYkFyZWVQMjVMKy9LcjA5K0hEeG1aUkFIaktTcCtlYkF6ZEtyQmNMZDMySUY3cDlHTmpZMGhWSjc5N1ZNNkJjaGh3TlRwc1VSaVB5NjVEM2tFaDFEYVBwOW9BL3ZveWs0TUdWYUhJRlF4SitDam5IODE4UlN5TnVmV3pPL3Z2L2c1ODhVVTRKOEJBSmFkNDl0cXl0cEpCZGovTjlwYzJYa1V6UUZCLzRYOG1YeG9kdVptcGtBQUFBQVNVVk9SSzVDWUlJPVwiIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdywgbG9jYWxlIH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkRfRVJST1IgPSAnU1NHIERhdGEgTk9UX0ZPVU5EJ1xuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIC8vIFRPRE86IGhhbmRsZSByZWxvYWRpbmcgaW4gZGV2ZWxvcG1lbnQgZnJvbSBmYWxsYmFjayByZXR1cm5pbmcgMjAwXG4gICAgICAgIC8vIHRvIG9uLWRlbWFuZC1lbnRyeS1oYW5kbGVyIGNhdXNpbmcgaXQgdG8gcmVsb2FkIHBlcmlvZGljYWxseVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aCxcbiAgICAgIH0gPSByZXF1aXJlKCcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCcpIGFzIHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJylcblxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoYXMsIHRoaXMubG9jYWxlcylcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHVybCA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uLCBvcHRpb25zKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuICAgICAgY29uc3Qgc3NnNDA0ID0gZXJyLm1lc3NhZ2UgPT09IFNTR19EQVRBX05PVF9GT1VORF9FUlJPUlxuXG4gICAgICBpZiAoc3NnNDA0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IG1vZDogYW55XG4gICAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMsIG1vZCB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAgICcvNDA0J1xuICAgICAgICAgICkpXG5cbiAgICAgICAgICAvLyBUT0RPOiBzaG91bGQgd2UgdG9sZXJhdGUgdGhlc2UgcHJvcHMgbWlzc2luZyBhbmQgc3RpbGwgcmVuZGVyIHRoZVxuICAgICAgICAgIC8vIHBhZ2UgaW5zdGVhZCBvZiBmYWxsaW5nIGJhY2sgdG8gX2Vycm9yP1xuICAgICAgICAgIGlmIChtb2QgJiYgbW9kLl9fTl9TU0cpIHtcbiAgICAgICAgICAgIHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCcvNDA0JywgJy80MDQnLCB0cnVlLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICAgICAgICAvLyBub24tZmF0YWwgZmFsbGJhY2sgdG8gX2Vycm9yXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyOiBzc2c0MDQgPyB1bmRlZmluZWQgOiBlcnIsXG4gICAgICAgIGVycm9yOiBzc2c0MDQgPyB1bmRlZmluZWQgOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGYUNhbGVuZGFyQWx0LCBGYUNsb2NrIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyBDYXJkLCBDb250YWluZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCBIZWFkU2VvIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcclxuaW1wb3J0IEJ1dHRvbldoYXRzYXBwIGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uV2hhdHNhcHAnXHJcblxyXG5mdW5jdGlvbiBGaWx0ZXIoKSB7XHJcbiAgICB2YXIgYnV0dG9uX3Nob3dfZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmxvZy1jYXRlZ29yaWVzIC5idC1zdGFuZGFyZCcpXHJcbiAgICB2YXIgY2F0ZWdvcmllc19lbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9nLWNhcmQnKVxyXG5cclxuICAgIGJ1dHRvbl9zaG93X2VsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgbGV0IGJ1dHRvbl9kYXRhID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2hvdy1jYXRlZ29yeScpXHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY2F0ZWdvcmllc19lbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2VmZmVjdFNob3cnKVxyXG4gICAgICAgICAgICAgICAgaWYgKGJ1dHRvbl9kYXRhID09ICd0b2RvcycpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdlZmZlY3RTaG93JylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgZGl2X3Nob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtidXR0b25fZGF0YX1gKVxyXG5cclxuXHJcbiAgICAgICAgICAgIGRpdl9zaG93LmZvckVhY2goZWxlbWVudF9zaG93ID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRfc2hvdy5jbGFzc0xpc3QuYWRkKCdlZmZlY3RTaG93JylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBBY3RpdmVCdXR0b24oKSB7XHJcbiAgICB2YXIgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5ibG9nLWNhdGVnb3JpZXMgLmJ0LXN0YW5kYXJkYCk7XHJcbiAgICBidXR0b25zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gYnV0dG9ucy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlQnV0dG9uJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZUJ1dHRvbicpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5jb25zdCBCbG9nID0gKCk9PiB7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgICAgIEFjdGl2ZUJ1dHRvbigpXHJcbiAgICAgICAgRmlsdGVyKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRTZW8gdGl0bGU9eydFY29yYWl6IHwgQmxvZyd9IC8+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPG1haW4gaWQ9J2Jsb2cnPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2ctY2F0ZWdvcmllcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtc2hvdy1jYXRlZ29yeT0ndG9kb3MnIGNsYXNzTmFtZT1cImJ0LXN0YW5kYXJkIGJnLWNvbG9yLXNlY29uZCBhY3RpdmVCdXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2Rvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtc2hvdy1jYXRlZ29yeT0nY3VyaW9zaWRhZGVzJyBjbGFzc05hbWU9XCJidC1zdGFuZGFyZCBiZy1jb2xvci1zZWNvbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDdXJpb3NpZGFkZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXNob3ctY2F0ZWdvcnk9J25vdmlkYWRlcycgY2xhc3NOYW1lPVwiYnQtc3RhbmRhcmQgYmctY29sb3Itc2Vjb25kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm92aWRhZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1zaG93LWNhdGVnb3J5PSdyZWNlaXRhcycgY2xhc3NOYW1lPVwiYnQtc3RhbmRhcmQgYmctY29sb3Itc2Vjb25kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVjZWl0YXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Bvc3RzLWFyZWEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPSdlZmZlY3RTaG93IGJsb2ctY2FyZCByZWNlaXRhcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaW1nLXRvcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCcuLi9pbWFnZXMvYmxvZy9ibG9nMS5wbmcnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdGVnb3J5IHRleHQtd2hpdGUnPlJlY2VpdGFzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT0nY29sb3ItYmxhY2sgdGl0bGUgdGl0bGUtbGl0dGxlJz5Db21pZGEgb3Jnw6JuaWNhOiA5IHJlY2VpdGFzIGNvbSBpbmdyZWRpZW50ZXMgc3VzdGVudMOhdmVpczwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBjbGFzc05hbWU9J3BhcmFncmFwaCBwLW1lZGl1bSBjb2xvci1ncmV5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwIHRoZSBidWxrIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgY2FyZCdzIGNvbnRlbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtZm9vdGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtY2xvY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNsb2NrIGNsYXNzTmFtZT0nY29sb3ItZ3JleScgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb2xvci1ncmV5IHBhcmFncmFwaCBwLW1lZGl1bSc+MTI6NDQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtY2FsZW5kYXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNhbGVuZGFyQWx0IGNsYXNzTmFtZT0nY29sb3ItZ3JleScgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb2xvci1ncmV5IHBhcmFncmFwaCBwLW1lZGl1bSc+MDkvMTIvMjAyMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9J2VmZmVjdFNob3cgYmxvZy1jYXJkIHJlY2VpdGFzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1pbWctdG9wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoJy4uL2ltYWdlcy9ibG9nL2Jsb2cyLnBuZycpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcnkgdGV4dC13aGl0ZSc+UmVjZWl0YXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGUgY2xhc3NOYW1lPSdjb2xvci1ibGFjayB0aXRsZSB0aXRsZS1saXR0bGUnPk1hbmRpb2NhOiBjb25oZcOnYSA5IGJlbmVmw61jaW9zIGRlc3NlIGFsaW1lbnRvPC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IGNsYXNzTmFtZT0ncGFyYWdyYXBoIHAtbWVkaXVtIGNvbG9yLWdyZXknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU29tZSBxdWljayBleGFtcGxlIHRleHQgdG8gYnVpbGQgb24gdGhlIGNhcmQgdGl0bGUgYW5kIG1ha2UgdXAgdGhlIGJ1bGsgb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBjYXJkJ3MgY29udGVudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2ctY2FyZC1mb290ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2ctY2FyZC1jbG9jayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhQ2xvY2sgY2xhc3NOYW1lPSdjb2xvci1ncmV5JyBzaXplPXsxNX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NvbG9yLWdyZXkgcGFyYWdyYXBoIHAtbWVkaXVtJz4xMjo0NDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2ctY2FyZC1jYWxlbmRhcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhQ2FsZW5kYXJBbHQgY2xhc3NOYW1lPSdjb2xvci1ncmV5JyBzaXplPXsxNX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NvbG9yLWdyZXkgcGFyYWdyYXBoIHAtbWVkaXVtJz4wOS8xMi8yMDIwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT0nZWZmZWN0U2hvdyBibG9nLWNhcmQgY3VyaW9zaWRhZGVzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1pbWctdG9wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoJy4uL2ltYWdlcy9ibG9nL2Jsb2czLnBuZycpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcnkgdGV4dC13aGl0ZSc+Q3VyaW9zaWRhZGVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT0nY29sb3ItYmxhY2sgdGl0bGUgdGl0bGUtbGl0dGxlJz5Qb3IgcXVlIGNvbnN1bWlyIGFsaW1lbnRvcyBvcmfDom5pY29zPzwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBjbGFzc05hbWU9J3BhcmFncmFwaCBwLW1lZGl1bSBjb2xvci1ncmV5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwIHRoZSBidWxrIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgY2FyZCdzIGNvbnRlbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtZm9vdGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtY2xvY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNsb2NrIGNsYXNzTmFtZT0nY29sb3ItZ3JleScgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb2xvci1ncmV5IHBhcmFncmFwaCBwLW1lZGl1bSc+MTI6NDQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtY2FsZW5kYXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNhbGVuZGFyQWx0IGNsYXNzTmFtZT0nY29sb3ItZ3JleScgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb2xvci1ncmV5IHBhcmFncmFwaCBwLW1lZGl1bSc+MDkvMTIvMjAyMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9J2VmZmVjdFNob3cgYmxvZy1jYXJkIHJlY2VpdGFzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1pbWctdG9wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoJy4uL2ltYWdlcy9ibG9nL2Jsb2c0LnBuZycpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcnkgdGV4dC13aGl0ZSc+UmVjZWl0YXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGUgY2xhc3NOYW1lPSdjb2xvci1ibGFjayB0aXRsZSB0aXRsZS1saXR0bGUnPjkgcmVjZWl0YXMgdmVnZXRhcmlhbmFzIGUgdmVnYW5hcyBwZXJmZWl0YXMuLi48L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcC1tZWRpdW0gY29sb3ItZ3JleSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb21lIHF1aWNrIGV4YW1wbGUgdGV4dCB0byBidWlsZCBvbiB0aGUgY2FyZCB0aXRsZSBhbmQgbWFrZSB1cCB0aGUgYnVsayBvZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGNhcmQncyBjb250ZW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvZy1jYXJkLWZvb3Rlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvZy1jYXJkLWNsb2NrJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFDbG9jayBjbGFzc05hbWU9J2NvbG9yLWdyZXknIHNpemU9ezE1fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY29sb3ItZ3JleSBwYXJhZ3JhcGggcC1tZWRpdW0nPjEyOjQ0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvZy1jYXJkLWNhbGVuZGFyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFDYWxlbmRhckFsdCBjbGFzc05hbWU9J2NvbG9yLWdyZXknIHNpemU9ezE1fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY29sb3ItZ3JleSBwYXJhZ3JhcGggcC1tZWRpdW0nPjA5LzEyLzIwMjA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPSdlZmZlY3RTaG93IGJsb2ctY2FyZCBub3ZpZGFkZXMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWltZy10b3AnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZSgnLi4vaW1hZ2VzL2Jsb2cvYmxvZzUucG5nJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXRlZ29yeSB0ZXh0LXdoaXRlJz5Ob3ZpZGFkZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGUgY2xhc3NOYW1lPSdjb2xvci1ibGFjayB0aXRsZSB0aXRsZS1saXR0bGUnPkNvbmhlw6dhIGEgZmF6ZW5kYSB0YW1hdGFuZHViYTwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBjbGFzc05hbWU9J3BhcmFncmFwaCBwLW1lZGl1bSBjb2xvci1ncmV5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwIHRoZSBidWxrIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgY2FyZCdzIGNvbnRlbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtZm9vdGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtY2xvY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNsb2NrIGNsYXNzTmFtZT0nY29sb3ItZ3JleScgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb2xvci1ncmV5IHBhcmFncmFwaCBwLW1lZGl1bSc+MTI6NDQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtY2FsZW5kYXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNhbGVuZGFyQWx0IGNsYXNzTmFtZT0nY29sb3ItZ3JleScgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb2xvci1ncmV5IHBhcmFncmFwaCBwLW1lZGl1bSc+MDkvMTIvMjAyMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9J2VmZmVjdFNob3cgYmxvZy1jYXJkJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1pbWctdG9wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoJy4uL2ltYWdlcy9ibG9nL2Jsb2c2LnBuZycpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcnkgdGV4dC13aGl0ZSc+UmVjZWl0YXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGUgY2xhc3NOYW1lPSdjb2xvci1ibGFjayB0aXRsZSB0aXRsZS1saXR0bGUnPkNvbWlkYSBvcmfDom5pY2E6IDkgcmVjZWl0YXMgY29tIGluZ3JlZGllbnRlcyBzdXN0ZW50w6F2ZWlzPC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IGNsYXNzTmFtZT0ncGFyYWdyYXBoIHAtbWVkaXVtIGNvbG9yLWdyZXknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU29tZSBxdWljayBleGFtcGxlIHRleHQgdG8gYnVpbGQgb24gdGhlIGNhcmQgdGl0bGUgYW5kIG1ha2UgdXAgdGhlIGJ1bGsgb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBjYXJkJ3MgY29udGVudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2ctY2FyZC1mb290ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2ctY2FyZC1jbG9jayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhQ2xvY2sgY2xhc3NOYW1lPSdjb2xvci1ncmV5JyBzaXplPXsxNX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NvbG9yLWdyZXkgcGFyYWdyYXBoIHAtbWVkaXVtJz4xMjo0NDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2ctY2FyZC1jYWxlbmRhcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhQ2FsZW5kYXJBbHQgY2xhc3NOYW1lPSdjb2xvci1ncmV5JyBzaXplPXsxNX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NvbG9yLWdyZXkgcGFyYWdyYXBoIHAtbWVkaXVtJz4wOS8xMi8yMDIwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b25XaGF0c2FwcCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==