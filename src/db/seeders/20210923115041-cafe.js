'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cafes', [{
      cashToken: "xpub6E9xd8uBPoC848aQHyPRevDJBhYf74MEgAdeu73KC19tBzpkKjeAqv7jGD35tvoj9bfz66bC1xWcM1aAb6PtTKZFBKyznSci4gL5ef5UryW",
      address: "12V9X6TJVACZxgXynTsih1HiSFwLmyi3gf",
      privKey: "Kz2W6Qg72NUTKgT7TWS3xiHFvKdPECcP2NVyMp5zxc8XDB2ALDTN",
      cashValue: 3000,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
