/* exported takeRight */
function takeRight(array, count) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result = array.slice(-count);
  }
  return result;
}
