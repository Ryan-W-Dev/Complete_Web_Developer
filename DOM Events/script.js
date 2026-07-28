// Append a new list item to the unordered list when the button is clicked
var button = document.getElementById('enter');
var input = document.getElementById('myInput');
// Get the unordered list element
var ul = document.querySelector('ul');

// Add event listener to the button
button.addEventListener('click', function () {
  var li = document.createElement('li');
  // Check if the input value is not empty or just whitespace
  if (input.value.trim() !== '') {
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ''; // Clear the input field after adding the item
  }
});

// Add event listener to the input field for the 'Enter' key
input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';
  }
});
