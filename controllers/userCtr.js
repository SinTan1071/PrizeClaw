const CONF = require('../config/config')
const util = require('../common/util')
const userMod = require('../models/userMod')
const userService = require('../service/user')

// 获取用户账户
exports.getUserInfo = async (ctx, next) => {
    var user = ctx.USER
    console.log("取出来的用户是", user)
}

// 获取邀请的好友列表
exports.getFriendsList = async (ctx, next) => {
    var friends = await userService.getUserFriends(ctx.USER.wechat_openid)
    console.log("朋友列表", friends)
}
