'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Vacunas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Tipo: {
        type: Sequelize.STRING
      },
      Edad: {
        type: Sequelize.STRING
      },
      Dosis: {
        type: Sequelize.STRING
      },
      Fecha: {
        type: Sequelize.DATE
      },
      Observacion: {
        type: Sequelize.STRING
      },
      EESS: {
        type: Sequelize.STRING
      },
      Diagnostico: {
        type: Sequelize.STRING
      },
      Atiende: {
        type: Sequelize.STRING
      },
      Digitador: {
        type: Sequelize.STRING
      },
      IdPersona: {
        type: Sequelize.STRING
      },
      IdIPRESS: {
        type: Sequelize.STRING
      },
      IdCentroPoblado: {
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
    await queryInterface.dropTable('Vacunas');
  }
};