const { Feedback, Event } = require('../models');

exports.leaveFeedback = async (req, res) => {
  try {
    const { eventId, rating, comment } = req.body;
    const event = await Event.findByPk(eventId);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    const fb = await Feedback.create({ EventId: eventId, UserId: req.user.id, rating, comment });
    res.json(fb);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFeedbackForEvent = async (req, res) => {
  try {
    const feedbacks = await Feedback.findAll({ where: { EventId: req.params.eventId } });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
