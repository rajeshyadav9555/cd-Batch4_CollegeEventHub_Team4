const { Event, User, Registration } = require('../models');

exports.createEvent = async (req, res) => {
  try {
    const { title, description, location, date, capacity } = req.body;
    const event = await Event.create({ title, description, location, date, capacity, organizerId: req.user.id });
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.findAll({ include: [{ model: User, as: 'organizer', attributes: ['id','name','email'] }] });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEvent = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id, { include: [{ model: User, as: 'organizer', attributes: ['id','name'] }] });
    if (!event) return res.status(404).json({ message: 'Not found' });
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).json({ message: 'Not found' });
    if (event.organizerId !== req.user.id && req.user.role !== 'admin') return res.status(403).json({ message: 'Forbidden' });
    await event.update(req.body);
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).json({ message: 'Not found' });
    if (event.organizerId !== req.user.id && req.user.role !== 'admin') return res.status(403).json({ message: 'Forbidden' });
    await event.destroy();
    res.json({ message: 'deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
