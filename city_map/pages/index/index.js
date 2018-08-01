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
       //循环数据添加状态值 states: false
       res.data.provinces.forEach((item,index)=>{
         item.n=0 // 用于点击地方数据计数
         item.citys.forEach((value,key)=>{
           value.states=false
         })
       })
       //赋值
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
    //循环地区数据
    this.data.address.forEach((item,index)=>{
        if(adrindexer==index){
          if(item.states==false){
            item.states=true
            this.data.list[this.data.indexer].n=this.data.list[this.data.indexer].n+1
          }else{
            item.states=false
            this.data.list[this.data.indexer].n=this.data.list[this.data.indexer].n-1
          }
          
        }
    })
    //更新地区数据 address
    this.setData({
      address : this.data.address
    })
    //更新list数据
    this.data.list[this.data.indexer].citys=this.data.address
    this.setData({
      list : this.data.list
    })
  },
  //提交数据跳转地图页面
  Up(){
    let list=JSON.stringify(this.data.list)
    wx.navigateTo({
      url : '../map/map?list='+list ,
    })
  }
})