const Sequelize = require('sequelize')
const ORM = require('./baseORM')

const CoinFlow = ORM.define('coinflow', {
    id: {
        type: Sequelize.INTEGER(255),
        primaryKey: true,
        autoIncrement: true
    },
    type : Sequelize.INTEGER.UNSIGNED, // 金币流的类型
    coin: Sequelize.INTEGER(255), // 金币流，存在负数
    user_id: {
        type:Sequelize.INTEGER(255),
        references:{
            model:'User',
            key:'id'
        }
    }, // 用户
}, {
    indexes: [
        {
            fields: ['user_id', 'type']
        }
    ]
});

module.exports = CoinFlow
