/**
 * 在app.use(router)之前调用
 */
const userService = require('../service/user')
const util = require('../common/util')
const CONF = require('../config/config')

var token_check = async(ctx, next) => {
    //如果有返回数据，将返回数据添加到data中
    console.log("访问的url", ctx.path)
    if (ctx.query.token) {
        //后执行路由
        var user = await userService.getUserByToken(ctx.query.token)
        if (user && user.dataValues && user.dataValues.wechat_openid){
            ctx.USER = user.dataValues
            await next()
        }else{
            ctx.body = "不存在该用户"
            return
        }
    } else if (util.inArray(ctx.path, CONF.ignore_url)) {
        await next()
    } else {
        ctx.body = "无权限"
        return
    }
}

module.exports = token_check