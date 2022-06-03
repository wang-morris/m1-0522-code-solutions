var student = {
  firstName: 'Morris',
  lastName: 'Wang',
  age: 25
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of full name:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'fitness attendant';

console.log('value of lives in Irvine:', student.livesInIrvine);
console.log('value of previous occupation:', student.previousOccupation);

var vehicle = {
  make: 'Audi',
  model: 'S3',
  year: 2022
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of "isConvertible":', vehicle['isConvertible']);
console.log(vehicle);

var pet = {
  name: 'Coconut',
  type: 'cat'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
