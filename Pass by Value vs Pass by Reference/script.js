// Pass by value vs. pass by reference

// 1. Primitive values are passed by value
const num1 = 10;

function incrementValue(value) {
  value++;
  console.log('Inside function (pass by value):', value);
}

console.log('Before function call (pass by value):', num1);
incrementValue(num1);
console.log('After function call (pass by value):', num1);

// 2. Objects are passed by reference
const obj1 = { count: 10 };

function incrementReference(reference) {
  reference.count++;
  console.log('Inside function (pass by reference):', reference.count);
}

console.log('Before function call (pass by reference):', obj1.count);
incrementReference(obj1);
console.log('After function call (pass by reference):', obj1.count);

// 3. Extra examples to compare behavior
let a = 5;
let b = a;
console.log('Before changing b:', a, b);
b++;
console.log('After changing b:', a, b);

let obj = { a: 'a', b: 'b', c: { deep: 'Try and copy me' } };
let obj2 = obj; // Both variables point to the same object

obj2.a = 'changed';
console.log('After changing obj2.a:', obj);

let clone = Object.assign({}, obj); // Shallow copy
let clone2 = { ...obj }; // Shallow copy with spread syntax
let superClone = JSON.parse(JSON.stringify(obj)); // Deep copy

obj.c.deep = 'Hacked';

console.log('Original object:', obj);
console.log('Shallow copy with Object.assign:', clone);
console.log('Shallow copy with spread syntax:', clone2);
console.log('Deep copy:', superClone);
// Note: Be careful with deep copies, as they can be expensive in terms of performance and may not handle functions or special object types correctly. Such as superClone. You can use libraries like Lodash for more robust deep cloning if needed.
