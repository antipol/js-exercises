function calculateMoney(day) {
  let hoursPerDay = [4, 6, 8, 10, 0, 2, 0];
  let earned = 0;
  for (let i = day - 1; i < hoursPerDay.length; i++) {
    earned += hoursPerDay[i] * 10;
  }
  return earned;
}
console.log(calculateMoney(7));



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

// function pension(currentAge, retireAge, wage, percentage) {
//   let workYears = retireAge - currentAge;
//   let savings = 12 * wage / 100 * percentage * workYears;
//   if (currentAge >= retireAge) {
//     return "Calculate your past memories";
//   } else {
//     return `You can retire in ${workYears} years. By then you will have saved up ${savings} euro!`;
//   }
// }

const pension = (currentAge, retireAge, wage, percentage) => {
  let workYears = retireAge - currentAge;
  let savings = 12 * wage / 100 * percentage * workYears;
  if (currentAge >= retireAge) {
    return "Calculate your past memories";
  } else {
    return `You can retire in ${workYears} years. By then you will have saved up ${savings} euro!`;
  }
}

console.log(pension(30, 70, 1500, 10));


// c4n y0u r34d th15?
// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
// Examples:
// hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
// hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
// hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"
// Notes For your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

const codeVersion = function(original) {
  return original.replace(/a/g, "4");
}

for (let i = 0; i < original.length; i++) {
  if (original[i] === a) {
    original = original[i].replace("a", "4");
  }

  return original.slice(original[i]);
}



console.log(codeVersion("Javascript"));
