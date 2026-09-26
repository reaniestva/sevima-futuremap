"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      Question.belongsTo(models.Assessment, {
        foreignKey: "assessment_id",
      });

      Question.hasMany(models.Option, {
        foreignKey: "question_id",
      });
    }
  }

  Question.init(
    {
      assessment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      question: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Question",
    }
  );

  return Question;
};