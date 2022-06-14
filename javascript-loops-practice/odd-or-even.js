/* exported oddOrEven */
function oddOrEven(numbers) {
  var newArray = [];
  var evenOrOdd = '';
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenOrOdd = 'even';
    } else if (numbers[i] % 2 === 1) {
      evenOrOdd = 'odd';
    }
    newArray.push(evenOrOdd);
  }
  return newArray;
}
