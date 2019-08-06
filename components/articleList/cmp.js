import { getArticleList } from '../../service/article'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList: Array,
    loadMore: {
      type: String,
      value: '',
      observer: 'loadMore'
    },
    id: {
      type: Number,
      value: 0,
      observer: 'hasMoreData'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    noMore: false,
    loading: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loadMore() {

      console.log(this.data.noMore)
      if(this.data.moMore) {
        return
      } 
      // console.log('test')
      // 加锁
      this.loadLock()
      this.getMoreData()
      
    },
    hasMoreData() {
      this.setData({
        noMore: false
      })
    },
    getMoreData() {
      const start = this.data.articleList.length;
      getArticleList(start).then(res => {
        this.updateData(res)
        // 解锁
        this.unLoadLock()
      })
    },
    // 更新数据
    updateData(res) {
      const combineList = this.data.articleList.concat(res.data.articleList)
      if(combineList.length === this.data.articleList.length) {
        this.setData({
          noMore: true
        })
        return
      }
      this.setData({
        articleList: combineList
      })
    },
    // 网速慢 == 加锁
    loadLock() {
      this.setData({
        loading: true
      })
    },
    // 解锁
    unLoadLock() {
      this.setData({
        loading: false
      })
    }
  }
})
