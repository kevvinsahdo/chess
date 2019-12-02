const { Match, User } = require('../models');
const Sequelize = require('sequelize');
const op = Sequelize.Op;

const index = async (req, res) => {
  let ranking = await Match.findAll({
    attributes: [
      'winner',
      [Sequelize.fn('COUNT', Sequelize.col('winner')), 'winnerCount'],
    ],
    having: Sequelize.where(Sequelize.fn('COUNT', Sequelize.col('winner')), {
      [op.gt]: 0
    }),
    group: ['winner']
  });

  let result = [];

  await Promise.all( 
    ranking.map(
      async row => {
        let user = await User.findOne({
          where: {
            id: row.winner
          }
        });

        result.push({ name: user.name, wins: row.dataValues.winnerCount });
      }
  ));

  res.render('main/ranking', { ranking: result });
}


module.exports = { index }