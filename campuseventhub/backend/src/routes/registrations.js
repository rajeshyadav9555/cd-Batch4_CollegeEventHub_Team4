// registrations routes
const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');
const { auth } = require('../middlewares/auth');

router.post('/', auth, registrationController.registerForEvent);
router.get('/me', auth, registrationController.getMyRegistrations);

module.exports = router;
