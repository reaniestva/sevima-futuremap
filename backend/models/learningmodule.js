"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class LearningModule extends Model {}

  LearningModule.init(
    {
      major_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      content: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "LearningModule",
    }
  );

  return LearningModule;
};