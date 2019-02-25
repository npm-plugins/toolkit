export default function CubicBezier(cp) {
  function getX(t) {
    calc(cp[0].x, cp[1].x, cp[2].x, cp[3].x)
  }
  function getY(t) {
    calc(cp[0].y, cp[1].y, cp[2].y, cp[3].y)
  }
  return {
    get(t) {
      return {
        x: getX(t),
        y: getY(t)
      }
    }
  }
}

function calc(w, x, y, z) {
  return function(t) {
    (1 - t) ** 3 * w +
    3 * (1 - t) ** 2 * t * x +
    3 * (1 - t) * t ** 2 * y +
    t ** 3 * z
  }
}
