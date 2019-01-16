/**
 * 获取设备类型
 */
export default function getDeviceType() {
  var ua = navigator.userAgent.toLocaleLowerCase()
  var platform = navigator.platform.toLocaleLowerCase()
  var result
  if (platform.match(/mac/g)) {
    result = 'Mac'
  } else if (platform.match(/win/g)) {
    result = 'Win'
  } else if (ua.match(/android/g)) {
    var androidVersion = ua.match(/android (.*?);/)
    androidVersion = androidVersion ? androidVersion[1] : 0
    var chromeVersion = ua.match(/chrome\/(.*?) mobile/)
    chromeVersion = chromeVersion ? chromeVersion[1] : 0
    if (parseFloat(androidVersion) >= 5) {
      if (parseFloat(chromeVersion) >= 38) {
        if (
          !!navigator.getBattery &&
          !!navigator.vibrate &&
          navigator.hardwareConcurrency
        ) {
          result = 'Android'
        } else {
          result = 'AndroidSimulator'
        }
      } else {
        result = 'Chrome37.x(ignore)'
      }
    } else {
      result = 'Android4.x(ignore)'
    }
  } else if (platform.match(/iphone/g)) {
    result = 'iPhone'
  } else if (platform.match(/ipad/g)) {
    result = 'iPad'
  } else {
    result = 'other'
  }
  return result
}