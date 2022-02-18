var sideRadio = document.querySelector('#side');
var mainRadio = document.querySelector('#main');
var dessertRadio = document.querySelector('#dessert');
var entireMealRadio = document.querySelector('#meal');

var userMealType = document.querySelector('#recipe-type');
var userMealName = document.querySelector('#recipe-name');

var letsCookButton = document.querySelector('.lets-cook-btn');
var addRecipeButton = document.querySelector('.add-recipe-btn');
var clearButton = document.querySelector('.clear-btn');
var addNewButton = document.querySelector('.add-new-btn');

var crockPot = document.querySelector('.crockpot');
var mealOutput = document.querySelector('.meal-output');
var randomDish = document.querySelector('.random-dish');
var addRecipeFooter = document.querySelector('footer');
var addRecipeError = document.querySelector('.error-message');

letsCookButton.addEventListener('click', generateMeal);
addRecipeButton.addEventListener('click', addRecipe);
clearButton.addEventListener('click', clearMeal);
addNewButton.addEventListener('click', addUserMeal);

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

function clearMeal() {
  crockPot.classList.remove('hidden');
  mealOutput.classList.add('hidden');
}

function addRecipe() {
  addRecipeFooter.classList.remove('hidden');
}

function addUserMeal() {
  crockPot.classList.add('hidden');
  mealOutput.classList.remove('hidden');
  addRecipeError.classList.add('hidden');
  addRecipeError.innerText = 'Nope! The Recipe Type you entered isn\'t an option.';
  if (userMealType.value === 'Side') {
    sides.push(userMealName.value);
    randomDish.innerText = userMealName.value;
  } else if (userMealType.value === 'Main Dish') {
    mainDishes.push(userMealName.value);
    randomDish.innerText = userMealName.value;
  } else if (userMealType.value === 'Dessert') {
    desserts.push(userMealName.value);
    randomDish.innerText = userMealName.value;
  } else if (userMealType.value === 'Desert') {
    addRecipeError.classList.remove('hidden');
    addRecipeError.innerText = 'You spelled dessert wrong';
  } else {
    addRecipeError.classList.remove('hidden');
  }
}
