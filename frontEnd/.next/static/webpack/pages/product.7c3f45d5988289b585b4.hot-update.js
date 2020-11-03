webpackHotUpdate_N_E("pages/product",{

/***/ "./node_modules/chain-function/index.js":
/*!**********************************************!*\
  !*** ./node_modules/chain-function/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function chain(){
  var len = arguments.length
  var args = [];

  for (var i = 0; i < len; i++)
    args[i] = arguments[i]

  args = args.filter(function(fn){ return fn != null })

  if (args.length === 0) return undefined
  if (args.length === 1) return args[0]

  return args.reduce(function(current, next){
    return function chainedFunction() {
      current.apply(this, arguments);
      next.apply(this, arguments);
    };
  })
}


/***/ }),

/***/ "./node_modules/react-addons-css-transition-group/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-addons-css-transition-group/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



module.exports = __webpack_require__(/*! react-transition-group/CSSTransitionGroup */ "./node_modules/react-addons-css-transition-group/node_modules/react-transition-group/CSSTransitionGroup.js");


/***/ }),

/***/ "./node_modules/react-addons-css-transition-group/node_modules/dom-helpers/class/addClass.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-addons-css-transition-group/node_modules/dom-helpers/class/addClass.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(/*! ./hasClass */ "./node_modules/react-addons-css-transition-group/node_modules/dom-helpers/class/hasClass.js"));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-addons-css-transition-group/node_modules/dom-helpers/class/hasClass.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-addons-css-transition-group/node_modules/dom-helpers/class/hasClass.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-addons-css-transition-group/node_modules/dom-helpers/class/removeClass.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/react-addons-css-transition-group/node_modules/dom-helpers/class/removeClass.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),

/***/ "./node_modules/react-addons-css-transition-group/node_modules/dom-helpers/transition/properties.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/react-addons-css-transition-group/node_modules/dom-helpers/transition/properties.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(/*! ../util/inDOM */ "./node_modules/react-addons-css-transition-group/node_modules/dom-helpers/util/inDOM.js"));

var transform = 'transform';
exports.transform = transform;
var prefix, transitionEnd, animationEnd;
exports.animationEnd = animationEnd;
exports.transitionEnd = transitionEnd;
var transitionProperty, transitionDuration, transitionTiming, transitionDelay;
exports.transitionDelay = transitionDelay;
exports.transitionTiming = transitionTiming;
exports.transitionDuration = transitionDuration;
exports.transitionProperty = transitionProperty;
var animationName, animationDuration, animationTiming, animationDelay;
exports.animationDelay = animationDelay;
exports.animationTiming = animationTiming;
exports.animationDuration = animationDuration;
exports.animationName = animationName;

if (_inDOM.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
  exports.transform = transform = prefix + "-" + transform;
  exports.transitionProperty = transitionProperty = prefix + "-transition-property";
  exports.transitionDuration = transitionDuration = prefix + "-transition-duration";
  exports.transitionDelay = transitionDelay = prefix + "-transition-delay";
  exports.transitionTiming = transitionTiming = prefix + "-transition-timing-function";
  exports.animationName = animationName = prefix + "-animation-name";
  exports.animationDuration = animationDuration = prefix + "-animation-duration";
  exports.animationTiming = animationTiming = prefix + "-animation-delay";
  exports.animationDelay = animationDelay = prefix + "-animation-timing-function";
}

var _default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};
exports.default = _default;

function getTransitionProperties() {
  var style = document.createElement('div').style;
  var vendorMap = {
    O: function O(e) {
      return "o" + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return "webkit" + e;
    },
    ms: function ms(e) {
      return "MS" + e;
    }
  };
  var vendors = Object.keys(vendorMap);
  var transitionEnd, animationEnd;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + "TransitionProperty" in style) {
      prefix = "-" + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';
  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';
  style = null;
  return {
    animationEnd: animationEnd,
    transitionEnd: transitionEnd,
    prefix: prefix
  };
}

/***/ }),

/***/ "./node_modules/react-addons-css-transition-group/node_modules/dom-helpers/util/inDOM.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-addons-css-transition-group/node_modules/dom-helpers/util/inDOM.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-addons-css-transition-group/node_modules/dom-helpers/util/requestAnimationFrame.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/react-addons-css-transition-group/node_modules/dom-helpers/util/requestAnimationFrame.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(/*! ./inDOM */ "./node_modules/react-addons-css-transition-group/node_modules/dom-helpers/util/inDOM.js"));

var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
var cancel = 'clearTimeout';
var raf = fallback;
var compatRaf;

var getKey = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
};

if (_inDOM.default) {
  vendors.some(function (vendor) {
    var rafKey = getKey(vendor, 'request');

    if (rafKey in window) {
      cancel = getKey(vendor, 'cancel');
      return raf = function raf(cb) {
        return window[rafKey](cb);
      };
    }
  });
}
/* https://github.com/component/raf */


var prev = new Date().getTime();

function fallback(fn) {
  var curr = new Date().getTime(),
      ms = Math.max(0, 16 - (curr - prev)),
      req = setTimeout(fn, ms);
  prev = curr;
  return req;
}

compatRaf = function compatRaf(cb) {
  return raf(cb);
};

compatRaf.cancel = function (id) {
  window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
};

var _default = compatRaf;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-addons-css-transition-group/node_modules/react-transition-group/CSSTransitionGroup.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/react-addons-css-transition-group/node_modules/react-transition-group/CSSTransitionGroup.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-addons-css-transition-group/node_modules/react-transition-group/TransitionGroup.js");

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _CSSTransitionGroupChild = __webpack_require__(/*! ./CSSTransitionGroupChild */ "./node_modules/react-addons-css-transition-group/node_modules/react-transition-group/CSSTransitionGroupChild.js");

var _CSSTransitionGroupChild2 = _interopRequireDefault(_CSSTransitionGroupChild);

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-addons-css-transition-group/node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  transitionName: _PropTypes.nameShape.isRequired,

  transitionAppear: _propTypes2.default.bool,
  transitionEnter: _propTypes2.default.bool,
  transitionLeave: _propTypes2.default.bool,
  transitionAppearTimeout: (0, _PropTypes.transitionTimeout)('Appear'),
  transitionEnterTimeout: (0, _PropTypes.transitionTimeout)('Enter'),
  transitionLeaveTimeout: (0, _PropTypes.transitionTimeout)('Leave')
};

var defaultProps = {
  transitionAppear: false,
  transitionEnter: true,
  transitionLeave: true
};

var CSSTransitionGroup = function (_React$Component) {
  _inherits(CSSTransitionGroup, _React$Component);

  function CSSTransitionGroup() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
      return _react2.default.createElement(_CSSTransitionGroupChild2.default, {
        name: _this.props.transitionName,
        appear: _this.props.transitionAppear,
        enter: _this.props.transitionEnter,
        leave: _this.props.transitionLeave,
        appearTimeout: _this.props.transitionAppearTimeout,
        enterTimeout: _this.props.transitionEnterTimeout,
        leaveTimeout: _this.props.transitionLeaveTimeout
      }, child);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // We need to provide this childFactory so that
  // ReactCSSTransitionGroupChild can receive updates to name, enter, and
  // leave while it is leaving.


  CSSTransitionGroup.prototype.render = function render() {
    return _react2.default.createElement(_TransitionGroup2.default, _extends({}, this.props, { childFactory: this._wrapChild }));
  };

  return CSSTransitionGroup;
}(_react2.default.Component);

CSSTransitionGroup.displayName = 'CSSTransitionGroup';


CSSTransitionGroup.propTypes =  true ? propTypes : undefined;
CSSTransitionGroup.defaultProps = defaultProps;

exports.default = CSSTransitionGroup;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-addons-css-transition-group/node_modules/react-transition-group/CSSTransitionGroupChild.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/react-addons-css-transition-group/node_modules/react-transition-group/CSSTransitionGroupChild.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _addClass = __webpack_require__(/*! dom-helpers/class/addClass */ "./node_modules/react-addons-css-transition-group/node_modules/dom-helpers/class/addClass.js");

var _addClass2 = _interopRequireDefault(_addClass);

var _removeClass = __webpack_require__(/*! dom-helpers/class/removeClass */ "./node_modules/react-addons-css-transition-group/node_modules/dom-helpers/class/removeClass.js");

var _removeClass2 = _interopRequireDefault(_removeClass);

var _requestAnimationFrame = __webpack_require__(/*! dom-helpers/util/requestAnimationFrame */ "./node_modules/react-addons-css-transition-group/node_modules/dom-helpers/util/requestAnimationFrame.js");

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _properties = __webpack_require__(/*! dom-helpers/transition/properties */ "./node_modules/react-addons-css-transition-group/node_modules/dom-helpers/transition/properties.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-addons-css-transition-group/node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = [];
if (_properties.transitionEnd) events.push(_properties.transitionEnd);
if (_properties.animationEnd) events.push(_properties.animationEnd);

function addEndListener(node, listener) {
  if (events.length) {
    events.forEach(function (e) {
      return node.addEventListener(e, listener, false);
    });
  } else {
    setTimeout(listener, 0);
  }

  return function () {
    if (!events.length) return;
    events.forEach(function (e) {
      return node.removeEventListener(e, listener, false);
    });
  };
}

var propTypes = {
  children: _propTypes2.default.node,
  name: _PropTypes.nameShape.isRequired,

  // Once we require timeouts to be specified, we can remove the
  // boolean flags (appear etc.) and just accept a number
  // or a bool for the timeout flags (appearTimeout etc.)
  appear: _propTypes2.default.bool,
  enter: _propTypes2.default.bool,
  leave: _propTypes2.default.bool,
  appearTimeout: _propTypes2.default.number,
  enterTimeout: _propTypes2.default.number,
  leaveTimeout: _propTypes2.default.number
};

var CSSTransitionGroupChild = function (_React$Component) {
  _inherits(CSSTransitionGroupChild, _React$Component);

  function CSSTransitionGroupChild() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroupChild);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.componentWillAppear = function (done) {
      if (_this.props.appear) {
        _this.transition('appear', done, _this.props.appearTimeout);
      } else {
        done();
      }
    }, _this.componentWillEnter = function (done) {
      if (_this.props.enter) {
        _this.transition('enter', done, _this.props.enterTimeout);
      } else {
        done();
      }
    }, _this.componentWillLeave = function (done) {
      if (_this.props.leave) {
        _this.transition('leave', done, _this.props.leaveTimeout);
      } else {
        done();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
    this.classNameAndNodeQueue = [];
    this.transitionTimeouts = [];
  };

  CSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounted = true;

    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.transitionTimeouts.forEach(function (timeout) {
      clearTimeout(timeout);
    });

    this.classNameAndNodeQueue.length = 0;
  };

  CSSTransitionGroupChild.prototype.transition = function transition(animationType, finishCallback, timeout) {
    var node = (0, _reactDom.findDOMNode)(this);

    if (!node) {
      if (finishCallback) {
        finishCallback();
      }
      return;
    }

    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
    var timer = null;
    var removeListeners = void 0;

    (0, _addClass2.default)(node, className);

    // Need to do this to actually trigger a transition.
    this.queueClassAndNode(activeClassName, node);

    // Clean-up the animation after the specified delay
    var finish = function finish(e) {
      if (e && e.target !== node) {
        return;
      }

      clearTimeout(timer);
      if (removeListeners) removeListeners();

      (0, _removeClass2.default)(node, className);
      (0, _removeClass2.default)(node, activeClassName);

      if (removeListeners) removeListeners();

      // Usually this optional callback is used for informing an owner of
      // a leave animation and telling it to remove the child.
      if (finishCallback) {
        finishCallback();
      }
    };

    if (timeout) {
      timer = setTimeout(finish, timeout);
      this.transitionTimeouts.push(timer);
    } else if (_properties.transitionEnd) {
      removeListeners = addEndListener(node, finish);
    }
  };

  CSSTransitionGroupChild.prototype.queueClassAndNode = function queueClassAndNode(className, node) {
    var _this2 = this;

    this.classNameAndNodeQueue.push({
      className: className,
      node: node
    });

    if (!this.rafHandle) {
      this.rafHandle = (0, _requestAnimationFrame2.default)(function () {
        return _this2.flushClassNameAndNodeQueue();
      });
    }
  };

  CSSTransitionGroupChild.prototype.flushClassNameAndNodeQueue = function flushClassNameAndNodeQueue() {
    if (!this.unmounted) {
      this.classNameAndNodeQueue.forEach(function (obj) {
        // This is for to force a repaint,
        // which is necessary in order to transition styles when adding a class name.
        /* eslint-disable no-unused-expressions */
        obj.node.scrollTop;
        /* eslint-enable no-unused-expressions */
        (0, _addClass2.default)(obj.node, obj.className);
      });
    }
    this.classNameAndNodeQueue.length = 0;
    this.rafHandle = null;
  };

  CSSTransitionGroupChild.prototype.render = function render() {
    var props = _extends({}, this.props);
    delete props.name;
    delete props.appear;
    delete props.enter;
    delete props.leave;
    delete props.appearTimeout;
    delete props.enterTimeout;
    delete props.leaveTimeout;
    delete props.children;
    return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), props);
  };

  return CSSTransitionGroupChild;
}(_react2.default.Component);

