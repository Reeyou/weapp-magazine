import {tagInfoList} from "../../utils/tagList.js";
import { subscribe } from '../../service/subscribe'
const Subscribe = new subscribe()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tagInfoList: tagInfoList,
    tagList: [],
    searchWord: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTagList()
  },
  getTagList() {
    const tagList = Subscribe.getSubs('tagList')
    console.log(tagList)
    this.setData({
      tagList: tagList
    })
  },
  onSubscribe() {
    this.getTagList()
  },
  
  onShow: function () {
    this.setData({
      searchWord: ''
    })
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