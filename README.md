# RecordBin JS

[![npm version](https://badge.fury.io/js/recordbin.svg)](https://badge.fury.io/js/recordbin)
[![CircleCI](https://circleci.com/gh/recordbinco/recordbin-js.svg?style=svg)](https://circleci.com/gh/recordbinco/recordbin-js)

Javascript Client for [RecordBin](http://www.github.com/recordbinco/recordbin-api)


## Installing

```
npm install recordbin
```

### Usage

```js
const RecordBin = require('recordbin')

const serverUrl = 'http://api.recordbin.co'
const appToken = '7419a34711c3b15b1d8793ef6221e2b080e6944c'
const bin = RecordBin(serverUrl, appToken)
bin.post({username: 'gtalarico', data: 'test'})
.then(
  function(data) {
    console.log(data)
})
```

## License

[MIT](https://opensource.org/licenses/MIT)
