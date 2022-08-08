/* exported titleCase */
function titleCase(title) {
  var result = [];
  var lowerCasedTitle = title.toLowerCase();
  var wordsArray = lowerCasedTitle.split(' ');
  var titleBeginning = true;
  var minorWords = ['and', 'or', 'but', 'nor', 'a', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  for (var i = 0; i < wordsArray.length; i++) {
    var word = wordsArray[i];
    if (word.toLowerCase() === 'javascript') {
      result.push('JavaScript');
    } else if (word.toLowerCase() === 'javascript:') {
      result.push('JavaScript:');
    } else if (word.toLowerCase() === 'api') {
      result.push('API');
    } else if (word.toLowerCase() === 'in-depth') {
      result.push('In-Depth');
    } else {
      var wordSplit = word.split('-');
      var nextWord = '';
      for (var j = 0; j < wordSplit.length; j++) {
        var wordSection = wordSplit[j];
        if (minorWords.includes(wordSection) && !titleBeginning) {
          nextWord += wordSection + '-';
        } else {
          nextWord += wordSection.substring(0, 1).toUpperCase() + wordSection.substring(1, wordSection.length) + '-';
        }
        if (titleBeginning) {
          titleBeginning = false;
        }
      }
      nextWord = nextWord.slice(0, -1);
      if (nextWord.charAt(nextWord.length - 1) === ':') {
        titleBeginning = true;
      }
      result.push(nextWord);
    }
  }

  return result.join(' ');
}
