/**
 * 获取dom的transform值
 * @param {HTMLElement} dom - dom
 * @returns {array} transform属性matrix的数组
 */
export default function(dom) {
  let matrix = null
  const styles = window.getComputedStyle(dom)['transform']
  const matches = styles && styles.match(/^matrix[3]?[d]?\((.+)\)$/)
  if (matches) {
    matrix = matches[1].split(', ')
  }
  return matrix
}