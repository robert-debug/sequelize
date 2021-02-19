const { Op } = require('sequelize');
const ingredient = require('../models/ingredient');
let Ingredient;
let moduleError;

try {
  const db = require('../models');
  ({ Ingredient } = db);
  if (Ingredient === undefined) {
    moduleError = 'It looks like you need to generate the Ingredient model.';
  }
} catch (e) {
  console.error(e);
  if (e.message.includes('Cannot find module')) {
    moduleError = 'It looks like you need initialize your project.';
  } else {
    moduleError = `An error was raised "${e.message}". Check the console for details.`;
  }
}
/* Don't change code above this line ******************************************/



async function createNewIngredient(amount, recipeId, measurementUnitId, foodStuff) {
  // Use the create method of the Ingredient object to create a new object.
  //
  // Docs: https://sequelize.org/v5/manual/instances.html#creating-persistent-instances
  await Ingredient.create({
    amount: amount,
    recipeId: recipeId,
    measurementUnitId: measurementUnitId,
    foodstuff: foodStuff,
  })
  //await Op.close();
}
//createNewIngredient(1, 1, 1, "test2");
// const { sequelize, Cat } = require("./models");

// async function main() {
//   const cat = await Cat.create({
//     firstName: "Curie",
//     specialSkill: "jumping",
//     age: 4,
//   });

//   console.log(cat.toJSON());

//   await sequelize.close();
// }


/* Don't change code below this line ******************************************/
module.exports = {
  createNewIngredient,
  loadingDbError: moduleError,
};
