const router = require('koa-router')()
const awardCtr = require('../controllers/awardCtr.js')

router.prefix('/award')

// router.get('/', function (ctx, next) {   ctx.body = 'this is a users
// response!' }) router.get('/bar', (ctx, next) => {   ctx.body = 'this is a
// users/bar response' })

router.get('/take', awardCtr.userTakeAward)

module.exports = router
