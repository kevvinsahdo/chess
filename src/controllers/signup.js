const { Course, User } = require('../models');
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
  let courses = await Course.findAll({ });

  // let csrf = req.csrfToken();

  res.render('main/signup', { courses })
}

const signupAction = async (req, res) => {
  bcrypt.genSalt(2, function (err, salt) {
    bcrypt.hash(req.body.password, salt,
      async (err, hash) => {
        await User.create({
          name: req.body.name,
          email: req.body.email,
          password: hash,
          id_course: req.body.selectCourse
        });

        if (err) {
          console.log(err);
          return;
        }

        res.redirect('/login');
      });
  });
}

module.exports = { signup, signupAction }