'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ControlAtencions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Edad: {
        type: Sequelize.STRING
      },
      Fecha: {
        type: Sequelize.DATE
      },
      Peso: {
        type: Sequelize.STRING
      },
      Gr: {
        type: Sequelize.STRING
      },
      CondicionGr: {
        type: Sequelize.STRING
      },
      Talla: {
        type: Sequelize.STRING
      },
      Cm: {
        type: Sequelize.STRING
      },
      CondicionTalla: {
        type: Sequelize.STRING
      },
      cita: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('ControlAtencions');
  }
};