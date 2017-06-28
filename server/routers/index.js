/**
 * Created by Administrator on 2017/6/28 0028.
 */
const router = require('koa-router')()

const api = require('./api')
router.use('/api', api.routes(), api.allowedMethods())

module.exports = router