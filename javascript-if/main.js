/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  var result;
  if (number < 5) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function isEven(number) {
  var result;
  if (number % 2 === 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function startsWithJ(string) {
  var result;
  if (string[0] === 'J') {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function isOldEnoughToDrink(person) {
  var result;
  if (person.age >= 21) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function isOldEnoughToDrive(person) {
  var result;
  if (person.age >= 16) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 0) {
    return false;
  }
}

function categorizeAcidity(pH) {
  var result;
  if (pH >= 0 && pH < 7) {
    result = 'acid';
  } else if (pH === 7) {
    result = 'neutral';
  } else if (pH <= 14 && pH > 7) {
    result = 'base';
  } else if (pH < 0 || pH > 14) {
    result = 'invalid pH level';
  }
  return result;
}

function introduceWarnerBro(name) {
  var result;
  if (name === 'yakko' || name === 'wakko') {
    result = 'We\'re the warner brothers!';
  } else if (name === 'dot') {
    result = 'I\'m cute~';
  } else {
    result = 'Goodnight everybody!';
  }
  return result;
}
