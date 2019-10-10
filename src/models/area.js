'use strict';
module.exports = (sequelize, DataTypes) => {
  const Area = sequelize.define('Area', {
    name: DataTypes.STRING
  }, {
    underscored: true,
  });
  Area.associate = function(models) {
    // associations can be defined here
  };
  return Area;
};