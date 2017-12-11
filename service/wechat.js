const Promise = require('bluebird')
const ejs = require('ejs')
const heredoc = require('heredoc')

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
            reply.msgType = 'transfer_customer_service'
            break;
    }
    reply.createTime = new Date().getTime()
    reply.toUserName = fromUserName
    reply.fromUserName = toUserName
    console.log("最后响应消息的对象", reply)
    return kefu_compiled(reply)
}