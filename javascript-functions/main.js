function convertMinutesToSeconds(minutes) {
  var totalSeconds = minutes * 60;
  return totalSeconds;
}

var totalSecondsResult = convertMinutesToSeconds(5);
console.log('totalSecondsResult:', totalSecondsResult);

function greet(name) {
  var greeting = 'Hey ' + name;
  return greeting;
}

var greetingResult = greet('Beavis');
console.log('greetingResult:', greetingResult);

function getArea(width, height) {
  var totalArea = width * height;
  return totalArea;
}

var totalAreaResult = getArea(17, 42);
console.log('totalAreaResult:', totalAreaResult);

function getFirstName(person) {
  var personFirstName = person.firstName;
  return personFirstName;
}

var personFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('personFirstNameResult:', personFirstNameResult);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var lastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('lastElementResult:', lastElementResult);
