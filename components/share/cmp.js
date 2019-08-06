// components/share/cmp.js
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    openType: String
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
    getUserInfo(e) {
      this.triggerEvent('getUserInfo',e.detail,{})
    }
  }
})
