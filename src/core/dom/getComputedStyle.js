/**
 * 获取dom的style
 * @param {HTMLElement} dom - dom
 * @param {string} property - 属性名
 */
export default function(dom, property) {
  return window.getComputedStyle(dom)[property]
}