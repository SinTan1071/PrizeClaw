var config = {
    wechat: {
        token : "sintan1071",
        appid : "wx898f13df6bf0ea41",
        secret : "7a7f135121318b6262020d37e37067f4",
        api : {
            sendMsg: {
                url: "https://api.weixin.qq.com/cgi-bin/template/api_set_industry?access_token=",
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