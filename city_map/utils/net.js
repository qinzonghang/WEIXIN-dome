// 获取网络请求
export let getCityList = ()=>{
    return new Promise((resolve, reject)=>{
        wx.request({
            url: 'https://www.easy-mock.com/mock/5b480d59ae45641f63210b44/example/City',
            success: (res)=>{
                resolve(res.data);
            },
            fail: (error)=>{
                reject(error);
            }
        })
    })
}