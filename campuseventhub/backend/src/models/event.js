// event model
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Event = sequelize.define('Event', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    location: { type: DataTypes.STRING },
    date: { type: DataTypes.DATE, allowNull: false },
    capacity: { type: DataTypes.INTEGER, defaultValue: 100 }
  });
  return Event;
};
