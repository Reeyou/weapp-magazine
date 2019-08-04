// components/tag/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag: String,
    tagId: Number
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function() {
      const tagId = this.properties.tagId
      wx.navigateTo({
      url: `/pages/articleDetail/index?artId=${tagId}`,
    })
    },
    showError: function() {
      wx.showToast({
        icon: "none",
        title: '不支持跳转',
        duration: 1000,
        mask: true
      })
    }

  }
})
