const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./user')(sequelize);
const Event = require('./event')(sequelize);
const Registration = require('./registration')(sequelize);
const Feedback = require('./feedback')(sequelize);
const AdminLog = require('./adminlog')(sequelize);

// Associations
User.hasMany(Event, { foreignKey: 'organizerId' });
Event.belongsTo(User, { as: 'organizer', foreignKey: 'organizerId' });

User.belongsToMany(Event, { through: Registration, foreignKey: 'userId', otherKey: 'eventId' });
Event.belongsToMany(User, { through: Registration, foreignKey: 'eventId', otherKey: 'userId' });

Registration.belongsTo(User);
Registration.belongsTo(Event);

Feedback.belongsTo(User);
Feedback.belongsTo(Event);

module.exports = {
  sequelize,
  Sequelize,
  User,
  Event,
  Registration,
  Feedback,
  AdminLog
};
