const CONF = require('../config/config')
const util = require('../common/util')
const userMod = require('../models/userMod')
const userService = require('../service/user')
const awardService = require('../service/award')

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

// 获取用户奖品列表
exports.getUserAwards = async (ctx, next) => {
    var award_list = await awardService.getAwardListByUserid(ctx.USER.id)
    console.log("奖品列表", award_list)
}

exports.userBindInfo = async (ctx, next) =>{
    var bind_type = ctx.body.bind_type
    var value = ctx.body.value
    switch (bind_type) {
        case CONF.type.user.bind.PHONE:
            
            break;
        case CONF.type.user.bind.IDCARD:

            break;
    }
}
