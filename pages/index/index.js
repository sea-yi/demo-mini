// index.js
// 获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['/images/img1.png', '/images/img2.png', '/images/img3.png'],
    menuImg:[
      {url:'/images/@2x_ceping.png',name:'心理测评'},
      {url:'/images/@2x_yuyue.png',name:'咨询预约'},
      {url:'/images/@2x_dayi.png',name:'心理答疑'},
      {url:'/images/@2x_zhishi.png',name:'心理知识'},
      {url:'/images/@2x_FM.png',name:'FM'},
      {url:'/images/@2x_gongyi.png',name:'公益中心'},
    ],
    articleContent:[
      {url:'/images/article01.png',title:'你活出自我的样子，真美',content:'千百年来，古人总把人的品格与自然之物相联系起来，以花草树木之品性喻人得精神情操'},
      {url:'/images/article02.png',title:'你活出自我的样子，真美',content:'千百年来，古人总把人的品格与自然之物相联系起来，以花草树木之品性喻人得精神情操'},
      {url:'/images/article03.png',title:'你活出自我的样子，真美',content:'千百年来，古人总把人的品格与自然之物相联系起来，以花草树木之品性喻人得精神情操'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  goHotArticlePage() {
    wx.navigateTo({
      url: '/views/hotArtical/hotArtical',
    })
  }
})