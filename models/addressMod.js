const Sequelize = require('sequelize')
const ORM = require('./registDB')

const Address = ORM.define('user', {
    id: {
        type: Sequelize.INTEGER(255),
        primaryKey: true,
        autoIncrement: true
    },
    user_id: Sequelize.INTEGER(255), // 用户
    address : Sequelize.STRING,
    receiver: Sequelize.STRING,
    phone : Sequelize.STRING,
    province : Sequelize.STRING,
    city:Sequelize.STRING,
    is_acq:Sequelize.INTEGER.UNSIGNED
}, {
    indexes: [
        {
            fields: ['user_id']
        }
    ]
});

module.exports = Address