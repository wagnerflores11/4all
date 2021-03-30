const express = require('express');
const router = express.Router();
const login = require('../middleware/login')

const reservartionController = require('../controllers/reservationController');


router.get('/:title', login.required, reservartionController.Reservation )


module.exports = router;