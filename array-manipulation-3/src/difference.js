/* exported difference */
// define a function named difference that
//   takes two parameters, first and second, both arrays -completed
// create an empty array assigned to a result variable -completed
// loop through both arrays -completed
//   check if any indexes of the first array are found in the second array -completed
//      push the non matching values into the result array
// return the result -completed
function difference(first, second) {
  var result = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      result.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      result.push(second[j]);
    }
  }
  return result;
}

// define a function named difference that
//   takes two parameters first and second, both arrays
// create an empty array assigned to a result variable
// use a for loop to loop throught the first array
//   declare if statement that checks if any indexes of the second array
//     are not included in the first array
//       if so, push those values into the result array
// use a for loop to loop throught the second array
//   declare if statement that checks if any indexes of the first array
//     are not included in the second array
//       if so, push those values into the result array
// return the result
