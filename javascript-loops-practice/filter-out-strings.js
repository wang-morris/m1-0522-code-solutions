/* exported filterOutStrings */
function filterOutStrings(values) {
  var noStringValues = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      noStringValues.push(values[i]);
    }
  }
  return noStringValues;
}
