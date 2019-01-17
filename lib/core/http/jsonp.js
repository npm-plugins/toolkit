import "core-js/modules/es6.regexp.replace";

/**
 * 对象转query参数
 * @param {object} data 
 */
function formatParams(data) {
  var arr = [];

  for (var name in data) {
    arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
  }

  return arr.join('&');
}
/**
 * ajax-jsonp
 * @param {object} options 
 */


export default function jsonp(options) {
  var callback = options.callback,
      url = options.url,
      data = options.data,
      success = options.success,
      error = options.error,
      _options$time = options.time,
      time = _options$time === void 0 ? 3000 : _options$time; // 随机生成jsonp回掉函数名

  var callbackName = ('jsonp_' + Math.random()).replace(".", "");
  data[callback] = callbackName;
  var params = formatParams(data);
  var oHead = document.getElementsByTagName('head')[0];
  var oS = document.createElement('script');
  oHead.appendChild(oS); //创建jsonp回调函数

  window[callbackName] = function (json) {
    oHead.removeChild(oS);
    clearTimeout(oS.timer);
    window[callbackName] = null;
    success && success(json);
  }; //发送请求


  oS.src = url + '?' + params;
  oS.timer = setTimeout(function () {
    window[callbackName] = null;
    oHead.removeChild(oS);
    error && error({
      message: "超时"
    });
  }, time);
}