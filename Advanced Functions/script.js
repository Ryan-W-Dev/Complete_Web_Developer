//Advanced Functions

//Closures - the child scope has access to the parent scope even after the parent function has returned. This is because the child function maintains a reference to the variables in its outer function's scope.
const first = () => {
  const greet = 'Hi';
  const second = () => {
    alert(greet);
  };
  return second;
};

const newFunc = first();
newFunc();

//Currying - the process of converting a function that takes multiple arguments into a function that takes them one at a time. This is useful for creating more specific functions from general ones.
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
