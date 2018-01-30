const Sequelize = require('sequelize')
const ORM = require('./baseORM')

const PayOrder = ORM.define('pay_order', {
    id: {
        type: Sequelize.INTEGER(255),
        primaryKey: true,
        autoIncrement: true
    },
    // TODO
}, {
    indexes: [
        {
            fields: ['']
        }
    ]
});

module.exports = PayOrder
