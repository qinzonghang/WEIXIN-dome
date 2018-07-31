Page({
    data: {
        btntext: " "
    },
    onLoad: function(n) {
        wx.showShareMenu({
            withShareTicket: !0
        });
    },
    onReady: function() {},
    start: function() {
        wx.navigateTo({
            url: "/pages/zuji/zuji"
        });
    },
    tomore: function() {
        wx.navigateToMiniProgram({
            appId: "wx40d15861d0925c04",
            success: function(n) {}
        });
    },
    cavs: function() {
        wx.navigateTo({
            url: "/pages/cavs/cavs"
        });
    },
    showWin: function() {
        this.setData({
            showModalStatus: !0
        });
    },
    doClose: function() {
        this.setData({
            showModalStatus: !1
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "别再说诗和远方了，这些地方你去过吗？",
            path: "/pages/index/index"
        };
    }
});