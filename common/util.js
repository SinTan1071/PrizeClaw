const Promise = require('bluebird')
const crypto = require('crypto')
const xml2js = require('xml2js')
const XmlBuilder = new xml2js.Builder(); // JSON->xml
const XmlParser = new xml2js.Parser(); //xml -> json
const request = Promise.promisify(require('request'))

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

// 发起一个promise化的http请求
exports.request = (method, url, data, headers) => {
    var opt = {
        method : method,
        url : url,
        json : true,
        body : JSON.stringify(data),
        headers : headers
    }
    return request(opt).then((response) => {
        // console.log(response.body)
        var data = response.body
        return Promise.resolve(data)
    })
}

// 把一端xml数据转化成JSON
exports.xmlToJson = (xml) => {
    return new Promise((resolve, reject) => {
        XmlBuilder.parseString(xml, {
            explicitArray: false
        }, (err, json) => {
            err
                ? reject(err)
                : resolve(json)
        })
    })
}