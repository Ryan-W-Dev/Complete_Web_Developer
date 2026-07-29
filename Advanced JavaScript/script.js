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
