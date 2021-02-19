'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    amount: DataTypes.DECIMAL,
    measurementUnitId: DataTypes.INTEGER,
    foodstuff: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true,
      },
    },
    recipeId: DataTypes.INTEGER
  }, {});
  Ingredient.associate = function(models) {
    Ingredient.belongsTo(models.MeasurementUnit, { foreignKey: 'MeasurementUnitId' })
    Ingredient.belongsTo(models.recipe, { foreignKey: 'recipeId' })
  };
  return Ingredient;
};