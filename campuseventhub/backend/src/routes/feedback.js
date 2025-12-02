// feedback routes
const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');
const { auth } = require('../middlewares/auth');

router.post('/', auth, feedbackController.leaveFeedback);
router.get('/event/:eventId', feedbackController.getFeedbackForEvent);

module.exports = router;
