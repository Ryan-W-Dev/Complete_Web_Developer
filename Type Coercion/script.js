// Type Coercion
// Type coercion is the process of converting a value from one type to another (such as strings to numbers, objects to booleans, etc.) in JavaScript. This can happen implicitly (automatically) or explicitly (manually).

// Type coercion can lead to unexpected results if not handled carefully. Here are some examples:
// Implicit coercion
console.log('5' + 1); // '51' (string concatenation)
console.log('5' - 1); // 4 (number subtraction)
console.log(true + 1); // 2 (true is coerced to 1)
console.log(false + 1); // 1 (false is coerced to 0)
1 == '1'; // true (implicit coercion)
1 === '1'; // false (no coercion, strict equality)
// Explicit coercion
console.log(Number('5') + 1); // 6 (string '5' is explicitly converted to number)

// Truthy and Falsy values
// In JavaScript, values can be classified as "truthy" or "falsy" when evaluated in a boolean context. Falsy values include false, 0, '', null, undefined, and NaN. All other values are considered truthy.
if (1) {
  console.log(5); // 5 (truthy value)
}

if (0) {
  console.log(5); // (falsy value, won't execute)
}

-0 === +0; // true (both are falsy and considered equal)

NaN === NaN; // false (NaN is not equal to itself)
