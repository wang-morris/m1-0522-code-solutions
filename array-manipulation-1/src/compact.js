/* exported compact */
// function compact(array) {
//   var newArray = [];
//   for (var i = 0; i < array.length; i++) {
//     if ((array[i] > 0) || (array[i])) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// }

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
