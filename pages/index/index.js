import { decideStatus, ipconfig} from '../../utils/util.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [],
    swiperList: [],
    videoList: [],
    //Tab索引
    currentIndexNav: 0
  },

  /**
   * 获取界面列表数据
   */
  getCountList(){
    let obj = this;
    wx.request({
      url: 'http://' + ipconfig +':9999/getBiliBiliNavList',
      method: 'post',
      success(res){
        decideStatus(res , response => {
          obj.setData({
            navList: response.list
          });
        });
      }
    })
  },

  /**
   * 首页Tab点击
   */
  activeNav(e){
    this.setData({
      currentIndexNav: e.target.dataset.index
    });
  },

  /**
   * 获取论播图数据
   */
  getSwiperList(){
    let obj = this;
    wx.request({
      url: 'http://' + ipconfig +':9999/getBiliBiliSwiperList',
      method: 'post',
      success(res) {
        decideStatus(res, response => {
          obj.setData({
            swiperList: response.list
          });
        });
      }
    })
  },
  
  /**
   * 获取视频列表数据
   */
  getVideoList(){
    let obj = this;
    wx.request({
      url: 'http://' + ipconfig +':9999/getBiliBiliSwiperList',
      method: 'post',
      success(res) {
        decideStatus(res, response => {
          obj.setData({
            swiperList: response.list
          });
        });
      }
    })
  },

  /**
   * 获取视频列表数据
   */
  getVideoList() {
    let obj = this;
    wx.request({
      url: 'http://' + ipconfig +':9999/getBiliBiliVideoList',
      method: 'post',
      success(res) {
        decideStatus(res, response => {
          obj.setData({
            videoList: response.list
          });
        });
      }
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCountList();
    this.getSwiperList();
    this.getVideoList();
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