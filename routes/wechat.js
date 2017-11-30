// 注意require('koa-router')返回的是函数:
const router = require('koa-router')()

router.prefix('/wechat')

router.get('/', async(ctx, next) => {
    var signature = ctx.query.signature
    var timestamp = ctx.query.timestamp
    var nonce = ctx.query.nonce
    
})

module.exports = router
