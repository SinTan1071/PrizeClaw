const Sequelize = require('sequelize')
const ORM = require('./baseORM')

const Comment = ORM.define('comment', {
    id: {
        type: Sequelize.INTEGER(255),
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type:Sequelize.INTEGER(255),
        references:{
            model:'User',
            key:'id'
        }
    }, // 用户
    status:Sequelize.INTEGER.UNSIGNED,
    real_name:Sequelize.STRING,
    phone:Sequelize.STRING,
    email:Sequelize.STRING,
    content: Sequelize.TEXT,
    reply: Sequelize.TEXT
}, {
    indexes: [
        {
            fields: ['user_id', 'phone', 'email']
        }
    ]
});

module.exports = Comment
