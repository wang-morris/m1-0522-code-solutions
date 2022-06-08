// The Math Object
var firstNumber = 3;
var secondNumber = 5;
var thirdNumber = 10;
var maximumValue = Math.max(firstNumber, secondNumber, thirdNumber);
console.log('maximumValue:', maximumValue);

var heroes = ['superman', 'spiderman', 'antman', 'catwoman', 'wonderwoman'];
var randomNumber = Math.random();
console.log('randomNumber:', randomNumber);
randomNumber *= heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

// Array Methods
var library = [
  { title: 'Diary of a Wimpy Kid', author: 'Jeff Kinney' },
  { title: 'Huckleberry Finn', author: 'Mark Twain' },
  { title: 'The Giver', author: 'Lois Lowry' }
];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);
var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library:', library);

// String Methods
var fullName = 'Morris Wang';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
