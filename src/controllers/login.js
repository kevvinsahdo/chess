const { User } = require('../models');
const bcrypt = require('bcrypt');


const login = async (req, res) => {
  // let csrf = req.csrfToken();

  res.render('main/login');
}

const loginAction = async (req, res) => {
  let user = await User.findOne({
    where: {
      email: req.body.email
    }
  });

  if (user) {
    bcrypt.compare(req.body.password, user.password, (err, ok) => {
      if(ok) {
        req.session.user = user;
        console.log(req.session);
        res.redirect('/');
      } else {
        res.redirect('/login');
      }
    })
  };
}

module.exports = { login, loginAction }