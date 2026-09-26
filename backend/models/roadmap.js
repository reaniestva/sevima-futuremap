"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Roadmap extends Model {}

  Roadmap.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      major_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Roadmap",
    }
  );

  return Roadmap;
};