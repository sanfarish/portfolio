'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Visitors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      remote: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      visit: {
        type: Sequelize.UUID,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE(6)
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE(6)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Visitors');
  }
};