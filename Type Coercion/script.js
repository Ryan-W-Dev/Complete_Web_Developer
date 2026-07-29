// Type coercion
// JavaScript can convert values from one type to another automatically or manually.

// 1. Implicit coercion (automatic)
console.log('5' + 1); // '51' -> string concatenation
console.log('5' - 1); // 4 -> number subtraction
console.log(true + 1); // 2 -> true becomes 1
console.log(false + 1); // 1 -> false becomes 0
console.log(1 == '1'); // true -> loose equality converts the value
console.log(1 === '1'); // false -> strict equality checks the type too

// 2. Explicit coercion (manual)
console.log(Number('5') + 1); // 6 -> the string is converted to a number

// 3. Truthy and falsy values
// Falsy values: false, 0, '', null, undefined, and NaN.
// Everything else is truthy.
if (1) {
  console.log(5); // Runs because 1 is truthy
}

if (0) {
  console.log(5); // Does not run because 0 is falsy
}

console.log(-0 === +0); // true -> both are treated as equal
console.log(NaN === NaN); // false -> NaN is not equal to itself
