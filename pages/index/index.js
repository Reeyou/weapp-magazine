// pages/list/index.js
import { getArticleList, getRecommendById, getTagType} from '../../service/article'
import randomStr from '../../utils/randomStr'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommend: {},
    tagList: [],
    articleList: [],
    loadMore: '',
    windowHeight: 0,
    id: 1
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHomeData()
    this.getIsLikeData()
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowHeight: res.windowHeight
        })
      },
    })
  },
  onNav(e) {
    const id = e.detail.activeIndex

    this.setData({
      id: id,
      recommend: {},
      tagList: [],
      articleList: [],
    })
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 400
    })
    this.getHomeData(id)
  },
  toCatelog() {
    wx.switchTab({
      url: '/pages/catelog/index',
    })
  },
  onPullDownRefresh: function () {
    console.log('pull down refresh')
  },
  toBottom() {
    this.setData({
      loadMore: randomStr(20)
    })
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
  getHomeData: function(magazineId) {
    Promise.all([getArticleList(0,magazineId), getRecommendById(magazineId), getTagType(magazineId)]).then(res => {
      console.log(res)
      this.setData({
        articleList: res[0].data.articleList,
        recommend: res[1].data,
        tagList: res[2].data.tagList,
      })
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