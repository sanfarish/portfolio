'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Visitors', [
      {
        remote: '1234-5-6-7890',
        visit: crypto.randomUUID(),
        created_at: new Date(new Date().getTime() - 31104000000), // < 1 year
        updated_at: new Date(new Date().getTime() - 31104000000)
      },
      {
        remote: '123-45-67-890',
        visit: crypto.randomUUID(),
        created_at: new Date(new Date().getTime() - 2419200000), // < 1 month
        updated_at: new Date(new Date().getTime() - 2419200000)
      },
      {
        remote: '12-345-678-90',
        visit: crypto.randomUUID(),
        created_at: new Date(new Date().getTime() - 518400000), // < 1 week
        updated_at: new Date(new Date().getTime() - 518400000)
      },
      {
        remote: '1-2345-6789-0',
        visit: crypto.randomUUID(),
        created_at: new Date(), // today
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Visitors', null, {});
  }
};
