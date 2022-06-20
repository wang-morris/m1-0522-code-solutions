/* exported chunk */
function chunk(array, size) {
  var result = [];
  for (var i = 0; i < array.length; i += size) {
    var arrayPart = array.slice(i, i + size);
    result.push(arrayPart);
  }

  return result;
}
