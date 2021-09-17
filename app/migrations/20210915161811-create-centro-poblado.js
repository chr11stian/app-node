'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CentroPoblados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      IdIpress: {
        type: Sequelize.STRING
      },
      IdMicrored: {
        type: Sequelize.STRING
      },
      IdRed: {
        type: Sequelize.STRING
      },
      IdGeresa: {
        type: Sequelize.STRING
      },
      Distrito: {
        type: Sequelize.STRING
      },
      Ciudad: {
        type: Sequelize.STRING
      },
      Departamento: {
        type: Sequelize.STRING
      },
      Provincia: {
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
    await queryInterface.dropTable('CentroPoblados');
  }
};