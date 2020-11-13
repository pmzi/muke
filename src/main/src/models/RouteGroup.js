const { DataTypes } = require('sequelize');
const db = require('@services/db');

const RouteGroup = db.define('RouteGroup', {
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
}, {
  timestamps: false,
});

module.exports = RouteGroup;
