const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const movieController = require('../controllers/movieController');

router.get('/', movieController.getMovie);
router.get('/:title', login.required, movieController.getMoviedetail);


module.exports = router;