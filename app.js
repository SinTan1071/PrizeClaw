// const Koa = require('koa');

// // 注意require('koa-router')返回的是函数:
// const router = require('koa-router')();

// const app = new Koa();

// // log request URL:
// app.use(async(ctx, next) => {
//     console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
//     await next();
// });

// // add url-route:
// router.get('/hello/:name', async(ctx, next) => {
//     var name = ctx.params.name;
//     ctx.response.body = `<h1>Hello, ${name}!</h1>`;
// });

// router.get('/', async(ctx, next) => {
//     ctx.response.body = '<h1>Index</h1>';
// });

// // add router middleware:
// app.use(router.routes());

// app.listen(3000);
// console.log('app started at port 3000...');

/********************************************************************/ 

const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')
const wechat = require('./routes/wechat')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {extension: 'pug'}))

// logger
app.use(async(ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(wechat.routes(), wechat.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

module.exports = app
