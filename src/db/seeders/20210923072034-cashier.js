'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cashiers', [{
      nfc: "1",
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nfc: "2",
      userId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("Cashiers", null, {});
    };
  },
};
