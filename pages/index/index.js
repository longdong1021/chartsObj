// pages/index/index.js
let _page, _this;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inmenu: [
      { 'icon': 'fa-home', 'text': '首页' },
      { 'icon': 'fa-fenlei', 'text': '分类' },
      { 'icon': 'fa-youjian', 'text': '消息' },
      { 'icon': 'fa-dingwei', 'text': '地图' },
      { 'icon': 'fa-jingjiren', 'text': '我的' }
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

  },

  bindSolarChange(e) {
    _page = this;
    _page.setData({
      datepicker: e.detail.value
    })
  },
})