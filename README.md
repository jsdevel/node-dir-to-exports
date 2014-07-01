# node-dir-to-exports [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]
> Assign and require filenames in a directory to exports using a glob pattern.

## Example

Consider this directory `some-dir`:
```
some-dir/
  |
  |index.js
  |foo.js
  |zoo/
    |
    |chimps.js
    |zebras.js
```

```javascript
require('dir-to-exports')('./some-dir/**/*.js');

console.log('some-dir' in module.exports); //=> true
console.log('foo' in module.exports); //=> true
console.log('chimps' in module.exports); //=> true
console.log('zebras' in module.exports); //=> true
```

##LICENSE
``````
The MIT License (MIT)

Copyright (c) 2014 Joseph Spencer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
``````

[downloads-image]: http://img.shields.io/npm/dm/node-dir-to-exports.svg
[npm-url]: https://npmjs.org/package/node-dir-to-exports
[npm-image]: http://img.shields.io/npm/v/node-dir-to-exports.svg

[travis-url]: https://travis-ci.org/jsdevel/node-dir-to-exports
[travis-image]: http://img.shields.io/travis/jsdevel/node-dir-to-exports.svg

[coveralls-url]: https://coveralls.io/r/jsdevel/node-dir-to-exports
[coveralls-image]: http://img.shields.io/coveralls/jsdevel/node-dir-to-exports/master.svg
