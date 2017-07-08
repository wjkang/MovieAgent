/**
 * Created by Administrator on 2017/6/29 0029.
 */
const router = require('koa-router')();
const searchController = require('./../controllers/search');
const aiqiyiController=require('./../controllers/aiqiyi');
const routers = router
    .get('/search/:keyword', searchController.search)
    .get('/search/1/:keyword',aiqiyiController.search)

module.exports = routers;
