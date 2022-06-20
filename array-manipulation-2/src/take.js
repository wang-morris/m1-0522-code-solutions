/* exported take */
// define a function named take that
//   takes two parameters, array(array) and count(positive integer) -completed
// assign an emtpy array to a result variable -completed
// return array at count index
//   push the result into the array variable
// return the result

function take(array, count) {
  var result = [];
  for (var i = 0; i < count; i++) {
    if (array[i] === undefined) {
      result = [];
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

// a function is being defined name take that
//   takes two parameters an array and count(number)
// an empty array is being assigned to the variable result
// use a for loop to loop through the array
//   set the conditional expression to equal less than count
// if the array is undefined, the result return an empty array
//   else the values at array[i] will be pushed into the result array
// result is then returned
