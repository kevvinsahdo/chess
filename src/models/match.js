'use strict';
module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {
    id_user_1: DataTypes.INTEGER,
    id_user_2: DataTypes.INTEGER,
    winner: DataTypes.INTEGER,
    fen: DataTypes.STRING
  }, {
    underscored: true,
    tableName: 'match'
  });

  Match.associate = function(models) {
    Match.belongsTo(models.User, { as: 'user_1', foreignKey: 'id_user_1' });
    Match.belongsTo(models.User, { as: 'user_2', foreignKey: 'id_user_2' });
    Match.belongsTo(models.User, { as: 'winnerUser', foreignKey: 'winner' });
  };
  
  return Match;
};