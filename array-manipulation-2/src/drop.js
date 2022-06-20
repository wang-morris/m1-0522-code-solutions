/* exported drop */
function drop(array, count) {
  var result = [];
  for (var i = count; i < array.length; i++) {
    if (array[i] === undefined) {
      result = [];
    } else {
      result.push(array[i]);
    }
  }
  return result;
}
