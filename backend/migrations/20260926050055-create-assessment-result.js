"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("AssessmentResults", {
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

      assessment_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Assessments",
          key: "id",
        },
      },

      result: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      score: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
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
    await queryInterface.dropTable("AssessmentResults");
  },
};