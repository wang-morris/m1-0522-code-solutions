/* exported getKeys */
// define a function that takes
//   one parameter, object -completed
// create variable set to empty array
// create another variable set to object at each key using bracket notation
//    push that variable into the empty array
// return the array variable

function getKeys(object) {
  var result = [];
  for (var key in object) {
    result.push(key);
  }
  return result;
}

// define a function named getKeys that takes
//   one parameter, object
// assign an empty array to a result variable
// use a for in loop to access the property names of the object
//   push the property name into the result array
// return the result variable
