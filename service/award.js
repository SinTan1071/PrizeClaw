const awardMod = require('../models/awardMod')
const crudService = require('./crud')

exports.getAwardListByUserid = (user_id) => {
    var query = {
        where: {
            user_id: user_id
        }
    }
    return crudService.readAllMod(awardMod, query)
}

exports.getAwardById = (award_id) => {
    var query = {
        where: {
            id : award_id
        }
    }
    return crudService.readMod(awardMod, query)
}