//index.js
//获取应用实例
//const app = getApp()

Page({
  data: {
    Height: 0,
    scale: 6, //缩放
    latitude: 23.099994, //中心维度
    longitude: 113.324520,//中心经度
  },
  onLoad: function () {
    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        //设置map高度，根据当前设备宽高满屏显示
        _this.setData({
          view: {
            Height: res.windowHeight
          }
        })
      }
    })
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
      console.log('---------res',res)
        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        })
      }
    })
  },
})
