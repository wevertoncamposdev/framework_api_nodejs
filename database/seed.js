const sequelize = require('./index');
const models = require('../models');

const seed = async () => {
  const user = await models.User.create({
    name: 'John Doe',
    email: 'john@example.com',
    password: '123456',
  });
  console.log(`Created user with email ${user.email}`);
};

module.exports = seed;
