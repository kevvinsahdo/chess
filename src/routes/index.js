const express = require('express');
const router = express.Router();
const { authenticated } = require('../middlewares/auth');
const mainController = require('../controllers/main');
const signupController = require('../controllers/signup');
const loginController = require('../controllers/login');
const courseController = require('../controllers/course');
const rankingController = require('../controllers/ranking');
const matchController = require('../controllers/match');


router.get('/ui', mainController.ui);

router.get('/about', mainController.about); 

router.get('/signup', signupController.signup);

router.post('/signup', signupController.signupAction);

router.get('/login', loginController.login);

router.post('/login', loginController.loginAction);

router.get('/', authenticated, mainController.index);

router.get('/courses/:id/edit', authenticated, courseController.edit);

router.post('/courses/:id/edit', authenticated, courseController.editAction);

router.get('/courses/:id/del', authenticated, courseController.delAction);

router.get('/courses/create', authenticated, courseController.create);

router.post('/courses/create', authenticated, courseController.createAction);

router.get('/courses', authenticated, courseController.index);

router.get('/ranking', authenticated, rankingController.index);

router.get('/match/:id', authenticated, matchController.match);

module.exports = router;