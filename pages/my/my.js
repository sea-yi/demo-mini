// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userItemList:['我的测评','我的咨询','我的回答','我的通知','课程收藏'],
    userItemList2:['绑定手机','修改密码','关于我们','退出登录']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  goAboutUs() {
    wx.navigateTo({
      url: '/views/my/aboutUs/aboutUs',
    })
  }
})