"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Major extends Model {
    static associate(models) {
      Major.hasMany(models.MajorRecommendation, {
        foreignKey: "major_id",
      });

      Major.hasMany(models.Roadmap, {
        foreignKey: "major_id",
      });

      Major.hasMany(models.LearningModule, {
        foreignKey: "major_id",
      });
    }
  }

  Major.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Major",
    }
  );

  return Major;
};