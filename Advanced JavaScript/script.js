// Ternary Operator
condition ? expressionIfTrue : expressionIfFalse;
// Example
let age = 18;
let canVote = age >= 18 ? 'Yes, you can vote.' : 'No, you cannot vote.';
console.log(canVote); // Output: Yes, you can vote.

// Switch Statement
function getDayName(dayNumber) {
  switch (dayNumber) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
  }
  return 'Invalid day number';
}

// let + const
// let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.
// const allows you to declare variables that cannot be reassigned after their initial assignment.

//Destructuring
const obj = { player: 'John', score: 100, wizardLevel: false };
const player = obj.player;
const score = obj.score;
let wizardLevel = obj.wizardLevel;

// Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.
const { player, score } = obj; // Destructuring example
let { wizardLevel } = obj; // Destructuring example

// Object Properties allow you to define properties in an object using variables or expressions as keys.
const name = 'John';
const obj = {
  [name]: 'Hello, John!',
  ['ray' + 'smith']: 'Hello, Ray Smith!',
};
console.log(obj); // Output: { John: 'Hello, John!', raysmith: 'Hello, Ray Smith!' }

// Shorthand Properties allow you to create object properties using variables with the same name as the property key.
const a = 'Simon';
const b = true;
const c = {};

const obj = {
  a, // Shorthand property name
  b, // Shorthand property name
  c, // Shorthand property name
};
console.log(obj); // Output: { a: 'Simon', b: true, c: {} }

// Template strings allow you to create strings that can include variables and expressions using backticks (`) and ${} syntax.
const name = 'John';
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Output: Hello, my name is John and I am 30 years old.

//Default arguments allow you to set default values for function parameters if no value or undefined is passed.
function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}

//Symbols are a new primitive type introduced in ES6 that can be used to create unique identifiers for object properties.
let sym1 = Symbol('description');
let sym2 = Symbol('description');
console.log(sym1 === sym2); // Output: false

// Arrow Functions provide a shorter syntax for writing functions and do not have their own 'this' context.
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
