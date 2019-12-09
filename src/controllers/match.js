const { Match, User } = require('../models');

const match = async (req, res) => {
  let match = await Match.findOne({
    where: {
      id: req.params.id
    },
    include: [
      { model: User, as: 'user_1' },
      { model: User, as: 'user_2' },
      { model: User, as: 'winnerUser' },
    ]
  });
  
  let color = 'white';
  if (req.session.user.id == match.id_user_2 
      || match.id_user_2 == null 
      && match.id_user_1 != req.session.user.id ) {
    color = 'black';
  } 

  res.render('main/match', { match , color})
};

const newMatch = async (req, res) => {
  let match = await Match.create({
    id_user_1: req.session.user.id
  });

  res.redirect(`/match/${match.id}`);
};

module.exports = { match, newMatch }