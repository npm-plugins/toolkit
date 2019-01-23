export default function(className) {
  if (typeof className === 'object') {
    return className
  }
  return document.querySelector(className)
}