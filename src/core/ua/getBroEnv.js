/**
 * 获取浏览器环境
 */
export default function getBroEnv() {
  const ua = navigator.userAgent.toLocaleLowerCase()
  const envArr = [{
    rgx: /qq/g,
    val: 2
  },
  {
    rgx: /micromessenger/g,
    val: 1
  },
  {
    rgx: /alipay/g,
    val: 3
  }
  ]

  let result = 4
  for (var i = 0; i < envArr.length; i++) {
    if (ua.match(envArr[i].rgx)) {
      result = envArr[i].val
    }
  }
  return result
}