Page({
  data: {
    notice: "📢 欢迎来到装修设计展示小程序！",

    swiperList: [
      "/images/swiper1.jpg",
      "/images/swiper2.jpg",
      "/images/swiper3.jpg"
    ],

    cardList: [
      {
        img: "/images/yg1.jpg",
        title: "定制衣柜",
        address: "北京市朝阳区北三环XX街道XX路88号XX大厦XX室",
        desc: "材质：实木 施工注意事项好好好好好好好好好好好好好好好好好好哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
        maxArea: 9.2,
        completedArea: 3.2,
        workDays: 12,
        endDate: "2025-01-28"
      },
      {
        img: "/images/yg1.jpg",
        title: "电视柜",
        address: "广东省广州市番禺区桥南街XX街道XX花园23栋103",
        desc: "材质：实木 施工注意事项好好好好好好好好好好好好好好好好好好哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
        maxArea: 5.1,
        completedArea: 1.2,
        workDays: 8,
        endDate: "2025-01-20"
      },
      {
        img: "/images/yg1.jpg",
        title: "全屋定制",
        address: "广东省广州市番禺区桥南街XX街道XX花园23栋103",
        desc: "材质：实木 施工注意事项好好好好好好好好好好好好好好好好好好哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
        maxArea: 35.1,
        completedArea: 11.5,
        workDays: 8,
        endDate: "2025-01-20"
      }
    ]
  },
  onLoad() {
    // 预处理：增加 truncatedAddress 字段（最多 15 字符）并保护 undefined
    const processed = (this.data.cardList || []).map(item => {
      const addr = (item.address || "").toString();
      const max = 15;
      const truncated = addr.length > max ? addr.slice(0, max) + "..." : addr;
      return {
        ...item,
        truncatedAddress: truncated || "地址未填写"
      };
    });

    this.setData({ cardList: processed });
  }
});
