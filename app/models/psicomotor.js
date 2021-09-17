'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Psicomotor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Psicomotor.init({
    Edad: DataTypes.STRING,
    Evaluacion: DataTypes.STRING,
    Fecha: DataTypes.DATE,
    Cumple: DataTypes.STRING,
    Diagnostico: DataTypes.STRING,
    IdPersona: DataTypes.STRING,
    IdIPRESS: DataTypes.STRING,
    IdCentroPoblado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Psicomotor',
  });
  return Psicomotor;
};