var baseUrl = require("../config/project.config.js")

function request(params) {
  wx.request({
    url: baseUrl + params.url,
    success: function(res) {
      console.log(res)
      if(res.data.code == 200) {
        params.success(res.data)
      } else {
        showErrMsg()
      }
    },
    fail: function() {
      showErrMsg()
    }
  })
}

function showErrMsg() {
  wx.showToast({
    title: "请求错误",
    icon: "none" 
  })
}

module.exports = request