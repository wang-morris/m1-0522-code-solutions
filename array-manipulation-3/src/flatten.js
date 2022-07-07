/* exported flatten */
function flatten(array) {
  var result = Array.prototype.concat.apply([], array);
  return result;
}
