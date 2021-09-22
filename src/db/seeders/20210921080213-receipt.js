'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Receipts', [{
      sum: 200,
      userId: 1,
      printDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Receipts', null, {});
    }
  }
};
