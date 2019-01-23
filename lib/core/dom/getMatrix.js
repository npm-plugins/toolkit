import "core-js/modules/es6.regexp.split";
import "core-js/modules/es6.regexp.match";

/**
 * 获取dom的transform值
 * @param {HTMLElement} dom - dom
 * @returns {array} transform属性matrix的数组
 */
export default function (dom) {
  var matrix = null;
  var styles = window.getComputedStyle(dom)['transform'];
  var matches = styles && styles.match(/^matrix[3]?[d]?\((.+)\)$/);

  if (matches) {
    matrix = matches[1].split(', ');
  }

  return matrix;
}