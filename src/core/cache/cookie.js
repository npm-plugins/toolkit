const Cookie = {
  /**
   * 设置cookie
   * @param {string} key - key
   * @param {any} value - value
   * @param {number} expiredays - 过期天数，默认0，今日有效
   */
  set(key, value, expiredays = 0) {
    const now = new Date()
    now.setHours(23, 59, 59, 59)
    const timeStamp = now.getTime() + expiredays * 24 * 60 * 60 * 1000
    let date = new Date(timeStamp)
    const dbData = {
      data: value,
      expireTime: date
    }
    this._set(key, dbData)
  },
  /**
   * 获取cookie
   * @param {string} key - key
   */
  get(key) {
    const dbData = this._get(key)
    let value = null
    if (dbData !== null) {
      value = dbData.data
    }
    return value
  },
  /**
   * 移除cookie
   * @param {string} key 
   */
  remove(key) {
    if (document.cookie.length) {
      let d = new Date()
      d.setTime(d.getTime() - 24 * 60 * 60 * 1000)
      document.cookie = key + '=;' + 'expires=' + d
    }
  },
  /**
   * 获取过期时间
   * @param {string} key 
   */
  getExpireTime(key) {
    const dbData = this._get(key)
    let value = null
    if (dbData !== null) {
      value = dbData.expireTime
    }
    return value
  },
  /**
   * 更新cookie
   * @param {string} key 
   * @param {any} value 
   * @param {number} expiredays 
   */
  update(key, value, expiredays = 0) {
    const expireTime = this.getExpireTime(key)
    if (expireTime !== null) {
      const timeStamp = new Date(expireTime).getTime() + expiredays * 24 * 60 * 60 * 1000
      const dbData = {
        data: value,
        expireTime: new Date(timeStamp)
      }
      this._set(key, dbData)
    }
  },
  _set(key, data) {
    document.cookie = key + '=' + JSON.stringify(data) + ';' + 'expires=' + data.expireTime
  },
  _get(curKey) {
    let value = null
    if (document.cookie.length) {
      for (let arr = document.cookie.split(';'), i = 0; i < arr.length; i++) {
        const keyLen = curKey.length + 1
        const ck = arr[i].replace(/(^\s*)|(\s*$)/g, '')
        if (ck.substring(0, keyLen) === curKey + '=') {
          value = JSON.parse(ck.substring(keyLen))
          break
        }
      }
    }
    return value
  }
}
export default Cookie
