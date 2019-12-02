'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    id_course: DataTypes.INTEGER
  }, {
    underscored: true,
    tableName: 'user'
  });
  User.associate = function(models) {

  };
  return User;
};