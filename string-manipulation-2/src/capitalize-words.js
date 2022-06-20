/* exported capitalizeWord */

function capitalizeWord(word) {
  var result = '';
  var firstLetter = word[0].toUpperCase();
  var restOfWord = word.slice(1).toLowerCase();
  if (word.toUpperCase().includes('JAVASCRIPT')) {
    result = 'JavaScript';
  } else {
    result = firstLetter + restOfWord;
  }
  return result;
}
