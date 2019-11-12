const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main');
const signupController = require('../controllers/signup');
const loginController = require('../controllers/login');

router.get('/', (req, res) => {
  res.redirect('/login')
}); 

router.get('/ui', mainController.ui);

router.get('/about', mainController.about); 

router.get('/signup', signupController.signup);

router.get('/login', loginController.login);

module.exports = router;