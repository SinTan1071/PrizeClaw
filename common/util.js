const crypto = require('crypto')

// 字典序排列
exports.kSort = (data) => {
    var tmp = {},
        keys = Object
            .keys(data)
            .sort()
    for (var i = 0, n = keys.length, key; i < n; ++i) {
        key = keys[i]
        tmp[key] = data[key]
    }
    return tmp
}
// 获取微信对接验签临时字符串
exports.getTmpString = (obj) => {
    var tmp = ''
    for (var k in obj) {
        tmp += k + obj[k]
        // tmp += '&' + k + '=' + obj[k]
    }
    return tmp
}
// 获取微信的签名
exports.makeSign = (str) => {
    var hasher = crypto.createHash("sha1");
    var sign = hasher
        .update(str)
        .digest('hex')
        .toString()
    console.log("加密后的字符串", sign)
    return sign
}
// 获取当前时间戳
exports.getTimeStamp = () => {
    var timestamp = Date.parse(new Date())
    return timestamp
}