const CONF = require('../config/config')
const util = require('../common/util')
const crudService = require('./crud')
const addressMod = require('../models/addressMod')

// 获取地址详情
exports.getAddressById = (address_id) => {
    var query = {
        where: {
            id: address_id
        }
    }
    return crudService.readMod(addressMod, query)
}