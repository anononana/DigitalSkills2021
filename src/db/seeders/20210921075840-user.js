'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      login: "JohnDoe",
      password: "123456",
      name: 'John',
      surname: 'Doe',
      email: 'example@example.com',
      nfc: "1",
      limit: 2000,
      account: 300,
      isAdmin: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      login: "Admin",
      password: "123456",
      name: 'Admin',
      nfc: "2",
      surname: 'Doe',
      email: 'example@example.com',
      limit: 2000,
      isAdmin: 1,
      createdAt: new Date(),
      updatedAt: new Date() 
    }, {
      login: "sdf",
      password: "123456",
      name: 'Ivan',
      surname: 'Antonov',
      email: 'example@example.com',
      limit: 5000,
      isAdmin: 0,
      createdAt: new Date(),
      updatedAt: new Date() 
    }, {
      login: "dfg",
      password: "123456",
      name: 'Lolita',
      surname: 'Doe',
      email: 'example@example.com',
      limit: 10000,
      isAdmin: 0,
      createdAt: new Date(),
      updatedAt: new Date() 
    }, {
      login: "dfgfd",
      password: "123456",
      name: 'Ivan',
      surname: 'Vasiliev',
      email: 'example@example.com',
      limit: 3000,
      isAdmin: 0,
      createdAt: new Date(),
      updatedAt: new Date() 
    }, {
      login: "sfd",
      password: "123456",
      name: 'Igor',
      surname: 'Stravinsky',
      email: 'example@example.com',
      limit: 16000,
      isAdmin: 0,
      createdAt: new Date(),
      updatedAt: new Date() 
    }, {
      login: "sdfsd",
      password: "123456",
      name: 'Obi',
      surname: 'Wan',
      email: 'example@example.com',
      limit: 18000,
      isAdmin: 0,
      createdAt: new Date(),
      updatedAt: new Date() 
    }, {
      login: "vvv",
      password: "123456",
      name: 'Gendalf',
      surname: 'Grey',
      email: 'example@example.com',
      limit: 20000,
      isAdmin: 0,
      createdAt: new Date(),
      updatedAt: new Date() 
    }, {
      login: "vvv2",
      password: "123456",
      name: 'Gendalf',
      surname: 'White',
      email: 'example@example.com',
      limit: 20000,
      isAdmin: 0,
      createdAt: new Date(),
      updatedAt: new Date() 
    }, {
      login: "vvvfd",
      password: "123456",
      name: 'Howard',
      surname: 'Wolowitch',
      email: 'example@example.com',
      limit: 20000,
      isAdmin: 0,
      createdAt: new Date(),
      updatedAt: new Date() 
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
    }
  }
};
