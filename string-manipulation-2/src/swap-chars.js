/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var result = '';
  var splitString = string.split('');
  var placeholder = splitString[firstIndex];
  splitString[firstIndex] = splitString[secondIndex];
  splitString[secondIndex] = placeholder;
  result = splitString.join('');
  return result;
}
