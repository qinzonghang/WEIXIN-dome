import echarts from '../../ec-canvas/echarts'

import  '../../ec-canvas/china.js'

import mapData from './mapData.js'

function setOption(chart,data) { //地图配置部分
  
    const option = {
        textStyle : {
          fontStyle: 'oblique'
        },
        geo : {
            map: 'china',
            zoom: 1.2, //地图的缩放
            label : {
              show : true ,//省份名显示
              color: '#666',//文字颜色
              fontSize : 8
            } 
        },
        series: [{
            name: 'map',
          type: 'scatter',
            coordinateSystem: 'geo',
            
            itemStyle: {
                normal: {
                    color: 'red'
                }
            },
            data: data
        }],
    };
    chart.setOption(option);
    
  }

Page({
    data : {
        ec: {
            lazyLoad: true
          },
       list : [] ,
       province : [] , //省份
       m : 0 , //省份个数
       citys : [] , //城市
       n : 0 , //城市个数
    },
    onLoad(options){ //接受数据
        this.setData({
            list : JSON.parse(options.list)
        })
    },
    onShow(){
        this.data.list.forEach((item,index)=>{
            if(item.n>0){ //省份
                this.setData({
                    province : [...this.data.province,item],
                    m : this.data.province.length+1
                })
                item.citys.forEach((value,key)=>{ //城市
                    if(value.states){
                         this.setData({
                             citys : [...this.data.citys,value],
                             n : this.data.citys.length+1
                         })
                    }
                })
            }
        })

        //echart 地图部分
        this.ecComponent = this.selectComponent('#mychart-dom-bar');
        this.ecComponent.init((canvas, width, height) => {
            // 获取组件的 canvas、width、height 后的回调函数
            // 在这里初始化图表
            const chart = echarts.init(canvas, null, {
                width: width,
                height: height
            });
            canvas.setChart(chart);
            let data = [] //需要传参的数据
            this.data.province.forEach((item,index)=>{
                mapData.forEach((value,key)=>{
                    if(value.name==item.provinceName){
                        data = [...data,value.cp]
                    }
                })
            })
            //let data= [[109.9512,19.2041]] //需要传参的数据
            setOption( chart, data );

            // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
            this.chart = chart;
            // 注意这里一定要返回 chart 实例，否则会影响事件处理等
            return chart;
        });
        
    },
})