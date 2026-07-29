// Advanced loops quick guide
// for...of = use when you want each value/item
// for...in = use when you want keys/indexes
// Best practice: for arrays, use for...of most of the time.
const basket = [
  { name: 'apples', quantity: 2, price: 1.5 },
  { name: 'bananas', quantity: 3, price: 0.75 },
  { name: 'oranges', quantity: 1, price: 1.25 },
];

// for...of gives each basket item directly
for (const item of basket) {
  const totalPrice = item.quantity * item.price;
  console.log(`You have ${item.quantity} ${item.name} for a total of $${totalPrice.toFixed(2)}`);
}

// for...in gives indexes (0, 1, 2), not the item itself
for (const item in basket) {
  const totalPrice = basket[item].quantity * basket[item].price;
  console.log(
    `You have ${basket[item].quantity} ${basket[item].name} for a total of $${totalPrice.toFixed(2)}`
  );
}

// Example helper: add all item costs together
function calculateTotalCost(basket) {
  let totalCost = 0;
  for (const item of basket) {
    totalCost += item.quantity * item.price;
  }
  console.log(`The total cost of all items in the basket is $${totalCost.toFixed(2)}`);
}
