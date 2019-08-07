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
    articleTypeList: ['兴趣','青芒','恋爱'],
    currentIndex: 1,
    activeId: 'id1'
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
