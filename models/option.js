"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Option extends Model {
    static associate(models) {
      Option.belongsTo(models.Question, {
        foreignKey: "question_id",
      });
    }
  }

  Option.init(
    {
      question_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      text: {
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
      modelName: "Option",
    }
  );

  return Option;
};