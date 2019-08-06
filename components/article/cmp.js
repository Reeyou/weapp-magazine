import { like } from '../../service/like'
const Like = new like()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleDetail: Object,
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeStatus: false
  },

  /**
   * 组件的方法列表
   */
  attached() {
    this.getLikeStatus()
  },
  methods: {
    onLike(e) {
      const isLike = e.detail.like
      const articleDetail = this.data.articleDetail

      let likeList = Like.getLikeList()
      if(isLike) {
        likeList.unshift(articleDetail)
        Like.setLikeList(likeList)
      } else {
        Like.removeLikeList(articleDetail.artId)
      }
    },
    getLikeStatus() {
      const likeList = Like.getLikeList()
      const artId = this.data.articleDetail.artId
      let isLike = false

      likeList.forEach((item, index) => {
        if(item.artId == artId) {
          isLike = true
        }
      })
      this.setData({
        likeStatus: isLike
      })
    }
  }
})
