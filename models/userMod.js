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
        head_img : Sequelize.STRING,
        // invite_token: Sequelize.STRING,
        // parent_invite_token : Sequelize.STRING,
        inviter_openid : Sequelize.STRING,
        invite_code : Sequelize.STRING,
        token : Sequelize.STRING,
        coin: Sequelize.INTEGER(255),
    },{
        indexes : [
            {
                unique: true,
                fields : ['wechat_openid', 'phone', 'inviter_openid', 'token']
            }
        ]
    });

module.exports = User
 