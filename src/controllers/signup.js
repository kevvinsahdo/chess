const signup = (req, res) => {
  let courses = [
    { id: 1, name: "ES"},
    { id: 2, name: "CC"}
  ]

  res.render('main/signup', { courses })

}

module.exports = { signup }