CSSTransitionGroupChild.displayName = 'CSSTransitionGroupChild';


CSSTransitionGroupChild.propTypes =  true ? propTypes : undefined;

exports.default = CSSTransitionGroupChild;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-addons-css-transition-group/node_modules/react-transition-group/TransitionGroup.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/react-addons-css-transition-group/node_modules/react-transition-group/TransitionGroup.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _chainFunction = __webpack_require__(/*! chain-function */ "./node_modules/chain-function/index.js");

var _chainFunction2 = _interopRequireDefault(_chainFunction);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-addons-css-transition-group/node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _ChildMapping = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-addons-css-transition-group/node_modules/react-transition-group/utils/ChildMapping.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  component: _propTypes2.default.any,
  childFactory: _propTypes2.default.func,
  children: _propTypes2.default.node
};

var defaultProps = {
  component: 'span',
  childFactory: function childFactory(child) {
    return child;
  }
};

var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.performAppear = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillAppear) {
        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
      } else {
        _this._handleDoneAppearing(key, component);
      }
    };

    _this._handleDoneAppearing = function (key, component) {
      if (component.componentDidAppear) {
        component.componentDidAppear();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully appeared. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performEnter = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillEnter) {
        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
      } else {
        _this._handleDoneEntering(key, component);
      }
    };

    _this._handleDoneEntering = function (key, component) {
      if (component.componentDidEnter) {
        component.componentDidEnter();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully entered. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performLeave = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillLeave) {
        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
      } else {
        // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
        _this._handleDoneLeaving(key, component);
      }
    };

    _this._handleDoneLeaving = function (key, component) {
      if (component.componentDidLeave) {
        component.componentDidLeave();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        // This entered again before it fully left. Add it again.
        _this.keysToEnter.push(key);
      } else {
        _this.setState(function (state) {
          var newChildren = _extends({}, state.children);
          delete newChildren[key];
          return { children: newChildren };
        });
      }
    };

    _this.childRefs = Object.create(null);

    _this.state = {
      children: (0, _ChildMapping.getChildMapping)(props.children)
    };
    return _this;
  }

  TransitionGroup.prototype.componentWillMount = function componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  };

  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
    var initialChildMapping = this.state.children;
    for (var key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key, this.childRefs[key]);
      }
    }
  };

  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
    var prevChildMapping = this.state.children;

    this.setState({
      children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
    });

    for (var key in nextChildMapping) {
      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
        this.keysToEnter.push(key);
      }
    }

    for (var _key in prevChildMapping) {
      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
      if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
        this.keysToLeave.push(_key);
      }
    }

    // If we want to someday check for reordering, we could do it here.
  };

  TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(function (key) {
      return _this2.performEnter(key, _this2.childRefs[key]);
    });

    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(function (key) {
      return _this2.performLeave(key, _this2.childRefs[key]);
    });
  };

  TransitionGroup.prototype.render = function render() {
    var _this3 = this;

    // TODO: we could get rid of the need for the wrapper node
    // by cloning a single child
    var childrenToRender = [];

    var _loop = function _loop(key) {
      var child = _this3.state.children[key];
      if (child) {
        var isCallbackRef = typeof child.ref !== 'string';
        var factoryChild = _this3.props.childFactory(child);
        var ref = function ref(r) {
          _this3.childRefs[key] = r;
        };

         true ? (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute') : undefined;

        // Always chaining the refs leads to problems when the childFactory
        // wraps the child. The child ref callback gets called twice with the
        // wrapper and the child. So we only need to chain the ref if the
        // factoryChild is not different from child.
        if (factoryChild === child && isCallbackRef) {
          ref = (0, _chainFunction2.default)(child.ref, ref);
        }

        // You may need to apply reactive updates to a child as it is leaving.
        // The normal React way to do it won't work since the child will have
        // already been removed. In case you need this behavior you can provide
        // a childFactory function to wrap every child, even the ones that are
        // leaving.
        childrenToRender.push(_react2.default.cloneElement(factoryChild, {
          key: key,
          ref: ref
        }));
      }
    };

    for (var key in this.state.children) {
      _loop(key);
    }

    // Do not forward TransitionGroup props to primitive DOM nodes
    var props = _extends({}, this.props);
    delete props.transitionLeave;
    delete props.transitionName;
    delete props.transitionAppear;
    delete props.transitionEnter;
    delete props.childFactory;
    delete props.transitionLeaveTimeout;
    delete props.transitionEnterTimeout;
    delete props.transitionAppearTimeout;
    delete props.component;

    return _react2.default.createElement(this.props.component, props, childrenToRender);
  };

  return TransitionGroup;
}(_react2.default.Component);

TransitionGroup.displayName = 'TransitionGroup';


TransitionGroup.propTypes =  true ? propTypes : undefined;
TransitionGroup.defaultProps = defaultProps;

exports.default = TransitionGroup;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-addons-css-transition-group/node_modules/react-transition-group/utils/ChildMapping.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/react-addons-css-transition-group/node_modules/react-transition-group/utils/ChildMapping.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children) {
  if (!children) {
    return children;
  }
  var result = {};
  _react.Children.map(children, function (child) {
    return child;
  }).forEach(function (child) {
    result[child.key] = child;
  });
  return result;
}

/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    if (next.hasOwnProperty(key)) {
      return next[key];
    }

    return prev[key];
  }

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextKeysPending = {};

  var pendingKeys = [];
  for (var prevKey in prev) {
    if (next.hasOwnProperty(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i = void 0;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending.hasOwnProperty(nextKey)) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }

  // Finally, add the keys which didn't appear before any key in `next`
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

/***/ }),

/***/ "./node_modules/react-addons-css-transition-group/node_modules/react-transition-group/utils/PropTypes.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/react-addons-css-transition-group/node_modules/react-transition-group/utils/PropTypes.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.nameShape = undefined;
exports.transitionTimeout = transitionTimeout;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;

  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

        // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var nameShape = exports.nameShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  active: _propTypes2.default.string
}), _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  enterActive: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  leaveActive: _propTypes2.default.string,
  appear: _propTypes2.default.string,
  appearActive: _propTypes2.default.string
})]);

/***/ }),

/***/ "./node_modules/react-addons-css-transition-group/node_modules/warning/browser.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/react-addons-css-transition-group/node_modules/warning/browser.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/react-fancybox/lib/ReactFancyBox.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-fancybox/lib/ReactFancyBox.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactAddonsCssTransitionGroup = __webpack_require__(/*! react-addons-css-transition-group */ "./node_modules/react-addons-css-transition-group/index.js");

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _close = __webpack_require__(/*! ./close.svg */ "./node_modules/react-fancybox/lib/close.svg");

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TRANSITION_TIME = 0;

var ReactFancyBox = function (_Component) {
  _inherits(ReactFancyBox, _Component);

  function ReactFancyBox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReactFancyBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactFancyBox.__proto__ || Object.getPrototypeOf(ReactFancyBox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      show: false
    }, _this.show = function () {
      _this.setState({
        show: true
      });
      _this.props.onOpen();
    }, _this.handleClickBox = function (event) {
      if (_this.box.contains(event.target)) {
        return;
      }
      _this.close();
    }, _this.close = function () {
      _this.setState({
        show: false
      });
      _this.props.onClose();
    }, _this.renderThumbnail = function () {
      var _this$props = _this.props,
          thumbnail = _this$props.thumbnail,
          image = _this$props.image,
          defaultThumbnailWidth = _this$props.defaultThumbnailWidth,
          defaultThumbnailHeight = _this$props.defaultThumbnailHeight;


      if (!thumbnail) {
        return _react2.default.createElement(
          'div',
          { onClick: _this.show, className: 'thumbnail' },
          _react2.default.createElement('img', {
            style: { width: defaultThumbnailWidth, height: defaultThumbnailHeight, objectFit: 'cover' },
            src: image, alt: 'thumbnail' })
        );
      }

      return _react2.default.createElement(
        'div',
        { onClick: _this.show, className: 'thumbnail' },
        _react2.default.createElement('img', { src: thumbnail, alt: 'thumbnail' })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReactFancyBox, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          image = _props.image,
          caption = _props.caption,
          animation = _props.animation,
          showCloseBtn = _props.showCloseBtn;


      var imageStyle = {
        maxHeight: window.innerHeight * 0.7
      };

      return _react2.default.createElement(
        'div',
        { className: 'react-fancybox' },
        this.renderThumbnail(),
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          {
            style: { animationDuration: 1000 },
            transitionName: animation,
            transitionEnterTimeout: TRANSITION_TIME,
            transitionLeaveTimeout: TRANSITION_TIME },
          this.state.show ? _react2.default.createElement(
            'div',
            { onClick: this.handleClickBox, className: 'box' },
            _react2.default.createElement(
              'div',
              { ref: function ref(box) {
                  return _this2.box = box;
                }, className: 'image-box' },
              showCloseBtn && _react2.default.createElement('img', { onClick: this.close, className: 'close-btn', src: _close2.default, alt: 'close' }),
              _react2.default.createElement('img', { style: imageStyle, src: image, alt: 'original' }),
              caption && _react2.default.createElement(
                'div',
                { className: 'caption' },
                caption
              )
            )
          ) : null
        )
      );
    }
  }]);

  return ReactFancyBox;
}(_react.Component);

ReactFancyBox.defaultProps = {
  thumbnail: '',
  image: '',
  defaultThumbnailWidth: 300,
  defaultThumbnailHeight: 250,
  caption: '',
  animation: 'fade',
  onOpen: function onOpen() {},
  onClose: function onClose() {},
  showCloseBtn: true
};

ReactFancyBox.propTypes = {
  thumbnail: _propTypes2.default.string,
  image: _propTypes2.default.string,
  defaultThumbnailWidth: _propTypes2.default.number,
  defaultThumbnailHeight: _propTypes2.default.number,
  caption: _propTypes2.default.string,
  animation: _propTypes2.default.string,
  animationTime: _propTypes2.default.number,
  onOpen: _propTypes2.default.func,
  onClose: _propTypes2.default.func,
  showCloseBtn: _propTypes2.default.bool
};

exports.default = ReactFancyBox;

/***/ }),

/***/ "./node_modules/react-fancybox/lib/close.svg":
/*!***************************************************!*\
  !*** ./node_modules/react-fancybox/lib/close.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDU1Ljk5MiA0NTUuOTkyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTUuOTkyIDQ1NS45OTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxnPg0KCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNMjI3Ljk5NiwwQzEwMi4wODEsMCwwLDEwMi4wODEsMCwyMjcuOTk2YzAsMTI1Ljk0NSwxMDIuMDgxLDIyNy45OTYsMjI3Ljk5NiwyMjcuOTk2DQoJCQkJCWMxMjUuOTQ1LDAsMjI3Ljk5Ni0xMDIuMDUxLDIyNy45OTYtMjI3Ljk5NkM0NTUuOTkyLDEwMi4wODEsMzUzLjk0MSwwLDIyNy45OTYsMHogTTIyNy45OTYsNDI1LjU5Mw0KCQkJCQljLTEwOC45NTIsMC0xOTcuNTk3LTg4LjY0NS0xOTcuNTk3LTE5Ny41OTdTMTE5LjA0NCwzMC4zOTksMjI3Ljk5NiwzMC4zOTlzMTk3LjU5Nyw4OC42NDUsMTk3LjU5NywxOTcuNTk3DQoJCQkJCVMzMzYuOTQ4LDQyNS41OTMsMjI3Ljk5Niw0MjUuNTkzeiIvPg0KCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNMzEyLjE0MiwxMjIuMzU4bC04My41MzgsODMuNTY4bC03NC45NjUtODMuNTY4Yy01LjkyOC01LjkyOC0xNS41NjUtNS45MjgtMjEuNDkyLDANCgkJCQkJYy01LjkyOCw1LjkyOC01LjkyOCwxNS41NjUsMCwyMS40OTJsNzQuOTY1LDgzLjU2OGwtODQuNzIzLDg0LjcyM2MtNS45MjgsNS45MjgtNS45MjgsMTUuNTk1LDAsMjEuNDkyDQoJCQkJCWM1LjkyOCw1LjkyOCwxNS41NjUsNS45MjgsMjEuNDkyLDBsODMuNTY4LTgzLjUzOGw3NC45NjUsODMuNTM4YzUuODk3LDUuOTI4LDE1LjU2NSw1LjkyOCwyMS40NjIsMA0KCQkJCQljNS45MjgtNS44OTgsNS45MjgtMTUuNTY1LDAtMjEuNDkybC03NC45OTUtODMuNTM4bDg0LjcyMy04NC43NTRjNS45MjgtNS45MjgsNS45MjgtMTUuNTY1LDAtMjEuNDkyDQoJCQkJCUMzMjcuNjc2LDExNi40MywzMTguMDcsMTE2LjQzLDMxMi4xNDIsMTIyLjM1OHoiLz4NCgkJCTwvZz4NCgkJPC9nPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./pages/product.js":
/*!**************************!*\
  !*** ./pages/product.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_fancybox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-fancybox */ "./node_modules/react-fancybox/lib/ReactFancyBox.js");
