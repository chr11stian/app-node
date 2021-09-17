'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuplementoVitaminaA extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SuplementoVitaminaA.init({
    Edad: DataTypes.STRING,
    Dosis: DataTypes.STRING,
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
    modelName: 'SuplementoVitaminaA',
  });
  return SuplementoVitaminaA;
};