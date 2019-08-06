import { subscribe } from '../../service/subscribe'
const Subscribe = new subscribe()

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
    class: 'common',
    initTagList: []
  },

  attached() {
    this.initTag()
  },
  methods: {
    onSubscribe() {
      const tagInfo = {
        tag: this.properties.tag,
        tagId: this.properties.tagId
      }

      if(this.data.class == 'common') {

        const newTagInfo = Subscribe.getSubs()

        newTagInfo.push(tagInfo)
        Subscribe.setSubs(newTagInfo)
      } else {
        Subscribe.removeSubs(tagInfo.tagId)
      }

      this.toggleClass()
      this.triggerEvent('subscribe')
    },
    initTag() {
      const initTagList = this.getTagClass()

      initTagList.forEach((item, index) => {
        if(item.tagId == this.properties.tagId) {
          this.setData({
            class: 'subscribe'
          })
        }
      })
    },
    getTagClass() {
      const initTagList = Subscribe.getSubs()

      this.setData({
        initTagList
      })

      return initTagList;

    },
    toggleClass() {
      let className = ''

      if(this.data.class == 'common') {
        className = 'subscribe'
      } else {
        className = 'common'
      }
      this.setData({
        class: className
      })
    }
  }
})
