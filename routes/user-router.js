const express = require('express');
const router = express.Router();

const login = require('../middleware/login');
const userController = require('../controllers/userController');



router.post('/', userController.inserUser);
router.post('/login', userController.Login);
router.get('/logout', userController.Logout );



module.exports = router;







