'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    acronym: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    id_area: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  Course.associate = function(models) {
    // associations can be defined here
  };
  return Course;
};