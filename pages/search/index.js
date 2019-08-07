// pages/search/index.js
import { searchRecommend, searchArticleList } from '../../service/search'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchWord: '',
    articleList: [],
    recommend: [],
    tag: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    // console.log(options.searchWord.toString())
    const searchWord = options.searchWord
    this.setData({
      searchWord
    })
    this.getData(searchWord)
    console.log(this.data.articleList)
  },
  getData(word) {
    Promise.all([searchRecommend(word), searchArticleList(word,0)]).then(res => {
      console.log(res[0])
      this.setData({
        tag: res[0].data.tag,
        recommend: res[0].data.recommend,
        articleList: res[1].data
      })
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