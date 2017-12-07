const CONF = require('../config/config')
const util = require('../common/util')
const userMod = require('../models/userMod')

// 获取用户账户
exports.index = async (ctx, next) => {
    let token = ctx.query.token
    console.log("token在这里", token)
    userMod
        .findAll({
            where: {
                nick_name: 'a'
            }
        })
        .then(function(result) {
            console.log('query all users', result);
            for (var i = 0, usr; usr = result[i++];) {
                console.log('用户名=' + usr.nick_name + ', 手机号=' + usr.phone);
            }
        })
        .catch(err => {
            console.log("错误", err)
        })
}

exports.create = async (ctx, next) => {
    userMod
        .create({nick_name: 'XiaoMing', phone: '1234567890', wechat_openid: 'xiaoming@qq.com'})
        .then(function (result) {
            console.log('inserted XiaoMing ok');
        })
        .catch(function (err) {
            console.log('inserted XiaoMing error');
            console.log(err.message);
        });
}

exports.update = async(ctx, next) => {
    userMod.update({
            token: 'xioamingdeTOKEN'
        }, {
            where: {
                nick_name: {
                    $like: 'Xiao%'
                }
            }
        })
        .then(function (result) {
            console.log('updated user');
            console.log(result);
        }).catch(err => {
            console.log('数据库错误', err)
        });
}
