/* exported zip */
// a function is defined named zip that
//   takes two parameters first and second, both arrays -completed
// create an empty array and have it assigned to a result variable -completed
// use map method to group together same index of each array -completed
// push all the arrays into the result array
// return the result -completed
function zip(first, second) {
  if (first.length > second.length) {
    var removedAmount = first.length - second.length;
    first.splice(first.length - 1, removedAmount);
  } else if (first.length < second.length) {
    second.splice(second.length - 1, removedAmount);
  }
  var result = first.map((array, i) => [array, second[i]]);
  return result;
}
// defined a function named zip that
//   takes two parameters, first and second, arrays
// create a condition that checks if one array is longer than the other
//   use the splice method to remove the difference amount
//     so that there are no unpaired items (will always be 0 or 1)
// use the map method to create a new list of arrays
//   with each index of the first and second arrays listed together
//     assign to a result variable
// return the result;
