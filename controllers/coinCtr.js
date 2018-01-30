const CONF = require('../config/config')

/**
 * 金币的充值流程
 * 1.用户提交上来需要充值多少金币
 * 2.金币转换成金额
 */
exports.coinCharge = async(ctx, next) => {
    var coin = ctx.body.coin
    var money = coin / CONF.coin_rate
    // TODO 利用金额去生成一个微信支付的订单
}