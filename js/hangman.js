// We create an array of words
var words = [
  "javascript",
  "monkey",
  "amazing",
  "pancake"
];

// Choose a random word
var word = words[Math.floor(Math.random() * words.length)];

// We set the array of answers
var answerArray = [];
for (var i = 0; i < word.length; i++){
  answerArray[i] = "_";
}

var remainingLetter = word.length;

// Game cycle
while (remainingLetter > 0) {
  // Show the player their progress
  alert(answerArray.join(" "));

  // Take input from the player
  var guess = prompt("Guess a letter, or click Cancel to stop playing.")
}