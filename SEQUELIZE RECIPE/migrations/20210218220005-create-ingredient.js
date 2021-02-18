'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Ingredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.DECIMAL(5,2),
        allowNull: false
      },
      measurementUnitId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "MeasurementUnits"}
      },
      foodstuff: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      recipeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "recipes" }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Ingredients');
  }
};