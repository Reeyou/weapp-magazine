
import { behavior } from '../behavior/index';

Component({
  behaviors: [ behavior ],
  properties: {
   src: String,
   poster: String,
   duration: String,
   videoId: String,
  },
  // observers: {
  //   "isShow": function() {
  //     this.isHidden()
  //   }
  // },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlayVideo: function() {
      this.isShow()
  
      var id = this.properties.videoId
      var myVideo = wx.createVideoContext(id, this)
      myVideo.play()
    },
    onEndVideo: function() {
      this.isShow()
    },
    isShow: function() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    // isHidden: function() {
      // var id = this.properties.videoId
      // console.log(id)
      // var that = this
      // wx.createIntersectionObserver().relativeToViewport().observe('#video', (res) => {
      //   console.log(res.intersectionRect.top)
      //   if(res.intersectionRect.top < 0) {
      //     that.isShow()
      //   }
      // })
    // }
  }
})
