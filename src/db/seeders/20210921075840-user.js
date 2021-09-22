'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      login: "JohnDoe",
      password: "123456",
      name: 'John',
      surname: 'Doe',
      email: 'example@example.com',
      limit: 2000,
      isAdmin: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      login: "Admin",
      password: "123456",
      name: 'Admin',
      surname: 'Doe',
      email: 'example@example.com',
      limit: 2000,
      isAdmin: 1,
      createdAt: new Date(),
      updatedAt: new Date() 
    }, {
      login: "sdf",
      password: "123456",
      name: 'Admin',
      surname: 'Doe',
      email: 'example@example.com',
      limit: 5000,
      isAdmin: 0,
      createdAt: new Date(),
      updatedAt: new Date() 
    }, {
      login: "dfg",
      password: "123456",
      name: 'Admin',
      surname: 'Doe',
      email: 'example@example.com',
      limit: 10000,
      isAdmin: 0,
      createdAt: new Date(),
      updatedAt: new Date() 
    }, {
      login: "dfgfd",
      password: "123456",
      name: 'Admin',
      surname: 'Doe',
      email: 'example@example.com',
      limit: 3000,
      isAdmin: 0,
      createdAt: new Date(),
      updatedAt: new Date() 
    }, {
      login: "sfd",
      password: "123456",
      name: 'Admin',
      surname: 'Doe',
      email: 'example@example.com',
      limit: 16000,
      isAdmin: 0,
      createdAt: new Date(),
      updatedAt: new Date() 
    }, {
      login: "sdfsd",
      password: "123456",
      name: 'Admin',
      surname: 'Doe',
      email: 'example@example.com',
      limit: 18000,
      isAdmin: 0,
      createdAt: new Date(),
      updatedAt: new Date() 
    }, {
      login: "vvv",
      password: "123456",
      name: 'Admin',
      surname: 'Doe',
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
