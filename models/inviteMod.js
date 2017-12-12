const Sequelize = require('sequelize')
const ORM = require('./registDB')

const Invite = ORM.define('invite', {
    id: {
        type: Sequelize.INTEGER(255),
        primaryKey: true,
        autoIncrement: true
    },
    inviter_openid: Sequelize.STRING,
    invitee_openid : Sequelize.STRING,
    invite_type : Sequelize.INTEGER.UNSIGNED,
}, {
    indexes: [
        {
            fields: ['inviter_openid', 'invitee_openid']
        }
    ]
});

module.exports = Invite
