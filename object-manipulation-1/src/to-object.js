/* exported toObject */
// define a function names toObject that takes
//   one parameter keyValuePair, an array -completed
// create empty object assigned to variable -completed
// assign key as keyValuePair at the first index -completed
// assign value as the keyValuePair at the second index -completed
// push those variables into the result object
// return object -completed

function toObject(keyValuePair) {
  var resultObject = {};
  var key = keyValuePair[0];
  resultObject[key] = keyValuePair[1];
  return resultObject;
}

// define a function toObject that takes
//   one parameter, an array with key value pair strings called keyValuePair
// assign an empty result object to a variable
// assign the value of the first index of the keyValuePair array
// assign the value of keyValuePair at the second index to the result object at key value
// return the result object
