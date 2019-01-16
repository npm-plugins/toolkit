import "core-js/modules/es6.regexp.constructor";

/**
 * 获取url上的参数
 * @param {string} name - 参数key
 * @param {string} path - url，默认值window.location.href
 */
export default function getUrlParameter(name) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
  var regexS = '[\\?&]' + name + '=([^&#]*)';
  var regex = new RegExp(regexS);
  var results = regex.exec(path);
  if (results === null) return '';else return results[1];
}