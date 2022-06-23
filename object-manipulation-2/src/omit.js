/* exported omit */
function omit(source, keys) {
  var result = {};
  for (var key in source) {
    if ((!keys.includes(key)) && (source[key] !== undefined)) {
      result[key] = source[key];
    }
  }
  return result;
}
