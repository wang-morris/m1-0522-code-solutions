/* exported isPalindromic */
// define a function named isPalindeomic that
//   takes one parameter, a string -completed
// use a for loop to loop through the string -completed
// if the the return of the string from string.length - 1
//   in reverse order === the string
// result is true

function isPalindromic(string) {
  string = string.replace(/[\W_]/g, '');
  for (var i = 0; i < (string.length - 1) / 2; i++) {
    var forwards = string[i];
    var backwards = string[(string.length - 1) - i];
    if (forwards !== backwards) {
      return false;
    }
  }
  return true;
}
// define a function named isPalindromic that
//   takes one parameter, a string
// make sure all non letter characters are not included
//   reassign new string into the string variable
// loop through the string
// create a forwards variable and a backwards variable
// use an if statement to compare values of forwards and backwards
// return false if they are not stricly equal
//   and true, in all other cases
