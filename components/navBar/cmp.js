// components/navBar/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    articleTypeList: ['青芒','兴趣','技术','时尚','萌宠','恋爱'],
    currentIndex: 0,
    activeId: 'id0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSelect(e) {
      const currentIndex = this.data.currentIndex
      const activeIndex = e.currentTarget.dataset.index
      this.setData({
        currentIndex: activeIndex,
        activeId: `id${activeIndex == 0 ? 0 : activeIndex - 1}`
      })
      if(currentIndex == activeIndex) {
        return
      }

      this.triggerEvent("nav", {
        activeIndex
      },{})
    }
    
  }
})
