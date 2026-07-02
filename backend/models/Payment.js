const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Payment = sequelize.define('Payment', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  subscriptionId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  paymentMethod: {
    type: DataTypes.ENUM('cash', 'card', 'transfer', 'check'),
    defaultValue: 'cash'
  },
  paymentDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  referenceNumber: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: true,
  tableName: 'payments'
});

module.exports = Payment;
