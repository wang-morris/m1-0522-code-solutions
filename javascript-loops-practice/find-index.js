/* exported findIndex */
function findIndex(array, value) {
  var index = '';
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    } else {
      index = -1;
    }
  }
  return index;
}
