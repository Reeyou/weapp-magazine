// pages/mine/index.js
Page({
  
  data: {
    userInfo: {},
    authrized: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success: (res) => {
        if(res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.setData({
                userInfo: res.userInfo,
                authrized: true
              })
            },
          })
        }
      }
    })
  },
  getUserInfo(e) {
    const userInfo = e.detail.userInfo
    console.log(userInfo)

    if(userInfo) {
      this.setData({
        userInfo: userInfo,
        authrized: true
      })
    }
  }

})