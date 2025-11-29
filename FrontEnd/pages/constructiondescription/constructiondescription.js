// pages/constructiondescription/constructiondescription.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    desc: [{
      id: 1,
      projectId: 1,
      desc_text: "组装定制衣柜",
      materialsAreReady: true,
      area: 4.8
    },
    {
      id: 2,
      projectId: 1,
      desc_text: "安装灯条",
      materialsAreReady: true,
      area: 0.2
    }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const id = options.id;

    // 根据 ID 查找工程详情（从本地或接口)
    const allData = wx.getStorageSync('cardList') || [];

    const desc = allData.find(item => item.id == id);

    if (desc) {
      this.setData({
        desc
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})