"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Assessment extends Model {
    static associate(models) {
      Assessment.hasMany(models.AssessmentResult, {
        foreignKey: "assessment_id",
      });

      Assessment.hasMany(models.Question, {
        foreignKey: "assessment_id",
      });
    }
  }

  Assessment.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Assessment",
    }
  );

  return Assessment;
};