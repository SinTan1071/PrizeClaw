const crudService = require('./crud')
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

exports.createWechatUser = (userinfo, inviter_openid) => {
    var user = {
        nick_name : userinfo.nickname,
        wechat_openid : userinfo.openid,
        head_img : userinfo.headimgurl,
        auth_status : CONF.status.user.auth.UNAUTH,
        inviter_openid : inviter_openid,
        token : generateUserToken(),
        coin : 0
    }
    return crudService.createMod(userMod, user).then(()=>{
        resolve(user)
    }).catch(err=>{
        reject(err)
    })
    
}