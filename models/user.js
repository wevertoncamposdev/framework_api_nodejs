'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    permissions:DataTypes.JSON
  }, {
    sequelize,
    modelName: 'User',
    paranoid: true,
    deletedAt: 'deletedAt'
  });
  return User;
};