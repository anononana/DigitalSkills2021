'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Caves', [{
      cashToken: "tpubDDud6AP3pBEa4Uhw9b9pHty2KBebKcWJb3NcvSCPiCSGiLjNzwhzPEjYLLXpCznzputkuerdM485pxCeyqzARQVSzWka7NBatcH6JNdTXew",
      address: "mgkWkTwjqH1gT97J1B94vSSJzzHwaQCa4u",
      privKey: "cPUkV5sH4jkb5FwgV9WVnU2XjYji5wz9kLTQpvcwG8AbKQJ7DYL3",
      cashValue: 3000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cashToken:  "tpubDF4XV68FHQzRwh7dsSuGbVAGRbBA72frhcdasyMQQmDRACxoS1fvvzNEkaavBDSqtkNJvoEzrNJsBoBvAbcy8HUAFahh3xv2sYHnsvp9HEb",
      cashValue: 2999,
    address: "mzjZhSXbUaBUU8Mde4sMm6Ke54GG9NYgLJ",
    privKey: "cRrN6cb91zGU3xAYMf5yywTisSkE1YsCWpAc6HoKTChE7paTFdxj",
    createdAt: new Date(),
      updatedAt: new Date()
  }])
  },

  down: async (queryInterface, Sequelize) => {
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("Caves", null, {});
    };
  }
};
