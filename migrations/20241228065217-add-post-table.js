'use strict';

/** @type {import('sequelize-cli').Migration} */

export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(36),
        defaultValue: Sequelize.UUIDV4,
      },
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      created_on: {
        type: Sequelize.INTEGER,
      },
      created_by: {
        type: Sequelize.STRING(36),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  },
};
