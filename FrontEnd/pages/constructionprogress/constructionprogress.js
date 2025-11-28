// pages/constructionprogress/constructionprogress.js
Page({
  data: {
    user: {
      avatar: "/images/avatar.png",
      name: "张三",
      phone: "13812345678",
      todayHours: 8,
      todayArea: 12.5,
      acceptedArea: 30,
      unacceptedArea: 12
    },

    work: {
      image: "/images/yg1.jpg",
      code: "GC20250108",
      address: "北京市朝阳区建国门外大街8号SOHO大厦",
      area: 20,
      finishTime: "2025-01-10",
      status: "待验收"  // 待审核 / 待验收 / 已验收
    }
  },

  onLoad() {
    // 手机号脱敏
    const phone = this.data.user.phone;
    const masked = phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");

    // 状态颜色
    const status = this.data.work.status;
    let color = "#000";   // 预设黑色

    if (status === "待审核") color = "#000";        // 黑色
    if (status === "待验收") color = "#E6A200";    // 黄色
    if (status === "已验收") color = "#3CB371";    // 绿色

    this.setData({
      maskedPhone: masked,
      statusColor: color
    });
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