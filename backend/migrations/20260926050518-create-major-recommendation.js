"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("MajorRecommendations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },

      major_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Majors",
          key: "id",
        },
      },

      score: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },

      rank: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("MajorRecommendations");
  },
};