// admin log
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const AdminLog = sequelize.define('AdminLog', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    action: { type: DataTypes.STRING },
    meta: { type: DataTypes.JSON }
  });
  return AdminLog;
};
