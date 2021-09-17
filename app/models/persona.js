'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Persona.init({
    Dni: DataTypes.STRING,
    NombresApellido: DataTypes.STRING,
    FechaNacimiento: DataTypes.DATE,
    Genero: DataTypes.STRING,
    HistoriaClinica: DataTypes.STRING,
    EstablecimientoOrigen: DataTypes.STRING,
    DomicilioDeclarado: DataTypes.STRING,
    DomicilioRENIEC: DataTypes.STRING,
    ReferenciaDomocilio: DataTypes.STRING,
    Madre: DataTypes.STRING,
    Padre: DataTypes.STRING,
    Peso: DataTypes.SMALLINT,
    ExistePadron: DataTypes.BOOLEAN,
    CodigoSIS: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Persona',
  });
  return Persona;
};