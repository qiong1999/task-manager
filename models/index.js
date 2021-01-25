const {Sequelize} = require('sequelize');
const path = require('path')
const config = require('../config/db');

const sequelize = new Sequelize(config);

const user = require(path.join(__dirname,'/user'))(sequelize,Sequelize.DataTypes)



sequelize.sync({})

module.exports = {
    sequelize,
    user,
}