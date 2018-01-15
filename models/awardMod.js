const Sequelize = require('sequelize')
const ORM = require('./registDB')

const Award = ORM.define('award', {
    id: {
        type: Sequelize.INTEGER(255),
        primaryKey: true,
        autoIncrement: true
    },
    user_id : Sequelize.INTEGER(255),
    address_id : Sequelize.INTEGER(255),
    award_type : Sequelize.INTEGER.UNSIGNED, // 奖品对应的类型
    status : Sequelize.INTEGER.UNSIGNED, // 是否支付，发货状态
    express: Sequelize.STRING,
    description : Sequelize.STRING,
    delivery_num : Sequelize.STRING,
    order_num : Sequelize.STRING,
    money : Sequelize.FLOAT,
}, {
    indexes: [
        {
            fields : ['user_id', 'order_num', 'delivery_num']
        }
    ]
});

module.exports = Award
