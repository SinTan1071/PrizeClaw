const Promise = require('bluebird')
const ejs = require('ejs')
const heredoc = require('heredoc')
const CONF = require('../config/config')
const util = require('../common/util')
const path = require('path')
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
exports.replyWechat = (msg) => {
    var reply = {}
    var fromUserName = msg.FromUserName
    var toUserName = msg.ToUserName
    switch (msg.MsgType) {
        // case value:
            
        //     break;
        default:
            reply.msgType = 'text'
            // reply.msgType = 'transfer_customer_service'
            break;
    }
    reply.createTime = new Date().getTime()
    reply.toUserName = fromUserName
    reply.fromUserName = toUserName
    reply.content = '您的留言已经收到，后台工作人员将尽快与您联系'
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
        var res = await util.request(CONF.wechat.api.getAccessToken.method, CONF.wechat.api.getAccessToken.url)
        console.log("微信请求access_token结果", res)
        if (res.access_token){
            res.expires_in = timestamp + (res.expires_in - 30) * 1000
            var str_data = JSON.stringify(res)
            util.writeFile(accesstoken_file, str_data).then(()=>{
                return res.access_token
            })
        }
    }
    return data.access_token
}