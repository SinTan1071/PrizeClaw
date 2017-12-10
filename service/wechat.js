const Promise = require('bluebird')

// 响应微信服务器方法
exports.getWechatXml = (content) => {
    return new Promise((resolve, reject) => {
        let xml = ''
        content.setEncoding('utf8')
        content.on('data', (chunk)=>{
            xml += chunk
        })
        content.on('end', ()=>{
            resolve(xml)
        })
    })
}