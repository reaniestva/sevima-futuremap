"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class MajorRecommendation extends Model {}

  MajorRecommendation.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      major_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },

      rank: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "MajorRecommendation",
    }
  );

  return MajorRecommendation;
};