function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EventEmiter =
/*#__PURE__*/
function () {
  function EventEmiter() {
    _classCallCheck(this, EventEmiter);

    _defineProperty(this, "handlers", {});
  }

  _createClass(EventEmiter, [{
    key: "on",

    /**
     * 事件监听
     * @param {string} type 
     * @param {function} fn 
     */
    value: function on(type, fn) {
      if (this.handlers[type]) {
        this.handlers[type].push({
          once: false,
          fn: fn
        });
      } else {
        this.handlers[type] = [];
        this.handlers[type].push({
          once: false,
          fn: fn
        });
      }

      return this;
    }
    /**
     * 事件单次监听
     * @param {string} type 
     * @param {function} fn 
     */

  }, {
    key: "once",
    value: function once(type, fn) {
      if (this.handlers[type]) {
        this.handlers[type].push({
          once: false,
          fn: fn
        });
      } else {
        this.handlers[type] = [];
        this.handlers[type].push({
          once: true,
          fn: fn
        });
      }

      return this;
    }
    /**
     * 触发事件
     * @param {string} type 
     * @param {any} data 
     */

  }, {
    key: "emit",
    value: function emit(type, data) {
      var _this = this;

      if (this.handlers[type]) {
        this.handlers[type].forEach(function (ele) {
          ele.fn(data);

          if (ele.once) {
            _this.off(type, ele.fn);
          }
        });
      }

      return this;
    }
    /**
     * 移除事件监听
     * @param {string} type 
     * @param {function} fn 
     */

  }, {
    key: "off",
    value: function off(type) {
      var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (this.handlers[type]) {
        if (fn) {
          this.handlers[type].splice(this.handlers[type].indexOf(fn), 1);
        } else {
          delete this.handlers[type];
        }
      }
    }
  }]);

  return EventEmiter;
}();

export { EventEmiter as default };