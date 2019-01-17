/**
 * 对象转query参数
 * @param {object} data 
 */

function formatParams(data) {
  const arr = []
  for (let name in data) {
    arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]))
  }
  return arr.join('&')
}
/**
 * ajax-jsonp
 * @param {object} options 
 */

export default function jsonp(options) {
  const { callback, url, data, success, error, time = 3000 } = options
  // 随机生成jsonp回掉函数名
  const callbackName = ('jsonp_' + Math.random()).replace(".", "")

  data[callback] = callbackName
  const params = formatParams(data)

  const oHead = document.getElementsByTagName('head')[0]
  let oS = document.createElement('script')
  oHead.appendChild(oS)

  //创建jsonp回调函数
  window[callbackName] = function (json) {
    oHead.removeChild(oS)
    clearTimeout(oS.timer)
    window[callbackName] = null
    success && success(json)
  }

  //发送请求
  oS.src = url + '?' + params

  oS.timer = setTimeout(function () {
    window[callbackName] = null
    oHead.removeChild(oS)
    error && error({ message: "超时" })
  }, time)
}