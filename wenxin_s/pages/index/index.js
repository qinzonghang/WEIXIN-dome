//index.js
//获取应用实例
const app = getApp();
import { getMusicList } from '../../utils/net.js'

Page({
  data: {
   title:'', //标题
   list : [], //全部数据
   datas : [] ,//初次渲染数据
   index:1
  },
  //事件处理函数
  onShow(){
    wx.showLoading({
      title: '加载中...', //loading开始
    })
    getMusicList()
    .then(res=>{
      console.log('---res',res)
      this.setData({
        title:res.title,
        list:res.songs,
        datas:res.songs.slice(0,8)
      },()=>{
        wx.hideLoading() //loading停止
      })
    })
  },
  //上拉加载
  onPullDownRefresh(){
    wx.showLoading({
      title: '刷新中...'
   })
  setTimeout(()=>{
    wx.hideLoading();
   }, 2000);
  },
  //下拉加载
  onReachBottom(){
    this.setData({
      index: this.data.index+=1,
      datas: this.data.list.slice(0, this.data.index*8)
  })
  },
  click(e){
    console.log('-----e',e)
    let index = e.currentTarget.dataset.index;
    console.log(index)
    wx.setStorageSync('list', this.data.list);
    // 路由跳转
    wx.navigateTo({
      // url: '/pages/detail/detail',
      url: '/pages/details/details?index='+index,
  })
  }
})
