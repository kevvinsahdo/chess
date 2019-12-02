const { Course, Area } = require('../models');

const index = async (req, res) => {
  let courses = await Course.findAll({include: 'area'});
  
  res.render('main/course/list', { courses })
}

const create = async (req, res) => {
  let areas = await Area.findAll({});

  // let csrf = req.csrfToken();

  res.render('main/course/create', { areas })
}

const createAction = async (req, res) => {
  let data = {
    'name': req.body.name,
    'acronym': req.body.acronym,
    'description': req.body.description,
    'id_area': req.body.area,
  };

  Course.create(data).then( course => {
    res.redirect('/courses');
  }).catch( err => {
    res.redirect('/courses');
  });
}

const edit = async (req, res) => {
  let areas = await Area.findAll({});
  Course.findOne({
    where: {
      id: req.params.id
    }}
  ).then( course => {
    res.render('main/course/edit', { areas, course });
  }).catch( err => {
    res.redirect('/courses');
  });
}

const editAction = async (req, res) => {
  let data = {
    'name': req.body.name,
    'acronym': req.body.acronym,
    'description': req.body.description,
    'id_area': req.body.area,
  }

  Course.update(
    data,
    { where: {id: req.params.id}}
  ).then(course => {
    res.redirect('/courses');
  }).catch(err => {
    res.redirect('/courses');
  });
}

const delAction = async (req, res) => {
  let courses = await Course.findAll({});

  Course.destroy({
    where: {
      id: req.params.id
    }}
  ).then(() => {
    res.render('main/course/list', { courses })
  }).catch( err => {
    res.redirect('/courses');
  });
}



module.exports = { index, create, edit, delAction, createAction, editAction }