// pages/mine/index.js
import { like } from '../../service/like'
const Like = new like()
Page({
  
  data: {
    userInfo: {},
    authrized: false,
    likeList: []
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
              this.getLikeList()
            },
          })
        }
      }
    })
  },
  onShow() {
    this.getLikeList()
  },
  getUserInfo(e) {
    const userInfo = e.detail.userInfo

    if(userInfo) {
      this.setData({
        userInfo: userInfo,
        authrized: true
      })
    }
  },
  getLikeList() {
    const likeList = Like.getLikeList('likeList')

    this.setData({
      likeList
    })
  }

})