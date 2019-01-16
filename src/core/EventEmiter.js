export default class EventEmiter {
  handlers = {}
  /**
   * 事件监听
   * @param {string} type 
   * @param {function} fn 
   */
  on(type, fn) {
    if (this.handlers[type]) {
      this.handlers[type].push({
        once: false,
        fn: fn
      })
    } else {
      this.handlers[type] = []
      this.handlers[type].push({
        once: false,
        fn: fn
      })
    }
    return this
  }
  /**
   * 事件单次监听
   * @param {string} type 
   * @param {function} fn 
   */
  once(type, fn) {
    if (this.handlers[type]) {
      this.handlers[type].push({
        once: false,
        fn: fn
      })
    } else {
      this.handlers[type] = []
      this.handlers[type].push({
        once: true,
        fn: fn
      })
    }
    return this
  }
  /**
   * 触发事件
   * @param {string} type 
   * @param {any} data 
   */
  emit(type, data) {
    if (this.handlers[type]) {
      this.handlers[type].forEach(ele => {
        ele.fn(data)
        if (ele.once) {
          this.off(type, ele.fn)
        }
      })
    }
    return this
  }
  /**
   * 移除事件监听
   * @param {string} type 
   * @param {function} fn 
   */
  off(type, fn = null) {
    if (this.handlers[type]) {
      if (fn) {
        this.handlers[type].splice(this.handlers[type].indexOf(fn), 1)
      } else {
        delete this.handlers[type]
      }
    }
  }
}
