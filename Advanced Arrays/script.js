// Advanced Arrays in JavaScript
const array = [1, 2, 3, 4, 5];

// Using forEach() method to double the values and store them in a new array
const double = [];
const newArray = array.forEach((num) => {
  double.push(num * 2);
});
console.log(double); // Output: [2, 4, 6, 8, 10]

// Using map() method to achieve the same result
const mapArray = array.map((num) => num * 2);
console.log(mapArray); // Output: [2, 4, 6, 8, 10]

// Using filter() method to get only even numbers
const evenNumbers = array.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Using reduce() method to get the sum of all numbers
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15
