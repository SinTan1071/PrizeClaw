const CONF = require('../config/config')
const util = require('../common/util')
const awardMod = require('../models/awardMod')
const awardService = require('../service/award')

// 用户领取奖品
exports.userTakeAward = async(ctx, next) => {
    var award_id = ctx.body.award_id
    var award = await awardService.getAwardById(award_id)
    if (award.user_id == ctx.UESR.id && ctx.USER.real_name && ctx.USER.id_card) {
        
    }
    // 不满足领取奖品的条件
    console.log("不满足领取条件，请先进行实名认证")
}
