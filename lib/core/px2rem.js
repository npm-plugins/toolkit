/**
 * px转rem
 * @param {number|object} o - 要转化的值，如 500 或 { width: 500 }
 * @param {number} unit - 转化比例，默认 200
 * @returns {number|object} 返回值，如输入750，返回3.75
 */
export default function px2rem(o) {
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

  if (typeof o === 'object') {
    var obj = {};

    for (var key in o) {
      if (o.hasOwnProperty(key)) {
        obj[key] = o[key] / unit;
      }
    }

    return obj;
  } else {
    return o / unit;
  }
}