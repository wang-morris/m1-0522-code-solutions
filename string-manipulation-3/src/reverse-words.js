/* exported reverseWords */
// define a function named reverseWords that -completed
//   takes one parameter, a string
// create an empty array assigned to a result variable -completed
// split string at the spaces if applicable -completed
//   assign array to a new variable
// use a for loop to loop through array -completed
// reverse each word in the array and  -completed
// push the it into the result
//   return the result
function reverseWords(string) {
  var result = [];
  var wordsArray = string.split(' ');
  for (var i = 0; i < wordsArray.length; i++) {
    result.push(wordsArray[i].split('').reverse().join(''));
  }
  return result.join(' ');
}

// define a function named reverseWords that
//   takes one parameter, string
// create an empty array and assign it to a result variable
// split the string at the spaces and assign it to array variable
// use a for loop to loop through the length of the array
//   use split method, reverse the word at the index, then join method
//     to create a new string
// return the result
