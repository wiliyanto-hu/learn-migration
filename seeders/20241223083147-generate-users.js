'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1,
          first_name: 'Clive',
          last_name: 'Doe',
          email: 'clivedoe@example.com',
          created_on: 1734942799,
          contact: '1+112334',
        },
        {
          id: 2,
          first_name: 'Emma',
          last_name: 'Smith',
          email: 'emmasmith@example.com',
          created_on: 1624304000,
          contact: '1+1234567890',
        },
        {
          id: 3,
          first_name: 'Liam',
          last_name: 'Johnson',
          email: 'liamjohnson@example.com',
          created_on: 1609459200,
          contact: '1+9876543210',
        },
        {
          id: 4,
          first_name: 'Sophia',
          last_name: 'Brown',
          email: 'sophiabrown@example.com',
          created_on: 1577836800,
          contact: '1+2345678901',
        },
        {
          id: 5,
          first_name: 'James',
          last_name: 'Williams',
          email: 'jameswilliams@example.com',
          created_on: 1585612800,
          contact: '1+3456789012',
        },
        {
          id: 6,
          first_name: 'Olivia',
          last_name: 'Jones',
          email: 'oliviajones@example.com',
          created_on: 1559308800,
          contact: '1+4567890123',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
