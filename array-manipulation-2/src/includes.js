/* exported includes */
// define a function named includes that
//   takes two parameters, an array and a value - completed
// false set equal to a result variable -completed
// for statement to loop over array -completed
//   if statement with expression if value === array at any index - completed
//     return true
// return result variable -completed

function includes(array, value) {
  var result = false;
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      result = true;
    }
  }
  return result;
}

// define a function named includes that
//   takes two parameters, an array and a value
// false set equal to a result variable
// for statement to loop over array
//   if statement with expression if value === array at any index
//     return true
// return result variable
