/**
 * Created by Administrator on 2017/6/28 0028.
 */
const path = require("path")
const Koa = require('koa')
const routers = require('./routers/index')

const app = new Koa()

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods())


// 监听启动端口
app.listen(3008)
console.log(`the server is start at port 3000`)