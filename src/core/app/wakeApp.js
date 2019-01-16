import getMobileType from '../ua/getMobileType'

const getDeveiceEnv = () => {
  return ua.match(/MicroMessenger/i) === 'MicroMessenger' ? 'weixin' : 'other'
}

// 唤醒APP
function wakeApp(options = {
  ios: {
    path: '',
    download: ''
  },
  android: {
    path: '',
    download: ''
  }
}) {
  const { ios, android } = options
  // 微信环境，不能唤醒，提示打开浏览器
  if (getDeveiceEnv() === 'weixin') {
    wakeAppByBrowser()
    return false
  }
  if (getMobileType() === 'ios' && ios) {
    wakeAppInIos(ios)
  } else if (android) {
    wakeAppInAndroid(android)
  }
  return true
}

// 获取ios App
function wakeAppInIos(ios) {
  window.location.href = ios.path
  download(ios.download)
}

// 获取Android App
function wakeAppInAndroid(android) {
  const fr = document.createElement('iframe')
  fr.style.display = 'none'
  fr.src = android.path
  document.body.appendChild(fr)
  download(android.download)
}

// dd
function download(url, time = 2000) {
  window.setTimeout(() => {
    window.location.href = url
  }, time)
}

// 微信里面打开页面提醒用户打开浏览器
function wakeAppByBrowser() {
  const str = `<div class="wakeAppByBrowser" style="z-index:9999;width:100%;height:100%;background:rgba(0,0,0,0.5) url(https://yun.duiba.com.cn/h5/millionaire-custom/top-180206/assets/iosgo.png) no-repeat right top;background-size:contain;top: 0;position:fixed;"></div>`
  document.body.appendChild(parseDom(str)[0])
}

// 字符串转dom
function parseDom(str) {
  const objE = document.createElement('div')
  objE.innerHTML = str
  return objE.childNodes
};

export {
  wakeApp,
  wakeAppInAndroid,
  wakeAppByBrowser
}
