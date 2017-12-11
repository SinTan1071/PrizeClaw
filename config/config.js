var config = {
    wechat: {
        token : "sintan1071",
        appid : "wx898f13df6bf0ea41",
        secret : "7a7f135121318b6262020d37e37067f4",
        menu : {
            "button" : [
                {
                    "name": "抓手机",
                    "type":"view",
                    "url":"www.baidu.com",
                    // "sub_button": [
                    //     {
                    //         "type": "pic_sysphoto",
                    //         "name": "系统拍照发图",
                    //         "key": "rselfmenu_1_0",
                    //         "sub_button": []
                    //     }, {
                    //         "type": "pic_photo_or_album",
                    //         "name": "拍照或者相册发图",
                    //         "key": "rselfmenu_1_1",
                    //         "sub_button": []
                    //     }, {
                    //         "type": "pic_weixin",
                    //         "name": "微信相册发图",
                    //         "key": "rselfmenu_1_2",
                    //         "sub_button": []
                    //     }
                    // ]
                }, {
                    "name": "赚金币",
                    "type" : "view",
                    "url" : "www.qq.com",
                }, {
                    "name": "客服",
                    "type": "click",
                    "key": "NEED_KEFU"
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
            }
        }
    },
    db: {
        database: 'prizeclaw',
        username: 'root',
        password: '123456',
        host: 'localhost',
    }
}

module.exports = config