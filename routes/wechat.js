// 注意require('koa-router')返回的是函数:
const router = require('koa-router')()
const wechatCtr = require('../controllers/wechatCtr.js')

router.prefix('/wechat')

router.all('/', wechatCtr.index)
router.get('/test', wechatCtr.sendMsg)

module.exports = router
