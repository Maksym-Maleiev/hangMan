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
  var guess = prompt("Guess a letter, or click Cancel to stop playing.");
  if (guess === null) {
    // We leave the game loop
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else {
    // Update the state of the game using the "guess" variable
    for (var j = 0; j < word.length; j++){
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetter--;
      }
    }
  }
  // End of game cycle
}