const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const BarCode = sequelize.define('BarCode', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  memberId: {
    type: DataTypes.UUID,
    allowNull: false,
    unique: true
  },
  barCodeData: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  barCodeImage: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  timestamps: true,
  tableName: 'barcodes'
});

module.exports = BarCode;
