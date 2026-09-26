"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("LearningProgresses", {
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

      module_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "LearningModules",
          key: "id",
        },
      },

      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "not_started",
      },

      completed_at: {
        type: Sequelize.DATE,
        allowNull: true,
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
    await queryInterface.dropTable("LearningProgresses");
  },
};