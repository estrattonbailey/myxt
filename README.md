# merge-transform
Merge util for X and Y-axis 2D CSS transforms. **267 bytes gzipped.**

*Does not support `translate3d()` or `matrix3d()` values.*

## Usage
Given a box:
```html
<style>
#box {
  transform: rotate(45deg) translateY(27px);
}
</style>

<div id='box'></div>
```
This library allows you to merge additional `translateY` and `translateX`
values:
```javascript
import tx from 'merge-transform'

const transform = tx(document.getElementById('root'))

transform.translateY(100)
transform.translateX(100)

transform.toString() // matrix(0.707107, 0.707107, 0, 0, -0.707107, 0.707107, 100, 127)
transform.reset()
transform.toString() // matrix(0.707107, 0.707107, 0, 0, -0.707107, 0.707107, 0, 27)
```
Which is helpful for things like parallax libraries.

## License
MIT License (c) 2018 Eric Bailey
