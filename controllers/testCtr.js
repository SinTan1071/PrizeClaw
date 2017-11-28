'use strict'

var TestProt = require('../models/testProt')

exports.index = function(opts) {
    return function*(next) {
        console.log('====hi ctr====')
        this.body = opts

        // 业务逻辑
        var Test = new TestProt('1764796')
        var data = yield Test.getData()
        console.log('===getData===')
        console.log(data)
    }
}
