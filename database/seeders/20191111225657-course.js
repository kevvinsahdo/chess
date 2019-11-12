'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('course',
    [
      { id: 1, acronym: 'CC', name: 'Ciencia da Computação', id_area: 1, created_at: new Date(), updated_at: new Date() },
      { id: 2, acronym: 'ES', name: 'Engenharia de Software', id_area: 1, created_at: new Date(), updated_at: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('course', {}, {});
  }
};
