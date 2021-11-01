"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Paires extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Paires.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },

      type: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },

      marque: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },

      image: {
        type: DataTypes.STRING(9055),
        allowNull: false,
      },

      status: {
        type: DataTypes.ENUM("EN STOCK", "RESERVE", "VENDU"),
      },

      plateform: {
        type: DataTypes.STRING(255),
        allowNull: null,
      },

      isBoosted: {
        type: DataTypes.TINYINT(0),
        allowNull: false,
      },

      buyAt: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

      estimatedAt: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

      sellAt: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Paires",
    }
  );
  return Paires;
};
