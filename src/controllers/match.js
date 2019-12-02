const { Match } = require('../models');

const match = async (req, res) => {
  let match = await Match.findOne({
    where: {
      id: req.params.id
    }
  });

  res.render('main/match', { match })
}

module.exports = { match }