"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class LearningProgress extends Model {}

  LearningProgress.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      module_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "not_started",
      },

      completed_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "LearningProgress",
    }
  );

  return LearningProgress;
};