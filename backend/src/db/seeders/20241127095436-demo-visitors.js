'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('visitors', [
      {
        farishasan_visit: crypto.randomUUID(), // check monthly
        created_at: new Date("2024-10-25"),
        updated_at: new Date("2024-10-25")
      },
      {
        farishasan_visit: crypto.randomUUID(), // check weekly
        created_at: new Date("2024-11-15"),
        updated_at: new Date("2024-11-15")
      },
      {
        farishasan_visit: crypto.randomUUID(),
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('visitors', null, {})
  }
};
