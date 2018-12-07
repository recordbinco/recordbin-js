"use strict"

/**
 * Creates a RecordBin Instance
 * @param {string} serverUrl
 * @param {string} appToken
 * @return {string}
 */

module.exports = function (serverUrl, appToken)  {
  const axios = require("axios")
  const api = axios.create({
    timeout: 5000,
    baseURL: serverUrl,
    headers: {
      "Content-Type": "application/json",
      "Authorization": "AppToken " + appToken
    }
  })

  return {
    post: (data) => {
      return api.post("/api/v1/records/", data)
        .then(
          (response) => {
            return response.data
          })
    }
  }

}


