import baseUrl from "../config/project.config.js"

export default function request(url, options={}) {
    const newOptions = [...options]
      return new Promise( (resolve, reject) => {
          wx.request({
              url: baseUrl + url,
              method: newOptions.method || 'GET',
              data: newOptions.body || '',
              success: res => {
                  if(res.data.code == 200) {
                      resolve(res.data)
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