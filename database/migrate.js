const sequelize = require('./index');
const models = require('../models');

const migrate = async () => {
  for (const model of Object.values(models)) {
    await model(sequelize).sync({ alter: true });
  }
};

module.exports = migrate;
