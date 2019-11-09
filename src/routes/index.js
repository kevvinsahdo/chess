const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main');
const signupController = require('../controllers/signup');

router.get('/', mainController.index); 

router.get('/about', mainController.about); 

router.get('/ui', mainController.ui);

router.get('/signup', signupController.signup);

module.exports = router;