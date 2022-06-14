/* exported reverse */
// define a function name reverse that
//   takes in one parameter, array -completed
// create a variable for the new array set to an empty array
// use a for loop that starts at the last index of the array -completed
//   push the value of the array at the index of each iteration into the new array -completed
// return the new array -completed
function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
// define a function name reverse that
//   takes in one parameter, array
// create a variable for the new array set to an empty array
// use a for loop that starts at the last index of the array, loops until the first index of the array, and decrements by 1
//   push the value of the array at the index of each iteration into the new array
// return the new array
