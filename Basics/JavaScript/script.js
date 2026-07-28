// This is a simple JavaScript script that logs "Hello, World!" to the console. You can run this code in a web browser's developer console or in a Node.js environment to see the output.
console.log('Hello, World!');

// This is a simple JavaScript script that logs "Hello, World!" to the console. You can run this code in a web browser's developer console or in a Node.js environment to see the output.

// The following function takes a name as an argument and logs a personalized greeting to the console.
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet('Alice');
greet('Bob');
greet('Charlie');

// The following function takes a name as an argument and logs a personalized farewell message to the console.
var sayBye = function (name) {
  console.log(`Goodbye, ${name}!`);
};
sayBye('Alice');
sayBye('Bob');
sayBye('Charlie');

// The following function logs a simple song to the console.
function sing() {
  console.log('La la la!');
}
sing();

// The following function takes two numbers as arguments and returns their sum.
function multiply(a, b) {
  return a * b;
}

//array of animals
var list = ['tiger', 'lion', 'cheetah', 'leopard', 'jaguar'];
console.log(list[1]); // logs 'lion'

// The following function takes an array as an argument and logs each element to the console.
function printList(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

list.push('elephant'); // adds 'elephant' to the end of the list
list.pop('tiger'); // removes 'tiger' from the list
printList(list);

// The following function takes an object as an argument and logs its properties to the console.
var user = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
  hobby: 'reading',
  married: true,
};
console.log(user.name); // logs 'John Doe'
console.log(user.age); // logs 30
console.log(user.email); // logs 'john.doe@example.com'
console.log(user.hobby); // logs 'reading'
console.log(user.married); // logs true

user.favoriteColor = 'blue'; // adds a new property to the user object
console.log(user.favoriteColor); // logs 'blue'

var keys = Object.keys(user); // gets an array of the keys in the user object
console.log(keys); // logs ['name', 'age', 'email', 'hobby', 'married', 'favoriteColor']

var values = Object.values(user); // gets an array of the values in the user object
console.log(values); // logs ['John Doe', 30, 'john.doe@example.com', 'reading', true, 'blue']

var entries = Object.entries(user); // gets an array of the key-value pairs in the user object
console.log(entries); // logs [['name', 'John Doe'], ['age', 30], ['email', 'john.doe@example.com'], ['hobby', 'reading'], ['married', true], ['favoriteColor', 'blue']]

// The following function takes an object as an argument and logs its properties to the console.
var credentials = {
  username: 'johndoe',
  password: 'password123',
};
console.log(credentials.username); // logs 'johndoe'
console.log(credentials.password); // logs 'password123'

// The following function takes an object as an argument and logs its properties to the console.
var user2 = {
  name: 'Jane Doe',
  age: 28,
  email: 'jane.doe@example.com',
};
console.log(user2.name); // logs 'Jane Doe'
console.log(user2.age); // logs 28
console.log(user2.email); // logs 'jane.doe@example.com'
