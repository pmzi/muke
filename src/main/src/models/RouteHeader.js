const { DataTypes } = require('sequelize');
const db = require('@services/db');

const RouteHeader = db.define('RouteHeader', {
  key: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = RouteHeader;
