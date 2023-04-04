'use strict';

const { v4: uuidv4 } = require('uuid');
const { faker } = require('@faker-js/faker'); // https://fakerjs.dev/guide/usage.html

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = [];
    const users = await queryInterface.sequelize.query('SELECT id FROM users');
    for (let i = 0; i < 100; i++) {
      data.push({
        id: uuidv4(),
        userId:users[0][Math.floor(Math.random() * users[0].length)].id, // Seleciona um id aleatório da lista de ids de usuários
        name: faker.company.name(),
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        states: faker.address.state(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    };
    await queryInterface.bulkInsert('Organizations', data);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Organizations', null, {});
  }
};
