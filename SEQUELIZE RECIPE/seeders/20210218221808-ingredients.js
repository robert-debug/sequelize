'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ingredients', [
{ recipeId: 12, amount: 3, measurementUnitId: 12, foodstuff: 'Thai green curry paste', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 12, amount: 400, measurementUnitId: 6, foodstuff: 'coconut milk', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 12, amount: 150, measurementUnitId: 4, foodstuff: 'cooked prawns', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 12, amount: 250, measurementUnitId: 4, foodstuff: 'courgetti', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 11, amount: 3, measurementUnitId: 14, foodstuff: 'large white potatoes', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 11, amount: 2, measurementUnitId: 12, foodstuff: 'olive oil, for frying', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 11, amount: 4, measurementUnitId: 14, foodstuff: 'pork sausages', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 11, amount: 200, measurementUnitId: 4, foodstuff: 'cherry tomatoes on the vine', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 11, amount: 0.5, measurementUnitId: 14, foodstuff: 'tub fresh pesto', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 10, amount: 150, measurementUnitId: 4, foodstuff: 'peeled king prawns', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 10, amount: 1.5, measurementUnitId: 12, foodstuff: 'jerk seasoning', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 10, amount: 400, measurementUnitId: 4, foodstuff: 'kidney beans in chili sauce', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 10, amount: 250, measurementUnitId: 4, foodstuff: 'coconut rice', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 9, amount: 2, measurementUnitId: 12, foodstuff: 'olive oil, for frying', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 9, amount: 200, measurementUnitId: 4, foodstuff: 'risotto rice', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 9, amount: 700, measurementUnitId: 6, foodstuff: 'chicken or vegetable stock', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 9, amount: 1, measurementUnitId: 14, foodstuff: 'tub fresh pesto', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 9, amount: 100, measurementUnitId: 4, foodstuff: 'goat\'s cheese', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 8, amount: 1, measurementUnitId: 14, foodstuff: 'cauliflower', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 8, amount: 1.5, measurementUnitId: 12, foodstuff: 'oil', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 8, amount: 2, measurementUnitId: 13, foodstuff: 'fennel seeds', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 8, amount: 150, measurementUnitId: 4, foodstuff: 'red lentils', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 8, amount: 3, measurementUnitId: 12, foodstuff: 'curry paste of your choice', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 8, amount: 0.5, measurementUnitId: 14, foodstuff: 'lemon, juiced', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 6, amount: 200, measurementUnitId: 4, foodstuff: 'cooking chorizo', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 6, amount: 800, measurementUnitId: 4, foodstuff: 'chopped tomatoes', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 6, amount: 800, measurementUnitId: 4, foodstuff: 'drained butter beans', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 6, amount: 1, measurementUnitId: 14, foodstuff: 'tub fresh pesto', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 5, amount: 2, measurementUnitId: 15, foodstuff: 'cherry tomatoes', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 5, amount: 400, measurementUnitId: 4, foodstuff: 'mixed bean salad, drained', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 5, amount: 200, measurementUnitId: 4, foodstuff: 'baby spinach', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 5, amount: 4, measurementUnitId: 14, foodstuff: 'medium eggs', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 5, amount: 50, measurementUnitId: 4, foodstuff: 'thinly sliced smoked ham', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 4, amount: 300, measurementUnitId: 4, foodstuff: 'cooked beetroot in water', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 4, amount: 400, measurementUnitId: 4, foodstuff: 'can of chickpeas, drained', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 4, amount: 3, measurementUnitId: 12, foodstuff: 'vegan pesto', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 4, amount: 1, measurementUnitId: 12, foodstuff: 'olive oil', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 4, amount: 1, measurementUnitId: 16, foodstuff: 'vinegar', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 4, amount: 2, measurementUnitId: 14, foodstuff: 'ciabatta rolls', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 4, amount: 2, measurementUnitId: 14, foodstuff: 'handfulls mixed greens', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 3, amount: 250, measurementUnitId: 4, foodstuff: 'new potatoes, halved', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 3, amount: 2, measurementUnitId: 12, foodstuff: 'oil', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 3, amount: 2, measurementUnitId: 14, foodstuff: 'large leeks, thinly sliced', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 3, amount: 4, measurementUnitId: 14, foodstuff: 'eggs', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 3, amount: 100, measurementUnitId: 4, foodstuff: 'peppered smoked mackerel', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 3, amount: 2, measurementUnitId: 12, foodstuff: 'creamed horseradish', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 1, amount: 1, measurementUnitId: 10, foodstuff: 'lean ground beef', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 1, amount: 1, measurementUnitId: 14, foodstuff: 'medium onion, chopped', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 1, amount: 2, measurementUnitId: 14, foodstuff: 'garlic cloves, minced', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 1, amount: 1, measurementUnitId: 13, foodstuff: 'Italian seasoning', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 1, amount: 0.5, measurementUnitId: 13, foodstuff: 'pepper', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 1, amount: 0.25, measurementUnitId: 13, foodstuff: 'salt', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 1, amount: 2, measurementUnitId: 1, foodstuff: 'beef stock', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 1, amount: 1, measurementUnitId: 15, foodstuff: 'fire-roasted diced tomatoes', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 1, amount: 2, measurementUnitId: 1, foodstuff: 'uncooked spiral pasta', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 1, amount: 1, measurementUnitId: 1, foodstuff: 'frozen peas', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 1, amount: 1, measurementUnitId: 1, foodstuff: 'heavy whipped cream', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 1, amount: 0.5, measurementUnitId: 1, foodstuff: 'grated Parmesan cheese', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 2, amount: 2, measurementUnitId: 12, foodstuff: 'peanut butter', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 2, amount: 1, measurementUnitId: 12, foodstuff: 'jelly, your favorite flavor', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 2, amount: 2, measurementUnitId: 16, foodstuff: 'bread, your favorite kind', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 7, amount: 2, measurementUnitId: 14, foodstuff: 'unbaked pie crusts', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 7, amount: 2.5, measurementUnitId: 10, foodstuff: 'green grapes', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 7, amount: 1, measurementUnitId: 1, foodstuff: 'white sugar, plus extra for top crust', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 7, amount: 0.5, measurementUnitId: 13, foodstuff: 'nutmeg', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 7, amount: 1, measurementUnitId: 14, foodstuff: 'lemon', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 7, amount: 0.25, measurementUnitId: 1, foodstuff: 'elderberry flower syrup', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 7, amount: 0.25, measurementUnitId: 1, foodstuff: 'dark honey', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 7, amount: 0.25, measurementUnitId: 13, foodstuff: 'salt', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 7, amount: 3, measurementUnitId: 12, foodstuff: 'cornstarch', createdAt: new Date(), updatedAt: new Date() },
{ recipeId: 7, amount: 2, measurementUnitId: 12, foodstuff: 'unsalted butter, cut into small pieces', createdAt: new Date(), updatedAt: new Date() },

    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
