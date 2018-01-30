var config = {
    index_page:"http://view.kikofeier.com",
    ignore_url:[
        '/',
        '/string',
        '/json',
        '/wechat',
        '/wechat/auth'
    ],
    coin_rate:20,
    wechat: {
        token : "sintan1071",
        appid : "wx68fe32050b5e5430",
        secret : "10176907464fca58cf293e48157a3017",
        domain : "http://api.kikofeier.com",
        qrcode_host : "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=",
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
                url: "https://api.weixin.qq.com/cgi-bin/template/api_set_industry?access_token=${access_token}",
                method: 'POST'
            },
            createMenu:{
                url : "https://api.weixin.qq.com/cgi-bin/menu/create?access_token=${access_token}",
                method: 'POST'
            },
            getAccessToken:{
                url : "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${secret}",
                method: "GET"
            },
            getQrcodeTicket : {
                url : "https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=${access_token}",
                method: "POST"
            },
            getWechatUserinfo:{
                url : "https://api.weixin.qq.com/cgi-bin/user/info?lang=zh_CN&access_token=${access_token}&openid=${openid}",
                method:"GET"
            },
            oAuth:{
                url:"https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}&state=oauth#wechat_redirect"
            },
            oAuthAccessToken:{
                url : 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appid}&secret=${secret}&code=${code}&grant_type=authorization_code',
                method:'GET'
            },
            oAuthUserInfo:{
                url:"https://api.weixin.qq.com/sns/userinfo?access_token=${access_token}&openid=${openid}&lang=zh_CN",
                method:'GET'
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
            },
        },
        award:{
            taken:{
                UNTAKEN:0, // 尚未领取
                UNPAY:1, // 领取未支付
                PAY:2, // 已经支付
                UNSHIP:3, // 未发货
                SHIPED:4, // 发货
                TAKEN:5 // 领取了
            }
        }
    },
    type:{
        user:{
            bind:{
                PHONE:0,
                IDCARD:1
            }
        }
    }
}

module.exports = config