const CONF = require('../config/config')
const util = require('../common/util')
const service = require('../service/wechat')

// 微信接入
exports.index = async (ctx, next) => {
    let signature = ctx.query.signature
    let timestamp = ctx.query.timestamp
    let nonce = ctx.query.nonce
    let echostr = ctx.query.echostr
    let wechat_token = CONF.wechat_token
    let tmp_arr = new Array(wechat_token, timestamp, nonce)
    let tmp_str = ''
    tmp_arr.sort()
    console.log("排序后的数据", tmp_arr)
    for (let i = 0; i < tmp_arr.length; i++) {
        const ele = tmp_arr[i];
        tmp_str += ele
    }
    let local_sign = util.makeSign(tmp_str)
    if(ctx.method == 'GET'){
        if (local_sign == signature) {
            ctx.body = echostr
        } else {
            ctx.body = "错误"
        }
    }else{
        if (local_sign == signature) {
            var msg = await service.wechatReply(ctx.request.body)
            ctx.body = echostr
        } else {
            ctx.body = "错误"
        }
    }
}

// 微信消息推送
exports.sendMsg = async(ctx, next) => {
    let url = 'https://api.douban.com/v2/movie/subject/26761416'
    let data = await util.request('GET', url)
    console.log("请求结口的数据", data)
}