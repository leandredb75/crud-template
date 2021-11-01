"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Paires", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      marque: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.ENUM("EN STOCK", "RESERVE", "VENDU"),
      },
      plateform: {
        type: Sequelize.STRING,
      },
      isBoosted: {
        type: Sequelize.TINYINT,
      },
      buyAt: {
        type: Sequelize.DECIMAL,
      },
      sellAt: {
        type: Sequelize.DECIMAL,
      },
      estimatedAt: {
        type: Sequelize.DECIMAL,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Paires");
  },
};
