var sideRadio = document.querySelector('#side');
var mainRadio = document.querySelector('#main');
var dessertRadio = document.querySelector('#dessert');
var entireMealRadio = document.querySelector('#meal');

var letsCookButton = document.querySelector('.lets-cook-btn');
var addRecipeButton = document.querySelector('.add-recipe-btn');
var clearButton = document.querySelector('.clear-btn');

var crockPot = document.querySelector('.crockpot');
var mealOutput = document.querySelector('.meal-output');;
var randomDish = document.querySelector('.random-dish');

letsCookButton.addEventListener('click', generateMeal);
addRecipeButton.addEventListener('click', addRecipe);
clearButton.addEventListener('click', clearMeal);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function generateMeal() {
  crockPot.classList.add('hidden');
  mealOutput.classList.remove('hidden');
  if (sideRadio.checked) {
    randomDish.innerText = sides[getRandomIndex(sides)];
  } else if (mainRadio.checked) {
    randomDish.innerText = mainDishes[getRandomIndex(mainDishes)];
  } else if (dessertRadio.checked) {
    randomDish.innerText = desserts[getRandomIndex(desserts)];
  } else if (entireMealRadio.checked) {
    randomDish.innerText = `${mainDishes[getRandomIndex(mainDishes)]} with a side of
    ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!`
  }
}

function addRecipe() {

}

function clearMeal() {

}
