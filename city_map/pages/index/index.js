//index.js
//获取应用实例
const app = getApp()
import { getCityList } from '../../utils/net.js'
Page({
  data: {
     list : [] , //城市数据
     indexer : 0 , //数据截取坐标
     address : [] , //右侧地区渲染
     adrarr : [] , //地区样式渲染数据
  },
  
  onLoad: function () {
   
  },
  onShow(){
     wx.showLoading({
       title : '数据加载中... ...',
     })
     getCityList()
     .then(res=>{
       console.log('-------res',res)
       this.setData({
         list : res.data.provinces,
         address : res.data.provinces.slice(0,1)[0].citys
       } , ()=>{
         wx.hideLoading()
       } )
     })
  },
  click(e){
    let indexe=e.currentTarget.dataset.index;
    this.setData({
      address : this.data.list.slice(indexe,indexe+1)[0].citys,
      indexer : indexe ,
      adrarr : [] , //清空坐标数据
    })
  },
  clickadr(e){
    let adrindexer=e.currentTarget.dataset.index; //点击地区时的该坐标
    if(this.data.adrarr.indexOf(adrindexer)==-1){ //合成地区样式显示数组
      this.setData({
        adrarr : [...this.data.adrarr,adrindexer] ,
      })
    }
  }
})
