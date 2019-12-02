'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    acronym: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    id_area: DataTypes.INTEGER
  }, {
    underscored: true,
    tableName: 'course'
  });

  Course.associate = function (models) {
    Course.belongsTo(models.Area, { foreignKey: 'id_area', as: 'area'});
  };

  return Course;
};