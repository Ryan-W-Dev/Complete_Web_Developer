// This is a simple simulation of a login system and news feed display for a social media platform.
var database = [{ username: 'john_doe', password: 'password123' }];

// The newsFeed array contains objects representing posts made by users. Each object has a username and a timeline message.
var newsFeed = [
  { username: 'john_doe', timeline: 'Just had a great day!' },
  { username: 'jane_doe', timeline: 'Loving the new features on this platform!' },
  { username: 'sam_smith', timeline: "Can't wait for the weekend!" },
];

// The prompt function is used to get the username and password from the user. It displays a dialog box asking for input and returns the entered value.
var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

// The signIn function checks if the provided username and password match any entry in the database. If a match is found, it logs the news feed to the console. If not, it logs an error message.
function signIn(userName, password) {
  for (var i = 0; i < database.length; i++) {
    if (database[i].username === userName && database[i].password === password) {
      console.log(newsFeed);
      return;
    }
  }
  console.log('Sorry, wrong username and password.');
}
signIn(userNamePrompt, passwordPrompt);
