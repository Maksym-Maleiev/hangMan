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