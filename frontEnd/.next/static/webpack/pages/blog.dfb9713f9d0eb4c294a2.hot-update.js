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








function Blog() {
  function Filter() {
    var button_show_elements = document.querySelectorAll('.blog-categories .bt-standard');
    var categories_elements = document.querySelectorAll('.blog-card');
    button_show_elements.forEach(function (element) {
      var button_data = element.getAttribute('data-show-category');
      element.addEventListener('click', function () {
        categories_elements.forEach(function (el) {
          el.classList.remove('effectShow');
          el.classList.add('effectHide');

          if (button_data == 'todos') {
            el.classList.add('effectShow');
          } else {
            var div_show = document.querySelectorAll(".".concat(button_data));
            div_show.forEach(function (element_show) {
              element_show.classList.add('effectShow');
            });
          }
        });
      });
    });
  }

  Filter();

  function ActiveButton() {
    var buttons = document.querySelectorAll(".blog-categories .bt-standard");
    buttons.forEach(function (element) {
      element.addEventListener('click', function () {
        for (var i = 0; i <= buttons.length - 1; i++) {
          buttons[i].classList.remove('activeButton');
        }

        element.classList.add('activeButton');
      });
    });
  }

  ActiveButton();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_head__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: 'Ecoraiz | Blog'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_header__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
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
              lineNumber: 63,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              "data-show-category": "curiosidades",
              className: "bt-standard bg-color-second",
              children: "Curiosidades"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              "data-show-category": "novidades",
              className: "bt-standard bg-color-second",
              children: "Novidades"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              "data-show-category": "receitas",
              className: "bt-standard bg-color-second",
              children: "Receitas"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "posts-area",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
              className: "effectShow blog-card receitas",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-img-top",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: __webpack_require__(/*! ../images/blog/blog1.png */ "./images/blog/blog1.png")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "category text-white",
                  children: "Receitas"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, {
                  className: "color-black title title-little",
                  children: "Comida org\xE2nica: 9 receitas com ingredientes sustent\xE1veis"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
                  className: "paragraph p-medium color-grey",
                  children: "Some quick example text to build on the card title and make up the bulk of the card's content."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
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
                      lineNumber: 91,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "12:44"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 92,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-calendar",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaCalendarAlt"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 95,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "09/12/2020"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 96,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
              className: "effectShow blog-card receitas",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-img-top",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: __webpack_require__(/*! ../images/blog/blog2.png */ "./images/blog/blog2.png")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "category text-white",
                  children: "Receitas"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, {
                  className: "color-black title title-little",
                  children: "Mandioca: conhe\xE7a 9 benef\xEDcios desse alimento"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
                  className: "paragraph p-medium color-grey",
                  children: "Some quick example text to build on the card title and make up the bulk of the card's content."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
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
                      lineNumber: 116,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "12:44"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 117,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-calendar",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaCalendarAlt"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 120,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "09/12/2020"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 121,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
              className: "effectShow blog-card curiosidades",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-img-top",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: __webpack_require__(/*! ../images/blog/blog3.png */ "./images/blog/blog3.png")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "category text-white",
                  children: "Curiosidades"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, {
                  className: "color-black title title-little",
                  children: "Por que consumir alimentos org\xE2nicos?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
                  className: "paragraph p-medium color-grey",
                  children: "Some quick example text to build on the card title and make up the bulk of the card's content."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
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
                      lineNumber: 141,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "12:44"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 142,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-calendar",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaCalendarAlt"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 145,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "09/12/2020"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 146,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
              className: "effectShow blog-card receitas",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-img-top",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: __webpack_require__(/*! ../images/blog/blog4.png */ "./images/blog/blog4.png")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "category text-white",
                  children: "Receitas"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, {
                  className: "color-black title title-little",
                  children: "9 receitas vegetarianas e veganas perfeitas..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
                  className: "paragraph p-medium color-grey",
                  children: "Some quick example text to build on the card title and make up the bulk of the card's content."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
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
                      lineNumber: 166,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "12:44"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 167,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 165,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-calendar",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaCalendarAlt"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 170,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "09/12/2020"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 171,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 169,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
              className: "effectShow blog-card novidades",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-img-top",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: __webpack_require__(/*! ../images/blog/blog5.png */ "./images/blog/blog5.png")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "category text-white",
                  children: "Novidades"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, {
                  className: "color-black title title-little",
                  children: "Conhe\xE7a a fazenda tamatanduba"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
                  className: "paragraph p-medium color-grey",
                  children: "Some quick example text to build on the card title and make up the bulk of the card's content."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 185,
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
                      lineNumber: 191,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "12:44"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 192,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 190,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-calendar",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaCalendarAlt"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 195,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "09/12/2020"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 196,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 194,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
              className: "effectShow blog-card",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-img-top",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: __webpack_require__(/*! ../images/blog/blog6.png */ "./images/blog/blog6.png")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "category text-white",
                  children: "Receitas"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 205,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, {
                  className: "color-black title title-little",
                  children: "Comida org\xE2nica: 9 receitas com ingredientes sustent\xE1veis"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
                  className: "paragraph p-medium color-grey",
                  children: "Some quick example text to build on the card title and make up the bulk of the card's content."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
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
                      lineNumber: 216,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "12:44"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 217,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 215,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-card-calendar",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaCalendarAlt"], {
                      className: "color-grey",
                      size: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 220,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "color-grey paragraph p-medium",
                      children: "09/12/2020"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 221,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 219,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_buttonWhatsapp__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 9
  }, this);
}

_c = Blog;
/* harmony default export */ __webpack_exports__["default"] = (Blog);

var _c;

$RefreshReg$(_c, "Blog");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6WyJCbG9nIiwiRmlsdGVyIiwiYnV0dG9uX3Nob3dfZWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjYXRlZ29yaWVzX2VsZW1lbnRzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJidXR0b25fZGF0YSIsImdldEF0dHJpYnV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImRpdl9zaG93IiwiZWxlbWVudF9zaG93IiwiQWN0aXZlQnV0dG9uIiwiYnV0dG9ucyIsImkiLCJsZW5ndGgiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLElBQVQsR0FBZ0I7QUFFWixXQUFTQyxNQUFULEdBQWtCO0FBQ2QsUUFBSUMsb0JBQW9CLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsK0JBQTFCLENBQTNCO0FBQ0EsUUFBSUMsbUJBQW1CLEdBQUdGLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBMUI7QUFFQUYsd0JBQW9CLENBQUNJLE9BQXJCLENBQTZCLFVBQUFDLE9BQU8sRUFBSTtBQUNwQyxVQUFJQyxXQUFXLEdBQUdELE9BQU8sQ0FBQ0UsWUFBUixDQUFxQixvQkFBckIsQ0FBbEI7QUFDQUYsYUFBTyxDQUFDRyxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxZQUFNO0FBQ3BDTCwyQkFBbUIsQ0FBQ0MsT0FBcEIsQ0FBNEIsVUFBQUssRUFBRSxFQUFJO0FBQzlCQSxZQUFFLENBQUNDLFNBQUgsQ0FBYUMsTUFBYixDQUFvQixZQUFwQjtBQUNBRixZQUFFLENBQUNDLFNBQUgsQ0FBYUUsR0FBYixDQUFpQixZQUFqQjs7QUFDQSxjQUFJTixXQUFXLElBQUksT0FBbkIsRUFBNEI7QUFDeEJHLGNB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QUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkE5SEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUE4S0kscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlLSixlQStLSSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0tKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUxIOztLQWhPUXJCLEk7QUFrT01BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuZGZiOTcxM2Y5ZDBlYjRjMjk0YTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRmFDYWxlbmRhckFsdCwgRmFDbG9jayB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgQ2FyZCwgQ29udGFpbmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgSGVhZFNlbyBmcm9tICcuLi9jb21wb25lbnRzL2hlYWQnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXHJcbmltcG9ydCBCdXR0b25XaGF0c2FwcCBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbldoYXRzYXBwJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIEJsb2coKSB7XHJcblxyXG4gICAgZnVuY3Rpb24gRmlsdGVyKCkge1xyXG4gICAgICAgIHZhciBidXR0b25fc2hvd19lbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9nLWNhdGVnb3JpZXMgLmJ0LXN0YW5kYXJkJylcclxuICAgICAgICB2YXIgY2F0ZWdvcmllc19lbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9nLWNhcmQnKVxyXG5cclxuICAgICAgICBidXR0b25fc2hvd19lbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9uX2RhdGEgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zaG93LWNhdGVnb3J5JylcclxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXNfZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZWZmZWN0U2hvdycpXHJcbiAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnZWZmZWN0SGlkZScpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1dHRvbl9kYXRhID09ICd0b2RvcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnZWZmZWN0U2hvdycpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpdl9zaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7YnV0dG9uX2RhdGF9YClcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZfc2hvdy5mb3JFYWNoKGVsZW1lbnRfc2hvdyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3Nob3cuY2xhc3NMaXN0LmFkZCgnZWZmZWN0U2hvdycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIEZpbHRlcigpXHJcblxyXG4gICAgZnVuY3Rpb24gQWN0aXZlQnV0dG9uKCkge1xyXG4gICAgICAgIHZhciBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmJsb2ctY2F0ZWdvcmllcyAuYnQtc3RhbmRhcmRgKTtcclxuICAgICAgICBidXR0b25zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBidXR0b25zLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlQnV0dG9uJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlQnV0dG9uJylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIEFjdGl2ZUJ1dHRvbigpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkU2VvIHRpdGxlPXsnRWNvcmFpeiB8IEJsb2cnfSAvPlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxtYWluIGlkPSdibG9nJz5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhdGVnb3JpZXMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXNob3ctY2F0ZWdvcnk9J3RvZG9zJyBjbGFzc05hbWU9XCJidC1zdGFuZGFyZCBiZy1jb2xvci1zZWNvbmQgYWN0aXZlQnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9kb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXNob3ctY2F0ZWdvcnk9J2N1cmlvc2lkYWRlcycgY2xhc3NOYW1lPVwiYnQtc3RhbmRhcmQgYmctY29sb3Itc2Vjb25kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VyaW9zaWRhZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1zaG93LWNhdGVnb3J5PSdub3ZpZGFkZXMnIGNsYXNzTmFtZT1cImJ0LXN0YW5kYXJkIGJnLWNvbG9yLXNlY29uZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdmlkYWRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtc2hvdy1jYXRlZ29yeT0ncmVjZWl0YXMnIGNsYXNzTmFtZT1cImJ0LXN0YW5kYXJkIGJnLWNvbG9yLXNlY29uZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlY2VpdGFzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb3N0cy1hcmVhJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT0nZWZmZWN0U2hvdyBibG9nLWNhcmQgcmVjZWl0YXMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWltZy10b3AnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZSgnLi4vaW1hZ2VzL2Jsb2cvYmxvZzEucG5nJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXRlZ29yeSB0ZXh0LXdoaXRlJz5SZWNlaXRhczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZSBjbGFzc05hbWU9J2NvbG9yLWJsYWNrIHRpdGxlIHRpdGxlLWxpdHRsZSc+Q29taWRhIG9yZ8OibmljYTogOSByZWNlaXRhcyBjb20gaW5ncmVkaWVudGVzIHN1c3RlbnTDoXZlaXM8L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcC1tZWRpdW0gY29sb3ItZ3JleSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb21lIHF1aWNrIGV4YW1wbGUgdGV4dCB0byBidWlsZCBvbiB0aGUgY2FyZCB0aXRsZSBhbmQgbWFrZSB1cCB0aGUgYnVsayBvZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGNhcmQncyBjb250ZW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvZy1jYXJkLWZvb3Rlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvZy1jYXJkLWNsb2NrJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFDbG9jayBjbGFzc05hbWU9J2NvbG9yLWdyZXknIHNpemU9ezE1fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY29sb3ItZ3JleSBwYXJhZ3JhcGggcC1tZWRpdW0nPjEyOjQ0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvZy1jYXJkLWNhbGVuZGFyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFDYWxlbmRhckFsdCBjbGFzc05hbWU9J2NvbG9yLWdyZXknIHNpemU9ezE1fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY29sb3ItZ3JleSBwYXJhZ3JhcGggcC1tZWRpdW0nPjA5LzEyLzIwMjA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPSdlZmZlY3RTaG93IGJsb2ctY2FyZCByZWNlaXRhcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaW1nLXRvcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCcuLi9pbWFnZXMvYmxvZy9ibG9nMi5wbmcnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdGVnb3J5IHRleHQtd2hpdGUnPlJlY2VpdGFzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT0nY29sb3ItYmxhY2sgdGl0bGUgdGl0bGUtbGl0dGxlJz5NYW5kaW9jYTogY29uaGXDp2EgOSBiZW5lZsOtY2lvcyBkZXNzZSBhbGltZW50bzwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBjbGFzc05hbWU9J3BhcmFncmFwaCBwLW1lZGl1bSBjb2xvci1ncmV5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwIHRoZSBidWxrIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgY2FyZCdzIGNvbnRlbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtZm9vdGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtY2xvY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNsb2NrIGNsYXNzTmFtZT0nY29sb3ItZ3JleScgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb2xvci1ncmV5IHBhcmFncmFwaCBwLW1lZGl1bSc+MTI6NDQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtY2FsZW5kYXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNhbGVuZGFyQWx0IGNsYXNzTmFtZT0nY29sb3ItZ3JleScgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb2xvci1ncmV5IHBhcmFncmFwaCBwLW1lZGl1bSc+MDkvMTIvMjAyMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9J2VmZmVjdFNob3cgYmxvZy1jYXJkIGN1cmlvc2lkYWRlcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaW1nLXRvcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCcuLi9pbWFnZXMvYmxvZy9ibG9nMy5wbmcnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdGVnb3J5IHRleHQtd2hpdGUnPkN1cmlvc2lkYWRlczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZSBjbGFzc05hbWU9J2NvbG9yLWJsYWNrIHRpdGxlIHRpdGxlLWxpdHRsZSc+UG9yIHF1ZSBjb25zdW1pciBhbGltZW50b3Mgb3Jnw6JuaWNvcz88L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcC1tZWRpdW0gY29sb3ItZ3JleSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb21lIHF1aWNrIGV4YW1wbGUgdGV4dCB0byBidWlsZCBvbiB0aGUgY2FyZCB0aXRsZSBhbmQgbWFrZSB1cCB0aGUgYnVsayBvZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGNhcmQncyBjb250ZW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvZy1jYXJkLWZvb3Rlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvZy1jYXJkLWNsb2NrJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFDbG9jayBjbGFzc05hbWU9J2NvbG9yLWdyZXknIHNpemU9ezE1fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY29sb3ItZ3JleSBwYXJhZ3JhcGggcC1tZWRpdW0nPjEyOjQ0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvZy1jYXJkLWNhbGVuZGFyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFDYWxlbmRhckFsdCBjbGFzc05hbWU9J2NvbG9yLWdyZXknIHNpemU9ezE1fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY29sb3ItZ3JleSBwYXJhZ3JhcGggcC1tZWRpdW0nPjA5LzEyLzIwMjA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPSdlZmZlY3RTaG93IGJsb2ctY2FyZCByZWNlaXRhcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaW1nLXRvcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCcuLi9pbWFnZXMvYmxvZy9ibG9nNC5wbmcnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdGVnb3J5IHRleHQtd2hpdGUnPlJlY2VpdGFzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT0nY29sb3ItYmxhY2sgdGl0bGUgdGl0bGUtbGl0dGxlJz45IHJlY2VpdGFzIHZlZ2V0YXJpYW5hcyBlIHZlZ2FuYXMgcGVyZmVpdGFzLi4uPC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IGNsYXNzTmFtZT0ncGFyYWdyYXBoIHAtbWVkaXVtIGNvbG9yLWdyZXknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU29tZSBxdWljayBleGFtcGxlIHRleHQgdG8gYnVpbGQgb24gdGhlIGNhcmQgdGl0bGUgYW5kIG1ha2UgdXAgdGhlIGJ1bGsgb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBjYXJkJ3MgY29udGVudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2ctY2FyZC1mb290ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2ctY2FyZC1jbG9jayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhQ2xvY2sgY2xhc3NOYW1lPSdjb2xvci1ncmV5JyBzaXplPXsxNX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NvbG9yLWdyZXkgcGFyYWdyYXBoIHAtbWVkaXVtJz4xMjo0NDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2ctY2FyZC1jYWxlbmRhcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhQ2FsZW5kYXJBbHQgY2xhc3NOYW1lPSdjb2xvci1ncmV5JyBzaXplPXsxNX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NvbG9yLWdyZXkgcGFyYWdyYXBoIHAtbWVkaXVtJz4wOS8xMi8yMDIwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT0nZWZmZWN0U2hvdyBibG9nLWNhcmQgbm92aWRhZGVzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1pbWctdG9wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoJy4uL2ltYWdlcy9ibG9nL2Jsb2c1LnBuZycpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcnkgdGV4dC13aGl0ZSc+Tm92aWRhZGVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT0nY29sb3ItYmxhY2sgdGl0bGUgdGl0bGUtbGl0dGxlJz5Db25oZcOnYSBhIGZhemVuZGEgdGFtYXRhbmR1YmE8L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcC1tZWRpdW0gY29sb3ItZ3JleSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb21lIHF1aWNrIGV4YW1wbGUgdGV4dCB0byBidWlsZCBvbiB0aGUgY2FyZCB0aXRsZSBhbmQgbWFrZSB1cCB0aGUgYnVsayBvZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGNhcmQncyBjb250ZW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvZy1jYXJkLWZvb3Rlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvZy1jYXJkLWNsb2NrJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFDbG9jayBjbGFzc05hbWU9J2NvbG9yLWdyZXknIHNpemU9ezE1fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY29sb3ItZ3JleSBwYXJhZ3JhcGggcC1tZWRpdW0nPjEyOjQ0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvZy1jYXJkLWNhbGVuZGFyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFDYWxlbmRhckFsdCBjbGFzc05hbWU9J2NvbG9yLWdyZXknIHNpemU9ezE1fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY29sb3ItZ3JleSBwYXJhZ3JhcGggcC1tZWRpdW0nPjA5LzEyLzIwMjA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPSdlZmZlY3RTaG93IGJsb2ctY2FyZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaW1nLXRvcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCcuLi9pbWFnZXMvYmxvZy9ibG9nNi5wbmcnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdGVnb3J5IHRleHQtd2hpdGUnPlJlY2VpdGFzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT0nY29sb3ItYmxhY2sgdGl0bGUgdGl0bGUtbGl0dGxlJz5Db21pZGEgb3Jnw6JuaWNhOiA5IHJlY2VpdGFzIGNvbSBpbmdyZWRpZW50ZXMgc3VzdGVudMOhdmVpczwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dCBjbGFzc05hbWU9J3BhcmFncmFwaCBwLW1lZGl1bSBjb2xvci1ncmV5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwIHRoZSBidWxrIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgY2FyZCdzIGNvbnRlbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtZm9vdGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtY2xvY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNsb2NrIGNsYXNzTmFtZT0nY29sb3ItZ3JleScgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb2xvci1ncmV5IHBhcmFncmFwaCBwLW1lZGl1bSc+MTI6NDQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmQtY2FsZW5kYXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNhbGVuZGFyQWx0IGNsYXNzTmFtZT0nY29sb3ItZ3JleScgc2l6ZT17MTV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb2xvci1ncmV5IHBhcmFncmFwaCBwLW1lZGl1bSc+MDkvMTIvMjAyMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uV2hhdHNhcHAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZyJdLCJzb3VyY2VSb290IjoiIn0=