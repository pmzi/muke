const { DataTypes } = require('sequelize');
const db = require('@services/db');

const Workspace = db.define('Workspace', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  },
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
}, {
  timestamps: false,
});

module.exports = Workspace;
