'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Organization.init({
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    userId:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    states: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Organization',
    paranoid: true,
    deletedAt: 'destroyTime'
  });
  return Organization;
};