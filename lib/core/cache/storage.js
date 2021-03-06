import dateFormat from '../date/dateFormat';
var Storage = {
  /**
   * 设置localStorage
   * @param {string} key - key
   * @param {any} value - value
   * @param {number} expiredays - 过期天数，默认0
   */
  set: function set(key, value) {
    var expiredays = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var dbData = {
      data: value,
      expireTime: dateFormat('YYYY-MM-DD', new Date(new Date().getTime() + expiredays * 24 * 3600 * 1000))
    };

    this._set(key, dbData);
  },

  /**
   * 获取localStorage
   * @param {string} key 
   */
  get: function get(key) {
    var today = dateFormat('YYYY-MM-DD');

    var dbData = this._get(key);

    var value = null;

    if (dbData !== null) {
      if (dbData.expireTime >= today) {
        value = dbData.data;
      }
    }

    return value;
  },

  /**
   * 移除localStorage
   * @param {string} key 
   */
  remove: function remove(key) {
    this._remove(key);
  },

  /**
   * 获取过期时间
   * @param {string} key 
   */
  getExpireTime: function getExpireTime(key) {
    var dbData = this._get(key);

    var value = null;

    if (dbData !== null) {
      value = dbData.expireTime;
    }

    return value;
  },

  /**
   * 更新localStorage
   * @param {string} key 
   * @param {any} value 
   * @param {number} expiredays 
   */
  update: function update(key, value) {
    var expiredays = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var expireTime = this.getExpireTime(key);

    if (expireTime !== null) {
      var dbData = {
        data: value,
        expireTime: dateFormat('YYYY-MM-DD', new Date(new Date(expireTime).getTime() + expiredays * 24 * 3600 * 1000))
      };

      this._set(key, dbData);
    }
  },
  _set: function _set(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
  },
  _get: function _get(key) {
    var value = null;

    try {
      value = JSON.parse(window.localStorage.getItem(key));
    } catch (e) {}

    return value;
  },
  _remove: function _remove(key) {
    try {
      window.localStorage.removeItem(key);
    } catch (e) {}
  }
};
export default Storage;