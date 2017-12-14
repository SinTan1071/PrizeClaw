const Promise = require('bluebird')
const crypto = require('crypto')
const xml2js = require('xml2js')
const XmlBuilder = new xml2js.Builder(); // JSON->xml
const XmlParser = new xml2js.Parser(); //xml -> json
const request = Promise.promisify(require('request'))
const fs = require('fs')

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

// 判断一个值是否在数组里
exports.inArray = (string, array) => {
    for (i = 0; i < array.length; i++) {
        let entry = array[i].toString()
        if (entry == string) {
            return true
        }
    }
    return false
}

// 发起一个promise化的http请求
exports.request = (method, url, data, headers) => {
    var opt = {
        method : method,
        url : url,
        // json : true,
        // body : JSON.stringify(data),
        body : data,
        headers : headers
    }
    return request(opt).then((response) => {
        // console.log(response.body)
        var data = response.body
        return Promise.resolve(data)
    }).catch(err => {
        return Promise.reject(err)
    })
}

// 客户端响应方法
exports.response = (code, message, data) => {
    return {
        code : code,
        message : message,
        data: data
    }
}

// 把一端xml数据转化成JSON
exports.xmlToJson = (xml) => {
    return new Promise((resolve, reject) => {
        xml2js.parseString(xml, {
            explicitArray: false
        }, (err, json) => {
            err
                ? reject(err)
                : resolve(json)
        })
    })
}

// 读取文件
exports.readFile =  (fpath, encoding) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fpath, encoding, (err, content) => {
            err ? reject(err):resolve(content)
        })
    })
}

// 写入文件
exports.writeFile =  (fpath, content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fpath, content, (err) => {
            err ? reject(err):resolve()
        })
    })
}