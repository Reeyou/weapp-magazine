// pages/list/index.js
var request = require('../../utils/request')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommend: {},
    tagList: [],
    articleList: [],
    imgList: ['https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=180868167,273146879&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=508387608,2848974022&fm=26&gp=0.jpg',
    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4099762989,3252607071&fm=26&gp=0.jpg',
    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1409224092,1124266154&fm=26&gp=0.jpg',
    'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1734221205,4211923994&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=167219548,1510840028&fm=26&gp=0.jpg',
    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1548896602,3212907422&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3925233323,1705701801&fm=26&gp=0.jpg',
    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4099762989,3252607071&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=167219548,1510840028&fm=26&gp=0.jpg',
    ],
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
    var tag = e.currentTarget.dataset.tag
    wx.showActionSheet({
      itemList: ['内容过期了', '内容与'+ tag + '不匹配', '不再显示来自'+ tag +'的内容'],
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
    request({
      url: '/articleList',
      success: function(res) {
        that.setData({
          tagList: res.data.tagList,
          recommend: res.data.recommend,
          articleList: res.data.articleList
        })
      }
    })
  },
  handleArticleType: function(e) {
    var typeId = e.currentTarget.dataset.articletypeid
    
    wx.navigateTo({
      url: '/pages/type/type?typeId=' + typeId,
    })
  },
  toArticleDetail: function(e) {
    var artId = e.currentTarget.dataset.artid
    console.log(artId)
    wx.navigateTo({
      url: '/pages/articleDetail/index?artId=' + artId,
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