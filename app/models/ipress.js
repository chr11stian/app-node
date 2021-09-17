'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ipress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Ipress.init({
    nombre: DataTypes.STRING,
    IdMicrored: DataTypes.STRING,
    IdRed: DataTypes.STRING,
    IdGeresa: DataTypes.STRING,
    Distrito: DataTypes.STRING,
    Ciudad: DataTypes.STRING,
    Departamento: DataTypes.STRING,
    Provincia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ipress',
  });
  return Ipress;
};