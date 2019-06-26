const safeAssign = function (target, ...sources) {
  if (isUndefOrNull(target)) throw new Error('can not convert undefined or null to object')
  sources.forEach(source => {
    if (isUndefOrNull(source)) return
    if (isPrimitives(source)) throw new Error('source can not be primitives')
    for (const [k, v] of Object.entries(source)) {
      if (isPrimitives(v)) {
        if (typeof v === typeof target[k] || typeof target[k] === 'undefined') {
          target[k] = v
        }
      } else {
        if (typeof target[k] === 'undefined') {
          target[k] = Object.create(null)
        }
        safeAssign(target[k], v)
      }
    }
  })
  return target
}

function isUndefOrNull (target) {
  return typeof target === 'undefined' || target === null
}

function isPrimitives(target) {
  return typeof target !== 'object'
}


module.exports = safeAssign

