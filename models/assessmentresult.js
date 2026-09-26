"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class AssessmentResult extends Model {
    static associate(models) {
      AssessmentResult.belongsTo(models.User, {
        foreignKey: "user_id",
      });

      AssessmentResult.belongsTo(models.Assessment, {
        foreignKey: "assessment_id",
      });
    }
  }

  AssessmentResult.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      assessment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      result: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "AssessmentResult",
    }
  );

  return AssessmentResult;
};