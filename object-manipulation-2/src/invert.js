/* exported invert */
// define a function named invert that
//   takes one parameter, a source object -completed
// create empty object and assign it to a result variable - completed
// use a for in loop - completed
//   set key = source[key]
//      set result = key -completed
// return result -completed

function invert(source) {
  var result = {};
  for (var key in source) {
    result[source[key]] = key;
  }
  return result;
}

// define a function named invert that
//   takes one parameter, source object
// create empty array and assign it to a result variable
// use a for in loop
//   key variable is assigned to result at source[key]
// return the result
