'use strict';

const { v4: uuidv4 } = require('uuid');
const { faker } = require('@faker-js/faker'); // https://fakerjs.dev/guide/usage.html

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        id: uuidv4(),
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    };
    await queryInterface.bulkInsert('Users', data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
