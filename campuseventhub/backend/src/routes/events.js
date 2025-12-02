// events routes
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { auth } = require('../middlewares/auth');

router.get('/', eventController.getEvents);
router.get('/:id', eventController.getEvent);
router.post('/', auth, eventController.createEvent);
router.put('/:id', auth, eventController.updateEvent);
router.delete('/:id', auth, eventController.deleteEvent);

module.exports = router;
