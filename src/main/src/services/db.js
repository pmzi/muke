const Sequelize = require('sequelize');
const path = require('path');

const storage = path.resolve(__dirname, '../../database/database.sqlite');

module.exports = new Sequelize({
  dialect: 'sqlite',
  storage,
  logging: false,
});
