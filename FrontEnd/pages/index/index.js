import { API_BASE_URL } from '../../utils/config.js'; // 路径根据实际文件位置调整

Page({
  data: {
    notice: "📢 欢迎来到装修设计展示小程序！",

    swiperList: [
      "/images/swiper1.jpg",
      "/images/swiper2.jpg",
      "/images/swiper3.jpg"
    ],
    // cardList: [
    //   {
    //     id: 1,
    //     img: "/images/yg1.jpg",
    //     title: "定制衣柜",
    //     address: "北京市朝阳区北三环XX街道XX路88号XX大厦XX室",
    //     projectCode: "BJ20250101001",
    //     maxArea: 9.2,
    //     completedArea: 3.2,
    //     workDays: 12,
    //     endDate: "2025-01-28"
    //   },
    //   {
    //     id: 2,
    //     img: "/images/yg1.jpg",
    //     title: "电视柜",
    //     address: "广东省广州市番禺区桥南街XX街道XX花园23栋103",
    //     projectCode: "GD20250104001",
    //     maxArea: 5.1,
    //     completedArea: 1.2,
    //     workDays: 8,
    //     endDate: "2025-01-20"
    //   },
    //   {
    //     id: 3,
    //     img: "/images/yg1.jpg",
    //     title: "定制墙面",
    //     address: "四川省成都市双流区桥南街XX街道XX花园23栋103",
    //     projectCode: "SC20250103001",
    //     maxArea: 8.3,
    //     completedArea: 1.2,
    //     workDays: 8,
    //     endDate: "2025-01-20"
    //   },
    //   {
    //     id: 4,
    //     img: "/images/yg1.jpg",
    //     title: "全屋定制",
    //     address: "广东省广州市番禺区桥南街XX街道XX花园23栋103",
    //     projectCode: "GD20250522001",
    //     maxArea: 35.1,
    //     completedArea: 0,
    //     workDays: 8,
    //     endDate: "2025-09-20"
    //   }
    // ]
    cardList: []
  },
  /**
   * 生命周期函数--监听页面加载
   */  
  onLoad(){
    // 页面加载时请求接口
    this.loadProjects();
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.loadProjects();
  },

  loadProjects() {
    const that = this;
    wx.request({
      url: API_BASE_URL + 'projects', // 使用全局变量
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      success(res) {
        if (res.statusCode === 200) {
          that.setData({
            cardList: res.data
          });
        } else {
          wx.showToast({
            title: '加载失败',
            icon: 'none'
          });
        }
      },
      fail(err) {
        wx.showToast({
          title: '请求错误',
          icon: 'none'
        });
        console.error(err);
      }
    });
  },
  goToDesc(event){
    const id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/constructiondescription/constructiondescription?projectId=${id}`,
      
    })
  }
});


