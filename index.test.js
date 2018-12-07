"use strict"

test("instantiates record", function () {
  const RecordBin = require(".")
  const serverUrl = "http://api.recordbin.co"
  const appToken = "7419a34711c3b15b1d8793ef6221e2b080e6944c"
  const bin = new RecordBin(serverUrl, appToken)

  expect(typeof bin.post === "function")
})

test("sends post", function () {
  const RecordBin = require(".")
  const serverUrl = "http://api.recordbin.co"
  const appToken = "7419a34711c3b15b1d8793ef6221e2b080e6944c"
  const bin = new RecordBin(serverUrl, appToken)

  bin.post({username: "gtalarico", data: "test"})
    .then(
      function(data) {
        expect(data.id && data.data.username === "gtalarico")
      })
})
