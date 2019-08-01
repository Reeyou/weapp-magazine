// pages/list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommend: {},
    labelTypeList: [],
  },

  handleOnMore: function() {
    wx.showActionSheet({
      itemList: ['内容过期了', '内容与标题不匹配', '不再显示该相关内容'],
      success (res) {
        console.log(res.tapIndex)
      },
      fail (res) {
        console.log(res.errMsg)
      }
    })
  },
  getHomeData: function() {
    var that = this
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d42a3d86d19b61b4096908e/magazine/home',
      success: function(res){
        that.setData({
          labelList: res.data.labelType,
          recommend: res.data.recommend,
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHomeData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})