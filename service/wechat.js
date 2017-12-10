const Promise = require('bluebird')

// 响应微信服务器方法
exports.wechatReply = (content) => {
    return new Promise((resolve, reject) => {
        let buf = ''
        content.setEncoding('urf8')
        content.on('data', (chunk)=>{
            buf += chunk
        })
        content.on('end', ()=>{
            resolve(buf)
        })
    })
}