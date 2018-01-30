const CONF = require('../config/config')
const util = require('../common/util')
const awardMod = require('../models/awardMod')
const awardService = require('../service/award')
const addressService = require('../service/address')

// 获取用户奖品列表
exports.getUserAwards = async(ctx, next) => {
    var award_list = await awardService.getAwardListByUserid(ctx.USER.id)
    console.log("奖品列表", award_list)
}

exports.awardDetail = async(ctx, next) => {
    var award = await awardService.getAwardById(ctx.body.award_id)
    console.log("奖品详情", award)
}

// 用户领取奖品
exports.userTakeAward = async(ctx, next) => {
    var award_id = ctx.body.award_id
    var address_id = ctx.body.address_id
    var award = await awardService.getAwardById(award_id)
    if (award.user_id == ctx.UESR.id && ctx.USER.real_name && ctx.USER.id_card) {
        // 领取奖品流程，地址入库，把领奖状态改变成领取未支付，然后生成一个支付订单
        var set = {
            address_id : address_id,
            status:CONF.status.award.taken.UNPAY,
            order_num : awardService.createAwardOrderNumer()
        }
        var query = {
            where:{
                id:award_id
            }
        }
        var res = await awardService.updateAward(set, query)
        console.log("UPDATE返回结果", res)
    }
    // 不满足领取奖品的条件
    console.log("不满足领取条件，请先进行实名认证")
}
