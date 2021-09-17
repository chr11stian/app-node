'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Psicomotors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Edad: {
        type: Sequelize.STRING
      },
      Evaluacion: {
        type: Sequelize.STRING
      },
      Fecha: {
        type: Sequelize.DATE
      },
      Cumple: {
        type: Sequelize.STRING
      },
      Diagnostico: {
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
    await queryInterface.dropTable('Psicomotors');
  }
};