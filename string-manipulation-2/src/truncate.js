/* exported truncate */
// define a function named truncate that
//   takes two parameters, a length and a ellipsis string
// create an empty string assigned to a result variable
// use the slice method to get rid of the string after the length value
//   concatenate an ellipsis to the result
// return the result

function truncate(length, string) {
  var result = '';
  result = string.substring(0, length);
  result += '...';
  return result;
}

// define a function that takes
//   two paramenters, a length value and any string value
// create and empty string assigned to a result varible
// use the substring method starting at the first index of each word
//   cut off the word at the designated length value index
// concatenate an ellipsis to the result
// return the result
