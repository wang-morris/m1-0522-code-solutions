/* exported ransomCase */
// define a function named ransomCase that
//   takes a parameter, a string
// empty string assigned to a result variable
// use a for loop to loop over string
// use to upperCase method on every other index starting from index 1
//   use to lowerCase method on every other index starting index 0
// return result

function ransomCase(string) {
  var result = '';
  var splitString = string.split('');

  for (var i = 1; i < splitString.length; i += 2) {
    splitString[i] = splitString[i].toUpperCase();
  }
  for (var j = 0; j < splitString.length; j += 2) {
    splitString[j] = splitString[j].toLowerCase();
  }
  result = splitString.join('');
  return result;
}

// define a function called ransomCase that
//   takes one parameter, a string
// create an empter string assigned to a result variable
// split the string into an array using the split method
//   create a variable for the new array
// use a for loop to loop through every index starting from index 1
//   use the toUpperCase method for those indexes
// use another for loop but starting at index 0
//   use the toLowerCase method on those indexes
// join the array back into a string and assign it to the result
// resturn the result;
