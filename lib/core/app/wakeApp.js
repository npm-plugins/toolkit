import "core-js/modules/es6.regexp.match";
import getMobileType from '../ua/getMobileType';

var getDeveiceEnv = function getDeveiceEnv() {
  return ua.match(/MicroMessenger/i) === 'MicroMessenger' ? 'weixin' : 'other';
}; // 唤醒APP


function wakeApp() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    ios: {
      path: '',
      download: ''
    },
    android: {
      path: '',
      download: ''
    }
  };
  var ios = options.ios,
      android = options.android; // 微信环境，不能唤醒，提示打开浏览器

  if (getDeveiceEnv() === 'weixin') {
    wakeAppByBrowser();
    return false;
  }

  if (getMobileType() === 'ios' && ios) {
    wakeAppInIos(ios);
  } else if (android) {
    wakeAppInAndroid(android);
  }

  return true;
} // 获取ios App


function wakeAppInIos(ios) {
  window.location.href = ios.path;
  download(ios.download);
} // 获取Android App


function wakeAppInAndroid(android) {
  var fr = document.createElement('iframe');
  fr.style.display = 'none';
  fr.src = android.path;
  document.body.appendChild(fr);
  download(android.download);
} // dd


function download(url) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
  window.setTimeout(function () {
    window.location.href = url;
  }, time);
} // 微信里面打开页面提醒用户打开浏览器


function wakeAppByBrowser() {
  var str = "<div class=\"wakeAppByBrowser\" style=\"z-index:9999;width:100%;height:100%;background:rgba(0,0,0,0.5) url(https://yun.duiba.com.cn/h5/millionaire-custom/top-180206/assets/iosgo.png) no-repeat right top;background-size:contain;top: 0;position:fixed;\"></div>";
  document.body.appendChild(parseDom(str)[0]);
} // 字符串转dom


function parseDom(str) {
  var objE = document.createElement('div');
  objE.innerHTML = str;
  return objE.childNodes;
}

;
export default wakeApp;