//Closures - the child scope has access to the parent scope even after the parent function has returned. This is because the child function maintains a reference to the variables in its outer function's scope.
const first = () => {
  const greet = 'Hi';
  const second = () => {
    alert(greet);
  };
  return second;
};
//The second function is returned and assigned to the variable newFunc. When newFunc is called, it still has access to the greet variable from the first function's scope, even though first has already finished executing.
const newFunc = first();
newFunc();

//Currying - the process of converting a function that takes multiple arguments into a function that takes them one at a time. This is useful for creating more specific functions from general ones.
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5); // This creates a new function that multiplies any number by 5.
console.log(multiplyBy5(2)); //Output: 10

//Compose - the process of combining two or more functions to produce a new function. This is useful for creating more complex functions from simpler ones.
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
console.log(compose(sum, sum)(5)); //Output: 7

//Avoiding Side Effects and Functional Purity - A function is considered pure if it always produces the same output for the same input and does not cause any side effects (like modifying external variables or state). This makes functions easier to reason about and test.
let a = 1; //This variable is in the global scope and can be modified by any function, leading to potential side effects.
const pureFunction = (num) => num * 2; // This function is pure because it always produces the same output for the same input and does not modify any external state.
//deterministic function - a function that always produces the same output for the same input. This is important for functional programming because it allows for easier reasoning about code and testing.
const deterministicFunction = (num) => num + 3; // This function is deterministic because it always produces the same output for the same input.
