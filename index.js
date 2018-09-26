export default function transform (node) {
  function get () {
    let t = getComputedStyle(node).transform

    return (t !== 'none' ? (
      t.match(/-*\d[\.\d]*/g).map(parseFloat)
    ) : (
      [1, 0, 0, 1, 0, 0]
    ))
	}

  let t = get()
  const c = t.slice(0)

  return {
		translateX (val = 0) {
    	c[4] = t[4] + val
		},
    translateY (val = 0) {
    	c[5] = t[5] + val
		},
    reset () {
    	c[4] = t[4]
      c[5] = t[5]
     },
    update () {
    	t = get()
    },
    toString () {
    	return `matrix(${c.join(',')})`
		}
	}
}
