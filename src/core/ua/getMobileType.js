export default function getMobileType() {
  const reg = /ipad|iphone|ipod|ios/ig
  return reg.test(ua) ? 'ios' : 'android'
}