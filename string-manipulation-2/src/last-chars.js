/* exported lastChars */
// define a function named lastChars that
//   takes two parameters length and string
// set empty string and assign it to result variable
// use substring method to return the new string at the appropriate length
// return the result variable

function lastChars(length, string) {
  var result = '';
  result = string.slice(-length);
  return result;
}

// define a function named lastChars that
//   takes two parameters, length number and a string
// Take an empty string and assign it a result variable
// use the slice method of the string and
//   pass an argument of the negative value of the length
// return the result
