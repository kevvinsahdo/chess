'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    id_match: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
    message: DataTypes.STRING
  }, {
    underscored: true,
  });
  Message.associate = function(models) {
    Message.belongsTo(models.User, {foreing_key: 'id_user', as: 'user'});
    Message.belongsTo(models.Match, {foreing_key: 'id_match', as: 'match'});
  };
  return Message;
};