// This is a simple JavaScript code snippet that demonstrates the use of loops to iterate through an array of to-do items.
var todos = ['Buy groceries', 'Clean the house', 'Walk the dog', 'Finish homework', 'Call mom'];

// Using a for loop to iterate through the array and log each to-do item to the console
for (var i = 0; i < todos.length; i++) {
  console.log(todos[i] + ' (using for loop)');
}
console.log('---');
// Using a while loop to achieve the same result
var j = 0;
while (j < todos.length) {
  console.log(todos[j] + ' (using while loop)');
  j++;
}
console.log('---');
// Using a for...of loop to iterate through the array
for (var todo of todos) {
  console.log(todo + ' (using for...of loop)');
}
console.log('---');
// Using a forEach method to iterate through the array
todos.forEach(function (todo) {
  console.log(todo + ' (using forEach method)');
});
console.log('---');
// Using a do...while loop to iterate through the array
var k = 0;
do {
  console.log(todos[k] + ' (using do...while loop)');
  k++;
} while (k < todos.length);
console.log('---');

var counter = 10;
// Using a for loop to count down from 10 to 1
for (var i = counter; i > 0; i--) {
  console.log(i);
}
console.log('---');
// Using a do...while loop to count down from 5 to 1
var countdown = 5;
do {
  console.log(countdown);
  countdown--;
} while (countdown > 0);
