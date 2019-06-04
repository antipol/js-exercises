// Function = input(arguments/parameters), code, output (return value)

// Function declaration:
function greeting(firstName, lastName) {
  return "Hello " + firstName;
}

console.log(greeting("Phil")); //Hello Phil


// Function expression:
const adder = function(a, b) {
  return a + b;
}

console.log(adder(200, 150)); //350


// undefined for variable:
let square2 = function(num) {
  console.log(num);
}

square2(); //undefined --- because we haven't given an argument when we call the function


// Default arguments:
let leaderboard = function(name = "Max Musterman", score = 0) {
  return `${name} - ${score}`;
}

let match2 = leaderboard(undefined, 100);
console.log(match2); //Max Musterman, 100 --- use undefined to call the default argument (here Max Musterman)


// Arrow function - new in ES6
const adder2 = (a, b) => a + b;
console.log(adder2(100, 50)); //150 --- the fat arrow ( => ) works like return

// Global and local scope
// whats inside a function and its arguments are local, what is after return is local until you call the function, then it becomes available globally



function remainder(x, y) {
  let result = x % y;
  return result;
}
let sum = remainder(12, 7);
console.log(sum); //5
//x and y are arguments / parameters

function poundsToKg(pounds) {
  let kilogram = pounds * 0.45;
  return kilogram;
}
console.log(poundsToKg(10)); //4.5


function askName(firstName = "Jane", lastName = "Doe") {
  return "Hello " + firstName + " " + lastName;
}

console.log(askName("Alice", "Summer")); //Hello Alice Summer



function dataType(arg) {
  return typeof arg;
}

let typeIs = dataType(10);
console.log(typeIs); //number


// Write a function that accepts a number from 1 to 100 as a result of a test you gave to your students.
//
// If the result is lower than 50 then print Not Pass! Try again next time.
//
// If it is between 50-60 print the grade D.
//
// If it is between 61-80 print the grade C
//
// If it is between 81-90 print the grade B
//
// If it is between 91-98 print the grade A
//
// If it is 99 print 'Almost perfect'
//
// If it is 100 'Take a day-off tomorrow'
//
// Put different values and call the function multiple times to check your result.
//
function result(points) {
  if (points < 50) {
    console.log("Not Pass! Try again next time.");
  } else if (points < 61) {
    console.log("D");
  } else if (points < 81) {
    console.log("C");
  } else if (points < 91) {
    console.log("B");
  } else if (points < 99) {
    console.log("A");
  } else if (points === 99) {
    console.log("Almost perfect");
  } else if (points === 100) {
    console.log("Take a day off tomorrow");
  } else {
    console.log("You cheated!");
  }
}
result(61); //C


// Write a function that accepts any number and returns it's square value.
//
// Don't forget to validate always before that the accepted input of the function is always number. If not print an appropriate message to the console to inform the user that this action is not possible and prevent further code from running.

function square(num) {
  if (typeof num != "number") {
    return "This is not a number";
  } else {
    return num * num;
  }
}
console.log(square(5)); //25


function temperature(celsius) {
  let fahrenheit = celsius * 9 / 5 + 32;
  return fahrenheit
}

let tempConvert = temperature(33);
console.log(tempConvert); //91.4


function match(s1, s2) {
	return s1.toUpperCase().includes(s2.toUpperCase());
}

function isPlural(word) {
	return word[word.length -1] === "s";
}
console.log(isPlural("hey")); //false

function numArgs() {
	return arguments.length;
}
console.log(numArgs(1, 2, "hey")); //3

console.log(String(10));


function numberSyllables(word) {
	return word.split("-").length;
}
console.log(numberSyllables("hel-lo-you"));


// Input: weight on earth
// Output: weight on moon
const weightMoon = function(weightEarth) {
  return weightEarth / 9.81 * 1.622;
}
console.log(weightMoon(50)); //8.27

// OR
function spaceWeight(weightEarth) {
  let weightMoon2 = weightEarth / 9.81 * 1.622;
  return weightMoon2;
}
console.log(spaceWeight(50)); //8.27

//OR
const spaceWeight2 = weightEarth => weightEarth / 9.81 * 1.622;
console.log(spaceWeight2(50)); //8.27



// factorial 5 = 1 * 2 * 3 * 4 * 5 = 120

function factorial(n) {
  return (n != 2) ? n * factorial(n - 1) : 1;
}

console.log(factorial(5));


// Write a function that accepts several parameters and calculates the amount of money that will have been saved as a pension until a person retires. The parameters that should be defined are:
//
// The current age of the person // ex. 40
//
// The age that the person collects the pension // ex. 60
//
// The monthly wage the person earns // ex. 1000
//
// The percentage (as integer)  that the person saves each month // ex. 10%
//
// If the person has already retired then the message 'Calculate your past memories' should be printed.
//
// If not, then the program should calculate how many years remain until the person retires, the monthly income and take a specific percent of this income every month as saved money.
//
// Example: A lady is 40 years old, she retires at 65, she earns 2000€ per month and she saves  5% of it. How much money will she have saved until she retires? // This case is 30.000

function pension(currentAge, retireAge, wage, percentage) {
  let workYears = retireAge - currentAge;
  let savings = 12 * wage / 100 * percentage * workYears;
  if (currentAge >= retireAge) {
    return "Calculate your past memories";
  } else {
    return `You can retire in ${workYears} years. By then you will have saved up ${savings} euro!`;
  }
}
console.log(pension(30, 70, 1500, 10));
