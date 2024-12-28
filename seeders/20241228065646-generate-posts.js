'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [
      {
        id: 1,
        title: 'Exploring the Universe',
        description:
          'A deep dive into the mysteries of the cosmos, black holes, and galaxies.',
        created_on: 1709293800,
        created_by: 1,
      },
      {
        id: 2,
        title: 'The Future of AI',
        description:
          'An analysis of how artificial intelligence is shaping the future of various industries.',
        created_on: 1713173500,
        created_by: 3,
      },
      {
        id: 3,
        title: 'Understanding Quantum Computing',
        description:
          'Breaking down the concepts of quantum computing and its potential applications.',
        created_on: 1716215400,
        created_by: 2,
      },
      {
        id: 4,
        title: 'The Rise of Remote Work',
        description:
          'How the pandemic accelerated the shift to remote work and what the future holds.',
        created_on: 1717609500,
        created_by: 4,
      },
      {
        id: 5,
        title: 'Sustainable Energy Solutions',
        description:
          'Exploring renewable energy sources and their role in combating climate change.',
        created_on: 1719990000,
        created_by: 5,
      },
      {
        id: 6,
        title: 'Mental Health in the Digital Age',
        description:
          'A look at how digital life impacts mental well-being and strategies for maintaining balance.',
        created_on: 1723472400,
        created_by: 6,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  },
};