/* harmony import */ var react_fancybox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_fancybox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_fancybox_lib_fancybox_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-fancybox/lib/fancybox.css */ "./node_modules/react-fancybox/lib/fancybox.css");
/* harmony import */ var react_fancybox_lib_fancybox_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_fancybox_lib_fancybox_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_buttonWhatsapp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/buttonWhatsapp */ "./components/buttonWhatsapp.js");
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/head */ "./components/head.js");

var _jsxFileName = "C:\\Users\\conta\\Desktop\\EcoraizNext\\frontEnd\\pages\\product.js";









function Product() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_head__WEBPACK_IMPORTED_MODULE_8__["default"], {
      title: 'Ecoraiz | Produto'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_header__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 52
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_header__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
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
                lineNumber: 24,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                className: "title-big  color-black",
                children: "O que \xE9?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "paragraph p-big color-grey",
                children: "Macaxeira Descascada, Embalada \xE0 V\xE1cuo e Congelada"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 23,
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
                lineNumber: 31,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
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
                  lineNumber: 42,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      className: "title title-little",
                      children: "Qualidade"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 45,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 44,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "paragraph p-medium",
                      children: "Produtos cuidadosamente selecionados e beneficiados de acordo com um Controle de Qualidade, visando atender as expectativas do mercado consumidor."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 50,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Img, {
                  variant: "top",
                  src: __webpack_require__(/*! ../images/product/differentials/2.png */ "./images/product/differentials/2.png")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      className: "title title-little",
                      children: "Padroniza\xE7\xE3o"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 63,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "paragraph p-medium",
                      children: "Trabalho cont\xEDnuo com o objetivo de sele\xE7\xE3o das sementes, tratos culturais e irriga\xE7\xE3o, buscando uma padroniza\xE7\xE3o do Campo \xE0 Agroind\xFAstria.."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 68,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Img, {
                  variant: "top",
                  src: __webpack_require__(/*! ../images/product/differentials/3.png */ "./images/product/differentials/3.png")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      className: "title title-little",
                      children: "Praticidade"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 81,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "paragraph p-medium",
                      children: "Produtos beneficiados e prontos para o preparo no seu lar."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
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
              lineNumber: 100,
              columnNumber: 115
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "gallery-grid mt-5",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: __webpack_require__(/*! ../images/product/gallery/1.png */ "./images/product/gallery/1.png"),
              alt: "",
              title: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: __webpack_require__(/*! ../images/product/gallery/2.png */ "./images/product/gallery/2.png"),
              alt: "",
              title: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: __webpack_require__(/*! ../images/product/gallery/3.png */ "./images/product/gallery/3.png"),
              alt: "",
              title: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: __webpack_require__(/*! ../images/product/gallery/4.png */ "./images/product/gallery/4.png"),
              alt: "",
              title: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: __webpack_require__(/*! ../images/product/gallery/5.png */ "./images/product/gallery/5.png"),
              alt: "",
              title: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: __webpack_require__(/*! ../images/product/gallery/6.png */ "./images/product/gallery/6.png"),
              alt: "",
              title: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: __webpack_require__(/*! ../images/product/gallery/7.png */ "./images/product/gallery/7.png"),
              alt: "",
              title: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: __webpack_require__(/*! ../images/product/gallery/8.png */ "./images/product/gallery/8.png"),
              alt: "",
              title: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: __webpack_require__(/*! ../images/product/gallery/9.png */ "./images/product/gallery/9.png"),
              alt: "",
              title: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: __webpack_require__(/*! ../images/product/gallery/10.png */ "./images/product/gallery/10.png"),
              alt: "",
              title: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

_c = Product;
/* harmony default export */ __webpack_exports__["default"] = (Product);

var _c;

$RefreshReg$(_c, "Product");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2NoYWluLWZ1bmN0aW9uL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9jbGFzcy9hZGRDbGFzcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cC9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvY2xhc3MvaGFzQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2NsYXNzL3JlbW92ZUNsYXNzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwL25vZGVfbW9kdWxlcy9kb20taGVscGVycy90cmFuc2l0aW9uL3Byb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL3V0aWwvaW5ET00uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAvbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL3V0aWwvcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL0NTU1RyYW5zaXRpb25Hcm91cC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cC9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uR3JvdXBDaGlsZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cC9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uR3JvdXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvdXRpbHMvQ2hpbGRNYXBwaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3V0aWxzL1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cC9ub2RlX21vZHVsZXMvd2FybmluZy9icm93c2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZmFuY3lib3gvbGliL1JlYWN0RmFuY3lCb3guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1mYW5jeWJveC9saWIvY2xvc2Uuc3ZnIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3QiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixTQUFTO0FBQzFC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RCxpQkFBRyxFQUFDLEVBQTNEO0FBQThELG1CQUFLLEVBQUM7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTBHSDs7S0EzR1FELE87QUE2R01BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QuN2MzZjQ1ZDU5ODgyODliNTg1YjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjaGFpbigpe1xuICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICB2YXIgYXJncyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXVxuXG4gIGFyZ3MgPSBhcmdzLmZpbHRlcihmdW5jdGlvbihmbil7IHJldHVybiBmbiAhPSBudWxsIH0pXG5cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSByZXR1cm4gdW5kZWZpbmVkXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkgcmV0dXJuIGFyZ3NbMF1cblxuICByZXR1cm4gYXJncy5yZWR1Y2UoZnVuY3Rpb24oY3VycmVudCwgbmV4dCl7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNoYWluZWRGdW5jdGlvbigpIHtcbiAgICAgIGN1cnJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIG5leHQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9KVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uR3JvdXAnKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFkZENsYXNzO1xuXG52YXIgX2hhc0NsYXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oYXNDbGFzc1wiKSk7XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO2Vsc2UgaWYgKCEoMCwgX2hhc0NsYXNzLmRlZmF1bHQpKGVsZW1lbnQsIGNsYXNzTmFtZSkpIGlmICh0eXBlb2YgZWxlbWVudC5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnICsgY2xhc3NOYW1lO2Vsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGVsZW1lbnQuY2xhc3NOYW1lICYmIGVsZW1lbnQuY2xhc3NOYW1lLmJhc2VWYWwgfHwgJycpICsgJyAnICsgY2xhc3NOYW1lKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGhhc0NsYXNzO1xuXG5mdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSByZXR1cm4gISFjbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtlbHNlIHJldHVybiAoXCIgXCIgKyAoZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCBlbGVtZW50LmNsYXNzTmFtZSkgKyBcIiBcIikuaW5kZXhPZihcIiBcIiArIGNsYXNzTmFtZSArIFwiIFwiKSAhPT0gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiByZXBsYWNlQ2xhc3NOYW1lKG9yaWdDbGFzcywgY2xhc3NUb1JlbW92ZSkge1xuICByZXR1cm4gb3JpZ0NsYXNzLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGNsYXNzVG9SZW1vdmUgKyAnKD86XFxcXHN8JCknLCAnZycpLCAnJDEnKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvXlxccyp8XFxzKiQvZywgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO2Vsc2UgaWYgKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIGVsZW1lbnQuY2xhc3NOYW1lID0gcmVwbGFjZUNsYXNzTmFtZShlbGVtZW50LmNsYXNzTmFtZSwgY2xhc3NOYW1lKTtlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIHJlcGxhY2VDbGFzc05hbWUoZWxlbWVudC5jbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCAnJywgY2xhc3NOYW1lKSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuYW5pbWF0aW9uRW5kID0gZXhwb3J0cy5hbmltYXRpb25EZWxheSA9IGV4cG9ydHMuYW5pbWF0aW9uVGltaW5nID0gZXhwb3J0cy5hbmltYXRpb25EdXJhdGlvbiA9IGV4cG9ydHMuYW5pbWF0aW9uTmFtZSA9IGV4cG9ydHMudHJhbnNpdGlvbkVuZCA9IGV4cG9ydHMudHJhbnNpdGlvbkR1cmF0aW9uID0gZXhwb3J0cy50cmFuc2l0aW9uRGVsYXkgPSBleHBvcnRzLnRyYW5zaXRpb25UaW1pbmcgPSBleHBvcnRzLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IGV4cG9ydHMudHJhbnNmb3JtID0gdm9pZCAwO1xuXG52YXIgX2luRE9NID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdXRpbC9pbkRPTVwiKSk7XG5cbnZhciB0cmFuc2Zvcm0gPSAndHJhbnNmb3JtJztcbmV4cG9ydHMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xudmFyIHByZWZpeCwgdHJhbnNpdGlvbkVuZCwgYW5pbWF0aW9uRW5kO1xuZXhwb3J0cy5hbmltYXRpb25FbmQgPSBhbmltYXRpb25FbmQ7XG5leHBvcnRzLnRyYW5zaXRpb25FbmQgPSB0cmFuc2l0aW9uRW5kO1xudmFyIHRyYW5zaXRpb25Qcm9wZXJ0eSwgdHJhbnNpdGlvbkR1cmF0aW9uLCB0cmFuc2l0aW9uVGltaW5nLCB0cmFuc2l0aW9uRGVsYXk7XG5leHBvcnRzLnRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb25EZWxheTtcbmV4cG9ydHMudHJhbnNpdGlvblRpbWluZyA9IHRyYW5zaXRpb25UaW1pbmc7XG5leHBvcnRzLnRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbjtcbmV4cG9ydHMudHJhbnNpdGlvblByb3BlcnR5ID0gdHJhbnNpdGlvblByb3BlcnR5O1xudmFyIGFuaW1hdGlvbk5hbWUsIGFuaW1hdGlvbkR1cmF0aW9uLCBhbmltYXRpb25UaW1pbmcsIGFuaW1hdGlvbkRlbGF5O1xuZXhwb3J0cy5hbmltYXRpb25EZWxheSA9IGFuaW1hdGlvbkRlbGF5O1xuZXhwb3J0cy5hbmltYXRpb25UaW1pbmcgPSBhbmltYXRpb25UaW1pbmc7XG5leHBvcnRzLmFuaW1hdGlvbkR1cmF0aW9uID0gYW5pbWF0aW9uRHVyYXRpb247XG5leHBvcnRzLmFuaW1hdGlvbk5hbWUgPSBhbmltYXRpb25OYW1lO1xuXG5pZiAoX2luRE9NLmRlZmF1bHQpIHtcbiAgdmFyIF9nZXRUcmFuc2l0aW9uUHJvcGVydCA9IGdldFRyYW5zaXRpb25Qcm9wZXJ0aWVzKCk7XG5cbiAgcHJlZml4ID0gX2dldFRyYW5zaXRpb25Qcm9wZXJ0LnByZWZpeDtcbiAgZXhwb3J0cy50cmFuc2l0aW9uRW5kID0gdHJhbnNpdGlvbkVuZCA9IF9nZXRUcmFuc2l0aW9uUHJvcGVydC50cmFuc2l0aW9uRW5kO1xuICBleHBvcnRzLmFuaW1hdGlvbkVuZCA9IGFuaW1hdGlvbkVuZCA9IF9nZXRUcmFuc2l0aW9uUHJvcGVydC5hbmltYXRpb25FbmQ7XG4gIGV4cG9ydHMudHJhbnNmb3JtID0gdHJhbnNmb3JtID0gcHJlZml4ICsgXCItXCIgKyB0cmFuc2Zvcm07XG4gIGV4cG9ydHMudHJhbnNpdGlvblByb3BlcnR5ID0gdHJhbnNpdGlvblByb3BlcnR5ID0gcHJlZml4ICsgXCItdHJhbnNpdGlvbi1wcm9wZXJ0eVwiO1xuICBleHBvcnRzLnRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbiA9IHByZWZpeCArIFwiLXRyYW5zaXRpb24tZHVyYXRpb25cIjtcbiAgZXhwb3J0cy50cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXkgPSBwcmVmaXggKyBcIi10cmFuc2l0aW9uLWRlbGF5XCI7XG4gIGV4cG9ydHMudHJhbnNpdGlvblRpbWluZyA9IHRyYW5zaXRpb25UaW1pbmcgPSBwcmVmaXggKyBcIi10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblwiO1xuICBleHBvcnRzLmFuaW1hdGlvbk5hbWUgPSBhbmltYXRpb25OYW1lID0gcHJlZml4ICsgXCItYW5pbWF0aW9uLW5hbWVcIjtcbiAgZXhwb3J0cy5hbmltYXRpb25EdXJhdGlvbiA9IGFuaW1hdGlvbkR1cmF0aW9uID0gcHJlZml4ICsgXCItYW5pbWF0aW9uLWR1cmF0aW9uXCI7XG4gIGV4cG9ydHMuYW5pbWF0aW9uVGltaW5nID0gYW5pbWF0aW9uVGltaW5nID0gcHJlZml4ICsgXCItYW5pbWF0aW9uLWRlbGF5XCI7XG4gIGV4cG9ydHMuYW5pbWF0aW9uRGVsYXkgPSBhbmltYXRpb25EZWxheSA9IHByZWZpeCArIFwiLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb25cIjtcbn1cblxudmFyIF9kZWZhdWx0ID0ge1xuICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgZW5kOiB0cmFuc2l0aW9uRW5kLFxuICBwcm9wZXJ0eTogdHJhbnNpdGlvblByb3BlcnR5LFxuICB0aW1pbmc6IHRyYW5zaXRpb25UaW1pbmcsXG4gIGRlbGF5OiB0cmFuc2l0aW9uRGVsYXksXG4gIGR1cmF0aW9uOiB0cmFuc2l0aW9uRHVyYXRpb25cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuZnVuY3Rpb24gZ2V0VHJhbnNpdGlvblByb3BlcnRpZXMoKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLnN0eWxlO1xuICB2YXIgdmVuZG9yTWFwID0ge1xuICAgIE86IGZ1bmN0aW9uIE8oZSkge1xuICAgICAgcmV0dXJuIFwib1wiICsgZS50b0xvd2VyQ2FzZSgpO1xuICAgIH0sXG4gICAgTW96OiBmdW5jdGlvbiBNb3ooZSkge1xuICAgICAgcmV0dXJuIGUudG9Mb3dlckNhc2UoKTtcbiAgICB9LFxuICAgIFdlYmtpdDogZnVuY3Rpb24gV2Via2l0KGUpIHtcbiAgICAgIHJldHVybiBcIndlYmtpdFwiICsgZTtcbiAgICB9LFxuICAgIG1zOiBmdW5jdGlvbiBtcyhlKSB7XG4gICAgICByZXR1cm4gXCJNU1wiICsgZTtcbiAgICB9XG4gIH07XG4gIHZhciB2ZW5kb3JzID0gT2JqZWN0LmtleXModmVuZG9yTWFwKTtcbiAgdmFyIHRyYW5zaXRpb25FbmQsIGFuaW1hdGlvbkVuZDtcbiAgdmFyIHByZWZpeCA9ICcnO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmVuZG9ycy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB2ZW5kb3IgPSB2ZW5kb3JzW2ldO1xuXG4gICAgaWYgKHZlbmRvciArIFwiVHJhbnNpdGlvblByb3BlcnR5XCIgaW4gc3R5bGUpIHtcbiAgICAgIHByZWZpeCA9IFwiLVwiICsgdmVuZG9yLnRvTG93ZXJDYXNlKCk7XG4gICAgICB0cmFuc2l0aW9uRW5kID0gdmVuZG9yTWFwW3ZlbmRvcl0oJ1RyYW5zaXRpb25FbmQnKTtcbiAgICAgIGFuaW1hdGlvbkVuZCA9IHZlbmRvck1hcFt2ZW5kb3JdKCdBbmltYXRpb25FbmQnKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmICghdHJhbnNpdGlvbkVuZCAmJiAndHJhbnNpdGlvblByb3BlcnR5JyBpbiBzdHlsZSkgdHJhbnNpdGlvbkVuZCA9ICd0cmFuc2l0aW9uZW5kJztcbiAgaWYgKCFhbmltYXRpb25FbmQgJiYgJ2FuaW1hdGlvbk5hbWUnIGluIHN0eWxlKSBhbmltYXRpb25FbmQgPSAnYW5pbWF0aW9uZW5kJztcbiAgc3R5bGUgPSBudWxsO1xuICByZXR1cm4ge1xuICAgIGFuaW1hdGlvbkVuZDogYW5pbWF0aW9uRW5kLFxuICAgIHRyYW5zaXRpb25FbmQ6IHRyYW5zaXRpb25FbmQsXG4gICAgcHJlZml4OiBwcmVmaXhcbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9kZWZhdWx0ID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9pbkRPTSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaW5ET01cIikpO1xuXG52YXIgdmVuZG9ycyA9IFsnJywgJ3dlYmtpdCcsICdtb3onLCAnbycsICdtcyddO1xudmFyIGNhbmNlbCA9ICdjbGVhclRpbWVvdXQnO1xudmFyIHJhZiA9IGZhbGxiYWNrO1xudmFyIGNvbXBhdFJhZjtcblxudmFyIGdldEtleSA9IGZ1bmN0aW9uIGdldEtleSh2ZW5kb3IsIGspIHtcbiAgcmV0dXJuIHZlbmRvciArICghdmVuZG9yID8gayA6IGtbMF0udG9VcHBlckNhc2UoKSArIGsuc3Vic3RyKDEpKSArICdBbmltYXRpb25GcmFtZSc7XG59O1xuXG5pZiAoX2luRE9NLmRlZmF1bHQpIHtcbiAgdmVuZG9ycy5zb21lKGZ1bmN0aW9uICh2ZW5kb3IpIHtcbiAgICB2YXIgcmFmS2V5ID0gZ2V0S2V5KHZlbmRvciwgJ3JlcXVlc3QnKTtcblxuICAgIGlmIChyYWZLZXkgaW4gd2luZG93KSB7XG4gICAgICBjYW5jZWwgPSBnZXRLZXkodmVuZG9yLCAnY2FuY2VsJyk7XG4gICAgICByZXR1cm4gcmFmID0gZnVuY3Rpb24gcmFmKGNiKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3dbcmFmS2V5XShjYik7XG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG59XG4vKiBodHRwczovL2dpdGh1Yi5jb20vY29tcG9uZW50L3JhZiAqL1xuXG5cbnZhciBwcmV2ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbmZ1bmN0aW9uIGZhbGxiYWNrKGZuKSB7XG4gIHZhciBjdXJyID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICBtcyA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnIgLSBwcmV2KSksXG4gICAgICByZXEgPSBzZXRUaW1lb3V0KGZuLCBtcyk7XG4gIHByZXYgPSBjdXJyO1xuICByZXR1cm4gcmVxO1xufVxuXG5jb21wYXRSYWYgPSBmdW5jdGlvbiBjb21wYXRSYWYoY2IpIHtcbiAgcmV0dXJuIHJhZihjYik7XG59O1xuXG5jb21wYXRSYWYuY2FuY2VsID0gZnVuY3Rpb24gKGlkKSB7XG4gIHdpbmRvd1tjYW5jZWxdICYmIHR5cGVvZiB3aW5kb3dbY2FuY2VsXSA9PT0gJ2Z1bmN0aW9uJyAmJiB3aW5kb3dbY2FuY2VsXShpZCk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBjb21wYXRSYWY7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX1RyYW5zaXRpb25Hcm91cCA9IHJlcXVpcmUoJy4vVHJhbnNpdGlvbkdyb3VwJyk7XG5cbnZhciBfVHJhbnNpdGlvbkdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RyYW5zaXRpb25Hcm91cCk7XG5cbnZhciBfQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQgPSByZXF1aXJlKCcuL0NTU1RyYW5zaXRpb25Hcm91cENoaWxkJyk7XG5cbnZhciBfQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQpO1xuXG52YXIgX1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbHMvUHJvcFR5cGVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgdHJhbnNpdGlvbk5hbWU6IF9Qcm9wVHlwZXMubmFtZVNoYXBlLmlzUmVxdWlyZWQsXG5cbiAgdHJhbnNpdGlvbkFwcGVhcjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICB0cmFuc2l0aW9uRW50ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgdHJhbnNpdGlvbkxlYXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHRyYW5zaXRpb25BcHBlYXJUaW1lb3V0OiAoMCwgX1Byb3BUeXBlcy50cmFuc2l0aW9uVGltZW91dCkoJ0FwcGVhcicpLFxuICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0OiAoMCwgX1Byb3BUeXBlcy50cmFuc2l0aW9uVGltZW91dCkoJ0VudGVyJyksXG4gIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ6ICgwLCBfUHJvcFR5cGVzLnRyYW5zaXRpb25UaW1lb3V0KSgnTGVhdmUnKVxufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgdHJhbnNpdGlvbkFwcGVhcjogZmFsc2UsXG4gIHRyYW5zaXRpb25FbnRlcjogdHJ1ZSxcbiAgdHJhbnNpdGlvbkxlYXZlOiB0cnVlXG59O1xuXG52YXIgQ1NTVHJhbnNpdGlvbkdyb3VwID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENTU1RyYW5zaXRpb25Hcm91cCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ1NTVHJhbnNpdGlvbkdyb3VwKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ1NTVHJhbnNpdGlvbkdyb3VwKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5fd3JhcENoaWxkID0gZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0NTU1RyYW5zaXRpb25Hcm91cENoaWxkMi5kZWZhdWx0LCB7XG4gICAgICAgIG5hbWU6IF90aGlzLnByb3BzLnRyYW5zaXRpb25OYW1lLFxuICAgICAgICBhcHBlYXI6IF90aGlzLnByb3BzLnRyYW5zaXRpb25BcHBlYXIsXG4gICAgICAgIGVudGVyOiBfdGhpcy5wcm9wcy50cmFuc2l0aW9uRW50ZXIsXG4gICAgICAgIGxlYXZlOiBfdGhpcy5wcm9wcy50cmFuc2l0aW9uTGVhdmUsXG4gICAgICAgIGFwcGVhclRpbWVvdXQ6IF90aGlzLnByb3BzLnRyYW5zaXRpb25BcHBlYXJUaW1lb3V0LFxuICAgICAgICBlbnRlclRpbWVvdXQ6IF90aGlzLnByb3BzLnRyYW5zaXRpb25FbnRlclRpbWVvdXQsXG4gICAgICAgIGxlYXZlVGltZW91dDogX3RoaXMucHJvcHMudHJhbnNpdGlvbkxlYXZlVGltZW91dFxuICAgICAgfSwgY2hpbGQpO1xuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgLy8gV2UgbmVlZCB0byBwcm92aWRlIHRoaXMgY2hpbGRGYWN0b3J5IHNvIHRoYXRcbiAgLy8gUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZCBjYW4gcmVjZWl2ZSB1cGRhdGVzIHRvIG5hbWUsIGVudGVyLCBhbmRcbiAgLy8gbGVhdmUgd2hpbGUgaXQgaXMgbGVhdmluZy5cblxuXG4gIENTU1RyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfVHJhbnNpdGlvbkdyb3VwMi5kZWZhdWx0LCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjaGlsZEZhY3Rvcnk6IHRoaXMuX3dyYXBDaGlsZCB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIENTU1RyYW5zaXRpb25Hcm91cDtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbkNTU1RyYW5zaXRpb25Hcm91cC5kaXNwbGF5TmFtZSA9ICdDU1NUcmFuc2l0aW9uR3JvdXAnO1xuXG5cbkNTU1RyYW5zaXRpb25Hcm91cC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBwcm9wVHlwZXMgOiB7fTtcbkNTU1RyYW5zaXRpb25Hcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENTU1RyYW5zaXRpb25Hcm91cDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9hZGRDbGFzcyA9IHJlcXVpcmUoJ2RvbS1oZWxwZXJzL2NsYXNzL2FkZENsYXNzJyk7XG5cbnZhciBfYWRkQ2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkQ2xhc3MpO1xuXG52YXIgX3JlbW92ZUNsYXNzID0gcmVxdWlyZSgnZG9tLWhlbHBlcnMvY2xhc3MvcmVtb3ZlQ2xhc3MnKTtcblxudmFyIF9yZW1vdmVDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZW1vdmVDbGFzcyk7XG5cbnZhciBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWlyZSgnZG9tLWhlbHBlcnMvdXRpbC9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUnKTtcblxudmFyIF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVxdWVzdEFuaW1hdGlvbkZyYW1lKTtcblxudmFyIF9wcm9wZXJ0aWVzID0gcmVxdWlyZSgnZG9tLWhlbHBlcnMvdHJhbnNpdGlvbi9wcm9wZXJ0aWVzJyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWxzL1Byb3BUeXBlcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBldmVudHMgPSBbXTtcbmlmIChfcHJvcGVydGllcy50cmFuc2l0aW9uRW5kKSBldmVudHMucHVzaChfcHJvcGVydGllcy50cmFuc2l0aW9uRW5kKTtcbmlmIChfcHJvcGVydGllcy5hbmltYXRpb25FbmQpIGV2ZW50cy5wdXNoKF9wcm9wZXJ0aWVzLmFuaW1hdGlvbkVuZCk7XG5cbmZ1bmN0aW9uIGFkZEVuZExpc3RlbmVyKG5vZGUsIGxpc3RlbmVyKSB7XG4gIGlmIChldmVudHMubGVuZ3RoKSB7XG4gICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZSwgbGlzdGVuZXIsIGZhbHNlKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBzZXRUaW1lb3V0KGxpc3RlbmVyLCAwKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFldmVudHMubGVuZ3RoKSByZXR1cm47XG4gICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSwgbGlzdGVuZXIsIGZhbHNlKTtcbiAgICB9KTtcbiAgfTtcbn1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgbmFtZTogX1Byb3BUeXBlcy5uYW1lU2hhcGUuaXNSZXF1aXJlZCxcblxuICAvLyBPbmNlIHdlIHJlcXVpcmUgdGltZW91dHMgdG8gYmUgc3BlY2lmaWVkLCB3ZSBjYW4gcmVtb3ZlIHRoZVxuICAvLyBib29sZWFuIGZsYWdzIChhcHBlYXIgZXRjLikgYW5kIGp1c3QgYWNjZXB0IGEgbnVtYmVyXG4gIC8vIG9yIGEgYm9vbCBmb3IgdGhlIHRpbWVvdXQgZmxhZ3MgKGFwcGVhclRpbWVvdXQgZXRjLilcbiAgYXBwZWFyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGVudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGxlYXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGFwcGVhclRpbWVvdXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBlbnRlclRpbWVvdXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBsZWF2ZVRpbWVvdXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXG59O1xuXG52YXIgQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENTU1RyYW5zaXRpb25Hcm91cENoaWxkKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmNvbXBvbmVudFdpbGxBcHBlYXIgPSBmdW5jdGlvbiAoZG9uZSkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLmFwcGVhcikge1xuICAgICAgICBfdGhpcy50cmFuc2l0aW9uKCdhcHBlYXInLCBkb25lLCBfdGhpcy5wcm9wcy5hcHBlYXJUaW1lb3V0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5jb21wb25lbnRXaWxsRW50ZXIgPSBmdW5jdGlvbiAoZG9uZSkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLmVudGVyKSB7XG4gICAgICAgIF90aGlzLnRyYW5zaXRpb24oJ2VudGVyJywgZG9uZSwgX3RoaXMucHJvcHMuZW50ZXJUaW1lb3V0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5jb21wb25lbnRXaWxsTGVhdmUgPSBmdW5jdGlvbiAoZG9uZSkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLmxlYXZlKSB7XG4gICAgICAgIF90aGlzLnRyYW5zaXRpb24oJ2xlYXZlJywgZG9uZSwgX3RoaXMucHJvcHMubGVhdmVUaW1lb3V0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH1cbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIENTU1RyYW5zaXRpb25Hcm91cENoaWxkLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5jbGFzc05hbWVBbmROb2RlUXVldWUgPSBbXTtcbiAgICB0aGlzLnRyYW5zaXRpb25UaW1lb3V0cyA9IFtdO1xuICB9O1xuXG4gIENTU1RyYW5zaXRpb25Hcm91cENoaWxkLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5tb3VudGVkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIH1cbiAgICB0aGlzLnRyYW5zaXRpb25UaW1lb3V0cy5mb3JFYWNoKGZ1bmN0aW9uICh0aW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNsYXNzTmFtZUFuZE5vZGVRdWV1ZS5sZW5ndGggPSAwO1xuICB9O1xuXG4gIENTU1RyYW5zaXRpb25Hcm91cENoaWxkLnByb3RvdHlwZS50cmFuc2l0aW9uID0gZnVuY3Rpb24gdHJhbnNpdGlvbihhbmltYXRpb25UeXBlLCBmaW5pc2hDYWxsYmFjaywgdGltZW91dCkge1xuICAgIHZhciBub2RlID0gKDAsIF9yZWFjdERvbS5maW5kRE9NTm9kZSkodGhpcyk7XG5cbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIGlmIChmaW5pc2hDYWxsYmFjaykge1xuICAgICAgICBmaW5pc2hDYWxsYmFjaygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjbGFzc05hbWUgPSB0aGlzLnByb3BzLm5hbWVbYW5pbWF0aW9uVHlwZV0gfHwgdGhpcy5wcm9wcy5uYW1lICsgJy0nICsgYW5pbWF0aW9uVHlwZTtcbiAgICB2YXIgYWN0aXZlQ2xhc3NOYW1lID0gdGhpcy5wcm9wcy5uYW1lW2FuaW1hdGlvblR5cGUgKyAnQWN0aXZlJ10gfHwgY2xhc3NOYW1lICsgJy1hY3RpdmUnO1xuICAgIHZhciB0aW1lciA9IG51bGw7XG4gICAgdmFyIHJlbW92ZUxpc3RlbmVycyA9IHZvaWQgMDtcblxuICAgICgwLCBfYWRkQ2xhc3MyLmRlZmF1bHQpKG5vZGUsIGNsYXNzTmFtZSk7XG5cbiAgICAvLyBOZWVkIHRvIGRvIHRoaXMgdG8gYWN0dWFsbHkgdHJpZ2dlciBhIHRyYW5zaXRpb24uXG4gICAgdGhpcy5xdWV1ZUNsYXNzQW5kTm9kZShhY3RpdmVDbGFzc05hbWUsIG5vZGUpO1xuXG4gICAgLy8gQ2xlYW4tdXAgdGhlIGFuaW1hdGlvbiBhZnRlciB0aGUgc3BlY2lmaWVkIGRlbGF5XG4gICAgdmFyIGZpbmlzaCA9IGZ1bmN0aW9uIGZpbmlzaChlKSB7XG4gICAgICBpZiAoZSAmJiBlLnRhcmdldCAhPT0gbm9kZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICBpZiAocmVtb3ZlTGlzdGVuZXJzKSByZW1vdmVMaXN0ZW5lcnMoKTtcblxuICAgICAgKDAsIF9yZW1vdmVDbGFzczIuZGVmYXVsdCkobm9kZSwgY2xhc3NOYW1lKTtcbiAgICAgICgwLCBfcmVtb3ZlQ2xhc3MyLmRlZmF1bHQpKG5vZGUsIGFjdGl2ZUNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChyZW1vdmVMaXN0ZW5lcnMpIHJlbW92ZUxpc3RlbmVycygpO1xuXG4gICAgICAvLyBVc3VhbGx5IHRoaXMgb3B0aW9uYWwgY2FsbGJhY2sgaXMgdXNlZCBmb3IgaW5mb3JtaW5nIGFuIG93bmVyIG9mXG4gICAgICAvLyBhIGxlYXZlIGFuaW1hdGlvbiBhbmQgdGVsbGluZyBpdCB0byByZW1vdmUgdGhlIGNoaWxkLlxuICAgICAgaWYgKGZpbmlzaENhbGxiYWNrKSB7XG4gICAgICAgIGZpbmlzaENhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoZmluaXNoLCB0aW1lb3V0KTtcbiAgICAgIHRoaXMudHJhbnNpdGlvblRpbWVvdXRzLnB1c2godGltZXIpO1xuICAgIH0gZWxzZSBpZiAoX3Byb3BlcnRpZXMudHJhbnNpdGlvbkVuZCkge1xuICAgICAgcmVtb3ZlTGlzdGVuZXJzID0gYWRkRW5kTGlzdGVuZXIobm9kZSwgZmluaXNoKTtcbiAgICB9XG4gIH07XG5cbiAgQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQucHJvdG90eXBlLnF1ZXVlQ2xhc3NBbmROb2RlID0gZnVuY3Rpb24gcXVldWVDbGFzc0FuZE5vZGUoY2xhc3NOYW1lLCBub2RlKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB0aGlzLmNsYXNzTmFtZUFuZE5vZGVRdWV1ZS5wdXNoKHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgbm9kZTogbm9kZVxuICAgIH0pO1xuXG4gICAgaWYgKCF0aGlzLnJhZkhhbmRsZSkge1xuICAgICAgdGhpcy5yYWZIYW5kbGUgPSAoMCwgX3JlcXVlc3RBbmltYXRpb25GcmFtZTIuZGVmYXVsdCkoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLmZsdXNoQ2xhc3NOYW1lQW5kTm9kZVF1ZXVlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQucHJvdG90eXBlLmZsdXNoQ2xhc3NOYW1lQW5kTm9kZVF1ZXVlID0gZnVuY3Rpb24gZmx1c2hDbGFzc05hbWVBbmROb2RlUXVldWUoKSB7XG4gICAgaWYgKCF0aGlzLnVubW91bnRlZCkge1xuICAgICAgdGhpcy5jbGFzc05hbWVBbmROb2RlUXVldWUuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgZm9yIHRvIGZvcmNlIGEgcmVwYWludCxcbiAgICAgICAgLy8gd2hpY2ggaXMgbmVjZXNzYXJ5IGluIG9yZGVyIHRvIHRyYW5zaXRpb24gc3R5bGVzIHdoZW4gYWRkaW5nIGEgY2xhc3MgbmFtZS5cbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4gICAgICAgIG9iai5ub2RlLnNjcm9sbFRvcDtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbiAgICAgICAgKDAsIF9hZGRDbGFzczIuZGVmYXVsdCkob2JqLm5vZGUsIG9iai5jbGFzc05hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuY2xhc3NOYW1lQW5kTm9kZVF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5yYWZIYW5kbGUgPSBudWxsO1xuICB9O1xuXG4gIENTU1RyYW5zaXRpb25Hcm91cENoaWxkLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMpO1xuICAgIGRlbGV0ZSBwcm9wcy5uYW1lO1xuICAgIGRlbGV0ZSBwcm9wcy5hcHBlYXI7XG4gICAgZGVsZXRlIHByb3BzLmVudGVyO1xuICAgIGRlbGV0ZSBwcm9wcy5sZWF2ZTtcbiAgICBkZWxldGUgcHJvcHMuYXBwZWFyVGltZW91dDtcbiAgICBkZWxldGUgcHJvcHMuZW50ZXJUaW1lb3V0O1xuICAgIGRlbGV0ZSBwcm9wcy5sZWF2ZVRpbWVvdXQ7XG4gICAgZGVsZXRlIHByb3BzLmNoaWxkcmVuO1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pLCBwcm9wcyk7XG4gIH07XG5cbiAgcmV0dXJuIENTU1RyYW5zaXRpb25Hcm91cENoaWxkO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQuZGlzcGxheU5hbWUgPSAnQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQnO1xuXG5cbkNTU1RyYW5zaXRpb25Hcm91cENoaWxkLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHByb3BUeXBlcyA6IHt9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jaGFpbkZ1bmN0aW9uID0gcmVxdWlyZSgnY2hhaW4tZnVuY3Rpb24nKTtcblxudmFyIF9jaGFpbkZ1bmN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoYWluRnVuY3Rpb24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9DaGlsZE1hcHBpbmcgPSByZXF1aXJlKCcuL3V0aWxzL0NoaWxkTWFwcGluZycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIGNvbXBvbmVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksXG4gIGNoaWxkRmFjdG9yeTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnQ6ICdzcGFuJyxcbiAgY2hpbGRGYWN0b3J5OiBmdW5jdGlvbiBjaGlsZEZhY3RvcnkoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH1cbn07XG5cbnZhciBUcmFuc2l0aW9uR3JvdXAgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVHJhbnNpdGlvbkdyb3VwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUcmFuc2l0aW9uR3JvdXAocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhbnNpdGlvbkdyb3VwKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgX3RoaXMucGVyZm9ybUFwcGVhciA9IGZ1bmN0aW9uIChrZXksIGNvbXBvbmVudCkge1xuICAgICAgX3RoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XSA9IHRydWU7XG5cbiAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbEFwcGVhcikge1xuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50V2lsbEFwcGVhcihfdGhpcy5faGFuZGxlRG9uZUFwcGVhcmluZy5iaW5kKF90aGlzLCBrZXksIGNvbXBvbmVudCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuX2hhbmRsZURvbmVBcHBlYXJpbmcoa2V5LCBjb21wb25lbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5faGFuZGxlRG9uZUFwcGVhcmluZyA9IGZ1bmN0aW9uIChrZXksIGNvbXBvbmVudCkge1xuICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnREaWRBcHBlYXIpIHtcbiAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudERpZEFwcGVhcigpO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgX3RoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XTtcblxuICAgICAgdmFyIGN1cnJlbnRDaGlsZE1hcHBpbmcgPSAoMCwgX0NoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcpKF90aGlzLnByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgaWYgKCFjdXJyZW50Q2hpbGRNYXBwaW5nIHx8ICFjdXJyZW50Q2hpbGRNYXBwaW5nLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgLy8gVGhpcyB3YXMgcmVtb3ZlZCBiZWZvcmUgaXQgaGFkIGZ1bGx5IGFwcGVhcmVkLiBSZW1vdmUgaXQuXG4gICAgICAgIF90aGlzLnBlcmZvcm1MZWF2ZShrZXksIGNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnBlcmZvcm1FbnRlciA9IGZ1bmN0aW9uIChrZXksIGNvbXBvbmVudCkge1xuICAgICAgX3RoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XSA9IHRydWU7XG5cbiAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbEVudGVyKSB7XG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnRXaWxsRW50ZXIoX3RoaXMuX2hhbmRsZURvbmVFbnRlcmluZy5iaW5kKF90aGlzLCBrZXksIGNvbXBvbmVudCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuX2hhbmRsZURvbmVFbnRlcmluZyhrZXksIGNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9oYW5kbGVEb25lRW50ZXJpbmcgPSBmdW5jdGlvbiAoa2V5LCBjb21wb25lbnQpIHtcbiAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkRW50ZXIpIHtcbiAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudERpZEVudGVyKCk7XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSBfdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldO1xuXG4gICAgICB2YXIgY3VycmVudENoaWxkTWFwcGluZyA9ICgwLCBfQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZykoX3RoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICBpZiAoIWN1cnJlbnRDaGlsZE1hcHBpbmcgfHwgIWN1cnJlbnRDaGlsZE1hcHBpbmcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAvLyBUaGlzIHdhcyByZW1vdmVkIGJlZm9yZSBpdCBoYWQgZnVsbHkgZW50ZXJlZC4gUmVtb3ZlIGl0LlxuICAgICAgICBfdGhpcy5wZXJmb3JtTGVhdmUoa2V5LCBjb21wb25lbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5wZXJmb3JtTGVhdmUgPSBmdW5jdGlvbiAoa2V5LCBjb21wb25lbnQpIHtcbiAgICAgIF90aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV0gPSB0cnVlO1xuXG4gICAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxMZWF2ZSkge1xuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50V2lsbExlYXZlKF90aGlzLl9oYW5kbGVEb25lTGVhdmluZy5iaW5kKF90aGlzLCBrZXksIGNvbXBvbmVudCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTm90ZSB0aGF0IHRoaXMgaXMgc29tZXdoYXQgZGFuZ2Vyb3VzIGIvYyBpdCBjYWxscyBzZXRTdGF0ZSgpXG4gICAgICAgIC8vIGFnYWluLCBlZmZlY3RpdmVseSBtdXRhdGluZyB0aGUgY29tcG9uZW50IGJlZm9yZSBhbGwgdGhlIHdvcmtcbiAgICAgICAgLy8gaXMgZG9uZS5cbiAgICAgICAgX3RoaXMuX2hhbmRsZURvbmVMZWF2aW5nKGtleSwgY29tcG9uZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX2hhbmRsZURvbmVMZWF2aW5nID0gZnVuY3Rpb24gKGtleSwgY29tcG9uZW50KSB7XG4gICAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudERpZExlYXZlKSB7XG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnREaWRMZWF2ZSgpO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgX3RoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XTtcblxuICAgICAgdmFyIGN1cnJlbnRDaGlsZE1hcHBpbmcgPSAoMCwgX0NoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcpKF90aGlzLnByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgaWYgKGN1cnJlbnRDaGlsZE1hcHBpbmcgJiYgY3VycmVudENoaWxkTWFwcGluZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIC8vIFRoaXMgZW50ZXJlZCBhZ2FpbiBiZWZvcmUgaXQgZnVsbHkgbGVmdC4gQWRkIGl0IGFnYWluLlxuICAgICAgICBfdGhpcy5rZXlzVG9FbnRlci5wdXNoKGtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICB2YXIgbmV3Q2hpbGRyZW4gPSBfZXh0ZW5kcyh7fSwgc3RhdGUuY2hpbGRyZW4pO1xuICAgICAgICAgIGRlbGV0ZSBuZXdDaGlsZHJlbltrZXldO1xuICAgICAgICAgIHJldHVybiB7IGNoaWxkcmVuOiBuZXdDaGlsZHJlbiB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuY2hpbGRSZWZzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgY2hpbGRyZW46ICgwLCBfQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZykocHJvcHMuY2hpbGRyZW4pXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzID0ge307XG4gICAgdGhpcy5rZXlzVG9FbnRlciA9IFtdO1xuICAgIHRoaXMua2V5c1RvTGVhdmUgPSBbXTtcbiAgfTtcblxuICBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIGluaXRpYWxDaGlsZE1hcHBpbmcgPSB0aGlzLnN0YXRlLmNoaWxkcmVuO1xuICAgIGZvciAodmFyIGtleSBpbiBpbml0aWFsQ2hpbGRNYXBwaW5nKSB7XG4gICAgICBpZiAoaW5pdGlhbENoaWxkTWFwcGluZ1trZXldKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUFwcGVhcihrZXksIHRoaXMuY2hpbGRSZWZzW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHZhciBuZXh0Q2hpbGRNYXBwaW5nID0gKDAsIF9DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKShuZXh0UHJvcHMuY2hpbGRyZW4pO1xuICAgIHZhciBwcmV2Q2hpbGRNYXBwaW5nID0gdGhpcy5zdGF0ZS5jaGlsZHJlbjtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2hpbGRyZW46ICgwLCBfQ2hpbGRNYXBwaW5nLm1lcmdlQ2hpbGRNYXBwaW5ncykocHJldkNoaWxkTWFwcGluZywgbmV4dENoaWxkTWFwcGluZylcbiAgICB9KTtcblxuICAgIGZvciAodmFyIGtleSBpbiBuZXh0Q2hpbGRNYXBwaW5nKSB7XG4gICAgICB2YXIgaGFzUHJldiA9IHByZXZDaGlsZE1hcHBpbmcgJiYgcHJldkNoaWxkTWFwcGluZy5oYXNPd25Qcm9wZXJ0eShrZXkpO1xuICAgICAgaWYgKG5leHRDaGlsZE1hcHBpbmdba2V5XSAmJiAhaGFzUHJldiAmJiAhdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldKSB7XG4gICAgICAgIHRoaXMua2V5c1RvRW50ZXIucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rZXkgaW4gcHJldkNoaWxkTWFwcGluZykge1xuICAgICAgdmFyIGhhc05leHQgPSBuZXh0Q2hpbGRNYXBwaW5nICYmIG5leHRDaGlsZE1hcHBpbmcuaGFzT3duUHJvcGVydHkoX2tleSk7XG4gICAgICBpZiAocHJldkNoaWxkTWFwcGluZ1tfa2V5XSAmJiAhaGFzTmV4dCAmJiAhdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1tfa2V5XSkge1xuICAgICAgICB0aGlzLmtleXNUb0xlYXZlLnB1c2goX2tleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgd2Ugd2FudCB0byBzb21lZGF5IGNoZWNrIGZvciByZW9yZGVyaW5nLCB3ZSBjb3VsZCBkbyBpdCBoZXJlLlxuICB9O1xuXG4gIFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGtleXNUb0VudGVyID0gdGhpcy5rZXlzVG9FbnRlcjtcbiAgICB0aGlzLmtleXNUb0VudGVyID0gW107XG4gICAga2V5c1RvRW50ZXIuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gX3RoaXMyLnBlcmZvcm1FbnRlcihrZXksIF90aGlzMi5jaGlsZFJlZnNba2V5XSk7XG4gICAgfSk7XG5cbiAgICB2YXIga2V5c1RvTGVhdmUgPSB0aGlzLmtleXNUb0xlYXZlO1xuICAgIHRoaXMua2V5c1RvTGVhdmUgPSBbXTtcbiAgICBrZXlzVG9MZWF2ZS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBfdGhpczIucGVyZm9ybUxlYXZlKGtleSwgX3RoaXMyLmNoaWxkUmVmc1trZXldKTtcbiAgICB9KTtcbiAgfTtcblxuICBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIC8vIFRPRE86IHdlIGNvdWxkIGdldCByaWQgb2YgdGhlIG5lZWQgZm9yIHRoZSB3cmFwcGVyIG5vZGVcbiAgICAvLyBieSBjbG9uaW5nIGEgc2luZ2xlIGNoaWxkXG4gICAgdmFyIGNoaWxkcmVuVG9SZW5kZXIgPSBbXTtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGtleSkge1xuICAgICAgdmFyIGNoaWxkID0gX3RoaXMzLnN0YXRlLmNoaWxkcmVuW2tleV07XG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgdmFyIGlzQ2FsbGJhY2tSZWYgPSB0eXBlb2YgY2hpbGQucmVmICE9PSAnc3RyaW5nJztcbiAgICAgICAgdmFyIGZhY3RvcnlDaGlsZCA9IF90aGlzMy5wcm9wcy5jaGlsZEZhY3RvcnkoY2hpbGQpO1xuICAgICAgICB2YXIgcmVmID0gZnVuY3Rpb24gcmVmKHIpIHtcbiAgICAgICAgICBfdGhpczMuY2hpbGRSZWZzW2tleV0gPSByO1xuICAgICAgICB9O1xuXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKGlzQ2FsbGJhY2tSZWYsICdzdHJpbmcgcmVmcyBhcmUgbm90IHN1cHBvcnRlZCBvbiBjaGlsZHJlbiBvZiBUcmFuc2l0aW9uR3JvdXAgYW5kIHdpbGwgYmUgaWdub3JlZC4gJyArICdQbGVhc2UgdXNlIGEgY2FsbGJhY2sgcmVmIGluc3RlYWQ6IGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvcmVmcy1hbmQtdGhlLWRvbS5odG1sI3RoZS1yZWYtY2FsbGJhY2stYXR0cmlidXRlJykgOiB2b2lkIDA7XG5cbiAgICAgICAgLy8gQWx3YXlzIGNoYWluaW5nIHRoZSByZWZzIGxlYWRzIHRvIHByb2JsZW1zIHdoZW4gdGhlIGNoaWxkRmFjdG9yeVxuICAgICAgICAvLyB3cmFwcyB0aGUgY2hpbGQuIFRoZSBjaGlsZCByZWYgY2FsbGJhY2sgZ2V0cyBjYWxsZWQgdHdpY2Ugd2l0aCB0aGVcbiAgICAgICAgLy8gd3JhcHBlciBhbmQgdGhlIGNoaWxkLiBTbyB3ZSBvbmx5IG5lZWQgdG8gY2hhaW4gdGhlIHJlZiBpZiB0aGVcbiAgICAgICAgLy8gZmFjdG9yeUNoaWxkIGlzIG5vdCBkaWZmZXJlbnQgZnJvbSBjaGlsZC5cbiAgICAgICAgaWYgKGZhY3RvcnlDaGlsZCA9PT0gY2hpbGQgJiYgaXNDYWxsYmFja1JlZikge1xuICAgICAgICAgIHJlZiA9ICgwLCBfY2hhaW5GdW5jdGlvbjIuZGVmYXVsdCkoY2hpbGQucmVmLCByZWYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gWW91IG1heSBuZWVkIHRvIGFwcGx5IHJlYWN0aXZlIHVwZGF0ZXMgdG8gYSBjaGlsZCBhcyBpdCBpcyBsZWF2aW5nLlxuICAgICAgICAvLyBUaGUgbm9ybWFsIFJlYWN0IHdheSB0byBkbyBpdCB3b24ndCB3b3JrIHNpbmNlIHRoZSBjaGlsZCB3aWxsIGhhdmVcbiAgICAgICAgLy8gYWxyZWFkeSBiZWVuIHJlbW92ZWQuIEluIGNhc2UgeW91IG5lZWQgdGhpcyBiZWhhdmlvciB5b3UgY2FuIHByb3ZpZGVcbiAgICAgICAgLy8gYSBjaGlsZEZhY3RvcnkgZnVuY3Rpb24gdG8gd3JhcCBldmVyeSBjaGlsZCwgZXZlbiB0aGUgb25lcyB0aGF0IGFyZVxuICAgICAgICAvLyBsZWF2aW5nLlxuICAgICAgICBjaGlsZHJlblRvUmVuZGVyLnB1c2goX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChmYWN0b3J5Q2hpbGQsIHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICByZWY6IHJlZlxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnN0YXRlLmNoaWxkcmVuKSB7XG4gICAgICBfbG9vcChrZXkpO1xuICAgIH1cblxuICAgIC8vIERvIG5vdCBmb3J3YXJkIFRyYW5zaXRpb25Hcm91cCBwcm9wcyB0byBwcmltaXRpdmUgRE9NIG5vZGVzXG4gICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMpO1xuICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uTGVhdmU7XG4gICAgZGVsZXRlIHByb3BzLnRyYW5zaXRpb25OYW1lO1xuICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uQXBwZWFyO1xuICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uRW50ZXI7XG4gICAgZGVsZXRlIHByb3BzLmNoaWxkRmFjdG9yeTtcbiAgICBkZWxldGUgcHJvcHMudHJhbnNpdGlvbkxlYXZlVGltZW91dDtcbiAgICBkZWxldGUgcHJvcHMudHJhbnNpdGlvbkVudGVyVGltZW91dDtcbiAgICBkZWxldGUgcHJvcHMudHJhbnNpdGlvbkFwcGVhclRpbWVvdXQ7XG4gICAgZGVsZXRlIHByb3BzLmNvbXBvbmVudDtcblxuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLmNvbXBvbmVudCwgcHJvcHMsIGNoaWxkcmVuVG9SZW5kZXIpO1xuICB9O1xuXG4gIHJldHVybiBUcmFuc2l0aW9uR3JvdXA7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5UcmFuc2l0aW9uR3JvdXAuZGlzcGxheU5hbWUgPSAnVHJhbnNpdGlvbkdyb3VwJztcblxuXG5UcmFuc2l0aW9uR3JvdXAucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gcHJvcFR5cGVzIDoge307XG5UcmFuc2l0aW9uR3JvdXAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUcmFuc2l0aW9uR3JvdXA7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmdldENoaWxkTWFwcGluZyA9IGdldENoaWxkTWFwcGluZztcbmV4cG9ydHMubWVyZ2VDaGlsZE1hcHBpbmdzID0gbWVyZ2VDaGlsZE1hcHBpbmdzO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLyoqXG4gKiBHaXZlbiBgdGhpcy5wcm9wcy5jaGlsZHJlbmAsIHJldHVybiBhbiBvYmplY3QgbWFwcGluZyBrZXkgdG8gY2hpbGQuXG4gKlxuICogQHBhcmFtIHsqfSBjaGlsZHJlbiBgdGhpcy5wcm9wcy5jaGlsZHJlbmBcbiAqIEByZXR1cm4ge29iamVjdH0gTWFwcGluZyBvZiBrZXkgdG8gY2hpbGRcbiAqL1xuZnVuY3Rpb24gZ2V0Q2hpbGRNYXBwaW5nKGNoaWxkcmVuKSB7XG4gIGlmICghY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBfcmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmVzdWx0W2NoaWxkLmtleV0gPSBjaGlsZDtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogV2hlbiB5b3UncmUgYWRkaW5nIG9yIHJlbW92aW5nIGNoaWxkcmVuIHNvbWUgbWF5IGJlIGFkZGVkIG9yIHJlbW92ZWQgaW4gdGhlXG4gKiBzYW1lIHJlbmRlciBwYXNzLiBXZSB3YW50IHRvIHNob3cgKmJvdGgqIHNpbmNlIHdlIHdhbnQgdG8gc2ltdWx0YW5lb3VzbHlcbiAqIGFuaW1hdGUgZWxlbWVudHMgaW4gYW5kIG91dC4gVGhpcyBmdW5jdGlvbiB0YWtlcyBhIHByZXZpb3VzIHNldCBvZiBrZXlzXG4gKiBhbmQgYSBuZXcgc2V0IG9mIGtleXMgYW5kIG1lcmdlcyB0aGVtIHdpdGggaXRzIGJlc3QgZ3Vlc3Mgb2YgdGhlIGNvcnJlY3RcbiAqIG9yZGVyaW5nLiBJbiB0aGUgZnV0dXJlIHdlIG1heSBleHBvc2Ugc29tZSBvZiB0aGUgdXRpbGl0aWVzIGluXG4gKiBSZWFjdE11bHRpQ2hpbGQgdG8gbWFrZSB0aGlzIGVhc3ksIGJ1dCBmb3Igbm93IFJlYWN0IGl0c2VsZiBkb2VzIG5vdFxuICogZGlyZWN0bHkgaGF2ZSB0aGlzIGNvbmNlcHQgb2YgdGhlIHVuaW9uIG9mIHByZXZDaGlsZHJlbiBhbmQgbmV4dENoaWxkcmVuXG4gKiBzbyB3ZSBpbXBsZW1lbnQgaXQgaGVyZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcHJldiBwcmV2IGNoaWxkcmVuIGFzIHJldHVybmVkIGZyb21cbiAqIGBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKClgLlxuICogQHBhcmFtIHtvYmplY3R9IG5leHQgbmV4dCBjaGlsZHJlbiBhcyByZXR1cm5lZCBmcm9tXG4gKiBgUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZygpYC5cbiAqIEByZXR1cm4ge29iamVjdH0gYSBrZXkgc2V0IHRoYXQgY29udGFpbnMgYWxsIGtleXMgaW4gYHByZXZgIGFuZCBhbGwga2V5c1xuICogaW4gYG5leHRgIGluIGEgcmVhc29uYWJsZSBvcmRlci5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VDaGlsZE1hcHBpbmdzKHByZXYsIG5leHQpIHtcbiAgcHJldiA9IHByZXYgfHwge307XG4gIG5leHQgPSBuZXh0IHx8IHt9O1xuXG4gIGZ1bmN0aW9uIGdldFZhbHVlRm9yS2V5KGtleSkge1xuICAgIGlmIChuZXh0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBuZXh0W2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZXZba2V5XTtcbiAgfVxuXG4gIC8vIEZvciBlYWNoIGtleSBvZiBgbmV4dGAsIHRoZSBsaXN0IG9mIGtleXMgdG8gaW5zZXJ0IGJlZm9yZSB0aGF0IGtleSBpblxuICAvLyB0aGUgY29tYmluZWQgbGlzdFxuICB2YXIgbmV4dEtleXNQZW5kaW5nID0ge307XG5cbiAgdmFyIHBlbmRpbmdLZXlzID0gW107XG4gIGZvciAodmFyIHByZXZLZXkgaW4gcHJldikge1xuICAgIGlmIChuZXh0Lmhhc093blByb3BlcnR5KHByZXZLZXkpKSB7XG4gICAgICBpZiAocGVuZGluZ0tleXMubGVuZ3RoKSB7XG4gICAgICAgIG5leHRLZXlzUGVuZGluZ1twcmV2S2V5XSA9IHBlbmRpbmdLZXlzO1xuICAgICAgICBwZW5kaW5nS2V5cyA9IFtdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwZW5kaW5nS2V5cy5wdXNoKHByZXZLZXkpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpID0gdm9pZCAwO1xuICB2YXIgY2hpbGRNYXBwaW5nID0ge307XG4gIGZvciAodmFyIG5leHRLZXkgaW4gbmV4dCkge1xuICAgIGlmIChuZXh0S2V5c1BlbmRpbmcuaGFzT3duUHJvcGVydHkobmV4dEtleSkpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHBlbmRpbmdOZXh0S2V5ID0gbmV4dEtleXNQZW5kaW5nW25leHRLZXldW2ldO1xuICAgICAgICBjaGlsZE1hcHBpbmdbbmV4dEtleXNQZW5kaW5nW25leHRLZXldW2ldXSA9IGdldFZhbHVlRm9yS2V5KHBlbmRpbmdOZXh0S2V5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY2hpbGRNYXBwaW5nW25leHRLZXldID0gZ2V0VmFsdWVGb3JLZXkobmV4dEtleSk7XG4gIH1cblxuICAvLyBGaW5hbGx5LCBhZGQgdGhlIGtleXMgd2hpY2ggZGlkbid0IGFwcGVhciBiZWZvcmUgYW55IGtleSBpbiBgbmV4dGBcbiAgZm9yIChpID0gMDsgaSA8IHBlbmRpbmdLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hpbGRNYXBwaW5nW3BlbmRpbmdLZXlzW2ldXSA9IGdldFZhbHVlRm9yS2V5KHBlbmRpbmdLZXlzW2ldKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZE1hcHBpbmc7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5uYW1lU2hhcGUgPSB1bmRlZmluZWQ7XG5leHBvcnRzLnRyYW5zaXRpb25UaW1lb3V0ID0gdHJhbnNpdGlvblRpbWVvdXQ7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25UaW1lb3V0KHRyYW5zaXRpb25UeXBlKSB7XG4gIHZhciB0aW1lb3V0UHJvcE5hbWUgPSAndHJhbnNpdGlvbicgKyB0cmFuc2l0aW9uVHlwZSArICdUaW1lb3V0JztcbiAgdmFyIGVuYWJsZWRQcm9wTmFtZSA9ICd0cmFuc2l0aW9uJyArIHRyYW5zaXRpb25UeXBlO1xuXG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAvLyBJZiB0aGUgdHJhbnNpdGlvbiBpcyBlbmFibGVkXG4gICAgaWYgKHByb3BzW2VuYWJsZWRQcm9wTmFtZV0pIHtcbiAgICAgIC8vIElmIG5vIHRpbWVvdXQgZHVyYXRpb24gaXMgcHJvdmlkZWRcbiAgICAgIGlmIChwcm9wc1t0aW1lb3V0UHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcih0aW1lb3V0UHJvcE5hbWUgKyAnIHdhc25cXCd0IHN1cHBsaWVkIHRvIENTU1RyYW5zaXRpb25Hcm91cDogJyArICd0aGlzIGNhbiBjYXVzZSB1bnJlbGlhYmxlIGFuaW1hdGlvbnMgYW5kIHdvblxcJ3QgYmUgc3VwcG9ydGVkIGluICcgKyAnYSBmdXR1cmUgdmVyc2lvbiBvZiBSZWFjdC4gU2VlICcgKyAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1hbmltYXRpb24tdHJhbnNpdGlvbi1ncm91cC10aW1lb3V0IGZvciBtb3JlICcgKyAnaW5mb3JtYXRpb24uJyk7XG5cbiAgICAgICAgLy8gSWYgdGhlIGR1cmF0aW9uIGlzbid0IGEgbnVtYmVyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9wc1t0aW1lb3V0UHJvcE5hbWVdICE9PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKHRpbWVvdXRQcm9wTmFtZSArICcgbXVzdCBiZSBhIG51bWJlciAoaW4gbWlsbGlzZWNvbmRzKScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xufVxuXG52YXIgbmFtZVNoYXBlID0gZXhwb3J0cy5uYW1lU2hhcGUgPSBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICBlbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGxlYXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgYWN0aXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ1xufSksIF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICBlbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGVudGVyQWN0aXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgbGVhdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBsZWF2ZUFjdGl2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGFwcGVhcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGFwcGVhckFjdGl2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmdcbn0pXSk7IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5pbmcgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMiA/IGxlbiAtIDIgOiAwKTtcbiAgICBmb3IgKHZhciBrZXkgPSAyOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDJdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0Lmxlbmd0aCA8IDEwIHx8ICgvXltzXFxXXSokLykudGVzdChmb3JtYXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUaGUgd2FybmluZyBmb3JtYXQgc2hvdWxkIGJlIGFibGUgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyAnICtcbiAgICAgICAgJ3dhcm5pbmcuIFBsZWFzZSwgdXNlIGEgbW9yZSBkZXNjcmlwdGl2ZSBmb3JtYXQgdGhhbjogJyArIGZvcm1hdFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgK1xuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoKHgpIHt9XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3RBZGRvbnNDc3NUcmFuc2l0aW9uR3JvdXAgPSByZXF1aXJlKCdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnKTtcblxudmFyIF9yZWFjdEFkZG9uc0Nzc1RyYW5zaXRpb25Hcm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEFkZG9uc0Nzc1RyYW5zaXRpb25Hcm91cCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xvc2UgPSByZXF1aXJlKCcuL2Nsb3NlLnN2ZycpO1xuXG52YXIgX2Nsb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nsb3NlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVFJBTlNJVElPTl9USU1FID0gMDtcblxudmFyIFJlYWN0RmFuY3lCb3ggPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUmVhY3RGYW5jeUJveCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmVhY3RGYW5jeUJveCgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVhY3RGYW5jeUJveCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gUmVhY3RGYW5jeUJveC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJlYWN0RmFuY3lCb3gpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3c6IGZhbHNlXG4gICAgfSwgX3RoaXMuc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvdzogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBfdGhpcy5wcm9wcy5vbk9wZW4oKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVDbGlja0JveCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLmJveC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIF90aGlzLmNsb3NlKCk7XG4gICAgfSwgX3RoaXMuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3c6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIF90aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgICB9LCBfdGhpcy5yZW5kZXJUaHVtYm5haWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICB0aHVtYm5haWwgPSBfdGhpcyRwcm9wcy50aHVtYm5haWwsXG4gICAgICAgICAgaW1hZ2UgPSBfdGhpcyRwcm9wcy5pbWFnZSxcbiAgICAgICAgICBkZWZhdWx0VGh1bWJuYWlsV2lkdGggPSBfdGhpcyRwcm9wcy5kZWZhdWx0VGh1bWJuYWlsV2lkdGgsXG4gICAgICAgICAgZGVmYXVsdFRodW1ibmFpbEhlaWdodCA9IF90aGlzJHByb3BzLmRlZmF1bHRUaHVtYm5haWxIZWlnaHQ7XG5cblxuICAgICAgaWYgKCF0aHVtYm5haWwpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgb25DbGljazogX3RoaXMuc2hvdywgY2xhc3NOYW1lOiAndGh1bWJuYWlsJyB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7XG4gICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogZGVmYXVsdFRodW1ibmFpbFdpZHRoLCBoZWlnaHQ6IGRlZmF1bHRUaHVtYm5haWxIZWlnaHQsIG9iamVjdEZpdDogJ2NvdmVyJyB9LFxuICAgICAgICAgICAgc3JjOiBpbWFnZSwgYWx0OiAndGh1bWJuYWlsJyB9KVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IG9uQ2xpY2s6IF90aGlzLnNob3csIGNsYXNzTmFtZTogJ3RodW1ibmFpbCcgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgc3JjOiB0aHVtYm5haWwsIGFsdDogJ3RodW1ibmFpbCcgfSlcbiAgICAgICk7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUmVhY3RGYW5jeUJveCwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaW1hZ2UgPSBfcHJvcHMuaW1hZ2UsXG4gICAgICAgICAgY2FwdGlvbiA9IF9wcm9wcy5jYXB0aW9uLFxuICAgICAgICAgIGFuaW1hdGlvbiA9IF9wcm9wcy5hbmltYXRpb24sXG4gICAgICAgICAgc2hvd0Nsb3NlQnRuID0gX3Byb3BzLnNob3dDbG9zZUJ0bjtcblxuXG4gICAgICB2YXIgaW1hZ2VTdHlsZSA9IHtcbiAgICAgICAgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjdcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAncmVhY3QtZmFuY3lib3gnIH0sXG4gICAgICAgIHRoaXMucmVuZGVyVGh1bWJuYWlsKCksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9yZWFjdEFkZG9uc0Nzc1RyYW5zaXRpb25Hcm91cDIuZGVmYXVsdCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdHlsZTogeyBhbmltYXRpb25EdXJhdGlvbjogMTAwMCB9LFxuICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU6IGFuaW1hdGlvbixcbiAgICAgICAgICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ6IFRSQU5TSVRJT05fVElNRSxcbiAgICAgICAgICAgIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ6IFRSQU5TSVRJT05fVElNRSB9LFxuICAgICAgICAgIHRoaXMuc3RhdGUuc2hvdyA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2tCb3gsIGNsYXNzTmFtZTogJ2JveCcgfSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgeyByZWY6IGZ1bmN0aW9uIHJlZihib3gpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIuYm94ID0gYm94O1xuICAgICAgICAgICAgICAgIH0sIGNsYXNzTmFtZTogJ2ltYWdlLWJveCcgfSxcbiAgICAgICAgICAgICAgc2hvd0Nsb3NlQnRuICYmIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7IG9uQ2xpY2s6IHRoaXMuY2xvc2UsIGNsYXNzTmFtZTogJ2Nsb3NlLWJ0bicsIHNyYzogX2Nsb3NlMi5kZWZhdWx0LCBhbHQ6ICdjbG9zZScgfSksXG4gICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7IHN0eWxlOiBpbWFnZVN0eWxlLCBzcmM6IGltYWdlLCBhbHQ6ICdvcmlnaW5hbCcgfSksXG4gICAgICAgICAgICAgIGNhcHRpb24gJiYgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdjYXB0aW9uJyB9LFxuICAgICAgICAgICAgICAgIGNhcHRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICkgOiBudWxsXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJlYWN0RmFuY3lCb3g7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5SZWFjdEZhbmN5Qm94LmRlZmF1bHRQcm9wcyA9IHtcbiAgdGh1bWJuYWlsOiAnJyxcbiAgaW1hZ2U6ICcnLFxuICBkZWZhdWx0VGh1bWJuYWlsV2lkdGg6IDMwMCxcbiAgZGVmYXVsdFRodW1ibmFpbEhlaWdodDogMjUwLFxuICBjYXB0aW9uOiAnJyxcbiAgYW5pbWF0aW9uOiAnZmFkZScsXG4gIG9uT3BlbjogZnVuY3Rpb24gb25PcGVuKCkge30sXG4gIG9uQ2xvc2U6IGZ1bmN0aW9uIG9uQ2xvc2UoKSB7fSxcbiAgc2hvd0Nsb3NlQnRuOiB0cnVlXG59O1xuXG5SZWFjdEZhbmN5Qm94LnByb3BUeXBlcyA9IHtcbiAgdGh1bWJuYWlsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgaW1hZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBkZWZhdWx0VGh1bWJuYWlsV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBkZWZhdWx0VGh1bWJuYWlsSGVpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgY2FwdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGFuaW1hdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGFuaW1hdGlvblRpbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBvbk9wZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25DbG9zZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBzaG93Q2xvc2VCdG46IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbFxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVhY3RGYW5jeUJveDsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpYVhOdkxUZzROVGt0TVNJL1BnMEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlERTVMakF1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGcwS1BITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlHbGtQU0pEWVhCaFh6RWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWcwS0NTQjJhV1YzUW05NFBTSXdJREFnTkRVMUxqazVNaUEwTlRVdU9Ua3lJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQTBOVFV1T1RreUlEUTFOUzQ1T1RJN0lpQjRiV3c2YzNCaFkyVTlJbkJ5WlhObGNuWmxJajROQ2p4blBnMEtDVHhuUGcwS0NRazhaejROQ2drSkNUeG5QZzBLQ1FrSkNUeHdZWFJvSUhOMGVXeGxQU0ptYVd4c09pTXdNVEF3TURJN0lpQmtQU0pOTWpJM0xqazVOaXd3UXpFd01pNHdPREVzTUN3d0xERXdNaTR3T0RFc01Dd3lNamN1T1RrMll6QXNNVEkxTGprME5Td3hNREl1TURneExESXlOeTQ1T1RZc01qSTNMams1Tml3eU1qY3VPVGsyRFFvSkNRa0pDV014TWpVdU9UUTFMREFzTWpJM0xqazVOaTB4TURJdU1EVXhMREl5Tnk0NU9UWXRNakkzTGprNU5rTTBOVFV1T1RreUxERXdNaTR3T0RFc016VXpMamswTVN3d0xESXlOeTQ1T1RZc01Ib2dUVEl5Tnk0NU9UWXNOREkxTGpVNU13MEtDUWtKQ1FsakxURXdPQzQ1TlRJc01DMHhPVGN1TlRrM0xUZzRMalkwTlMweE9UY3VOVGszTFRFNU55NDFPVGRUTVRFNUxqQTBOQ3d6TUM0ek9Ua3NNakkzTGprNU5pd3pNQzR6T1Rsek1UazNMalU1Tnl3NE9DNDJORFVzTVRrM0xqVTVOeXd4T1RjdU5UazNEUW9KQ1FrSkNWTXpNell1T1RRNExEUXlOUzQxT1RNc01qSTNMams1Tml3ME1qVXVOVGt6ZWlJdlBnMEtDUWtKQ1R4d1lYUm9JSE4wZVd4bFBTSm1hV3hzT2lNd01UQXdNREk3SWlCa1BTSk5NekV5TGpFME1pd3hNakl1TXpVNGJDMDRNeTQxTXpnc09ETXVOVFk0YkMwM05DNDVOalV0T0RNdU5UWTRZeTAxTGpreU9DMDFMamt5T0MweE5TNDFOalV0TlM0NU1qZ3RNakV1TkRreUxEQU5DZ2tKQ1FrSll5MDFMamt5T0N3MUxqa3lPQzAxTGpreU9Dd3hOUzQxTmpVc01Dd3lNUzQwT1RKc056UXVPVFkxTERnekxqVTJPR3d0T0RRdU56SXpMRGcwTGpjeU0yTXROUzQ1TWpnc05TNDVNamd0TlM0NU1qZ3NNVFV1TlRrMUxEQXNNakV1TkRreURRb0pDUWtKQ1dNMUxqa3lPQ3cxTGpreU9Dd3hOUzQxTmpVc05TNDVNamdzTWpFdU5Ea3lMREJzT0RNdU5UWTRMVGd6TGpVek9HdzNOQzQ1TmpVc09ETXVOVE00WXpVdU9EazNMRFV1T1RJNExERTFMalUyTlN3MUxqa3lPQ3d5TVM0ME5qSXNNQTBLQ1FrSkNRbGpOUzQ1TWpndE5TNDRPVGdzTlM0NU1qZ3RNVFV1TlRZMUxEQXRNakV1TkRreWJDMDNOQzQ1T1RVdE9ETXVOVE00YkRnMExqY3lNeTA0TkM0M05UUmpOUzQ1TWpndE5TNDVNamdzTlM0NU1qZ3RNVFV1TlRZMUxEQXRNakV1TkRreURRb0pDUWtKQ1VNek1qY3VOamMyTERFeE5pNDBNeXd6TVRndU1EY3NNVEUyTGpRekxETXhNaTR4TkRJc01USXlMak0xT0hvaUx6NE5DZ2tKQ1R3dlp6NE5DZ2tKUEM5blBnMEtDVHd2Wno0TkNnazhaejROQ2drOEwyYytEUW9KUEdjK0RRb0pQQzluUGcwS0NUeG5QZzBLQ1R3dlp6NE5DZ2s4Wno0TkNnazhMMmMrRFFvSlBHYytEUW9KUEM5blBnMEtDVHhuUGcwS0NUd3ZaejROQ2drOFp6NE5DZ2s4TDJjK0RRb0pQR2MrRFFvSlBDOW5QZzBLQ1R4blBnMEtDVHd2Wno0TkNnazhaejROQ2drOEwyYytEUW9KUEdjK0RRb0pQQzluUGcwS0NUeG5QZzBLQ1R3dlp6NE5DZ2s4Wno0TkNnazhMMmMrRFFvSlBHYytEUW9KUEM5blBnMEtDVHhuUGcwS0NUd3ZaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p3dmMzWm5QZzBLXCIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENhcmQsIENvbCwgQ29udGFpbmVyLCBSb3cgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCBSZWFjdEZhbmN5Qm94IGZyb20gJ3JlYWN0LWZhbmN5Ym94J1xyXG5pbXBvcnQgJ3JlYWN0LWZhbmN5Ym94L2xpYi9mYW5jeWJveC5jc3MnXHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5pbXBvcnQgQnV0dG9uV2hhdHNhcHAgZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b25XaGF0c2FwcCdcclxuXHJcbmltcG9ydCBIZWFkU2VvIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZCdcclxuXHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZFNlbyB0aXRsZT17J0Vjb3JhaXogfCBQcm9kdXRvJ30gLz48SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxtYWluIGlkPSdwcm9kdWN0UGFnZSc+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdzZWN0aW9uMSBwb3NpdGlvbi1yZWxhdGl2ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBsZz17Nn0gbWQ9ezEyfSBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyICBmbGV4LWNvbHVtbicgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RpdGxlLWxpdHRsZSBjb2xvci1wcmltYXJ5Jz5FY29yYWl6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RpdGxlLWJpZyAgY29sb3ItYmxhY2snPk8gcXVlIMOpPzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcC1iaWcgY29sb3ItZ3JleSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hY2F4ZWlyYSBEZXNjYXNjYWRhLCBFbWJhbGFkYSDDoCBWw6FjdW8gZSBDb25nZWxhZGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBsZz17Nn0gbWQ9ezEyfSBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlcicgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCcuLi9pbWFnZXMvcHJvZHVjdC9wcm9kdWN0LWlsbHVzdHJhdG9yLnBuZycpfSBhbHQ9JycgdGl0bGU9JycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3NlY3Rpb24yIGJnLWxpZ2h0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gbGc9ezEyfSBtZD17MTJ9IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkcy1kaWZmZXJlbnRpYWxzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzcmM9e3JlcXVpcmUoJy4uL2ltYWdlcy9wcm9kdWN0L2RpZmZlcmVudGlhbHMvMS5wbmcnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RpdGxlIHRpdGxlLWxpdHRsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1YWxpZGFkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncGFyYWdyYXBoIHAtbWVkaXVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZHV0b3MgY3VpZGFkb3NhbWVudGUgc2VsZWNpb25hZG9zIGUgYmVuZWZpY2lhZG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlIGFjb3JkbyBjb20gdW0gQ29udHJvbGUgZGUgUXVhbGlkYWRlLCB2aXNhbmRvIGF0ZW5kZXIgYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0YXRpdmFzIGRvIG1lcmNhZG8gY29uc3VtaWRvci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5JbWcgdmFyaWFudD1cInRvcFwiIHNyYz17cmVxdWlyZSgnLi4vaW1hZ2VzL3Byb2R1Y3QvZGlmZmVyZW50aWFscy8yLnBuZycpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGl0bGUgdGl0bGUtbGl0dGxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFkcm9uaXphw6fDo29cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3BhcmFncmFwaCBwLW1lZGl1bSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYWJhbGhvIGNvbnTDrW51byBjb20gbyBvYmpldGl2byBkZSBzZWxlw6fDo28gZGFzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbWVudGVzLCB0cmF0b3MgY3VsdHVyYWlzIGUgaXJyaWdhw6fDo28sIGJ1c2NhbmRvIHVtYSBwYWRyb25pemHDp8Ojb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkbyBDYW1wbyDDoCBBZ3JvaW5kw7pzdHJpYS4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzcmM9e3JlcXVpcmUoJy4uL2ltYWdlcy9wcm9kdWN0L2RpZmZlcmVudGlhbHMvMy5wbmcnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RpdGxlIHRpdGxlLWxpdHRsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByYXRpY2lkYWRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdwYXJhZ3JhcGggcC1tZWRpdW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9kdXRvcyBiZW5lZmljaWFkb3MgZSBwcm9udG9zIHBhcmEgbyBwcmVwYXJvIG5vIHNldVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RpdGxlIHRpdGxlLWJpZyB0ZXh0LWxlZnQgY29sLWxnLTYgY29sLTEyJz5WZWphIG1haXMgZG9zIG5vc3NvcyBwcm9kdXRvcyBlIDxzcGFuIGNsYXNzTmFtZT0nY29sb3ItcHJpbWFyeSc+YW1iaWVudGUgZGUgcHJvZHXDp8Ojbzwvc3Bhbj48L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhbGxlcnktZ3JpZCBtdC01Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCcuLi9pbWFnZXMvcHJvZHVjdC9nYWxsZXJ5LzEucG5nJyl9IGFsdD0nJyB0aXRsZT0nJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoJy4uL2ltYWdlcy9wcm9kdWN0L2dhbGxlcnkvMi5wbmcnKX0gYWx0PScnIHRpdGxlPScnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZSgnLi4vaW1hZ2VzL3Byb2R1Y3QvZ2FsbGVyeS8zLnBuZycpfSBhbHQ9JycgdGl0bGU9JycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCcuLi9pbWFnZXMvcHJvZHVjdC9nYWxsZXJ5LzQucG5nJyl9IGFsdD0nJyB0aXRsZT0nJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoJy4uL2ltYWdlcy9wcm9kdWN0L2dhbGxlcnkvNS5wbmcnKX0gYWx0PScnIHRpdGxlPScnIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoJy4uL2ltYWdlcy9wcm9kdWN0L2dhbGxlcnkvNi5wbmcnKX0gYWx0PScnIHRpdGxlPScnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZSgnLi4vaW1hZ2VzL3Byb2R1Y3QvZ2FsbGVyeS83LnBuZycpfSBhbHQ9JycgdGl0bGU9JycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCcuLi9pbWFnZXMvcHJvZHVjdC9nYWxsZXJ5LzgucG5nJyl9IGFsdD0nJyB0aXRsZT0nJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoJy4uL2ltYWdlcy9wcm9kdWN0L2dhbGxlcnkvOS5wbmcnKX0gYWx0PScnIHRpdGxlPScnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZSgnLi4vaW1hZ2VzL3Byb2R1Y3QvZ2FsbGVyeS8xMC5wbmcnKX0gYWx0PScnIHRpdGxlPScnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3QiXSwic291cmNlUm9vdCI6IiJ9