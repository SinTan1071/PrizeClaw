var config = {
    index_page:"http://view.kikofeier.com",
    ignore_url:[
        '/',
        '/string',
        '/json',
        '/wechat',
        '/wechat/auth'
    ],
    wechat: {
        token : "sintan1071",
        appid : "wx68fe32050b5e5430",
        secret : "10176907464fca58cf293e48157a3017",
        domain : "http://api.kikofeier.com",
        admin : "oK4rH0UITk8mXBNWYeqN6uHvWdqg", // 贝武的open_id
        menu : {
            "button" : [
                {
                    "name": "赢手机",
                    "type":"view",
                    "url":"http://www.baidu.com"
                }, {
                    "name": "赚金币",
                    "type" : "view",
                    "url" : "http://www.qq.com"
                }, {
                    "name": "问题反馈",
                    "type": "view",
                    "url": "http://www.jd.com"
                }
            ]
        },
        api : {
            sendMsg: {
                url: "https://api.weixin.qq.com/cgi-bin/template/api_set_industry?access_token=",
                method: 'POST'
            },
            createMenu:{
                url : "https://api.weixin.qq.com/cgi-bin/menu/create?access_token=",
                method: 'POST'
            },
            getAccessToken:{
                url : "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx68fe32050b5e5430&secret=10176907464fca58cf293e48157a3017",
                method: "GET"
            },
            getQrcodeTicket : {
                url : "https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=",
                method: "POST"
            },
            getWechatUserinfo:{
                url : "https://api.weixin.qq.com/cgi-bin/user/info?lang=zh_CN",
                method:"GET"
            }
        }
    },
    db: {
        database: 'prizeclaw',
        username: 'root',
        password: '123456',
        host: 'localhost',
    },
    status:{
        user:{
            auth:{
                UNAUTH:0,
                AUTHED:1,
                AUTHFAIL:2
            }
        }
    }
}

module.exports = config