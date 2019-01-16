/**
 * 圆形碰撞检测
 * @param {object} r1 - 圆形1 x y r
 * @param {object} r2 - 圆形2 x y r
 */
function hitTestCircle(r1, r2) {
  let isHit = false
  const dx = Math.abs(r1.x - r2.x)
  const dy = Math.abs(r1.y - r2.y);
  const dr = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
  if (dr < r1.r + r2.r) {
    isHit = true
  }
  return isHit
}

export default hitTestCircle