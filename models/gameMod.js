const Sequelize = require('sequelize')
const ORM = require('./baseORM')

const Game = ORM.define('game', {
    id: {
        type: Sequelize.INTEGER(255),
        primaryKey: true,
        autoIncrement: true
    },
    name : Sequelize.STRING,
    image: Sequelize.STRING,
    description : Sequelize.TEXT,
    count : Sequelize.INTEGER(255).UNSIGNED,
    money : Sequelize.INTEGER(255).UNSIGNED,
    flag : Sequelize.INTEGER.UNSIGNED
}, {
    indexes: [
        {
            fields: ['name']
        }
    ]
});

module.exports = Game
