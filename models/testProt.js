'use strict'

var Promise = require('bluebird')
var mongoose = require('mongoose')
var testMod = mongoose.model('Test')
var request = Promise.promisify(require('request'))

module.exports = testProt

function testProt(opts) {
    this.key = opts
    // this.data = yield this.getData() // 未测试不知道有没有效果
}

testProt.prototype.getData = function() {
    var that = this
    return this.getDataFromUrl(this.key).then(function(data) {
        return that.saveDataToDB(data) // 这里加上一个return拯救了testCtr里面的 var data = yield Test.getData()
    })

}

testProt.prototype.getDataFromUrl = function(key) {
    var api_url = 'https://api.douban.com/v2/movie/subject/' + key
    return request({ url: api_url, json: true }).then(function(response) {
        // console.log(response.body)
        var data = {
        	id:response.body.id,
        	title :response.body.title,
        	image:response.body.images.medium,
        	genres:response.body.genres,
        	summary:response.body.summary,
        	directors:response.body.directors[0].name,
        }
        return Promise.resolve(data)
    })
}

testProt.prototype.saveDataToDB = function(data) {
	console.log('====saveDataToDB====')
	var db_data = {
		data:JSON.stringify(data),
	}
    var _data = new testMod(db_data)
    // console.log(_data)
    return new Promise(function(resolve, reject) {
        _data.save(function(err, ret) {
            err ? reject(err) : resolve(data)
        })
    })
}
