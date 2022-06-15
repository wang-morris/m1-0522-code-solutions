/* exported capitalize */
// define a new function call capitalize that
//   takes in one paramenter, word -complete
// capitalize first index of the string -complete
// lowercase all indexes after the first index of the string -complete

function capitalize(word) {
  var firstLetter = word[0].toUpperCase();
  var restOfWord = word.slice(1).toLowerCase();
  return firstLetter + restOfWord;
}

// define a function called capitalized that
//   takes one parameter, word
// create a variable for the first letter
//   use toUpperCase method on word at the first index and assign it to created variable above
// create variable for the rest of the word
//   use toLowerCase method on word, and remove the first index of the word
// concatenate the two variables and return the value
