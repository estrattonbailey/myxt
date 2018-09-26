# merge-transform

```javascript
import transform from 'merge-transform'

const box = transform(DOMNode)

box.style.transform = 'translateY(50px)'

box.translateY(100)
box.translateX(100)

box.toString() // matrix(1, 0, 0, 1, 100, 150)
box.reset()
box.toString() // matrix(1, 0, 0, 1, 0, 50)
```

MIT
