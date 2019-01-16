
import dateFormat  from '../date/dateFormat'

const Storage = {
  /**
   * 设置localStorage
   * @param {string} key - key
   * @param {any} value - value
   * @param {number} expiredays - 过期天数，默认0
   */
  set(key, value, expiredays = 0) {
    const dbData = {
      data: value,
      expireTime: dateFormat('YYYY-MM-DD', new Date(new Date().getTime() + expiredays * 24 * 3600 * 1000))
    }
    this._set(key, dbData)
  },
  /**
   * 获取localStorage
   * @param {string} key 
   */
  get(key) {
    const today = dateFormat('YYYY-MM-DD')
    const dbData = this._get(key)
    let value = null
    if (dbData !== null) {
      if (dbData.expireTime >= today) {
        value = dbData.data
      }
    }
    return value
  },
  /**
   * 移除localStorage
   * @param {string} key 
   */
  remove(key) {
    this._remove(key)
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
   * 更新localStorage
   * @param {string} key 
   * @param {any} value 
   * @param {number} expiredays 
   */
  update(key, value, expiredays = 0) {
    const expireTime = this.getExpireTime(key)
    if (expireTime !== null) {
      const dbData = {
        data: value,
        expireTime: dateFormat('YYYY-MM-DD', new Date(new Date(expireTime).getTime() + expiredays * 24 * 3600 * 1000))
      }
      this._set(key, dbData)
    }
  },
  _set(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      
    }
  },
  _get(key) {
    let value = null
    try {
      value = JSON.parse(window.localStorage.getItem(key))
    } catch (e) {

    }
    return value
  },
  _remove(key) {
    try {
      window.localStorage.removeItem(key)
    } catch (e) {

    }
  }
}
export default Storage
