// pages/boss/boss.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  php: function () {
    wx.setStorageSync('name', 'PHP');
    wx.navigateTo({
      url: '../PHP_content/PHP_content'
    })
  },
  ui: function () {
    wx.setStorageSync('name', 'UI');
    wx.navigateTo({
      url: '../PHP_content/PHP_content'
    })
  },
  product: function () {
    wx.setStorageSync('name', 'PRO');
    wx.navigateTo({
      url: '../PHP_content/PHP_content'
    })
  },
  resurse: function () {
    wx.setStorageSync('name', 'RE');
    wx.navigateTo({
      url: '../PHP_content/PHP_content'
    })
  },
  market: function () {
    wx.setStorageSync('name', 'MA');
    wx.navigateTo({
      url: '../PHP_content/PHP_content'
    })
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

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})