// -----------------------------
// 1) Get the elements we need
// -----------------------------
// These are the two color pickers and the element whose background we change.
const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const body = document.getElementById('gradient');

// -----------------------------
// 2) Build and apply the gradient
// -----------------------------
// This uses the current values from both inputs and sets a left-to-right gradient.
const setGradient = () => {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
};

// -----------------------------
// 3) Listen for color changes
// -----------------------------
// Every time either picker changes, we update the background immediately.
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
