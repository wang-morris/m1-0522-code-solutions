/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber++);
  }
  return numbers;
}
console.log('getNumbersToTen():', getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber += 2);
  }
  return evenNumbers;
}
console.log('getEvenNumbersToTwenty():', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count < times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log('repeatWord("hello", 15)', repeatWord('hello', 15));

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}
console.log(logEachCharacter('mcdonalds'));

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('doubleAll([1, 2, 3, 4, 5]):', doubleAll([1, 2, 3, 4, 5]));

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
console.log('getKeys({ firstName: "Bruce", lastName: "Willis", Occupation: "BAMF" })', getKeys({ firstName: 'Bruce', lastName: 'Willis', Occupation: 'BAMF' }));

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
console.log('getValues({ firstName: "Bruce", lastName: "Willis", Occupation: "BAMF" })', getValues({ firstName: 'Bruce', lastName: 'Willis', Occupation: 'BAMF' }));
