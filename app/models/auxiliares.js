'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Auxiliares extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Auxiliares.init({
    Dosis: DataTypes.STRING,
    Edad: DataTypes.STRING,
    Fecha: DataTypes.DATE,
    Observacion: DataTypes.STRING,
    Atiende: DataTypes.STRING,
    Digitador: DataTypes.STRING,
    Historia: DataTypes.STRING,
    IdPersona: DataTypes.STRING,
    IdIPRESS: DataTypes.STRING,
    IdCentroPoblado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Auxiliares',
  });
  return Auxiliares;
};