var baseUrl = require("../config/project.config.js")

function request(url, {method='GET', data={}}) {
      return new Promise( (resolve, reject) => {
          wx.request({
              url: baseUrl + url,
              method: method,
              data: data,
              success: res => {
                  if(res.data.code == 200) {
                      resolve(res.data.data)
                  } else {
                      _showError()
                  }
                  
              },
              fail: err => {
                  reject()
                  _showError()
              }
          })
      })
  }


function _showError() {
    wx.showToast({
        title: "请求错误",
        icon: "none"
    })
}

export default request;