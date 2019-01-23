import "core-js/modules/es6.regexp.replace";
import "core-js/modules/es6.regexp.split";
var Cookie = {
  /**
   * 设置cookie
   * @param {string} key - key
   * @param {any} value - value
   * @param {number} expiredays - 过期天数，默认0，今日有效
   */
  set: function set(key, value) {
    var expiredays = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var now = new Date();
    now.setHours(23, 59, 59, 59);
    var timeStamp = now.getTime() + expiredays * 24 * 60 * 60 * 1000;
    var date = new Date(timeStamp);
    var dbData = {
      data: value,
      expireTime: date
    };

    this._set(key, dbData);
  },

  /**
   * 获取cookie
   * @param {string} key - key
   */
  get: function get(key) {
    var dbData = this._get(key);

    var value = null;

    if (dbData !== null) {
      value = dbData.data;
    }

    return value;
  },

  /**
   * 移除cookie
   * @param {string} key 
   */
  remove: function remove(key) {
    if (document.cookie.length) {
      var d = new Date();
      d.setTime(d.getTime() - 24 * 60 * 60 * 1000);
      document.cookie = key + '=;' + 'expires=' + d;
    }
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
   * 更新cookie
   * @param {string} key 
   * @param {any} value 
   * @param {number} expiredays 
   */
  update: function update(key, value) {
    var expiredays = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var expireTime = this.getExpireTime(key);

    if (expireTime !== null) {
      var timeStamp = new Date(expireTime).getTime() + expiredays * 24 * 60 * 60 * 1000;
      var dbData = {
        data: value,
        expireTime: new Date(timeStamp)
      };

      this._set(key, dbData);
    }
  },
  _set: function _set(key, data) {
    document.cookie = key + '=' + JSON.stringify(data) + ';' + 'expires=' + data.expireTime;
  },
  _get: function _get(curKey) {
    var value = null;

    if (document.cookie.length) {
      for (var arr = document.cookie.split(';'), i = 0; i < arr.length; i++) {
        var keyLen = curKey.length + 1;
        var ck = arr[i].replace(/(^\s*)|(\s*$)/g, '');

        if (ck.substring(0, keyLen) === curKey + '=') {
          value = JSON.parse(ck.substring(keyLen));
          break;
        }
      }
    }

    return value;
  }
};
export default Cookie;