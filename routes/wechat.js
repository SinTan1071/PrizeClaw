// 注意require('koa-router')返回的是函数:
const router = require('koa-router')()
const wechatCtr = require('../controllers/wechatCtr.js')

router.prefix('/wechat')

router.all('/', wechatCtr.index)
router.get('/test', wechatCtr.sendMsg)
// router.get('/menu', wechatCtr.createMenu)
router.get('/auth', wechatCtr.oauthWechat)

module.exports = router
