const { Registration, Event } = require('../models');

exports.registerForEvent = async (req, res) => {
  try {
    const { eventId } = req.body;
    const event = await Event.findByPk(eventId);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    const reg = await Registration.create({ EventId: eventId, UserId: req.user.id });
    res.json(reg);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMyRegistrations = async (req, res) => {
  try {
    const regs = await Registration.findAll({ where: { UserId: req.user.id }, include: [Event] });
    res.json(regs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
