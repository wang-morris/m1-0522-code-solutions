/* exported equal */
// a function is defined named equal that
//   take two parameter, first and second (arrays)
// use a for loop to check if the array of each index are all equal to each other
// if they are strictly equals, return true

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}

// Define a function named equal
//  that takes two parameters, first and second (arrays)
// check if arrays are equal length and return false if not
// Use a for loop to check if the arrays are equal at each index
// return false if they are not equal
// return true otherwise
