// 注意require('koa-router')返回的是函数:
const router = require('koa-router')()
const config = require('../config/config')
const util = require('../common/util')

router.prefix('/wechat')

router.get('/', async(ctx, next) => {
    let signature = ctx.query.signature
    let timestamp = ctx.query.timestamp
    let nonce = ctx.query.nonce
    let echostr = ctx.query.echostr
    let wechat_token = config.wechat_token
    let tmp_arr = new Array(wechat_token, timestamp, nonce)
    let tmp_str = ''
    tmp_arr.sort()
    console.log("排序后的数据", tmp_arr)
    for (let i = 0; i < tmp_arr.length; i++) {
        const ele = tmp_arr[i];
        tmp_str += ele
    }
    let local_sign = util.makeSign(tmp_str)
    if (local_sign == signature) {
        ctx.body = echostr
    }else{
        console.log("微信签名", signature)
        ctx.body = "错误"
    }
})

module.exports = router
