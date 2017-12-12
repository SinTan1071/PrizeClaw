const CONF = require('../config/config')
const util = require('../common/util')
const wechatService = require('../service/wechat')
const userService = require('../service/user')

// 微信接入
exports.index = async (ctx, next) => {
    let signature = ctx.query.signature
    let timestamp = ctx.query.timestamp
    let nonce = ctx.query.nonce
    let echostr = ctx.query.echostr
    let wechat_token = CONF.wechat.token
    let tmp_arr = new Array(wechat_token, timestamp, nonce)
    console.log("请求过来的数据", tmp_arr)
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
            var xml = await wechatService.getWechatXml(ctx.req)
            console.log("请求的XML", xml)
// debug
// xml = `<xml><ToUserName><![CDATA[gh_b1d145b7e9ab]]></ToUserName>
// <FromUserName><![CDATA[oK4rH0WURv1jB0U-bKulA4CJZt4c]]></FromUserName>
// <CreateTime>1512891804</CreateTime>
// <MsgType><![CDATA[text]]></MsgType>
// <Content><![CDATA[哦里木空]]></Content>
// <MsgId>6497820821232246426</MsgId>
// </xml>`
            var wechat_msg = await util.xmlToJson(xml)
            console.log("最终请求的结果", wechat_msg)
            var server_msg = wechatService.replyWechat(wechat_msg.xml)
            console.log("响应的结果", server_msg)
            ctx.body = server_msg
        } else {
            ctx.body = "错误"
        }
    }
}

// 微信创建新菜单
exports.createMenu = async(ctx, next) => {
    var access_token = await wechatService.getWechatAccessToken()
    console.log("access_token", access_token)
    var res = await util.request(CONF.wechat.api.createMenu.method, CONF.wechat.api.createMenu.url + access_token, CONF.wechat.menu)
    console.log("创建菜单微信响应", res)
}

// 微信OAuth授权
exports.oauthWechat = async(ctx, next) => {
    var code = ctx.query.code
    if(!code){
        // 引导用户进入授权跳转页面
        var current_url = CONF.wechat.domain + ctx.url
        console.log("当前的url", current_url)
        var jump_url = wechatService.getWechatOauthCodeUrl(current_url)
        ctx.redirect(jump_url)
    }else{
        // 拿到code后获取用户信息
        var wechat_userinfo = await wechatService.getWechatUserInfoByOauth(code)
        if (wechat_userinfo && wechat_userinfo.openid){
        var user = await userService.getUserByWechatId(wechat_userinfo.openid)
        console.log("获取到user", user)
        if (user && user.dataValues)
            console.log("111111")
            var index_url = CONF.index_page + "?data=" + (new Buffer(JSON.stringify(user.dataValues)).toString('base64'))
        }else{
            console.log("2222222")
            var new_user = await userService.createWechatUser(wechat_userinfo)
            if (new_user && new_user.wechat_openid) {
                var index_url = CONF.index_page + "?data=" + (new Buffer(JSON.stringify(new_user)).toString('base64'))
            }
        }
        console.log("跳转地址", index_url)
        ctx.redirect(index_url)
    }
    return
}

// 微信消息推送
exports.sendMsg = async(ctx, next) => {
    let url = 'https://api.douban.com/v2/movie/subject/26761416'
    let data = await util.request('GET', url)
    console.log("请求结口的数据", data)
}