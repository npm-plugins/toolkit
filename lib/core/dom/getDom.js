import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

export default function (className) {
  if (_typeof(className) === 'object') {
    return className;
  }

  return document.querySelector(className);
}