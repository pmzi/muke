const { DataTypes } = require('sequelize');
const db = require('@services/db');

const Route = db.define('Route', {
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
  method: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  matchType: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  matchWith: {
    type: DataTypes.TINYINT,
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

module.exports = Route;
