const { DataTypes } = require('sequelize');
const db = require('@services/db');

const Workspace = db.define('Workspace', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  port: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  proxy: {
    type: DataTypes.STRING,
  },
});

module.exports = Workspace;
