'use strict';

const { v4: uuidv4 } = require('uuid');
const { faker } = require('@faker-js/faker'); // https://fakerjs.dev/guide/usage.html

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = [];
    const users = await queryInterface.sequelize.query('SELECT id FROM Users');
    for (let i = 0; i < 120; i++) {
      data.push({
        id: uuidv4(),
        userId:users[0][Math.floor(Math.random() * users[0].length)].id, // Seleciona um id aleatório da lista de ids de usuários
        title: faker.lorem.lines(1),
        body: faker.lorem.paragraphs(),
        tag: faker.color.rgb(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    };
    await queryInterface.bulkInsert('Posts', data);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  }

};
