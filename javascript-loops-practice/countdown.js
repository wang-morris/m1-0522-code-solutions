/* exported countdown */
function countdown(number) {
  var numberList = [];
  for (var i = number; i >= 0; i--) {
    numberList.push(i);
  }
  return numberList;
}
