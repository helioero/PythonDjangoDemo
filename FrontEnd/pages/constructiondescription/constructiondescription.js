import { API_BASE_URL } from '../../utils/config.js'; // 全局接口变量
Page({

  /**
   * 页面的初始数据
   */
  data: {
    project: null,  // 存储项目详情
    loading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const projectId = options.projectId;
    if (projectId) {
      this.loadProjectDetail(projectId);
    }
  },

  /**
   * 加载项目详情数据
   */

  loadProjectDetail(projectId) {
    const that = this;
    wx.request({
      url: `${API_BASE_URL}project/${projectId}/`,
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      success(res) {
        if (res.statusCode === 200) {
          that.setData({
            project: res.data,
            loading: false
          });
        } else {
          wx.showToast({ title: '加载失败', icon: 'none' });
          that.setData({ loading: false });
        }
      },
      fail(err) {
        wx.showToast({ title: '请求错误', icon: 'none' });
        console.error(err);
        that.setData({ loading: false });
      }
    });
  }
})