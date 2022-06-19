/* exported capitalizeWords */
function capitalizeWords(string) {
  var result = '';
  var words = string.split(' ');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
  }
  result = words.join(' ');
  return result;
}
