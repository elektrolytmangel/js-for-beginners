const Was_Ist_Programmieren = ["Beispiele Programmiersprachen", "Y JavaScript"];

const JS_Meine_Erste_Dynamische_Webseite = "Praktisches Beispiel";

const Ressourcen = [
  "https://stackoverflow.com/",
  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference",
];

const MyFavouriteQuotes = ["JavaScript Basics", "Umsetzung in Website"];
let index = 0;
let itIsBeerTime = false;
while (itIsBeerTime === false) {
  const task = MyFavouriteQuotes[index];
  task.repeat();
  index++;
  if (index === MyFavouriteQuotes.length) {
    index = 0;
  }

  if (new Date(Date.now()).getHours() === 16) {
    itIsBeerTime = true;
  }
}

console.log(
  Was_Ist_Programmieren,
  JS_Meine_Erste_Dynamische_Webseite,
  Ressourcen
);

// Dynamically Typed Example

// Example 1: Dynamic Typing
let dynamicVariable = 10; // variable is initially assigned a number
console.log(dynamicVariable); // Output: 10

dynamicVariable = "Hello, World!"; // variable is reassigned a string
console.log(dynamicVariable); // Output: Hello, World!

// Example 2: Dynamic Type Inference
let dynamicInferredVariable = 5; // variable is initially assigned a number
console.log(dynamicInferredVariable); // Output: 5

dynamicInferredVariable = dynamicInferredVariable + " apples"; // variable is reassigned with a string concatenation
console.log(dynamicInferredVariable); // Output: 5 apples

// Statically Typed Example

// Example 1: Static Typing
let staticVariable: number = 10; // variable is explicitly assigned a number
console.log(staticVariable); // Output: 10

staticVariable = "Hello, World!"; // Error: Type 'string' is not assignable to type 'number'
// Uncommenting the above line will result in a compilation error

// Example 2: Type Inference
let staticInferredVariable = 5; // variable is initially assigned a number
console.log(staticInferredVariable); // Output: 5

staticInferredVariable = staticInferredVariable + " apples"; // Error: Operator '+' cannot be applied to types 'number' and 'string'
// Uncommenting the above line will result in a compilation error

staticInferredVariable = staticInferredVariable + 3; // variable is reassigned with a number
console.log(staticInferredVariable); // Output: 8

const ingredient = "flour";
var ingredient2 = "sugar";
let ingredient3 = "eggs";

console.log(ingredient, ingredient2, ingredient3);

function cook(ingredients) {
  return `Cooking with ${ingredients}`;
}

const cook2 = (ingredients) => {
  return `Cooking with ${ingredients}`;
};

const cook3 = (ingredients) => `Cooking with ${ingredients}`;

const cook4 = function (ingredients) {
  return `Cooking with ${ingredients}`;
};

console.log(cook(ingredient));
console.log(cook2(ingredient2));
console.log(cook3(ingredient3));
console.log(cook4("butter"));

if (ingredient === "flour") {
  console.log("I am baking a cake");
} else if (ingredient === "sugar") {
  console.log("I am baking cookies");
} else {
  console.log("I am baking something delicious");
}

const isFlourAvailable =
  ingredient === "flour" ? "Flour is available" : "Flour is not available";
console.log(isFlourAvailable);

const isSugarAvailable =
  ingredient2 === "sugar" ? "Sugar is available" : "Sugar is not available";
console.log(isSugarAvailable);

const areEggsAvailable =
  ingredient3 === "eggs" ? "Eggs are available" : "Eggs are not available";
console.log(areEggsAvailable);

const ingredients = ["flour", "sugar", "eggs"];
const ingredients2 = [ingredient, ingredient2, ingredient3];

for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

for (let i = 0; i < ingredients2.length; i++) {
  console.log(ingredients2[i]);
}

// Looping through ingredients using for loop
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Looping through ingredients using for...of loop
for (const ingredient of ingredients) {
  console.log(ingredient);
}

// Looping through ingredients using forEach method
ingredients.forEach((ingredient) => {
  console.log(ingredient);
});

// Looping through ingredients using while loop
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Looping through ingredients using do...while loop
let j = 0;
do {
  console.log(ingredients[j]);
  j++;
} while (j < ingredients.length);

// Creating a class for Ingredient
class Ingredient {
  constructor(name) {
    this.name = name;
  }

  cook() {
    return `Cooking with ${this.name}`;
  }
}

// Creating objects using the Ingredient class
const flour = new Ingredient("flour");
const sugar = new Ingredient("sugar");
const eggs = new Ingredient("eggs");

console.log(flour.cook());
console.log(sugar.cook());
console.log(eggs.cook());

// Creating a simple object without using classes
const ingredientObj = {
  name: "flour",
  cook() {
    return `Cooking with ${this.name}`;
  },
};

console.log(ingredientObj.cook());


fetch('https://api.example.com/ingredients')
  .then(response => response.json())
  .then(data => {
    const ingredients = data.map(name => new Ingredient(name));
    console.log(ingredients);
  })
  .catch(error => {
    console.error('Error fetching ingredients:', error);
  });
