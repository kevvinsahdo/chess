const authenticated = async (req, res, next) => {
  if (req.session.user) {
    res.locals.logged = true;
    next();
  } else {
    res.redirect('/login');
  }
}

module.exports = { authenticated };