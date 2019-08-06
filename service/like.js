class like {
  getLikeList() {
    const likeList = wx.getStorageSync('likeList') || []
    return likeList
  }
  setLikeList(val) {
    const likeList = val
    wx.setStorageSync('likeList',likeList)
  }
  removeLikeList(artId) {
    const likeList = this.getLikeList()
    let myIndex = 0

    likeList.forEach((item, index) => {
      if(item.artId == artId) {
        myIndex = index
        return
      }
    })
    likeList.splice(myIndex, 1)
    
    this.setLikeList(likeList)
  }
}

export { like }