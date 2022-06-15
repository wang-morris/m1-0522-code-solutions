/* exported getWords */
// define a function named getWords that
//   takes in one parameter, string - completed
//  use split method at the spaces so separate strings into an array -completed

function getWords(string) {
  var array = string.split(' ');
  if (string === '') {
    return [];
  }
  return array;
}

// define a function named getWords that
//   takes a parameter, string
// set a variable for an array equal to the string split at its spaces using the split method
//   if the parameter is an empty string, return an empty array
// return the array
