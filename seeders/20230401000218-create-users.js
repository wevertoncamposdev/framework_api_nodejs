'use strict';

const { v4: uuidv4 } = require('uuid');
const { faker } = require('@faker-js/faker'); // https://fakerjs.dev/guide/usage.html
const bcrypt = require('bcrypt');
const fs = require('fs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [];
    const pass = new Map();
    for (let i = 0; i < 10; i++) {
      const id = uuidv4();
      const password = faker.internet.password(8);
      pass.set(id, password);
      data.push({
        id: id,
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
        permissions: JSON.stringify({
          "method": {
            "get": faker.datatype.boolean(),
            "post": faker.datatype.boolean(),
            "put": faker.datatype.boolean(),
            "delete": faker.datatype.boolean()
          },
          "services":{
            "post": faker.datatype.boolean(),
            "organization": faker.datatype.boolean(),
          }
        }),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    };
    fs.appendFile('./config/passwords.json', JSON.stringify(Object.fromEntries(pass)), ()=>{console.log('Arquivos Salvo!')});
    await queryInterface.bulkInsert('Users', data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
