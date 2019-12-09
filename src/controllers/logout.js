const { User, Course } = require('../models');
const bcrypt = require('bcrypt');

const logoutAction = async (req, res) => {
  req.session.destroy( err => {
    if (err) {
      console.log(err);
    }

    res.redirect('/');
  });

}

module.exports = { logoutAction }