/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var concatenatedWord = [];
  for (var i = 0; i < words.length; i++) {
    concatenatedWord.push(words[i] + suffix);
  }
  return concatenatedWord;
}
