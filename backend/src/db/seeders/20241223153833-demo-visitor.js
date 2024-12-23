'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Visitors', [
      {
        remote: '1234-5-6-7890',
        visit: crypto.randomUUID(),
        created_at: new Date('2024-01-01'),
        updated_at: new Date('2024-01-01')
      },
      {
        remote: '123-45-67-890',
        visit: crypto.randomUUID(),
        created_at: new Date('2024-12-01'),
        updated_at: new Date('2024-12-01')
      },
      {
        remote: '12-345-678-90',
        visit: crypto.randomUUID(),
        created_at: new Date('2024-12-23'),
        updated_at: new Date('2024-12-23')
      },
      {
        remote: '1-2345-6789-0',
        visit: crypto.randomUUID(),
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Visitors', null, {});
  }
};
