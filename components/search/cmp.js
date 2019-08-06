// components/search/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    value: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSearch() {
      const value = this.data.value
      if(value != '读书') {
        wx.showToast({
          title: '目前只支持读书搜索~',
          icon: 'none'
        })
        return
      }
      if(value === '') {
        return
      }
      wx.navigateTo({
        url: `/pages/search/index?searchWord=${value}`
      })
    },
    onBlur(e) {
      this.setData({
        value: e.detail.value
      })
    }
  }
})
