Page({
    data : {
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
                    console.log(value)
                    if(value.states){
                         this.setData({
                             citys : [...this.data.citys,value],
                             n : this.data.citys.length+1
                         })
                    }
                })
            }
        })
    },
})