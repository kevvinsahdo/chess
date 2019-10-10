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
    // associations can be defined here
  };
  return Message;
};