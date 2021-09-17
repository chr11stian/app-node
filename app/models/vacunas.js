'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vacunas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Vacunas.init({
    Tipo: DataTypes.STRING,
    Edad: DataTypes.STRING,
    Dosis: DataTypes.STRING,
    Fecha: DataTypes.DATE,
    Observacion: DataTypes.STRING,
    EESS: DataTypes.STRING,
    Diagnostico: DataTypes.STRING,
    Atiende: DataTypes.STRING,
    Digitador: DataTypes.STRING,
    IdPersona: DataTypes.STRING,
    IdIPRESS: DataTypes.STRING,
    IdCentroPoblado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vacunas',
  });
  return Vacunas;
};