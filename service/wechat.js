const Promise = require('bluebird')

// 响应微信服务器方法
exports.wechatReply = (content) => {
    return new Promise((resolve, reject) => {
        console.log("请求的内容是什么", content)
    })
}