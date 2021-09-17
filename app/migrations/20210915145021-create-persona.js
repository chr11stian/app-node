'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Personas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Dni: {
        type: Sequelize.STRING
      },
      NombresApellido: {
        type: Sequelize.STRING
      },
      FechaNacimiento: {
        type: Sequelize.DATE
      },
      Genero: {
        type: Sequelize.STRING
      },
      HistoriaClinica: {
        type: Sequelize.STRING
      },
      EstablecimientoOrigen: {
        type: Sequelize.STRING
      },
      DomicilioDeclarado: {
        type: Sequelize.STRING
      },
      DomicilioRENIEC: {
        type: Sequelize.STRING
      },
      ReferenciaDomocilio: {
        type: Sequelize.STRING
      },
      Madre: {
        type: Sequelize.STRING
      },
      Padre: {
        type: Sequelize.STRING
      },
      Peso: {
        type: Sequelize.SMALLINT
      },
      ExistePadron: {
        type: Sequelize.BOOLEAN
      },
      CodigoSIS: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Personas');
  }
};