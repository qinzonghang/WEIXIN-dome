// 获取网络请求
export let getCityList = ()=>{
    return new Promise((resolve, reject)=>{
        wx.request({
          url: 'https://mock.jasonandjay.com/mock/5b5fb5947a32f77e39e46a2c/example/city',
            success: (res)=>{
                resolve(res.data);
            },
            fail: (error)=>{
                reject(error);
            }
        })
    })
}