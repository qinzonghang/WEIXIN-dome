var e = function(e) {
    return (e = e.toString())[1] ? e : "0" + e;
};

module.exports = {
    formatTime: function(t) {
        var n = t.getFullYear(), r = t.getMonth() + 1, o = t.getDate(), i = t.getHours(), u = t.getMinutes(), m = t.getSeconds();
        return [ n, r, o ].map(e).join("/") + " " + [ i, u, m ].map(e).join(":");
    },
    arrayContains: function(e, t) {
        for (var n in e) if (e[n] === t) return !0;
        return !1;
    },
    getRand: function(e) {
        return e < 5 ? new Number((100 * e / 650).toFixed(1)) + 10 : e >= 5 && e < 10 ? new Number((100 * e / 650).toFixed(1)) + 30 : e >= 10 && e < 20 ? new Number((100 * e / 650).toFixed(1)) + 50 : e >= 20 && e <= 25 ? new Number((100 * e / 650).toFixed(1)) + 60 : e > 25 && e <= 30 ? new Number((100 * e / 650).toFixed(1)) + 70 : e > 30 && e < 35 ? new Number((100 * e / 650).toFixed(1)) + 80 : e >= 35 && e < 40 ? new Number((100 * e / 650).toFixed(1)) + 85 : e >= 40 && e < 65 ? new Number((100 * e / 650).toFixed(1)) + 90 : e >= 65 ? 99.9 : void 0;
    }
};