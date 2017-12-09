const Sequelize = require('sequelize')
const ORM = require('./registDB')

const Invite = ORM.define('invite', {
    id: {
        type: Sequelize.INTEGER(255),
        primaryKey: true,
        autoIncrement: true
    },
    inviter_token: Sequelize.STRING,
    invitee_token: Sequelize.STRING,
    invite_type : Sequelize.INTEGER.UNSIGNED,
}, {
    indexes: [
        {
            fields: ['inviter_token', 'invitee_token']
        }
    ]
});

module.exports = Invite
