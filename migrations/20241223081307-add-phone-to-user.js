'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'contact', {
      allowNull: true,
      type: Sequelize.STRING(100),
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'contact');
  },
};
