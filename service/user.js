const crudService = require('./crud')
const wechatService = require('./wechat')
const userMod = require('../models/userMod')
const uuid = require('node-uuid')
const CONF = require('../config/config')
const Promise = require('bluebird')

function generateUserToken() {
    return uuid.v1().replace(/-/g, "")
}

// 根据微信openid获取用户信息
exports.getUserByWechatId = (openid) => {
    var query = {
        where: {
            wechat_openid: openid
        }
    }
    return crudService.readMod(userMod, query)
}

// 根据token获取用户信息
exports.getUserByToken = (token) => {
    var query = {
        where: {
            token : token
        }
    }
    return crudService.readMod(userMod, query)
}

exports.createWechatUser = (userinfo, inviter_openid) => {
    var qr_code = await wechatService.getWechatQrcodeTicket(userinfo.openid)
    console.log("二维码", qr_code)
    var invite_code = ''
    if (qr_code && qr_code.url){
        invite_code = qr_code.url
    }
    var user = {
        nick_name : userinfo.nickname,
        wechat_openid : userinfo.openid,
        head_img : userinfo.headimgurl,
        auth_status : CONF.status.user.auth.UNAUTH,
        inviter_openid : inviter_openid,
        invite_code : invite_code,
        token : generateUserToken(),
        coin : 0
    }
    console.log("保存用户", user)
    return crudService.createMod(userMod, user).then(()=>{
        return Promise.resolve(user)
    }).catch(err => {
        return Promise.reject(err)
    })
}

// 获取用户邀请的好友列表
exports.getUserFriends = (openid) => {
    var query = {
        where: {
            inviter_openid: openid
        }
    }
    return crudService.readAllMod(userMod, query).then(users => {
        var friends = []
        for (var i = 0, user; user = users[i++];) {
            var friend = {
                nick_name: user.nick_name,
                head_img: user.head_img
            }
            friends.push(friend)
        }
        return Promise.resolve(friends)
    }).catch(err => {
        return Promise.reject(err)
    })
}