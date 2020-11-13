const { DataTypes } = require('sequelize');
const db = require('@services/db');

const RouteItem = db.define('RouteItem', {
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
  order: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
}, {
  timestamps: false,
});

module.exports = RouteItem;
