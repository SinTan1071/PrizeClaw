const router = require('koa-router')()
const userCtr = require('../controllers/userCtr.js')

router.prefix('/user')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', (ctx, next) => {
//   ctx.body = 'this is a users/bar response'
// })

router.post('/account', userCtr.getUserInfo)
router.get('/friends', userCtr.getFriendsList)


module.exports = router
