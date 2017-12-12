const crudService = require('./crud')
const userMod = require('../models/userMod')
const uuid = require('node-uuid')
const CONF = require('../config/config')

function generateUserToken() {
    return uuid.v1().replace(/-/g, "")
}

// 根据微信openid检测用户是否存在
exports.isUserExitByWechatId = (openid) => {
    var query = {
        where:{
            wechat_openid:openid
        }
    }
    crudService.readMod(userMod, query).then(()=>{
        return true
    }).catch(err=>{
        return false
    })
}

exports.createWechatUser = async(userinfo, parent_invite_token) => {
    var user = {
        nick_name : userinfo.nickname,
        wechat_openid : userinfo.openid,
        auth_status : CONF.status.user.auth.UNAUTH,
        invite_token : generateUserToken(),
        parent_invite_token : parent_invite_token,
        token : generateUserToken(),
        coin : 0
    }
    crudService.createMod(userMod, user).then(()=>{
        return user
    })
}