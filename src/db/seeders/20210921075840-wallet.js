'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Wallets', [{
        cashToken:  "tpubDF4XV68FHQzRwh7dsSuGbVAGRbBA72frhcdasyMQQmDRACxoS1fvvzNEkaavBDSqtkNJvoEzrNJsBoBvAbcy8HUAFahh3xv2sYHnsvp9HEb",
        cashValue: 2999,
      address: "mzjZhSXbUaBUU8Mde4sMm6Ke54GG9NYgLJ",
      privKey: "cRrN6cb91zGU3xAYMf5yywTisSkE1YsCWpAc6HoKTChE7paTFdxj",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
  }
};
