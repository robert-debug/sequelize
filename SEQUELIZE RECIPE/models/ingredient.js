'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    amount: DataTypes.DECIMAL,
    measurementUnitId: DataTypes.INTEGER,
    foodstuff: DataTypes.TEXT,
    recipeId: DataTypes.INTEGER
  }, {});
  Ingredient.associate = function(models) {
    MeasurementUnit.belongsTo( model.MeasurementUnit, { foreignKey: 'MeasurementUnitId' })
    Ingredient.belongsTo(model.recipe, { foreignKey: 'recipeId' })
  };
  return Ingredient;
};