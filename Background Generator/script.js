// Select the color input elements and the body element
var color1 = document.querySelector('#color1');
var color2 = document.querySelector('#color2');
var body = document.getElementById('gradient');

// Function to set the background gradient based on the selected colors
function setGradient() {
  body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
}

// Add event listeners to the color input elements to call setGradient when the user selects a new color
color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);
