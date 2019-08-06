class subscribe {
  setSubs(value) {
    wx.setStorageSync('tagList', value)
  }
  getSubs() {
    return wx.getStorageSync('tagList') || []
  }
  removeSubs(tagId) {
    let currentTaglist = this.getSubs()
    let currentIndex = 0

    currentTaglist.forEach((item, index) => {
      if(item.tagId == tagId) {
        currentIndex = index
      } else {
        return 
      }
      currentTaglist.splice(currentIndex, 1)

      this.setSubs(currentTaglist)
    })
  }
}

export { subscribe }
