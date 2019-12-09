const { Match } = require('../models');


module.exports = async (server) => {
  server.on('connection', (client) => {

    client.on('move', async (move) => {
      let match = await Match.findOne({
        where: {
          id: move.match
        }
      });

      let user_id = client.handshake.session.user.id;
      if (match.id_user_2 == null &&  match.id_user_1 != user_id) {
        match.id_user_2 = user_id;
      }

      match.fen = move.fen;

      await match.save();

      client.broadcast.emit('move', move);
    });

    client.on('checkmate', async (game) => {
      let match = await Match.findOne({
        where: {
          id: game.match
        }
      });

      if (game.winner == 'w') {
        match.winner = match.id_user_2;
      } else {
        match.winner = match.id_user_1;
      }

      await match.save();
    });
  })
};