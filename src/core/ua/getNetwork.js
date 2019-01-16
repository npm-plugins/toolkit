/**
 * 获取设备网络
 */
export default function getNetwork() {
  let networkState = null
  const ua = window.navigator.userAgent
  const con =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection
  // 如果是微信
  if (/MicroMessenger/.test(ua)) {
    // 如果是微信6.0以上版本，用UA来判断
    if (/NetType/.test(ua)) {
      const type = ua.match(/NetType\/(\S*)/)
      networkState = type[1]
      // 如果是微信6.0以下版本，调用微信私有接口WeixinJSBridge
    } else {
      document.addEventListener(
        'WeixinJSBridgeReady',
        function onBridgeReady() {
          window.WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
            networkState = e.err_msg
          })
        }
      )
    }
    // 如果支持navigator.connection
  } else if (con) {
    networkState = con.type
  }
  const connectType = [
    'bluetooth',
    'cellular',
    'ethernet',
    'mixed',
    'none',
    'other',
    'unknown',
    'wifi',
    'wimax'
  ]
  if (!isNaN(networkState)) {
    networkState = connectType[parseInt(networkState)]
  }
  return networkState
}