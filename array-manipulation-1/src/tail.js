
/* exported tail */
// define a function named tail that
//   takes in one parameter, array -completed
// create variable set equal to empty array -completed
// loop through the length of the array starting at index 1, using var i
//    push i into the array -completed
// return the variable for the new array -completed
function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
// define a function named tail that
//   takes in one parameter, array
// create a variable for the new array set to an empty array
// use a for loop to loop throught the length of the array starting from index 1; increments by 1
//   push the index value at each loop iteration into the new array
// return the new array variable
