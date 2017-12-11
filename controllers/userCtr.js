const CONF = require('../config/config')
const util = require('../common/util')
const userMod = require('../models/userMod')
const service = require('../service/crud')

// 获取用户账户
exports.getUserInfo = async (ctx, next) => {
    let token = ctx.query.token
    console.log("系统token在这里", token)
    var query = {
        where:{
            token:token
        }
    }
    var user = await service.readMod(userMod, query)
    console.log("取出来的用户是", user)
}


