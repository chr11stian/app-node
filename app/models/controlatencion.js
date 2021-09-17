'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ControlAtencion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ControlAtencion.init({
    Edad: DataTypes.STRING,
    Fecha: DataTypes.DATE,
    Peso: DataTypes.STRING,
    Gr: DataTypes.STRING,
    CondicionGr: DataTypes.STRING,
    Talla: DataTypes.STRING,
    Cm: DataTypes.STRING,
    CondicionTalla: DataTypes.STRING,
    cita: DataTypes.DATE,
    IdPersona: DataTypes.STRING,
    IdIPRESS: DataTypes.STRING,
    IdCentroPoblado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ControlAtencion',
  });
  return ControlAtencion;
};