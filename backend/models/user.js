"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.AssessmentResult, {
        foreignKey: "user_id",
      });

      User.hasMany(models.MajorRecommendation, {
        foreignKey: "user_id",
      });

      User.hasMany(models.Roadmap, {
        foreignKey: "user_id",
      });

      User.hasMany(models.LearningProgress, {
        foreignKey: "user_id",
      });
    }
  }

  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "student",
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};