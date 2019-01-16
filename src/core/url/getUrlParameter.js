/**
 * 获取url上的参数
 * @param {string} name - 参数key
 * @param {string} path - url，默认值window.location.href
 */
export default function getUrlParameter(name, path = window.location.href) {
  var regexS = '[\\?&]' + name + '=([^&#]*)'
  var regex = new RegExp(regexS)
  var results = regex.exec(path)

  if (results === null) return ''
  else return results[1]
}