const Promise = require('bluebird')
const ejs = require('ejs')
const heredoc = require('heredoc')
const CONF = require('../config/config')
const util = require('../common/util')
const path = require('path')
const userService = require('./user')
const accesstoken_file = path.join(__dirname, '../config/access_token.json')

/**
 * <%if (msgType === 'text') {% >
 *  <Content><![CDATA[<%content%>]]></Content>
 * <%}else {% >
 *  <Content><![CDATA[<%臣妾做不到啊·····%>]]></Content>
 * <%}%>
 */
var kefu_tpl = heredoc(function() {
    /*
    <xml>
	    <ToUserName><![CDATA[<%= toUserName %>]]></ToUserName>
	    <FromUserName><![CDATA[<%= fromUserName %>]]></FromUserName>
        <CreateTime><%= createTime %></CreateTime>
        <Content><![CDATA[<%= content %>]]></Content>
	    <MsgType><![CDATA[<%= msgType %>]]></MsgType>
    </xml>
    */
})
var kefu_compiled = ejs.compile(kefu_tpl)

// 获取微信的XML数据方法
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

// 响应微信服务器方法
exports.replyWechat = async(msg) => {
    var that = this
    var reply = {}
    var fromUserName = msg.FromUserName
    var toUserName = msg.ToUserName
    switch (msg.MsgType) {
        case "event":
            switch (msg.Event) {
                case 'subscribe' :
                    var wechat_userinfo = await that.getWechatUserInfo(msg.FromUserName)
                    console.log("关注时候的user", wechat_userinfo)
                    if (wechat_userinfo && wechat_userinfo.openid) {
                        var user = await userService.getUserByWechatId(wechat_userinfo.openid)
                        console.log("关注时候获取到user", user)
                        if (!user || !user.id) {
                            await userService.createWechatUser(wechat_userinfo, (msg.EventKey).substring(8))
                        }
                    }
                    reply.content = '欢迎关注！我们等你很久了' + wechat_userinfo.nickname + '，快来赢取大奖吧！！！'
                break;
                default:
                    reply.content = '请您点击公众号右下角“问题反馈”按钮，给我们留言，工作人员将尽快给您回复'
                break;
            }
            break;
        default:
            reply.content = '请您点击公众号右下角“问题反馈”按钮，给我们留言，工作人员将尽快给您回复'
            // reply.msgType = 'transfer_customer_service'
            break;
    }
    reply.createTime = new Date().getTime()
    reply.toUserName = fromUserName
    reply.fromUserName = toUserName
    reply.msgType = 'text'
    console.log("最后响应消息的对象", reply)
    return kefu_compiled(reply)
}

// 微信获取access_token
exports.getWechatAccessToken = async() => {
    var timestamp = util.getTimeStamp()
    var access_token = await util.readFile(accesstoken_file)
    var data = JSON.parse(access_token)
    console.log("获取到的文件JSON解析", data)
    if (!data || data.expires_in < timestamp) {
        var res = await util.request(CONF.wechat.api.getAccessToken.method, util.stringFormat(CONF.wechat.api.getAccessToken.url, {appid:CONF.wechat.appid, secret:CONF.wechat.secret}))
        console.log("微信请求access_token结果", res)
        if (res.access_token){
            res.expires_in = timestamp + (res.expires_in - 30) * 1000
            var str_data = JSON.stringify(res)
            return util.writeFile(accesstoken_file, str_data).then(()=>{
                return Promise.resolve(res.access_token)
            })
        }
    }
    return data.access_token
}

// 根据open_id 获取用户信息
exports.getWechatUserInfo = async(openid) => {
    var access_token = await this.getWechatAccessToken()
    var user_info_url = util.stringFormat(CONF.wechat.api.getWechatUserinfo.url, {access_token: access_token, openid: openid})
    return util.request(CONF.wechat.api.getWechatUserinfo.method, user_info_url)
}

exports.getWechatOauthCodeUrl = (url) => {
    var scope = 'snsapi_userinfo'
    return util.stringFormat(CONF.wechat.api.oAuth.url, {appid:CONF.wechat.appid, redirect_uri: encodeURIComponent(url), scope:scope})
}

exports.getWechatUserInfoByOauth = async(code) => {
    console.log("微信OAuth的code", code)
    var access_token_url = util.stringFormat(CONF.wechat.api.oAuthAccessToken.url , {appid:CONF.wechat.appid , secret:CONF.wechat.secret , code: code})
    var res_access_token = await util.request(CONF.wechat.api.oAuthAccessToken.method, access_token_url)
    console.log("微信OAuth的access_token", res_access_token)
    if (res_access_token.access_token){
        var userinfo_url = util.stringFormat(CONF.wechat.api.oAuthUserInfo, {access_token:res_access_token.access_token, openid:res_access_token.openid})
        var res_userinfo = await util.request(CONF.wechat.api.oAuthUserInfo.method, userinfo_url)
        console.log("微信授权用户信息", res_userinfo)
        return res_userinfo
    }
    return
}

// 获取创建永久二维码ticket
exports.getWechatQrcodeTicket = async(openid) => {
    var access_token = await this.getWechatAccessToken()
    var opt = {
        action_name : "QR_LIMIT_STR_SCENE",
        action_info: {
            scene: {
                scene_str: openid
            }
        }
    }
    var res = await util.request(CONF.wechat.api.getQrcodeTicket.method, util.stringFormat(CONF.wechat.api.getQrcodeTicket.url, {access_token:access_token}), opt)
    return res
}