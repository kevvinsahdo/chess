const login = (req, res) => {
  let courses = [
    { id: 1, name: "ES" },
    { id: 2, name: "CC" }
  ]

  let csrf = req.csrfToken();

  res.render('main/login', { courses, csrf })
}

module.exports = { login }