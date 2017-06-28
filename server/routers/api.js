/**
 * Created by Administrator on 2017/6/29 0029.
 */
const router = require('koa-router')()
const searchController = require('./../controllers/search')

const routers = router
    .get('/search/:keyword', searchController.search)

module.exports = routers
