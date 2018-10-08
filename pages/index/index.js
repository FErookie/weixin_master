// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    boolValue : true,
    demoMessage : "这是一个简单的示例数据 事实上是可以使用热加载的",
    length : 20
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("这是一个在加载时使用的函数");
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
    console.log("这个显示的函数在什么时候调用呢？");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("让我们看一下hide 函数的调用时间");
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
    console.log("用户点击了右上角的分享按钮");
  },

  findHide : function (){
    this.setData({
      boolValue : !this.data.boolValue
    })
  }
})