// pages/list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommend: {},
    labelTypeList: [],
    articleList: [],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHomeData()
    this.getIsLikeData()
  },
  // 更多点击事件
  handleOnMore: function(e) {
    var articleType = e.currentTarget.dataset.articletype
    console.log(articleType)
    wx.showActionSheet({
      itemList: ['内容过期了', '内容与'+ articleType + '不匹配', '不再显示来自'+ articleType +'的内容'],
      success (res) {
        console.log(res.tapIndex)
      },
      fail (res) {
        console.log(res.errMsg)
      }
    })
  },
  // 分享点击事件
  handleOnShare: function() {
    console.log("share")
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  // 喜欢点击事件
  handleOnLike: function(e) {
    var index = e.currentTarget.dataset.articlelike
    var newListLike = this.data.listLike
    var isLike = newListLike[index]
    newListLike[index] = !isLike

    this.setData({
      listLike: newListLike
    })
    wx.setStorageSync('listLike', newListLike)
  },
  // 获取当前缓存数据
  getIsLikeData: function() {
    var listLikeStorage = wx.getStorageSync('listLike')
    if(!listLikeStorage) {
      listLikeStorage = {}
    }
    this.setData({
      listLike: listLikeStorage
    })
  },
  // 获取首页数据
  getHomeData: function() {
    var that = this
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d42a3d86d19b61b4096908e/magazine/home',
      success: function(res){
        console.log(res.data.data.labelType)
        that.setData({
          labelList: res.data.data.labelType,
          recommend: res.data.data.recommend,
          articleList: res.data.data.articleList
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