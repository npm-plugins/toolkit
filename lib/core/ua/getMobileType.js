export default function getMobileType() {
  var reg = /ipad|iphone|ipod|ios/ig;
  return reg.test(ua) ? 'ios' : 'android';
}