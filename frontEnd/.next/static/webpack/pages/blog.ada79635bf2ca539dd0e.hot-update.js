webpackHotUpdate_N_E("pages/blog",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_buttonWhatsapp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/buttonWhatsapp */ "./components/buttonWhatsapp.js");

var _jsxFileName = "C:\\Users\\conta\\Desktop\\EcoraizNext\\frontEnd\\pages\\blog.js";








function ActiveButton() {
  var buttons = document.querySelectorAll("blog-categories .categories_button");
  buttons.forEach(function (element) {
    element.addEventListener('click', function () {
      for (var i = 0; i <= buttons.length - 1; i++) {
        buttons[i].classList.remove('button_active');
      }

      element.classList.add('button_active');
    });
  });
}

_c = ActiveButton;
ActiveButton();

function Blog() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_head__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: 'Ecoraiz | Blog'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_header__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      id: "blog",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "blog-categories",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              "class": "bt-standard bg-color-second activeButton",
              children: "todos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              "class": "bt-standard bg-color-second",
              children: "curiosidades"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              "class": "bt-standard bg-color-second",
              children: "Novidades"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              "class": "bt-standard bg-color-second",
              children: "Receitas"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "posts-area",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
              className: "blog-card",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-img-top",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: __webpack_require__(/*! ../images/blog/blog1.png */ "./images/blog/blog1.png")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "category text-white",
                  children: "Receitas"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, {
                  className: "color-black title title-little",
                  children: "Comida org\xE2nica: 9 receitas com ingredientes sustent\xE1veis"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
                  className: "paragraph p-medium color-grey",
                  children: "Some quick example text to build on the card title and make up the bulk of the card's content."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "blog-card-footer",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-clock",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaClock"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 60,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "12:44"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 61,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-calendar",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaCalendarAlt"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "09/12/2020"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 65,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
              className: "blog-card",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-img-top",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: __webpack_require__(/*! ../images/blog/blog2.png */ "./images/blog/blog2.png")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "category text-white",
                  children: "Receitas"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, {
                  className: "color-black title title-little",
                  children: "Comida org\xE2nica: 9 receitas com ingredientes sustent\xE1veis"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
                  className: "paragraph p-medium color-grey",
                  children: "Some quick example text to build on the card title and make up the bulk of the card's content."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "blog-card-footer",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-clock",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaClock"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "12:44"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-calendar",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaCalendarAlt"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 89,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "09/12/2020"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 90,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
              className: "blog-card",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-img-top",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: __webpack_require__(/*! ../images/blog/blog3.png */ "./images/blog/blog3.png")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "category text-white",
                  children: "Receitas"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, {
                  className: "color-black title title-little",
                  children: "Comida org\xE2nica: 9 receitas com ingredientes sustent\xE1veis"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
                  className: "paragraph p-medium color-grey",
                  children: "Some quick example text to build on the card title and make up the bulk of the card's content."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "blog-card-footer",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-clock",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaClock"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "12:44"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 111,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-calendar",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaCalendarAlt"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 114,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "09/12/2020"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 115,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
              className: "blog-card",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-img-top",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: __webpack_require__(/*! ../images/blog/blog4.png */ "./images/blog/blog4.png")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "category text-white",
                  children: "Receitas"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, {
                  className: "color-black title title-little",
                  children: "Comida org\xE2nica: 9 receitas com ingredientes sustent\xE1veis"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
                  className: "paragraph p-medium color-grey",
                  children: "Some quick example text to build on the card title and make up the bulk of the card's content."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "blog-card-footer",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-clock",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaClock"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 135,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "12:44"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 136,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-calendar",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaCalendarAlt"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 139,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "09/12/2020"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 140,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
              className: "blog-card",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-img-top",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: __webpack_require__(/*! ../images/blog/blog5.png */ "./images/blog/blog5.png")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 148,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "category text-white",
                  children: "Receitas"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, {
                  className: "color-black title title-little",
                  children: "Comida org\xE2nica: 9 receitas com ingredientes sustent\xE1veis"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
                  className: "paragraph p-medium color-grey",
                  children: "Some quick example text to build on the card title and make up the bulk of the card's content."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "blog-card-footer",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-clock",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaClock"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 160,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "12:44"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 161,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-calendar",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaCalendarAlt"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 164,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "09/12/2020"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 165,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 163,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
              className: "blog-card",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-img-top",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: __webpack_require__(/*! ../images/blog/blog6.png */ "./images/blog/blog6.png")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "category text-white",
                  children: "Receitas"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, {
                  className: "color-black title title-little",
                  children: "Comida org\xE2nica: 9 receitas com ingredientes sustent\xE1veis"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 178,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
                  className: "paragraph p-medium color-grey",
                  children: "Some quick example text to build on the card title and make up the bulk of the card's content."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "blog-card-footer",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-clock",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaClock"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 185,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "12:44"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 186,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-calendar",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaCalendarAlt"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 189,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "09/12/2020"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 190,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 188,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_buttonWhatsapp__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, this);
}

_c2 = Blog;
/* harmony default export */ __webpack_exports__["default"] = (Blog);

var _c, _c2;

$RefreshReg$(_c, "ActiveButton");
$RefreshReg$(_c2, "Blog");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6WyJBY3RpdmVCdXR0b24iLCJidXR0b25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaSIsImxlbmd0aCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIkJsb2ciLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsR0FBdUI7QUFDbkIsTUFBSUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGdCQUFULHNDQUFkO0FBQ0FGLFNBQU8sQ0FBQ0csT0FBUixDQUFnQixVQUFBQyxPQUFPLEVBQUk7QUFDdkJBLFdBQU8sQ0FBQ0MsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBSTtBQUNsQyxXQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsSUFBSU4sT0FBTyxDQUFDTyxNQUFSLEdBQWdCLENBQXBDLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTJDO0FBQ3ZDTixlQUFPLENBQUNNLENBQUQsQ0FBUCxDQUFXRSxTQUFYLENBQXFCQyxNQUFyQixDQUE0QixlQUE1QjtBQUNIOztBQUNETCxhQUFPLENBQUNJLFNBQVIsQ0FBa0JFLEdBQWxCLENBQXNCLGVBQXRCO0FBQ0gsS0FMRDtBQU1ILEdBUEQ7QUFRSDs7S0FWUVgsWTtBQVlUQSxZQUFZOztBQUVaLFNBQVNZLElBQVQsR0FBZ0I7QUFDWixzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLHdEQUFEO0FBQVMsV0FBSyxFQUFFO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJO0FBQU0sUUFBRSxFQUFDLE1BQVQ7QUFBQSw2QkFDSTtBQUFBLCtC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O0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkE5SEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUE4S0kscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlLSixlQStLSSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0tKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUxIOztNQXBMUUQsSTtBQXNMTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy5hZGE3OTYzNWJmMmNhNTM5ZGQwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGYUNhbGVuZGFyQWx0LCBGYUNsb2NrIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyBDYXJkLCBDb250YWluZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCBIZWFkU2VvIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcclxuaW1wb3J0IEJ1dHRvbldoYXRzYXBwIGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uV2hhdHNhcHAnXHJcblxyXG5mdW5jdGlvbiBBY3RpdmVCdXR0b24oKXtcclxuICAgIHZhciBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgYmxvZy1jYXRlZ29yaWVzIC5jYXRlZ29yaWVzX2J1dHRvbmApO1xyXG4gICAgYnV0dG9ucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDw9IGJ1dHRvbnMubGVuZ3RoIC0xOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b25fYWN0aXZlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbl9hY3RpdmUnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5BY3RpdmVCdXR0b24oKVxyXG5cclxuZnVuY3Rpb24gQmxvZygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRTZW8gdGl0bGU9eydFY29yYWl6IHwgQmxvZyd9IC8+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPG1haW4gaWQ9J2Jsb2cnPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2ctY2F0ZWdvcmllcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnQtc3RhbmRhcmQgYmctY29sb3Itc2Vjb25kIGFjdGl2ZUJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0LXN0YW5kYXJkIGJnLWNvbG9yLXNlY29uZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cmlvc2lkYWRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidC1zdGFuZGFyZCBiZy1jb2xvci1zZWNvbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3ZpZGFkZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnQtc3RhbmRhcmQgYmctY29sb3Itc2Vjb25kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVjZWl0YXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9zdHMtYXJlYSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9J2Jsb2ctY2FyZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaW1nLXRvcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCcuLi9pbWFnZXMvYmxvZy9ibG9nMS5wbmcnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdGVnb3J5IHRleHQtd2hpdGUnPlJlY2VpdGFzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT0nY29sb3ItYmxhY2sgdGl0bGUgdGl0bGUtbGl0dGxlJz5Db21pZGEgb3Jnw6JuaWNhOiA5IHJlY2VpdGFzIGNvbSBpbmdyZWRpZW50ZXMgc3VzdGVudMOhdmVpczwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBjbGFzc05hbWU9J3BhcmFncmFwaCBwLW1lZGl1bSBjb2xvci1ncmV5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwIHRoZSBidWxrIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgY2FyZCdzIGNvbnRlbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtZm9vdGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtY2xvY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNsb2NrIGNsYXNzTmFtZT0nY29sb3ItZ3JleScgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb2xvci1ncmV5IHBhcmFncmFwaCBwLW1lZGl1bSc+MTI6NDQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtY2FsZW5kYXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNhbGVuZGFyQWx0IGNsYXNzTmFtZT0nY29sb3ItZ3JleScgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb2xvci1ncmV5IHBhcmFncmFwaCBwLW1lZGl1bSc+MDkvMTIvMjAyMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9J2Jsb2ctY2FyZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaW1nLXRvcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCcuLi9pbWFnZXMvYmxvZy9ibG9nMi5wbmcnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdGVnb3J5IHRleHQtd2hpdGUnPlJlY2VpdGFzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT0nY29sb3ItYmxhY2sgdGl0bGUgdGl0bGUtbGl0dGxlJz5Db21pZGEgb3Jnw6JuaWNhOiA5IHJlY2VpdGFzIGNvbSBpbmdyZWRpZW50ZXMgc3VzdGVudMOhdmVpczwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBjbGFzc05hbWU9J3BhcmFncmFwaCBwLW1lZGl1bSBjb2xvci1ncmV5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwIHRoZSBidWxrIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgY2FyZCdzIGNvbnRlbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtZm9vdGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtY2xvY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNsb2NrIGNsYXNzTmFtZT0nY29sb3ItZ3JleScgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb2xvci1ncmV5IHBhcmFncmFwaCBwLW1lZGl1bSc+MTI6NDQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtY2FsZW5kYXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNhbGVuZGFyQWx0IGNsYXNzTmFtZT0nY29sb3ItZ3JleScgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb2xvci1ncmV5IHBhcmFncmFwaCBwLW1lZGl1bSc+MDkvMTIvMjAyMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9J2Jsb2ctY2FyZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaW1nLXRvcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCcuLi9pbWFnZXMvYmxvZy9ibG9nMy5wbmcnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdGVnb3J5IHRleHQtd2hpdGUnPlJlY2VpdGFzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT0nY29sb3ItYmxhY2sgdGl0bGUgdGl0bGUtbGl0dGxlJz5Db21pZGEgb3Jnw6JuaWNhOiA5IHJlY2VpdGFzIGNvbSBpbmdyZWRpZW50ZXMgc3VzdGVudMOhdmVpczwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBjbGFzc05hbWU9J3BhcmFncmFwaCBwLW1lZGl1bSBjb2xvci1ncmV5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwIHRoZSBidWxrIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgY2FyZCdzIGNvbnRlbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtZm9vdGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtY2xvY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNsb2NrIGNsYXNzTmFtZT0nY29sb3ItZ3JleScgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb2xvci1ncmV5IHBhcmFncmFwaCBwLW1lZGl1bSc+MTI6NDQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtY2FsZW5kYXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNhbGVuZGFyQWx0IGNsYXNzTmFtZT0nY29sb3ItZ3JleScgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb2xvci1ncmV5IHBhcmFncmFwaCBwLW1lZGl1bSc+MDkvMTIvMjAyMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9J2Jsb2ctY2FyZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaW1nLXRvcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCcuLi9pbWFnZXMvYmxvZy9ibG9nNC5wbmcnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdGVnb3J5IHRleHQtd2hpdGUnPlJlY2VpdGFzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT0nY29sb3ItYmxhY2sgdGl0bGUgdGl0bGUtbGl0dGxlJz5Db21pZGEgb3Jnw6JuaWNhOiA5IHJlY2VpdGFzIGNvbSBpbmdyZWRpZW50ZXMgc3VzdGVudMOhdmVpczwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBjbGFzc05hbWU9J3BhcmFncmFwaCBwLW1lZGl1bSBjb2xvci1ncmV5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwIHRoZSBidWxrIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgY2FyZCdzIGNvbnRlbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtZm9vdGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtY2xvY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNsb2NrIGNsYXNzTmFtZT0nY29sb3ItZ3JleScgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb2xvci1ncmV5IHBhcmFncmFwaCBwLW1lZGl1bSc+MTI6NDQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtY2FsZW5kYXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNhbGVuZGFyQWx0IGNsYXNzTmFtZT0nY29sb3ItZ3JleScgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb2xvci1ncmV5IHBhcmFncmFwaCBwLW1lZGl1bSc+MDkvMTIvMjAyMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9J2Jsb2ctY2FyZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaW1nLXRvcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCcuLi9pbWFnZXMvYmxvZy9ibG9nNS5wbmcnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdGVnb3J5IHRleHQtd2hpdGUnPlJlY2VpdGFzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT0nY29sb3ItYmxhY2sgdGl0bGUgdGl0bGUtbGl0dGxlJz5Db21pZGEgb3Jnw6JuaWNhOiA5IHJlY2VpdGFzIGNvbSBpbmdyZWRpZW50ZXMgc3VzdGVudMOhdmVpczwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBjbGFzc05hbWU9J3BhcmFncmFwaCBwLW1lZGl1bSBjb2xvci1ncmV5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwIHRoZSBidWxrIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgY2FyZCdzIGNvbnRlbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtZm9vdGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtY2xvY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNsb2NrIGNsYXNzTmFtZT0nY29sb3ItZ3JleScgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb2xvci1ncmV5IHBhcmFncmFwaCBwLW1lZGl1bSc+MTI6NDQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtY2FsZW5kYXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNhbGVuZGFyQWx0IGNsYXNzTmFtZT0nY29sb3ItZ3JleScgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb2xvci1ncmV5IHBhcmFncmFwaCBwLW1lZGl1bSc+MDkvMTIvMjAyMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9J2Jsb2ctY2FyZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaW1nLXRvcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCcuLi9pbWFnZXMvYmxvZy9ibG9nNi5wbmcnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdGVnb3J5IHRleHQtd2hpdGUnPlJlY2VpdGFzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT0nY29sb3ItYmxhY2sgdGl0bGUgdGl0bGUtbGl0dGxlJz5Db21pZGEgb3Jnw6JuaWNhOiA5IHJlY2VpdGFzIGNvbSBpbmdyZWRpZW50ZXMgc3VzdGVudMOhdmVpczwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBjbGFzc05hbWU9J3BhcmFncmFwaCBwLW1lZGl1bSBjb2xvci1ncmV5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwIHRoZSBidWxrIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgY2FyZCdzIGNvbnRlbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtZm9vdGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtY2xvY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNsb2NrIGNsYXNzTmFtZT0nY29sb3ItZ3JleScgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb2xvci1ncmV5IHBhcmFncmFwaCBwLW1lZGl1bSc+MTI6NDQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtY2FsZW5kYXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNhbGVuZGFyQWx0IGNsYXNzTmFtZT0nY29sb3ItZ3JleScgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb2xvci1ncmV5IHBhcmFncmFwaCBwLW1lZGl1bSc+MDkvMTIvMjAyMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uV2hhdHNhcHAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZyJdLCJzb3VyY2VSb290IjoiIn0=