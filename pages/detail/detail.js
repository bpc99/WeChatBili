// pages/detail/detail.js
import { decideStatus, ipconfig } from '../../utils/util.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo: {},
    videoList: [1, 2, 3, 4, 5, 6]
  },

  /**
   * 获取视频详情
   */
  getVideoInfo(videoId) {
    let obj = this;
    wx.request({
      url: 'http://' + ipconfig +':9999/getBiliBiliVideoInfo',
      method: 'post',
      success(res) {
        decideStatus(res, response => {
          console.log(response.videoInfo);
          obj.setData({
            videoInfo: response.videoInfo
          });
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getVideoInfo(options.id);
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