Page({
    data : {
        song : {},
        action :'',
        progress : 0 ,
        precentInter : null,
        constart : true,
        constop : false,
        index : 0,
        list : [],
        switcher : true
    },
    onLoad(options){
         this.index=options.index
    },
    onShow(){
        let list = wx.getStorageSync('list');
        console.log('----details-index',this.index)
        this.setData({
            song:list[this.index],
            index : this.index,
            list : list
        })
    },
    onReady: function (e) {
       
      },
    //点击播放
    audioPlay: function () {
        if(this.data.switcher){
            return
        }
        this.setData({
            progress : 0,
            constart : false,
            constop : true
        })
        this.audioCtx = wx.createInnerAudioContext()
        this.audioCtx.autoplay = true
        this.audioCtx.src = this.data.song.src
        this.audioCtx.onPlay(()=>{
            let precentIntersd=  setInterval(()=>{
                console.log('----duration',this.audioCtx.duration,this.audioCtx.currentTime)
                this.setData({
                    progress : parseInt((this.audioCtx.currentTime / this.audioCtx.duration) * 100)
                })
            },100)
            this.setData({
                precentInter : precentIntersd
            })
        })
        this.setData({
            action : 'action'
        }) 
      },
      //点击暂停
      audioPause: function () {
        if(this.data.switcher){
            return
        }
        this.audioCtx.pause()
        this.setData({
            action : '',
            constart : true ,
            constop : false
        })
        clearInterval(this.data.precentInter)
      },
      //点击上一曲
      topTo: function () {
          this.setData({
              switcher : false
          })
          if(this.data.index<=0){
              return
          }
          let indextop= this.data.index*1-1*1;
          console.log('-------indextop',indextop)
          this.setData({
              song : this.data.list[indextop],
              index : indextop
          })
      },
      //点击下一曲
      lastTo(){
        this.setData({
            switcher : false
        })
          let listlength=this.data.list.length;
          if(this.data.index>listlength){
              return
          }
          let indexlast = this.data.index*1+1*1;
          this.setData({
              song : this.data.list[indexlast],
              index : indexlast
          })
      }
})