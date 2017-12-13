const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const cors = require('koa-cors')
const logger = require('koa-logger')
const token_check = require('./middlewares/token_check')
// const response_formatter = require('./middlewares/response_formatter');
// const logUtil = require('./common/logger')

// 模型注册
var syncDB = require('./models/syncDB')

// 引入路由
const index = require('./routes/index')
const user = require('./routes/user')
const wechat = require('./routes/wechat')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(cors()) // 跨域问题
// app.use(response_formatter)
app.use(token_check)
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {extension: 'pug'}))

// logger
app.use(async(ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
    // try {
    //     await next()
    //     //记录响应日志
    //     logUtil.logResponse(ctx, ms);
    // } catch (error) {
    //     //记录异常日志
    //     logUtil.logError(ctx, error, ms);
    // }
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(user.routes(), user.allowedMethods())
app.use(wechat.routes(), wechat.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

module.exports = app
