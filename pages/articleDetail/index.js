// pages/articleDetail/index.js
var myAudio = wx.getBackgroundAudioManager()
var request = require("../../utils/request")

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    isShow: true,
    imgUrls: ['https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
    'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
    'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
    }],
    isplay: false,
    progressPercent: 0,
    audioCurTime: 0,
    progressWidth: 520,
    progressCircleLeft: 0,
    audioDuration: 400,
    audioCircleStartX: 0,
    audioCircleMoveX: 0,
    audioProgressStartX: 0,
    flag: false,
    progressLeft: 0,
    progressCircleWidth: 20,
    articleDetail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getArticle()
    this.getProgressLeft()
  },
  getArticle: function() {
    var that = this
    request({
      url: '/articleDetail',
      success: function(res) {
        that.setData({
          articleDetail: res.data
        })
      }
    })
  },
  getProgressLeft: function() {
    var that = this
    wx.createIntersectionObserver().relativeToViewport().observe('#progress', (res) => {
      this.setData({
        progressLeft: (res.intersectionRect.left + this.data.progressCircleWidth / 2) * that.getPhoneRadio()
      })
    })
  },
  onVideoTap: function() {
    this.setData({
      isShow: false
    })

    var myVideo = wx.createVideoContext('myVideo')
    myVideo.play()
  },
  onAudioTap: function() {
    var isPlay = this.data.isPlay
    if(!isPlay) {
      this.onAudioPlay()
    } else {
      myAudio.pause()  
    }
    this.setData({
      isPlay: !this.data.isPlay
    })
  },
  onAudioPlay: function() {
    myAudio.title = '此时此刻'
    myAudio.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
    
    this.audioPlay()
    this.audioUpdate()
  },
  audioPlay: function() {
    var that = this
    myAudio.onPause(function() {
      that.setData({
        isPlay: false
      })
    })
    myAudio.onEnded(function() {
      that.setData({
        isPlay: false
      })
    })
    myAudio.onStop(function() {
      that.setData({
        isPlay: false
      })
    })
    myAudio.onPlay(function() {
      that.setData({
        isPlay: true
      })
    })
  },
  audioUpdate: function() {
    var that = this
    myAudio.onTimeUpdate(function() {
      var audioDuration = that.data.audioDuration
      var audioCurTime = myAudio.currentTime.toFixed()
      var progress = audioCurTime / audioDuration
      var progressPercent = (audioCurTime / audioDuration) * 100
      var progressCircleLeft = progress * that.data.progressWidth

      that.setData({
        progressPercent: progressPercent,
        audioCurTime: audioCurTime,
        progressCircleLeft: progressCircleLeft
      })
    })
  },
  onProgressStart: function(e) {
    var audioProgressStartX = e.touches[0].pageX * this.getPhoneRadio()
    if(audioProgressStartX > this.data.progressLeft) {
      var progressWidth = this.data.progressWidth
      var progressCircleLeft = audioProgressStartX - this.data.progressLeft
      var progressPercent = progressCircleLeft / progressWidth
      var audioCurTime = (this.data.audioDuration * progressPercent).toFixed()

      this.onAudioPlay()
      myAudio.seek(Number(audioCurTime))

      this.setData({
        progressCircleLeft: progressCircleLeft,
        progressPercent: progressPercent * 100,
        audioCurTime: audioCurTime
      })
    }
  },
  onAudioCircleStart: function(e) {
    var audioCircleStartX = e.touches[0].pageX * this.getPhoneRadio()
    
    if(!this.data.flag) {
      this.setData({
        audioCircleStartX: audioCircleStartX,
        flag: true
      })
    }
  },
  onAudioCircleMove: function(e) {
    var audioCircleStartX = this.data.audioCircleStartX 
    var audioCircleMoveX = e.touches[0].pageX * this.getPhoneRadio()
    var progressWidth = this.data.progressWidth
    var progressCircleLeft = audioCircleMoveX - audioCircleStartX

    if(progressCircleLeft <= 0) {
      progressCircleLeft = 0
    } else if(progressCircleLeft >= progressWidth) {
      progressCircleLeft = progressWidth
    }

    var progressPercent = progressCircleLeft / progressWidth
    var audioCurTime = (this.data.audioDuration * progressPercent).toFixed()

    this.onAudioPlay()
    myAudio.seek(Number(audioCurTime))
    

    this.setData({
      progressCircleLeft: progressCircleLeft,
      progressPercent: progressPercent * 100,
      audioCurTime: audioCurTime
    })
  },
  getPhoneRadio: function() {
    var radio;
    wx.getSystemInfo({
      success: function(res) {
        var width = res.screenWidth;
        radio = 750 / width
      }
    })
    return radio;
  }
})