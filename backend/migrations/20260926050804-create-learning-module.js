"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("LearningModules", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      major_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Majors",
          key: "id",
        },
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      content: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("LearningModules");
  },
};