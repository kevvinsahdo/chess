const { Match } = require('../models');


module.exports = async (server) => {
  server.on('connection', (client) => {
    console.log('New connection');
    
    client.on('move', async (move) => {
      let match = await Match.update(
        { fen: move.fen }, 
        { 
          where: {
            id: move.match
          }
        }
      );

      client.broadcast.emit('move', move);
    });
  })
};