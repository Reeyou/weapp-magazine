// components/recommend/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommend: Object,
    id: Number
  },

  attached() {
    this.getDate()
  },
  data: {
    date: '',
    articleTypeList: ['青芒','兴趣','技术','时尚','萌宠','恋爱'],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getDate() {
      const monthArr = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"]
      const dayArr = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "二十一", "二十二", "二十三", "二十四", "二十五", "二十六", "二十七", "二十八", "二十九", "三十", "三十一"]
      const month = monthArr[new Date().getMonth()]
      const day = dayArr[new Date().getDate() - 1]

      const date = `${month}月${day}日`
      this.setData({
        date: date
      })
    }
  }
})
