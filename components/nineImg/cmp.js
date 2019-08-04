import { behavior } from '../behavior/index';

Component({
  behaviors: [ behavior ],
  properties: {
   
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgList: ['https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=180868167,273146879&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=508387608,2848974022&fm=26&gp=0.jpg',
    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4099762989,3252607071&fm=26&gp=0.jpg',
    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1409224092,1124266154&fm=26&gp=0.jpg',
    'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1734221205,4211923994&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=167219548,1510840028&fm=26&gp=0.jpg',
    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1548896602,3212907422&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3925233323,1705701801&fm=26&gp=0.jpg',
    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4099762989,3252607071&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=167219548,1510840028&fm=26&gp=0.jpg',
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handlePreview: function(e) {
      const imgList = this.data.imgList
      const currentIndex = e.currentTarget.dataset.index
      wx.previewImage({
        current: imgList[currentIndex],
        urls: imgList,
      })
    }
  }
})
