'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tipoPerfiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      activo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'fechaRegistro',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'fechaModificacion'
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tipoPerfiles');
  },
};
