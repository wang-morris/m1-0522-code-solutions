/* exported numVowels */
// define a function named numVowel
//   that takes in a parameter string -completed
// empty string assigned to result variable -completed
// loop throught the string
//   if statement to find all vowel in the string -completed
//      return then numeric value of all the vowels found
// return the result

function numVowels(string) {
  var result = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u' || string[i] === 'A' || string[i] === 'E' || string[i] === 'I' || string[i] === 'O' || string[i] === 'U') {
      result += 1;
    }
  }
  return result;
}

// define a function named numVowel
//   that takes one parameter, a string
// set a counter at 0 assigned to a variable
// use a for loop to loop over the length of the string
// use an if statement that checks if string[i] === any vowels
//   if any of those expressions are true, 1 gets added to the counter variable
// return the counter variable
