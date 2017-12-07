const Sequelize = require('sequelize')
const ORM = require('./registDB')

const User = ORM.define('user', {
        id : {
            type: Sequelize.INTEGER(255),
            primaryKey : true,
            autoIncrement : true
        },
        nick_name: Sequelize.STRING,
        wechat_openid: Sequelize.STRING,
        phone: Sequelize.STRING,
        id_card: Sequelize.STRING,
        real_name: Sequelize.STRING,
        auth_status: Sequelize.INTEGER(11).UNSIGNED,
        invite_token: Sequelize.STRING,
        parent_invite_token : Sequelize.STRING,
        token : Sequelize.STRING,
        coin: Sequelize.INTEGER(255),
    },{
        indexes : [
            {
                unique: true,
                fields: ['wechat_openid', 'phone', 'invite_token', 'token']
            }
        ]
    });

module.exports = User
 