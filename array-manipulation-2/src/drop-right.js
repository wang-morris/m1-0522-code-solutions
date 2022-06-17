/* exported dropRight */
// define a function named dropRight that
//   takes two parameters, an array and a count - completed
// create an empty array assigned to a result variable -completed
// use a for loop to loop through the array
// use the slice method to remove the elements after the the index represented by count
// return the result array;

function dropRight(array, count) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof count === 'number') {
      result = array.slice(array[-count], -count);
    } else {
      result = array.slice(array[0], -count);
    }
  }
  return result;
}

// define a function named dropRight
//   that takes two parameters an array, and count
// loop through the length of the array
//  if the array data type consists of numbers
//    use the slice method to remove array starting at -count index
//      the slice ends at -count
// else if the array consists of other data types
//   use the slice method starting at array at the first index
//     the slice ends at -count
// return the result
