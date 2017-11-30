const crypto = require('crypto')

export default {
    // 字典序排列
    kSort(data) {
        var tmp = {},
            keys = Object
                .keys(data)
                .sort()
        for (var i = 0, n = keys.length, key; i < n; ++i) {
            key = keys[i]
            tmp[key] = data[key]
        }
        return tmp
    },
    getTmpString(obj) {
        var tmp = ''
        for (var k in obj) {
            tmp += '&' + k + '=' + obj[k]
        }
        return tmp
    },
    makeSign(token, timestamp, str = '') {
        // var timestamp = Date.parse(new Date())
        var tmp = token + timestamp + str
        // console.log(tmp)
        var hasher = crypto.createHash("sha1");
        var sign = hasher
            .update(tmp)
            .digest('hex')
            .toString()
        return sign
    },
    getTimeStamp() {
        var timestamp = Date.parse(new Date())
        return timestamp
    }
}