const Sequelize = require('sequelize')
const CONF = require('../config/config')

const baseORM = new Sequelize({
    database: CONF.db.database,
    username: CONF.db.username,
    password: CONF.db.password,
    host: CONF.db.host,
    dialect: 'mysql',
    timezone : '+08:00',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define : {
        freezeTableName: true,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8_general_ci'
        },
        timestamps: true
    },
    sync : {
        force: true
    }
})

module.exports = baseORM