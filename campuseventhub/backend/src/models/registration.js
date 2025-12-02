// reg model
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Registration = sequelize.define('Registration', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    status: { type: DataTypes.ENUM('registered', 'cancelled'), defaultValue: 'registered' },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  });
  return Registration;
};
