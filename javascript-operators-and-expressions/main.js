var width = 5;
var height = 8;
var area = width * height;
console.log('area:', area);
console.log('typeof area:', typeof area);

var bill = 10;
var payment = 3;
var change = bill - payment;
console.log('change:', change);
console.log('typeof change:', typeof change);

var quizzes = 90;
var midterm = 80;
var final = 100;
var grade = (quizzes + midterm + final) / 3;
console.log('grade:', grade);
console.log('typeof grade:', typeof grade);

var firstName = 'Austin';
var lastName = 'Powers';
var fullName = firstName + ' ' + lastName;
console.log('Full Name:', fullName);
console.log('typeof fullName:', typeof fullName);

var pH = 5;
var isAcidic = pH < 7;
console.log('isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

var headcount = 20;
var isSparta = headcount === 300;
console.log('isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);

var motto = fullName;
// eslint-disable-next-line no-redeclare
var motto = fullName + ' is the GOAT';
console.log('motto:', motto);
console.log('typeof motto:', typeof motto);
