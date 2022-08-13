/* exported union */
// define a function named union that
//   takes two parameters, first and second, both arrays -completed
// create an empty array and assign it to a result variable -completed
// combine both arrays into one
// Use indexOf method to check if value is found in the result,
// Push the value into the result array -completed
// return the result variable - completed
function union(first, second) {
  var result = [];
  var newArray = first.concat(second);
  for (var i = 0; i < newArray.length; i++) {
    if (result.indexOf(newArray[i]) === -1) {
      result.push(newArray[i]);
    }
  }
  return result;
}
// define a function named union that
//   takes two parameters, first and second, both arrays
// create an empty array and assign it to a result variable
// use the concat method to combine both arrays into one
//    assign the new array to a variable
// Use a for loop to loop through the length of the new array
//   Push each index of the array into the result as long as
//      it is not already found in the result array using
//        the index Of method
// return the result
