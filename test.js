// console.log("hello world");

// concatenation

// let bandName = "Nirvana";
// bandName = "HVOB";
// let favorite = "my favorite bands";
// console.log(bandName + " is one of " + favorite);

// typeof
// console.log("this is a " + typeof bandName);

// .length of string
// console.log(bandName.length);

// last letter
// console.log(bandName.charAt(bandName.length - 1));

// change to lower/upper case
// console.log(bandName.toLowerCase(), bandName.toUpperCase());

// conditional operator / ternary
// let temperature = 29;
// let outfit = temperature >= 25 ? "shorts" : "pants";
// console.log(outfit);

// index
// let name = "Trine";
// console.log(name[0]);

// console.log("this is an exercise in console logging");

// let sentence = "This is the value.";

// console.log(sentence);

// let firstName = "Trine";
// let lastName = "Lund";
// console.log(firstName, lastName);

// let personName = "Bob";
// let city = "NY city";
// let age = "69";
// let job = "marketing manager";
// let pet = "cat";

// console.log(
//   "My name is " +
//     personName +
//     ", I live in " +
//     city +
//     ", I'm " +
//     age +
//     " years old, I work as a " +
//     job +
//     " and I love my " +
//     pet +
//     "."
// );
// console.log(
//   `My name is ${personName}, I live in ${city}, I'm ${age} years old, I work as a ${job} and I love my ${pet}.`
// );
// let pet = "Billy is my dog";
// console.log(pet);
// console.log(pet[1], pet[5]);
// pet = "Billy-Albert-Einstein";
// console.log(pet[1], pet[5]);

// let name = "Trine";
// let age = 30;
// let year = 3067;
// console.log(`${name} is ${age} in ${year}`);

// let isMarried = false;
// console.log(`${name} is married: ${isMarried}`);

// let programmingLanguage = "JavaScript";
// let isFun = true;
// console.log(`${programmingLanguage} is fun: ${isFun}`);

// console.log(programmingLanguage.charAt(0), programmingLanguage.charAt(4));

// console.log(programmingLanguage.length);

let length = 16.78; //number - float
let lastName = "Johnson"; //string
let car = ""; //string
let isOpen = true; //boolean

console.log(typeof length);
console.log(typeof lastName);
console.log(typeof car);
console.log(typeof isOpen);

let ageMark = 15;
let ageJohn = "19";
// let oldest = "John is older than Mark: true";
// let youngest = "John is older than Mark: false";
console.log(typeof ageMark, typeof ageJohn);
// console.log(ageJohn > ageMark ? oldest : youngest);
let older = true;
console.log(`John is older than Mark: ${older}`);

let x;
console.log(typeof x);
x = "hello";
console.log(typeof x);
console.log(x.charAt(x.length - 1));
// above is the same as
console.log(x[x.length - 1]);
console.log(x.length, typeof x.length);

let a = 2;
let b = 5;
let c = 10;
console.log(a == b, a == c, b == c);
console.log(typeof (a == b, a == c, b == c));

// infinity is a number. X * Infinity = Infinity. X / Infinity = 0.
console.log(typeof Infinity);

let number = 3;
console.log(isNaN(number));
console.log("variable is NOT a number: " + isNaN(number));

console.log(typeof isNaN(number));
