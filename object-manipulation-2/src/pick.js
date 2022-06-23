/* exported pick */
// define a function named pick that
//   takes two parameters, source and keys -completed
// create an empty object literal and assign it to a result variable - completed
// use a for loop to loop through object - completed
// use if statement to return key value pair if keys is found in the object -completed
//   push result into the object variable
// return the result

function pick(source, keys) {
  var result = {};
  for (var key in source) {
    if ((keys.includes(key)) && (source[key] !== undefined)) {
      result[key] = source[key];
    }
  }
  return result;
}
// define a function named pick that takes two parameter
//   source object, and keys array
// create an empty object and assign it to a result variable
// use a for in loop to loop throught the object
// use an if statement to find if keys is includued in the keys of the source object
//   if found in the object, those are properties are printed into the result object
//       check if any properties do not show up in the keys array, which will be ommited
// return the result
